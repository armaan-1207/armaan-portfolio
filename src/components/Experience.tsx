import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Users, Cpu, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const ACTIVITIES = [
  {
    Icon: Terminal,
    role: "Self Directed Cybersecurity Foundations Program",
    org: "Independent Security Research",
    period: "June 2026 – Present",
    accent: "primary" as const,
    bullets: [
      "160+ hours of structured practice: completed TryHackMe rooms (DNS in Detail, HTTP in Detail, Linux Fundamentals, Linux Strength Training, Bash Scripting).",
      "Cracked complex hashes with John the Ripper; cleared 10 levels of OverTheWire's Bandit wargame.",
      "Completed PortSwigger's  18 SQL Injection Labs and TryHackMe's Burp Suite: Repeater room.",
    ],
  },
  {
    Icon: Users,
    role: "Executive Member",
    org: "OWASP Student Chapter TIET",
    period: "Nov 2025 – Present",
    accent: "secondary" as const,
    bullets: [
      "Contributed across Cyber, Marketing, and Design departments for HackOWASP 8.0, a 24 hour national hackathon.",
      "Solved 7+ PicoCTF challenges across web exploitation, cryptography, forensics and reverse engineering.",
      "Exploited OWASP Juice Shop locally for hands on web vulnerability testing and payload analysis.",
    ],
  },
  {
    Icon: Cpu,
    role: "Core Member",
    org: "Linux User Group, TIET",
    period: "Oct 2025 – Present",
    accent: "primary" as const,
    bullets: [
      "Participated in Linux and open source workshops focused on CLI tooling and kernel architecture .",
    ],
  },
] as const;

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-18% 0px" });

  return (
    <Section id="experience" index="06" title="activities.log">
      <div ref={containerRef} className="w-full pl-2 sm:pl-6">
        {ACTIVITIES.map((a, i) => {
          const isPrimary = a.accent === "primary";
          const isLast = i === ACTIVITIES.length - 1;

          return (
            <div key={a.role} className="flex gap-6 md:gap-8">
              {/* ── Left col: icon node + connector line ── */}
              <div className="flex flex-col items-center">
                {/* Node */}
                <motion.div
                  className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 ${
                    isPrimary
                      ? "border-primary bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,255,157,0.4)]"
                      : "border-secondary bg-secondary/15 text-secondary shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.22 }}
                >
                  {/* Ping ring */}
                  <span
                    className={`node-ping absolute inset-0 rounded-xl ${
                      isPrimary ? "border border-primary" : "border border-secondary"
                    }`}
                    style={{ animationDelay: `${i * 0.7}s` }}
                  />
                  <a.Icon size={20} />
                </motion.div>
                
                {/* Connector line */}
                {!isLast && (
                  <motion.div
                    className={`mt-2 w-[2px] flex-1 min-h-[3.5rem] rounded-full ${
                      isPrimary
                        ? "bg-gradient-to-b from-primary via-secondary/40 to-secondary"
                        : "bg-gradient-to-b from-secondary via-primary/40 to-primary"
                    } shadow-[0_0_8px_rgba(0,255,157,0.3)]`}
                    style={{ originY: 0 }}
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 + i * 0.22 }}
                  />
                )}
              </div>

              {/* ── Right col: content card ── */}
              <motion.div
                className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-12"}`}
                initial={{ opacity: 0, x: -25, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.18 }}
              >
                <div
                  className={`rounded-xl border bg-[#070b12]/90 p-6 transition-all hover:bg-card/95 backdrop-blur-md ${
                    isPrimary
                      ? "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.12)]"
                      : "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_rgba(0,217,255,0.12)]"
                  }`}
                >
                  {/* Header row */}
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-border/50 pb-3">
                    <div>
                      <h3 className="font-mono text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {a.role}
                      </h3>
                      <p className={`font-mono text-sm font-semibold mt-0.5 ${isPrimary ? "text-primary" : "text-secondary"}`}>
                        @ {a.org}
                      </p>
                    </div>
                    <span
                      className={`flex items-center gap-1.5 rounded-md border px-3 py-1 font-mono text-xs font-bold ${
                        isPrimary
                          ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,255,157,0.2)]"
                          : "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_12px_rgba(0,217,255,0.2)]"
                      }`}
                    >
                      <ShieldCheck size={13} className="animate-pulse" />
                      {a.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        <span
                          className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isPrimary ? "bg-primary shadow-[0_0_6px_#00ff9d]" : "bg-secondary shadow-[0_0_6px_#00d9ff]"
                          }`}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
