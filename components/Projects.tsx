"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="ls ./projects"
          title="Things I've built"
          description="A mix of full-stack apps, an API written from scratch, and a couple of front-end builds for practice."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            >
              <GlassCard tilt className="h-full flex flex-col group/card">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint shrink-0 pt-1">
                    0{i + 1}
                  </span>
                </div>

                <p className="mt-3 text-ink-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                      <CheckCircle2 size={14} className="text-signal-cyan mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-ink-muted border border-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-grad-signal text-white hover:shadow-glow transition-shadow"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border-gradient text-ink hover:bg-white/5 transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
