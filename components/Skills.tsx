export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
    }
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(2,6,23,0.55)]"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-sky-300/15 bg-slate-900/55 p-3 text-center text-slate-100 font-medium hover:bg-slate-800/70 hover:border-sky-300/35 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
