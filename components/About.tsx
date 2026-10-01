"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type AboutProps = {
  content: PortfolioContent["about"];
  labels: Pick<PortfolioContent["labels"], "aboutSection" | "aboutHeading" | "quickInfoHeading">;
};

export function About({ content, labels }: AboutProps) {
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
          {labels.aboutSection}
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
            {labels.aboutHeading}
          </motion.h2>
          <div className="space-y-5 text-base leading-8 text-zinc-300">
            <p>
              {content.paragraphs[0]}
            </p>
            <p>
              {content.paragraphs[1]}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {content.focusAreas.map((area) => (
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
          <h3 className="mb-5 text-lg font-bold text-[#4a4453]">{labels.quickInfoHeading}</h3>
          <div className="divide-y divide-[#e0bbe4]/35">
            {content.quickInfo.map((item) => (
              <div key={item.label} className="flex gap-4 py-4 first:pt-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e0bbe4] to-[#cde7f0] text-sm text-white">{item.monogram}</span>
                <div><p className="text-[10px] font-bold tracking-[0.14em] text-[#a98fd9] uppercase">{item.label}</p><p className="text-sm text-[#4a4453]">{item.value}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
