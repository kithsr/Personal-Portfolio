"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-slate-950"
    >
      <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center bg-[#020B26] px-8 sm:px-12 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45) 1px, transparent 1.5px), radial-gradient(circle at 70% 40%, rgba(255,255,255,0.35) 1px, transparent 1.5px)",
              backgroundSize: "140px 140px, 180px 180px",
            }}
          />

          <div className="relative z-10 max-w-md py-14 sm:py-16">
            <p className="text-yellow-400 text-lg sm:text-xl mb-2">Hi, I&apos;m</p>
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95]">
              A.W.Kithsara
            </h1>
            <p className="mt-6 text-slate-300 text-xl sm:text-2xl">
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-flex rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-slate-500/70 bg-slate-900/30 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800/50"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] md:min-h-full bg-[#030b21]">
          <Image
            src="/profile-no-bg.png"
            alt="A.W.Kithsara"
            fill
            priority
            className="object-contain object-bottom brightness-100 contrast-100 saturate-105 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-slate-950/35 to-transparent" />
        </div>
      </div>
    </section>
  );
}
