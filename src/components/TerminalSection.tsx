import React from "react";

// Experience/company/study entries
const EXPERIENCE = [
  {
    company: "Kanop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Kanop.png",
    role: "Front-end engineer",
    period: "Feb 2025 – Present",
    duration: "5 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: ["React", "GCP", "Framer Motion", "Gitlab CI/CD", "Agentic AI UI/UX"],
    description: "Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform."
  },
  {
    company: "TalentYou.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ios_logo_2.png",
    role: "Full-stack engineer",
    period: "Jul 2024 – Feb 2025",
    duration: "8 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: ["React", "REST", "Docker", "Django", "Redux", "i18n"],
    description: "Rewrote the entire front-end of the TalentYou platform. Containerized services, improved onboarding and UX."
  },
  {
    company: "Escape technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ios_logo_3.png",
    role: "Full-stack engineer",
    period: "Nov 2023 – May 2024",
    duration: "6 months",
    type: "Full-time",
    location: "Paris, France",
    tags: ["R&D", "UI/UX", "Svelte", "GraphQL", "NodeJS", "Figma"],
    description: "Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency."
  },
];

const EDUCATION = [
  {
    school: "ENSEEIHT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ios_uni_1.png",
    degree: "Master's degree in engineering - Computer Science and Applied Mathematics",
    period: "Sep 2020 – May 2023",
  },
  {
    school: "AAU Klagenfurt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/IOS_uni_2.png",
    degree: "Master's degree in computer science - Computer Graphics and Vision",
    period: "Sep 2022 – Mar 2023",
  },
  {
    school: "CPGE Lycée Déodat de Séverac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Windows_Terminal_Logo_2021.svg",  // fallback logo
    degree: "PTSI/PSI* (Bachelor equivalent) - Mathematics and Physics",
    period: "Sep 2018 – Jul 2020"
  }
];

const PROMPT_USER = "root";
const PROMPT_HOST = "bsodium";
const EXE = "bsodium.exe";
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

  // Terminal style matches reference! (shadows, topbar, etc)
  return (
    <section
      className="w-full mx-auto mt-16 mb-20 relative select-none rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.80)] border border-neutral-800"
      // Changed from `max-w-3xl` to `w-full`, so it fills the page content width.
      style={{
        fontFamily: "Consolas, 'Menlo', 'Monaco', 'Fira Mono', 'monospace'",
        background: "#181823"
      }}
    >
      {/* Terminal Top */}
      <div className="flex items-center h-11 px-3 bg-[#22232c] border-b border-[#31333c] justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#e75454] rounded-full" />
          <span className="w-3 h-3 bg-[#dfbb39] rounded-full" />
          <span className="w-3 h-3 bg-[#51cd4a] rounded-full" />
          <span className="ml-4 text-base font-semibold text-gray-200">pwsh in bsodium</span>
        </div>
        <div className="flex gap-2 items-center">
          {/* fake tab UX */}
          <span className="bg-[#191921] text-gray-200 px-3 py-1.5 rounded-t font-semibold text-xs select-none">
            pwsh in bsodium
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
        // Reduced padding on mobile for more width, larger on wider screens
        style={{ minHeight: 520, background: "#181823" }}
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
        {/* Tabs - Experience/Education switch */}
        <div className="flex flex-row gap-1 mb-6 mt-2">
          <button
            className={`px-5 py-1.5 rounded-md text-base font-bold ${mode === "experience"
              ? "bg-white text-[#181823] shadow border border-white"
              : "bg-[#262738] border border-[#31333c] text-gray-300 hover:bg-[#2a2a37] hover:text-white"} transition-all`}
            disabled={mode === "experience"}
            style={{ fontWeight: mode === "experience" ? 800 : 500 }}
            onClick={() => switchMode("experience")}
          >
            experience
          </button>
          <button
            className={`px-5 py-1.5 rounded-md text-base font-bold ${mode === "education"
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
          <div className="flex-1 w-full overflow-y-auto max-h-[365px] pr-1 custom-scrollbar">
            <ul>
              {mode === "experience" && EXPERIENCE.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.company} className="flex items-start gap-5 mb-8 last:mb-0">
                  <img
                    src={itm.logo}
                    alt={itm.company + " logo"}
                    className="w-14 h-14 rounded-md bg-[#191921] shadow border border-[#35373f] object-contain"
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
                        <span key={tag} className="bg-[#282b3e] text-[#8dd7f2] px-2 py-0.5 rounded text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-300 max-w-xl">{itm.description}</div>
                  </div>
                </li>
              ))}
              {mode === "education" && EDUCATION.slice(0, shownCount).map((itm, idx) => (
                <li key={itm.school} className="flex items-start gap-5 mb-8 last:mb-0">
                  <img
                    src={itm.logo}
                    alt={itm.school + " logo"}
                    className="w-14 h-14 rounded-md bg-[#191921] shadow border border-[#35373f] object-contain"
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
