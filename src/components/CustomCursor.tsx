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
          duration: 0.05,
          ease: "power2.out",
        });
      }

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const onMouseDown = () => {
      if (cursorRef.current) gsap.to(cursorRef.current, { scale: 0.75, duration: 0.15 });
      if (dotRef.current) gsap.to(dotRef.current, { scale: 2.2, duration: 0.15 });
    };

    const onMouseUp = () => {
      if (cursorRef.current) gsap.to(cursorRef.current, { scale: isHovering ? 1.65 : 1, duration: 0.2 });
      if (dotRef.current) gsap.to(dotRef.current, { scale: isHovering ? 1.4 : 1, duration: 0.2 });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        'a, button, input, textarea, select, [role="button"], .tilt-card-inner, [data-cursor="hover"], .glitch-btn'
      );
      if (clickable && !isHovering) {
        setIsHovering(true);
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { scale: 1.65, duration: 0.25, ease: "back.out(1.7)" });
        }
        if (dotRef.current) {
          gsap.to(dotRef.current, { scale: 1.4, duration: 0.25, ease: "back.out(1.7)" });
        }
      } else if (!clickable && isHovering) {
        setIsHovering(false);
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { scale: 1, duration: 0.25, ease: "power2.out" });
        }
        if (dotRef.current) {
          gsap.to(dotRef.current, { scale: 1, duration: 0.25, ease: "power2.out" });
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
      {/* Outer targeting bracket ring */}
      <div
        ref={cursorRef}
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
        className={`pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200 backdrop-blur-[1px] ${
          isHovering
            ? "h-11 w-11 border-2 border-secondary bg-secondary/15 shadow-[0_0_24px_rgba(0,217,255,0.7)] rotate-45"
            : "h-9 w-9 border border-primary/80 bg-primary/10 shadow-[0_0_15px_rgba(0,255,157,0.5)]"
        }`}
      >
        {/* Crosshair target ticks */}
        <div className={`absolute top-1/2 left-0 h-[1.5px] w-2 -translate-y-1/2 transition-colors duration-200 ${isHovering ? "bg-secondary shadow-[0_0_8px_#00d9ff]" : "bg-primary/80"}`} />
        <div className={`absolute top-1/2 right-0 h-[1.5px] w-2 -translate-y-1/2 transition-colors duration-200 ${isHovering ? "bg-secondary shadow-[0_0_8px_#00d9ff]" : "bg-primary/80"}`} />
        <div className={`absolute top-0 left-1/2 h-2 w-[1.5px] -translate-x-1/2 transition-colors duration-200 ${isHovering ? "bg-secondary shadow-[0_0_8px_#00d9ff]" : "bg-primary/80"}`} />
        <div className={`absolute bottom-0 left-1/2 h-2 w-[1.5px] -translate-x-1/2 transition-colors duration-200 ${isHovering ? "bg-secondary shadow-[0_0_8px_#00d9ff]" : "bg-primary/80"}`} />
        
        {/* Corner HUD marks when hovering */}
        {isHovering && (
          <>
            <div className="absolute top-1 left-1 h-1 w-1 rounded-full bg-secondary shadow-[0_0_6px_#00d9ff]" />
            <div className="absolute top-1 right-1 h-1 w-1 rounded-full bg-secondary shadow-[0_0_6px_#00d9ff]" />
            <div className="absolute bottom-1 left-1 h-1 w-1 rounded-full bg-secondary shadow-[0_0_6px_#00d9ff]" />
            <div className="absolute bottom-1 right-1 h-1 w-1 rounded-full bg-secondary shadow-[0_0_6px_#00d9ff]" />
          </>
        )}
      </div>

      {/* Inner fast dot */}
      <div
        ref={dotRef}
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
        className={`pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
          isHovering
            ? "h-2.5 w-2.5 bg-secondary shadow-[0_0_15px_#00d9ff]"
            : "h-2 w-2 bg-primary shadow-[0_0_10px_#00ff9d]"
        }`}
      />
    </div>
  );
}
