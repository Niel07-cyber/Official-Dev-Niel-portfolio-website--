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
      className="absolute w-full sm:w-[85%] md:w-[70%] lg:w-[60%] h-full transition-all duration-700 ease-in-out"
      style={{ transform, zIndex, opacity }}
    >
      <div className="flex flex-col md:flex-row h-full bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        {/* Image Side (60%) */}
        <div className="md:w-[60%] w-full h-64 md:h-full relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Text Side (40%) */}
<div className="md:w-[40%] w-full p-4 sm:p-6 flex flex-col justify-between text-white">
  {/* Top Content */}
  <div className="flex-1">
    <h2 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h2>
    <p className="text-gray-300 text-sm mb-4 max-h-[50%] overflow-y-auto">
      {project.description}
    </p>
  </div>

  {/* Bottom Content */}
  <div className="mt-2">
    <div className="mb-3">
      <h3 className="text-sm sm:text-base font-semibold">{project.company}</h3>
      <p className="text-gray-400 text-xs sm:text-sm">
        {project.location} | {project.period}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-0.5 bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-[11px] rounded-full backdrop-blur-sm font-medium"
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
};

export default ProjectCard;
