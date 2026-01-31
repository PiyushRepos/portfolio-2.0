import { cn } from "@/lib/utils";
import React from "react";

type Color = "blue" | "green" | "pink" | "purple" | "red" | "orange";

interface HighlightProps {
  children: React.ReactNode;
  color?: Color;
}

export default function Highlight({
  children,
  color,
}: HighlightProps): React.JSX.Element {
  return (
    <mark
      className={cn(
        "rounded-xs px-1 py-0.5 font-medium",
        color === "blue" && "bg-blue-200 text-blue-800",
        color === "green" && "bg-green-200 text-green-800",
        color === "pink" && "bg-pink-200 text-pink-800",
        color === "purple" && "bg-purple-200 text-purple-800",
        color === "red" && "bg-red-200 text-red-800",
        color === "orange" && "bg-orange-200 text-orange-800",
        !color && "bg-yellow-200 text-yellow-800",
      )}
    >
      {children}
    </mark>
  );
}
