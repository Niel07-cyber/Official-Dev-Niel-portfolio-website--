
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">Samin.</a>
          <nav className="hidden md:flex items-center space-x-12 text-white">
            <a href="#work" className="hover:text-brand-purple transition-colors">Work</a>
            <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
