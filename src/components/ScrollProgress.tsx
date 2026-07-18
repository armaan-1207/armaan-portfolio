import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed right-2 top-1/2 z-40 hidden h-[60vh] w-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/5 sm:block"
    >
      <div
        className="w-full rounded-full transition-[height] duration-100 ease-out"
        style={{
          height: `${progress}%`,
          background: "linear-gradient(to bottom, #00ff9d, #00d9ff)",
          boxShadow:
            "0 0 10px rgba(0,255,157,0.6), 0 0 20px rgba(0,217,255,0.4)",
        }}
      />
    </div>
  );
}
