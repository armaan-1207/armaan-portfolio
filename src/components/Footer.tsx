export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        {/* Left: terminal exit prompt */}
        <div className="font-mono text-sm">
          <span className="text-primary">root@armaan</span>
          <span className="text-foreground/40">:~$ </span>
          <span className="text-secondary">exit</span>
          <span className="ml-1">
            <span className="inline-block h-[0.9em] w-[0.5em] animate-blink bg-primary align-middle opacity-80" />
          </span>
        </div>

        {/* Right: copyright */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
            all systems nominal
          </span>
          <span>
            © 2026{" "}
            <span className="text-primary">Armaan Malhotra</span>
            {" "}— built with React, Spline &amp; Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
