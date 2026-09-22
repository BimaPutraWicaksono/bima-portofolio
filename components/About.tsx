"use client";

import { motion, useReducedMotion } from "framer-motion";

const focusAreas = [
  {
    title: "Information Systems",
    text: "Developing and improving information systems to support business needs and operational clarity.",
  },
  {
    title: "Business Process",
    text: "Mapping workflows, analyzing requirements, and digitalizing process steps across cooperative and manufacturing operations.",
  },
  {
    title: "Data & Application",
    text: "Managing databases, processing data, and building web applications that connect business logic with practical use.",
  },
  {
    title: "Testing & Implementation",
    text: "Testing systems, troubleshooting issues, and supporting successful implementation across functional environments.",
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
          01 / About
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
            Building systems that connect business needs with technology.
          </h2>
        </div>

        <div className="space-y-5">
          <div className="space-y-4 text-base leading-8 text-zinc-300">
            <p>
              IT graduate with experience in information systems development,
              requirements analysis, data processing, and business process
              digitalization across cooperative and manufacturing environments.
            </p>
            <p>
              Experience includes analyzing user requirements, mapping business
              processes, developing web applications, managing databases, testing
              and troubleshooting systems, and supporting system implementation.
            </p>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-white/10 bg-[#10151a] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#111930]"
              >
                <p className="text-base font-semibold text-white">{area.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
