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
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Armaan Malhotra // Cybersecurity & Red Teaming" },
      {
        name: "description",
        content:
          "Portfolio of Armaan Malhotra — cybersecurity enthusiast, CTF player, and engineering undergraduate at TIET Patiala.",
      },
      { property: "og:title", content: "Armaan Malhotra // Cybersecurity Portfolio" },
      {
        property: "og:description",
        content: "CTF writeups, security projects, and hands-on learning in web application security and network forensics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

let hasPlayed = false;

function Home() {
  const [loading, setLoading] = useState(() => !hasPlayed);

  useEffect(() => {
    if (!loading) hasPlayed = true;
  }, [loading]);

  return (
    <SmoothScroll>
      <CustomCursor />
      
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
        className="relative min-h-screen bg-[#0a0e14] text-foreground cursor-none"
      >
        {/* Global terminal-environment background layers */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-[0.25]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 scanlines opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,255,157,0.06), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(0,217,255,0.05), transparent 60%)",
          }}
        />

        <div className="relative z-10">
          <ScrollProgress />
          <Nav />
          <StatusBar />
          <main className="mx-auto max-w-[1600px] p-4 lg:p-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 pt-24">
            <div className="lg:col-span-12">
              <Hero />
            </div>
            <div className="lg:col-span-7">
              <About />
            </div>
            <div className="lg:col-span-5">
              <Skills />
            </div>
            <div className="lg:col-span-12">
              <Projects />
            </div>
            <div className="lg:col-span-6">
              <CTFWriteups />
            </div>
            <div className="lg:col-span-6">
              <Certifications />
            </div>
            <div className="lg:col-span-12">
              <Experience />
            </div>
            <div className="lg:col-span-12">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </motion.div>
    </SmoothScroll>
  );
}
