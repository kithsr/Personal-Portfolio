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
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with forecasts and interactive maps",
      technologies: ["Next.js", "Tailwind CSS", "Weather API", "Mapbox"],
      link: "#",
      github: "#"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support and SEO optimization",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
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
              className="glass-panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(2,6,23,0.55)]"
            >
              <div className="h-48 bg-gradient-to-br from-sky-500/80 via-cyan-500/70 to-indigo-500/80 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-200 mb-4">
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
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="inline-flex rounded-full bg-sky-400/20 border border-sky-300/35 px-4 py-2 text-sky-100 font-medium hover:bg-sky-400/30 transition-colors"
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
