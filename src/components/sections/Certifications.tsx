import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { certificates } from "../../data/portfolioData";

interface CertificationsProps {
  sectionRef: React.RefObject<HTMLElement | null>; 
}

export default function Certifications({ sectionRef }: CertificationsProps) {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
              className={`rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-5 backdrop-blur-xl ${certificate.image ? 'cursor-pointer' : ''}`}
              onClick={() => certificate.image && setSelectedCert(certificate.image)}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-emerald-400/40 bg-emerald-400/10 p-2">
                  <Award size={18} className="text-emerald-500 dark:text-emerald-300" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">{certificate.title}</h4>
                  {certificate.note && (
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{certificate.note}</p>
                  )}
                  {certificate.image && (
                    <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Click to view certificate</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-[var(--bg-secondary)] rounded-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
              >
                <X size={24} />
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
