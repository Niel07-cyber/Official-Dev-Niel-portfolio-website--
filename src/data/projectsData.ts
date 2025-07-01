
export const projectsList = [
  {
    title: "Code with Niel",
    description: "Programming Website with interactive courses, real-world projects, and expert mentorship. Start your journey to becoming a professional developer",
    company: "DevNiel",
    location: "Remote",
    period: "Present",
    image: "../../src/assets/ottt.png",
    tags: ["TypeScript", "Vite", "Superbase", "TailwindCSS", ],
    link: "/projects",
    metrics: {
      accuracy: "94.2%",
      speed: "2.3x faster",
      models: "15+ architectures"
    }
  },
  {
    title: "E-book Store -CodiBook",
    description: "An end-to-end Library Book Management System designed in a team. This project showcases a complete MERN-like stack experience, combining a ReactJS frontend with a NestJS + TypeORM + SQLite backendS.",
    company: "Junia ISEN Lille",
    location: "Lille, France",
    period: "2024",
    image: "../../src/assets/cd.png",
    tags: ["NestJS", "TypeORM", "SQlite", "TypeScript", "React"],
    link: "/projects",
    metrics: {
      detection: "99.1% accuracy",
      latency: "< 50ms",
      objects: "80+ classes"
    }
  },
  {
    title: "Junia Drive - Cloud Storage",
    description: " Offers 100MB per user with file upload limits and lets users create folders, upload, and manage files easily. The app includes storage usage graphics and is containerized with Docker, providing a Google Drive-like experience.",
    company: "Junia ISEN Lille",
    location: "Boston, MA",
    period: "2024",
    image: "../../src/assets/drive.jpeg",
    tags: ["Django", "Docker", "HTML", "Tailwindcss", "JavaScript"],
    link: "/projects",
    metrics: {
      languages: "12 supported",
      accuracy: "96.8%",
      responses: "1M+ processed"
    }
  }
];

export type Project = typeof projectsList[0];
