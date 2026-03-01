export default function Skills() {
  const skills = [
    "Machine Learning",
    "MongoDB",
    "Firebase",
    "Python",
    "Java",
    "Flutter",
    "Artificial Intelligence",
    "IT Security",
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "Node.js",
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-blue-950 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-blue-900 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-950 rounded-lg p-3 text-center text-blue-100 font-medium hover:bg-blue-800 transition-colors">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
