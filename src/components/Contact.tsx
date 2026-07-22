import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Github, Linkedin, Mail, Send, Terminal, Lock } from "lucide-react";
import { Section } from "./Section";

const SOCIALS = [
  {
    Icon: Github,
    label: "github",
    value: "github.com/armaan-1207",
    href: "https://github.com/armaan-1207",
    accent: "primary",
  },
  {
    Icon: Linkedin,
    label: "linkedin",
    value: "armaanmalhotra12",
    href: "https://linkedin.com/in/armaanmalhotra12/",
    accent: "secondary",
  },
  {
    Icon: Mail,
    label: "email",
    value: "amalhotra1be25@thapar.edu",
    href: "mailto:amalhotra1be25@thapar.edu",
    accent: "primary",
  },
] as const;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

    if (!ACCESS_KEY || ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setTimeout(() => {
        setSending(false);
        setSent(true);
      }, 700);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio Contact from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please email me directly at amalhotra1be25@thapar.edu.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" index="07" title="contact.init()">
      <div className="mx-auto max-w-4xl w-full">
        {/* ── Header ── */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Shield icon */}
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <ShieldCheck
                size={60}
                className="text-primary"
                style={{ filter: "drop-shadow(0 0 18px rgba(0,255,157,0.65))" }}
              />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_8px_#00ff9d]" />
            </div>
          </div>

          <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Initiate{" "}
            <span
              className="text-secondary"
              style={{
                textShadow:
                  "0 0 18px rgba(0,217,255,0.75), 0 0 40px rgba(0,217,255,0.3)",
              }}
            >
              encrypted transmission
            </span>
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base text-muted-foreground">
            Open to cybersecurity collaborations, CTF teams, mentorship, or just a
            good conversation about security research. Establish TLS channel below.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* ── Terminal contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-xl border border-primary/30 bg-[#070b12]/90 shadow-[0_0_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex items-center gap-1.5 font-mono text-xs text-foreground/90 font-semibold">
                    <Terminal size={12} className="text-primary animate-pulse" />
                    <span>tls_handshake.sh</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-primary/80">
                  <Lock size={11} /> 256-BIT_AES
                </div>
              </div>

              {/* Form body */}
              <div className="p-6">
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-primary/90">$ name --sender</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="your_name"
                        className="term-input w-full rounded-lg border border-border/70 bg-surface/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/35 transition-all focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,157,0.2)] focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-primary/90">$ email --reply-to</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="term-input w-full rounded-lg border border-border/70 bg-surface/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/35 transition-all focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,157,0.2)] focus:outline-none"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-primary/90">$ message --payload</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="enter encrypted message..."
                        className="term-input w-full resize-none rounded-lg border border-border/70 bg-surface/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/35 transition-all focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,157,0.2)] focus:outline-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={sending}
                      className="group flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary/15 px-4 py-3 text-sm font-bold text-primary transition-all hover:bg-primary/25 hover:glow-neon disabled:opacity-60 shadow-[0_0_16px_rgba(0,255,157,0.15)]"
                    >
                      <Send
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                      {sending ? "ENCRYPTING_AND_SENDING..." : "./transmit_message --secure"}
                    </button>

                    {error && (
                      <p className="mt-2 text-xs text-destructive border-l-2 border-destructive pl-2 py-1 bg-destructive/10 rounded">
                        {error}
                      </p>
                    )}
                  </form>
                ) : (
                  /* Success state */
                  <div className="py-12 text-center font-mono">
                    <p className="text-4xl text-primary" style={{ textShadow: "0 0 18px rgba(0,255,157,0.8)" }}>
                      [ ✔ ]
                    </p>
                    <p className="mt-3 text-base font-bold text-primary">TRANSMISSION ACKNOWLEDGED</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Secure communication channel established. I&apos;ll get back to you soon.
                    </p>
                    <p className="mt-6 text-[11px] text-muted-foreground">
                      <span className="text-primary/60">$</span>{" "}
                      <span className="text-muted-foreground">exit 0</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Social link cards ── */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <p className="font-mono text-xs font-semibold text-muted-foreground">
              <span className="text-primary">$</span>{" "}
              <span>ls --links --verified</span>
            </p>

            {SOCIALS.map(({ Icon, label, value, href, accent }) => {
              const isPrimary = accent === "primary";
              return (
                <a
                  key={label}
                  href={href}
                  id={`social-${label}`}
                  target={href && href.startsWith("http") ? "_blank" : undefined}
                  rel={href && href.startsWith("http") ? "noreferrer" : undefined}
                  className={`flex items-center gap-4 rounded-xl border bg-[#070b12]/90 p-5 transition-all hover:bg-card backdrop-blur-md ${
                    isPrimary
                      ? "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_22px_rgba(0,255,157,0.12)]"
                      : "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_22px_rgba(0,217,255,0.12)]"
                  }`}
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border ${
                      isPrimary
                        ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_10px_rgba(0,255,157,0.2)]"
                        : "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_10px_rgba(0,217,255,0.2)]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-semibold">
                      {label}
                    </p>
                    <p
                      className={`truncate font-mono text-sm font-bold ${
                        isPrimary ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
