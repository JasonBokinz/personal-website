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
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden carousel-fade-light">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {doubled.map((course, i) => (
          <div
            key={`${course.code}-${i}`}
            className="flex-shrink-0 mx-3 px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:border-sbu-red hover:bg-white transition-all duration-300 cursor-default"
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
    <section id="education" className="section-light relative overflow-x-clip -mt-1">
      {/* Transition from black */}
      <div className="absolute -top-1 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="mx-auto max-w-5xl px-6 py-32 md:py-32">
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
              <h2 className="text-4xl md:text-6xl font-bold text-sbu-red tracking-tight">
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

          {/* Honors — compact stat chips */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {education.highlights.map((item, i) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 hover:border-sbu-red hover:bg-white transition-all duration-300 cursor-default"
              >
                <span className="text-sm md:text-base font-bold text-sbu-red">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {item.label}
                </span>
              </motion.span>
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
                    <span className="text-sm font-mono font-bold text-sbu-red">
                      {course.code}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-semibold text-black mb-2">
                        {course.name}
                      </h4>
                      <p className="text-gray-500 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Projects */}
                    <div>
                      <h5 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                        Projects
                      </h5>
                      <ul className="space-y-1">
                        {course.projects.map((project, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-600 leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-sbu-red mt-1.5 text-[6px]">&#9679;</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {course.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-sbu-red hover:text-sbu-red transition-colors duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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

      {/* Fade to next section (black) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
    </section>
  );
}
