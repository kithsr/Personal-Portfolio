export default function Projects() {
  const projects = [
    {
      title: "ProcuraX",
      description: "A construction management system for Internation Construction Consoritum (ICC) Pvt Ltd",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop functionality",
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
    <section id="projects" className="min-h-screen py-20 bg-blue-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-950 border border-blue-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-blue-100 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-900 text-blue-100 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-blue-300 hover:underline font-medium"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="text-blue-200 hover:underline font-medium"
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
