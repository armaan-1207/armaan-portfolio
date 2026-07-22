import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Github, Linkedin, Mail, FileDown, Terminal, Shield, ArrowRight, Activity } from "lucide-react";
import gsap from "gsap";

const PulseNode = lazy(() => import("./PulseNode").then((m) => ({ default: m.PulseNode })));

const LINE_1 = "Hi, I'm Armaan Malhotra";
const LINE_2 = "Cybersecurity Enthusiast | Breaking Systems to Understand Them";

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
          style={{ textShadow: "0 0 22px rgba(0,255,157,0.85)" }}
        >
          {text.slice(armaanIdx)}
        </span>
      </>
    );
  }

  const spaceBetween = text.slice(armaanIdx + armaanTarget.length, malhotraIdx);
  const malhotraText = text.slice(malhotraIdx, malhotraIdx + malhotraTarget.length);

  return (
    <>
      {prefix}
      <span
        className="text-primary font-black"
        style={{ textShadow: "0 0 22px rgba(0,255,157,0.85)" }}
      >
        {armaanTarget}
      </span>
      {spaceBetween}
      <span
        className="text-secondary font-black"
        style={{ textShadow: "0 0 22px rgba(0,217,255,0.85)" }}
      >
        {malhotraText}
      </span>
    </>
  );
}

export function Hero() {
  const { out, done } = useTyped([LINE_1, LINE_2]);
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
      className="relative flex flex-col w-full overflow-visible min-h-[85vh] justify-between py-4"
    >
      {/* Subtle Deep Obsidian Circuit Background Mesh */}
      <div className="pointer-events-none absolute inset-0 z-0 circuit-bg opacity-15" />
      <div className="pointer-events-none absolute -top-24 right-0 z-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-secondary/10 blur-[140px]" />

      {/* Main 2-Column Hero Container */}
      <div
        ref={heroContentRef}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto"
      >
        {/* Left Column: Bio & Hero CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Angled Profile HUD Badge (From Reference Image) */}
          <div className="mb-6 inline-flex items-center gap-2.5 self-start rounded-r-lg rounded-l-sm border-l-2 border-l-primary border-y border-r border-primary/40 bg-[#070e18]/90 px-4 py-1.5 font-mono text-xs text-primary shadow-[0_0_20px_rgba(0,255,157,0.2)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold tracking-wide">&gt;_ PROFILE: CYBERSECURITY ENTHUSIAST</span>
          </div>

          {/* Main Headline with Dual Green + Blue Neon Glow */}
          <h1 className="mb-4 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {renderLine1(out[0])}
            <span className="animate-blink text-secondary">_</span>
          </h1>

          {/* Subheading - Original Iconic Line */}
          <p className="mb-8 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
            {out[1]}
            {(line2Active || done) && <span className="animate-blink text-secondary">_</span>}
          </p>

          {/* Action CTAs (Reference Image Styling) */}
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#projects"
              className="scan-btn group relative inline-flex items-center gap-2.5 rounded-lg border border-primary bg-primary/15 px-6 py-3.5 text-primary font-bold transition-all hover:bg-primary/25 shadow-[0_0_20px_rgba(0,255,157,0.25)]"
            >
              <span>&gt;_ VIEW PROJECTS</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Resume.pdf"
              download
              className="scan-btn group relative inline-flex items-center gap-2.5 rounded-lg border border-secondary/60 bg-secondary/10 px-6 py-3.5 text-secondary font-bold transition-all hover:bg-secondary/20 shadow-[0_0_20px_rgba(0,217,255,0.2)]"
            >
              <span>[ ] DOWNLOAD RESUME</span>
              <FileDown size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/armaan-1207"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon text-muted-foreground hover:text-primary transition-all p-2.5 rounded-xl border border-border/60 hover:border-primary/60 bg-[#070d17]/80 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
            >
              <Github size={21} />
            </a>
            <a
              href="https://linkedin.com/in/armaanmalhotra12/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon text-muted-foreground hover:text-secondary transition-all p-2.5 rounded-xl border border-border/60 hover:border-secondary/60 bg-[#070d17]/80 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
            >
              <Linkedin size={21} />
            </a>
            <a
              href="mailto:amalhotra1be25@thapar.edu"
              aria-label="Email"
              className="social-icon text-muted-foreground hover:text-primary transition-all p-2.5 rounded-xl border border-border/60 hover:border-primary/60 bg-[#070d17]/80 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        {/* Right Column: Rotating Holographic 3D Globe with Pedestal */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <div className="relative w-full">
            {mounted && (
              <Suspense fallback={<div className="h-[460px] sm:h-[540px] lg:h-[600px] w-full flex items-center justify-center font-mono text-xs text-secondary animate-pulse">Initializing Cyber Globe...</div>}>
                <PulseNode />
              </Suspense>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Reference Console Widgets Bar */}
      <div className="relative z-10 mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        {/* Left: whoami@kali:~$ Philosophy Pill */}
        <div className="flex items-center gap-2.5 rounded-xl border border-primary/30 bg-[#060b13]/90 px-4 py-2 text-muted-foreground backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          <span className="text-primary font-bold">whoami@kali:~$</span>
          <span className="text-foreground/90 font-medium">
            passion &gt; curiosity &gt; dedication &gt; impact
          </span>
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse ml-2" />
        </div>

        {/* Center: Scroll Indicator */}
        <div className="hidden md:flex flex-col items-center gap-1.5 text-[11px] text-muted-foreground">
          <div className="h-7 w-4 rounded-full border border-secondary/50 flex justify-center p-1">
            <div className="h-1.5 w-1 rounded-full bg-secondary animate-bounce" />
          </div>
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
        </div>

        {/* Right: SYSTEM STATUS ONLINE ECG Pulse Box */}
        <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-[#060b13]/90 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          {/* ECG Line Graphic */}
          <div className="flex items-center text-primary opacity-80">
            <Activity size={16} className="animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground font-semibold">SYSTEM STATUS</div>
            <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#00ff9d]" />
              <span>ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
