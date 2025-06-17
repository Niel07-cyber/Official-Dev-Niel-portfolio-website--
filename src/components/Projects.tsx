
import React from "react";
import { Button } from "@/components/ui/button";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="text-gray-400 mb-10 tracking-widest text-base text-center">(PROJECTS)</p>
        
        {/* Large Purple Projects Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-brand-purple mb-8">
            Projects
          </h1>
        </div>
        
        <ProjectsCarousel />

        {/* Explore Projects Button */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-transparent border border-gray-500 text-white hover:bg-brand-purple hover:border-brand-purple transition-colors px-8 py-3 rounded-full hover:scale-110 transition-transform"
          >
            <a href="/projects">
              Explore Projects →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
