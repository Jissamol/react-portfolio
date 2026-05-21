"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

import type { SectionKey } from "../data/portfolioData";

import useActiveSection from "../hooks/useActiveSection";

import AnimatedBackground from "./ui/AnimatedBackground";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

/* -------------------------------- */
/* Reusable Ref Type */
/* -------------------------------- */

export type SectionRef = React.RefObject<HTMLElement | null>;

/* -------------------------------- */
/* Smooth Scroll Helper */
/* -------------------------------- */

const scrollTo = (ref: SectionRef | null) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function PortfolioPage() {
  /* -------------------------------- */
  /* Section Refs */
  /* -------------------------------- */

  const refs: Record<SectionKey, SectionRef> = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    skills: useRef<HTMLElement | null>(null),
    experience: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    education: useRef<HTMLElement | null>(null),
    certificates: useRef<HTMLElement | null>(null),
    achievements: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  const activeSection = useActiveSection(refs);

  /* -------------------------------- */
  /* Navigation */
  /* -------------------------------- */

  const scrollToSection = (section: SectionKey) => {
    scrollTo(refs[section]);
  };

  /* -------------------------------- */
  /* Initial Animation Visibility */
  /* -------------------------------- */

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Scroll To Top */}
        <AnimatePresence>
          {isVisible && <ScrollToTop />}
        </AnimatePresence>

        {/* Navbar */}
        <NavBar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content */}
        <main className="relative">
          <Hero
            sectionRef={refs.home}
            onContactClick={() => scrollToSection("contact")}
          />

          <About sectionRef={refs.about} />

          <Skills sectionRef={refs.skills} />

          <ExperienceTimeline sectionRef={refs.experience} />

          <Projects sectionRef={refs.projects} />

          <Education sectionRef={refs.education} />

          <Certifications sectionRef={refs.certificates} />

          <Achievements sectionRef={refs.achievements} />

          <Contact sectionRef={refs.contact} />

          <Footer />
        </main>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Scroll To Top Button */
/* -------------------------------- */

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <motion.button
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]/80 text-[var(--text-primary)] shadow-lg backdrop-blur-md transition-all duration-300 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </motion.button>
  );
};
