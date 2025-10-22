import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className = "" }: Props) {
  return (
    <div
      className={cn(
        `shadow-muted relative container mx-auto min-h-screen max-w-3xl space-y-12 overflow-x-hidden px-4 pb-4 shadow-md`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
