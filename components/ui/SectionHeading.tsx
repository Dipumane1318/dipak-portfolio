"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  command: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  command,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <p className="font-mono text-sm text-signal-amber tracking-wide mb-3">
        <span className="text-[#FFB454]">$</span> {command}
        <span className="ml-1 inline-block w-[2px] h-4 bg-[#FFB454] align-middle animate-blink" />
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
