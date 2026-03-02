"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/personal";

export default function Experience() {
  return (
    <section id="experience" className="section-dark relative overflow-hidden">
      {/* Transition from white */}
      <div className="absolute -top-1 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-light-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Experience
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-8">
            <div>
              <span className="text-xl md:text-2xl font-semibold text-white">
                {experience.role}
              </span>
              <span className="text-xl md:text-2xl text-gray-500 mx-3">&mdash;</span>
              <a
                href={experience.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-semibold text-light-blue hover:underline underline-offset-4"
              >
                {experience.product}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{experience.company}</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>{experience.period}</span>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
            {experience.summary}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-8">
            What I Shipped
          </h3>
          <div className="space-y-6">
            {experience.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-light-blue group-hover:shadow-[0_0_8px_rgba(125,211,252,0.5)] transition-shadow duration-300" />
                <p className="text-gray-300 leading-relaxed">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
