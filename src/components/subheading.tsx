"ues client";
import { FolderKanban } from "lucide-react";
import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

type Props = {
  icon?: React.ReactNode;
  text: string;
  upperText?: string;
  className?: string;
  description?: string;
};

function Subheading({ text, upperText, icon, description, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={cn(
        "mb-6 transition-transform duration-300 hover:translate-x-2",
        className,
      )}
    >
      <p className="text-muted-foreground text-left text-sm font-semibold">
        {upperText}
      </p>
      <h2 className="text-primary mb-1 flex items-center gap-2 text-2xl font-extrabold">
        <span>{icon ? icon : <FolderKanban />}</span>
        {text}
      </h2>
      {description && (
        <p className="text-muted-foreground text-left text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default Subheading;
