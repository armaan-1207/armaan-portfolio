import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { Section } from "./Section";
import { Shield, Terminal, Code, Cpu, Zap } from "lucide-react";

const CMD = "$ cat skills_matrix.json --format=hologram";

const SKILL_CATEGORIES = [
  {
    title: "[ Security & Offensive Tooling ]",
    icon: Shield,
    accent: "primary" as const,
    skills: [
      { name: "Kali Linux", level: "Advanced" },
      { name: "Burp Suite", level: "Active Learner" },
      { name: "Wireshark", level: "Intermediate" },
      { name: "Nmap", level: "Advanced" },
      { name: "Metasploit", level: "Intermediate" },
      { name: "Ghidra", level: "Reverse Eng" },
      { name: "John the Ripper", level: "Hash Cracking" },
      { name: "Searchsploit", level: "Exploit Discovery" },
      { name: "CyberChef", level: "Data Decoding" },
      { name: "Steghide", level: "Steganography" },
    ],
  },
  {
    title: "[ Core Concepts & Vulnerabilities ]",
    icon: Cpu,
    accent: "secondary" as const,
    skills: [
      { name: "Web Application Security", level: "OWASP Top 10" },
      { name: "SQL Injection (SQLi)", level: "PortSwigger" },
      { name: "Server-Side Template Injection (SSTI)", level: "Jinja2 / Python" },
      { name: "WAF Bypass techniques", level: "Payload Crafting" },
      { name: "Out-of-Band (OOB) Exfiltration", level: "DNS / HTTP" },
      { name: "AES-ECB & Cryptanalysis", level: "Byte-at-a-Time" },
      { name: "PCAP Analysis & Forensics", level: "Network Tracks" },
      { name: "Linux Privilege Escalation", level: "SUID / Cron" },
    ],
  },
  {
    title: "[ Languages & Scripting ]",
    icon: Code,
    accent: "primary" as const,
    skills: [
      { name: "C", level: "System Foundations" },
      { name: "Python", level: "Exploit Automation" },
      { name: "Bash / Zsh Scripting", level: "CLI Tooling" },
      { name: "SQL", level: "Database Querying" },
    ],
  },
  {
    title: "[ Developer & Infrastructure Ecosystem ]",
    icon: Terminal,
    accent: "secondary" as const,
    skills: [
      { name: "Git & GitHub", level: "Version Control" },
      { name: "Docker", level: "Containerization" },
      { name: "Cisco Packet Tracer", level: "Network Sim" },
      { name: "VS Code & Neovim", level: "IDE / Editors" },
    ],
  },
];

export function Skills() {
  const termRef = useRef<HTMLDivElement>(null);
  const inView = useInView(termRef, { once: true, margin: "-10% 0px" });

  type Phase = "idle" | "cmd" | "content";
  const [phase, setPhase] = useState<Phase>("idle");
  const [cmdChars, setCmdChars] = useState(0);

  useEffect(() => {
    if (inView && phase === "idle") setPhase("cmd");
  }, [inView, phase]);

  useEffect(() => {
    if (phase !== "cmd") return;
    let i = cmdChars;
    const id = setInterval(() => {
      i += 1;
      setCmdChars(i);
      if (i >= CMD.length) {
        clearInterval(id);
        setTimeout(() => setPhase("content"), 300);
      }
    }, 32);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <Section id="skills" index="02" title="skills_matrix.json">
      <div ref={termRef} className="flex flex-col gap-8 w-full">
        {/* Terminal Header Prompt */}
        <div className="rounded-xl border border-primary/30 bg-[#070b12]/90 p-4 font-mono text-sm shadow-[0_0_25px_rgba(0,255,157,0.1)] backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-border/50 pb-2.5 mb-3 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-semibold text-foreground/80">root@kali:~# arsenal_loader</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-primary font-bold">root@kali:~#</span>
            <span className="text-foreground font-semibold tracking-wide">
              {CMD.slice(0, cmdChars)}
              {phase === "cmd" && <span className="animate-blink text-primary">█</span>}
            </span>
          </div>
        </div>

        {/* Interactive Matrix Cards Grid */}
        {phase === "content" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isPrimary = cat.accent === "primary";
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`group relative rounded-xl border bg-card/60 p-6 transition-all backdrop-blur-md ${
                    isPrimary
                      ? "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.12)]"
                      : "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_rgba(0,217,255,0.12)]"
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-border/50 pb-3 mb-5">
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${
                        isPrimary
                          ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,255,157,0.2)]"
                          : "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_12px_rgba(0,217,255,0.2)]"
                      }`}
                    >
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h3 className={`font-mono text-sm sm:text-base font-bold ${isPrimary ? "text-primary" : "text-secondary"}`}>
                        {cat.title}
                      </h3>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {cat.skills.length} specialized capabilities
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/chip relative flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                          isPrimary
                            ? "border-border/60 bg-surface/60 text-foreground hover:border-primary/60 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_12px_rgba(0,255,157,0.25)]"
                            : "border-border/60 bg-surface/60 text-foreground hover:border-secondary/60 hover:bg-secondary/15 hover:text-secondary hover:shadow-[0_0_12px_rgba(0,217,255,0.25)]"
                        }`}
                      >
                        <Zap size={12} className={isPrimary ? "text-primary opacity-70 group-hover/chip:opacity-100" : "text-secondary opacity-70 group-hover/chip:opacity-100"} />
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-[10px] opacity-60 font-normal border-l border-border/60 pl-1.5">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </Section>
  );
}
