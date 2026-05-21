import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import { itemVariants, staggerContainer } from "../ui/motion";
import { links, profile, stats, type Stat } from "../../data/portfolioData";
import jissaImage from "../../assets/images/jissa.jpg";

interface HeroProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  onContactClick: () => void;
}
export default function Hero({ onContactClick, sectionRef }: HeroProps) {
  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden py-24" id="home">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.4em] text-[var(--accent-primary)]"
            >
              Premium Portfolio
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-cyan-400 to-fuchsia-400"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {profile.name}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg md:text-xl text-[var(--text-secondary)]"
            >
              {profile.role}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base text-[var(--text-tertiary)]"
            >
              {profile.heroBlurb}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition hover:bg-emerald-400"
              >
                <Mail size={18} />
                Contact Me
              </button>
              <a
                href={links.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-3 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex gap-4"
            >
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] backdrop-blur transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              >
                <Github size={20} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] backdrop-blur transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] backdrop-blur transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              >
                <Code2 size={20} />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]"
            >
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur">
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur hover:text-[var(--text-primary)]"
              >
                {profile.email}
              </a>
              <a
                href="tel:+916282668044"
                className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 backdrop-blur hover:text-[var(--text-primary)]"
              >
                {profile.phone}
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {stats.map((stat: Stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-3 text-center backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-emerald-500/30 blur-[90px]" />
            <div className="absolute -right-6 -bottom-6 h-52 w-52 rounded-full bg-fuchsia-500/30 blur-[120px]" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[32px] border border-[var(--border-color)] bg-[var(--bg-secondary)]/30 p-4 backdrop-blur-2xl shadow-xl"
            >
              <img
                src={jissaImage}
                alt="Jissamol Benny"
                className="h-[420px] w-full rounded-[24px] object-cover"
              />
            </motion.div>
            
            <motion.div
              className="absolute -left-6 bottom-20 hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-3 text-xs text-[var(--text-secondary)] backdrop-blur-xl md:block"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              UI + Backend Focus
            </motion.div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
              {["Backend: Django", "Frontend: React"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-3 text-[var(--text-secondary)] backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-tertiary)]"
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
