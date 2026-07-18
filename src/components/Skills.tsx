import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Section } from "./Section";

// ── Content definition ──────────────────────────────────────────────────────

const CMD = "$ cat skills.txt";

type Line = { type: "header" | "item" | "gap"; text: string };

const LINES: Line[] = [
  { type: "gap",    text: "" },
  { type: "header", text: "[Languages]:" },
  { type: "item",   text: "C" },
  { type: "item",   text: "SQL" },
  { type: "gap",    text: "" },
  { type: "header", text: "[Security Tools]:" },
  { type: "item",   text: "Kali Linux" },
  { type: "item",   text: "Burp Suite" },
  { type: "item",   text: "Wireshark" },
  { type: "item",   text: "Nmap" },
  { type: "item",   text: "Metasploit" },
  { type: "item",   text: "Nessus" },
  { type: "item",   text: "Searchsploit" },
  { type: "item",   text: "Ghidra" },
  { type: "item",   text: "CyberChef" },
  { type: "item",   text: "Steghide" },
  { type: "item",   text: "John the Ripper" },
  { type: "item",   text: "Cisco Packet Tracer" },
  { type: "gap",    text: "" },
  { type: "header", text: "[Developer Tools]:" },
  { type: "item",   text: "Git" },
  { type: "item",   text: "GitHub" },
  { type: "item",   text: "Docker" },
  { type: "item",   text: "VS Code" },
  { type: "item",   text: "Figma" },
  { type: "item",   text: "Canva" },
  { type: "gap",    text: "" },
  { type: "header", text: "[Concepts]:" },
  { type: "item",   text: "Network Security, TCP/IP, DNS Resolution, Subnetting" },
  { type: "item",   text: "Routing & Switching, Vulnerability Assessment" },
  { type: "item",   text: "Web Application Security, OWASP Top 10, SQL Injection" },
  { type: "item",   text: "WAF Bypass, Out-of-Band Exfiltration, SSTI, AES-ECB" },
  { type: "item",   text: "Steganography, PCAP Analysis, Digital/Disk Forensics" },
  { type: "item",   text: "XOR Cryptanalysis, Linux Privilege Escalation" },
];

// ── Component ────────────────────────────────────────────────────────────────

export function Skills() {
  const termRef = useRef<HTMLDivElement>(null);
  const inView   = useInView(termRef, { once: true, margin: "-15% 0px" });

  // Typing state machine
  type Phase = "idle" | "cmd" | "content" | "done";
  const [phase,        setPhase]        = useState<Phase>("idle");
  const [cmdChars,     setCmdChars]     = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  // Trigger on first viewport entry
  useEffect(() => {
    if (inView && phase === "idle") setPhase("cmd");
  }, [inView, phase]);

  // Phase 1 – type the command
  useEffect(() => {
    if (phase !== "cmd") return;
    let i = cmdChars;
    const id = setInterval(() => {
      i += 1;
      setCmdChars(i);
      if (i >= CMD.length) {
        clearInterval(id);
        setTimeout(() => setPhase("content"), 340);
      }
    }, 36);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Phase 2 – reveal lines one by one
  useEffect(() => {
    if (phase !== "content") return;
    let l = 0;
    const id = setInterval(() => {
      l += 1;
      setVisibleLines(l);
      if (l >= LINES.length) {
        clearInterval(id);
        setPhase("done");
      }
    }, 52);
    return () => clearInterval(id);
  }, [phase]);

  // ── Render ──────────────────────────────────────────────────────────────

  const renderLine = (ln: Line, i: number) => {
    if (ln.type === "gap") return <div key={i} className="h-2" />;

    if (ln.type === "header")
      return (
        <p key={i} className="mt-1 font-semibold text-secondary">
          {ln.text}
        </p>
      );

    // item
    return (
      <p key={i} className="pl-2 text-muted-foreground">
        <span className="text-primary/60 mr-1.5 select-none">›</span>
        {ln.text}
      </p>
    );
  };

  return (
    <Section id="skills" index="02" title="skills.arsenal">
      <div ref={termRef} className="mx-auto max-w-3xl">
        {/* ── Terminal window ── */}
        <div className="overflow-hidden rounded-lg border border-border bg-card/60 shadow-[0_0_50px_rgba(0,255,157,0.04)]">

          {/* Top bar */}
          <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              skills.txt — bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="min-h-[420px] p-5 font-mono text-sm">

            {/* Command line */}
            <div className="flex items-center gap-1">
              <span className="text-primary/70 select-none">$</span>
              <span className="ml-1 text-foreground/90">
                {CMD.slice(0, cmdChars)}
              </span>
              {phase === "cmd" && <span className="term-cursor" />}
            </div>

            {/* Output lines */}
            {(phase === "content" || phase === "done") && (
              <div className="mt-1 space-y-0.5">
                {LINES.slice(0, visibleLines).map((ln, i) => renderLine(ln, i))}
              </div>
            )}

            {/* Blinking prompt at end */}
            {phase === "done" && (
              <div className="mt-4 flex items-center gap-1">
                <span className="text-primary/70 select-none">$</span>
                <span className="ml-1">
                  <span className="term-cursor" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
