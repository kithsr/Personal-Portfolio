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
    <section id="skills" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="glass-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(2,6,23,0.5)]"
            >
              <div className="rounded-2xl border border-cyan-200/20 bg-slate-950/55 p-4 text-center text-cyan-50 font-semibold tracking-wide hover:bg-slate-900/65 transition-colors">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
