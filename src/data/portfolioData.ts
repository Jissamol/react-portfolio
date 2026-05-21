export type SectionKey =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "certificates"
  | "achievements"
  | "contact";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: "Full Stack" | "AI" | "Backend";
  highlights: string[];
  links?: { label: string; href: string }[];
  image?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface Certificate {
  title: string;
  note?: string;
}

export interface Achievement {
  title: string;
  details: string;
}

export const profile = {
  name: "Jissamol Benny",
  role: "MCA Student | Full Stack Developer | AI & Backend Enthusiast",
  location: "Kerala, India",
  email: "jissamolbenny@gmail.com",
  phone: "+91 6282668044",
  heroBlurb:
    "Building immersive web experiences with modern UI, solid backend architecture, and AI-driven features.",
};

export const links = {
  linkedin: "https://linkedin.com/in/jissamolbenny",
  github: "https://github.com/Jissamol",
  leetcode: "https://leetcode.com/u/Jissamol/",
  resume: "/documents/Jissamol.pdf",
};

export const summary =
  "MCA student graduating in 2026 with hands-on experience in full-stack development using Python, Django, React, and REST APIs. Built scalable web applications including AI-powered travel planning, academic management, and e-commerce systems. Strong interest in backend engineering, AI applications, and modern software development.";

export const stats = [
  { label: "Projects Delivered", value: "4+" },
  { label: "Tech Stack", value: "Full Stack" },
  { label: "CGPA", value: "8.5" },
];

export const skillMeters = [
  { label: "React", value: 88 },
  { label: "Django", value: 90 },
  { label: "REST APIs", value: 86 },
  { label: "UI Design", value: 82 },
];

export const navItems: { key: SectionKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
  { key: "education", label: "Education" },
  { key: "certificates", label: "Certificates" },
  { key: "achievements", label: "Achievements" },
  { key: "contact", label: "Contact" },
];

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "BA0BA0 PTE LTD",
    period: "Jan 2026 - Apr 2026",
    bullets: [
      "Collaborated with developers to build and test software modules using modern development practices.",
      "Debugged and resolved application issues to improve system performance and reliability.",
      "Participated in feature development, API testing, and project deployment workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "TeachFlow (Performance Based Appraisal System)",
    description:
      "Full-stack academic performance management platform with analytics dashboards and automated PBAS workflows.",
    tech: ["React", "Django REST Framework", "Recharts", "JWT Auth"],
    category: "Full Stack",
    highlights: [
      "Real-time analytics dashboards for faculty performance.",
      "Role-based access and automated PBAS reports.",
      "Responsive interface optimized for admin workflows.",
    ],
    image: "https://media.gettyimages.com/id/2196132633/photo/back-view-of-elementary-teacher-talking-about-lecture-on-a-class.jpg?s=612x612&w=0&k=20&c=eAxNLYvGTYECtgcRW1K6rNZ61-GUD-oI6RsDgQPEEdQ=",
  },
  {
    title: "Travel Buddy (AI Travel Planning Platform)",
    description:
      "AI-powered itinerary planner with live map visualization, collaborative trip sharing, and smart packing lists.",
    tech: ["React", "Django REST Framework", "PostgreSQL", "OpenStreetMap"],
    category: "AI",
    highlights: [
      "Day-wise itinerary management with route visualization.",
      "Collaborative trip sharing with tokenized access.",
      "Packing checklist generated from weather and duration.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Responsive UI Design"],
  },
  {
    title: "Backend",
    items: ["Django", "Django REST Framework", "Node.js"],
  },
  {
    title: "Database",
    items: ["SQLite", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Concepts",
    items: ["REST APIs", "JWT Authentication", "Responsive Design"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Marian College Kuttikkanam, Mahatma Gandhi University",
    period: "2024 - 2026",
    details: "CGPA: 8.5/10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Santhigiri College of Computer Applications, Mahatma Gandhi University",
    period: "2021 - 2024",
    details: "CGPA: 6.4/10",
  },
];

export const certificates: Certificate[] = [
  { title: "Data Visualization Using Python" },
  { title: "Data Science Tools" },
  { title: "National Service Scheme (NSS)" },
];

export const achievements: Achievement[] = [
  {
    title: "Django Workshop Lead",
    details:
      "Led a workshop on Django development for BCA students at Assumption College, Changanassery.",
  },
  {
    title: "NSS Volunteer",
    details:
      "Volunteered in NSS activities including cleanliness drives and awareness programs.",
  },
  {
    title: "NSS Annual Camp Recognition",
    details:
      "Recognized for leadership and active involvement in NSS annual camp activities.",
  },
  {
    title: "Class Representative",
    details:
      "Chosen as class representative to coordinate academic and event-related tasks.",
  },
];
