import Image from "next/image";
import ThemeToggler from "../theme-toggle";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function Navbar() {
  return (
    <nav className="bg-background/10 border-secondary-foreground/20 fixed top-2 right-0 left-0 z-40 mx-auto flex max-w-3xl items-center justify-between rounded-2xl border px-4 py-2 shadow-md backdrop-blur-xl">
      <div>
        <div className="relative h-10 w-10 rounded-md select-none">
          <div className="relative z-10">
            <Image
              src="/profile_image.jpg"
              alt="Profile Picture"
              height={100}
              width={100}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="border-secondary-foreground/50 absolute -right-0.5 -bottom-0.5 z-40 h-[10.5px] w-[10.5px] animate-pulse rounded-full border bg-green-400" />
            </TooltipTrigger>
            <TooltipContent>Online</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="text-primary flex items-center gap-4 text-sm font-medium">
        <Link href={"/"}>Home</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#about"}>About</Link>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
