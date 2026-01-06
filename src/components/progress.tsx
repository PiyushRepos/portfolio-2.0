"use client";
import { motion, useScroll } from "motion/react";

function Progress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, originX: 0 }}
      className="bg-muted-foreground fixed inset-x-0 z-10 h-[5px] rounded-2xl"
    />
  );
}

export default Progress;
