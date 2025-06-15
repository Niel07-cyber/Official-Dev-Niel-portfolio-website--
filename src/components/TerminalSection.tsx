
import React from "react";

// Utility for sleep/delay
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Images for logos (as examples - you can adjust the URLs as needed)
const experience = [
  {
    company: "Kanop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Kanop.png", // Replace with real logo
    role: "Front-end engineer",
    period: "Feb 2025 – Present",
    duration: "5 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: ["React", "GCP", "Framer Motion", "Gitlab CI/CD", "Agentic AI UI/UX"],
    description: "Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform.",
  },
  {
    company: "TalentYou.ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ios_logo_2.png", // Replace with real logo
    role: "Full-stack engineer",
    period: "Jul 2024 – Feb 2025",
    duration: "8 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: ["React", "REST", "Docker", "Django", "Redux", "i18n"],
    description: "Rewrote the entire front-end of the TalentYou platform. Containerized services, improved onboarding and UX.",
  },
  {
    company: "Escape technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Ios_logo_3.png", // Replace with real logo
    role: "Full-stack engineer",
    period: "Nov 2023 – May 2024",
    duration: "6 months",
    type: "Full-time",
    location: "Paris, France",
    tags: ["R&D", "UI/UX", "Svelte", "GraphQL", "NodeJS", "Figma"],
    description:
      "Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency.",
  },
];

const education = [
  {
    school: "ENSEEIHT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ios_uni_1.png", // Replace with real logo
    degree: "Master's degree in engineering - Computer Science and Applied Mathematics",
    period: "Sep 2020 – May 2023",
  },
  {
    school: "AAU Klagenfurt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/IOS_uni_2.png", // Replace with real logo
    degree: "Master's degree in computer science - Computer Graphics and Vision",
    period: "Sep 2022 – Mar 2023",
  },
];

// Constants for terminal size and style
const TERMINAL_CLASS =
  "w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden" +
  " bg-[#11131a] border border-[#242532] my-16 font-mono select-none flex flex-col" +
  " min-h-[440px] md:min-h-[540px] lg:min-h-[620px] md:text-[17px] text-[15px] relative";

// Typing and display timing (ms)
const TYPING_PROMPT = 22;
const TYPING_FLAG = 50;
const ITEM_DELAY = 320;

type Mode = "experience" | "education";

