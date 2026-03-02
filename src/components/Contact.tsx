"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="section-dark relative overflow-hidden">
      {/* Transition from white */}
      <div className="absolute -top-1 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            Always open to new opportunities, collaborations, or just a conversation
            about building things. Reach out anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-20"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-light-blue transition-colors duration-300 underline underline-offset-4 decoration-gray-700 hover:decoration-light-blue text-lg"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-light-blue transition-colors duration-300 underline underline-offset-4 decoration-gray-700 hover:decoration-light-blue text-lg"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white hover:text-light-blue transition-colors duration-300 underline underline-offset-4 decoration-gray-700 hover:decoration-light-blue text-lg"
          >
            {personalInfo.email}
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </span>
          <span className="text-sm text-gray-700">
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
}
