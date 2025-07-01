
import React from "react";

// Experience/company/study entries
const EXPERIENCE = [
  {
    company: "Nightingale - Johannes Gutenberg",
    logo: "https://64.media.tumblr.com/e3e2c90a3eb08e35896db2a1af47c874/4ea2118d8e1fb461-db/s128x128u_c1/fadc0f8c8daae7b8ff2acfeabd4b9c863f3ea23b.pnj",
    role: "Medical AI Developer / Web Developer",
    period: "April 2025 – Aug 2025",
    duration: "4 months",
    type: "Full-time",
    location: "Mainz, Germany",
    tags: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Fast API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      
    ],
    description: "Entraînement et implémentation de modèles de deep learning pour l’analyse de scanners cardiovasculaires, ayant permis une amélioration de 70 % de la précision diagnostique.Développement d’interfaces front-end et de fonctionnalités de gamification pour des services d’IA médicale."
  },
  {
    company: "Dreamosoft Ghana",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHP09O6qCa4CA/company-logo_200_200/company-logo_200_200/0/1701710211486/dreamosoft_logo?e=1756339200&v=beta&t=md025eSFM_IPlfkd1ErIWLfOQqckBagCFiXelu2xL3Y",
    role: "Mobile Developer",
    period: "Dec 2024 – Aug 2025",
    duration: "9 months",
    type: "Contract",
    location: "Remote",
    tags: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "REST", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    description: "Developing intuitive web and mobile applications for education, commerce, and events.Delivering tailored solutions by addressing sector-specific challenge"
  },
  {
    company: "Ministry of Information Systems",
    logo: "https://earlypowerltd.com/wp-content/uploads/vra.jpg",
    role: "Full-stack engineer",
    period: "Aug 2023 – Jan 2024",
    duration: "6 months",
    type: "Full-time",
    location: "Accra, Ghana",
    tags: [
      { name: "Php", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    
    ],
    description: "Collaborated on the development of the Ministry of Information Systems document Tracking System for VRA, achieving a 60% reduction in physical storage and a 70% transition to cloud storage. Played a key role in designing a chatbot system, enabling 24 2hour MIS access for stakeholders via the VRA website"
  },
   {
    company: "Republic Bank Ghana",
    logo: "https://th.bing.com/th/id/OIP.rTg4oEzMFmppWSPW5jY7rAHaHa?rs=1&pid=ImgDetMain",
    role: "Quality Assurance Trainee",
    period: "Sept 2022 – Dec 2022",
    duration: "4 months",
    type: "Hybrid",
    location: "Accra Ministries, Ghana",
    tags: [
      { name: "Jira", logo: "https://th.bing.com/th/id/OIP.6A7Spk2Wk_PPecWYEIWJCgHaHw?rs=1&pid=ImgDetMain" },
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Testrail", logo: "https://avatars.githubusercontent.com/u/3909953?s=280&v=4" },
      
      
    ],
    description: "Ensured data integrity using JIRA for defect tracking and TestRail for test management, improving software reliability by resolving complex bugs."
  },
];

const EDUCATION = [
  {
    school: "Junia ISEN Grande Ecole d'Ingénieurs",
    logo: "https://th.bing.com/th/id/OIP.biqz_fQwJZtHuuokL1vyvQHaHa?rs=1&pid=ImgDetMain",
    degree: "Master's degree - Software Engineering",
    period: "Sep 2024 – Dec 2026",
  },
  {
    school: "Kwame Nkrumah University of Science and Technology",
    logo: "https://th.bing.com/th/id/OIP.B9DNtiqcOhHmA6_AEVOIxAAAAA?rs=1&pid=ImgDetMain",
    degree: "Bachelor's degree - Computer Science",
    period: "Jan 2022 – Aug 2024",
  },
  // {
  //   school: "Presbyterian Boys Senior High School",
  //   logo: "https://dashboard.odadee.net/uploads/2015/10/odadeelogo%20(2).png",
  //   degree: "WASSCE* (Bachelor equivalent) - General Science",
  //   period: "Sep 2018 – Oct 2021"
  // }
];

const PROMPT_USER = "root";
const PROMPT_HOST = "devniel";
const EXE = "devniel.exe";
const TYPING_SPEED = 32; // ms per character
const OUTPUT_DELAY = 370; // ms before writing first output
const ENTRY_DELAY = 160; // delay (ms) between each item output

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

