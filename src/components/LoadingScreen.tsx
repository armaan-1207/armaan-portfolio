import { useEffect, useState } from "react";

const LINES = [
  "> initializing secure shell...",
  "> loading cryptographic modules... [OK]",
  "> establishing tunnel @ 0x7fff...   [OK]",
  "> decrypting portfolio payload...   [OK]",
  "> access granted. welcome, operator.",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step < LINES.length) {
      const t = setTimeout(() => setStep(step + 1), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(onDone, 500);
    return () => clearTimeout(t);
  }, [step, onDone]);

  useEffect(() => {
    const i = setInterval(() => setProgress((p) => Math.min(100, p + 2 + Math.random() * 6)), 60);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0e14] scanlines">
      <div className="w-full max-w-xl px-6 font-mono text-sm">
        <div className="mb-4 flex items-center gap-2 text-primary">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-blink" />
          <span>root@portfolio</span>
          <span className="text-muted-foreground">~ /boot</span>
        </div>
        <div className="space-y-1.5">
          {LINES.slice(0, step).map((l, i) => (
            <div key={i} className={i === LINES.length - 1 ? "text-primary" : "text-muted-foreground"}>
              {l}
            </div>
          ))}
          {step < LINES.length && (
            <div className="text-muted-foreground">
              {LINES[step]}<span className="animate-blink text-primary">▋</span>
            </div>
          )}
        </div>
        <div className="mt-6 h-[3px] w-full overflow-hidden rounded bg-surface">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>[ handshake ]</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
