
import React from "react";

const languages = [
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
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  // Feel free to add more!
];

const ProgrammingLanguages = () => {
  return (
    <div className="relative overflow-hidden bg-[#191919] py-6">
      <div
        className="flex w-max animate-marquee gap-8 px-4"
        style={{
          animation: "marquee 20s linear infinite",
        }}
      >
        {languages.concat(languages).map((lang, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[64px] hover:scale-110 transition-transform"
          >
            <img
              src={lang.url}
              alt={lang.name}
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
              draggable={false}
            />
            <span className="text-xs mt-2 text-gray-300 tracking-wide">{lang.name}</span>
          </div>
        ))}
      </div>
      {/* Animations */}
      <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      `}</style>
    </div>
  );
};

export default ProgrammingLanguages;
