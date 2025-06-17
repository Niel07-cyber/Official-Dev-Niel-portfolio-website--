
import React, { useEffect, useState } from 'react';
import { Code, Lightbulb, Users, Rocket } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const SoftwarePhilosophySection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const principles = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing readable, maintainable code that tells a story and stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and approaches to solve complex problems efficiently."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designing with empathy, putting user experience and accessibility at the forefront."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency without compromising on functionality or design."
    }
  ];

  // Sequential animation for cards
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        // Show first card immediately when in view
        setVisibleCards([0]);
        
        // Show remaining cards with a delay
        principles.slice(1).forEach((_, index) => {
          const actualIndex = index + 1;
          setTimeout(() => {
            setVisibleCards(prev => [...prev, actualIndex]);
          }, 300 * actualIndex);
        });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [inView, principles.length]);

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white text-gray-900 mb-4">
            Software <span className="text-brand-purple">Philosophy</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-lg max-w-2xl mx-auto">
            The principles and values that guide my approach to software development and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`group bg-gray-900/30 dark:bg-gray-900/30 bg-white border border-gray-800 dark:border-gray-800 border-gray-200 rounded-xl p-8 hover:border-brand-purple/50 hover:bg-gray-900/50 dark:hover:bg-gray-900/50 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:scale-105 transform ${
                visibleCards.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionProperty: "opacity, transform, border-color, background-color", 
                transitionDuration: "0.5s",
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <principle.icon className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-2 group-hover:text-brand-purple transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 dark:from-gray-900/50 dark:to-gray-800/50 from-gray-100/50 to-gray-200/50 rounded-2xl p-8 border border-gray-800 dark:border-gray-800 border-gray-200 hover:scale-[1.02] transition-transform">
            <blockquote className="text-xl md:text-2xl text-white dark:text-white text-gray-900 font-medium italic mb-4">
              "The best code is not just functional, but beautiful, maintainable, and empowering for both developers and users."
            </blockquote>
            <cite className="text-brand-purple font-semibold">— DevNiel</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwarePhilosophySection;
