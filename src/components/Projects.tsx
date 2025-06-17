
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Projects list (3 projects)
const projectsList = [
  {
    title: "HERO PRODUCTS",
    subtitle: "E-commerce Platform",
    company: "TechStart Solutions",
    description: "AI-driven ecommerce solution integrated into platforms for enhanced user experience, providing real-time product recommendations and personalized shopping journeys.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1964&auto=format&fit=crop",
    tags: ["E-commerce", "AI", "React", "Real-time"],
    link: "/projects"
  },
  {
    title: "FIRECAT SYSTEM",
    subtitle: "6th SENSE Safety Platform",
    company: "FireCat Group",
    description: "Smart safety R&D platform aiming to revolutionize development, monitoring, and testing of safety systems in high-risk environments.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    tags: ["Safety", "IoT", "Monitoring", "Real-time"],
    link: "/projects"
  },
  {
    title: "NEURAL NETWORK",
    subtitle: "AI Learning Framework",
    company: "DeepTech Labs",
    description: "Advanced machine learning framework built from scratch using modern algorithms for deep learning applications and neural network training.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    tags: ["AI", "Machine Learning", "Python", "Neural Networks"],
    link: "/projects"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-gray-400 mb-10 tracking-widest text-base text-center">(PROJECTS)</p>
        
        <Carousel className="w-full">
          <CarouselContent>
            {projectsList.map((project, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    {/* Top Section */}
                    <div className="text-center">
                      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">
                        {project.title}
                      </h1>
                      <div className="w-16 h-1 bg-brand-purple mx-auto mb-4"></div>
                      <h2 className="text-xl text-gray-300 mb-6">{project.subtitle}</h2>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-6">
                      {/* Company */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.company}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      <div className="text-center">
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-white hover:text-brand-purple transition-colors group"
                        >
                          <span className="text-lg">Learn more</span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="group-hover:translate-x-1 transition-transform"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" />
        </Carousel>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-purple' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
