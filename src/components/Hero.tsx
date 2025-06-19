
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/741b11dd-844e-4653-9e99-b9ef525c5be1.png')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Corner borders */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-white opacity-80"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-white opacity-80"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-white opacity-80"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-white opacity-80"></div>

      {/* REC indicator */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-red-600 text-white px-4 py-2 rounded text-sm font-bold">
          REC
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col items-start justify-center min-h-screen py-20">
          {/* Main Content */}
          <div className="w-full max-w-4xl">
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{transitionDelay: '150ms'}}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6">
                OTHNIEL
                <br />
                ARYEE
              </h1>
            </div>
            
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{transitionDelay: '300ms'}}
            >
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-light">
                Software Engineering Student
              </p>
            </div>

            {/* Social Links */}
            <div
              className={`
                flex gap-6 mb-12
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{transitionDelay: '450ms'}}
            >
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{transitionDelay: '600ms'}}
            >
              <a 
                href="#contact-section" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-purple to-blue-600 hover:from-purple-600 hover:to-brand-purple text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brand-purple/25 font-medium text-lg"
              >
                Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
