import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, MapPin, Calendar, Zap } from "lucide-react";

const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }) as const;

export function About() {
  const hexRef = useRef<HTMLDivElement>(null);
  const inView = useInView(hexRef, { once: true, margin: "-10% 0px" });

  return (
    <Section id="about" index="01" title="about.md">
      <div className="grid gap-12 md:grid-cols-5 items-start">
        {/* ── LEFT: bio + education ── */}
        <div className="md:col-span-3 space-y-5">
          {/* Terminal bio */}
          <motion.div {...fadeUp(0)}>
            <div className="overflow-hidden rounded-lg border border-border bg-card/60">
              {/* Top bar */}
              <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">~/about.md</span>
              </div>

              <div className="p-5 font-mono">
                {/* prompt */}
                <p className="mb-3 text-xs">
                  <span className="text-primary/80">$ </span>
                  <span className="text-muted-foreground/70">cat about.md</span>
                </p>

                {/* bio */}
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="font-sans text-sm leading-[1.85] text-muted-foreground">
                    Engineering undergraduate building a foundation in cybersecurity through{" "}
                    <span className="text-primary font-medium">self-directed, hands-on training</span> and CTFs.
                    Learning{" "}
                    <span className="text-primary font-medium">web application security</span>,{" "}
                    <span className="text-primary font-medium">network forensics</span>, and{" "}
                    <span className="text-primary font-medium">Linux-based security tooling</span> via
                    structured platforms like{" "}
                    <span className="text-secondary">TryHackMe</span>,{" "}
                    <span className="text-secondary">PortSwigger Web Security Academy</span>, and{" "}
                    <span className="text-secondary">OverTheWire</span>, with growing hands-on exposure
                    to{" "}
                    <span className="text-secondary">Burp Suite</span>,{" "}
                    <span className="text-secondary">Wireshark</span>, and{" "}
                    <span className="text-secondary">Metasploit</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div {...fadeUp(0.12)}>
            <div className="rounded-lg border border-secondary/25 bg-card/60 p-5 transition-all hover:border-secondary/50 hover:shadow-[0_0_24px_rgba(0,217,255,0.07)]">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded border border-secondary/30 bg-secondary/10 text-secondary">
                  <GraduationCap size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-secondary/70 mb-1">
                    education
                  </p>
                  <p className="font-mono text-sm font-semibold text-foreground leading-snug">
                    Thapar Institute of Engineering &amp; Technology
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    B.E. Electronics and Computer Engineering
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-3 font-mono text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={10} className="text-primary" /> Aug 2025 – Present
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={10} className="text-secondary" /> Patiala, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus tags */}
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-2">
            {[
              "Web AppSec",
              "Network Forensics",
              "Linux Security",
              "CTF Enthusiast",
              "Red Team Learner",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-[10px] text-primary/80"
              >
                <Zap size={9} /> {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: hexagonal profile frame ── */}
        <div ref={hexRef} className="md:col-span-2 flex justify-center items-center pt-4">
          <motion.div
            className="relative hex-glow"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          >
            {/* SVG hexagon border — gradient stroke + dashed outer ring */}
            <svg
              width="228"
              height="264"
              viewBox="0 0 228 264"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="hexStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#00ff9d" stopOpacity="0.9" />
                  <stop offset="50%"  stopColor="#00d9ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Outer dashed ring */}
              <polygon
                points="114,6 220,63 220,201 114,258 8,201 8,63"
                fill="none"
                stroke="url(#hexStrokeGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 3"
                opacity="0.7"
              />
              {/* Inner solid ring */}
              <polygon
                points="114,14 212,68 212,196 114,250 16,196 16,68"
                fill="rgba(0,255,157,0.03)"
                stroke="rgba(0,255,157,0.18)"
                strokeWidth="0.8"
              />
            </svg>

            {/* Clipped content */}
            <div
              className="relative z-10 flex items-center justify-center bg-card/85 backdrop-blur-sm"
              style={{
                width: 214,
                height: 248,
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <div className="flex flex-col items-center gap-2 select-none">
                {/* Initials with glitch */}
                <span
                  className="font-mono text-6xl font-extrabold text-gradient-neon hero-name-glitch"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  AM
                </span>
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                  armaan.malhotra
                </p>
                {/* Activity dots */}
                <div className="flex gap-1.5 mt-1">
                  {[0, 0.5, 1].map((d) => (
                    <span
                      key={d}
                      className="h-1 w-1 rounded-full bg-primary animate-pulse"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating corner badges */}
            <span className="absolute -bottom-3 -right-7 rounded border border-primary/35 bg-[#0a0e14]/90 px-2.5 py-1 font-mono text-[9px] text-primary backdrop-blur-sm shadow-[0_0_10px_rgba(0,255,157,0.2)]">
              CTF_PLAYER
            </span>
            <span className="absolute -top-3 -left-7 rounded border border-secondary/35 bg-[#0a0e14]/90 px-2.5 py-1 font-mono text-[9px] text-secondary backdrop-blur-sm shadow-[0_0_10px_rgba(0,217,255,0.2)]">
              SEC_LEARNER
            </span>
            <span className="absolute top-1/2 -right-10 -translate-y-1/2 rounded border border-primary/20 bg-[#0a0e14]/90 px-2 py-0.5 font-mono text-[9px] text-primary/60 backdrop-blur-sm">
              root@kali
            </span>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
