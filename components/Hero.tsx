"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative mx-auto flex min-h-[88vh] max-w-[1300px] items-center px-4 pb-20 pt-24 sm:px-6 lg:px-[6vw] lg:pb-28">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e0bbe4]/40 bg-white/60 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#a98fd9] uppercase shadow-[0_8px_20px_rgba(160,140,190,0.08)]">
            Information Technology
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-[#4a4453] sm:text-5xl lg:text-[4rem]">
            BIMA PUTRA <span className="reference-gradient">WICAKSONO</span>
          </h1>

          <div className="mt-6 space-y-2">
            <p className="text-base font-medium text-[#a98fd9] sm:text-lg">
              System Analysis • Application Support • System Development
            </p>
            <p className="max-w-2xl text-base leading-7 text-[#6d6875] sm:text-lg">
              I build and improve information systems by connecting business
              processes, data, and technology.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#e0bbe4] to-[#cde7f0] px-7 py-3.5 text-sm font-semibold text-[#5c4b66] shadow-[0_12px_26px_rgba(200,170,220,0.4)] transition-transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#e0bbe4]/60 bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#4a4453] transition-all hover:-translate-y-1 hover:bg-white"
            >
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-[#a98fd9]/35 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#a98fd9] transition-all hover:-translate-y-1 hover:bg-[#e0bbe4]/20"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-[#6d6875]">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#d8f3dc] shadow-[0_0_16px_rgba(216,243,220,0.8)]" />
            <span>Batu, East Java, Indonesia</span>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[#e0bbe4]/35 bg-white/60 p-4 shadow-[0_20px_50px_rgba(160,140,190,0.22)] backdrop-blur-sm sm:p-5">
            <div className="rounded-[24px] border border-white/70 bg-white/55 p-4 sm:p-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[#a98fb0]">
                <span>Portfolio</span>
                <span>Available</span>
              </div>

              <div className="mt-6 rounded-[20px] border border-dashed border-[#e0bbe4]/50 bg-white/45 p-5">
                <div className="flex h-56 w-full items-center justify-center rounded-[18px] border border-white/70 bg-gradient-to-br from-[#fde2e4] via-[#e0bbe4] to-[#cde7f0] text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/80 bg-white/45 text-[10px] uppercase tracking-[0.22em] text-[#6d6875] shadow-[0_10px_30px_rgba(160,140,190,0.15)]">
                      Photo
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#6d6875]">
                      Profile placeholder
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#6d6875]">
                <div className="flex items-center justify-between rounded-xl border border-white/70 bg-white/60 px-3 py-2.5">
                  <span>Location</span>
                  <span className="font-medium text-[#4a4453]">Batu, Indonesia</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/70 bg-white/60 px-3 py-2.5">
                  <span>Focus</span>
                  <span className="font-medium text-[#4a4453]">IT & Systems</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
