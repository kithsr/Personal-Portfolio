"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showDetails, setShowDetails] = useState(false);
  const [visibleLine, setVisibleLine] = useState(0);

  useEffect(() => {
    // Let the image settle first, then reveal text content in sequence.
    const showDetailsId = window.setTimeout(() => {
      setShowDetails(true);
    }, 700);

    return () => window.clearTimeout(showDetailsId);
  }, []);

  useEffect(() => {
    if (!showDetails) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setVisibleLine((current) => {
        if (current >= 5) {
          window.clearInterval(intervalId);
          return current;
        }

        return current + 1;
      });
    }, 220);

    return () => window.clearInterval(intervalId);
  }, [showDetails]);

  const lineClass = (line: number) =>
    `transition-all duration-500 ease-out ${
      visibleLine >= line ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
    }`;

  return (
    <section id="home" className="min-h-screen pt-16">
      <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center px-8 sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-teal-400/20" />
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1.5px), radial-gradient(circle at 70% 40%, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
              backgroundSize: "140px 140px, 180px 180px",
            }}
          />

          <div className="relative z-10 max-w-xl py-10 sm:py-14 md:py-16">
            <p className={`${lineClass(1)} inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-1 text-sm sm:text-base text-cyan-100 mb-5 subtle-ring`}>
              Hi, I&apos;m
            </p>
            <h1 className={`${lineClass(2)} hero-title text-white text-4xl sm:text-6xl md:text-7xl leading-[0.92] drop-shadow-[0_12px_30px_rgba(2,6,23,0.45)]`}>
              A.W.Kithsara
            </h1>
            <p className={`${lineClass(3)} mt-5 text-slate-100/95 text-lg sm:text-2xl leading-relaxed max-w-lg`}>
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>

            <div className={`${lineClass(4)} mt-7 flex flex-wrap gap-3 text-sm text-cyan-50/95`}>
              <span className="soft-chip">Product-Minded Engineer</span>
              <span className="soft-chip">Modern Web + Mobile</span>
              <span className="soft-chip">AI/ML Enthusiast</span>
            </div>

            <div className={`${lineClass(5)} mt-7 flex gap-3 sm:gap-4 flex-wrap`}>
              <a
                href="#projects"
                className="inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-teal-200 px-6 sm:px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_28px_rgba(45,212,191,0.32)] transition hover:scale-[1.02] hover:from-cyan-200 hover:to-teal-100"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-cyan-200/30 bg-slate-900/45 px-6 sm:px-8 py-3 text-sm font-semibold text-slate-100 transition hover:scale-[1.02] hover:bg-slate-800/70"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[420px] md:min-h-full overflow-hidden">
          <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl float-soft" />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile-no-bg.png`}
            alt="A.W.Kithsara"
            fill
            priority
            className="object-contain object-bottom brightness-105 contrast-105 saturate-115 drop-shadow-[0_20px_55px_rgba(8,145,178,0.42)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-slate-950/85 via-slate-950/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
