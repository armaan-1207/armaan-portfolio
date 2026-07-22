import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, FileDown, Terminal, Shield } from "lucide-react";
import { PulseNode } from "./PulseNode";
import gsap from "gsap";

const LINE_1 = "Hi, I'm Armaan Malhotra";
const LINE_2 = "Cybersecurity Enthusiast | Breaking Systems to Understand Them";
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
        className="text-primary hero-name-glitch"
        style={{ textShadow: "0 0 14px rgba(0,255,157,0.85)" }}
        data-text={target}
      >
        {text.slice(idx, idx + target.length)}
      </span>
      {text.slice(idx + target.length)}
    </>
  );
}

function renderLine2(text: string) {
  const target = "Breaking";
  const idx = text.indexOf(target);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span
        style={{
          color: "#00d9ff",
          textShadow:
            "0 0 8px rgba(0,217,255,0.9), 0 0 18px rgba(0,217,255,0.55)",
        }}
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

  useEffect(() => {
    if (heroContentRef.current) {
      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  const line1Active = out[0].length < LINE_1.length;
  const line2Active = !line1Active && !done;

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[#070b10] pt-24 pb-16"
    >
      {/* Background Grid Accent */}
      <div className="pointer-events-none absolute inset-0 z-[1] grid-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#070b10]/50 to-[#070b10]" />

      {/* Split Container */}
      <div
        ref={heroContentRef}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-6 lg:flex-row lg:items-center lg:gap-12"
      >
        {/* Left Side: Bio & Controls */}
        <div className="flex-1 max-w-2xl">
          {/* Neofetch Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,157,0.2)]">
            <Shield size={14} className="animate-pulse" />
            <span className="font-semibold tracking-wide">ROLE: DEVSECOPS &amp; PENTESTING</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 font-mono text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {renderLine1(out[0])}
            {line1Active && <span className="animate-blink text-primary">_</span>}
          </h1>

          {/* Subheading */}
          <p className="mb-8 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl">
            {renderLine2(out[1])}
            {(line2Active || done) && (
              <span className="animate-blink text-primary">_</span>
            )}
          </p>

          {/* Quick Stats Window / Linux Rice Card */}
          <div className="mb-8 overflow-hidden rounded-lg border border-border/80 bg-[#0d131f]/80 p-4 font-mono text-xs shadow-xl backdrop-blur-md">
            <div className="mb-2 flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Terminal size={12} className="text-primary" />
                armaan@kali-rice ~
              </span>
              <span className="text-[10px] text-primary/70">OS: Kali Linux 2026</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-foreground/80">
              <div><span className="text-secondary">Uptime:</span> 100% active</div>
              <div><span className="text-secondary">Focus:</span> Web Security / CTFs</div>
              <div><span className="text-secondary">Shell:</span> Zsh / Bash</div>
              <div><span className="text-secondary">Status:</span> Open to Security Roles</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#projects"
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-5 py-3 text-primary transition-all hover:bg-primary/20 hover:glow-neon"
              data-text="View Projects"
            >
              <Terminal size={16} />
              <span className="relative z-[2]">View Projects</span>
            </a>
            <a
              href="/Resume.pdf"
              download
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-secondary bg-secondary/5 px-5 py-3 text-secondary transition-all hover:bg-secondary/15 hover:glow-cyan"
              data-text="Download Resume"
            >
              <FileDown size={16} />
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
              className="social-icon text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/armaanmalhotra12/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon text-muted-foreground hover:text-secondary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:amalhotra1be25@thapar.edu"
              aria-label="Email"
              className="social-icon text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: 3D Pulse Core Graphic */}
        <div className="mt-8 flex-1 lg:mt-0">
          <div className="relative rounded-2xl border border-primary/20 bg-card/40 p-2 shadow-[0_0_40px_rgba(0,255,157,0.08)] backdrop-blur-md">
            {/* Top Bar for 3D Window Pane */}
            <div className="flex items-center justify-between border-b border-border/40 bg-surface/60 px-4 py-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">core_pulse_visualizer.3js</span>
            </div>

            {/* 3D Pulse Canvas */}
            <PulseNode />
          </div>
        </div>
      </div>

      {/* Scroll Hint Footer */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] text-muted-foreground">
        {scrollHint}
        <span className="animate-blink text-primary">▋</span>
      </div>
    </section>
  );
}

