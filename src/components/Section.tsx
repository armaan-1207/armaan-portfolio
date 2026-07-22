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
    <div style={{ perspective: "1200px" }} className="w-full">
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 70, rotateX: 14, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col scroll-mt-28 rounded-xl border border-border/80 bg-[#080d16]/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,255,157,0.12)]"
      >
        {/* Tiling Window Top Bar with Glowing Index Badge */}
        <div className="flex items-center justify-between border-b border-border/60 bg-[#060a12]/95 px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="grid h-6 px-2 place-items-center rounded bg-primary/10 border border-primary/30 font-mono text-xs font-bold text-primary shadow-[0_0_12px_rgba(0,255,157,0.25)]">
              {index}
            </span>
            <h2 className="font-mono text-sm sm:text-base tracking-tight font-bold">
              <span className="text-foreground">{head}</span>
              <span className="text-primary/90">{tail}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground/60">
            <Minus size={14} className="hover:text-primary transition-colors cursor-pointer" />
            <Maximize2 size={12} className="hover:text-primary transition-colors cursor-pointer" />
            <X size={14} className="hover:text-red-400 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Content Area with 3D Depth Padding */}
        <div className="p-6 md:p-8 relative">
          {children}
        </div>
      </motion.section>
    </div>
  );
}
