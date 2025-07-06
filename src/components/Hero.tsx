
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
      {/* Background with tech image and overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/coder.jpg')`,
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Corner borders */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-white opacity-80"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-white opacity-80"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-white opacity-80"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-white opacity-80"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col items-center sm:items-start justify-center min-h-screen py-20">
          {/* Main Content */}
          <div className="w-full max-w-4xl text-center sm:text-left sm:ml-20 lg:ml-20">
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{transitionDelay: '150ms'}}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6">
                Software
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h1>
            </div>
            
            <div
              className={`
                transition-all duration-700
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{transitionDelay: '300ms'}}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 font-light">
                Building the future with code
              </p>
            </div>

            {/* Social Links and CTA Container */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
              {/* Social Links */}
              <div
                className={`
                  flex justify-center sm:justify-start gap-4 sm:gap-6
                  transition-all duration-700
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{transitionDelay: '450ms'}}
              >
                <a 
  href="https://discord.gg/YdgSM78Zqx" 
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.25a19.736 19.736 0 0 0-5.474 0 12.51 12.51 0 0 0-.617-1.25.07.07 0 0 0-.073-.035 19.736 19.736 0 0 0-4.885 1.515.064.064 0 0 0-.03.027C2.117 9.063 1.502 13.59 1.828 18.063a.083.083 0 0 0 .031.057 19.978 19.978 0 0 0 5.993 3.058.07.07 0 0 0 .076-.027c.46-.63.87-1.295 1.226-1.994a.07.07 0 0 0-.038-.098 13.133 13.133 0 0 1-1.872-.906.07.07 0 0 1-.007-.117c.126-.094.252-.19.372-.287a.07.07 0 0 1 .074-.01c3.927 1.805 8.18 1.805 12.062 0a.07.07 0 0 1 .075.009c.12.098.246.194.372.288a.07.07 0 0 1-.006.117 12.595 12.595 0 0 1-1.873.905.07.07 0 0 0-.037.099c.36.698.77 1.362 1.225 1.993a.07.07 0 0 0 .076.028 19.933 19.933 0 0 0 6.001-3.058.083.083 0 0 0 .03-.056c.484-6.256-.786-10.748-2.924-13.668a.06.06 0 0 0-.031-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419Z" />
  </svg>
</a>

                <a 
                  href="https://linkedin.com/in/othniel-aryee-9501a0239" 
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:aryeeothniel@gmail.com" 
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
    flex justify-center sm:justify-start
    transition-all duration-700
    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
  `}
  style={{ transitionDelay: '600ms' }}
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
      </div>
    </section>
  );
};

export default Hero;
