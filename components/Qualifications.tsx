type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialUrl: string;
};

export default function Qualifications() {
  const certifications: Certification[] = [
    {
      title: "CEFR B1 PET Preparation Course",
      issuer: "Cambridge College",
      issued: "07/11/2024",
      credentialUrl: "/certifications/ccefr-b1-pet-preparation-course.jpg",
    },
    {
      title: "Add your second certification",
      issuer: "Certification Provider",
      issued: "Month YYYY",
      credentialUrl: "/certifications/your-second-certificate.jpg",
    },
  ];

  return (
    <section id="qualifications" className="section-shell">
      <div className="content-wrap">
        <h2 className="section-title">Qualifications & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="glass-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(2,6,23,0.55)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-300/25 bg-sky-400/10 text-xl">
                🏅
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{certification.title}</h3>
              <p className="text-slate-200 mb-1">{certification.issuer}</p>
              <p className="text-sky-100/90 mb-5">Issued: {certification.issued}</p>
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-sky-400/20 border border-sky-300/35 px-4 py-2 text-sky-100 font-medium hover:bg-sky-400/30 transition-colors"
              >
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}