import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 glass-panel p-8 md:p-10">
            <p className="text-lg text-slate-100 leading-relaxed">
              I&apos;m a passionate developer focused on building clean, user-friendly, and high-performing digital products.
              Using modern web technologies, I turn ideas into reliable solutions through thoughtful design and maintainable code.
            </p>
            <p className="text-lg text-slate-100 leading-relaxed">
              Outside of development, I enjoy exploring emerging technologies, contributing to open source,
              and sharing knowledge with the developer community.
            </p>
            <div className="pt-2">
              <h3 className="text-2xl font-semibold text-white mb-5">Education</h3>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-4">
                <div className="md:mt-0 md:w-56">
                  <a
                    href="https://www.rahulacollege.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="rounded-2xl border border-sky-300/20 bg-slate-950/55 overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.45)] transition-transform hover:-translate-y-1">
                      <div className="relative h-44 w-full bg-slate-950">
                        <Image
                          src="/education/school.webp"
                          alt="Royal College, Colombo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-center text-slate-200 text-lg leading-snug">Rahula College, Matara</p>
                  </a>
                </div>

                <div className="md:mt-10 md:w-56">
                  <a
                    href="https://www.iit.ac.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="rounded-2xl border border-sky-300/20 bg-slate-950/55 overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.45)] transition-transform hover:-translate-y-1">
                      <div className="relative h-44 w-full bg-slate-950">
                        <Image
                          src="/education/local-university.webp"
                          alt="Informatics Institute of Technology"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-center text-slate-200 text-lg leading-snug">Informatics Institute of Technology</p>
                  </a>
                </div>

                <div className="md:mt-20 md:w-56">
                  <a
                    href="https://www.westminster.ac.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="rounded-2xl border border-sky-300/20 bg-slate-950/55 overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.45)] transition-transform hover:-translate-y-1">
                      <div className="relative h-44 w-full bg-slate-950">
                        <Image
                          src="/education/university.jpg"
                          alt="University of Westminster, London"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-center text-slate-200 text-lg leading-snug">University of Westminster, London</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/kithsr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sky-300/20 bg-slate-900/55 p-2 text-blue-100 hover:text-sky-200 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/alahapperuma-witharana-kithsara-61035b354/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sky-300/20 bg-slate-900/55 p-2 text-blue-100 hover:text-sky-200 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/itz_kithsara._/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sky-300/20 bg-slate-900/55 p-2 text-blue-100 hover:text-sky-200 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5C19.426 2 22 4.574 22 7.75v8.5C22 19.426 19.426 22 16.25 22h-8.5C4.574 22 2 19.426 2 16.25v-8.5C2 4.574 4.574 2 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25zm-4.25 3.5a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2.125a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
