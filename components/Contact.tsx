"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Code2, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { siteConfig } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormState>;

const contactLinks = [
  { Icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { Icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { Icon: Linkedin, label: "LinkedIn", href: siteConfig.links.linkedin },
  { Icon: Github, label: "GitHub", href: siteConfig.links.github },
  { Icon: Code2, label: "LeetCode", href: siteConfig.links.leetcode },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // No backend is wired up yet — fall back to opening a mail client with
    // the message pre-filled. Replace this with a POST to your own API
    // route (or a service like Resend / EmailJS) when you add a backend.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          command="./connect.sh"
          title="Let's build something"
          description="Open to internships, junior full-stack roles, and interesting collaborations."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {contactLinks.map(({ Icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <GlassCard className="flex items-center gap-4 py-4 hover:shadow-glow transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-grad-signal flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-white" />
                  </div>
                  <span className="text-ink text-sm">{label}</span>
                </GlassCard>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <GlassCard className="p-7 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-ink-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-line rounded-xl px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal-cyan transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-ink-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-line rounded-xl px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal-cyan transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-ink-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about the role or project..."
                    className="w-full bg-white/5 border border-line rounded-xl px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-signal-cyan transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-grad-signal text-white font-medium text-sm shadow-glow hover:shadow-glow-cyan hover:scale-[1.01] transition-all duration-300"
                >
                  {status === "sent" ? (
                    <>
                      <CheckCircle2 size={16} /> Opened in your mail app
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
