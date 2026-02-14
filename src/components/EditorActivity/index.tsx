"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Terminal, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

type ActivityPayload = {
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

export default function EditorActivity() {
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

  const isCoding = activity.status === "coding";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-6 flex w-fit items-center gap-3 rounded-2xl border border-black/5 bg-white/50 py-2 pr-5 pl-2 shadow-sm backdrop-blur-md transition-all hover:bg-white/80 dark:border-white/5 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/80"
    >
      <div
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
          isCoding
            ? "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400"
            : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
        )}
      >
        {loading ? (
          <div className="size-4 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
        ) : isCoding ? (
          <Terminal className="size-5" />
        ) : (
          <Coffee className="size-5" />
        )}

        {isCoding && !loading && (
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
          {loading ? "Syncing..." : isCoding ? "Live Status" : "Today's Stats"}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            {loading ? "Checking..." : isCoding ? "Coding Now" : "Resting"}
          </span>
          {!loading && (
            <>
              <span className="text-xs text-neutral-300 dark:text-neutral-600">
                |
              </span>
              <span className="font-mono text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {isCoding
                  ? activity.activeDuration
                  : `${activity.totalToday} coded`}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
