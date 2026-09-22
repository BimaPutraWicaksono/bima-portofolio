"use client";

import { motion, useReducedMotion } from "framer-motion";

export type AdditionalExperienceItem = {
  title: string;
  location: string;
  period: string;
  role: string;
  details: string[];
};

type AdditionalExperienceProps = {
  items: AdditionalExperienceItem[];
};

export function AdditionalExperience({ items }: AdditionalExperienceProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="additional-experience"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
          06 / Additional Experience
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-[#10151a] p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.location}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.period}</span>
            </div>

            <p className="text-sm font-medium text-zinc-200">{item.role}</p>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
