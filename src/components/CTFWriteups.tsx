import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText, Terminal } from "lucide-react";
import { Section } from "./Section";
import { TiltCard } from "./TiltCard";

// ── Types ────────────────────────────────────────────────────────────────────

type FilterKey = "all" | "web" | "forensics" | "steganography";

interface Writeup {
  name: string;
  cats: FilterKey[];           // for filtering
  displayCat: string;          // shown in card
  diff: "easy" | "medium" | "hard";
  summary: string;
  pdf: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const FILTERS: { label: string; value: FilterKey }[] = [
  { label: "All",             value: "all" },
  { label: "Web Exploitation",value: "web" },
  { label: "Forensics",       value: "forensics" },
  { label: "Steganography",   value: "steganography" },
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

// ── Helpers ──────────────────────────────────────────────────────────────────

const diffStyle: Record<string, string> = {
  easy:   "text-[#28c840] border-[#28c840]/40 bg-[#28c840]/8",
  medium: "text-[#ffbd2e] border-[#ffbd2e]/40 bg-[#ffbd2e]/8",
  hard:   "text-destructive border-destructive/40 bg-destructive/8",
};

const filterCount = (val: FilterKey) =>
  val === "all"
    ? WRITEUPS.length
    : WRITEUPS.filter((w) => w.cats.includes(val)).length;

// ── Component ────────────────────────────────────────────────────────────────

export function CTFWriteups() {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = WRITEUPS.filter(
    (w) => active === "all" || w.cats.includes(active),
  );

  return (
    <Section id="writeups" index="04" title="ctf.writeups[]">
      {/* ── Filter bar ── */}
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            id={`ctf-filter-${f.value}`}
            onClick={() => setActive(f.value)}
            className={`rounded border px-3.5 py-1.5 font-mono text-xs transition-all ${
              active === f.value
                ? "border-primary bg-primary/15 text-primary shadow-[0_0_14px_rgba(0,255,157,0.22)]"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {f.label}
            <span className="ml-2 opacity-50">{filterCount(f.value)}</span>
          </button>
        ))}
      </div>

      {/* ── Card grid ── */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((w, i) => (
            <motion.div
              key={w.name}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <article className="tilt-card-inner flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/60 transition-all hover:border-primary/45 hover:shadow-[0_0_28px_rgba(0,255,157,0.09)]">

                  {/* Top bar */}
                  <div className="flex items-center gap-1.5 border-b border-border bg-surface/55 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <div className="ml-2 flex min-w-0 flex-1 items-center gap-1.5">
                      <Terminal size={10} className="shrink-0 text-primary" />
                      <span className="truncate font-mono text-[10px] text-muted-foreground">
                        cruxhunt/{w.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                      </span>
                    </div>
                    {/* Difficulty badge in bar */}
                    <span
                      className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase ${diffStyle[w.diff]}`}
                    >
                      {w.diff}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    {/* Title + category */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-mono text-sm font-bold leading-snug text-foreground">
                          {w.name}
                        </h3>
                        <FileText size={13} className="mt-0.5 shrink-0 text-primary/50" />
                      </div>
                      <p className="mt-0.5 font-mono text-[10px] text-secondary/70">
                        {w.displayCat}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="flex-1 text-xs leading-[1.75] text-muted-foreground">
                      {w.summary}
                    </p>

                    {/* Download button */}
                    <a
                      href={w.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto flex items-center justify-center gap-2 rounded border border-primary/30 bg-primary/5 px-3 py-2 font-mono text-[11px] text-primary transition-all hover:border-primary/60 hover:bg-primary/15 hover:glow-neon"
                    >
                      <Download size={12} />
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
