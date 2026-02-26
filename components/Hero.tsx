"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16"
    >
      <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center bg-slate-950/35 px-8 sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-indigo-500/20" />
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45) 1px, transparent 1.5px), radial-gradient(circle at 70% 40%, rgba(255,255,255,0.35) 1px, transparent 1.5px)",
              backgroundSize: "140px 140px, 180px 180px",
            }}
          />

          <div className="relative z-10 max-w-md py-14 sm:py-16">
            <p className="inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-1 text-sm sm:text-base text-sky-200 mb-4">
              Hi, I&apos;m
            </p>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] drop-shadow-[0_10px_25px_rgba(2,6,23,0.35)]">
              A.W.Kithsara
            </h1>
            <p className="mt-6 text-slate-200 text-xl sm:text-2xl">
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-flex rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-8 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_rgba(34,211,238,0.35)] transition hover:scale-[1.02] hover:from-sky-300 hover:to-cyan-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-sky-300/30 bg-slate-900/40 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:scale-[1.02] hover:bg-slate-800/70"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] md:min-h-full bg-slate-950/30">
          <Image
            src="/profile-no-bg.png"
            alt="A.W.Kithsara"
            fill
            priority
            className="object-contain object-bottom brightness-100 contrast-100 saturate-110 drop-shadow-[0_16px_40px_rgba(15,23,42,0.45)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-slate-950/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
