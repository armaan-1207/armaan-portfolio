import { Section } from "./Section";
import { FileText, ArrowUpRight } from "lucide-react";

const WRITEUPS = [
  { event: "DEF CON CTF Finals", chal: "babyheap-2026", cat: "pwn", diff: "insane", date: "2026-08" },
  { event: "PlaidCTF", chal: "rop-me-if-you-can", cat: "pwn", diff: "hard", date: "2026-04" },
  { event: "HackTheBox University", chal: "quantum-relay", cat: "crypto", diff: "hard", date: "2026-03" },
  { event: "Google CTF", chal: "sandboxer", cat: "misc", diff: "medium", date: "2025-11" },
  { event: "SekaiCTF", chal: "wasm-warden", cat: "rev", diff: "hard", date: "2025-09" },
  { event: "0CTF/TCTF", chal: "chained-oauth", cat: "web", diff: "medium", date: "2025-07" },
];

const diffColor: Record<string, string> = {
  insane: "text-destructive border-destructive/40",
  hard: "text-primary border-primary/40",
  medium: "text-secondary border-secondary/40",
};

export function CTFWriteups() {
  return (
    <Section id="writeups" index="04" title="ctf.writeups[]">
      <div className="overflow-hidden rounded-lg border border-border bg-card/60">
        <div className="hidden grid-cols-[1fr_1fr_100px_100px_110px_40px] gap-4 border-b border-border bg-surface/50 px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:grid">
          <span>event</span>
          <span>challenge</span>
          <span>category</span>
          <span>difficulty</span>
          <span>date</span>
          <span />
        </div>
        <ul>
          {WRITEUPS.map((w) => (
            <li key={w.event + w.chal}>
              <a
                href="#"
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 border-b border-border px-5 py-4 transition-colors last:border-b-0 hover:bg-primary/5 md:grid-cols-[1fr_1fr_100px_100px_110px_40px] md:items-center"
              >
                <div className="min-w-0 flex items-center gap-2 text-sm text-foreground">
                  <FileText size={14} className="shrink-0 text-primary" />
                  <span className="truncate">{w.event}</span>
                </div>
                <div className="min-w-0 truncate font-mono text-sm text-secondary md:col-start-2">
                  {w.chal}
                </div>
                <div className="font-mono text-xs text-muted-foreground md:col-start-3">
                  {w.cat}
                </div>
                <div className="md:col-start-4">
                  <span className={`inline-block rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${diffColor[w.diff]}`}>
                    {w.diff}
                  </span>
                </div>
                <div className="font-mono text-xs text-muted-foreground md:col-start-5">
                  {w.date}
                </div>
                <ArrowUpRight size={16} className="justify-self-end text-muted-foreground md:col-start-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
