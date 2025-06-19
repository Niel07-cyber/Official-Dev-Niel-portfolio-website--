
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
      color: "from-purple-500 to-blue-600",
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
      color: "from-green-500 to-teal-600",
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
      color: "from-orange-500 to-red-600",
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-l from-purple-600/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <p className="text-gray-400 mb-6 sm:mb-8 lg:mb-10 tracking-widest text-sm sm:text-base text-center">(AI & MACHINE LEARNING)</p>
        
        {/* Main Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
              Redefining
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            THE FUTURE WITH
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI INNOVATION
            </span>
          </h3>
        </div>

        {/* Interactive Dashboard */}
        <div className="relative mb-12 sm:mb-16">
          {/* Central Hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-blue-400/30 backdrop-blur-sm">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-ping"></div>
            </div>
          </div>

          {/* Project Cards Arranged in Arc */}
          <div className="relative h-80 sm:h-96">
            {projects.map((project, index) => {
              const angle = (index - 1) * 60; // -60, 0, 60 degrees
              const radius = 200;
              const x = Math.sin((angle * Math.PI) / 180) * radius;
              const y = -Math.cos((angle * Math.PI) / 180) * radius * 0.5;
              
              const IconComponent = project.icon;
              const isActive = activeProject === index;
              
              return (
                <div
                  key={project.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${isActive ? 'scale(1.1)' : 'scale(1)'}`
                  }}
                >
                  <button
                    onClick={() => setActiveProject(index)}
                    className={`group relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${project.color} shadow-2xl` 
                        : 'bg-gray-800/80 hover:bg-gray-700/80'
                    } backdrop-blur-sm border border-gray-600/50 hover:border-gray-400/50`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`} />
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                    )}
                  </button>
                  
                  {/* Connecting Lines */}
                  <svg 
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      transform: `translate(-50%, -50%)`,
                      width: Math.abs(x) + 100,
                      height: Math.abs(y) + 100,
                    }}
                  >
                    <line
                      x1={x > 0 ? 0 : Math.abs(x)}
                      y1={y > 0 ? 0 : Math.abs(y)}
                      x2={x > 0 ? Math.abs(x) : 0}
                      y2={y > 0 ? Math.abs(y) : 0}
                      stroke={isActive ? "#3b82f6" : "#374151"}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Details Panel */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentProject.color} flex items-center justify-center`}>
                  <currentProject.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentProject.title}</h3>
                  <p className="text-gray-400">{currentProject.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{currentProject.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-full text-gray-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Panel - Metrics */}
            <div className="space-y-4">
              {currentProject.metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-3">
                    <metric.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">{metric.label}</span>
                  </div>
                  <span className="font-bold text-white text-lg">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <a href="/projects">
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-400 px-8 py-3 rounded-full transition-all duration-300"
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
