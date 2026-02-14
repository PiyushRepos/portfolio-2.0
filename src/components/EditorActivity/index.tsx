"use client";

import { motion } from "motion/react";
import { Terminal, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCodingActivity } from "@/hooks/use-coding-activity";

export default function EditorActivity() {
  const { activity, loading } = useCodingActivity();

  const isCoding = activity.status === "coding";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 flex w-full items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white/80 p-4 shadow-sm backdrop-blur-xl transition-all hover:bg-white/90 dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:bg-neutral-900/90"
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-inner transition-colors",
            isCoding
              ? "border-green-500/20 bg-green-500/10"
              : "border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800",
          )}
        >
          {loading ? (
            <div className="size-5 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
          ) : isCoding ? (
            <Terminal className="size-6 text-green-600 dark:text-green-400" />
          ) : (
            <Coffee className="size-6 text-neutral-500 dark:text-neutral-400" />
          )}

          {isCoding && !loading && (
            <span className="absolute -top-1 -right-1 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-neutral-900"></span>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <h3 className="text-xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            {loading
              ? "Syncing..."
              : isCoding
                ? "Live Status"
                : "Coding Activity"}
          </h3>
          <div className="text-sm font-medium text-neutral-900 dark:text-white">
            {loading ? (
              <div className="h-5 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            ) : isCoding ? (
              <span className="flex items-center gap-2">
                Currently coding in{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {activity.editor}
                </span>
              </span>
            ) : (
              <span>Focusing on learning & building</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-0.5 text-right">
        <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
          {isCoding ? "Session" : "Total Today"}
        </div>
        <div className="font-mono text-xl font-bold text-neutral-900 dark:text-white">
          {loading ? (
            <div className="h-7 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
          ) : isCoding ? (
            activity.activeDuration
          ) : (
            activity.totalToday
          )}
        </div>
        {!isCoding && !loading && activity.totalToday === "0m" && (
          <div className="text-[10px] text-neutral-400">
            Yesterday: {activity.totalYesterday}
          </div>
        )}
      </div>
    </motion.div>
  );
}
