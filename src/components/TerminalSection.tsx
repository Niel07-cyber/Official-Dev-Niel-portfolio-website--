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
      { name: "React", icon: "⚛️" },
      { name: "GCP", icon: "☁️" },
      { name: "Framer Motion", icon: "🎭" },
      { name: "Gitlab CI/CD", icon: "🔄" },
      { name: "Agentic AI UI/UX", icon: "🤖" }
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
      { name: "React", icon: "⚛️" },
      { name: "REST", icon: "🌐" },
      { name: "Docker", icon: "🐳" },
      { name: "Django", icon: "🐍" },
      { name: "Redux", icon: "🔄" },
      { name: "i18n", icon: "🌍" }
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
      { name: "R&D", icon: "🔬" },
      { name: "UI/UX", icon: "🎨" },
      { name: "Svelte", icon: "🧡" },
      { name: "GraphQL", icon: "📊" },
      { name: "NodeJS", icon: "💚" },
      { name: "Figma", icon: "🎨" }
    ],
    description: "Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency."
  },
];

const EDUCATION = [
  {
    school: "ENSEEIHT",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=64&h=64&fit=crop&crop=center",
    degree: "Master's degree in engineering - Computer Science and Applied Mathematics",
    period: "Sep 2020 – May 2023",
  },
  {
    school: "AAU Klagenfurt",
    logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=64&h=64&fit=crop&crop=center",
    degree: "Master's degree in computer science - Computer Graphics and Vision",
    period: "Sep 2022 – Mar 2023",
  },
  {
    school: "CPGE Lycée Déodat de Séverac",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=64&h=64&fit=crop&crop=center",
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
  
  // When the command finishes typing, print output line by line
  React.useEffect(() => {
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
    // eslint-disable-next-line
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
      className="w-full mx-auto mt-16 mb-20 relative select-none rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.80)] border border-neutral-800 dark:border-neutral-800 border-gray-200"
      style={{
        fontFamily: "Consolas, 'Menlo', 'Monaco', 'Fira Mono', 'monospace'",
        background: "var(--terminal-bg)"
      }}
    >
      {/* Terminal Top */}
      <div className="flex items-center h-11 px-3 bg-[#22232c] dark:bg-[#22232c] bg-gray-100 border-b border-[#31333c] dark:border-[#31333c] border-gray-300 justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#e75454] rounded-full" />
          <span className="w-3 h-3 bg-[#dfbb39] rounded-full" />
          <span className="w-3 h-3 bg-[#51cd4a] rounded-full" />
          <span className="ml-4 text-base font-semibold text-gray-200 dark:text-gray-200 text-gray-700">pwsh in devniel</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-[#191921] dark:bg-[#191921] bg-white text-gray-200 dark:text-gray-200 text-gray-700 px-3 py-1.5 rounded-t font-semibold text-xs select-none">
            pwsh in devniel
          </span>
          <button
            className="ml-2 w-7 h-7 text-[#63646b] dark:text-[#63646b] text-gray-500 text-xl flex items-center justify-center rounded hover:bg-[#323235] dark:hover:bg-[#323235] hover:bg-gray-200"
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
        <div className="text-[#c7c6c6] dark:text-[#c7c6c6] text-gray-600 text-[13px] mb-1">Powershell 7.3.4</div>
        <div className="text-[#9d9d9f] dark:text-[#9d9d9f] text-gray-500 text-xs mb-5">Loading personal and system profiles took 281ms.</div>
        <div className="flex flex-row items-center text-lg md:text-xl font-semibold mb-2 whitespace-pre">
          <span className="text-brand-purple font-bold">{PROMPT_USER}</span>
          <span className="text-white dark:text-white text-gray-800">@</span>
          <span className="text-[#01c2c2]">{PROMPT_HOST}:</span>
          <span className="text-white dark:text-white text-gray-800">~$</span>
          {phase === "typing-command" &&
            <span className="ml-2" style={{ fontWeight: 500 }}>{promptPart}<span className="animate-pulse">|</span></span>
          }
          {phase !== "typing-command" &&
            <span className="ml-2" style={{ fontWeight: 500 }}> {CommandMap[mode]}<span className="animate-pulse">|</span></span>
          }
        </div>
        
        {/* Tabs - Experience/Education switch */}
        <div className="flex flex-row gap-1 mb-6 mt-2">
          <button
            className={`px-5 py-1.5 rounded-md text-base font-bold transition-all duration-300 ${mode === "experience"
              ? "bg-white text-[#181823] shadow border border-white"
              : "bg-[#262738] dark:bg-[#262738] bg-gray-200 border border-[#31333c] dark:border-[#31333c] border-gray-300 text-gray-300 dark:text-gray-300 text-gray-700 hover:bg-[#2a2a37] dark:hover:bg-[#2a2a37] hover:bg-gray-300 hover:text-white dark:hover:text-white hover:text-gray-800"} transition-all`}
            disabled={mode === "experience"}
            style={{ fontWeight: mode === "experience" ? 800 : 500 }}
            onClick={() => switchMode("experience")}
          >
            experience
          </button>
          <button
            className={`px-5 py-1.5 rounded-md text-base font-bold transition-all duration-300 ${mode === "education"
              ? "bg-white text-[#181823] shadow border border-white"
              : "bg-[#262738] dark:bg-[#262738] bg-gray-200 border border-[#31333c] dark:border-[#31333c] border-gray-300 text-gray-300 dark:text-gray-300 text-gray-700 hover:bg-[#2a2a37] dark:hover:bg-[#2a2a37] hover:bg-gray-300 hover:text-white dark:hover:text-white hover:text-gray-800"} transition-all`}
            disabled={mode === "education"}
            style={{ fontWeight: mode === "education" ? 800 : 500 }}
            onClick={() => switchMode("education")}
          >
            education
          </button>
        </div>
        
        {/* Blank/clear phase for tab switch */}
        {phase === "idle" && <div className="h-56" />}
        
        {/* Terminal main output */}
        {phase !== "idle" &&
          <div className="flex-1 w-full overflow-y-auto max-h-[365px] pr-1 custom-scrollbar relative">
            {/* Vertical connecting line */}
            {shownCount > 1 && (
              <div 
                className="absolute left-7 top-16 w-px bg-[#31333c] dark:bg-[#31333c] bg-gray-300 transition-all duration-500 ease-out" 
                style={{height: `${(shownCount - 1) * 140}px`}}
              ></div>
            )}
            <ul>
              {mode === "experience" && EXPERIENCE.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.company} className={`flex items-start gap-5 mb-8 last:mb-0 relative transition-all duration-500 ease-out transform ${idx < shownCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 160}ms`}}>
                  {/* Connection dot */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-6 w-3 h-3 bg-[#43e09f] rounded-full border-2 border-[#181823] dark:border-[#181823] border-white z-10 transition-all duration-300"></div>
                  )}
                  <img
                    src={itm.logo}
                    alt={itm.company + " logo"}
                    className="w-14 h-14 rounded-md bg-[#191921] dark:bg-[#191921] bg-white shadow border border-[#35373f] dark:border-[#35373f] border-gray-200 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-[1.23rem] text-white dark:text-white text-gray-800">{itm.company}</span>
                      <span className="text-gray-300 dark:text-gray-300 text-gray-600 text-xs">{itm.period} <span className="mx-1">({itm.duration})</span></span>
                    </div>
                    <div className="text-base font-bold text-[#43e09f] mb-0.5">{itm.role}
                      <span className="text-xs text-gray-400 dark:text-gray-400 text-gray-500 ml-3">{itm.type} – {itm.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1 mb-1.5">
                      {itm.tags.map(tag => (
                        <span key={tag.name} className="bg-[#282b3e] dark:bg-[#282b3e] bg-blue-100 text-[#8dd7f2] dark:text-[#8dd7f2] text-blue-800 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">
                          <span>{tag.icon}</span>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-300 dark:text-gray-300 text-gray-600 max-w-xl">{itm.description}</div>
                  </div>
                </li>
              ))}
              {mode === "education" && EDUCATION.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.school} className={`flex items-start gap-5 mb-8 last:mb-0 relative transition-all duration-500 ease-out transform ${idx < shownCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: `${idx * 160}ms`}}>
                  {/* Connection dot */}
                  {idx > 0 && (
                    <div className="absolute left-0 top-6 w-3 h-3 bg-[#5dc5d8] rounded-full border-2 border-[#181823] dark:border-[#181823] border-white z-10 transition-all duration-300"></div>
                  )}
                  <img
                    src={itm.logo}
                    alt={itm.school + " logo"}
                    className="w-14 h-14 rounded-md bg-[#191921] dark:bg-[#191921] bg-white shadow border border-[#35373f] dark:border-[#35373f] border-gray-200 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-[1.15rem] text-white dark:text-white text-gray-800">{itm.school}</span>
                      <span className="text-gray-300 dark:text-gray-300 text-gray-600 text-xs">{itm.period}</span>
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
        
        .light {
          --terminal-bg: #f8f9fa;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 0.5em;
          background: #22232c;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #31333c;
          border-radius: 4px;
        }
        
        .light .custom-scrollbar::-webkit-scrollbar {
          background: #e5e7eb;
        }
        .light .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca3af;
        }
      `}</style>
    </section>
  );
};

export default TerminalSection;
