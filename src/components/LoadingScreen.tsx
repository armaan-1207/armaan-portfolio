import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const BOOT_LOGS = [
  "[ OK ] Started Initial Ramdisk System...",
  "[ OK ] Reached target Local File Systems.",
  "[ OK ] Starting Security Auditing Service...",
  "[ OK ] Loaded Kernel Module: crypto_aes_ni",
  "[ OK ] Initializing eBPF Packet Filter Engine...",
  "[ OK ] Starting Kali NetworkManager...",
  "[ OK ] Mounted /dev/mapper/kali-root (LUKS Encrypted)",
  "[ OK ] Loading BurpSuite / Metasploit Core Modules...",
  "[ OK ] Initializing Hyprland Wayland Compositor...",
  "[ OK ] Starting Security Subsystem (Armaan Malhotra DevSecOps)...",
  "============================================================",
  "               WELCOME TO KALI LINUX (2026.1)              ",
  "============================================================",
  "SYSTEM STATUS: ONLINE | SECURITY CLEARANCE: LEVEL 5 (ROOT)"
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let currentLog = 0;
    
    // Add logs one by one fast
    const interval = setInterval(() => {
      if (currentLog < BOOT_LOGS.length) {
        setLogs((prev) => [...prev, BOOT_LOGS[currentLog]]);
        setPercent(Math.min(100, Math.floor(((currentLog + 1) / BOOT_LOGS.length) * 100)));
        currentLog++;
      } else {
        clearInterval(interval);
        
        // Wait a tiny bit then slide up container
        setTimeout(() => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.7,
            ease: "power4.inOut",
            onComplete: onDone
          });
        }, 400);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#05080c] font-mono p-6 select-none overflow-hidden"
    >
      {/* Subtle scanline background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <div className="relative z-10 w-full max-w-2xl rounded-lg border border-primary/30 bg-[#0a0f18]/90 p-5 shadow-[0_0_50px_rgba(0,255,157,0.15)] backdrop-blur-md">
        {/* Terminal Header */}
        <div className="mb-4 flex items-center justify-between border-b border-primary/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-xs font-semibold text-primary/80">root@kali-linux: ~# ./boot.sh</span>
          </div>
          <span className="text-xs text-muted-foreground">{percent}%</span>
        </div>

        {/* Log Window */}
        <div className="h-64 overflow-y-auto space-y-1 text-xs text-foreground/90 font-mono scrollbar-none">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`${
                log.startsWith("==")
                  ? "text-secondary font-bold text-center py-0.5"
                  : log.startsWith("SYSTEM")
                  ? "text-primary font-bold text-center animate-pulse"
                  : "text-emerald-400/90"
              }`}
            >
              {log}
            </div>
          ))}
          {logs.length < BOOT_LOGS.length && (
            <div className="flex items-center gap-1 text-primary">
              <span>&gt;</span>
              <span className="inline-block h-3 w-1.5 bg-primary animate-pulse" />
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded bg-surface border border-primary/20">
          <div
            className="h-full bg-primary shadow-[0_0_12px_#00ff9d] transition-all duration-100 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

