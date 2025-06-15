
import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";

const GMAIL_LINK = "mailto:your.email@gmail.com";
// Replace with your actual email if needed

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
    <footer className="py-12 bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
        {/* Contact Form */}
        <form
          className="w-full md:w-1/2 max-w-md bg-white/5 rounded-lg p-6 flex flex-col gap-4 shadow-lg"
          onSubmit={e => {
            e.preventDefault();
            // You could add a toast or email integration here
            alert('Message sent! (Form is demo only.)');
          }}
        >
          <h4 className="text-lg font-bold text-white mb-2">Contact Me</h4>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-name" className="text-sm text-gray-200 font-medium">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="rounded px-3 py-2 bg-black/30 border border-gray-700 text-white focus:ring-2 focus:ring-brand-purple focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-email" className="text-sm text-gray-200 font-medium">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="rounded px-3 py-2 bg-black/30 border border-gray-700 text-white focus:ring-2 focus:ring-brand-purple focus:outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="contact-message" className="text-sm text-gray-200 font-medium">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              required
              className="rounded px-3 py-2 bg-black/30 border border-gray-700 text-white focus:ring-2 focus:ring-brand-purple focus:outline-none"
              placeholder="How can I help you?"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-2 rounded transition-colors font-bold"
          >
            Send
          </button>
        </form>
        {/* Social Icons */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
          <h4 className="text-white font-bold mb-4 mt-2">Social</h4>
          <ul className="flex flex-wrap justify-center md:justify-end gap-5 text-sm">
            <li>
              <a
                href="https://instagram.com/"
                className="flex items-center gap-2 hover:text-brand-purple text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
                <span className="hidden md:inline">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                className="flex items-center gap-2 hover:text-brand-purple text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                className="flex items-center gap-2 hover:text-brand-purple text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={GMAIL_LINK}
                className="flex items-center gap-2 hover:text-brand-purple text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
              >
                <GmailIcon />
                <span className="hidden md:inline">Gmail</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
