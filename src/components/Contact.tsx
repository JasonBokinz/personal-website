"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-dark relative overflow-x-clip -mt-1">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-light-blue/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 md:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-14 leading-relaxed"
        >
          I&apos;m currently looking for full-time opportunities and open to
          freelance or contract work. If you have a role, a project, or an idea
          you&apos;d like to discuss, I&apos;d love to hear from you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          {/* Book a Meeting */}
          <a
            href={personalInfo.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-light-blue text-black font-semibold px-8 py-4 rounded-lg hover:bg-light-blue-dim transition-all duration-300 text-base"
          >
            <CalendarIcon className="w-5 h-5" />
            Book a Meeting
          </a>

          {/* Send an Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center justify-center gap-3 border border-gray-700 text-white font-semibold px-8 py-4 rounded-lg hover:border-light-blue hover:text-light-blue transition-all duration-300 text-base"
          >
            <MailIcon className="w-5 h-5" />
            Send an Email
          </a>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-center">
          <span className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </span>
        </div>
      </div>
    </section>
  );
}
