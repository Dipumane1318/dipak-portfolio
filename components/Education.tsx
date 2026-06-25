"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="cat education.log"
          title="Education"
          description="From school to college, the formal path that got me here."
        />

        <div className="mt-14 relative max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-signal-amber via-signal-violet to-transparent" />

          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative pl-14 pb-10 last:pb-0"
            >
              <span className="absolute left-0 top-1 w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                <GraduationCap size={16} className="text-signal-amber" />
              </span>

              <GlassCard tilt glowColor="#FFB454">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {item.degree}
                    </h3>
                    <p className="text-ink-muted text-sm">{item.institution}</p>
                  </div>
                  <span className="font-mono text-xs text-ink-faint shrink-0">
                    {item.period}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-ink-muted">
                    <MapPin size={14} /> {item.location}
                  </span>
                  <span className="text-gradient font-semibold">{item.grade}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
