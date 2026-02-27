export default function ExtraCurricular() {
  const activities = [
    {
      title: "University Coding Club",
      description:
        "Organize coding meetups, support peer learning sessions, and mentor junior students on web development fundamentals.",
    },
    {
      title: "Hackathons & Tech Events",
      description:
        "Participate in hackathons and community events to build rapid prototypes, collaborate in teams, and sharpen problem-solving skills.",
    },
    {
      title: "Volunteer & Community Work",
      description:
        "Contribute to student-led initiatives and community programs through planning, coordination, and digital support.",
    },
  ];

  return (
    <section id="extra-curricular" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">Extra-Curricular Activities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(2,6,23,0.55)]"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{activity.title}</h3>
              <p className="text-slate-200 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}