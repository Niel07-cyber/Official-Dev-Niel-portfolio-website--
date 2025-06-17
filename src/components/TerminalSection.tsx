
import React from "react";

// Experience/company/study entries
const EXPERIENCE = [
  {
    company: "Kanop",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=64&h=64&fit=crop&crop=center",
    role: "Front-end engineer",
    period: "Feb 2025 – Present",
    duration: "5 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Framer Motion", logo: "https://www.framer.com/images/favicons/favicon.svg" },
      { name: "Gitlab CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Agentic AI UI/UX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    description: "Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform."
  },
  {
    company: "TalentYou.ai",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop&crop=center",
    role: "Full-stack engineer",
    period: "Jul 2024 – Feb 2025",
    duration: "8 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "REST", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "i18n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    description: "Rewrote the entire front-end of the TalentYou platform. Containerized services, improved onboarding and UX."
  },
  {
    company: "Escape technologies",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center",
    role: "Full-stack engineer",
    period: "Nov 2023 – May 2024",
    duration: "6 months",
    type: "Full-time",
    location: "Paris, France",
    tags: [
      { name: "R&D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "UI/UX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Svelte", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    description: "Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency."
  },
];

const EDUCATION = [
  {
    school: "ENSEEIHT",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=64&h=64&fit=crop&crop=center",
    degree: "Master's degree in engineering - Computer Science and Applied Mathematics",
    period: "Sep 2020 – May 2023",
  },
  {
    school: "AAU Klagenfurt",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=64&h=64&fit=crop&crop=center",
    degree: "Master's degree in computer science - Computer Graphics and Vision",
    period: "Sep 2022 – Mar 2023",
  },
  {
    school: "CPGE Lycée Déodat de Séverac",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=64&h=64&fit=crop&crop=center",
    degree: "PTSI/PSI* (Bachelor equivalent) - Mathematics and Physics",
    period: "Sep 2018 – Jul 2020"
  }
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
      className="w-full mx-auto mt-16 mb-20 relative select-none rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.80)] border border-neutral-800"
      style={{
        fontFamily: "Consolas, 'Menlo', 'Monaco', 'Fira Mono', 'monospace'",
        background: "var(--terminal-bg)"
      }}
    >
      {/* Terminal Top */}
      <div className="flex items-center h-11 px-3 bg-[#22232c] border-b border-[#31333c] justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#e75454] rounded-full" />
          <span className="w-3 h-3 bg-[#dfbb39] rounded-full" />
          <span className="w-3 h-3 bg-[#51cd4a] rounded-full" />
          <span className="ml-4 text-base font-semibold text-gray-200">pwsh in devniel</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-[#191921] text-gray-200 px-3 py-1.5 rounded-t font-semibold text-xs select-none">
            pwsh in devniel
          </span>
          <button
            className="ml-2 w-7 h-7 text-[#63646b] text-xl flex items-center justify-center rounded hover:bg-[#323235]"
            tabIndex={-1}
            title="New Tab"
            aria-label="New tab"
            style={{ pointerEvents: "none" }}
          >+</button>
        </div>
      </div>
      
      {/* Terminal inner */}
      <div
        className="flex flex-col px-4 md:px-10 py-7 md:py-12 overflow-hidden"
        style={{ minHeight: 520, background: "var(--terminal-bg)" }}
      >
        <div className="text-[#c7c6c6] text-[13px] mb-1">Powershell 7.3.4</div>
        <div className="text-[#9d9d9f] text-xs mb-5">Loading personal and system profiles took 281ms.</div>
        <div className="flex flex-row items-center text-lg md:text-xl font-semibold mb-2 whitespace-pre">
          <span className="text-brand-purple font-bold">{PROMPT_USER}</span>
          <span className="text-white">@</span>
          <span className="text-[#01c2c2]">{PROMPT_HOST}:</span>
          <span className="text-white">~$</span>
          {phase === "typing-command" &&
            <span className="ml-2" style={{ fontWeight: 500 }}>{promptPart}<span className="animate-pulse">|</span></span>
          }
          {phase !== "typing-command" &&
            <span className="ml-2" style={{ fontWeight: 500 }}> {CommandMap[mode]}<span className="animate-pulse">|</span></span>
          }
        </div>
        
        {/* Tabs - Experience/Education switch with more spacing */}
        <div className="flex flex-row gap-4 mb-8 mt-4">
          <button
            className={`px-6 py-2 rounded-md text-base font-bold transition-all duration-300 ${mode === "experience"
              ? "bg-white text-[#181823] shadow border border-white"
              : "bg-[#262738] border border-[#31333c] text-gray-300 hover:bg-[#2a2a37] hover:text-white"} transition-all`}
            disabled={mode === "experience"}
            style={{ fontWeight: mode === "experience" ? 800 : 500 }}
            onClick={() => switchMode("experience")}
          >
            experience
          </button>
          <button
            className={`px-6 py-2 rounded-md text-base font-bold transition-all duration-300 ${mode === "education"
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
        {phase === "idle" && <div className="h-56" />}
        
        {/* Terminal main output: experiences or education, reveal one-by-one */}
        {phase !== "idle" &&
          <div className="flex-1 w-full overflow-y-auto max-h-[365px] pr-1 custom-scrollbar relative">
            {/* Vertical connecting line */}
            {shownCount > 1 && (
              <div 
                className="absolute left-7 top-16 w-px bg-[#31333c] transition-all duration-500 ease-out" 
                style={{height: `${(shownCount - 1) * 140}px`}}
              ></div>
            )}
            <ul>
              {mode === "experience" && EXPERIENCE.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.company} className={`flex items-start gap-5 mb-8 last:mb-0 relative transition-all duration-500 ease-out transform ${idx < shownCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 160}ms`}}>
                  {/* Connection dot */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-6 w-3 h-3 bg-[#43e09f] rounded-full border-2 border-[#181823] z-10 transition-all duration-300"></div>
                  )}
                  <img
                    src={itm.logo}
                    alt={itm.company + " logo"}
                    className="w-14 h-14 rounded-md bg-[#191921] shadow border border-[#35373f] object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-[1.23rem] text-white">{itm.company}</span>
                      <span className="text-gray-300 text-xs">{itm.period} <span className="mx-1">({itm.duration})</span></span>
                    </div>
                    <div className="text-base font-bold text-[#43e09f] mb-0.5">{itm.role}
                      <span className="text-xs text-gray-400 ml-3">{itm.type} – {itm.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1 mb-1.5">
                      {itm.tags.map(tag => (
                        <div key={tag.name} className="flex items-center gap-1 bg-[#282b3e] text-[#8dd7f2] px-2 py-0.5 rounded text-xs font-medium">
                          <img src={tag.logo} alt={tag.name} className="w-3 h-3 object-contain" />
                          <span>{tag.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-300 max-w-xl">{itm.description}</div>
                  </div>
                </li>
              ))}
              {mode === "education" && EDUCATION.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.school} className={`flex items-start gap-5 mb-8 last:mb-0 relative transition-all duration-500 ease-out transform ${idx < shownCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 160}ms`}}>
                  {/* Connection dot */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-6 w-3 h-3 bg-[#5dc5d8] rounded-full border-2 border-[#181823] z-10 transition-all duration-300"></div>
                  )}
                  <img
                    src={itm.logo}
                    alt={itm.school + " logo"}
                    className="w-14 h-14 rounded-md bg-[#191921] shadow border border-[#35373f] object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-[1.15rem] text-white">{itm.school}</span>
                      <span className="text-gray-300 text-xs">{itm.period}</span>
                    </div>
                    <div className="text-base font-bold text-[#5dc5d8] mb-0.5">{itm.degree}</div>
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
