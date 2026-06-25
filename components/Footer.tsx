import { Github, Linkedin, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-8">
      <div className="container-px mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-signal-cyan transition-colors">
            <Github size={18} />
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-signal-cyan transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={siteConfig.links.leetcode} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-signal-cyan transition-colors">
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
