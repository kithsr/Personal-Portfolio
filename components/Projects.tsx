export default function Projects() {
  const projects = [
    {
      title: "ProcuraX Mobile Application + Admin Dashboard",
      description: "A construction management system for International Construction Consortium (ICC) Pvt Ltd",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Node.js", "MongoDB", "Firebase"],
      link: "#",
      github: "#"
    },
    {
      title: "Business Website",
      description: "Designed and developed a modern business website for an eco-friendly toilet paper brand, highlighting sustainable products, brand values, and customer-friendly purchasing information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      title: "Sustainable Energy Web Project",
      description: "Developed a collaborative website promoting Affordable and Clean Energy (UN Sustainable Development Goal 7), focusing on renewable energy awareness and sustainable solutions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,6,23,0.58)]"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-cyan-400/70 via-teal-400/50 to-sky-500/70">
                <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute right-6 top-6 rounded-full border border-white/35 bg-slate-900/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Project {index + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="hero-title text-2xl text-white mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-100/90 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="soft-chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href={project.link}
                    className="inline-flex rounded-full bg-cyan-300/20 border border-cyan-200/35 px-4 py-2 text-cyan-100 font-medium hover:bg-cyan-300/30 transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex rounded-full border border-slate-400/40 bg-slate-900/50 px-4 py-2 text-slate-200 font-medium hover:bg-slate-800/70 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
