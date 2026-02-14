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
    <section id="skills" className="min-h-screen py-20 bg-blue-950 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-blue-950 rounded-lg p-3 text-center text-blue-100 font-medium hover:bg-blue-800 transition-colors"
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
