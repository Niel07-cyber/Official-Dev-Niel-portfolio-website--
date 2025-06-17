
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
  opacity 
}) => {
  return (
    <div
      className="absolute w-[400px] h-[400px] transition-all duration-700 ease-in-out hover:scale-[1.02] hover:duration-300"
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
};

export default ProjectCard;
