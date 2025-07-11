
import React from 'react';
import { Github, Star, GitFork } from 'lucide-react';

const OpenSourceSection = () => {
  const projects = [
    {
      name: "Contacts App",
      description: "Java based CRUD application for managing contacts",
      stars: "21.5k",
      forks: "4.2k",
      language: "Java",
      url: "https://github.com/dm-mensavi/contacts_app"
    },
    {
      name: "Pnuemonia Detection",
      description: "Predict Normal or Pneumonia using X-ray images",
      stars: "856",
      forks: "234",
      language: "Pyhton",
      url: "https://github.com/Niel07-cyber/PNEUMONIA-MACHINE-LEARNING-MODEL"
    },
    {
      name: "Prod-Own",
      description: "Product Owner task manager",
      stars: "432",
      forks: "89",
      language: "TypeScript",
      url: "https://github.com/Niel07-cyber/ProductOwner--"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-8 w-8 text-brand-purple" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Open Source</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contributing to the developer community through open source projects and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-purple/50 hover:bg-gray-900/70 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-brand-purple transition-colors">
                  {project.name}
                </h3>
                <Github className="h-5 w-5 text-gray-400" />
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
                <span className="bg-brand-purple/10 text-brand-purple px-2 py-1 rounded text-xs">
                  {project.language}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
