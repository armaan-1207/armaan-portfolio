import { Section } from "./Section";
import { Mail, Github, Twitter, Linkedin, Key } from "lucide-react";

const SOCIALS = [
  { icon: Github, label: "github", href: "#", handle: "@n4k4" },
  { icon: Twitter, label: "twitter/x", href: "#", handle: "@n4k4_sec" },
  { icon: Linkedin, label: "linkedin", href: "#", handle: "/in/anakamura" },
  { icon: Key, label: "pgp key", href: "#", handle: "0xDEAD...C0DE" },
];

export function Contact() {
  return (
    <Section id="contact" index="07" title="contact.init()">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 font-mono text-sm text-primary">&gt; open channel</p>
        <h3 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          let's break something<br />
          <span className="text-gradient-neon">together.</span>
        </h3>
        <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
          Open to red-team engagements, security research collaboration, CTF team invites,
          and the occasional coffee. Encrypted communication preferred — my PGP key is below.
        </p>

        <a
          href="mailto:hello@n4k4.sh"
          className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-4 font-mono text-sm text-primary transition-all hover:bg-primary/20 hover:glow-neon"
        >
          <Mail size={16} />
          hello@n4k4.sh
        </a>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card/60 p-4 text-left transition-all hover:border-secondary/50"
            >
              <Icon size={18} className="shrink-0 text-secondary" />
              <div className="min-w-0">
                <div className="truncate font-mono text-xs text-muted-foreground">{label}</div>
                <div className="truncate text-sm text-foreground group-hover:text-secondary">{handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
