import { Section } from "./Section";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const PROJECTS = [
  {
    name: "shadowscan",
    desc: "High-performance async reconnaissance scanner written in Rust. Fingerprints 10k+ hosts per minute with adaptive rate limiting and passive DNS integration.",
    stack: ["rust", "tokio", "trust-dns"],
    stars: "2.4k",
    forks: "184",
    featured: true,
  },
  {
    name: "kernel-lens",
    desc: "eBPF-based runtime detection library. Traces syscalls, container escapes, and LOLbin abuse with sub-percent overhead.",
    stack: ["go", "ebpf", "libbpf"],
    stars: "1.1k",
    forks: "92",
    featured: true,
  },
  {
    name: "burp-smuggler",
    desc: "Burp Suite extension for automating HTTP/1.1 desync discovery. Generates payloads for CL.TE, TE.CL, and TE.TE variants.",
    stack: ["java", "burp-api"],
    stars: "870",
    forks: "61",
  },
  {
    name: "jwtcracker",
    desc: "GPU-accelerated JWT secret brute-forcer. Supports HS256/384/512 and ES-family JWTs with hashcat-style rules.",
    stack: ["cuda", "c++"],
    stars: "540",
    forks: "38",
  },
];

export function Projects() {
  return (
    <Section id="projects" index="03" title="projects.build()">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article
            key={p.name}
            className={`group relative flex flex-col rounded-lg border border-border bg-card/60 p-6 transition-all hover:border-primary/50 hover:bg-card ${
              p.featured ? "md:row-span-1" : ""
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span>
                  <span>git clone</span>
                  {p.featured && (
                    <span className="ml-auto rounded-full border border-secondary/40 bg-secondary/10 px-2 py-0.5 text-[10px] text-secondary">
                      featured
                    </span>
                  )}
                </div>
                <h3 className="truncate font-mono text-xl text-foreground group-hover:text-primary">
                  {p.name}
                </h3>
              </div>
              <div className="flex shrink-0 gap-2 text-muted-foreground">
                <a href="#" aria-label="repo" className="hover:text-primary"><Github size={17} /></a>
                <a href="#" aria-label="live" className="hover:text-primary"><ExternalLink size={17} /></a>
              </div>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

            <div className="mt-auto flex flex-wrap items-center gap-4 gap-y-3">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {p.stack.map((s) => (
                  <span key={s} className="rounded border border-border bg-surface/50 px-2 py-0.5 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Star size={12} className="text-primary" />{p.stars}</span>
                <span className="flex items-center gap-1"><GitFork size={12} className="text-secondary" />{p.forks}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
