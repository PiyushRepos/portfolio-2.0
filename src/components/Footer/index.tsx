import React from "react";
import { socialLinks } from "@/components/Hero/links";
import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function Footer() {
  return (
    <footer className="bg-background/50 border-secondary-foreground/30 w-full rounded-sm border-t px-6 py-4 shadow dark:border-neutral-700 dark:bg-neutral-900">
      {/* socials */}
      <div>
        <div className="mb-4 flex items-center justify-center space-x-4">
          {socialLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="hover:text-primary text-neutral-500 transition-colors"
                >
                  <span>{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{link.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <p className="mb-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
        Design and Developed by{" "}
        <Link
          href="https://x.com/_PiyushDev"
          className="text-muted-foreground underline"
          target="_blank"
        >
          Piyush Kumar
        </Link>
      </p>
      <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} Piyush Kumar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
