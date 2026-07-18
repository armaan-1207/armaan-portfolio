import { Section } from "./Section";
import { Award } from "lucide-react";

const CERTS = [
  { name: "OSCE³", issuer: "Offensive Security", year: "2025", id: "OSCE3-11842" },
  { name: "OSWE", issuer: "Offensive Security", year: "2024", id: "OSWE-42901" },
  { name: "OSEP", issuer: "Offensive Security", year: "2024", id: "OSEP-31022" },
  { name: "OSED", issuer: "Offensive Security", year: "2023", id: "OSED-19381" },
  { name: "CRTO II", issuer: "Zero-Point Security", year: "2025", id: "CRTO2-0847" },
  { name: "GXPN", issuer: "GIAC / SANS", year: "2023", id: "GXPN-8291" },
];

export function Certifications() {
  return (
    <Section id="certs" index="05" title="certifications.pem">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <div
            key={c.name}
            className="group flex items-center gap-4 rounded-lg border border-border bg-card/60 p-4 transition-all hover:border-primary/40"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded border border-primary/30 bg-primary/10 text-primary">
              <Award size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate font-mono text-sm text-foreground group-hover:text-primary">
                {c.name}
              </div>
              <div className="truncate text-xs text-muted-foreground">
                {c.issuer} · {c.year}
              </div>
              <div className="truncate font-mono text-[10px] text-secondary/80">
                id: {c.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
