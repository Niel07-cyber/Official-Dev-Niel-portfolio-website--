
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
    exploreUrl: "https://github.com/username/amaze-me",
    demoUrl: "https://amaze-me-demo.vercel.app",
  },
  {
    title: "lidar",
    subtitle: "code repository",
    description: "A VR game about escaping a dark maze by scanning your surroundings.",
    lang: "JavaScript",
    logo: <Github size={36} />,
    info: "project published to GitHub 2 years ago, updated 8 months ago",
    exploreUrl: "https://github.com/username/lidar-vr",
    demoUrl: "https://lidar-vr-demo.netlify.app",
  },
  {
    title: "avatar",
    subtitle: "code repository",
    description: "A modern SVG avatar generator for the web",
    lang: "TypeScript",
    logo: <Github size={36} />,
    info: "project published to GitHub a year ago, updated a year ago",
    exploreUrl: "https://github.com/username/avatar-generator",
    demoUrl: "https://avatar-generator-demo.vercel.app",
  },
  {
    title: "Post Apocalyptic Paradox",
    subtitle: "artwork",
    description: "An incoherent landscape drowning in dark, ominous shades of blue and green.",
    lang: "Photoshop 2021",
    logo: <ExternalLink size={32} />,
    info: "",
    exploreUrl: "https://github.com/username/post-apocalyptic-art",
    demoUrl: "https://post-apocalyptic-gallery.vercel.app",
  },
  {
    title: "neural-network",
    subtitle: "code repository",
    description: "A deep learning framework built from scratch using Python and NumPy.",
    lang: "Python",
    logo: <Github size={36} />,
    info: "project published to GitHub 10 months ago, updated 6 months ago",
    exploreUrl: "https://github.com/username/neural-network",
    demoUrl: "https://neural-network-demo.herokuapp.com",
  },
  {
    title: "blockchain-explorer",
    subtitle: "web application",
    description: "Real-time blockchain explorer with transaction tracking and analytics dashboard.",
    lang: "React",
    logo: <ExternalLink size={32} />,
    info: "project deployed 8 months ago, updated 3 months ago",
    exploreUrl: "https://github.com/username/blockchain-explorer",
    demoUrl: "https://blockchain-explorer-demo.vercel.app",
  },
  {
    title: "ai-chatbot",
    subtitle: "code repository",
    description: "Intelligent chatbot with natural language processing capabilities and context awareness.",
    lang: "Node.js",
    logo: <Github size={36} />,
    info: "project published to GitHub 6 months ago, updated 2 months ago",
    exploreUrl: "https://github.com/username/ai-chatbot",
    demoUrl: "https://ai-chatbot-demo.netlify.app",
  },
  {
    title: "cryptography-suite",
    subtitle: "code repository",
    description: "Comprehensive cryptography library implementing modern encryption algorithms.",
    lang: "Rust",
    logo: <Github size={36} />,
    info: "project published to GitHub 1 year ago, updated 4 months ago",
    exploreUrl: "https://github.com/username/cryptography-suite",
    demoUrl: "https://cryptography-suite-demo.vercel.app",
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header Section */}
      <div className="relative px-8 md:px-16 py-16">
        <div className="mx-auto w-full max-w-7xl">
          {/* Top Controls */}
          <div className="flex items-center justify-between mb-20">
            <a 
              href="/"
              className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to homepage</span>
            </a>
            
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Sun size={20} className="text-yellow-300" />
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
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-12">
                Projects &<br />
                <span className="font-bold">Experiments</span>
              </h1>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mt-12 max-w-4xl">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search 8 projects"
                className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <button className="flex items-center justify-between gap-3 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-colors min-w-[200px]">
                <span>Filter by platform</span>
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Randomize Button */}
            <button className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium">
              <Shuffle size={18} />
              <span>Randomize</span>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-8 md:px-16 pb-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-8">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="relative group bg-[#121217] border border-[#22222A] rounded-2xl flex items-center px-6 py-7 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:border-brand-purple"
              >
                {/* Logo */}
                <div className="flex-shrink-0 mr-5">
                  <div className="bg-[#211F2A] rounded-xl w-14 h-14 flex items-center justify-center text-brand-purple border border-[#282837] shadow-sm">
                    {proj.logo}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="text-2xl md:text-3xl font-bold text-white mr-2 leading-[1.15]">
                      {proj.title}
                      <span className="font-normal text-gray-400 ml-2">{proj.subtitle}</span>
                    </span>
                    <span className="hidden md:inline text-gray-500">|</span>
                    <span className="text-lg text-gray-200">{proj.description}</span>
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold text-sm text-brand-purple">{proj.lang}</span>
                    <span className="text-sm text-gray-400 ml-2">{proj.info}</span>
                  </div>
                </div>
                {/* Actions */}
                <div className="ml-6 flex gap-3 flex-col md:flex-row items-end md:items-center">
                  <a
                    href={proj.exploreUrl}
                    className="border border-gray-500 bg-transparent rounded-md px-4 py-2 text-base text-white hover:bg-[#191932] hover:border-brand-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                  >
                    &lt;/&gt; Explore source
                  </a>
                  <a
                    href={proj.demoUrl}
                    className="bg-gray-100 text-gray-900 font-semibold rounded-md px-4 py-2 text-base hover:bg-brand-purple hover:text-white transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={0}
                  >
                    <svg width="18" height="18" className="inline mr-1" fill="none">
                      <path d="M6 4l8 5-8 5V4z" fill="currentColor"/>
                    </svg>
                    Run demo
                  </a>
                </div>
                {/* Hover effect outline border */}
                <span className="pointer-events-none absolute -inset-1 rounded-2xl border-2 border-transparent transition group-hover:border-brand-purple" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
