
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
            Samin.
          </a>
          <nav
            className={`
              hidden md:flex items-center space-x-10 text-white 
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
            `}
            style={{ transitionDelay: '220ms' }}
          >
            <a href="#work" className="hover:text-brand-purple transition-colors">Work</a>
            <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
            <a href="#education" className="hover:text-brand-purple transition-colors">Education</a>
            <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
