import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { profile, stats, summary } from "../../data/portfolioData";
import jissaImage from "../../assets/images/jissa.jpg";

interface AboutProps {
  sectionRef: React.RefObject<HTMLElement | null> ;
}

export default function About({ sectionRef }: AboutProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="About Me" eyebrow="Profile" />
        <motion.div
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-[var(--text-secondary)]">
            <p className="text-lg leading-relaxed">
              {summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {["Full Stack", "AI-Ready", "Design Systems", "API Craft"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
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
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-emerald-500/20 blur-[80px]" />
            <div className="absolute -bottom-10 right-6 h-36 w-36 rounded-full bg-cyan-500/20 blur-[90px]" />
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-4 backdrop-blur-2xl">
              <img
                src={jissaImage}
                alt={profile.name}
                className="h-[360px] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/80 px-4 py-3 text-xs text-[var(--text-secondary)] backdrop-blur-xl">
              {profile.role}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
