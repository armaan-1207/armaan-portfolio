import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText, Terminal } from "lucide-react";
import { Section } from "./Section";
import { TiltCard } from "./TiltCard";

type FilterKey = "all" | "web" | "forensics" | "steganography";

interface Writeup {
  name: string;
  cats: FilterKey[];
  displayCat: string;
  diff: "easy" | "medium" | "hard";
  summary: string;
  pdf: string;
}

const FILTERS: { label: string; value: FilterKey }[] = [
  { label: "All Writeups", value: "all" },
  { label: "Web Exploitation", value: "web" },
  { label: "Forensics", value: "forensics" },
  { label: "Steganography", value: "steganography" },
];

const WRITEUPS: Writeup[] = [
  {
    name: "DOOMED",
    cats: ["web"],
    displayCat: "Web Exploitation / JWT / Cryptography",
    diff: "easy",
    summary:
      "Forged a JWT signed with a weak secret to escalate to admin access, then decoded a Base64 → XOR → Gzip encoded artifact to recover the flag.",
    pdf: "/Writeups/doomed.pdf",
  },
  {
    name: "Sorting Hat Blocks",
    cats: ["web"],
    displayCat: "Web Exploitation / AES-ECB",
    diff: "medium",
    summary:
      "Broke AES-ECB encryption using a byte-at-a-time attack, recovering a hidden flag character by character via a custom Python script.",
    pdf: "/Writeups/sorting-hat-blocks.pdf",
  },
  {
    name: "Riddle's Diary",
    cats: ["web"],
    displayCat: "Web Exploitation / SSTI",
    diff: "medium",
    summary:
      "Exploited a Jinja2 Server-Side Template Injection by bypassing a keyword blocklist, then decrypted a Vigenère-ciphered password to unlock a protected archive.",
    pdf: "/Writeups/riddles-diary.pdf",
  },
  {
    name: "Fragments of Truth",
    cats: ["forensics", "steganography"],
    displayCat: "Audio Forensics / Steganography",
    diff: "medium",
    summary:
      "Extracted three stacked layers of hidden data from an audio file — spectrogram text, Morse code, and an SSTV-encoded QR code — to reach the final flag.",
    pdf: "/Writeups/fragments-of-truth.pdf",
  },
  {
    name: "The Pensieve Does Not Forget",
    cats: ["forensics", "steganography"],
    displayCat: "Network Forensics / Steganography",
    diff: "hard",
    summary:
      "Carved a hidden ZIP from a raw packet capture, recovered a password from the file's own header, and decrypted a Beaufort cipher to uncover the buried flag.",
    pdf: "/Writeups/the-pensieve.pdf",
  },
];

const diffStyle: Record<string, string> = {
  easy: "text-[#28c840] border-[#28c840]/50 bg-[#28c840]/15 shadow-[0_0_10px_rgba(40,200,64,0.2)]",
  medium: "text-[#ffbd2e] border-[#ffbd2e]/50 bg-[#ffbd2e]/15 shadow-[0_0_10px_rgba(255,189,46,0.2)]",
  hard: "text-destructive border-destructive/50 bg-destructive/15 shadow-[0_0_10px_rgba(255,50,50,0.2)]",
};

const filterCount = (val: FilterKey) =>
  val === "all" ? WRITEUPS.length : WRITEUPS.filter((w) => w.cats.includes(val)).length;

export function CTFWriteups() {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = WRITEUPS.filter((w) => active === "all" || w.cats.includes(active));

  return (
    <Section id="writeups" index="04" title="ctf.writeups[]">
      {/* ── Filter bar ── */}
      <div className="mb-8 flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            id={`ctf-filter-${f.value}`}
            onClick={() => setActive(f.value)}
            className={`rounded-lg border px-4 py-2 font-mono text-xs transition-all ${
              active === f.value
                ? "border-primary bg-primary/20 text-primary font-bold shadow-[0_0_18px_rgba(0,255,157,0.3)]"
                : "border-border/70 bg-surface/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10"
            }`}
          >
            {f.label}
            <span className="ml-2 rounded-full bg-card px-1.5 py-0.5 text-[10px] opacity-75 font-semibold">
              {filterCount(f.value)}
            </span>
          </button>
        ))}
      </div>

      {/* ── Card grid ── */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        <AnimatePresence mode="popLayout">
          {visible.map((w, i) => (
            <motion.div
              key={w.name}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <article className="tilt-card-inner relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-[#070b12]/90 transition-all hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.14)] backdrop-blur-md">
                  {/* Top bar */}
                  <div className="flex items-center gap-2 border-b border-border/60 bg-surface/80 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <div className="ml-2 flex min-w-0 flex-1 items-center gap-1.5">
                      <Terminal size={12} className="shrink-0 text-primary animate-pulse" />
                      <span className="truncate font-mono text-xs text-foreground/80 font-semibold">
                        cruxhunt/{w.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                      </span>
                    </div>
                    {/* Difficulty badge */}
                    <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${diffStyle[w.diff]}`}>
                      {w.diff}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    {/* Title + category */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-mono text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                          {w.name}
                        </h3>
                        <FileText size={16} className="mt-0.5 shrink-0 text-primary/70" />
                      </div>
                      <p className="mt-1 font-mono text-xs font-semibold text-secondary/90">{w.displayCat}</p>
                    </div>

                    {/* Summary */}
                    <p className="flex-1 text-xs sm:text-sm leading-[1.75] text-muted-foreground">{w.summary}</p>

                    {/* Download button */}
                    <a
                      href={w.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-xs font-bold text-primary transition-all hover:border-primary hover:bg-primary/20 hover:glow-neon shadow-[0_0_12px_rgba(0,255,157,0.15)]"
                    >
                      <Download size={14} />
                      Download Writeup (PDF)
                    </a>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
