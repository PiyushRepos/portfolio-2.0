import ThemeToggler from "../theme-toggle";

function Navbar() {
  return (
    <nav className="bg-background/10 border-secondary-foreground/20 fixed top-2 right-0 left-0 z-40 mx-auto flex max-w-3xl items-center justify-between rounded-2xl border px-4 py-2 shadow-md backdrop-blur-xl">
      <div>
        <div className="h-5 w-5 rounded-full bg-black dark:bg-white" />
      </div>
      <div className="text-primary flex items-center gap-4 text-sm font-medium">
        <h4>Home</h4>
        <h4>Blog</h4>
        <h4>About</h4>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
