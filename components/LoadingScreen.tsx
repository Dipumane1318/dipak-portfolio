"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "booting portfolio.sh",
  "loading skills... done",
  "compiling experience... done",
  "$ whoami → Dipak Mane",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => {
        if (prev >= lines.length - 1) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
        >
          <div className="font-mono text-sm sm:text-base text-ink-muted w-[280px] sm:w-[360px]">
            {lines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === lineIndex ? "text-gradient" : ""}
              >
                <span className="text-signal-amber">$</span> {line}
              </motion.p>
            ))}
            <div className="mt-4 h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-grad-signal"
                initial={{ width: "0%" }}
                animate={{ width: `${((lineIndex + 1) / lines.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
