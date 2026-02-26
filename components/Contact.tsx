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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Get In Touch
        </h2>
        <div className="glass-panel p-8">
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
                className="w-full px-4 py-2 border border-sky-300/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-900/70 text-white"
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
                className="w-full px-4 py-2 border border-sky-300/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-900/70 text-white"
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
                className="w-full px-4 py-2 border border-sky-300/20 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-900/70 text-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-300">
            Or reach out directly at{" "}
            <a href="mailto:kithsarawitharana21@gmail.com" className="text-sky-300 hover:underline">
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
