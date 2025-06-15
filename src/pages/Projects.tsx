
import React from "react";
import { Github, ExternalLink, ArrowLeft, Search, Filter, Shuffle, Sun } from "lucide-react";

const projects = [
  {
    title: "amaze.me",
    subtitle: "code repository",
    description: "A two-dimensional maze generator and visualizer in 3D space.",
    lang: "TypeScript",
    logo: <Github size={36} />,
    info: "project published to GitHub 2 years ago, updated 8 months ago",
    exploreUrl: "#", // Replace with actual GitHub/source link
    demoUrl: "#",    // Replace with actual demo link
  },
  {
    title: "lidar",
    subtitle: "code repository",
    description: "A VR game about escaping a dark maze by scanning your surroundings.",
    lang: "JavaScript",
    logo: <Github size={36} />,
    info: "project published to GitHub 2 years ago, updated 8 months ago",
    exploreUrl: "#", // Replace with actual GitHub/source link
    demoUrl: "#",    // Replace with actual demo link
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
    logo: <ExternalLink size={32} />, // Example non-GitHub icon
    info: "",
    exploreUrl: "#",
    demoUrl: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative px-4 md:px-12 py-12 mb-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Top Controls */}
          <div className="flex items-center justify-between mb-16">
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="text-sm">Back to homepage</span>
            </a>
            
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-black/40 hover:bg-gray-800 transition-colors">
                <Search size={18} className="text-gray-300" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-black/40 hover:bg-gray-800 transition-colors">
                <Filter size={18} className="text-gray-300" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-black/40 hover:bg-gray-800 transition-colors">
                <Shuffle size={18} className="text-gray-300" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-black/40 hover:bg-gray-800 transition-colors">
                <Sun size={18} className="text-yellow-300" />
              </button>
            </div>
          </div>

          {/* Main Header Content */}
          <div className="relative flex items-start">
            {/* Vertical "Featured" Text */}
            <div className="hidden lg:block mr-12">
              <div className="writing-mode-vertical-rl text-orientation-mixed">
                <span className="text-4xl font-bold text-gray-600 tracking-widest transform rotate-180 inline-block">
                  FEATURED
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="flex-1">
              <div className="mb-6">
                <span className="block text-lg font-medium text-gray-400 tracking-widest mb-5">
                  (PROJECTS)
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
                  Projects &<br />
                  Experiments
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 md:px-12 pb-20">
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
