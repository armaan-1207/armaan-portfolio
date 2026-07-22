import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Maximize2, Minus, X } from "lucide-react";

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
  const dot = title.indexOf(".");
  const head = dot >= 0 ? title.slice(0, dot) : title;
  const tail = dot >= 0 ? title.slice(dot) : "";

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col scroll-mt-24 rounded-lg border border-border/80 bg-[#0a0f18]/80 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden"
    >
      {/* Tiling Window Top Bar */}
      <div className="flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-primary">
            [{index}]
          </span>
          <h2 className="font-mono text-sm tracking-tight text-muted-foreground">
            <span className="text-foreground/90">{head}</span>
            <span className="text-primary/80">{tail}</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground/50">
          <Minus size={14} className="hover:text-primary transition-colors cursor-pointer" />
          <Maximize2 size={12} className="hover:text-primary transition-colors cursor-pointer" />
          <X size={14} className="hover:text-red-400 transition-colors cursor-pointer" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </motion.section>
  );
}
