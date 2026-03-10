"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExtraCurricular() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activities = [
    {
      title: "IIT Blood Donation Program",
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
      title: "IIT Christmas Event Organizer & Coordinator",
      description:
        "Worked as an organizer and coordinator between lecturers and students for the Christmas event organized at IIT.",
      images: ["/activities/iit-christmas-event/christmas-event-1.jpg"],
      videos: [
        "/activities/iit-christmas-event/christmas-event-1.mp4",
        "/activities/iit-christmas-event/christmas-event-2.mp4",
      ],
    },
    {
      title: "IIT Halloween Event - Main Organizing Committee",
      description:
        "Served on the main organizing committee for the IIT Halloween event, coordinating event planning, team collaboration, and on-ground execution.",
      images: [
        "/activities/iit-halloween-event/halloween-event-1.jpg",
        "/activities/iit-halloween-event/halloween-event-2.jpg",
        "/activities/iit-halloween-event/halloween-event-3.jpg",
      ],
      videos: ["/activities/iit-halloween-event/halloween-event-1.mp4"],
    },
    {
      title: "School Football Team Representation",
      description:
        "Represented the school football team in inter-school competitions, demonstrating teamwork, discipline, and leadership on and off the field.",
      images: ["/activities/school-football-team/school-football-team-1.jpg"],
    },
    {
      title: "Matara City FA vs Maldives Football Fixture",
      description:
        "Took part in an international football fixture representing Matara City Football Academy against a Maldives side, gaining valuable competitive exposure and team-play experience.",
      images: [
        "/activities/international-football-experience/international-football-experience-1.jpg",
      ],
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
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">{activity.title}</h3>
              <p className="text-slate-200 leading-relaxed">{activity.description}</p>
              {activity.images && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activity.images.map((src, imageIndex) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => {
                        setSelectedVideo(null);
                        setSelectedImage(src);
                      }}
                      aria-label={`${activity.title} image ${imageIndex + 1}`}
                      className={`relative h-32 overflow-hidden rounded-xl border border-sky-300/20 bg-slate-950/55 ${
                        activity.images?.length === 1 ? "col-span-2 mx-auto w-full max-w-56" : ""
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${activity.title} image ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
              {activity.videos && (
                <div className="mt-5 grid gap-3">
                  {activity.videos.map((src, videoIndex) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => {
                        setSelectedImage(null);
                        setSelectedVideo(src);
                      }}
                      className="group relative h-44 w-full overflow-hidden rounded-xl border border-sky-300/20 bg-slate-950/55"
                      aria-label={`${activity.title} video ${videoIndex + 1}`}
                    >
                      <video
                        preload="metadata"
                        muted
                        playsInline
                        className="h-full w-full object-contain"
                      >
                        <source src={src} type="video/mp4" />
                      </video>
                      <span className="pointer-events-none absolute inset-0 grid place-items-center bg-slate-900/25 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-slate-900/40">
                        Click to play
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-sky-300/20 bg-slate-950/95 p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-3 top-3 z-10 rounded-md bg-slate-900/75 px-3 py-1 text-sm font-semibold text-white"
              aria-label="Close video"
            >
              Close
            </button>
            <video
              controls
              autoPlay
              preload="metadata"
              className="max-h-[80vh] w-full rounded-xl bg-black object-contain"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl border border-sky-300/20 bg-slate-950/95 p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 rounded-md bg-slate-900/75 px-3 py-1 text-sm font-semibold text-white"
              aria-label="Close image"
            >
              Close
            </button>
            <Image
              src={selectedImage}
              alt="Selected activity image"
              width={1600}
              height={1000}
              className="mx-auto h-auto max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}