"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeViewer from "./ResumeViewer";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [onLightSection, setOnLightSection] = useState(false);

  const handleScroll = useCallback(() => {
    // Active section detection
    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    // Scroll progress (0 to 1)
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);

    // Light/dark detection — switch when the section boundary is
    // well past the navbar (past the gradient zone) so the visible
    // content behind the navbar has already fully changed color.
    const sampleY = 100;
    const lightSections = document.querySelectorAll(".section-light");
    let isOnLight = false;
    lightSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= sampleY && rect.bottom >= sampleY) {
        isOnLight = true;
      }
    });
    setOnLightSection(isOnLight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Black base layer — always present */}
        <div className="absolute inset-0 bg-black" />
        {/* White layer — fades in/out over black with a smooth CSS transition */}
        <div
          className="absolute inset-0 bg-white transition-opacity duration-700 ease-in-out"
          style={{ opacity: onLightSection ? 1 : 0 }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#about" className="flex-shrink-0">
            <img
              src="/images/logo-v4.png"
              alt="Jason Bokinz"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-500 rounded-full ${
                  activeSection === link.href.slice(1)
                    ? "text-light-blue"
                    : onLightSection
                      ? "text-gray-400 hover:text-black"
                      : "text-gray-500 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-light-blue"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <button
              onClick={() => setResumeOpen(true)}
              className="ml-4 text-sm font-medium px-5 py-2 rounded-full border border-light-blue/50 text-light-blue hover:bg-light-blue hover:text-black hover:border-light-blue hover:shadow-[0_0_20px_rgba(125,211,252,0.3)] transition-all duration-300 cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 relative w-8 h-8"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-1 block h-px w-6 transition-all duration-500 ${
                onLightSection ? "bg-black" : "bg-white"
              } ${mobileOpen ? "top-1/2 rotate-45" : "top-2.5"}`}
            />
            <span
              className={`absolute left-1 top-1/2 block h-px transition-all duration-500 ${
                onLightSection ? "bg-black" : "bg-white"
              } ${mobileOpen ? "w-0 opacity-0" : "w-4 opacity-100"}`}
            />
            <span
              className={`absolute left-1 block h-px w-6 transition-all duration-500 ${
                onLightSection ? "bg-black" : "bg-white"
              } ${mobileOpen ? "top-1/2 -rotate-45" : "top-[18px]"}`}
            />
          </button>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[3px] z-10 rounded-r-full bg-light-blue"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-3xl font-light text-white hover:text-light-blue transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  setMobileOpen(false);
                  setResumeOpen(true);
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-4 text-lg font-medium px-8 py-3 rounded-full border border-light-blue text-light-blue hover:bg-light-blue hover:text-black hover:shadow-[0_0_20px_rgba(125,211,252,0.3)] transition-all duration-300 cursor-pointer"
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Viewer */}
      <ResumeViewer isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
