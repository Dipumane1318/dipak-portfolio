"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="git log --experience"
          title="Where I've worked"
          description="Hands-on time applying classroom concepts to real data and real deadlines."
        />

        <div className="mt-14 relative max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-signal-violet via-signal-cyan to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative pl-14 pb-10 last:pb-0"
            >
              <span className="absolute left-0 top-1 w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                <Briefcase size={16} className="text-signal-cyan" />
              </span>

              <GlassCard tilt glowColor="#22D3EE">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {item.role}
                    </h3>
                    <p className="text-signal-cyan text-sm font-medium">{item.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-ink-faint font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-ink-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-signal-amber mt-1">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-line text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
