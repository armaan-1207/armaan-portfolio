import { useEffect, useState } from "react";

const LINES = [
  "Initializing systems...",
  "Loading security modules...",
  "Establishing secure connection...",
  "Access granted.",
];

const TOTAL_MS = 2800;
const PER_LINE = TOTAL_MS / LINES.length;
const CHAR_MS = 22;

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [progress, setProgress] = useState(0);

  // Progress bar
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / TOTAL_MS) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  // Typing
  useEffect(() => {
    if (lineIdx >= LINES.length) return;
    const full = LINES[lineIdx];
    setTyped("");
    let i = 0;
    const charTimer = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(charTimer);
    }, CHAR_MS);
    const nextTimer = setTimeout(() => setLineIdx((n) => n + 1), PER_LINE);
    return () => {
      clearInterval(charTimer);
      clearTimeout(nextTimer);
    };
  }, [lineIdx]);

  const completed = LINES.slice(0, lineIdx);
  const current = lineIdx < LINES.length ? typed : null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0e14] px-6 scanlines">
      {/* Animated shield */}
      <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
        {/* Radar ping rings */}
        <span className="ls-ring" />
        <span className="ls-ring ls-ring-delay" />

        {/* Pulsing shield */}
        <div className="ls-shield relative h-40 w-40 sm:h-48 sm:w-48">
          <svg
            viewBox="0 0 100 110"
            className="h-full w-full"
            style={{
              filter:
                "drop-shadow(0 0 6px #00ff9d) drop-shadow(0 0 18px rgba(0,255,157,0.55))",
            }}
          >
            <defs>
              <linearGradient id="ls-scan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0,255,157,0)" />
                <stop offset="50%" stopColor="rgba(0,255,157,0.55)" />
                <stop offset="100%" stopColor="rgba(0,255,157,0)" />
              </linearGradient>
              <clipPath id="ls-shield-clip">
                <path d="M50 4 L92 22 L92 58 C92 82 74 98 50 106 C26 98 8 82 8 58 L8 22 Z" />
              </clipPath>
            </defs>

            {/* Hex/shield outline */}
            <path
              d="M50 4 L92 22 L92 58 C92 82 74 98 50 106 C26 98 8 82 8 58 L8 22 Z"
              fill="none"
              stroke="#00ff9d"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Scan sweep, clipped to shield */}
            <g clipPath="url(#ls-shield-clip)">
              <rect
                className="ls-scan-bar"
                x="0"
                y="-30"
                width="100"
                height="28"
                fill="url(#ls-scan)"
              />
            </g>

            {/* Checkmark */}
            <path
              d="M32 56 L46 70 L70 42"
              fill="none"
              stroke="#00ff9d"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Terminal boot log */}
      <div className="mt-8 w-full max-w-xl font-mono text-sm">
        <div className="mb-3 flex items-center gap-2 text-primary/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-blink" />
          <span>root@secure</span>
          <span className="text-muted-foreground">~ /boot</span>
        </div>
        <div className="min-h-[7.5rem] space-y-1.5">
          {completed.map((l, i) => (
            <div key={i} className="text-muted-foreground">
              <span className="text-primary">&gt;</span> {l}{" "}
              <span className="text-primary">[OK]</span>
            </div>
          ))}
          {current !== null && (
            <div className="text-foreground">
              <span className="text-primary">&gt;</span> {current}
              <span className="animate-blink text-primary">▋</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-surface/70">
          <div
            className="h-full rounded-full bg-primary shadow-[0_0_14px_#00ff9d]"
            style={{ width: `${progress}%`, transition: "width 80ms linear" }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
          <span>[ handshake ]</span>
          <span>{Math.floor(progress).toString().padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
