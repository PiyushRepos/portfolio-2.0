import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type WakaTimeDay = {
  grand_total?: {
    total_seconds?: number;
  };
};

type WakaTimeHeartbeat = {
  time?: number;
};

type ActivityPayload = {
  status: "coding" | "idle";
  lastActive: string;
  activeDuration: string;
  totalToday: string;
  totalYesterday: string;
  editor: string;
  source: "wakatime" | "fallback";
};

const WORK_SESSION_GAP_SECONDS = 15 * 60;

function formatDuration(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);

  if (hours === 0 && minutes === 0) {
    return "0m";
  }

  if (hours === 0) {
    return `${minutes}m`;
  }

  return `${hours}h ${minutes}m`;
}

function fallbackPayload(): ActivityPayload {
  return {
    status: "idle",
    lastActive: new Date().toISOString(),
    activeDuration: "0m",
    totalToday: "2h 30m",
    totalYesterday: "4h 15m",
    editor: "VS Code",
    source: "fallback",
  };
}

function toDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function basicAuthHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`;
}

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(fallbackPayload(), { status: 200 });
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const start = toDateOnly(yesterday);
  const end = toDateOnly(today);
  const authHeader = basicAuthHeader(apiKey);

  // Use the user's current date logic or just fetch today
  // WakaTime API usually defaults to user's timezone if configured in dashboard
  // But here we are on a server (likely UTC)

  // To ensure we get the latest heartbeats regardless of day boundary issues,
  // we can't easily guess the user's timezone offset without config.
  // However, fetching "today" should work if the user's laptop and this server agree on the date.

  try {
    const [summaryResponse, heartbeatResponse] = await Promise.all([
      fetch(
        `https://wakatime.com/api/v1/users/current/summaries?start=${start}&end=${end}`,
        {
          headers: { Authorization: authHeader },
          next: { revalidate: 0 }, // Disable cache for real-time status
        },
      ),
      fetch(`https://wakatime.com/api/v1/users/current/heartbeats?date=today`, {
        headers: { Authorization: authHeader },
        next: { revalidate: 0 }, // Disable cache for real-time status
      }),
    ]);

    if (!summaryResponse.ok) {
      // If rate limited or error, fallback
      return NextResponse.json(fallbackPayload(), { status: 200 });
    }

    const summaryJson = (await summaryResponse.json()) as {
      data?: WakaTimeDay[];
    };
    const summaryDays = summaryJson.data ?? [];

    const yesterdaySeconds = summaryDays[0]?.grand_total?.total_seconds ?? 0;
    const todaySeconds = summaryDays[1]?.grand_total?.total_seconds ?? 0;

    let activeDuration = 0;
    let isCoding = false;
    let lastActive = new Date().toISOString();

    if (heartbeatResponse.ok) {
      const heartbeatJson = (await heartbeatResponse.json()) as {
        data?: WakaTimeHeartbeat[];
      };

      const beats = (heartbeatJson.data ?? [])
        .map((b) => b.time) // Assuming heartbeat has timestamp
        .filter((t): t is number => typeof t === "number")
        .sort((a, b) => a - b);

      if (beats.length > 0) {
        const lastHeartbeat = beats[beats.length - 1];
        const now = Date.now() / 1000;

        // Calculate session start
        let sessionStart = lastHeartbeat;
        for (let i = beats.length - 2; i >= 0; i--) {
          if (beats[i + 1] - beats[i] > WORK_SESSION_GAP_SECONDS) {
            break;
          }
          sessionStart = beats[i];
        }

        // If last heartbeat is recent (within 20 mins), status is coding
        if (now - lastHeartbeat <= 20 * 60) {
          isCoding = true;
          activeDuration = now - sessionStart;
        } else {
          isCoding = false;
        }
        lastActive = new Date(lastHeartbeat * 1000).toISOString();
      }
    }

    const payload: ActivityPayload = {
      status: isCoding ? "coding" : "idle",
      lastActive,
      activeDuration: formatDuration(activeDuration),
      totalToday: formatDuration(todaySeconds),
      totalYesterday: formatDuration(yesterdaySeconds),
      editor: "VS Code",
      source: "wakatime",
    };

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json(fallbackPayload(), { status: 200 });
  }
}
