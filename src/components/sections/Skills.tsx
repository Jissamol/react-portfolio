import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { skillMeters, skills } from "../../data/portfolioData";

interface SkillsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function Skills({ sectionRef }: SkillsProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Skills" eyebrow="Toolkit" />
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
        >
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 backdrop-blur-xl md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Core Strengths</h3>
            <div className="mt-6 space-y-4">
              {skillMeters.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[var(--bg-tertiary)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--bg-tertiary)]/70 px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
