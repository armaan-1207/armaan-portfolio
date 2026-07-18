import { Section } from "./Section";

const JOBS = [
  {
    role: "Principal Security Researcher",
    org: "Nullbyte Labs",
    period: "2024 — present",
    bullets: [
      "Lead offensive research team; discovered 12 CVEs in cloud-native infrastructure (K8s, service mesh, container runtimes).",
      "Built internal red-team platform reducing engagement setup from 3 days to 2 hours.",
      "Speaker: Black Hat EU 2025, Off-by-One 2026.",
    ],
  },
  {
    role: "Senior Offensive Engineer",
    org: "Doyensec",
    period: "2022 — 2024",
    bullets: [
      "Delivered 30+ application security assessments for F500 clients across fintech and healthtech.",
      "Authored the internal fuzz-harness framework used across the consulting practice.",
    ],
  },
  {
    role: "Security Engineer",
    org: "Shopify (Trust)",
    period: "2020 — 2022",
    bullets: [
      "Owned merchant-facing bug bounty triage; ranked top-3 internally two years running.",
      "Deployed authz linter that caught 40+ IDOR-class bugs before production.",
    ],
  },
  {
    role: "Junior Pentester",
    org: "Redpoint Security",
    period: "2018 — 2020",
    bullets: ["External + internal pentests, wireless, physical. Everything you learn in the trenches."],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="06" title="experience.log">
      <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
        {JOBS.map((j, i) => (
          <li key={j.role} className="relative">
            <span className="absolute -left-[29px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full border border-primary bg-background md:-left-[37px]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {j.role}{" "}
                <span className="font-mono text-sm text-primary">@ {j.org}</span>
              </h3>
              <span className="font-mono text-xs text-muted-foreground">{j.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {j.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {i === 0 && (
              <div className="mt-3 inline-block rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                current position
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
