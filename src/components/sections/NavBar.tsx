import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, links, profile, type SectionKey } from "../../data/portfolioData";
import ThemeToggle from "../ui/ThemeToggle";

interface NavBarProps {
  activeSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
}

export default function NavBar({ activeSection, onNavigate }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: SectionKey) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border-color)] backdrop-blur-xl transition-colors duration-300 ${
        isScrolled ? "bg-[var(--bg-primary)]/90 shadow-xl" : "bg-[var(--bg-primary)]/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-4">
        <button
          onClick={() => handleNavigate("home")}
          className="text-lg font-semibold text-[var(--text-primary)]"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          {profile.name}
        </button>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              className={`group relative transition-colors ${
                activeSection === item.key
                  ? "text-[var(--accent-primary)]"
                  : "hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-300 ${
                  activeSection === item.key ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={links.resume}
            download
            className="rounded-full border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
          >
            Download CV
          </a>
          <button
            onClick={() => handleNavigate("contact")}
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(16,185,129,0.55)] transition hover:bg-emerald-400"
          >
            Contact
          </button>
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-[var(--text-primary)]"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]/95"
          >
            <div className="flex flex-col gap-4 px-4 py-6 text-sm text-[var(--text-secondary)]">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigate(item.key)}
                  className="text-left transition hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
