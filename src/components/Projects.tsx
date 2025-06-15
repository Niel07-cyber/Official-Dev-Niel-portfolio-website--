
import React from "react";

const projectList = [
  {
    title: "Personal Portfolio",
    desc: "A stylish, responsive website to showcase my skills and experience.",
    languages: ["React", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    demo: "https://your-portfolio-demo-link.com"
  },
  {
    title: "ShopEasy",
    desc: "E-commerce platform with real-time inventory and seamless checkout.",
    languages: ["Next.js", "Typescript", "Stripe"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    demo: "https://shopeasy-demo-link.com"
  },
  {
    title: "TaskFlow App",
    desc: "Team collaboration tool for task management and productivity.",
    languages: ["React", "Redux", "Node.js"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    demo: "https://taskflow-demo-link.com"
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base">(PROJECTS)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((proj, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-[#161616] hover:scale-105 hover:shadow-2xl transition-all"
            style={{ minHeight: 340, animationDelay: `${0.2 + i * 0.07}s` }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col">
              <h2 className="text-xl font-bold text-white">{proj.title}</h2>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {proj.languages.map((lang, j) => (
                  <span
                    key={j}
                    className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded text-[10px]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-brand-purple rounded-full text-brand-purple hover:bg-brand-purple hover:text-white transition-colors text-sm"
                >
                  Preview Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
