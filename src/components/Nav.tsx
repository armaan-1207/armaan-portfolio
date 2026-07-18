import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#writeups", label: "writeups" },
  { href: "#certs", label: "certs" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-[#0a0e14]/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm">
          <span className="text-primary">$</span>{" "}
          <span className="text-foreground">whoami</span>
          <span className="text-secondary">.sh</span>
        </a>
        <nav className="hidden gap-7 font-mono text-xs md:flex">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-primary/60">0{i + 1}.</span>
              {l.label}
            </a>
          ))}
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
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary"
              >
                <span className="text-primary/60">0{i + 1}.</span>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
