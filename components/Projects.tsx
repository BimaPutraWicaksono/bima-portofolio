"use client";

import { motion, useReducedMotion } from "framer-motion";

export type Project = {
  title: string;
  technologies: string[];
  description: string;
  focus: string[];
};

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
          04 / Featured Projects
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#10151a] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-1 hover:border-[#789b67]/50 hover:bg-[#111a17]"
          >
            <div className="mb-5 flex items-center justify-between gap-2 border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Project {index + 1}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                System
              </span>
            </div>

            <div className="mb-5 rounded-xl border border-white/10 bg-[#0b1014] p-4">
              <div className="mb-3 h-32 rounded-lg border border-dashed border-white/10 bg-[#10171d]" />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#b7f397]">{project.title}</h3>
            <p className="mt-4 text-base leading-7 text-zinc-300">{project.description}</p>

            <div className="mt-5 flex-1">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                Key focus
              </p>
              <ul className="space-y-2 text-sm leading-6 text-zinc-300">
                {project.focus.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
