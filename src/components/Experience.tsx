import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Users, Cpu } from "lucide-react";
import { Section } from "./Section";

const ACTIVITIES = [
  {
    Icon: Terminal,
    role: "Self-Directed Cybersecurity Foundations Program",
    org: "Independent",
    period: "June 2026 – Present",
    accent: "primary" as const,
    bullets: [
      "160+ hours of structured practice: completed TryHackMe rooms (DNS in Detail, HTTP in Detail, Linux Fundamentals, Linux Strength Training, Bash Scripting).",
      "Cracked hashes with John the Ripper; cleared 10 levels of OverTheWire's Bandit wargame.",
      "Completed PortSwigger's 18-lab SQL Injection curriculum and TryHackMe's Burp Suite: Repeater room.",
    ],
  },
  {
    Icon: Users,
    role: "Executive Member",
    org: "OWASP Student Chapter TIET",
    period: "Nov 2025 – Present",
    accent: "secondary" as const,
    bullets: [
      "Contributed across Cyber, Marketing, and Design departments for HackOWASP 8.0 — a 24-hour national hackathon.",
      "Solved 7+ PicoCTF challenges across web exploitation, cryptography, forensics, and reverse engineering.",
      "Exploited OWASP Juice Shop locally for hands-on web vulnerability practice.",
    ],
  },
  {
    Icon: Cpu,
    role: "Core Member",
    org: "Linux User Group, TIET",
    period: "Oct 2025 – Present",
    accent: "primary" as const,
    bullets: [
      "Participated in Linux and open-source workshops focused on CLI tooling and system administration initiatives.",
    ],
  },
] as const;

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-18% 0px" });

  return (
    <Section id="experience" index="06" title="activities.log">
      <div ref={containerRef}>
        {ACTIVITIES.map((a, i) => {
          const isPrimary = a.accent === "primary";
          const isLast = i === ACTIVITIES.length - 1;

          return (
            <div key={a.role} className="flex gap-5 md:gap-7">
              {/* ── Left col: icon node + connector line ── */}
              <div className="flex flex-col items-center">
                {/* Node */}
                <motion.div
                  className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border ${
                    isPrimary
                      ? "border-primary/55 bg-primary/10 text-primary"
                      : "border-secondary/55 bg-secondary/10 text-secondary"
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.22 }}
                  style={{
                    boxShadow: isPrimary
                      ? "0 0 14px rgba(0,255,157,0.25)"
                      : "0 0 14px rgba(0,217,255,0.25)",
                  }}
                >
                  {/* Ping ring */}
                  <span
                    className={`node-ping absolute inset-0 rounded-full ${
                      isPrimary ? "border border-primary/40" : "border border-secondary/40"
                    }`}
                    style={{ animationDelay: `${i * 0.7}s` }}
                  />
                  <a.Icon size={15} />
                </motion.div>

                {/* Connector line */}
                {!isLast && (
                  <motion.div
                    className={`mt-1 w-px flex-1 min-h-[2rem] ${
                      isPrimary
                        ? "bg-gradient-to-b from-primary/40 to-secondary/20"
                        : "bg-gradient-to-b from-secondary/40 to-primary/20"
                    }`}
                    style={{ originY: 0 }}
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 + i * 0.22 }}
                  />
                )}
              </div>

              {/* ── Right col: content card ── */}
              <motion.div
                className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-10"}`}
                initial={{ opacity: 0, x: -22 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.22 }}
              >
                <div
                  className={`rounded-lg border bg-card/60 p-5 transition-all hover:bg-card ${
                    isPrimary
                      ? "border-border hover:border-primary/30"
                      : "border-border hover:border-secondary/30"
                  }`}
                >
                  {/* Header row */}
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                    <div>
                      <h3 className="font-semibold text-foreground">{a.role}</h3>
                      <p
                        className={`font-mono text-sm ${
                          isPrimary ? "text-primary" : "text-secondary"
                        }`}
                      >
                        @ {a.org}
                      </p>
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${
                        isPrimary
                          ? "border-primary/25 bg-primary/5 text-primary/80"
                          : "border-secondary/25 bg-secondary/5 text-secondary/80"
                      }`}
                    >
                      {a.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                        <span
                          className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                            isPrimary ? "bg-primary" : "bg-secondary"
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
