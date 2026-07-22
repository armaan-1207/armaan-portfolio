import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Github, Linkedin, Mail, Send, Terminal, Lock, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

const SOCIALS = [
  {
    Icon: Github,
    label: "GITHUB",
    value: "github.com/armaan-1207",
    url: "https://github.com/armaan-1207",
    color: "primary" as const,
  },
  {
    Icon: Linkedin,
    label: "LINKEDIN",
    value: "armaanmalhotra12",
    url: "https://linkedin.com/in/armaanmalhotra12/",
    color: "secondary" as const,
  },
  {
    Icon: Mail,
    label: "EMAIL",
    value: "armaanmalhotra25@thapar.edu",
    url: "mailto:amalhotra1be25@thapar.edu",
    color: "primary" as const,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMsg("ERR_EMPTY_FIELDS: All parameters are required.");
      return;
    }

    setStatus("sending");
    setStatusMsg("TLS_HANDSHAKE: Encrypting payload...");

    try {
      const res = await fetch("https://formspree.io/f/mqaevepq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setStatusMsg("PACKET_DELIVERED: Message transmitted successfully [200 OK].");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Transmission failed");
      }
    } catch {
      setStatus("error");
      setStatusMsg("ERR_CONNECTION_REFUSED: Formspree endpoint unreachable.");
    }
  };

  return (
    <Section id="contact" index="07" title="contact.init()">
      {/* Single High-Contrast Encrypted Transmission Card Console */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-xl border border-secondary/30 bg-[#070c14]/95 p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.8)] backdrop-blur-md w-full transition-all duration-300 hover:border-secondary/60 hover:shadow-[0_20px_55px_rgba(0,217,255,0.15)]"
      >
        {/* Central Lock Icon & INITIATE ENCRYPTED TRANSMISSION Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(0,255,157,0.3)]">
            <Lock size={26} className="animate-pulse" />
          </div>

          <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            <span className="text-foreground">INITIATE </span>
            <span className="text-gradient-neon">ENCRYPTED TRANSMISSION</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Open to cybersecurity collaborations, CTF teams, mentorship, or just a good conversation about security research. Establish TLS channel below.
          </p>
        </div>

        {/* 2-Column Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Form Console (tls_handshake.sh) */}
          <div className="lg:col-span-6 rounded-xl border border-primary/30 bg-[#080d17]/90 p-6 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-6 font-mono text-xs">
              <span className="text-primary font-bold flex items-center gap-2">
                <Terminal size={14} /> tls_handshake.sh
              </span>
              <span className="text-primary/90 bg-primary/10 border border-primary/30 px-2.5 py-0.5 rounded font-semibold flex items-center gap-1">
                <ShieldCheck size={12} /> 256-BIT AES
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 font-mono">
              <div>
                <label htmlFor="name-sender" className="block text-xs font-semibold text-primary mb-2">
                  $ name --sender
                </label>
                <input
                  id="name-sender"
                  type="text"
                  placeholder="your_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="term-input w-full rounded-lg border border-border/70 bg-[#04070d] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email-replyto" className="block text-xs font-semibold text-primary mb-2">
                  $ email --reply-to
                </label>
                <input
                  id="email-replyto"
                  type="email"
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="term-input w-full rounded-lg border border-border/70 bg-[#04070d] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message-payload" className="block text-xs font-semibold text-primary mb-2">
                  $ message --payload
                </label>
                <textarea
                  id="message-payload"
                  rows={4}
                  placeholder="enter encrypted message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="term-input w-full rounded-lg border border-border/70 bg-[#04070d] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all resize-none"
                />
              </div>

              {statusMsg && (
                <div
                  className={`rounded-lg border p-3 text-xs font-mono ${
                    status === "error"
                      ? "border-red-500/50 bg-red-500/10 text-red-400"
                      : status === "sent"
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-secondary/50 bg-secondary/10 text-secondary"
                  }`}
                >
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="glitch-btn scan-btn w-full flex items-center justify-center gap-2.5 rounded-lg border border-primary bg-primary/15 px-6 py-3.5 font-mono text-sm font-bold text-primary transition-all hover:bg-primary/25 shadow-[0_0_20px_rgba(0,255,157,0.25)]"
                data-text="./transmit_message --secure"
              >
                <Send size={16} />
                <span>./transmit_message --secure</span>
              </button>
            </form>
          </div>

          {/* Right Column: Verified Social Cards (tls --links --verified) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-2 font-mono text-xs text-muted-foreground">
              <span className="text-secondary font-bold flex items-center gap-2">
                <ShieldCheck size={14} /> tls --links --verified
              </span>
            </div>

            {SOCIALS.map((soc) => {
              const IconComp = soc.Icon;
              const isPrimary = soc.color === "primary";
              return (
                <motion.a
                  key={soc.label}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className={`flex items-center justify-between rounded-xl border bg-[#080d17]/90 p-5 transition-all backdrop-blur-md ${
                    isPrimary
                      ? "border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(0,255,157,0.15)]"
                      : "border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10 hover:shadow-[0_0_25px_rgba(0,217,255,0.15)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${
                        isPrimary
                          ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,255,157,0.2)]"
                          : "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_12px_rgba(0,217,255,0.2)]"
                      }`}
                    >
                      <IconComp size={22} />
                    </div>
                    <div>
                      <p className={`font-mono text-xs font-bold uppercase tracking-wider ${isPrimary ? "text-primary" : "text-secondary"}`}>
                        {soc.label}
                      </p>
                      <p className="font-mono text-xs sm:text-sm font-medium text-foreground/90 mt-0.5">
                        {soc.value}
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 size={18} className={isPrimary ? "text-primary opacity-80" : "text-secondary opacity-80"} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
