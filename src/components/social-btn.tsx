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
  name = "",
  href = "#",
}: {
  icon?: React.ReactNode;
  name?: string;
  href?: string;
}) {
  return (
    <Link target="_blank" href={href}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="dark:text-muted-foreground dark:hover:text-accent-foreground cursor-pointer text-neutral-500 shadow-[4px_4px_0_0_var(--color-neutral-300)] transition-transform duration-200 ease-in-out hover:scale-105 hover:text-neutral-600 active:scale-100 active:shadow-[0px_0px_0_0_var(--color-neutral-300)] dark:shadow-[4px_4px_0_0_var(--color-neutral-700)] dark:active:shadow-[0px_0px_0_0_var(--color-neutral-700)]"
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  );
}

export default SociallBtn;
