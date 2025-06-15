
import React from "react";

type Mode = "experience" | "education";

const experience = [
  {
    company: "Kanop",
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
    role: "Full-stack engineer",
    period: "Jul 2024 – Feb 2025",
    duration: "8 months",
    type: "Full-time",
    location: "Barcelona, Spain",
    tags: ["React", "REST", "Docker", "Django", "Redux", "i18n"],
    description: "Rewrote the entire front-end of the TalentYou platform. Containerized services, improved onboarding and UX.",
  },
];

const education = [
  {
    school: "ENSEEIHT",
    degree: "Master's degree in engineering - Computer Science and Applied Mathematics",
    period: "Sep 2020 – May 2023",
  },
  {
    school: "AAU Klagenfurt",
    degree: "Master's degree in computer science - Computer Graphics and Vision",
    period: "Sep 2022 – Mar 2023",
  },
];

const TerminalSection = () => {
  const [mode, setMode] = React.useState<Mode>("experience");

  return (
    <section
      className="w-full bg-[#181920f8] rounded-xl shadow-lg py-8 px-3 xs:px-4 md:px-7 my-12 max-w-3xl mx-auto font-mono"
      style={{
        border: "1px solid #232532",
      }}
    >
      <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
        <span className="inline-block bg-gray-700/80 text-gray-200 rounded px-2 py-0.5 text-[10px] mr-2">
          pwsh in devniel
        </span>
        <span>Powershell 7.3.4</span>
        <span className="ml-2">Loading personal and system profiles took 21ms.</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-bold text-[#51A3F5]">root</span>
        <span className="text-white">@</span>
        <span className="text-[#e2b714]">devniel:~$</span>
        <span className="text-white">devniel.exe --{mode}</span>
      </div>
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setMode("experience")}
          className={`px-4 py-1 text-sm font-semibold rounded-full border transition
              ${mode === "experience"
                ? "bg-white text-black border-white shadow"
                : "bg-[#24252b] text-gray-200 border-[#3a3b44] hover:bg-[#22222c] hover:border-white"
              }
            `}
        >
          experience
        </button>
        <button
          onClick={() => setMode("education")}
          className={`px-4 py-1 text-sm font-semibold rounded-full border transition
              ${mode === "education"
                ? "bg-white text-black border-white shadow"
                : "bg-[#24252b] text-gray-200 border-[#3a3b44] hover:bg-[#22222c] hover:border-white"
              }
            `}
        >
          education
        </button>
      </div>
      {/* Content */}
      <div>
        {mode === "experience" ? (
          <ul>
            {experience.map((exp, i) => (
              <li key={i} className="mb-8 pb-4 border-b border-[#232532] last:border-b-0 last:mb-0 last:pb-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-lg text-brand-purple">{exp.company}</span>
                  <span className="text-gray-400 text-xs">{exp.period} ({exp.duration})</span>
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">{exp.role} <span className="text-xs text-gray-400 ml-2">{exp.type} – {exp.location}</span></div>
                <div className="flex flex-wrap gap-2 mt-1 mb-1">
                  {exp.tags.map(tag => (
                    <span key={tag} className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded text-[10px]">{tag}</span>
                  ))}
                </div>
                <div className="text-xs text-gray-300">{exp.description}</div>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {education.map((edu, i) => (
              <li key={i} className="mb-6 pb-2 border-b border-[#232532] last:border-b-0 last:mb-0 last:pb-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-lg text-brand-purple">{edu.school}</span>
                  <span className="text-gray-400 text-xs">{edu.period}</span>
                </div>
                <div className="text-sm text-white">{edu.degree}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TerminalSection;
