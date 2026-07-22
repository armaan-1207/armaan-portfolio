import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

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
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentLog = 0;
    
    // Add logs one by one fast
    const interval = setInterval(() => {
      if (currentLog < BOOT_LOGS.length) {
        setLogs((prev) => [...prev, BOOT_LOGS[currentLog]]);
        currentLog++;
        
        // Auto scroll to bottom
        if (bottomRef.current) {
          bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        clearInterval(interval);
        
        // Wait a tiny bit then slide up container
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = "transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)";
            containerRef.current.style.transform = "translateY(-100%)";
          }
          // Guarantee onDone fires
          setTimeout(onDone, 800);
        }, 500);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100000] flex flex-col bg-[#05080c] font-mono p-4 sm:p-8 select-none overflow-hidden"
    >
      {/* Subtle scanline background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <div className="relative z-10 w-full h-full overflow-y-auto text-sm md:text-base text-foreground/90 font-mono scrollbar-none">
        {logs.map((log, index) => {
          // Color coding parts of the log for realism
          if (log.startsWith("[  OK  ]")) {
            return (
              <div key={index} className="flex gap-2">
                <span className="text-white">[  <span className="text-green-500 font-bold">OK</span>  ]</span>
                <span className="text-gray-300">{log.replace("[  OK  ] ", "")}</span>
              </div>
            );
          }
          if (log.startsWith("==")) {
            return <div key={index} className="text-green-500 font-bold text-center sm:text-left">{log}</div>;
          }
          if (log.includes("SYSTEM STATUS")) {
            return <div key={index} className="text-green-400 font-bold text-center sm:text-left animate-pulse">{log}</div>;
          }
          return (
            <div key={index} className="text-gray-300">
              {log}
            </div>
          );
        })}
        {logs.length < BOOT_LOGS.length && (
          <div className="flex items-center gap-1 mt-1">
            <span className="inline-block h-4 w-2.5 bg-gray-400 animate-pulse" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

