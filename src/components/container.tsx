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
        `container h-screen max-w-3xl mx-auto shadow-md shadow-muted px-4`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
