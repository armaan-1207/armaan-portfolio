import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { CTFWriteups } from "@/components/CTFWriteups";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "alex_nakamura // offensive security researcher" },
      {
        name: "description",
        content:
          "Portfolio of Alex Nakamura — offensive security researcher, CTF player, and red-team engineer. Exploits, writeups, tools, and engagements.",
      },
      { property: "og:title", content: "alex_nakamura // offensive security researcher" },
      {
        property: "og:description",
        content: "Exploits, CTF writeups, red-team tooling, and security research.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className="min-h-screen bg-[#0a0e14] text-foreground">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CTFWriteups />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
