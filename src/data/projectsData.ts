
export const projectsList = [
  {
    title: "Code with Niel",
    description: "Programming Website with interactive courses, real-world projects, and expert mentorship. Start your journey to becoming a professional developer",
    company: "DevNiel",
    location: "Remote",
    period: "Present",
    image: "/assets/ottt.png",
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
    period: "2025",
    image: "/assets/cd.png",
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
    location: "Lille, France",
    period: "2024",
    image: "/assets/drive.jpeg",
    tags: ["Django", "Docker", "HTML", "Tailwindcss", "JavaScript"],
    link: "/projects",
    metrics: {
      languages: "12 supported",
      accuracy: "96.8%",
      responses: "1M+ processed"
    }
  },
  {
    title: "Contacts App",
    description: "JavaFX-based contact management application built with Maven! This app allows you to create, view, update, and delete contacts with ease, featuring a sleek UI and robust database integration.",
    company: "Junia ISEN Lille",
    location: "Lille, France",
    period: "2025",
    image: "/assets/kk.png",
    tags: ["Java", "SQlite", "JavaFX", "Maven", ],
    link: "/projects",
    metrics: {
      accuracy: "94.2%",
      speed: "2.3x faster",
      models: "15+ architectures"
    }
  },
];

export type Project = typeof projectsList[0];
