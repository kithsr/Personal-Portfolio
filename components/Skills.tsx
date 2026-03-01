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
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">Skills</h2>
        <div className="glass-panel p-6 md:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-sky-300/15 bg-slate-900/55 p-3 text-center text-slate-100 font-medium hover:bg-slate-800/70 hover:border-sky-300/35 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
