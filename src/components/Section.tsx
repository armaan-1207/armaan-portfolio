import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  // Split title on the FIRST dot so the "extension" (e.g. ".arsenal",
  // ".build()") renders in cyan for a consistent green/cyan heading rhythm.
  const dot = title.indexOf(".");
  const head = dot >= 0 ? title.slice(0, dot) : title;
  const tail = dot >= 0 ? title.slice(dot) : "";

  return (
    <section
      id={id}
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      {/* Animated horizontal command-execution divider */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-0 h-px origin-left bg-gradient-to-r from-primary/0 via-primary/70 to-secondary/60 shadow-[0_0_10px_#00ff9d]"
      />

      <div className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-base text-primary md:text-lg">
          {index}.
        </span>
        <h2 className="font-mono text-3xl font-bold tracking-tight md:text-5xl">
          <span className="text-foreground">{head}</span>
          <span className="text-gradient-neon">{tail}</span>
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
      </div>
      {children}
    </section>
  );
}
