
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ResumeBanner = () => {
  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12 text-center relative overflow-hidden border border-slate-200 dark:border-gray-800 shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              View my <span className="text-brand-purple">Resume</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse more details about my experience and skills in the dedicated resume page, a centralized hub for all my professional background.
            </p>
            <a 
              href="/resume" 
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
