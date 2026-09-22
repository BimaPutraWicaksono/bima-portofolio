"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400"
    >
      {children}
    </motion.p>
  );
}
