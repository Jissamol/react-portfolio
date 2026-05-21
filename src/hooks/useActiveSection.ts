import { useEffect, useState } from "react";
import type { SectionKey } from "../data/portfolioData";

export default function useActiveSection(
  sections: Record<SectionKey, React.RefObject<HTMLElement | null>>
) {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const [section, ref] of Object.entries(sections)) {
        const element = ref.current;
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section as SectionKey);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
}
