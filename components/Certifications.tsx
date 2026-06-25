"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="ls ./certifications"
          title="Certifications"
          description="Structured learning to back up the project work."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard tilt glowColor="#FFB454" className="h-full">
                <div className="w-11 h-11 rounded-xl bg-grad-signal flex items-center justify-center mb-4">
                  <Award size={20} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-ink leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-signal-cyan text-sm font-medium">{cert.issuer}</p>
                <p className="mt-3 text-ink-muted text-sm leading-relaxed">{cert.detail}</p>
                <p className="mt-4 font-mono text-xs text-ink-faint">{cert.period}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
