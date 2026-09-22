"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

const skillGroups = [
  {
    title: "Core Skills",
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
        <SectionLabel>
          WHAT I KNOW
        </SectionLabel>
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
            className="theme-skill-card rounded-2xl border p-6"
          >
            <h3 className="theme-card-heading mb-5 text-lg font-semibold">{group.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="theme-skill-chip rounded-full border px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5"
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
