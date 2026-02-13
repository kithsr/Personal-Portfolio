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
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Get In Touch
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Or reach out directly at{" "}
            <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              your.email@example.com
            </a>
          </p>
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-600 dark:text-gray-400">
        <p>© 2026 Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
}
