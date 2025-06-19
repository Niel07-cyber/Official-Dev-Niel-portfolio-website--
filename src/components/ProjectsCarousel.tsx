
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projectsList } from "@/data/projectsData";

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom Stacked Carousel */}
      <div className="relative w-full max-w-3xl sm:max-w-5xl mx-auto mb-8 sm:mb-12">
        <div className="relative h-[300px] sm:h-[500px] flex items-center justify-center overflow-visible">
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
              <ProjectCard
                key={index}
                project={project}
                transform={transform}
                zIndex={zIndex}
                opacity={opacity}
              />
            );
          })}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + projectsList.length) % projectsList.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-40 hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % projectsList.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-40 hover:scale-110 transition-transform"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mb-8 sm:mb-12">
        {projectsList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors hover:scale-125 transition-transform ${
              index === currentIndex ? 'bg-brand-purple' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsCarousel;
