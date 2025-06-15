
import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

const GMAIL_LINK = "mailto:your.email@gmail.com";

// Gmail SVG Icon
const GmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    {...props}
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="6" fill="#fff" />
    <path d="M5 9.7V22a2.3 2.3 0 0 0 2.3 2.3h17.4A2.3 2.3 0 0 0 27 22V9.7l-10.31 8.397a2.07 2.07 0 0 1-2.38 0L5 9.7Z" fill="#EA4335"/>
    <path d="M27 9.7V22a2.3 2.3 0 0 1-2.3 2.3H7.3A2.3 2.3 0 0 1 5 22V9.7l11 8.9 11-8.9Z" stroke="#EA4335"/>
    <path d="M5 9.7V10.1l11 8.9 11-8.9V9.7A2.3 2.3 0 0 0 24.7 7.4H7.3A2.3 2.3 0 0 0 5 9.7Z" fill="#fff"/>
    <path d="M5 9.7A2.3 2.3 0 0 1 7.3 7.4h17.4A2.3 2.3 0 0 1 27 9.7v.4l-11 8.9-11-8.9v-.4Z" stroke="#EA4335"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-3 bg-black/50 border-t border-gray-800 w-full">
      <div className="flex justify-between items-center w-full">
        {/* Socials Straight Line, flush left */}
        <div className="flex flex-row gap-7 ml-0 pl-4">
          <a
            href="https://instagram.com/"
            className="hover:text-brand-purple text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/"
            className="hover:text-brand-purple text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/"
            className="hover:text-brand-purple text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={GMAIL_LINK}
            className="hover:text-brand-purple text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <GmailIcon />
          </a>
        </div>
        {/* Copyright flush right */}
        <div className="text-xs text-gray-400 text-right mr-0 pr-4">©2025 DevNiel</div>
      </div>
    </footer>
  );
};

export default Footer;
