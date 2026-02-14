"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type ActivityPayload = {
  status: "coding" | "idle";
  lastActive: string;
  activeDuration: string;
  totalToday: string;
  totalYesterday: string;
  editor: string;
  source: "wakatime" | "fallback";
};

const FALLBACK: ActivityPayload = {
  status: "idle",
  lastActive: new Date().toISOString(),
  activeDuration: "0m",
  totalToday: "0m",
  totalYesterday: "0m",
  editor: "VS Code",
  source: "fallback",
};

const ActivityContext = createContext<{
  activity: ActivityPayload;
  loading: boolean;
}>({
  activity: FALLBACK,
  loading: true,
});

export function CodingActivityProvider({ children }: { children: ReactNode }) {
  const [activity, setActivity] = useState<ActivityPayload>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function loadActivity() {
      try {
        const response = await fetch("/api/coding-activity", {
          cache: "no-store",
        });
        if (!response.ok) throw new Error();
        const payload = await response.json();
        if (alive) setActivity(payload);
      } catch {
        if (alive) setActivity(FALLBACK);
      } finally {
        if (alive) setLoading(false);
      }
    }

    loadActivity();
    const interval = setInterval(loadActivity, 60_000);

    return () => {
      alive = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <ActivityContext.Provider value={{ activity, loading }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useCodingActivity() {
  return useContext(ActivityContext);
}
