"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  thesis?: string;
  relevantAreas?: string[];
};

type EducationProps = {
  items: EducationItem[];
};

export function Education({ items }: EducationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="education"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <SectionLabel>
          EDUCATION
        </SectionLabel>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.article
            key={`${item.school}-${item.degree}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-[#10151a] p-6 sm:p-8"
          >
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.school}</h3>
                <p className="mt-1 text-base text-zinc-300">{item.degree}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-zinc-400">{item.period}</p>
                {item.gpa ? <p className="mt-1 text-sm text-zinc-300">GPA {item.gpa}</p> : null}
              </div>
            </div>

            {item.thesis ? (
              <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Thesis
                </p>
                <p className="mt-2 text-base italic text-zinc-200">{item.thesis}</p>
              </div>
            ) : null}

            {item.relevantAreas ? (
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Relevant academic areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.relevantAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
