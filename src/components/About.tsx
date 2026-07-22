import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, MapPin, Calendar, Zap, Shield, Fingerprint } from "lucide-react";

export function About() {
  return (
    <Section id="about" index="01" title="whoami --verbose">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* Terminal Bio Window */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-7 rounded-xl border border-secondary/30 bg-[#060a12]/95 p-6 shadow-[0_0_30px_rgba(0,0,0,0.7)] backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle cyan corner glow */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs font-semibold text-foreground/80">
                armaan@kali:~/bio
              </span>
            </div>
            <span className="font-mono text-[10px] text-secondary border border-secondary/30 px-2 py-0.5 rounded bg-secondary/10">
              CYBERSEC_ENTHUSIAST
            </span>
          </div>

          {/* Bio Content */}
          <div className="space-y-4 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground">
              <span className="text-secondary font-bold">$ cat profile.summary</span>
            </p>
            <p>
              I am a dedicated <span className="text-primary font-semibold">Cybersecurity Enthusiast</span> and Computer Science Engineering undergraduate specializing in <span className="text-secondary font-semibold">penetration testing, network defense, and vulnerability research</span>.
            </p>
            <p>
              Driven by an insatiable curiosity for breaking complex systems to understand how they truly operate beneath the surface, I spend countless hours dissecting network protocols, auditing web architectures, and solving intricate Capture The Flag (CTF) challenges.
            </p>
            <p className="border-l-2 border-primary/50 pl-3 italic text-foreground/90 bg-primary/5 py-2 rounded-r">
              "Security is not a product, but a continuous process of adversarial thinking and relentless exploration."
            </p>

            {/* Core Focus Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {[
                "Penetration Testing",
                "Offensive Security",
                "Vulnerability Assessment",
                "CTF Player",
                "Network Defense",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-all hover:border-primary/60 hover:shadow-[0_0_12px_rgba(0,255,157,0.25)]"
                >
                  <Zap size={11} /> {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Credentials Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-primary/30 bg-[#060a12]/95 p-6 shadow-[0_0_30px_rgba(0,0,0,0.7)] backdrop-blur-md relative overflow-hidden group hover:border-primary/70 transition-all"
        >
          {/* Subtle emerald background lighting */}
          <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Academic Credentials
                </span>
              </div>
            </div>

            {/* University Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-mono text-base sm:text-lg font-bold text-foreground">
                  Thapar Institute of Engineering & Technology
                </h3>
                <p className="font-mono text-xs text-secondary font-semibold mt-1">
                  Bachelor of Engineering in Computer Science (B.E. CSE)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/40 font-mono text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} className="text-primary shrink-0" />
                  <span>Patiala, Punjab</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} className="text-secondary shrink-0" />
                  <span>2023 — 2027</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Verification Status & High-Contrast Kali Console Badge */}
          <div className="mt-6 pt-4 border-t border-border/50 flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Fingerprint size={13} className="text-primary" />
                CREDENTIAL_STATUS:
              </span>
              <span className="text-primary font-bold flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                VERIFIED_STUDENT
              </span>
            </div>

            {/* High-Contrast Kali Console Pill (Deep Purple & Neon Cyan) */}
            <div className="rounded-lg border border-purple-500/50 bg-[#0c0517] p-3 shadow-[0_0_20px_rgba(168,85,247,0.25)] font-mono text-xs flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-300 font-bold">
                <Shield size={14} className="text-purple-400 animate-pulse" />
                <span>whoami@kali:~$</span>
              </div>
              <span className="text-secondary font-semibold">root@armaan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
