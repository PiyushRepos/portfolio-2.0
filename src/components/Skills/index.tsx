"use client";

import { Swords } from "lucide-react";
import { motion, spring } from "motion/react";
import { useRef } from "react";
import Subheading from "../subheading";
import { techIcons } from "../icons";
import { cn } from "@/lib/utils";

function Skills() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <Subheading
        text="Skills"
        upperText="Tools in My Arsenal"
        icon={<Swords />}
      />
      <motion.div
        ref={constraintsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-background border-muted flex w-full flex-wrap gap-4 rounded-lg border px-2 py-4 shadow-sm"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
            dragElastic={0.2}
            whileDrag={{ cursor: "grabbing" }}
            initial={{ y: -10, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.025 * index,
              ease: "easeInOut",
            }}
            className={cn(
              `bg-secondary border-accent-foreground inline-flex cursor-grab items-center gap-2 rounded-lg border border-dashed px-2 py-1 active:cursor-grabbing`,
              tech.classes,
            )}
          >
            {tech.icon && (
              <div className="size-5 flex-shrink-0 rounded-lg">{tech.icon}</div>
            )}
            <p className="font-bold">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
