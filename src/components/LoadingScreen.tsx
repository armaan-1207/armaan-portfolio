import { useEffect, useRef, useState } from "react";

/**
 * Self-contained boot LoadingScreen:
 * - Full-black background
 * - Matrix character rain (own canvas, high visibility)
 * - Glitching ASCII padlock centerpiece
 * - ACCESS_DENIED (red flash) -> ACCESS_GRANTED (green)
 * - Terminal breach-log with typing + block cursor
 * - Glowing progress bar
 * - 200ms blackout, then onDone -> site fades in
 */

const PADLOCK: string[] = [
  "        _______        ",
  "       /       \\       ",
  "      |  /---\\  |      ",
  "      |  |   |  |      ",
  "      |  |   |  |      ",
  "     _|__|___|__|_     ",
  "    /              \\   ",
  "   |    _______     |  ",
  "   |   |  ###  |    |  ",
  "   |   |  # #  |    |  ",
  "   |   |  ###  |    |  ",
  "   |    -------     |  ",
  "    \\______________/   ",
];

const GLITCH_CHARS = "!@#$%^&*<>?/\\|=+~1010ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱ";

type LogLine = { prompt: string; text: string; response?: string; final?: boolean };
const LOG: LogLine[] = [
  { prompt: "> ", text: "whoami", response: "root" },
  { prompt: "> ", text: "./init_secure_shell.sh", response: "[OK]" },
  { prompt: "> ", text: "decrypting handshake...", response: "[OK]" },
  { prompt: "> ", text: "bypassing firewall...", response: "[OK]" },
  { prompt: "> ", text: "access: GRANTED", final: true },
];

const TOTAL_MS = 3000;
const CHAR_MS = 22;

function MatrixCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ<>/\\|{}[]#$%*";
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
      speeds = new Array(columns).fill(0).map(() => 0.4 + Math.random() * 1.1);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const draw = (t: number) => {
      if (t - last > 55) {
        last = t;
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        for (let i = 0; i < columns; i++) {
          const ch = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          // Head character brighter
          ctx.fillStyle = "rgba(180,255,220,0.95)";
          ctx.fillText(ch, x, y);
          ctx.fillStyle = "rgba(0,255,157,0.85)";
          ctx.fillText(ch, x, y - fontSize);
          if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i] += speeds[i];
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.18 }}
      aria-hidden
    />
  );
}

