import Image from "next/image";

export default function ExtraCurricular() {
  const activities = [
    {
      title: "Blood Donation Program - IIT (2025)",
      description:
        "Volunteered in a blood donation program at IIT in 2025 with fellow students, coordinating donor registration, awareness, and event logistics.",
      images: [
        "/activities/blood-donation/blood-donation-1.jpg",
        "/activities/blood-donation/blood-donation-2.jpg",
        "/activities/blood-donation/blood-donation-3.jpg",
        "/activities/blood-donation/blood-donation-4.jpg",
        "/activities/blood-donation/blood-donation-5.jpg",
      ],
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
              {activity.images && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {activity.images.map((src, imageIndex) => (
                    <div
                      key={src}
                      className="relative h-32 overflow-hidden rounded-xl border border-sky-300/20 bg-slate-950/55"
                    >
                      <Image
                        src={src}
                        alt={`Blood donation activity image ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}