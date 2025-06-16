
import React, { useEffect, useState } from 'react';
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className={`
              text-2xl font-bold text-white 
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
            `}
            style={{ transitionDelay: '120ms' }}
          >
            DevNiel
          </a>
          <nav
            className={`
              hidden md:flex items-center space-x-10 text-white 
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
            `}
            style={{ transitionDelay: '220ms' }}
          >
            <button 
              onClick={() => scrollToSection('terminal-section')} 
              className="hover:text-brand-purple transition-colors cursor-pointer"
            >
              Work
            </button>
            <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
            <button 
              onClick={() => scrollToSection('terminal-section')} 
              className="hover:text-brand-purple transition-colors cursor-pointer"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('resume-banner')} 
              className="hover:text-brand-purple transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')} 
              className="hover:text-brand-purple transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
