import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Download } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { links } from "../../data/portfolioData";

interface ContactProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function Contact({ sectionRef }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${links.email}?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Reset form and show success message
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 500);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Let's Build Something" eyebrow="Contact" align="center" />
        <motion.div
          variants={staggerContainer}
          className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-10 backdrop-blur-xl"
        >
          <motion.p variants={itemVariants} className="text-base text-[var(--text-secondary)] text-center">
            I am open to internship and entry-level opportunities. Reach out for collaborations, frontend projects, or backend-focused roles.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50 px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50 px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30"
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-secondary)] md:col-span-2">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]/50 px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-emerald-400/70 focus:ring-2 focus:ring-emerald-400/30"
                placeholder="Tell me about your project"
              />
            </label>
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] transition hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <span className="text-sm text-emerald-400">Message sent! Your email client should open.</span>
              )}
              <a
                href={links.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-3 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.form>
{/* 
          <motion.div variants={itemVariants} className="mt-8 flex justify-center gap-6">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition hover:text-white"
              aria-label="LeetCode"
            >
              <Code2 size={22} />
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
