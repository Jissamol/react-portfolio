import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../ui/motion";
import { profile } from "../../data/portfolioData";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-[var(--border-color)] py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-sm text-[var(--text-tertiary)]">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
