import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { itemVariants, sectionVariants, staggerContainer } from "../ui/motion";
import { projects } from "../../data/portfolioData";

const categories = ["All", "Full Stack", "AI", "Backend"] as const;

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function Projects({ sectionRef }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader title="Projects Showcase" eyebrow="Selected Work" />
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                activeCategory === category
                  ? "border-emerald-400/60 bg-emerald-400/20 text-emerald-600 dark:text-emerald-200"
                  : "border-[var(--border-color)] bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 p-6 backdrop-blur-xl transition"
            >
              <div className="relative mb-5 h-40 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(244,114,182,0.2),_transparent_60%)]" />
                  </>
                )}
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.35em] text-white bg-black/40 px-2 py-1 rounded">
                  {project.category}
                </div>
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-slate-950/60" />
                  <div className="absolute inset-x-4 bottom-4 text-xs text-emerald-400">
                    Explore details
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{project.description}</p>
                </div>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-200">
                  {project.category}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--bg-tertiary)]/70 px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {project.links && project.links.length > 0 && (
                <div className="mt-5 flex gap-4">
                  {project.links.map((link) => (
                    <motion.button
                      key={link.label}
                      onClick={() => window.open(link.href, "_blank", "noopener,noreferrer")}
                      className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-200 hover:text-[var(--text-primary)]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
