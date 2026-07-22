import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { Section } from "./Section";
import { Shield, Terminal, Code, Cpu, Zap } from "lucide-react";

const CMD = "$ cat skills.txt";

const SKILL_CATEGORIES = [
  {
    title: "[ Languages ]",
    icon: Code,
    accent: "secondary" as const,
    skills: ["C", "SQL"],
  },
  {
    title: "[ Security Tools ]",
    icon: Shield,
    accent: "primary" as const,
    skills: [
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Nessus",
      "Searchsploit",
      "Ghidra",
      "CyberChef",
      "Steghide",
      "John the Ripper",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "[ Developer Tools ]",
    icon: Terminal,
    accent: "purple" as const,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Canva"],
  },
  {
    title: "[ Concepts & Capabilities ]",
    icon: Cpu,
    accent: "slate" as const,
    skills: [
      "Network Security",
      "TCP/IP",
      "DNS Resolution",
      "Subnetting",
      "Routing & Switching",
      "Vulnerability Assessment",
      "Web Application Security",
      "OWASP Top 10",
      "SQL Injection",
      "WAF Bypass",
      "Out-of-Band Exfiltration",
      "SSTI",
      "AES-ECB",
      "Steganography",
      "PCAP Analysis",
      "Digital/Disk Forensics",
      "XOR Cryptanalysis",
      "Linux Privilege Escalation",
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
    <Section id="skills" index="02" title="skills.txt">
      <div ref={termRef} className="flex flex-col gap-6 w-full">
        {/* Bash Command Line Prompt */}
        <div className="rounded-xl border border-secondary/30 bg-[#070c14]/90 p-4 font-mono text-sm shadow-[0_0_25px_rgba(0,217,255,0.1)] backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-border/50 pb-2.5 mb-3 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-semibold text-foreground/80">skills.txt — bash</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-secondary font-bold">$</span>
            <span className="text-foreground font-semibold tracking-wide">
              {CMD.slice(0, cmdChars)}
              {phase === "cmd" && <span className="animate-blink text-secondary">█</span>}
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
              const IconComp = cat.icon;

              let borderStyle = "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.12)]";
              let iconStyle = "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,255,157,0.2)]";
              let titleColor = "text-primary";
              let chipHoverStyle = "hover:border-primary/60 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_12px_rgba(0,255,157,0.25)]";
              let iconColor = "text-primary";

              if (cat.accent === "secondary") {
                borderStyle = "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_rgba(0,217,255,0.12)]";
                iconStyle = "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_12px_rgba(0,217,255,0.2)]";
                titleColor = "text-secondary";
                chipHoverStyle = "hover:border-secondary/60 hover:bg-secondary/15 hover:text-secondary hover:shadow-[0_0_12px_rgba(0,217,255,0.25)]";
                iconColor = "text-secondary";
              } else if (cat.accent === "purple") {
                borderStyle = "border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]";
                iconStyle = "border-purple-500/40 bg-purple-500/10 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.25)]";
                titleColor = "text-purple-400";
                chipHoverStyle = "hover:border-purple-500/60 hover:bg-purple-500/15 hover:text-purple-300 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]";
                iconColor = "text-purple-400";
              } else if (cat.accent === "slate") {
                borderStyle = "border-slate-500/30 hover:border-slate-400/60 hover:shadow-[0_0_30px_rgba(226,232,240,0.08)]";
                iconStyle = "border-slate-400/40 bg-slate-500/10 text-slate-200 shadow-[0_0_12px_rgba(226,232,240,0.15)]";
                titleColor = "text-slate-200";
                chipHoverStyle = "hover:border-slate-300 hover:bg-slate-400/15 hover:text-white hover:shadow-[0_0_12px_rgba(226,232,240,0.2)]";
                iconColor = "text-slate-300";
              }

              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`group relative overflow-hidden rounded-xl border bg-[#070c14]/90 p-6 transition-all backdrop-blur-md ${borderStyle}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-border/50 pb-3 mb-5">
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${iconStyle}`}>
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h3 className={`font-mono text-sm sm:text-base font-bold ${titleColor}`}>
                        {cat.title}
                      </h3>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {cat.skills.length} verified technical items
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Chips */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skillName) => (
                      <div
                        key={skillName}
                        className={`group/chip relative flex items-center gap-2 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 font-mono text-xs text-foreground transition-all ${chipHoverStyle}`}
                      >
                        <Zap size={12} className={`${iconColor} opacity-70 group-hover/chip:opacity-100`} />
                        <span className="font-semibold">{skillName}</span>
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
