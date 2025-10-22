"use client";

import { Swords } from "lucide-react";
import { motion } from "motion/react";
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
        className="bg-background border-muted flex w-full flex-wrap gap-4 rounded-lg border px-2 py-4 shadow-sm"
      >
        {techIcons.map((tech) => (
          <motion.div
            key={tech.name}
            dragConstraints={constraintsRef}
            drag
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className={cn(
              `bg-secondary border-accent-foreground inline-flex cursor-grab items-center gap-2 rounded-lg border border-dashed px-2 py-1 active:cursor-grabbing`,
              tech.classes,
            )}
          >
            <div className="size-5 flex-shrink-0 rounded-lg">{tech.icon}</div>
            <p className="font-bold">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
