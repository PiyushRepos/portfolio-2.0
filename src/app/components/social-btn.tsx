import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React from "react";

function SociallBtn({
  icon,
  title = "",
  href = "#",
}: {
  icon?: React.ReactNode;
  title?: string;
  href?: string;
}) {
  return (
    <Link target="_blank" href={href}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="shadow-[4px_4px_0_0_var(--color-neutral-300)] active:shadow-[0px_0px_0_0_var(--color-neutral-300)] text-neutral-500 hover:text-neutral-600 dark:text-muted-foreground dark:hover:text-accent-foreground dark:shadow-[4px_4px_0_0_var(--color-neutral-700)] dark:active:shadow-[0px_0px_0_0_var(--color-neutral-700)] cursor-pointer hover:scale-105 active:scale-100 transition-transform duration-200 ease-in-out"
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  );
}

export default SociallBtn;
