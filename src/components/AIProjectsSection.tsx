
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Eye, MessageSquare, ArrowRight, Zap, Target, Globe } from "lucide-react";

const AIProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Neural Network Framework",
      subtitle: "Deep Learning Innovation",
      description: "Advanced neural architectures with state-of-the-art optimization algorithms for next-generation AI applications.",
      icon: Brain,
      color: "from-emerald-500 to-cyan-600",
      metrics: [
        { label: "Model Accuracy", value: "94.2%", icon: Target },
        { label: "Training Speed", value: "2.3x faster", icon: Zap },
        { label: "Architectures", value: "15+ models", icon: Globe }
      ],
      tags: ["Python", "TensorFlow", "PyTorch", "CUDA"],
      link: "/projects"
    },
    {
      id: 1,
      title: "Computer Vision AI",
      subtitle: "Real-time Object Detection",
      description: "Advanced computer vision system with real-time processing and multi-class object recognition capabilities.",
      icon: Eye,
      color: "from-orange-500 to-pink-600",
      metrics: [
        { label: "Detection Rate", value: "99.1%", icon: Target },
        { label: "Latency", value: "< 50ms", icon: Zap },
        { label: "Object Classes", value: "80+ types", icon: Globe }
      ],
      tags: ["OpenCV", "YOLO", "CNN", "Python"],
      link: "/projects"
    },
    {
      id: 2,
      title: "Natural Language AI",
      subtitle: "Conversational Intelligence",
      description: "Intelligent NLP system with advanced sentiment analysis, text generation, and multi-language support.",
      icon: MessageSquare,
      color: "from-violet-500 to-purple-600",
      metrics: [
        { label: "Languages", value: "12 supported", icon: Globe },
        { label: "Accuracy", value: "96.8%", icon: Target },
        { label: "Processed", value: "1M+ requests", icon: Zap }
      ],
      tags: ["Transformers", "BERT", "GPT", "NLP"],
      link: "/projects"
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-60 relative z-10 max-w-7xl mx-auto">
        <p className="text-gray-400 mb-4 sm:mb-6 tracking-widest text-sm sm:text-base text-center">(AI & MACHINE LEARNING)</p>
        
        {/* Main Title - Reduced size */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Redefining
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            THE FUTURE WITH
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              AI INNOVATION
            </span>
          </h3>
        </div>

        {/* Interactive Dashboard - Reduced size */}
        <div className="relative mb-6 sm:mb-8">
          {/* Central Hub with Robot Image - Smaller */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-black rounded-full flex items-center justify-center border-2 border-emerald-500/50 backdrop-blur-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/af0deefa-9b40-4b71-ac2d-a43a7a74dd53.png" 
                  alt="AI Robot" 
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover object-center rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 animate-ping"></div>
            </div>
          </div>

          {/* Project Cards Arranged in Arc - Reduced size */}
          <div className="relative h-48 sm:h-56">
            {projects.map((project, index) => {
              const angle = (index - 1) * 80; // Spread out cards
              const radius = 140; // Smaller radius
              const x = Math.sin((angle * Math.PI) / 180) * radius;
              const y = -Math.cos((angle * Math.PI) / 180) * radius * 0.4;
              
              const IconComponent = project.icon;
              const isActive = activeProject === index;
              
              return (
                <div key={project.id}>
                  {/* Project Card - Smaller */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isActive ? 'scale(1.1)' : 'scale(1)'}`
                    }}
                  >
                    <button
                      onClick={() => setActiveProject(index)}
                      className={`group relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-r ${project.color} shadow-2xl` 
                          : 'bg-gray-700/90 hover:bg-gray-600/90 shadow-lg border border-gray-500'
                      } backdrop-blur-sm`}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        isActive ? 'text-white' : 'text-gray-300'
                      }`} />
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                      )}
                    </button>
                  </div>
                  
                  {/* Connecting Lines from center to cards */}
                  <svg 
                    className="absolute top-1/2 left-1/2 pointer-events-none w-full h-full"
                    style={{ transform: `translate(-50%, -50%)` }}
                  >
                    <defs>
                      <pattern id={`dots-${index}`} patternUnits="userSpaceOnUse" width="8" height="8">
                        <circle cx="4" cy="4" r="1" fill={isActive ? "#10b981" : "#6b7280"} />
                      </pattern>
                    </defs>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke={`url(#dots-${index})`}
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Details Panel - Compact */}
        <div className="bg-gray-700/70 backdrop-blur-sm border border-gray-600/60 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Panel */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentProject.color} flex items-center justify-center shadow-lg`}>
                  <currentProject.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{currentProject.title}</h3>
                  <p className="text-gray-400 text-sm">{currentProject.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{currentProject.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-600/80 border border-gray-500 rounded-full text-gray-200 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Panel - Metrics */}
            <div className="space-y-3">
              {currentProject.metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-600/80 rounded-lg border border-gray-500 shadow-sm">
                  <div className="flex items-center gap-2">
                    <metric.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{metric.label}</span>
                  </div>
                  <span className="font-bold text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons - Compact */}
        <div className="text-center space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white border-0 px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
          >
            <a href="/projects">
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-700 hover:border-gray-300 px-6 py-2 rounded-full transition-all duration-300"
          >
            <a href="/projects">
              Discover More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIProjectsSection;
