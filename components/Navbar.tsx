"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container-px mx-auto flex items-center justify-between max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled ? "glass px-4 py-2" : ""
        }`}
      >
        <a
          href="#home"
          className="font-display font-bold text-lg text-ink tracking-tight"
        >
          Dipak<span className="text-gradient">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-ink-muted hover:text-ink transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-grad-signal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.links.resume}
            download
            className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-full border-gradient text-ink hover:shadow-glow transition-shadow"
          >
            <Download size={15} /> Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2 glass rounded-lg"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-6 mt-3 glass-strong rounded-2xl p-5 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.links.resume}
              download
              className="inline-flex items-center justify-center gap-2 font-mono text-sm px-4 py-2 rounded-full border-gradient text-ink mt-2"
            >
              <Download size={15} /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
