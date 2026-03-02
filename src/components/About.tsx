"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, hobbies, languages } from "@/data/personal";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-dark min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-light-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32 w-full">
        {/* === Top row: Photo | Name + bio === */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Photo + socials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center md:items-start gap-5"
          >
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/profile-v2.jpg"
                alt="Jason Bokinz"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Location + email */}
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-light-blue" />
                {personalInfo.location}
              </span>
              <span className="w-px h-3.5 bg-gray-700" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-light-blue transition-colors duration-300"
              >
                <Mail size={14} className="text-light-blue" />
                {personalInfo.email}
              </a>
            </div>

            {/* Socials */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 cursor-pointer hover:border-light-blue/40 hover:bg-light-blue/5 transition-all duration-300"
              >
                <Github size={15} className="text-gray-400 group-hover:text-light-blue transition-colors duration-300" />
                <span className="text-sm text-gray-400 group-hover:text-light-blue transition-colors duration-300">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 cursor-pointer hover:border-light-blue/40 hover:bg-light-blue/5 transition-all duration-300"
              >
                <Linkedin size={15} className="text-gray-400 group-hover:text-light-blue transition-colors duration-300" />
                <span className="text-sm text-gray-400 group-hover:text-light-blue transition-colors duration-300">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Name + title + bio */}
          <div className="space-y-3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-light-blue">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="max-w-2xl pt-2"
            >
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                I graduated from Stony Brook University with a degree in Computer
                Science and a specialization in Artificial Intelligence. I joined an
                EdTech startup from day one and helped scale it
                to <span className="text-gray-200">80,000+ users</span> in under two
                years, shipping features daily across the full stack from database
                architecture to real-time AI systems. I care about writing clean code,
                building intuitive interfaces, and solving problems that make a real
                difference for users.
              </p>
            </motion.div>
          </div>
        </div>

        {/* === Bottom row: Languages | Hobbies === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-14 flex flex-col md:flex-row gap-10 md:gap-16"
        >
          {/* Languages — same width as photo column */}
          <div className="flex-shrink-0 md:w-72">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 text-center md:text-left">
              Languages
            </p>
            <div className="grid grid-cols-4 gap-y-5 gap-x-4 justify-items-center">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-xl border border-gray-800 bg-gray-900/50 flex items-center justify-center group-hover:border-light-blue/40 group-hover:bg-gray-800/80 transition-all duration-300">
                    <img
                      src={lang.image}
                      alt={lang.name}
                      width={26}
                      height={26}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies — fills remaining space */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 text-center md:text-left">
              When I&apos;m not coding
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {hobbies.map((hobby) => (
                <div key={hobby.label} className="group relative">
                  <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden ring-1 ring-white/10 bg-gray-800">
                    <Image
                      src={hobby.image}
                      alt={hobby.label}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-xs font-medium text-white/90 tracking-wide">
                      {hobby.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile-only location + socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="md:hidden flex flex-col items-center gap-3 mt-8"
        >
          {/* Location + email */}
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-light-blue" />
              {personalInfo.location}
            </span>
            <span className="w-px h-3.5 bg-gray-700" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-light-blue transition-colors duration-300"
            >
              <Mail size={14} className="text-light-blue" />
              {personalInfo.email}
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 cursor-pointer hover:border-light-blue/40 hover:bg-light-blue/5 transition-all duration-300"
            >
              <Github size={15} className="text-gray-400 group-hover:text-light-blue transition-colors duration-300" />
              <span className="text-sm text-gray-400 group-hover:text-light-blue transition-colors duration-300">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 cursor-pointer hover:border-light-blue/40 hover:bg-light-blue/5 transition-all duration-300"
            >
              <Linkedin size={15} className="text-gray-400 group-hover:text-light-blue transition-colors duration-300" />
              <span className="text-sm text-gray-400 group-hover:text-light-blue transition-colors duration-300">LinkedIn</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
