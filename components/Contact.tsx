"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-shell">
      <div className="content-wrap max-w-6xl">
        <h2 className="section-title">
          Get In Touch
        </h2>
        <div className="glass-panel p-8 md:p-10 grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="hero-title text-3xl text-white leading-tight">Let&apos;s build something meaningful.</h3>
            <p className="mt-4 text-slate-200 leading-relaxed">
              Whether it&apos;s a product idea, internship opportunity, or collaboration, I&apos;m open to conversations that create real value.
            </p>
            <div className="mt-6 space-y-3 text-slate-100/90">
              <p className="rounded-2xl border border-cyan-200/15 bg-slate-900/45 px-4 py-3">Colombo, Sri Lanka</p>
              <p className="rounded-2xl border border-cyan-200/15 bg-slate-900/45 px-4 py-3">Response time: usually within 24 hours</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-100 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cyan-200/20 rounded-xl focus:ring-2 focus:ring-cyan-300/60 focus:border-transparent bg-slate-900/70 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cyan-200/20 rounded-xl focus:ring-2 focus:ring-cyan-300/60 focus:border-transparent bg-slate-900/70 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-100 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-cyan-200/20 rounded-xl focus:ring-2 focus:ring-cyan-300/60 focus:border-transparent bg-slate-900/70 text-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-300 to-teal-200 hover:from-cyan-200 hover:to-teal-100 text-slate-950 font-semibold px-8 py-3 transition-colors shadow-[0_12px_30px_rgba(45,212,191,0.28)]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-300">
            Or reach out directly at{" "}
            <a href="mailto:kithsarawitharana21@gmail.com" className="text-cyan-200 hover:underline">
              kithsarawitharana21@gmail.com
            </a>
          </p>
        </div>
        <footer className="mt-20 text-center text-slate-400">
          <p>© 2026 A.W.Kithsara. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