// Typed-out text animation
function useTypeWriter(text: string, speed: number, deps: React.DependencyList) {
  const [output, setOutput] = React.useState("");
  React.useEffect(() => {
    let cancelled = false;
    setOutput("");
    async function run() {
      let cur = "";
      for (let i = 0; i < text.length; ++i) {
        if (cancelled) break;
        cur += text[i];
        setOutput(cur);
        await sleep(speed);
      }
    }
    run();
    return () => { cancelled = true; };
    // eslint-disable-next-line
  }, deps);
  return output;
}

type Mode = "experience" | "education";
const CommandMap = {
  experience: `${EXE} --experience`,
  education: `${EXE} --education`
};

const TerminalSection = () => {
  const [mode, setMode] = React.useState<Mode>("experience");
  const [phase, setPhase] = React.useState<"idle" | "typing-command" | "writing-output">("typing-command");
  const [shownCount, setShownCount] = React.useState(0);
  const [animeKey, setAnimeKey] = React.useState(0);

  // Animate typed command (prompt stays)
  const promptPart = useTypeWriter(` ${CommandMap[mode]}`, TYPING_SPEED, [mode, animeKey]);
  
  // When the component mounts, start the initial animation for experience
  React.useEffect(() => {
    // Start the initial animation immediately on mount
    let cancelled = false;
    setPhase("typing-command");
    setShownCount(0);
    async function run() {
      await sleep(CommandMap[mode].length * TYPING_SPEED + OUTPUT_DELAY);
      setPhase("writing-output");
      const items = mode === "experience" ? EXPERIENCE : EDUCATION;
      for (let i = 1; i <= items.length; ++i) {
        if (cancelled) break;
        setShownCount(i);
        await sleep(ENTRY_DELAY);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [mode, animeKey]);

  // Tab switch with erasing output (like closing and rerunning command)
  function switchMode(newMode: Mode) {
    if (newMode === mode) return;
    setPhase("idle");
    setTimeout(() => {
      setMode(newMode);
      setAnimeKey((k) => k + 1); // re-run animation
    }, 220); // add a short blank for realism
  }

  return (
    <section
      className="w-full mx-auto mt-8 sm:mt-16 mb-12 sm:mb-20 relative select-none rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.80)] border border-neutral-800"
      style={{
        fontFamily: "Consolas, 'Menlo', 'Monaco', 'Fira Mono', 'monospace'",
        background: "var(--terminal-bg)"
      }}
    >
      {/* Terminal Top */}
      <div className="flex items-center h-9 sm:h-11 px-2 sm:px-3 bg-[#22232c] border-b border-[#31333c] justify-between">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#e75454] rounded-full" />
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#dfbb39] rounded-full" />
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#51cd4a] rounded-full" />
          <span className="ml-2 sm:ml-4 text-sm sm:text-base font-semibold text-gray-200 hidden sm:block">pwsh in devniel</span>
        </div>
        <div className="flex gap-1 sm:gap-2 items-center">
          <span className="bg-[#191921] text-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-t font-semibold text-xs select-none">
            pwsh in devniel
          </span>
          <button
            className="ml-1 sm:ml-2 w-6 h-6 sm:w-7 sm:h-7 text-[#63646b] text-lg sm:text-xl flex items-center justify-center rounded hover:bg-[#323235]"
            tabIndex={-1}
            title="New Tab"
            aria-label="New tab"
            style={{ pointerEvents: "none" }}
          >+</button>
        </div>
      </div>
      
      {/* Terminal inner */}
      <div
        className="flex flex-col px-3 sm:px-4 md:px-10 py-4 sm:py-7 md:py-12 overflow-hidden"
        style={{ minHeight: "400px", background: "var(--terminal-bg)" }}
      >
        <div className="text-[#c7c6c6] text-xs sm:text-[13px] mb-1">Powershell 7.3.4</div>
        <div className="text-[#9d9d9f] text-xs mb-3 sm:mb-5">Loading personal and system profiles took 281ms.</div>
        <div className="flex flex-row items-center text-sm sm:text-lg md:text-xl font-semibold mb-2 whitespace-pre overflow-x-auto">
          <span className="text-brand-purple font-bold">{PROMPT_USER}</span>
          <span className="text-white">@</span>
          <span className="text-[#01c2c2]">{PROMPT_HOST}:</span>
          <span className="text-white">~$</span>
          {phase === "typing-command" &&
            <span className="ml-2 min-w-0" style={{ fontWeight: 500 }}>{promptPart}<span className="animate-pulse">|</span></span>
          }
          {phase !== "typing-command" &&
            <span className="ml-2 min-w-0" style={{ fontWeight: 500 }}> {CommandMap[mode]}<span className="animate-pulse">|</span></span>
          }
        </div>
        
        {/* Tabs - Experience/Education switch with more spacing */}
        <div className="flex flex-row gap-2 sm:gap-4 mb-4 sm:mb-8 mt-2 sm:mt-4">
          <button
            className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-bold transition-all duration-300 ${mode === "experience"
              ? "bg-white text-[#181823] shadow border border-white"
              : "bg-[#262738] border border-[#31333c] text-gray-300 hover:bg-[#2a2a37] hover:text-white"} transition-all`}
            disabled={mode === "experience"}
            style={{ fontWeight: mode === "experience" ? 800 : 500 }}
            onClick={() => switchMode("experience")}
          >
            experience
          </button>
          <button
            className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-bold transition-all duration-300 ${mode === "education"
              ? "bg-white text-[#181823] shadow border border-white"
              : "bg-[#262738] border border-[#31333c] text-gray-300 hover:bg-[#2a2a37] hover:text-white"} transition-all`}
            disabled={mode === "education"}
            style={{ fontWeight: mode === "education" ? 800 : 500 }}
            onClick={() => switchMode("education")}
          >
            education
          </button>
        </div>
        
        {/* Blank/clear phase for tab switch (erase previous output) */}
        {phase === "idle" && <div className="h-32 sm:h-56" />}
        
        {/* Terminal main output: experiences or education, reveal one-by-one */}
        {phase !== "idle" &&
          <div className="flex-1 w-full overflow-y-auto max-h-[300px] sm:max-h-[365px] pr-1 custom-scrollbar relative">
            {/* Vertical connecting line */}
            {shownCount > 1 && (
              <div 
                className="absolute left-5 sm:left-7 top-12 sm:top-16 w-px bg-[#31333c] transition-all duration-500 ease-out" 
                style={{height: `${(shownCount - 1) * (window.innerWidth < 640 ? 120 : 140)}px`}}
              ></div>
            )}
            <ul>
              {mode === "experience" && EXPERIENCE.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.company} className={`flex items-start gap-3 sm:gap-5 mb-6 sm:mb-8 last:mb-0 relative transition-all duration-500 ease-out transform ${idx < shownCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 160}ms`}}>
                  {/* Connection dot */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#43e09f] rounded-full border-2 border-[#181823] z-10 transition-all duration-300"></div>
                  )}
                  <img
                    src={itm.logo}
                    alt={itm.company + " logo"}
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-md bg-[#191921] shadow border border-[#35373f] object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-0.5">
                      <span className="font-bold text-base sm:text-[1.23rem] text-white">{itm.company}</span>
                      <span className="text-gray-300 text-xs">{itm.period} <span className="mx-1">({itm.duration})</span></span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#43e09f] mb-0.5">{itm.role}
                      <span className="text-xs text-gray-400 block sm:inline sm:ml-3">{itm.type} – {itm.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 mb-1.5">
                      {itm.tags.map(tag => (
                        <div key={tag.name} className="flex items-center gap-1 bg-[#282b3e] text-[#8dd7f2] px-1.5 sm:px-2 py-0.5 rounded text-xs font-medium">
                          <img src={tag.logo} alt={tag.name} className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain" />
                          <span>{tag.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-300 max-w-xl">{itm.description}</div>
                  </div>
                </li>
              ))}
              {mode === "education" && EDUCATION.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.school} className={`flex items-start gap-3 sm:gap-5 mb-6 sm:mb-8 last:mb-0 relative transition-all duration-500 ease-out transform ${idx < shownCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 160}ms`}}>
                  {/* Connection dot */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-4 sm:top-6 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#5dc5d8] rounded-full border-2 border-[#181823] z-10 transition-all duration-300"></div>
                  )}
                  <img
                    src={itm.logo}
                    alt={itm.school + " logo"}
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-md bg-[#191921] shadow border border-[#35373f] object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-0.5">
                      <span className="font-bold text-base sm:text-[1.15rem] text-white">{itm.school}</span>
                      <span className="text-gray-300 text-xs">{itm.period}</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#5dc5d8] mb-0.5">{itm.degree}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
      <style>{`
        :root {
          --terminal-bg: #181823;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 0.5em;
          background: #22232c;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #31333c;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default TerminalSection;
