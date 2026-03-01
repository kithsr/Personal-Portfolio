"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Extra-Curricular", href: "#extra-curricular" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "extra-curricular", "contact"];
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 10) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(currentScrollY < lastScrollY);
      }

      lastScrollY = currentScrollY;

      const viewportMarker = window.innerHeight * 0.35;
      let currentActive = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top - viewportMarker);
          if (distance < closestDistance) {
            closestDistance = distance;
            currentActive = sectionId;
          }
        }
      }

      if (window.innerHeight + currentScrollY >= document.body.scrollHeight - 4) {
        currentActive = "contact";
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-slate-950/85 shadow-[0_8px_30px_rgba(2,6,23,0.45)] border-sky-300/20"
          : "bg-slate-950/45 shadow-sm border-sky-300/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, "#home")}
              className={`font-bold tracking-wide text-transparent bg-gradient-to-r from-sky-200 via-cyan-200 to-indigo-200 bg-clip-text transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Personal Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeSection === item.href.replace("#", "")
                      ? "text-sky-100 bg-sky-400/20 border border-sky-300/35"
                      : "text-blue-100 hover:text-sky-200 hover:bg-slate-800/60 border border-transparent"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-100 hover:text-sky-200 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-950/95 border-t border-sky-300/15">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-sky-100 bg-sky-400/20"
                    : "text-blue-100 hover:text-sky-200 hover:bg-slate-800/60"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
