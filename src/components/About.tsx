import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, MapPin, Calendar, Zap, Shield, Fingerprint } from "lucide-react";

export function About() {
  return (
    <Section id="about" index="01" title="about.md">
      <div className="grid gap-12 md:grid-cols-5 items-start">
        {/* ── LEFT: bio + education ── */}
        <div className="md:col-span-3 space-y-6">
          {/* Terminal bio with Scanline effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl border border-secondary/30 bg-[#070b12]/90 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
            {/* Subtle Glowing Scanline Mesh */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />

            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs font-semibold text-foreground/80">~/about.md</span>
              </div>
              <span className="font-mono text-[11px] text-secondary/90 flex items-center gap-1">
                <Shield size={12} className="animate-pulse" /> ENCRYPTED_PROFILE
              </span>
            </div>

            <div className="relative z-10 p-6 font-mono">
              {/* prompt */}
              <p className="mb-4 text-xs sm:text-sm">
                <span className="text-secondary font-bold">$ </span>
                <span className="text-foreground/90 font-semibold">cat about.md --decrypt</span>
              </p>

              {/* bio */}
              <div className="border-l-2 border-secondary/50 pl-5 space-y-3">
                <p className="font-sans text-sm sm:text-base leading-[1.85] text-muted-foreground">
                  Engineering undergraduate building a foundation in cybersecurity through{" "}
                  <span className="text-primary font-semibold">self-directed, hands-on training</span> and CTFs.
                  Learning{" "}
                  <span className="text-secondary font-semibold">web application security</span>,{" "}
                  <span className="text-primary font-semibold">network forensics</span>, and{" "}
                  <span className="text-secondary font-semibold">Linux-based security tooling</span> via
                  structured platforms like{" "}
                  <span className="text-secondary font-semibold">TryHackMe</span>,{" "}
                  <span className="text-secondary font-semibold">PortSwigger Web Security Academy</span>, and{" "}
                  <span className="text-secondary font-semibold">OverTheWire</span>, with growing hands-on exposure
                  to{" "}
                  <span className="text-primary font-semibold">Burp Suite</span>,{" "}
                  <span className="text-primary font-semibold">Wireshark</span>, and{" "}
                  <span className="text-primary font-semibold">Metasploit</span>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education card formatted as High-Tech Security Clearance Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl border border-secondary/40 bg-[#070b12]/90 p-6 transition-all hover:border-secondary/70 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 bg-secondary/15 px-3 py-1 rounded-bl-lg border-b border-l border-secondary/30 font-mono text-[10px] text-secondary flex items-center gap-1.5">
              <Fingerprint size={11} className="animate-pulse" />
              <span>ID_CARD // THAPAR_INST</span>
            </div>

            <div className="flex items-start gap-4 pt-1">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_15px_rgba(0,217,255,0.2)]">
                <GraduationCap size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary/80 font-bold mb-1">
                  Education Credential
                </p>
                <p className="font-mono text-base font-bold text-foreground leading-snug">
                  Thapar Institute of Engineering &amp; Technology
                </p>
                <p className="mt-1 text-sm text-muted-foreground font-sans">
                  B.E. Electronics and Computer Engineering
                </p>
                <div className="mt-3.5 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 border border-border/50 bg-surface/50 px-2.5 py-1 rounded">
                    <Calendar size={12} className="text-primary" /> Aug 2025 – Present
                  </span>
                  <span className="flex items-center gap-1.5 border border-border/50 bg-surface/50 px-2.5 py-1 rounded">
                    <MapPin size={12} className="text-secondary" /> Patiala, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="flex flex-wrap gap-2.5"
          >
            {[
              "Web AppSec",
              "Network Forensics",
              "Linux Security",
              "CTF Enthusiast",
              "Offensive Security Learner",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-lg border border-secondary/30 bg-secondary/10 px-3.5 py-1.5 font-mono text-xs text-secondary transition-all hover:bg-secondary/20 hover:border-secondary/60 hover:shadow-[0_0_12px_rgba(0,217,255,0.2)]"
              >
                <Zap size={11} /> {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: hexagonal profile frame ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-2 flex justify-center items-center pt-6 lg:pt-10"
        >
          <div className="relative hex-glow">
            {/* SVG hexagon border */}
            <svg
              width="240"
              height="276"
              viewBox="0 0 228 264"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="hexStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Outer dashed ring */}
              <polygon
                points="114,6 220,63 220,201 114,258 8,201 8,63"
                fill="none"
                stroke="url(#hexStrokeGrad)"
                strokeWidth="2"
                strokeDasharray="6 3"
                opacity="0.85"
              />
              {/* Inner solid ring */}
              <polygon
                points="114,14 212,68 212,196 114,250 16,196 16,68"
                fill="rgba(0,217,255,0.04)"
                stroke="rgba(0,217,255,0.3)"
                strokeWidth="1"
              />
            </svg>

            {/* Clipped content */}
            <div
              className="relative z-10 flex items-center justify-center bg-[#080d17]/90 backdrop-blur-md"
              style={{
                width: 226,
                height: 260,
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <div className="flex flex-col items-center gap-2 select-none">
                {/* Initials with dual green+cyan glow */}
                <span
                  className="font-mono text-7xl font-extrabold text-gradient-neon hero-name-glitch"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  AM
                </span>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-semibold">
                  armaan.malhotra
                </p>
                {/* Activity dots */}
                <div className="flex gap-2 mt-2">
                  {[0, 0.4, 0.8].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse shadow-[0_0_6px_#00d9ff]"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating corner badges - High Contrast Neon Pills */}
            <span className="absolute -bottom-3 -right-6 rounded-lg border border-primary/70 bg-[#070e18] px-3 py-1 font-mono text-xs font-bold text-primary backdrop-blur-md shadow-[0_0_16px_rgba(0,255,157,0.35)]">
              CTF_PLAYER
            </span>
            <span className="absolute -top-3 -left-8 rounded-lg border border-secondary/70 bg-[#070e18] px-3 py-1 font-mono text-xs font-bold text-secondary backdrop-blur-md shadow-[0_0_16px_rgba(0,217,255,0.35)]">
              CYBERSEC_ENTHUSIAST
            </span>
            <span className="absolute top-1/2 -right-10 -translate-y-1/2 rounded-lg border border-purple-400/70 bg-[#070e18] px-2.5 py-1 font-mono text-xs font-bold text-purple-300 backdrop-blur-md shadow-[0_0_16px_rgba(168,85,247,0.35)]">
              root@kali
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
