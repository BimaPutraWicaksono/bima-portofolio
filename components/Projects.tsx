"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type Project = {
  title: string;
  technologies: string[];
  images?: string[];
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
          MY WORK
        </p>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="projects-horizontal-row flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="group flex min-w-[min(86vw,420px)] snap-start flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#10151a] shadow-[0_16px_30px_rgba(160,140,190,0.12)] transition-all duration-200 hover:-translate-y-1 hover:border-[#e0bbe4]/70 hover:bg-[#111a17] sm:min-w-[390px] lg:min-w-[420px]"
          >
            <div className="relative flex h-52 gap-3 overflow-x-auto border-b border-white/10 bg-gradient-to-br from-[#fde2e4] via-[#e0bbe4] to-[#cde7f0] p-3 snap-x snap-mandatory">
              <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#a98fd9] uppercase">
                Project {index + 1}
              </span>
              {project.images && project.images.length > 0 ? (
                project.images.map((image, imageIndex) => (
                  <div
                    key={image}
                    className="relative min-w-full snap-start overflow-hidden rounded-[18px] border border-white/70 bg-white/40"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} documentation ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 640px) 86vw, 420px"
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <div className="flex min-w-full items-center justify-center rounded-[18px] border border-dashed border-white/70 bg-white/35 text-center">
                  <span className="text-sm font-medium text-[#6d6875]">Project visual placeholder</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#a98fd9]">{project.title}</h3>
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

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#e0bbe4]/45 bg-white/55 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-[#6d6875] uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
