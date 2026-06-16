"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/personal";

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-gray-900 font-medium">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

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
              {/* Heading row: name + period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 mb-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  {project.name}
                </h3>
                <span className="text-sm text-gray-500 flex-shrink-0">
                  {project.context ? `${project.context} · ${project.period}` : project.period}
                </span>
              </div>

              {/* Lead description */}
              <p className="text-gray-500 leading-relaxed mt-4 mb-5 max-w-3xl">
                <FormattedText text={project.description} />
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {project.highlights.map((highlight, h) => (
                  <div key={h} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 mt-2.5 w-1 h-1 rounded-full bg-gray-400 group-hover:bg-light-blue-dim transition-colors duration-200" />
                    <p className="text-gray-500 leading-relaxed text-sm max-w-2xl">
                      <FormattedText text={highlight} />
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-gray-500 px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
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
