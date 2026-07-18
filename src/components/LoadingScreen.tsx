import { useEffect, useRef, useState } from "react";
import { MatrixRain } from "./MatrixRain";

const LINES = [
  "Initializing systems...",
  "Loading security modules...",
  "Establishing secure connection...",
  "Scanning for threats... [CLEAR]",
  "Access granted.",
];

const TOTAL_MS = 3000;
const PER_LINE = TOTAL_MS / LINES.length;
const CHAR_MS = 18;

function FlickerPercent({ value }: { value: number }) {
  const [display, setDisplay] = useState(String(value).padStart(3, "0"));
  const lastValue = useRef<number>(value);

  useEffect(() => {
    if (value === lastValue.current) return;
    lastValue.current = value;

    const finalStr = String(value).padStart(3, "0");
    const prefix = finalStr.slice(0, -1);
    const trueLast = parseInt(finalStr.slice(-1), 10);

    // Pick 2 adjacent digits to shuffle between for ~100ms.
    const adjA = (trueLast + 9) % 10;
    const adjB = (trueLast + 1) % 10;
    const pool = [adjA, adjB];

    let i = 0;
    const shuffle = setInterval(() => {
      setDisplay(prefix + pool[i % pool.length]);
      i++;
    }, 30);
    const settle = setTimeout(() => {
      clearInterval(shuffle);
      setDisplay(finalStr);
    }, 100);
    return () => {
      clearInterval(shuffle);
      clearTimeout(settle);
    };
  }, [value]);

  return <span>{display}%</span>;
}

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [flashWhite, setFlashWhite] = useState(false);

  // Progress bar
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / TOTAL_MS) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else {
        setFlashWhite(true);
        setTimeout(onDone, 380);
      }
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

  // Random shield glitch blips
  useEffect(() => {
    let cancelled = false;
    const schedule = () => {
      const delay = 4000 + Math.random() * 1000;
      setTimeout(() => {
        if (cancelled) return;
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
        schedule();
      }, delay);
    };
    schedule();
    return () => {
      cancelled = true;
    };
  }, []);

  const completed = LINES.slice(0, lineIdx);
  const current = lineIdx < LINES.length ? typed : null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#0a0e14] px-6">
      {/* Matrix rain */}
      <MatrixRain opacity={0.12} />
      {/* Drifting scanline overlay */}
      <div className="pointer-events-none absolute inset-0 ls-scanlines" />

      {/* Shield stack */}
      <div className="relative z-10 flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
        {/* Rotating dashed radar ring */}
        <svg
          viewBox="0 0 100 100"
          className="ls-radar absolute inset-0 h-full w-full"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#00ff9d"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.55"
          />
        </svg>
        {/* Radar ping rings */}
        <span className="ls-ring" />
        <span className="ls-ring ls-ring-delay" />

        {/* Pulsing shield with glitch + flash */}
        <div
          className={`ls-shield relative h-40 w-40 sm:h-48 sm:w-48 ${
            glitch ? "ls-glitch" : ""
          } ${flashWhite ? "ls-flash-white" : ""}`}
          data-shield
        >
          <ShieldSVG />
          {glitch && (
            <>
              <div className="ls-glitch-layer ls-glitch-r">
                <ShieldSVG color="#ff0044" />
              </div>
              <div className="ls-glitch-layer ls-glitch-b">
                <ShieldSVG color="#00d9ff" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Terminal boot log */}
      <div className="relative z-10 mt-8 w-full max-w-xl font-mono text-sm">
        <div className="mb-3 flex items-center gap-2 text-primary/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-blink" />
          <span>root@secure</span>
          <span className="text-muted-foreground">~ /boot</span>
        </div>
        <div className="min-h-[9rem] space-y-1.5">
          {completed.map((l, i) => (
            <div key={i} className="text-muted-foreground/50">
              <span className="text-primary/60">&gt;</span> {l}{" "}
              <span className="text-primary/60">[OK]</span>
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
            className="h-full rounded-full bg-primary"
            style={{
              width: `${progress}%`,
              transition: "width 80ms linear",
              boxShadow:
                "0 0 8px #00ff9d, 0 0 18px rgba(0,255,157,0.7), 0 0 32px rgba(0,255,157,0.35)",
            }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
          <span>[ handshake ]</span>
          <FlickerPercent value={Math.floor(progress)} />
        </div>
      </div>
    </div>
  );
}

function ShieldSVG({ color = "#00ff9d" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 100 110"
      className="absolute inset-0 h-full w-full"
      style={{
        filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 18px ${color}88)`,
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
      <path
        d="M50 4 L92 22 L92 58 C92 82 74 98 50 106 C26 98 8 82 8 58 L8 22 Z"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
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
      <path
        d="M32 56 L46 70 L70 42"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
