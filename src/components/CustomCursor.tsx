import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true);

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.05,
          ease: "power2.out",
        });
      }

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    const onMouseDown = () => {
      if (cursorRef.current) gsap.to(cursorRef.current, { scale: 0.6, duration: 0.15 });
      if (dotRef.current) gsap.to(dotRef.current, { scale: 1.8, duration: 0.15 });
    };

    const onMouseUp = () => {
      if (cursorRef.current) gsap.to(cursorRef.current, { scale: 1, duration: 0.15 });
      if (dotRef.current) gsap.to(dotRef.current, { scale: 1, duration: 0.15 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [hasMoved]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-300 ${
        hasMoved ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Outer lagging ring */}
      <div
        ref={cursorRef}
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
        className="pointer-events-none absolute top-0 left-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/80 bg-primary/10 shadow-[0_0_15px_rgba(0,255,157,0.5)] backdrop-blur-[1px]"
      >
        <div className="absolute top-1/2 left-0 h-[1px] w-1.5 -translate-y-1/2 bg-primary/80" />
        <div className="absolute top-1/2 right-0 h-[1px] w-1.5 -translate-y-1/2 bg-primary/80" />
        <div className="absolute top-0 left-1/2 h-1.5 w-[1px] -translate-x-1/2 bg-primary/80" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-[1px] -translate-x-1/2 bg-primary/80" />
      </div>

      {/* Inner fast dot */}
      <div
        ref={dotRef}
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
        className="pointer-events-none absolute top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_#00ff9d]"
      />
    </div>
  );
}
