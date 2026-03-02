"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/personal";

export default function Projects() {
  return (
    <section id="projects" className="section-light relative overflow-x-clip -mt-1">
      {/* Transition from black */}
      <div className="absolute -top-1 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="mx-auto max-w-5xl px-6 py-32 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-gray-500 px-3 py-1.5 rounded-full border border-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-light-blue-dim transition-colors duration-300 underline underline-offset-4 decoration-gray-300 hover:decoration-light-blue-dim"
                  >
                    View on GitHub
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {i < projects.length - 1 && (
                <div className="mt-16 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fade to next section (black) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
