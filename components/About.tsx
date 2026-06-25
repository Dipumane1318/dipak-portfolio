"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { about, stats } from "@/lib/data";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, value]);

  const display = value % 1 === 0 ? Math.round(count) : count.toFixed(1);

  return <span ref={ref}>{display}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="cat about.md"
          title="A bit about me"
          description="The short version: a student who learns fastest by building, and is now looking for a team to build with."
        />

        <div className="mt-14 grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-muted leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}

            <div className="pt-4">
              <p className="font-mono text-sm text-signal-amber mb-3">$ cat goals.txt</p>
              <ul className="space-y-2.5">
                {about.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3 text-ink">
                    <CheckCircle2 size={18} className="text-signal-cyan mt-0.5 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="text-center py-8">
                <p className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                  <Counter value={stat.value} />
                  {stat.label === "CGPA / 10" ? "" : "+"}
                </p>
                <p className="mt-2 text-ink-muted text-sm font-mono">{stat.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