// TypeWriter effect (string → revealed substring as it types)
function useTypeWriter(fullText: string, speed: number, resetTrigger: number) {
  const [display, setDisplay] = React.useState("");
  React.useEffect(() => {
    setDisplay("");
    let cancelled = false;
    async function run() {
      let acc = "";
      for (let i = 0; i < fullText.length; ++i) {
        if (cancelled) break;
        acc += fullText[i];
        setDisplay(acc);
        await sleep(speed);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line
  }, [fullText, resetTrigger]);
  return display;
}

const TerminalSection = () => {
  const [mode, setMode] = React.useState<Mode>("experience");
  // Triggers for rerunning animation on tab switch
  const [animationKey, setAnimationKey] = React.useState(0);
  // For typing/erasing sequence animation
  const [shownCount, setShownCount] = React.useState(0);
  // For content: either experiences or education cards
  const items = mode === "experience" ? experience : education;

  // Typing effect for prompt and command
  const [phase, setPhase] = React.useState<"typing-prompt"|"typing-flag"|"showing-items">("typing-prompt");

  // For prompt animate: simulate terminal writing
  const promptText = "root@bsodium:~$ ";
  const flagText = mode === "experience" ? "bsodium.exe --experience" : "bsodium.exe --education";
  const displayPrompt = useTypeWriter(promptText, TYPING_PROMPT, animationKey);
  const displayFlag = useTypeWriter(flagText, TYPING_FLAG, animationKey + 200);

  // After prompt and flag are written, reveal entries one by one
  React.useEffect(() => {
    let cancelled = false;
    async function animate() {
      setShownCount(0);
      setPhase("typing-prompt");
      // Wait for prompt animation
      await sleep(promptText.length * TYPING_PROMPT + 40);
      setPhase("typing-flag");
      // Wait for flag
      await sleep(flagText.length * TYPING_FLAG + 200);
      setPhase("showing-items");
      // Sequentially show items
      for (let i = 1; i <= items.length; ++i) {
        if (cancelled) break;
        setShownCount(i);
        await sleep(ITEM_DELAY);
      }
    }
    animate();
    return () => { cancelled = true; };
    // eslint-disable-next-line
  }, [mode, animationKey]);

  // Tab switch logic with erasing animation
  const handleTabChange = (newMode: Mode) => {
    if (newMode === mode) return;
    setPhase("typing-prompt");
    setShownCount(0);
    setTimeout(() => {
      setMode(newMode);
      setAnimationKey(prev => prev + 1);
    }, 400); // Brief "erase" delay
  };

  return (
    <section className={TERMINAL_CLASS}>
      {/* Terminal Topbar */}
      <div className="flex items-center h-10 bg-[#191b24] border-b border-[#232532] px-4 py-1 text-sm font-semibold text-gray-300">
        <span className="w-40 truncate text-xs xs:text-base md:text-base">pwsh in bsodium</span>
        <div className="ml-auto flex gap-2">
          <span className="block w-3 h-3 bg-[#ef5a5a] rounded-full" />
          <span className="block w-3 h-3 bg-[#f7bb3e] rounded-full" />
          <span className="block w-3 h-3 bg-[#60dc60] rounded-full" />
        </div>
      </div>
      {/* Terminal Body */}
      <div
        className="relative flex-1 flex flex-col px-5 py-7 md:py-12 overflow-hidden h-full"
        style={{ minHeight: 360 }}
      >
        {/* Initial powershell loading text */}
        <div className="text-[13px] xs:text-sm text-muted-foreground mb-2">
          Powershell 7.3.4
        </div>
        <div className="text-xs text-muted-foreground mb-5">Loading personal and system profiles took 281ms.</div>
        {/* Command prompt: animate writing */}
        <div className="flex items-center gap-2 text-base md:text-lg font-semibold font-mono whitespace-pre">
          <span className="font-bold text-[#37a7ff]">root</span>
          <span className="text-white">@</span>
          <span className="text-[#e2b714]">bsodium:~$</span>
          <span className="text-white">
            {displayPrompt}
            {phase === "typing-flag" || phase === "showing-items" ? (
              <span className="">{displayFlag}</span>
            ) : null}
            <span className="animate-pulse text-brand-purple">|</span>
          </span>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 my-5">
          <button
            onClick={() => handleTabChange("experience")}
            disabled={mode === "experience"}
            className={`px-4 py-1 rounded-full text-sm font-bold border outline-none transition mt-1
              ${mode === "experience"
                ? "bg-white text-[#191b24] border-white shadow"
                : "bg-[#232532] text-gray-300 border-[#242532] hover:bg-[#232538] hover:text-white"
              }
            `}
          >
            experience
          </button>
          <button
            onClick={() => handleTabChange("education")}
            disabled={mode === "education"}
            className={`px-4 py-1 rounded-full text-sm font-bold border outline-none transition mt-1
              ${mode === "education"
                ? "bg-white text-[#191b24] border-white shadow"
                : "bg-[#232532] text-gray-300 border-[#242532] hover:bg-[#232538] hover:text-white"
              }
            `}
          >
            education
          </button>
        </div>
        {/* Entries (scrollable if overflow) */}
        <div className="mt-1 flex-1 overflow-y-auto pr-1" style={{ maxHeight: 340 }}>
          {phase === "showing-items" && (
            <ul>
              {(items as any[]).slice(0, shownCount).map((itm, idx) => (
                <li
                  key={idx}
                  className="relative mb-8 last:mb-0 bg-transparent animate-fade-in"
                  style={{
                    animationDelay: `${0.1 + idx * 0.12}s`,
                    animationDuration: `0.8s`,
                  }}
                >
                  {/* Experience entry */}
                  {"company" in itm && (
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <img
                          src={itm.logo}
                          alt={itm.company + " logo"}
                          className="w-12 h-12 rounded-full bg-[#232532] border border-gray-700 shadow mr-2"
                        />
                        <span className="font-bold text-[1.3rem] text-brand-purple">{itm.company}</span>
                        <span className="text-gray-400 text-xs">{itm.period} <span className="mx-1">({itm.duration})</span></span>
                      </div>
                      <div className="text-base font-bold text-white mb-0.5">{itm.role} <span className="text-xs text-gray-400 ml-2">{itm.type} – {itm.location}</span></div>
                      <div className="flex flex-wrap gap-2 mt-1 mb-1">
                        {itm.tags.map(tag => (
                          <span key={tag} className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      <div className="text-xs text-gray-300">{itm.description}</div>
                    </div>
                  )}
                  {/* Education entry */}
                  {"school" in itm && (
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={itm.logo}
                          alt={itm.school + " logo"}
                          className="w-12 h-12 rounded-full bg-[#232532] border border-gray-700 shadow mr-2"
                        />
                        <span className="font-bold text-[1.2rem] text-brand-purple">{itm.school}</span>
                        <span className="text-gray-400 text-xs">{itm.period}</span>
                      </div>
                      <div className="text-sm text-white font-bold">{itm.degree}</div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Terminal 'clear/erase' animation when changing mode */}
        {phase !== "showing-items" && (
          <div className="absolute left-0 top-[57px] w-full h-[calc(100%-55px)] bg-[#11131a] pointer-events-none z-20 animation-fade-in"></div>
        )}
      </div>
      {/* Style fonts and scroll etc */}
      <style>{`
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.44,0.04,0.33,0.97) both;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-45px);}
          to { opacity: 1; transform: none;}
        }
        /* Hide scrollbar but allow scroll */
        .terminal-scrollbar::-webkit-scrollbar {
          width: 0.6em;
          background: transparent;
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: #232532;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default TerminalSection;
