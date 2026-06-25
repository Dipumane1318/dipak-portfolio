"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, Atom, Github, Database, Cloud, Braces, Hexagon } from "lucide-react";
import { siteConfig } from "@/lib/data";

function useTypingEffect(words: string[], speed = 70, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        speed / 1.6
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const techIcons = [
  { Icon: Atom, label: "React", className: "top-[2%] left-[8%]", delay: 0 },
  { Icon: Hexagon, label: "Node.js", className: "top-[12%] right-[0%]", delay: 0.5 },
  { Icon: Database, label: "MongoDB", className: "bottom-[8%] right-[4%]", delay: 1 },
  { Icon: Braces, label: "JavaScript", className: "bottom-[0%] left-[2%]", delay: 1.5 },
  { Icon: Cloud, label: "AWS", className: "top-[40%] right-[-6%]", delay: 2 },
  { Icon: Github, label: "GitHub", className: "top-[42%] left-[-8%]", delay: 2.5 },
];

export default function Hero() {
  const typed = useTypingEffect(siteConfig.rolesForTyping);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 15 });
  const springY = useSpring(y, { stiffness: 80, damping: 15 });
  const rotateX = useTransform(springY, [-50, 50], [10, -10]);
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-signal-violet/30 rounded-full blur-[100px] animate-pulse-glow -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-signal-cyan/20 rounded-full blur-[100px] animate-pulse-glow -z-10" />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-signal-amber mb-5">
            <span className="text-signal-amber">$</span> whoami
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Hi, I&apos;m{" "}
            <span className="text-gradient-animated">Dipak Mane</span>
          </h1>
          <div className="mt-5 h-9 font-mono text-lg sm:text-xl text-ink-muted">
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-signal-cyan ml-1 align-middle animate-blink" />
          </div>
          <p className="mt-6 text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.links.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-grad-signal text-white font-medium text-sm shadow-glow hover:shadow-glow-cyan hover:scale-[1.03] transition-all duration-300"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-gradient text-ink font-medium text-sm hover:bg-white/5 transition-colors duration-300"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-ink-faint font-mono text-xs">
            <ArrowDown size={14} className="animate-bounce" />
            scroll to explore
          </div>
        </motion.div>

        {/* Right: Profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 800 }}
            className="relative w-[260px] sm:w-[320px] lg:w-[380px] aspect-square"
          >
            {/* Glassmorphism backdrop */}
            <div className="absolute inset-[-12%] rounded-full glass" />

            {/* Rotating gradient ring */}
            <motion.div
              className="absolute inset-[-6%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #6E5BFF, #22D3EE, #FFB454, #6E5BFF)",
                padding: 3,
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating + parallax photo */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ rotateX, rotateY }}
              className="absolute inset-[4%] rounded-full overflow-hidden shadow-glow"
            >
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Dipak Mane — Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 260px, 380px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating tech icons */}
            {techIcons.map(({ Icon, label, className, delay }) => (
              <motion.div
                key={label}
                className={`absolute ${className} w-11 h-11 rounded-xl glass-strong flex items-center justify-center text-ink shadow-glow`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4 + delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                title={label}
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
