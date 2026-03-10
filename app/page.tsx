"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Qualifications from "@/components/Qualifications";
import ExtraCurricular from "@/components/ExtraCurricular";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [introStep, setIntroStep] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          window.clearInterval(intervalId);
          return 100;
        }

        const step = Math.floor(Math.random() * 4) + 1;
        return Math.min(previous + step, 100);
      });
    }, 45);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress < 100 || introStep !== "loading") {
      return;
    }

    const toHomeId = window.setTimeout(() => {
      setIntroStep("done");
    }, 250);

    return () => window.clearTimeout(toHomeId);
  }, [progress, introStep]);

  if (introStep === "loading") {
    return (
      <main className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-slate-950">
        <div className="w-full max-w-md px-6">
          <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-sky-300/80">
            Loading Portfolio
          </p>

          <div className="h-3 overflow-hidden rounded-full border border-sky-300/30 bg-slate-800/70">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-center text-xs text-slate-300">{progress}%</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Qualifications />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <ExtraCurricular />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}
