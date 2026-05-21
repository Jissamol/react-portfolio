import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Download } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { links } from "../../data/portfolioData";

interface ContactProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function Contact({ sectionRef }: ContactProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Let's Build Something" eyebrow="Contact" align="center" />
        <motion.div
          variants={staggerContainer}
          className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-10 backdrop-blur-xl"
        >
          <motion.p variants={itemVariants} className="text-base text-[var(--text-secondary)] text-center">
            I am open to internship and entry-level opportunities. Reach out for collaborations, frontend projects, or backend-focused roles.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={(event) => event.preventDefault()}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Full Name
              <input
                type="text"
                required
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50 px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Email
              <input
                type="email"
                required
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50 px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30"
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)] md:col-span-2">
              Message
              <textarea
                rows={5}
                required
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50 px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30"
                placeholder="Tell me about your project"
              />
            </label>
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition hover:bg-emerald-400"
              >
                <Mail size={18} />
                Send Message
              </button>
              <a
                href={links.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-3 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.form>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-6">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-white"
              aria-label="LeetCode"
            >
              <Code2 size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
