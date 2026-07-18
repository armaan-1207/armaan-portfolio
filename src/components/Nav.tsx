import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", id: "about", label: "about" },
  { href: "#skills", id: "skills", label: "skills" },
  { href: "#projects", id: "projects", label: "projects" },
  { href: "#writeups", id: "writeups", label: "writeups" },
  { href: "#certs", id: "certs", label: "certs" },
  { href: "#experience", id: "experience", label: "experience" },
  { href: "#contact", id: "contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: track which section is currently in view.
  useEffect(() => {
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        }
        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActive(bestId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    for (const l of LINKS) {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 nav-glow ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a0e14]/85 nav-glow-active"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm">
          <span className="text-primary">$</span>{" "}
          <span className="text-foreground">whoami</span>
          <span className="text-secondary">.sh</span>
        </a>
        <nav className="hidden gap-7 font-mono text-xs md:flex">
          {LINKS.map((l, i) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`group relative flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span
                  aria-hidden
                  className={`inline-block h-1.5 w-1.5 rounded-full transition-all ${
                    isActive
                      ? "bg-primary shadow-[0_0_8px_#00ff9d] animate-pulse"
                      : "bg-transparent"
                  }`}
                />
                <span className="text-primary/60">0{i + 1}.</span>
                {l.label}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded border border-primary/50 px-3.5 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary/10 hover:glow-neon"
        >
          ./connect
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-[#0a0e14]/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4 font-mono text-sm">
            {LINKS.map((l, i) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 py-2 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`inline-block h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-primary shadow-[0_0_8px_#00ff9d]" : "bg-transparent"
                    }`}
                  />
                  <span className="text-primary/60">0{i + 1}.</span>
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
