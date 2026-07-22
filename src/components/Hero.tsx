import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Github, Linkedin, Mail, FileDown, Terminal, Shield, Zap, Activity, Radio } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

const PulseNode = lazy(() => import("./PulseNode").then((m) => ({ default: m.PulseNode })));

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

function useTypedString(text: string, speed = 45, startDelay = 1200) {
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
  const armaanTarget = "Armaan";
  const malhotraTarget = "Malhotra";

  const armaanIdx = text.indexOf(armaanTarget);
  const malhotraIdx = text.indexOf(malhotraTarget);

  if (armaanIdx === -1) return <>{text}</>;

  const prefix = text.slice(0, armaanIdx);

  if (malhotraIdx === -1) {
    return (
      <>
        {prefix}
        <span
          className="text-primary font-black"
          style={{ textShadow: "0 0 25px rgba(0,255,157,0.9)" }}
        >
          {text.slice(armaanIdx)}
        </span>
      </>
    );
  }

  const spaceBetween = text.slice(armaanIdx + armaanTarget.length, malhotraIdx);
  const malhotraText = text.slice(malhotraIdx, malhotraIdx + malhotraTarget.length);
  const suffix = text.slice(malhotraIdx + malhotraTarget.length);

  return (
    <>
      {prefix}
      <span
        className="text-primary font-black"
        style={{ textShadow: "0 0 25px rgba(0,255,157,0.9)" }}
      >
        {armaanTarget}
      </span>
      {spaceBetween}
      <span
        className="text-secondary font-black"
        style={{ textShadow: "0 0 25px rgba(0,217,255,0.9)" }}
      >
        {malhotraText}
      </span>
      {suffix}
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
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.95, ease: "power3.out" }
      );
    }
  }, []);

  const line1Active = out[0].length < LINE_1.length;
  const line2Active = !line1Active && !done;

  return (
    <section
      id="top"
      className="relative flex flex-col w-full overflow-visible min-h-[85vh] justify-center py-8"
    >
      {/* Subtle Glowing Background Mesh for Hacker Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute -top-24 right-0 z-0 h-96 w-96 rounded-full bg-secondary/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-secondary/5 blur-[140px]" />

      {/* Main 2-Column Hero Container with 3D Depth */}
      <div
        ref={heroContentRef}
        style={{ perspective: "1200px" }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
      >
        {/* Left Column: Bio, Cyber Strip & Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, rotateX: 10, y: 35 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Top Cyber Operations Terminal Bar */}
          <div className="mb-4 inline-flex items-center gap-2 self-start rounded-md border border-primary/35 bg-primary/10 px-3 py-1 font-mono text-[11px] font-bold tracking-widest text-primary shadow-[0_0_15px_rgba(0,255,157,0.22)]">
            <Radio size={12} className="animate-pulse" />
            <span>[ CYBER_OPERATIONS // TERMINAL_01 ]</span>
          </div>

          {/* Cybersecurity Enthusiast Security Badge */}
          <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 font-mono text-xs text-secondary shadow-[0_0_20px_rgba(0,217,255,0.25)] backdrop-blur-sm">
            <Shield size={14} className="animate-pulse" />
            <span className="font-semibold tracking-wide">$ whoami --profile="Cybersecurity Enthusiast"</span>
          </div>

          {/* Main Headline with Dual Green + Blue Neon Glow */}
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {renderLine1(out[0])}
            {line1Active && <span className="animate-blink text-secondary">_</span>}
          </h1>

          {/* Subheading - Original Iconic Line */}
          <p className="mb-6 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
            {out[1]}
            {(line2Active || done) && <span className="animate-blink text-secondary">_</span>}
          </p>

          {/* Interactive Cybernetic Recon Strip */}
          <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
            {[
              { label: "THREAT_LEVEL", val: "ZERO", color: "text-primary border-primary/30 bg-primary/10" },
              { label: "ENCRYPTION", val: "256-BIT AES", color: "text-secondary border-secondary/30 bg-secondary/10" },
              { label: "TARGET", val: "ENC_SYSTEMS", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
              { label: "CTF_STATUS", val: "ACTIVE", color: "text-primary border-primary/30 bg-primary/10" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-center rounded-lg border p-2.5 font-mono text-[11px] backdrop-blur-sm transition-all hover:scale-[1.03] shadow-sm ${stat.color}`}
              >
                <span className="text-[9px] text-muted-foreground font-semibold tracking-wider">
                  [{stat.label}]
                </span>
                <span className="font-bold tracking-wide mt-0.5">{stat.val}</span>
              </div>
            ))}
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
        </motion.div>

        {/* Right Column: 3D Core Visualizer + Floating Holographic HUD Callouts */}
        <div className="lg:col-span-5 flex justify-center items-center w-full relative">
          {/* Top-Left Orbiting HUD Callout Widget */}
          <motion.div
            initial={{ opacity: 0, x: -25, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute top-2 sm:top-6 left-0 sm:-left-4 z-20 hidden sm:flex flex-col gap-1 rounded-xl border border-primary/40 bg-[#060a12]/90 p-3.5 shadow-[0_0_25px_rgba(0,255,157,0.22)] backdrop-blur-md pointer-events-none"
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[10px] text-primary font-bold">
              <span className="flex items-center gap-1.5">
                <Zap size={13} className="animate-pulse" />
                EXPLOIT_CORE // v3.6
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-border/50 pt-1.5 font-mono text-[11px] text-foreground">
              <span className="text-muted-foreground">STATUS:</span>
              <span className="font-bold text-primary">ARMED</span>
            </div>
            {/* Animated signal bar */}
            <div className="flex gap-1 mt-1">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${i < 5 ? "bg-primary" : "bg-primary/20"} ${i === 4 ? "animate-pulse" : ""}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Main 3D Sphere Container */}
          <div className="relative w-full">
            {mounted && (
              <Suspense fallback={<div className="h-[400px] sm:h-[480px] lg:h-[540px] w-full flex items-center justify-center font-mono text-xs text-secondary animate-pulse">Initializing Holographic Core...</div>}>
                <PulseNode />
              </Suspense>
            )}
          </div>

          {/* Bottom-Right Orbiting HUD Callout Widget */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute bottom-4 sm:bottom-8 right-0 sm:-right-4 z-20 hidden sm:flex flex-col gap-1 rounded-xl border border-secondary/40 bg-[#060a12]/90 p-3.5 shadow-[0_0_25px_rgba(0,217,255,0.22)] backdrop-blur-md pointer-events-none"
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[10px] text-secondary font-bold">
              <span className="flex items-center gap-1.5">
                <Activity size={13} className="animate-pulse" />
                NEURAL_DEFENSE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_#00d9ff]" />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-border/50 pt-1.5 font-mono text-[11px] text-foreground">
              <span className="text-muted-foreground">SYS_LOAD:</span>
              <span className="font-bold text-secondary">NOMINAL</span>
            </div>
            {/* Animated ECG Pulse Wave */}
            <div className="font-mono text-[10px] text-secondary/80 tracking-widest mt-0.5 font-bold">
              /\/\\/\__/\/\\__
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint Footer */}
      <div className="pointer-events-none mt-12 flex justify-center font-mono text-[11px] text-muted-foreground">
        {scrollHint}
        <span className="animate-blink text-secondary ml-1">▋</span>
      </div>
    </section>
  );
}
