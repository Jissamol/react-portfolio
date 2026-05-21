import React from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";

interface ExperienceTimelineProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function ExperienceTimeline({ sectionRef }: ExperienceTimelineProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Experience" eyebrow="Timeline" />
        <motion.div variants={staggerContainer} className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-emerald-400/70 via-cyan-400/40 to-transparent" />
          <div className="space-y-8">
            {experience.map((role, index) => (
              <motion.div
                key={role.role}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 pl-12 backdrop-blur-xl"
              >
                <span className="absolute left-2 top-8 h-5 w-5 rounded-full border border-emerald-400/60 bg-emerald-400/30 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{role.role}</h3>
                  <span className="text-sm text-emerald-600 dark:text-emerald-200">{role.period}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{role.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
