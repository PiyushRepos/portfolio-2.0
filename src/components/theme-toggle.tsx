"use client";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function ThemeToggleer() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={toggleTheme}
          className="cursor-pointer shadow-[inset_0_0_3px_2px_var(--color-neutral-300)] text-neutral-500 hover:text-neutral-600 dark:text-muted-foreground dark:hover:text-accent-foreground dark:shadow-[4px_4px_0_0_var(--color-neutral-700)] dark:active:shadow-[0px_0px_0_0_var(--color-neutral-700)] hover:scale-105 active:scale-100 transition-transform duration-200 ease-in-out relative"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Toggle theme</TooltipContent>
    </Tooltip>
  );
}

export default ThemeToggleer;
