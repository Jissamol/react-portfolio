import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { education } from "../../data/portfolioData";

interface EducationProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}
export default function Education({ sectionRef }: EducationProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="education"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Education" eyebrow="Academic" />
        <motion.div variants={staggerContainer} className="space-y-6">
          {education.map((item) => (
            <motion.div
              key={item.degree}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.degree}</h3>
                <span className="text-sm text-emerald-600 dark:text-emerald-200">{item.period}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.school}</p>
              <p className="mt-2 text-sm text-[var(--text-tertiary)]">{item.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
