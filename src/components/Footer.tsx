export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
        <div>
          <span className="text-primary">$</span> echo "designed & built by alex_nakamura ·{" "}
          <span className="text-secondary">2026</span>"
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
            all systems nominal
          </span>
          <span>v3.14.15</span>
        </div>
      </div>
    </footer>
  );
}
