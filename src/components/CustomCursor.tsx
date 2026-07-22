import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true);

      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.04,
          ease: "power2.out",
        });
      }

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.22,
          ease: "power3.out",
        });
      }
    };

    const onMouseDown = () => {
      if (cursorRef.current) gsap.to(cursorRef.current, { scale: 0.8, duration: 0.12 });
      if (dotRef.current) gsap.to(dotRef.current, { scale: 1.8, duration: 0.12 });
    };

    const onMouseUp = () => {
      if (cursorRef.current) gsap.to(cursorRef.current, { scale: isHovering ? 1.25 : 1, duration: 0.2 });
      if (dotRef.current) gsap.to(dotRef.current, { scale: isHovering ? 1.2 : 1, duration: 0.2 });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        'a, button, input, textarea, select, [role="button"], .tilt-card-inner, [data-cursor="hover"], .glitch-btn'
      );
      if (clickable && !isHovering) {
        setIsHovering(true);
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { scale: 1.25, duration: 0.2, ease: "power2.out" });
        }
        if (dotRef.current) {
          gsap.to(dotRef.current, { scale: 1.2, duration: 0.2, ease: "power2.out" });
        }
      } else if (!clickable && isHovering) {
        setIsHovering(false);
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
        if (dotRef.current) {
          gsap.to(dotRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [hasMoved, isHovering]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-300 ${
        hasMoved ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Sleek, fine circular cursor ring */}
      <div
        ref={cursorRef}
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
        className={`pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200 ${
          isHovering
            ? "h-8 w-8 border border-secondary/90 bg-secondary/10 shadow-[0_0_16px_rgba(0,217,255,0.6)]"
            : "h-6 w-6 border border-primary/70 bg-primary/5 shadow-[0_0_10px_rgba(0,255,157,0.35)]"
        }`}
      />

      {/* Inner precise dot */}
      <div
        ref={dotRef}
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
        className={`pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
          isHovering
            ? "h-2 w-2 bg-secondary shadow-[0_0_10px_#00d9ff]"
            : "h-1.5 w-1.5 bg-primary shadow-[0_0_8px_#00ff9d]"
        }`}
      />
    </div>
  );
}
