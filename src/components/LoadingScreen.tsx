import { useEffect, useRef } from "react";
import gsap from "gsap";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up screen
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: onDone
        });
      }
    });

    // Boot text blink
    tl.to(textRef.current, { opacity: 1, duration: 0.1 })
      .to(textRef.current, { opacity: 0, duration: 0.1 })
      .to(textRef.current, { opacity: 1, duration: 0.1 })
      .to(textRef.current, { opacity: 0, duration: 0.1 })
      .to(textRef.current, { opacity: 1, duration: 0.1 });

    // Progress bar fill
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.inOut"
    });

    // Flash GRANTED
    tl.to(textRef.current, {
      color: "#00ff9d",
      textShadow: "0 0 10px #00ff9d",
      duration: 0.2
    });

  }, [onDone]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0e14] font-mono"
    >
      <div className="flex w-64 flex-col gap-4">
        <div 
          ref={textRef}
          className="text-sm font-bold tracking-widest text-white opacity-0"
        >
          INITIALIZING...
        </div>
        <div className="h-1 w-full overflow-hidden bg-white/10 rounded">
          <div 
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 bg-primary shadow-[0_0_10px_rgba(0,255,157,0.8)] rounded"
          />
        </div>
      </div>
    </div>
  );
}
