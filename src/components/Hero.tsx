
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

          {/* 3D Animated Sphere */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2 relative">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[400px] sm:h-[500px] flex items-center justify-center">
              {/* Main 3D Sphere */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div 
                  className="absolute inset-0 rounded-full animate-spin"
                  style={{
                    background: `
                      conic-gradient(
                        from 0deg,
                        #ff6b35,
                        #f7931e,
                        #ffd700,
                        #9d4edd,
                        #6c5ce7,
                        #00cec9,
                        #0984e3,
                        #6c5ce7,
                        #e17055,
                        #ff6b35
                      )
                    `,
                    animationDuration: '20s',
                    filter: 'blur(2px)',
                  }}
                />
                <div 
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: `
                      radial-gradient(
                        circle at 30% 30%,
                        rgba(255, 255, 255, 0.8),
                        rgba(157, 78, 221, 0.9) 30%,
                        rgba(108, 92, 231, 0.9) 50%,
                        rgba(9, 132, 227, 0.9) 70%,
                        rgba(0, 0, 0, 0.9) 100%
                      )
                    `,
                    filter: 'drop-shadow(0 20px 40px rgba(157, 78, 221, 0.3))',
                  }}
                />
                
                {/* Floating Text Elements */}
                <div className="absolute -top-8 -left-8 text-white/70 text-sm font-semibold animate-float">
                  AI-powered
                </div>
                <div className="absolute -bottom-8 -right-8 text-white/70 text-sm font-semibold animate-float" style={{animationDelay: '1s'}}>
                  insights
                </div>
                <div className="absolute top-1/2 -left-16 text-white/70 text-sm font-semibold animate-float" style={{animationDelay: '2s'}}>
                  for smarter
                </div>
                <div className="absolute top-1/2 -right-16 text-white/70 text-sm font-semibold animate-float" style={{animationDelay: '3s'}}>
                  decisions
                </div>
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-20 right-10 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-24 left-8 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-32 left-16 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
