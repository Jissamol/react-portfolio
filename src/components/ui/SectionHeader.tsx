import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "./motion";

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ title, eyebrow, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-10 ${alignment}`}>
      {eyebrow && (
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.35em] text-[var(--accent-primary)]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={itemVariants}
        className="mt-3 text-3xl md:text-5xl font-semibold text-[var(--text-primary)]"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        {title}
      </motion.h2>
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400 ${
        align === "center" ? "mx-auto" : ""}
      `} />
    </div>
  );
}
