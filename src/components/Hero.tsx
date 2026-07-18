import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, Terminal } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const LINE_1 = "Hi, I'm Armaan Malhotra";
const LINE_2 = "Cybersecurity Enthusiast | Breaking Systems to Understand Them";
const SCROLL_HINT = "[ scroll to decrypt ↓ ]";

function useTyped(lines: string[], speed = 45, linePause = 500) {
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

function useTypedString(text: string, speed = 55, startDelay = 400) {
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
        style={{ textShadow: "0 0 12px rgba(0,255,157,0.7)" }}
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { out, done } = useTyped([LINE_1, LINE_2]);
  const scrollHint = useTypedString(SCROLL_HINT, 45, 1400);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Parallax on mouse
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const line1Active = out[0].length < LINE_1.length;
  const line2Active = !line1Active && !done;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Spline background — scroll-linked wrapper */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ rotateY, scale, transformPerspective: 1000, transformOrigin: "center center" }}
      >
        {mounted && (
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/JWMigd3B99qNewCQ/scene.splinecode" />
          </Suspense>
        )}
      </motion.div>

      {/* Circuit grid pattern with parallax */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] circuit-bg opacity-[0.18]"
        style={{
          transform: `translate3d(${mouse.x * -8}px, ${mouse.y * -8}px, 0)`,
          transition: "transform 200ms ease-out",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] grid-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0e14]/60 via-[#0a0e14]/30 to-[#0a0e14]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
            <span aria-hidden>🛡</span>
            Cybersecurity Enthusiast
          </div>

          {/* Typed headline */}
          <h1 className="mb-6 font-mono text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {renderLine1(out[0])}
            {line1Active && (
              <span className="animate-blink text-primary">_</span>
            )}
          </h1>

          <p className="mb-14 min-h-[2em] font-mono text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {renderLine2(out[1])}
            {(line2Active || done) && (
              <span className="animate-blink text-primary">_</span>
            )}
          </p>

          {/* CTAs */}
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
              href="/resume.pdf"
              download
              className="glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-secondary bg-secondary/5 px-5 py-3 text-secondary transition-all hover:bg-secondary/15 hover:glow-cyan"
              data-text="Download Resume"
            >
              <FileDown size={16} />
              <span className="relative z-[2]">Download Resume</span>
            </a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/armaan-1207"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon text-muted-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/armaanmalhotra12/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon text-muted-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:amalhotra1be25@thapar.edu"
              aria-label="Email"
              className="social-icon text-muted-foreground"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] text-muted-foreground">
        {scrollHint}
        <span className="animate-blink text-primary">▋</span>
      </div>
    </section>
  );
}
