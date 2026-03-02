"use client";

import { motion } from "framer-motion";
import { education, courses, favoriteCourses } from "@/data/personal";

function CourseRow({
  items,
  direction = "left",
}: {
  items: typeof courses;
  direction?: "left" | "right";
}) {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden carousel-fade-light">
      <div
        className={`flex ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {tripled.map((course, i) => (
          <div
            key={`${course.code}-${i}`}
            className="flex-shrink-0 mx-3 px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:border-light-blue-dim hover:bg-white transition-all duration-300 cursor-default"
          >
            <div className="text-sm font-mono font-semibold text-black whitespace-nowrap">
              {course.code}
            </div>
            <div className="text-xs text-gray-500 whitespace-nowrap mt-0.5">
              {course.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseCarousel() {
  const mid = Math.ceil(courses.length / 2);
  const row1 = courses.slice(0, mid);
  const row2 = courses.slice(mid);

  return (
    <div className="space-y-4 py-4">
      <CourseRow items={row1} direction="left" />
      <CourseRow items={row2} direction="right" />
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-light relative overflow-hidden">
      {/* Transition from black */}
      <div className="absolute -top-1 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        {/* School header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            {/* SBU Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/sbu-seawolves.png"
                alt="Stony Brook Seawolves"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#B81137] tracking-tight">
                {education.school}
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mt-2">
                {education.degree} &mdash; {education.specialization}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Graduated {education.graduationDate}
              </p>
            </div>
          </div>

          {/* Honors / Accomplishments */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {education.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative rounded-xl border border-gray-200 bg-gray-50 p-5 md:p-6 text-center hover:border-light-blue-dim hover:shadow-[0_0_20px_rgba(125,211,252,0.12)] transition-all duration-300 flex flex-col justify-between min-h-[120px]"
              >
                <div className="text-3xl md:text-4xl font-bold text-black group-hover:text-light-blue-dim transition-colors duration-300">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-auto">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 -mx-6"
        >
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-6 px-6">
            Coursework
          </h3>
          <CourseCarousel />
        </motion.div>

        {/* Favorite courses — card layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-8">
            Courses That Shaped Me
          </h3>
          <div className="space-y-12">
            {favoriteCourses.map((course, i) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono font-bold text-light-blue-dim">
                      {course.code}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold text-black mb-2">
                      {course.name}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
                {i < favoriteCourses.length - 1 && (
                  <div className="mt-12 h-px bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
