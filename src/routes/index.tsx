import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { ScrollProgress } from "@/components/ScrollProgress";
import { StatusBar } from "@/components/StatusBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "alex_nakamura // offensive security researcher" },
      {
        name: "description",
        content:
          "Portfolio of Alex Nakamura — offensive security researcher, CTF player, and red-team engineer.",
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

// Module-level flag: play once per visit (survives re-renders/remounts within
// the SPA session, resets on full page reload — which is "per visit").
let hasPlayed = false;

function Home() {
  const [loading, setLoading] = useState(() => !hasPlayed);

  useEffect(() => {
    if (!loading) hasPlayed = true;
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="boot"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[100]"
          >
            <LoadingScreen
              onDone={() => {
                hasPlayed = true;
                setLoading(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: hasPlayed && !loading ? 1 : 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: loading ? 0 : 0.15 }}
        className="min-h-screen bg-[#0a0e14] text-foreground"
      >
        <ScrollProgress />
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
      </motion.div>
    </>
  );
}
