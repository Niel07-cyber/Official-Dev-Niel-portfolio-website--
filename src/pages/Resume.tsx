
import React from "react";
import { ArrowLeft, Eye, Download } from "lucide-react";

export default function Resume() {
  const handleViewPDF = () => {
    // Open PDF in new tab
    window.open("/Resume_Elliot_Négrel-Jerzy.pdf", "_blank");
  };

  const handleDownloadPDF = () => {
    // Create download link
    const link = document.createElement('a');
    link.href = "/Resume_Elliot_Négrel-Jerzy.pdf";
    link.download = "Resume_Elliot_Négrel-Jerzy.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="px-8 md:px-16 py-8">
        <div className="mx-auto w-full max-w-4xl">
          <a 
            href="/"
            className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-colors w-fit"
          >
            <ArrowLeft size={18} />
            <span>Back to homepage</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 md:px-16 pb-16">
        <div className="mx-auto w-full max-w-4xl">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Elliot Négrel-Jerzy</h1>
            <h2 className="text-2xl text-gray-300 mb-6">Software Engineer</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Skilled <span className="font-semibold text-white">full-stack developer</span> with expertise in diverse programming languages and frameworks. Proven ability to deliver impactful 
              projects on GitHub, fostering a <span className="font-semibold text-white">collaborative environment</span>. Adept at tackling <span className="font-semibold text-white">complex challenges</span> and thriving in team settings. 
              Seeking to leverage skills in a dynamic role.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-300">Barcelona, España</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-300">contact@bsodium.fr</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-300">+33 7 83 79 29 25</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Website</h3>
                <p className="text-gray-300">https://www.bsodium.fr</p>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-sm">💼</span>
              </div>
              <h2 className="text-2xl font-bold">Work experience</h2>
            </div>

            <div className="space-y-8">
              {/* Kanop */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  kanop
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">Kanop</h3>
                    <span className="text-gray-400 text-sm">Feb 2025 - Present (5 months)</span>
                  </div>
                  <p className="text-teal-400 font-semibold mb-1">Front-end engineer</p>
                  <p className="text-gray-400 text-sm mb-3">Full-time - Barcelona, Spain</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "GCP", "Framer Motion", "Gitlab CI/CD", "Agentic AI UI/UX"].map(tech => (
                      <span key={tech} className="bg-gray-800 text-blue-300 px-3 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">
                    Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform.
                  </p>
                </div>
              </div>

              {/* TalentYou.ai */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  TY
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">TalentYou.ai</h3>
                    <span className="text-gray-400 text-sm">Jul 2024 - Feb 2025 (8 months)</span>
                  </div>
                  <p className="text-blue-400 font-semibold mb-1">Full-stack engineer</p>
                  <p className="text-gray-400 text-sm mb-3">Full-time - Barcelona, Spain</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React", "REST", "Docker", "Django", "Redux", "i18n"].map(tech => (
                      <span key={tech} className="bg-gray-800 text-blue-300 px-3 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>- Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.</li>
                    <li>- Containerized the back-end services using Docker and VS Code Dev Containers, reducing the onboarding time for new developers by up to 70%.</li>
                  </ul>
                </div>
              </div>

              {/* Escape technologies */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  ESC
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">Escape technologies</h3>
                    <span className="text-gray-400 text-sm">Nov 2023 - May 2024 (6 months)</span>
                  </div>
                  <p className="text-blue-400 font-semibold mb-1">Full-stack engineer</p>
                  <p className="text-gray-400 text-sm mb-3">Full-time - Paris, France</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["R&D", "UI/UX", "Svelte", "GraphQL", "NodeJS", "Figma"].map(tech => (
                      <span key={tech} className="bg-gray-800 text-blue-300 px-3 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>- Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency.</li>
                    <li>- Researched and implemented a contrast-aware palette generation algorithm which significantly improved aesthetics and accessibility.</li>
                    <li>- Redesigned the company website to improve SEO and user experience, leading to a 30% increase in traffic and a 20% increase in conversion rate.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-sm">🎓</span>
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {/* ENSEEIHT */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  INP
                  N7
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold">ENSEEIHT</h3>
                    <span className="text-gray-400 text-sm">Sep 2020 - May 2023</span>
                  </div>
                  <p className="text-blue-400 font-semibold">Master's degree in engineering - Computer Science and Applied Mathematics</p>
                </div>
              </div>

              {/* AAU Klagenfurt */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  |||
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold">AAU Klagenfurt</h3>
                    <span className="text-gray-400 text-sm">Sep 2022 - Mar 2023</span>
                  </div>
                  <p className="text-blue-400 font-semibold">Master's degree in computer science - Computer Graphics and Vision</p>
                </div>
              </div>

              {/* CPGE */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  📐
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold">CPGE Lycée Déodat de Séverac</h3>
                    <span className="text-gray-400 text-sm">Sep 2018 - Jul 2020</span>
                  </div>
                  <p className="text-blue-400 font-semibold">PTSI/PSI* (Bachelor equivalent) - Mathematics and Physics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-sm">🌐</span>
              </div>
              <h2 className="text-2xl font-bold">Languages</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                C2 French (native)
              </span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                C1 English
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                C1 Spanish
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                B2 Polish
              </span>
              <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                B1 German
              </span>
            </div>
          </div>

          {/* PDF Actions */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-lg">📄</span>
              <span className="font-medium">Resume_Elliot_Négrel-Jerzy.pdf</span>
            </div>
            <button
              onClick={handleViewPDF}
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-colors"
            >
              <Eye size={16} />
              View
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Download size={16} />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
