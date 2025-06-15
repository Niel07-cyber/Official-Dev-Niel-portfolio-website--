
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
    <div className="relative overflow-hidden py-8 my-10 lg:my-16 rounded-xl bg-gradient-to-r from-background via-[#191919]/95 to-background shadow-lg border border-gray-800">
      <h2 className="text-center text-xl md:text-2xl font-bold text-white mb-6 tracking-widest opacity-80">
        Programming Languages & Tools
      </h2>
      <div className="flex w-max animate-marquee gap-10 px-4 mx-auto" style={{
        animation: "marquee 22s linear infinite",
      }}>
        {languages.concat(languages).map((lang, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[60px] hover:scale-110 transition-transform"
          >
            <img
              src={lang.url}
              alt={lang.name}
              className="h-10 w-10 md:h-14 md:w-14 object-contain drop-shadow-md"
              draggable={false}
            />
            <span className="text-xs mt-2 text-gray-300 tracking-wide">{lang.name}</span>
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
  );
};

export default ProgrammingLanguages;

