"use client";

import { motion, useReducedMotion } from "framer-motion";

export type ExperienceItem = {
  company: string;
  location: string;
  period: string;
  role: string;
  details: string[];
};

type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
          CAREER JOURNEY
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="relative space-y-5 before:absolute before:left-[0.82rem] before:top-2 before:bottom-2 before:w-px before:bg-white/10 sm:before:left-5">
        {items.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            className="group relative rounded-[28px] border border-white/10 bg-[#10151a] p-5 pl-10 transition-colors hover:border-[#e0bbe4]/70 sm:ml-8 sm:p-6 sm:pl-8"
          >
            <span className="absolute left-2 top-7 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-500 bg-[#10151a] sm:left-[-1.2rem]">
              <span className="h-2 w-2 rounded-full bg-zinc-200" />
            </span>

            <div className="grid gap-7 lg:grid-cols-[1fr_0.92fr] lg:gap-8">
              <div>
                <div className="mb-4 border-b border-white/10 pb-4">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#a98fd9]">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-[#a98fd9]">{item.role}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.period} · {item.location}</p>
                </div>

                <ul className="space-y-3 text-base leading-7 text-zinc-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-[#0b1014] p-4">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#e0bbe4] to-[#cde7f0] text-xs text-white">▧</span>
                  Experience Documentation
                </div>
                <div className="flex min-h-48 items-center justify-center rounded-[16px] border border-dashed border-[#e0bbe4]/55 bg-gradient-to-br from-[#fde2e4]/80 via-[#e0bbe4]/50 to-[#cde7f0]/70 p-6 text-center">
                  <p className="text-sm font-medium text-[#6d6875]">Documentation area</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
