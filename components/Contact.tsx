"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type ContactProps = {
  identity: PortfolioContent["identity"];
  content: PortfolioContent["contact"];
  label: string;
  eyebrow: string;
  headline: string;
};

export function Contact({ identity, content, label, eyebrow, headline }: ContactProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="rounded-[28px] border border-white/10 bg-[#10151a] p-8 sm:p-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <SectionLabel>
            {label}
          </SectionLabel>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              {eyebrow}
            </p>
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.6rem]"
            >
              {headline}
            </motion.h2>
            <p className="mt-4 text-lg text-zinc-300">{identity.name}</p>
            <p className="mt-2 text-base text-zinc-400">{identity.location}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${content.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#b7f397] px-5 py-3 text-sm font-medium text-[#10150e] transition-colors hover:bg-[#d2ffb9]"
            >
              {content.email}
            </a>
            <a
              href={`tel:${content.phone}`}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              {content.phone}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
