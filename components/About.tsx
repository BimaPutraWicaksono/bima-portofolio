"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

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
        <SectionLabel>
          GET TO KNOW ME
        </SectionLabel>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mb-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[2.8rem]"
          >
            About Me
          </motion.h2>
          <div className="space-y-5 text-base leading-8 text-zinc-300">
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

          <div className="mt-7 flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <span
                key={area.title}
                className="rounded-full border border-[#e0bbe4]/50 bg-white/65 px-3.5 py-2 text-sm font-medium text-[#6d6875] shadow-[0_6px_16px_rgba(160,140,190,0.08)]"
              >
                {area.title}
              </span>
            ))}
          </div>
        </div>

        <div className="reference-surface rounded-[28px] p-7 sm:p-8">
          <h3 className="mb-5 text-lg font-bold text-[#4a4453]">Quick Info</h3>
          <div className="divide-y divide-[#e0bbe4]/35">
            <div className="flex gap-4 py-4 first:pt-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e0bbe4] to-[#cde7f0] text-sm text-white">ED</span>
              <div><p className="text-[10px] font-bold tracking-[0.14em] text-[#a98fd9] uppercase">Education</p><p className="text-sm text-[#4a4453]">D4 Teknik Informatika · Politeknik Negeri Malang</p></div>
            </div>
            <div className="flex gap-4 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fde2e4] to-[#e0bbe4] text-sm text-white">IT</span>
              <div><p className="text-[10px] font-bold tracking-[0.14em] text-[#a98fd9] uppercase">Focus</p><p className="text-sm text-[#4a4453]">Information Technology · System Analysis</p></div>
            </div>
            <div className="flex gap-4 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d8f3dc] to-[#cde7f0] text-sm text-white">LO</span>
              <div><p className="text-[10px] font-bold tracking-[0.14em] text-[#a98fd9] uppercase">Location</p><p className="text-sm text-[#4a4453]">Batu, East Java, Indonesia</p></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
