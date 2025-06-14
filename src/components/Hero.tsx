
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Front <em className="font-serif italic">end</em>
              <br />
              Developer
            </h1>
            <p className="text-lg text-gray-300 mt-6 max-w-xl">
              Transforming ideas into visually stunning, interactive websites. I specialize in front-end development and web design that captivate and engage.
            </p>
            <a href="#contact" className="inline-flex items-center mt-8 px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors">
              Let's discuss <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
          alt="Portrait of a developer"
          className="absolute right-0 bottom-0 h-full w-full md:w-1/2 object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
