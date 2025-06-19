
import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const socials = [
  {
    name: "Email",
    href: "mailto:your.email@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: Instagram,
  },
];

const ContactSocials = () => (
  <section className="w-full flex flex-col items-center py-12 sm:py-16 bg-gradient-to-t from-background via-purple-950/10 to-background relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-brand-purple/10 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
        Let&apos;s <span className="bg-gradient-to-r from-brand-purple to-blue-400 bg-clip-text text-transparent">connect.</span>
      </h2>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-300 text-center max-w-2xl mx-auto px-4">
        Feel free to <b>contact me</b> if you have any questions or suggestions.<br className="hidden sm:block" />
        I am always open to new <b>ideas and opportunities</b>.
      </p>
      <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 animate-fade-in">
        {socials.map((social, i) => (
          <a
            key={social.name}
            href={social.href}
            className={`
              px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center gap-2 
              bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm
              border border-gray-700/50 hover:border-brand-purple/50
              text-gray-100 hover:text-white font-semibold text-sm sm:text-base
              shadow-md hover:shadow-brand-purple/25
              transition-all duration-300 transform
              hover:scale-105 hover:bg-gradient-to-r hover:from-brand-purple/30 hover:to-purple-600/30
              focus:outline-none focus:ring-2 focus:ring-brand-purple
              ${i === 0 ? "animate-pulse" : ""}
            `}
            style={{
              animationDelay: `${i * 50}ms`,
            }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSocials;
