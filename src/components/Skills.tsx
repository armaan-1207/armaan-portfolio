import { Section } from "./Section";
import { Shield, Bug, Cpu, Cloud, Wrench, Network } from "lucide-react";

const SKILLS = [
  {
    icon: Bug,
    title: "web exploitation",
    items: ["OWASP top 10", "HTTP smuggling", "SSRF chains", "prototype pollution", "JWT/OAuth attacks"],
  },
  {
    icon: Cpu,
    title: "binary / rev",
    items: ["Ghidra + IDA Pro", "ROP / heap exploits", "ARM64 & x86_64", "firmware unpacking", "fuzzing (AFL++, libFuzzer)"],
  },
  {
    icon: Shield,
    title: "red team",
    items: ["adversary emulation", "AD abuse (BloodHound)", "C2 infra (Sliver, Mythic)", "AV/EDR evasion", "phishing simulations"],
  },
  {
    icon: Cloud,
    title: "cloud & container",
    items: ["AWS/GCP attack paths", "IAM privesc", "Kubernetes threat modeling", "container escapes", "supply chain"],
  },
  {
    icon: Network,
    title: "network",
    items: ["Wireshark deep-dive", "MITM & pivoting", "protocol fuzzing", "Zeek / Suricata", "wireless (802.11 / BLE)"],
  },
  {
    icon: Wrench,
    title: "tooling",
    items: ["rust", "go", "python", "linux internals", "eBPF", "burp extensions"],
  },
];

export function Skills() {
  return (
    <Section id="skills" index="02" title="skills.arsenal">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-lg border border-border bg-card/60 p-6 transition-all hover:border-primary/50 hover:bg-card"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
            <div className="relative">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary">
                <Icon size={18} />
              </div>
              <h3 className="mb-3 font-mono text-sm text-secondary">
                <span className="text-muted-foreground">./</span>
                {title}
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
