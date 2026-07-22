import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Github, Linkedin, Mail, FileDown, Terminal, Shield, Cpu, Activity } from "lucide-react";
import gsap from "gsap";

const PulseNode = lazy(() => import("./PulseNode").then((m) => ({ default: m.PulseNode })));

const LINE_1 = "Hi, I'm Armaan Malhotra";
const LINE_2 = "DevSecOps Engineer // CTF Competitor // Ethical Hacker";
const SCROLL_HINT = "[ scroll to decrypt ↓ ]";

function useTyped(lines: string[], speed = 40, linePause = 400) {
  const [out, setOut] = useState<string[]>(lines.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let li = 0;
    let ci = 0;
    const tick = () => {
      if (cancelled) return;
      if (li >= lines.length) {
        setDone(true);
        return;
      }
      const line = lines[li];
      if (ci <= line.length) {
        setOut((prev) => {
          const next = [...prev];
          next[li] = line.slice(0, ci);
          return next;
        });
        ci++;
        setTimeout(tick, speed);
      } else {
        li++;
        ci = 0;
        setTimeout(tick, linePause);
      }
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, []);

  return { out, done };
}

function useTypedString(text: string, speed = 55, startDelay = 1200) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let cancelled = false;
    let i = 0;
    const start = setTimeout(function tick() {
      if (cancelled) return;
      i++;
      setOut(text.slice(0, i));
      if (i < text.length) setTimeout(tick, speed);
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);
  return out;
}

function renderLine1(text: string) {
  const target = "Armaan";
  const idx = text.indexOf(target);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span
        className="text-primary hero-name-glitch font-black"
        style={{ textShadow: "0 0 20px rgba(0,255,157,0.85)" }}
        data-text={target}
      >
        {text.slice(idx, idx + target.length)}
      </span>
      {text.slice(idx + target.length)}
    </>
  );
}

export function Hero() {
  const { out, done } = useTyped([LINE_1, LINE_2]);
  const scrollHint = useTypedString(SCROLL_HINT, 45, 1400);

  const heroContentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (heroContentRef.current) {
      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
    }
  }, []);

  const line1Active = out[0].length < LINE_1.length;
  const line2Active = !line1Active && !done;

  return (
    <section
      id="top"
      className="relative flex flex-col w-full overflow-hidden rounded-xl border border-primary/20 bg-[#070b12]/80 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl p-6 sm:p-10 lg:p-12"
    >
      {/* Background Accent Grids */}
      <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#070b12] via-transparent to-[#070b12]/80" />

      {/* Main 2-Column Hero Container */}
      <div
        ref={heroContentRef}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[78vh]"
      >
        {/* Left Column: Bio & Hero CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Neofetch Badge */}
          <div className="mb-6 inline-flex items-center gap-2 self-start rounded-md border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary backdrop-blur-sm shadow-[0_0_18px_rgba(0,255,157,0.2)]">
            <Shield size={14} className="animate-pulse" />
            <span className="font-semibold tracking-wide">$ whoami --role="DevSecOps & Pentesting"</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 font-mono text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {renderLine1(out[0])}
            {line1Active && <span className="animate-blink text-primary">_</span>}
          </h1>

          {/* Subheading */}
          <p className="mb-8 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
            {out[1]}
            {(line2Active || done) && <span className="animate-blink text-primary">_</span>}
          </p>

          {/* Quick Terminal Stats Card */}
          <div className="mb-8 overflow-hidden rounded-lg border border-primary/20 bg-[#0d131f]/90 p-4 font-mono text-xs shadow-xl backdrop-blur-md">
            <div className="mb-2 flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Terminal size={13} className="text-primary" />
                armaan@kali-box ~
              </span>
              <span className="flex items-center gap-1 text-[11px] text-primary">
                <Activity size={12} className="animate-pulse" />
                SYSTEM READY
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-foreground/80">
              <div>
                <span className="text-secondary font-semibold">Uptime:</span> 100% active
              </div>
              <div>
                <span className="text-secondary font-semibold">Focus:</span> Web Security / CTFs
              </div>
              <div>
                <span className="text-secondary font-semibold">Shell:</span> Zsh / Bash
              </div>
              <div>
                <span className="text-secondary font-semibold">Status:</span> Open to Security Roles
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#projects"
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3.5 text-primary font-semibold transition-all hover:bg-primary/20 hover:glow-neon"
              data-text="View Projects"
            >
              <Terminal size={17} />
              <span className="relative z-[2]">View Projects</span>
            </a>
            <a
              href="/Resume.pdf"
              download
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-secondary bg-secondary/5 px-6 py-3.5 text-secondary font-semibold transition-all hover:bg-secondary/15 hover:glow-cyan"
              data-text="Download Resume"
            >
              <FileDown size={17} />
              <span className="relative z-[2]">Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/armaan-1207"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border/50 hover:border-primary/50 bg-card/40"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/armaanmalhotra12/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon text-muted-foreground hover:text-secondary transition-colors p-2 rounded-lg border border-border/50 hover:border-secondary/50 bg-card/40"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:amalhotra1be25@thapar.edu"
              aria-label="Email"
              className="social-icon text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border/50 hover:border-primary/50 bg-card/40"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive 3D Core Visualizer */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full rounded-2xl border border-primary/30 bg-[#0a0f19]/90 p-3 shadow-[0_0_50px_rgba(0,255,157,0.12)] backdrop-blur-md">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-2 rounded-t-xl mb-2">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-primary animate-pulse" />
                <span className="font-mono text-xs font-semibold text-foreground/90">
                  core_pulse_visualizer.3js
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* 3D Pulse Canvas Container */}
            <div className="relative h-[380px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-xl bg-black/40">
              {mounted && (
                <Suspense fallback={<div className="h-full w-full flex items-center justify-center font-mono text-xs text-muted-foreground">Loading 3D Engine...</div>}>
                  <PulseNode />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint Footer */}
      <div className="pointer-events-none mt-8 flex justify-center font-mono text-[11px] text-muted-foreground">
        {scrollHint}
        <span className="animate-blink text-primary">▋</span>
      </div>
    </section>
  );
}
