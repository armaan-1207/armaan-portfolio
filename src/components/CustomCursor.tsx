import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has a touch screen (mobile) to disable custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e: MouseEvent) => {
      // Fast dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      // Lagging glowing ring
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power4.out"
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.2 });
      gsap.to(dot, { scale: 1.5, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, dot], { opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, dot], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 mix-blend-screen transition-opacity duration-300 shadow-[0_0_10px_rgba(0,255,157,0.3)]"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-screen transition-opacity duration-300 shadow-[0_0_8px_rgba(0,255,157,0.8)]"
      />
    </>
  );
}
