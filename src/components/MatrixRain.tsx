import { useEffect, useRef } from "react";

/**
 * Faint matrix-style falling character rain, drawn on a canvas.
 * Low opacity, slow speed — decorative background layer only.
 */
export function MatrixRain({
  opacity = 0.12,
  fontSize = 14,
  speed = 0.5,
  className = "",
}: {
  opacity?: number;
  fontSize?: number;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let cols = 0;
    let drops: number[] = [];
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/\\|=+*&%$#@!";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.random() * -height);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;

      // Fading trail
      ctx.fillStyle = "rgba(10,14,20,0.18)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono Variable", ui-monospace, monospace`;
      ctx.fillStyle = `rgba(0,255,157,${opacity * 2})`;
      for (let i = 0; i < cols; i++) {
        const ch = chars[(Math.random() * chars.length) | 0];
        const x = i * fontSize;
        const y = drops[i];
        ctx.fillText(ch, x, y);
        drops[i] += speed * (dt / 16) * (fontSize * 0.9);
        if (drops[i] > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -80;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [opacity, fontSize, speed]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    />
  );
}
