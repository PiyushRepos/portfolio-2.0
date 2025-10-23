import Image from "next/image";
import ThemeToggler from "../theme-toggle";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-background/10 border-secondary-foreground/20 fixed top-2 right-0 left-0 z-40 mx-auto flex max-w-3xl items-center justify-between rounded-2xl border px-4 py-2 shadow-md backdrop-blur-xl">
      <div>
        <div className="h-10 w-10 overflow-hidden rounded-md">
          <Image
            src="/profile_image.jpg"
            alt="Profile Picture"
            height={100}
            width={100}
            className="h-full w-full object-cover"
          />
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
