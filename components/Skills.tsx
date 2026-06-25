"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, typeof Code2> = {
  Programming: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & Cloud": Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="cat skills.json"
          title="What I work with"
          description="A practical toolkit built through coursework, internships, and side projects."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard tilt className="h-full">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-grad-signal flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-ink">
                        {group.category}
                      </h3>
                      <p className="text-xs text-ink-faint">{group.blurb}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3.5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-ink">{item.name}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.level / 5) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-grad-signal"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
