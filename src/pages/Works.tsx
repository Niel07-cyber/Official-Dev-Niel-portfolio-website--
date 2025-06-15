
import React from "react";
import { ArrowRight } from "lucide-react";

const allWorks = [
  {
    title: "Landing Page Redesign",
    desc: "Modern, responsive, and made with React + Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1964&auto=format&fit=crop",
    company: "Webify Design Studio",
    years: "2022–Present",
    location: "Accra, Ghana",
    tech: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "E-Commerce Dashboard",
    desc: "Realtime dashboards and analytics for growing businesses.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    company: "MarketHub Systems",
    years: "2021–2022",
    location: "Remote",
    tech: ["Node.js", "TypeScript", "React"],
  },
  {
    title: "Interactive Portfolio",
    desc: "Creative, animated portfolio to stand out online.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    company: "Freelance",
    years: "2023",
    location: "Remote",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Startup Promo Site",
    desc: "Fast and SEO-friendly launches for new startups.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    company: "Innovate Tech",
    years: "2020–2021",
    location: "Lagos, Nigeria",
    tech: ["Next.js", "TypeScript", "Figma"],
  },
  {
    title: "Collaboration App UI",
    desc: "Intuitive UIs for productivity SaaS.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto=format&fit=crop",
    company: "TeamFlow",
    years: "2021",
    location: "Nairobi, Kenya",
    tech: ["React", "Redux", "Sass"],
  },
  {
    title: "Design System",
    desc: "Reusable component-driven atomic design.",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1000&auto=format&fit=crop",
    company: "Brand Studio",
    years: "2023",
    location: "Remote",
    tech: ["Storybook", "TypeScript", "Styled Components"],
  },
];

const Works = () => (
  <div className="bg-background min-h-screen py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-7xl font-bold text-brand-purple mb-6 text-center animate-fade-in">Professional Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {allWorks.map((item, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-[#161616] hover:scale-105 hover:shadow-2xl transition-all animate-fade-in"
            style={{ animationDelay: `${0.2 + i * 0.07}s` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="text-gray-300 text-sm">{item.desc}</p>
              <div className="mt-2 text-xs text-gray-400">
                <p className="font-semibold">{item.company}</p>
                <div className="flex items-center gap-2">
                  <span>{item.location}</span>
                  <span className="text-gray-500">|</span>
                  <span>{item.years}</span>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {item.tech.map((t, j) => (
                    <span key={j} className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center animate-fade-in">
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors"
        >
          Back to Home <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default Works;
