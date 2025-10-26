"use client";
import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 28,
  });

  return (
    <motion.div
      style={{ scaleX, originX: 0 }}
      className="bg-primary fixed inset-x-0 z-10 h-[5px] rounded-2xl"
    />
  );
}

export default Progress;
