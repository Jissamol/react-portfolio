import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { certificates } from "../../data/portfolioData";

interface CertificationsProps {
  sectionRef: React.RefObject<HTMLElement | null>; 
}

export default function Certifications({ sectionRef }: CertificationsProps) {
  return (
    <motion.section
      ref={sectionRef}
      id="certificates"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Certifications" eyebrow="Credentials" />
        <motion.div variants={staggerContainer} className="space-y-4">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.title}
              variants={itemVariants}
              whileHover={{ x: 12 }}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-5 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-emerald-400/40 bg-emerald-400/10 p-2">
                  <Award size={18} className="text-emerald-500 dark:text-emerald-300" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">{certificate.title}</h4>
                  {certificate.note && (
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{certificate.note}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
