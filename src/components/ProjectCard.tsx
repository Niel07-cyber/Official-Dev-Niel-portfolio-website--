import React from "react";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  transform: string;
  zIndex: number;
  opacity: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  transform,
  zIndex,
  opacity,
}) => {
  return (
    <div
      className="absolute w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] h-full transition-all duration-700 ease-in-out"
      style={{ transform, zIndex, opacity }}
    >
      <div className="flex flex-col md:flex-row h-full bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        {/* Image Side */}
        <div className="md:w-[60%] w-full h-48 sm:h-64 md:h-full relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Text Side */}
        <div className="md:w-[40%] w-full p-3 sm:p-4 md:p-6 flex flex-col justify-between text-white min-h-[200px] md:min-h-full">
          {/* Top Content */}
          <div className="flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 leading-tight">{project.title}</h2>
            <p className="text-gray-300 text-xs sm:text-sm mb-3 line-clamp-3 sm:line-clamp-4 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bottom Content */}
          <div className="mt-auto">
            <div className="mb-3">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold">{project.company}</h3>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">
                {project.location} | {project.period}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.tags.slice(0, 6).map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 sm:px-2 py-0.5 bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-[9px] sm:text-[11px] rounded-full backdrop-blur-sm font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 6 && (
                <span className="px-1.5 sm:px-2 py-0.5 bg-gray-600/20 border border-gray-600/30 text-gray-400 text-[9px] sm:text-[11px] rounded-full backdrop-blur-sm font-medium">
                  +{project.tags.length - 6}
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
