import { motion } from "framer-motion";
import { Section } from "./Section";

const CERTS = [
  {
    emoji: "🎓",
    name: "Complete Ethical Hacking Bootcamp: Zero to Mastery",
    issuer: "Udemy",
    accent: "primary",
  },
  {
    emoji: "🛡",
    name: "EC Council Cybersecurity Workshop: Steganography & Network Forensics",
    issuer: "EC Council · 1 CPE Credit",
    accent: "secondary",
  },
  {
    emoji: "🏴",
    name: "XPLO(IT)2 CTF — Certificate of Participation",
    issuer: "OWASP · 2025",
    accent: "primary",
  },
] as const;

export function Certifications() {
  return (
    <Section id="certs" index="05" title="certifications.pem">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => {
          const isPrimary = c.accent === "primary";
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              <div
                className={`group flex h-full items-start gap-4 rounded-lg border bg-card/60 p-5 transition-all hover:bg-card ${
                  isPrimary
                    ? "border-border hover:border-primary/45 hover:shadow-[0_0_22px_rgba(0,255,157,0.08)]"
                    : "border-border hover:border-secondary/45 hover:shadow-[0_0_22px_rgba(0,217,255,0.08)]"
                }`}
              >
                {/* Icon badge */}
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded border text-2xl ${
                    isPrimary
                      ? "border-primary/30 bg-primary/10"
                      : "border-secondary/30 bg-secondary/10"
                  }`}
                >
                  {c.emoji}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`mb-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                      isPrimary ? "text-primary/70" : "text-secondary/70"
                    }`}
                  >
                    certification
                  </p>
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    {c.name}
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] text-muted-foreground">
                    {c.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
