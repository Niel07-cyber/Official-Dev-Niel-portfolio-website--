
export const projectsList = [
  {
    title: "Landing Page Redesign",
    description: "Modern, responsive, and made with React + Tailwind CSS.",
    company: "Webify Design Studio",
    location: "Accra, Ghana",
    period: "2022 - Present",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1964&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "/projects"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Realtime dashboards and analytics for growing businesses.",
    company: "MarketHub Systems",
    location: "Remote",
    period: "2021-2022",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    tags: ["Node.js", "TypeScript", "React"],
    link: "/projects"
  },
  {
    title: "Interactive Portfolio",
    description: "Creative, animated portfolio to stand out online.",
    company: "Freelance",
    location: "Remote",
    period: "2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "/projects"
  }
];

export type Project = typeof projectsList[0];
