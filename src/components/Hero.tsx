import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Github, Linkedin, Mail, FileDown, Terminal, Shield, Cpu, Activity, RefreshCw } from "lucide-react";
import gsap from "gsap";

const PulseNode = lazy(() => import("./PulseNode").then((m) => ({ default: m.PulseNode })));

const LINE_1 = "Hi, I'm Armaan Malhotra";
const LINE_2 = "Cybersecurity Enthusiast | Breaking Systems to Understand Them";
const SCROLL_HINT = "[ scroll to decrypt ↓ ]";

const TERMINAL_COMMANDS = [
  { cmd: "whoami --profile", out: "Armaan Malhotra :: B.E. Electronics & Computer Eng @ Thapar" },
  { cmd: "cat core_focus.txt", out: "Web Application Security // Network Forensics // CTFs" },
  { cmd: "nmap -sV -p 80,443 armaan.local", out: "PORT 443/tcp OPEN: SSL/TLS Secure Portfolio System" },
  { cmd: "sudo lsof -i :security", out: "COMMAND: BurpSuite, Wireshark, Metasploit, Ghidra ACTIVE" },
];

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
  const [cmdIndex, setCmdIndex] = useState(0);

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

  const handleCycleCommand = () => {
    setCmdIndex((prev) => (prev + 1) % TERMINAL_COMMANDS.length);
  };

  return (
    <section
      id="top"
      className="relative flex flex-col w-full overflow-visible min-h-[85vh] justify-center py-8"
    >
      {/* Subtle Glowing Background Mesh for Hacker Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-25" />
      <div className="pointer-events-none absolute -top-24 right-0 z-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />

      {/* Main 2-Column Hero Container without Trapping Boxes */}
      <div
        ref={heroContentRef}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Bio & Hero CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Neofetch Security Badge */}
          <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary shadow-[0_0_20px_rgba(0,255,157,0.25)] backdrop-blur-sm">
            <Shield size={14} className="animate-pulse" />
            <span className="font-semibold tracking-wide">$ whoami --profile="Cybersecurity Researcher"</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {renderLine1(out[0])}
            {line1Active && <span className="animate-blink text-primary">_</span>}
          </h1>

          {/* Subheading - Original Iconic Line */}
          <p className="mb-8 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
            {out[1]}
            {(line2Active || done) && <span className="animate-blink text-primary">_</span>}
          </p>

          {/* Interactive Hacker Terminal Command Cycler */}
          <div
            onClick={handleCycleCommand}
            className="group mb-8 cursor-pointer overflow-hidden rounded-xl border border-primary/30 bg-[#070c14]/90 p-4 font-mono text-xs shadow-[0_0_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.15)]"
          >
            <div className="mb-2 flex items-center justify-between border-b border-border/50 pb-2 text-muted-foreground">
              <span className="flex items-center gap-2 font-semibold text-foreground/90">
                <Terminal size={14} className="text-primary" />
                armaan@kali-box ~ <span className="text-primary">$ {TERMINAL_COMMANDS[cmdIndex].cmd}</span>
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-secondary group-hover:text-primary transition-colors">
                <RefreshCw size={11} className="transition-transform duration-300 group-hover:rotate-180" />
                Click to execute next cmd
              </span>
            </div>
            <div className="text-primary/90 font-mono text-xs sm:text-sm pt-1 flex items-center gap-2">
              <span className="text-secondary">&gt;</span>
              <span>{TERMINAL_COMMANDS[cmdIndex].out}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#projects"
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-7 py-4 text-primary font-bold transition-all hover:bg-primary/20 hover:glow-neon shadow-[0_0_20px_rgba(0,255,157,0.2)]"
              data-text="View Projects"
            >
              <Terminal size={18} />
              <span className="relative z-[2]">View Projects</span>
            </a>
            <a
              href="/Resume.pdf"
              download
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded-lg border border-secondary bg-secondary/10 px-7 py-4 text-secondary font-bold transition-all hover:bg-secondary/20 hover:glow-cyan shadow-[0_0_20px_rgba(0,217,255,0.2)]"
              data-text="Download Resume"
            >
              <FileDown size={18} />
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
              className="social-icon text-muted-foreground hover:text-primary transition-all p-2.5 rounded-xl border border-border/60 hover:border-primary/60 bg-card/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
            >
              <Github size={21} />
            </a>
            <a
              href="https://linkedin.com/in/armaanmalhotra12/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon text-muted-foreground hover:text-secondary transition-all p-2.5 rounded-xl border border-border/60 hover:border-secondary/60 bg-card/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
            >
              <Linkedin size={21} />
            </a>
            <a
              href="mailto:amalhotra1be25@thapar.edu"
              aria-label="Email"
              className="social-icon text-muted-foreground hover:text-primary transition-all p-2.5 rounded-xl border border-border/60 hover:border-primary/60 bg-card/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        {/* Right Column: Free-Floating Holographic 3D Core Visualizer WITHOUT any trapping window boxes */}
        <div className="lg:col-span-5 flex justify-center items-center w-full overflow-visible">
          <div className="relative w-full overflow-visible">
            {/* 3D Pulse Canvas Directly Floating in Open Space */}
            {mounted && (
              <Suspense fallback={<div className="h-[420px] sm:h-[500px] lg:h-[580px] w-full flex items-center justify-center font-mono text-xs text-primary animate-pulse">Initializing Holographic Core...</div>}>
                <PulseNode />
              </Suspense>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Hint Footer */}
      <div className="pointer-events-none mt-12 flex justify-center font-mono text-[11px] text-muted-foreground">
        {scrollHint}
        <span className="animate-blink text-primary ml-1">▋</span>
      </div>
    </section>
  );
}
