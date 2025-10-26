"use client";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

function CTA() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 }}
        className="border-secondary-foreground/30 bg-background/50 relative flex w-full flex-col items-center justify-between gap-4 rounded-lg border border-dashed px-4 py-6 shadow md:flex-row"
      >
        <span className="-z-10- absolute top-4 text-lg text-neutral-400/30 dark:text-neutral-300/20">
          <Quote size={45} className="rotate-[182deg]" />
        </span>
        <div className="space-y-3">
          <p className="relative z-10 font-mono text-sm font-medium text-pretty text-zinc-600 italic sm:text-base dark:text-zinc-400">
            &ldquo;I may be new to companies, but I&lsquo;m not new to building
            real products.&rdquo;
          </p>
          <p className="ml-auto w-fit font-mono text-sm text-zinc-700 italic sm:text-base dark:text-zinc-300">
            &mdash; Piyush Kumar
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default CTA;
