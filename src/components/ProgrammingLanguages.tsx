
import React from "react";

// All SVGs from devicon/devicon, simple-icons, or other reputable sources.
const languages = [
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML5",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TailwindCSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", // common for SQL
  },
  {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

// To make the marquee seamless, the content needs to be repeated several times.
// We'll triple the icons array so that even on wide screens, the scroll never ends and there is no gap.
const marqueeIcons = [];
for (let i = 0; i < 5; i++) marqueeIcons.push(...languages);

const ProgrammingLanguages = () => {
  return (
    <div className="relative overflow-hidden py-8 md:py-12 mb-0 mt-0 rounded-none">
      {/* Blending: top fade overlay (kept thinner and subtle, optional) */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-4 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,25,25,1) 0%, rgba(25,25,25,0.75) 65%, rgba(25,25,25,0) 100%)",
        }}
      />
      <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-6 tracking-widest opacity-80">
        Programming Languages &amp; Tools
      </h2>
      <div className="relative w-full">
        <div
          className="flex w-max animate-[marquee_40s_linear_infinite] gap-12 px-4 mx-auto"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {marqueeIcons.map((lang, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[90px] hover:scale-110 transition-transform"
            >
              <img
                src={lang.url}
                alt={lang.name}
                className="h-10 w-10 md:h-14 md:w-14 object-contain drop-shadow-md"
                draggable={false}
              />
              <span className="text-xs mt-2 text-gray-300 tracking-wide text-center whitespace-nowrap">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}</style>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;

