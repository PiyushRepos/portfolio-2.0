"use client";
import React from "react";
import { Button } from "./ui/button";
import { Earth, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function ThemeToggler() {
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
          className="cursor-pointer shadow-[inset_0_0_3px_2px_var(--color-neutral-300)] dark:shadow-[inset_0_0_3px_2px_var(--color-neutral-800)]"
        >
          <Earth className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Toggle theme</TooltipContent>
    </Tooltip>
  );
}

export default ThemeToggler;
