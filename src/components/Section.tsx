import type { ReactNode } from "react";

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
  return (
    <section id={id} className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-sm text-primary">{index}.</span>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
      </div>
      {children}
    </section>
  );
}
