
import React from "react";
import { Button } from "@/components/ui/button";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-background via-blue-950/5 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-brand-purple/15 to-blue-500/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-purple-600/10 to-pink-500/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <p className="text-gray-400 mb-8 sm:mb-10 tracking-widest text-sm sm:text-base text-center">(PROJECTS)</p>
        
        {/* Large Purple Projects Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-brand-purple via-blue-400 to-purple-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
        </div>
        
        <div className="mb-12 sm:mb-16">
          <ProjectsCarousel />
        </div>

        {/* Explore Projects Button */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-transparent to-transparent border border-gray-500 text-white hover:bg-gradient-to-r hover:from-brand-purple hover:to-purple-600 hover:border-brand-purple transition-all duration-300 px-6 sm:px-8 py-3 rounded-full transform hover:scale-105 shadow-lg hover:shadow-brand-purple/25 text-sm sm:text-base"
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
