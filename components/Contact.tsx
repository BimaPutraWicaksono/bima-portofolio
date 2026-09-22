"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
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
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
            07 / Contact
          </p>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              Let&apos;s connect
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.6rem]">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 text-lg text-zinc-300">Bima Putra Wicaksono</p>
            <p className="mt-2 text-base text-zinc-400">Batu, East Java, Indonesia</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:bimaaapw@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#b7f397] px-5 py-3 text-sm font-medium text-[#10150e] transition-colors hover:bg-[#d2ffb9]"
            >
              bimaaapw@gmail.com
            </a>
            <a
              href="tel:+6281230377917"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              +6281230377917
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
