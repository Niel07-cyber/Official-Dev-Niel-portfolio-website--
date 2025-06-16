
import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight } from 'lucide-react';
import AnimatedRobotArms from './AnimatedRobotArms';

const TerminalSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Full-Stack Developer",
      period: "2022 - Present",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      logo: "💼"
    },
    {
      company: "Digital Innovations Co.",
      role: "Frontend Developer",
      period: "2020 - 2022",
      technologies: ["Vue.js", "TypeScript", "Docker", "Firebase"],
      logo: "🚀"
    },
    {
      company: "StartupXYZ",
      role: "Junior Developer",
      period: "2019 - 2020",
      technologies: ["JavaScript", "Python", "MongoDB", "Git"],
      logo: "⚡"
    }
  ];

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      'React': '⚛️',
      'Node.js': '🟢',
      'PostgreSQL': '🐘',
      'AWS': '☁️',
      'Vue.js': '💚',
      'TypeScript': '🔷',
      'Docker': '🐳',
      'Firebase': '🔥',
      'JavaScript': '🟨',
      'Python': '🐍',
      'MongoDB': '🍃',
      'Git': '📝'
    };
    return icons[tech] || '🔧';
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-brand-purple">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey in software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Interface */}
          <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
            <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">devniel@terminal</span>
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">
                <span className="text-brand-purple">devniel@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">whoami</span>
              </div>
              
              <div className="mb-6 text-gray-300">
                <div className="mb-2">{getGreeting()}! 👋</div>
                <div className="mb-2">Name: Daniel Esteves (DevNiel)</div>
                <div className="mb-2">Role: Full-Stack Software Engineer</div>
                <div className="mb-2">Location: Remote</div>
                <div className="mb-4">Status: Available for opportunities</div>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-brand-purple pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{exp.logo}</span>
                      <div>
                        <h3 className="text-white font-semibold">{exp.role}</h3>
                        <p className="text-brand-purple text-sm">{exp.company}</p>
                        <p className="text-gray-400 text-xs">{exp.period}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                        >
                          <span>{getTechIcon(tech)}</span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center text-green-400">
                <ChevronRight className="h-4 w-4" />
                <span className="ml-1 animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Robot Animation */}
          <div className="flex justify-center">
            <AnimatedRobotArms />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
