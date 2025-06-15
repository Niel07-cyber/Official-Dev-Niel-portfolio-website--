
import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h4 className="text-white font-bold mb-4 mt-2">Social</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="mr-2 h-4 w-4" /> Instagram
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center hover:text-white transition-colors"
              aria-label="Behance"
            >
              <span className="font-bold mr-2 text-sm inline-block w-4 h-4 text-center">Bē</span> Behance
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
