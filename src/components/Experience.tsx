"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/personal";

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-3.5 h-3.5"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5ZM15 3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.94l-5.22 5.22a.75.75 0 1 0 1.06 1.06L13.75 5.31V7.25a.75.75 0 0 0 1.5 0v-3.5A.25.25 0 0 0 15 3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-gray-200 font-medium">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function VideoShowcase({
  showcase,
}: {
  showcase: { title: string; description: string; video: string };
}) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl overflow-hidden border border-gray-800">
        <video
          src={showcase.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">{showcase.title}</h4>
        <p className="text-sm text-gray-400 mt-1">{showcase.description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-dark relative overflow-x-clip -mt-1">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-light-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-16"
        >
          Experience
        </motion.h2>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={idx > 0 ? "mt-20" : ""}
          >
            {/* Company card: logo left, info right */}
            <div className="flex gap-5 md:gap-6 items-start mb-10 pb-10 border-b border-gray-800">
              <div className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center ${exp.logoBg === "white" ? "bg-white p-2" : ""}`}>
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1.5">
                  {exp.productUrl && exp.productLabel && (
                    <>
                      <a
                        href={exp.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-light-blue hover:text-white transition-colors duration-200"
                      >
                        {exp.productLabel}
                        <LinkIcon />
                      </a>
                      <span className="text-gray-600">/</span>
                    </>
                  )}
                  <span>{exp.location}</span>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  {exp.summary}
                </p>
              </div>
            </div>

            {/* Roles — tiered timeline */}
            <div className="relative ml-8 md:ml-10">
              {/* Vertical line connecting roles */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-800" />

              {exp.roles.map((role, roleIdx) => (
                <motion.div
                  key={roleIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: roleIdx * 0.1 }}
                  className="relative pl-8 md:pl-10 pb-14 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-light-blue bg-black" />

                  {/* Role title */}
                  <h4 className="text-lg md:text-xl font-semibold text-white">
                    {role.title}
                  </h4>
                  <span className="text-sm text-gray-500 block mt-0.5">
                    {role.period}
                  </span>

                  {/* Highlights */}
                  <div className="space-y-3 mt-4">
                    {role.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.4 }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="flex-shrink-0 mt-2.5 w-1 h-1 rounded-full bg-gray-500 group-hover:bg-light-blue transition-colors duration-200" />
                        <p className="text-gray-400 leading-relaxed text-sm">
                          <FormattedText text={highlight} />
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company-level tech tags */}
            <div className="flex flex-wrap gap-2 mt-10 ml-8 md:ml-10">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono rounded-full border border-gray-700 text-gray-400 hover:border-light-blue hover:text-light-blue transition-colors duration-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Video showcases */}
            {exp.showcases.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-16"
              >
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">
                  Feature Showcases
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {exp.showcases.map((showcase, i) => (
                    <VideoShowcase key={i} showcase={showcase} />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
