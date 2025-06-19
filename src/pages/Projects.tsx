
import React from "react";
import { Github, ExternalLink, ArrowLeft, Search, ChevronDown, Shuffle, Sun } from "lucide-react";

const projects = [
  {
    title: "amaze.me",
    subtitle: "code repository",
    description: "A two-dimensional maze generator and visualizer in 3D space.",
    lang: "TypeScript",
    logo: <Github size={36} />,
    info: "project published to GitHub 2 years ago, updated 8 months ago",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "lidar",
    subtitle: "code repository",
    description: "A VR game about escaping a dark maze by scanning your surroundings.",
    lang: "JavaScript",
    logo: <Github size={36} />,
    info: "project published to GitHub 2 years ago, updated 8 months ago",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "avatar",
    subtitle: "code repository",
    description: "A modern SVG avatar generator for the web",
    lang: "TypeScript",
    logo: <Github size={36} />,
    info: "project published to GitHub a year ago, updated a year ago",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Post Apocalyptic Paradox",
    subtitle: "artwork",
    description: "An incoherent landscape drowning in dark, ominous shades of blue and green.",
    lang: "Photoshop 2021",
    logo: <ExternalLink size={32} />,
    info: "",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "neural-network",
    subtitle: "code repository",
    description: "A deep learning framework built from scratch using Python and NumPy.",
    lang: "Python",
    logo: <Github size={36} />,
    info: "project published to GitHub 10 months ago, updated 6 months ago",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "blockchain-explorer",
    subtitle: "web application",
    description: "Real-time blockchain explorer with transaction tracking and analytics dashboard.",
    lang: "React",
    logo: <ExternalLink size={32} />,
    info: "project deployed 8 months ago, updated 3 months ago",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "ai-chatbot",
    subtitle: "code repository",
    description: "Intelligent chatbot with natural language processing capabilities and context awareness.",
    lang: "Node.js",
    logo: <Github size={36} />,
    info: "project published to GitHub 6 months ago, updated 2 months ago",
    exploreUrl: "#",
    demoUrl: "#",
  },
  {
    title: "cryptography-suite",
    subtitle: "code repository",
    description: "Comprehensive cryptography library implementing modern encryption algorithms.",
    lang: "Rust",
    logo: <Github size={36} />,
    info: "project published to GitHub 1 year ago, updated 4 months ago",
    exploreUrl: "#",
    demoUrl: "#",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header Section */}
      <div className="relative px-4 sm:px-8 md:px-16 py-8 sm:py-16">
        <div className="mx-auto w-full max-w-7xl">
          {/* Top Controls */}
          <div className="flex items-center justify-between mb-12 sm:mb-20">
            <a 
              href="/"
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Back to homepage</span>
            </a>
            
            <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Sun size={18} className="sm:w-5 sm:h-5 text-yellow-300" />
            </button>
          </div>

          {/* Main Header with Featured Text */}
          <div className="relative flex items-start">
            {/* Vertical "Featured" Text */}
            <div className="hidden lg:block mr-16 mt-8">
              <div className="writing-mode-vertical-rl text-orientation-mixed">
                <span className="text-lg font-normal text-gray-400 tracking-[0.3em] transform rotate-180 inline-block">
                  Featured
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 sm:mb-12">
                Projects &<br />
                <span className="font-bold">Experiments</span>
              </h1>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-4xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="sm:w-5 sm:h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search 8 projects"
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <button className="flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/80 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-colors min-w-[180px] sm:min-w-[200px] text-sm sm:text-base">
                <span>Filter by platform</span>
                <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            {/* Randomize Button */}
            <button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
              <Shuffle size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Randomize</span>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 sm:px-8 md:px-16 pb-12 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-4 sm:gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="relative group bg-[#121217] border border-[#22222A] rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 py-4 sm:py-7 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:border-brand-purple gap-3 sm:gap-0"
              >
                {/* Logo */}
                <div className="flex-shrink-0 sm:mr-5">
                  <div className="bg-[#211F2A] rounded-lg sm:rounded-xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center text-brand-purple border border-[#282837] shadow-sm">
                    {React.cloneElement(proj.logo, { size: window.innerWidth < 640 ? 24 : 36 })}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-1 sm:gap-1 md:gap-4 md:flex-row md:items-center">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                        {proj.title}
                      </span>
                      <span className="text-sm sm:text-base font-normal text-gray-400">
                        {proj.subtitle}
                      </span>
                    </div>
                    <span className="hidden md:inline text-gray-500">|</span>
                    <span className="text-sm sm:text-lg text-gray-200 leading-relaxed">
                      {proj.description}
                    </span>
                  </div>
                  <div className="mt-1 sm:mt-2">
                    <span className="font-semibold text-xs sm:text-sm text-brand-purple">{proj.lang}</span>
                    {proj.info && (
                      <span className="text-xs sm:text-sm text-gray-400 ml-2">{proj.info}</span>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2 sm:gap-3 flex-row sm:flex-col md:flex-row items-stretch sm:items-end md:items-center w-full sm:w-auto sm:ml-6 mt-3 sm:mt-0">
                  <a
                    href={proj.exploreUrl}
                    className="flex-1 sm:flex-none border border-gray-500 bg-transparent rounded-md px-3 sm:px-4 py-2 text-xs sm:text-base text-white hover:bg-[#191932] hover:border-brand-purple transition-colors text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                  >
                    &lt;/&gt; Explore source
                  </a>
                  <a
                    href={proj.demoUrl}
                    className="flex-1 sm:flex-none bg-gray-100 text-gray-900 font-semibold rounded-md px-3 sm:px-4 py-2 text-xs sm:text-base hover:bg-brand-purple hover:text-white transition-colors flex items-center justify-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                  >
                    <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px] inline mr-1" fill="none">
                      <path d="M6 4l8 5-8 5V4z" fill="currentColor"/>
                    </svg>
                    Run demo
                  </a>
                </div>
                {/* Hover effect outline border */}
                <span className="pointer-events-none absolute -inset-1 rounded-xl sm:rounded-2xl border-2 border-transparent transition group-hover:border-brand-purple" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
