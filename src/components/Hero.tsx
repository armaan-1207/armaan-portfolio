import { Suspense, lazy, useEffect, useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const ROLES = ["security researcher", "ctf player", "red teamer", "reverse engineer"];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [role, setRole] = useState(0);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const i = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2400);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Spline 3D */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60 md:opacity-90">
        {mounted && (
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </Suspense>
        )}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            available for engagements · Q3 2026
          </div>

          <p className="mb-4 font-mono text-sm text-secondary">
            <span className="text-muted-foreground">&gt;</span> hi, my name is
          </p>

          <h1 className="mb-3 text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            alex_<span className="text-gradient-neon">nakamura</span>
            <span className="animate-blink text-primary">_</span>
          </h1>

          <h2 className="mb-8 font-mono text-2xl text-muted-foreground sm:text-3xl md:text-4xl">
            i break <span className="text-primary">{ROLES[role]}</span>
          </h2>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Offensive security researcher specializing in web exploitation, binary analysis,
            and adversary simulation. I hunt vulnerabilities, dissect malware, and compete in
            CTFs to keep sharp. Currently building tools that make defenders' lives easier.
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-sm">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-5 py-3 text-primary transition-all hover:bg-primary/20 hover:glow-neon"
            >
              <Terminal size={16} />
              view.projects()
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-border bg-surface/40 px-5 py-3 text-muted-foreground transition-all hover:border-secondary/60 hover:text-secondary"
            >
              contact.init()
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground">
        [ scroll to decrypt ↓ ]
      </div>
    </section>
  );
}
