"use client";

import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  {
    title: "Core Skills",
    accent: "border-zinc-500/40 bg-zinc-900/40",
    items: [
      "System Analysis",
      "Requirement Analysis",
      "Business Process Analysis",
      "Software Development",
      "Database Management",
      "Data Processing",
      "System Testing",
      "Troubleshooting",
      "Application Deployment",
      "Technical Documentation",
    ],
  },
  {
    title: "Technologies",
    accent: "border-slate-500/40 bg-slate-900/40",
    items: [
      "Python",
      "Django",
      "PHP",
      "Laravel",
      "JavaScript",
      "React",
      "Inertia.js",
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Excel",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "VS Code",
      "Draw.io",
      "Figma",
      "Linux",
      "Ubuntu Server",
    ],
  },
  {
    title: "Professional Skills",
    accent: "border-white/10 bg-white/[0.02]",
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Critical Thinking",
      "Communication",
      "Teamwork",
      "Collaboration",
      "Attention to Detail",
      "Adaptability",
    ],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
          02 / Skills
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            className={`rounded-2xl border p-6 ${group.accent}`} 
          >
            <h3 className="mb-5 text-lg font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
