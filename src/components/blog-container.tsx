import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function BlogContainer({ children, className = "" }: Props) {
  return (
    <div
      className={cn(
        `shadow-muted prose dark:prose-invert prose-lg text-primary relative container mx-auto min-h-screen max-w-3xl space-y-8 overflow-x-hidden px-4 py-12 pt-20 pb-8 shadow-md`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default BlogContainer;
