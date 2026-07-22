import { useEffect, useState, useRef } from "react";
import { FastForward } from "lucide-react";

const BOOT_LOGS = [
  "Welcome to Kali GNU/Linux 2026.1",
  "",
  "[  OK  ] Started Initial Ramdisk System.",
  "[  OK  ] Reached target Local File Systems.",
  "[  OK  ] Starting Security Auditing Service...",
  "[  OK  ] Loaded Kernel Module: crypto_aes_ni",
  "[  OK  ] Initializing eBPF Packet Filter Engine...",
  "[  OK  ] Starting NetworkManager...",
  "[  OK  ] Reached target Network.",
  "[  OK  ] Mounted /dev/mapper/kali-root (LUKS Encrypted)",
  "[  OK  ] Loading BurpSuite Core Modules...",
  "[  OK  ] Initializing Hyprland Wayland Compositor...",
  "[  OK  ] Starting Security Subsystem (Armaan Malhotra DevSecOps)...",
  "[  OK  ] Started OpenBSD Secure Shell server.",
  "[  OK  ] Reached target Multi-User System.",
  "[  OK  ] Reached target Graphical Interface.",
  "",
  "============================================================",
  "               WELCOME TO KALI LINUX (2026.1)              ",
  "============================================================",
  "SYSTEM STATUS: ONLINE | SECURITY CLEARANCE: LEVEL 5 (ROOT)",
  "Starting display manager..."
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [percent, setPercent] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isFinishedRef = useRef(false);

  const handleFinish = () => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease";
      containerRef.current.style.transform = "translateY(-100%)";
      containerRef.current.style.opacity = "0";
    }
    setTimeout(onDone, 800);
  };

  useEffect(() => {
    let currentLog = 0;
    let timeoutId: NodeJS.Timeout;

    const step = () => {
      if (currentLog < BOOT_LOGS.length) {
        const nextLog = BOOT_LOGS[currentLog];
        if (nextLog !== undefined) {
          setLogs((prev) => [...prev, nextLog]);
          setPercent(Math.min(100, Math.round(((currentLog + 1) / BOOT_LOGS.length) * 100)));
        }
        currentLog++;

        if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }

        // Realistic variable speed (pauses on heavy modules)
        let delay = 180; // Default speed between normal log lines (was 110ms)
        if (nextLog?.includes("Security Auditing") || nextLog?.includes("LUKS Encrypted")) {
          delay = 550; // Heavy service pause (was 320ms)
        } else if (nextLog?.includes("BurpSuite") || nextLog?.includes("Hyprland")) {
          delay = 480; // Tool loading pause (was 280ms)
        } else if (nextLog?.includes("WELCOME TO KALI")) {
          delay = 400; // Banner highlight pause (was 220ms)
        }

        timeoutId = setTimeout(step, delay);
      } else {
        // Final pause after all logs finish before the screen slides up into your Hero (was 400ms)
        timeoutId = setTimeout(handleFinish, 900);
      }
    };

    step();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearTimeout(timeoutId);
        handleFinish();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100000] flex flex-col justify-between bg-[#05080c] font-mono p-4 sm:p-8 select-none overflow-hidden"
    >
      {/* Subtle scanline background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      {/* Top Header Bar with Skip Option */}
      <div className="relative z-10 flex items-center justify-between border-b border-primary/20 pb-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-bold">KALI_BOOT // KERNEL v6.8.0</span>
        </div>
        <button
          onClick={handleFinish}
          className="flex items-center gap-1.5 rounded border border-primary/40 bg-primary/10 px-2.5 py-1 text-primary hover:bg-primary/20 transition-all text-[11px]"
        >
          <span>SKIP [ESC]</span>
          <FastForward size={12} />
        </button>
      </div>

      {/* Logs Terminal Area */}
      <div className="relative z-10 my-4 w-full flex-1 overflow-y-auto text-xs sm:text-sm md:text-base text-foreground/90 font-mono scrollbar-none">
        {logs.map((log, index) => {
          if (!log) return <div key={index} className="h-3" />;
          if (log.startsWith("[  OK  ]")) {
            return (
              <div key={index} className="flex gap-2">
                <span className="text-white">
                  [ <span className="text-primary font-bold">OK</span> ]
                </span>
                <span className="text-gray-300">{log.replace("[  OK  ] ", "")}</span>
              </div>
            );
          }
          if (log.startsWith("==")) {
            return (
              <div key={index} className="text-primary font-bold text-center sm:text-left">
                {log}
              </div>
            );
          }
          if (log.includes("SYSTEM STATUS")) {
            return (
              <div key={index} className="text-primary font-bold text-center sm:text-left animate-pulse">
                {log}
              </div>
            );
          }
          return (
            <div key={index} className="text-gray-300">
              {log}
            </div>
          );
        })}
        {logs.length < BOOT_LOGS.length && (
          <div className="flex items-center gap-1 mt-1">
            <span className="inline-block h-4 w-2.5 bg-primary animate-pulse" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Bottom Progress Bar */}
      <div className="relative z-10 border-t border-primary/20 pt-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-1.5">
          <span className="text-primary font-semibold">INITIALIZING SYSTEM ENVIRONMENT</span>
          <span className="text-primary">{percent}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded bg-primary/10 border border-primary/30">
          <div
            className="h-full bg-primary shadow-[0_0_12px_#00ff9d] transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
