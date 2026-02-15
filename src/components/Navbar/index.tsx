"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function Navbar() {
  return (
    <nav className="fixed top-2 right-0 left-0 z-50 mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-neutral-200/50 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/80">
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-100 ring-2 ring-white dark:bg-neutral-800 dark:ring-neutral-900">
                <Link
                  href="/"
                  className="relative h-full w-full overflow-hidden rounded-md"
                >
                  <Image
                    src="/profile_image.jpg"
                    alt="Piyush Kumar"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <span>Piyush Kumar</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
        <Link
          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          href="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          href="/#about"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
