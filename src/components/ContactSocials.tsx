
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
  <section className="w-full flex flex-col items-center py-16">
    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
      Let&apos;s <span className="text-brand-purple">connect.</span>
    </h2>
    <p className="mb-8 text-lg text-gray-300 text-center max-w-2xl">
      Feel free to <b>contact me</b> if you have any questions or suggestions.<br />
      I am always open to new <b>ideas and opportunities</b>.
    </p>
    <div className="w-full flex flex-wrap justify-center gap-4 animate-fade-in">
      {socials.map((social, i) => (
        <a
          key={social.name}
          href={social.href}
          className={`
            px-5 py-2 rounded-full flex items-center gap-2 bg-black/40 border border-gray-700
            text-gray-100 hover:text-white font-semibold text-base
            shadow-md backdrop-blur
            transition-all transform
            hover:scale-105 hover:bg-brand-purple/30 hover:border-brand-purple
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
          <social.icon className="h-5 w-5" />
          {social.name}
        </a>
      ))}
    </div>
  </section>
);

export default ContactSocials;
