import { motion } from "framer-motion";
import { Github, Users, Terminal, ShieldAlert, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { TiltCard } from "./TiltCard";

const PROJECTS = [
  {
    name: "AURA",
    subtitle: "Autonomous Understanding & Response Agent",
    tags: ["Python", "FastAPI", "React", "XGBoost", "spaCy"],
    desc: "An 8-stage real-time AI emergency response system built by a 4-person team for ET GEN AI Hackathon 2026. Engineered FAM (spaCy-based medical entity extraction) and ECHO (19-dimensional panic scoring via XGBoost) to adapt responses to the user's cognitive state, plus a Medical Rule Engine validating AI-generated first-aid instructions against 30+ safety rules with a full audit-trail API.",
    meta: ["4-person team", "ET GEN AI Hackathon 2026"],
    github: "https://github.com/armaan-1207",
    featured: true,
  },
  {
    name: "CruxHunt",
    subtitle: "Harry Potter–Themed CTF",
    tags: ["Python", "CTF Design", "Steganography", "Binary Analysis", "Git"],
    desc: "An original Harry Potter-themed CTF built for HackOWASP 8.0 (200+ participants). Designed binary reverse-engineering, PE/PCAP analysis, steganography, SSTI, and AES-ECB challenges, verified against a custom flag-validation pipeline.",
    meta: ["200+ participants", "HackOWASP 8.0"],
    github: "https://github.com/armaan-1207",
    featured: false,
  },
] as const;

export function Projects() {
  return (
    <Section id="projects" index="03" title="projects.build()">
      <div className="grid gap-8 md:grid-cols-2 w-full">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="h-full"
          >
            <TiltCard className="h-full">
              <article className="tilt-card-inner relative h-full flex flex-col overflow-hidden rounded-xl border border-border/80 bg-[#070b12]/90 transition-all hover:border-primary/60 hover:shadow-[0_0_40px_rgba(0,255,157,0.15)] backdrop-blur-md">
                {/* Futuristic Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary/60" />
                <div className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-primary/60" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary/60" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary/60" />

                {/* Top bar */}
                <div className="flex items-center gap-2 border-b border-border/60 bg-surface/80 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-3 flex min-w-0 flex-1 items-center gap-2">
                    <Terminal size={14} className="shrink-0 text-primary animate-pulse" />
                    <span className="truncate font-mono text-xs font-semibold text-foreground/90">
                      ~/{p.name.toLowerCase().replace(/\s/g, "-")}
                    </span>
                  </div>
                  {p.featured && (
                    <span className="shrink-0 flex items-center gap-1 rounded-full border border-secondary/50 bg-secondary/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-secondary shadow-[0_0_12px_rgba(0,217,255,0.3)]">
                      <Sparkles size={10} /> FEATURED
                    </span>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="ml-2 shrink-0 rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-5 p-6 flex-1">
                  {/* Title */}
                  <div>
                    <h3 className="font-mono text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold text-primary/80">{p.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">{p.desc}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {p.meta.map((m) => (
                      <span key={m} className="flex items-center gap-1.5 font-mono text-xs font-semibold text-secondary">
                        <Users size={12} className="text-secondary animate-pulse" />
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-border/40">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,255,157,0.15)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
