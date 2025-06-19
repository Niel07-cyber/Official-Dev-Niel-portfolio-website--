
import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Palette, Rocket } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-purple-900/10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-purple/20 to-blue-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-brand-purple/15 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center min-h-screen py-20 justify-center">
          {/* Main heading */}
          <div
            className={`
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{transitionDelay: '150ms'}}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-brand-purple bg-clip-text text-transparent">
                DevNiel
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{transitionDelay: '250ms'}}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
              <span className="bg-gradient-to-r from-brand-purple via-blue-400 to-purple-300 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h2>
          </div>

          {/* Description */}
          <div
            className={`
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{transitionDelay: '350ms'}}
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Transforming ideas into robust, scalable software solutions. I specialize in full-stack development and creating applications that make a difference.
            </p>
          </div>

          {/* Feature cards */}
          <div
            className={`
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{transitionDelay: '450ms'}}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-brand-purple/50 p-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                <Code className="h-8 w-8 text-brand-purple mb-4 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-gray-400 text-sm">Building end-to-end solutions with modern technologies</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-brand-purple/50 p-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                <Palette className="h-8 w-8 text-brand-purple mb-4 mx-auto" />
                <h3 className="text-white font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-400 text-sm">Creating intuitive and beautiful user experiences</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-brand-purple/50 p-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                <Rocket className="h-8 w-8 text-brand-purple mb-4 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Performance</h3>
                <p className="text-gray-400 text-sm">Optimizing for speed and scalability</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{transitionDelay: '550ms'}}
          >
            <a 
              href="#contact-section" 
              className="inline-flex items-center mt-6 sm:mt-8 px-8 py-4 bg-gradient-to-r from-brand-purple to-blue-600 hover:from-purple-600 hover:to-brand-purple text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-purple/25 font-medium text-lg"
            >
              Let's discuss <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className={`
              absolute bottom-8 left-1/2 transform -translate-x-1/2
              transition-all duration-700
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{transitionDelay: '650ms'}}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">Scroll down</span>
              <div className="w-px h-8 bg-gradient-to-b from-brand-purple to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
