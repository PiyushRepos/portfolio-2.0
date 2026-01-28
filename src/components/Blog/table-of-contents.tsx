"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TOCItem {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  toc: TOCItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className="hidden space-y-6 lg:block">
      <div className="flex items-center gap-2">
        <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground/90">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          On this page
        </h3>
      </div>
      <nav className="relative flex flex-col gap-3 text-sm text-balance">
        {/* Decorative vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
        
        {toc.map((item) => {
           // We typically only want h2 and h3 in sidebar to avoid clutter
           if (item.level > 3) return null;
           
           return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative pl-4 transition-colors duration-200 hover:text-foreground",
                activeId === item.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(item.id);
              }}
            >
              {activeId === item.id && (
                 <motion.div
                    layoutId="active-toc-indicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                 />
              )}
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
