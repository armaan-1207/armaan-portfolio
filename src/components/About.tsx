import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" title="about.md">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 text-muted-foreground md:col-span-3">
          <p>
            I'm a security engineer with 7+ years diving through the layers most people
            never see — from HTTP smuggling and JWT forgery to kernel exploits and
            firmware teardowns. My work spans <span className="text-primary">bug bounty</span>,{" "}
            <span className="text-primary">red team engagements</span>, and building
            defensive tooling that scales.
          </p>
          <p>
            I got into hacking through Capture-The-Flag competitions at 15 — the same
            addictive puzzle-solving loop still drives me today. When I'm not chaining
            gadgets, you'll find me writing about attack surfaces on my blog or maintaining{" "}
            <span className="text-secondary">open-source tooling</span> for the community.
          </p>
          <p>Currently focused on:</p>
          <ul className="grid gap-2 pl-1 font-mono text-sm sm:grid-cols-2">
            {["cloud-native attack paths", "eBPF-based detection", "supply-chain security", "AI/ML red teaming"].map(
              (s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="text-primary">▸</span>
                  <span>{s}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="relative rounded-lg border border-border bg-card p-1 font-mono text-xs">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-2 text-muted-foreground">~/whoami.json</span>
            </div>
            <pre className="overflow-x-auto p-4 leading-relaxed text-muted-foreground">
{`{
  `}<span className="text-secondary">"handle"</span>{`:      `}<span className="text-primary">"n4k4"</span>{`,
  `}<span className="text-secondary">"location"</span>{`:    `}<span className="text-primary">"Berlin, DE"</span>{`,
  `}<span className="text-secondary">"years_active"</span>{`: `}<span className="text-primary">7</span>{`,
  `}<span className="text-secondary">"languages"</span>{`:  [`}<span className="text-primary">"rust"</span>{`, `}<span className="text-primary">"go"</span>{`, `}<span className="text-primary">"python"</span>{`],
  `}<span className="text-secondary">"team"</span>{`:       `}<span className="text-primary">"0xNightOwls"</span>{`,
  `}<span className="text-secondary">"pgp"</span>{`:        `}<span className="text-primary">"0xDEAD...C0DE"</span>{`,
  `}<span className="text-secondary">"coffee"</span>{`:     `}<span className="text-primary">true</span>{`
}`}
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
}
