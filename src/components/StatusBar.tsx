import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = time ? time.getHours().toString().padStart(2, "0") : "--";
  const mm = time ? time.getMinutes().toString().padStart(2, "0") : "--";
  const ss = time ? time.getSeconds().toString().padStart(2, "0") : "--";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden items-center gap-2.5 rounded-full border border-primary/30 bg-[#060a12]/85 px-4 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground shadow-[0_0_25px_rgba(0,0,0,0.8)] backdrop-blur-md sm:flex"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#00ff9d] animate-pulse" />
      <span className="text-primary/90 font-bold">SYSTEM:</span>
      <span className="text-foreground font-semibold">ONLINE</span>
      <span className="text-border">|</span>
      <span className="tabular-nums text-foreground/90 font-semibold">
        {hh}:{mm}:{ss}
      </span>
    </div>
  );
}
