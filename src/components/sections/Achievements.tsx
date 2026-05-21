import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { achievements } from "../../data/portfolioData";

interface AchievementsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}
export default function Achievements({ sectionRef }: AchievementsProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="achievements"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Achievements" eyebrow="Impact" />
        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 backdrop-blur-xl"
            >
              <h4 className="text-lg font-semibold text-[var(--text-primary)]">{achievement.title}</h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{achievement.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
