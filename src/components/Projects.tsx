import { motion } from "framer-motion";
import { Github, Users, Terminal } from "lucide-react";
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
      <div className="grid gap-6 md:grid-cols-2">
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
              <article className="tilt-card-inner h-full overflow-hidden rounded-lg border border-border bg-card/60 transition-all hover:border-primary/55 hover:shadow-[0_0_36px_rgba(0,255,157,0.12)] backdrop-blur-sm">
                {/* Top bar */}
                <div className="flex items-center gap-1.5 border-b border-border bg-surface/55 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex min-w-0 flex-1 items-center gap-2">
                    <Terminal size={12} className="shrink-0 text-primary" />
                    <span className="truncate font-mono text-xs text-muted-foreground">
                      ~/{p.name.toLowerCase().replace(/\s/g, "-")}
                    </span>
                  </div>
                  {p.featured && (
                    <span className="shrink-0 rounded-full border border-secondary/40 bg-secondary/10 px-2 py-0.5 font-mono text-[10px] text-secondary shadow-[0_0_8px_rgba(0,217,255,0.2)]">
                      featured
                    </span>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="ml-1 shrink-0 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github size={14} />
                  </a>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-4 p-5">
                  {/* Title */}
                  <div>
                    <h3 className="font-mono text-xl font-bold text-foreground transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-primary/70">{p.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-[1.8] text-muted-foreground">{p.desc}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3">
                    {p.meta.map((m) => (
                      <span key={m} className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                        <Users size={9} className="text-secondary" />
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-surface/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary hover:bg-primary/10"
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

