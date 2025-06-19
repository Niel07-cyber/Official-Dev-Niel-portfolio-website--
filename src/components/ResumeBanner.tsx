
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ResumeBanner = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-pink-900/70 rounded-2xl p-12 text-center relative overflow-hidden border border-purple-500/30 shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-transparent"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-l from-pink-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              View my <span className="text-transparent bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text">Resume</span>
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Browse more details about my experience and skills in the dedicated resume page, a centralized hub for all my professional background.
            </p>
            <a 
              href="/resume" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Resume <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBanner;
