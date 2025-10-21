import React from "react";
import { Props } from "./type";
import { cn } from "@/lib/utils";

export default function Shadcn({ className }: Props) {
  return (
    <svg viewBox="0 0 256 256" className={cn("size-5", className)}>
      <path d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="25"
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
  );
}
