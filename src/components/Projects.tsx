
import React from "react";

const projectList = [
  {
    title: "Personal Portfolio",
    desc: "A stylish, responsive website to showcase my skills and experience.",
    languages: ["React", "Typescript", "Tailwind CSS"],
    demo: "https://your-portfolio-demo-link.com"
  },
  {
    title: "ShopEasy",
    desc: "E-commerce platform with real-time inventory and seamless checkout.",
    languages: ["Next.js", "Typescript", "Stripe"],
    demo: "https://shopeasy-demo-link.com"
  },
  {
    title: "TaskFlow App",
    desc: "Team collaboration tool for task management and productivity.",
    languages: ["React", "Redux", "Node.js"],
    demo: "https://taskflow-demo-link.com"
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base">(PROJECTS)</p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((proj, idx) => (
          <div key={idx} className="bg-[#191919] rounded-xl p-6 border border-gray-800 hover:scale-105 transition-transform duration-200 shadow-lg flex flex-col justify-between min-h-[250px]">
            <div>
              <h3 className="text-xl font-bold text-white">{proj.title}</h3>
              <p className="text-gray-300 mt-2 mb-3 text-sm">{proj.desc}</p>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-2 mb-2">
              {proj.languages.map((lang, lngIdx) => (
                <span key={lngIdx} className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded text-[11px]">{lang}</span>
              ))}
            </div>
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 border border-brand-purple rounded-full text-brand-purple hover:bg-brand-purple hover:text-white transition-colors text-sm"
            >
              Preview Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
