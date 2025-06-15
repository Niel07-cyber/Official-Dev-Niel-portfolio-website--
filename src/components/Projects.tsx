
import React from "react";

const projectList = [
  {
    title: "Personal Portfolio",
    desc: "A stylish, responsive website to showcase my skills and experience.",
    languages: ["React", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    demo: "https://your-portfolio-demo-link.com",
    location: "Remote",
    years: "2024"
  },
  {
    title: "ShopEasy",
    desc: "E-commerce platform with real-time inventory and seamless checkout.",
    languages: ["Next.js", "Typescript", "Stripe"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    demo: "https://shopeasy-demo-link.com",
    location: "Accra, Ghana",
    years: "2023"
  },
  {
    title: "TaskFlow App",
    desc: "Team collaboration tool for task management and productivity.",
    languages: ["React", "Redux", "Node.js"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    demo: "https://taskflow-demo-link.com",
    location: "Remote",
    years: "2022"
  },
  {
    title: "BlogCraft",
    desc: "A blogging platform with markdown editing and real-time preview.",
    languages: ["Next.js", "Chakra UI", "Firebase"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    demo: "https://blogcraft-demo-link.com",
    location: "Lagos, Nigeria",
    years: "2021"
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base">(PROJECTS)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((proj, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-lg bg-[#161616] transition-all animate-fade-in min-h-[280px] group"
            style={{ animationDelay: `${0.2 + i * 0.07}s` }}
          >
            {/* Card Background Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full justify-center px-7 py-7">
              <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{proj.title}</h2>
              <p className="text-gray-200 text-[15px] mb-2 max-w-[96%]">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-1 mb-2">
                {proj.languages.map((lang, j) => (
                  <span
                    key={j}
                    className="bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-start gap-3 mt-auto">
                <span className="text-xs text-gray-200 bg-gray-800/70 rounded px-3 py-1">{proj.location}</span>
                <span className="text-xs text-gray-400">{proj.years}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Preview Demos Button */}
      <div className="text-center mt-12 animate-fade-in">
        <a
          href={projectList[0].demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors"
        >
          Preview Demos
        </a>
      </div>
    </div>
  </section>
);

export default Projects;

