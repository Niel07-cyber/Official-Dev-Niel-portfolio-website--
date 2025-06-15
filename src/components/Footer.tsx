
import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const GMAIL_LINK = "mailto:your.email@gmail.com";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 bg-transparent">
      <div className="flex justify-between items-center w-full">
        {/* Socials Left, one straight line, NO margins or paddings */}
        <div className="flex flex-row gap-7">
          <a
            href="https://instagram.com/"
            className="hover:text-brand-purple text-white transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/"
            className="hover:text-brand-purple text-white transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/"
            className="hover:text-brand-purple text-white transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={GMAIL_LINK}
            className="hover:text-brand-purple text-white transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        {/* Copyright Right */}
        <div className="text-xs text-gray-400 text-right">©2025 DevNiel</div>
      </div>
    </footer>
  );
};

export default Footer;
