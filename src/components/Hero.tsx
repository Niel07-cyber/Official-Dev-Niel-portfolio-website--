
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HERO_LOTTIE =
  "https://lottie.host/4c9a4b46-ca80-4fa5-8ec5-f57ea6c865c8/OxAE8hI3SQ.lottie";

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
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20 lg:py-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
              `}
              style={{transitionDelay: '150ms'}}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-brand-purple bg-clip-text text-transparent">
                  Software
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-purple via-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h1>
            </div>
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
              `}
              style={{transitionDelay: '330ms'}}
            >
              <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                Transforming ideas into robust, scalable software solutions. I specialize in full-stack development and creating applications that make a difference.
              </p>
            </div>
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}
              `}
              style={{transitionDelay: '510ms'}}
            >
              <a 
                href="#contact-section" 
                className="inline-flex items-center mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-purple to-blue-600 hover:from-purple-600 hover:to-brand-purple text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-purple/25 font-medium"
              >
                Let's discuss <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2 relative">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <DotLottieReact
                src={HERO_LOTTIE}
                loop
                autoplay
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "300px",
                  maxHeight: "600px",
                }}
              />
            </div>
            {/* Gradient overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 pointer-events-none lg:block hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