function useGlitchedLock() {
  const [lines, setLines] = useState<string[]>(PADLOCK);

  useEffect(() => {
    let cancelled = false;
    const schedule = () => {
      const delay = 2800 + Math.random() * 1200;
      setTimeout(() => {
        if (cancelled) return;
        // Mutate a handful of random character positions
        const mutated = PADLOCK.map((row) => row.split(""));
        const total = 6 + Math.floor(Math.random() * 6);
        for (let n = 0; n < total; n++) {
          const r = Math.floor(Math.random() * mutated.length);
          const c = Math.floor(Math.random() * mutated[r].length);
          if (mutated[r][c] === " ") continue;
          mutated[r][c] =
            GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
        setLines(mutated.map((r) => r.join("")));
        setTimeout(() => {
          if (cancelled) return;
          setLines(PADLOCK);
          schedule();
        }, 120 + Math.random() * 40);
      }, delay);
    };
    schedule();
    return () => {
      cancelled = true;
    };
  }, []);

  return lines;
}

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const [showResp, setShowResp] = useState(false);
  const [progress, setProgress] = useState(0);
  const [granted, setGranted] = useState(false);
  const [blackout, setBlackout] = useState(false);
  const lockLines = useGlitchedLock();

  // Progress bar
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / TOTAL_MS) * 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else {
        setGranted(true);
        setTimeout(() => setBlackout(true), 220);
        setTimeout(() => onDone(), 460);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  // Sequential typing per line
  useEffect(() => {
    if (lineIdx >= LOG.length) return;
    const line = LOG[lineIdx];
    setTypedCmd("");
    setShowResp(false);
    let i = 0;
    const typing = setInterval(() => {
      i++;
      setTypedCmd(line.text.slice(0, i));
      if (i >= line.text.length) {
        clearInterval(typing);
        // Show response after brief pause
        const respTimer = setTimeout(() => setShowResp(true), 140);
        // Advance
        const nextTimer = setTimeout(() => {
          if (lineIdx < LOG.length - 1) setLineIdx((n) => n + 1);
        }, 420);
        respTimers.push(respTimer, nextTimer);
      }
    }, CHAR_MS);
    const respTimers: ReturnType<typeof setTimeout>[] = [];
    return () => {
      clearInterval(typing);
      respTimers.forEach(clearTimeout);
    };
  }, [lineIdx]);

  const completed = LOG.slice(0, lineIdx);
  const current = lineIdx < LOG.length ? LOG[lineIdx] : null;
  const isCurrentFinal = current?.final;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-black px-6">
      <MatrixCanvas />

      {/* Vignette for legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* ASCII padlock */}
      <pre
        className="relative z-10 select-none font-mono text-[10px] leading-[1.05] sm:text-xs md:text-sm"
        style={{
          color: "#00ff9d",
          textShadow:
            "0 0 6px rgba(0,255,157,0.9), 0 0 14px rgba(0,255,157,0.55), 0 0 30px rgba(0,255,157,0.3)",
          letterSpacing: "0.02em",
        }}
        aria-hidden
      >
        {lockLines.join("\n")}
      </pre>

      {/* Status word */}
      <div
        className={`relative z-10 mt-4 font-mono text-sm font-bold tracking-[0.25em] sm:text-base ${
          granted ? "text-[#00ff9d]" : "ls-denied-flash text-[#ff2b4a]"
        }`}
        style={{
          textShadow: granted
            ? "0 0 8px rgba(0,255,157,0.9), 0 0 20px rgba(0,255,157,0.5)"
            : "0 0 8px rgba(255,43,74,0.9), 0 0 20px rgba(255,43,74,0.5)",
        }}
      >
        {granted ? "ACCESS_GRANTED" : "ACCESS_DENIED"}
      </div>

      {/* Terminal breach log */}
      <div className="relative z-10 mt-6 w-full max-w-xl font-mono text-xs sm:text-sm">
        <div className="mb-2 flex items-center gap-2 text-[#00ff9d]/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
          <span>root@secure</span>
          <span className="text-white/30">~ /breach</span>
        </div>
        <div className="min-h-[8.5rem] space-y-1">
          {completed.map((l, i) => (
            <div key={i} className="text-[#00ff9d]/45">
              <span className="text-[#00ff9d]/60">{l.prompt}</span>
              {l.text}
              {l.response && (
                <span className="ml-2 text-[#00ff9d]/60">{l.response}</span>
              )}
            </div>
          ))}
          {current && (
            <div className={isCurrentFinal ? "text-[#00ff9d]" : "text-[#00ff9d]"}>
              <span className="text-[#00ff9d]/80">{current.prompt}</span>
              {typedCmd}
              {!showResp && (
                <span
                  className="ml-0.5 inline-block animate-pulse"
                  style={{ color: "#00ff9d" }}
                >
                  ▋
                </span>
              )}
              {showResp && current.response && (
                <span className="ml-2 text-[#00ff9d]/80">{current.response}</span>
              )}
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[#00ff9d]/10">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "#00ff9d",
              transition: "width 80ms linear",
              boxShadow:
                "0 0 6px #00ff9d, 0 0 16px rgba(0,255,157,0.75), 0 0 34px rgba(0,255,157,0.4)",
            }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-[#00ff9d]/50">
          <span>[ breach_in_progress ]</span>
          <span>{String(Math.floor(progress)).padStart(3, "0")}%</span>
        </div>
      </div>

      {/* Blackout transition */}
      <div
        className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-200"
        style={{ opacity: blackout ? 1 : 0 }}
        aria-hidden
      />
    </div>
  );
}
