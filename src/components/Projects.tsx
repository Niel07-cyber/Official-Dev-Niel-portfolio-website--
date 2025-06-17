
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Projects list (3 projects)
const projectsList = [
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

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 15 seconds (changed from 20 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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
        
        {/* Custom Stacked Carousel */}
        <div className="relative w-full max-w-5xl mx-auto mb-12">
          <div className="relative h-[500px] flex items-center justify-center overflow-visible">
            {projectsList.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + projectsList.length) % projectsList.length;
              const isNext = index === (currentIndex + 1) % projectsList.length;
              
              let transform = 'translateX(100%) scale(0.8)';
              let zIndex = 0;
              let opacity = 0;
              
              if (isActive) {
                transform = 'translateX(0%) scale(1)';
                zIndex = 30;
                opacity = 1;
              } else if (isPrev) {
                transform = 'translateX(-70%) scale(0.8)';
                zIndex = 20;
                opacity = 0.7;
              } else if (isNext) {
                transform = 'translateX(70%) scale(0.8)';
                zIndex = 20;
                opacity = 0.7;
              }
              
              return (
                <div
                  key={index}
                  className="absolute w-[400px] h-[400px] transition-all duration-700 ease-in-out hover:scale-[1.02]"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 group">
                    {/* Background Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      {/* Top Section */}
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="space-y-4">
                        {/* Company Info */}
                        <div>
                          <h3 className="text-lg font-semibold text-white">{project.company}</h3>
                          <p className="text-gray-400 text-sm">{project.location} | {project.period}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-brand-purple/20 backdrop-blur-sm border border-brand-purple/30 rounded-full text-brand-purple text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-40 hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % projectsList.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-40 hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {projectsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors hover:scale-125 transition-transform ${
                index === currentIndex ? 'bg-brand-purple' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

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
