import { Suspense, lazy, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

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

  // Progress bar: 0 -> 100 across TOTAL_MS
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

  // Type out each line
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
      {/* Spline 3D — centered */}
      <div className="relative h-[280px] w-full max-w-[520px] sm:h-[360px]">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/H4fMRS57XunVC-4A/scene.splinecode" />
        </Suspense>
      </div>

      {/* Terminal boot log */}
      <div className="mt-6 w-full max-w-xl font-mono text-sm">
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
