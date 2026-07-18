import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");
  const ss = time.getSeconds().toString().padStart(2, "0");

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded border border-primary/25 bg-[#0a0e14]/70 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur-md sm:flex"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#00ff9d] animate-pulse" />
      <span className="text-primary/80">SYSTEM:</span>
      <span className="text-foreground/80">ONLINE</span>
      <span className="text-border">|</span>
      <span className="tabular-nums text-foreground/80">
        {hh}:{mm}:{ss}
      </span>
    </div>
  );
}
