
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-white">Transforming ideas into</span>
          <br />
          <span className="text-brand-purple">digital experiences</span>
          <br />
          <span className="text-white text-3xl md:text-4xl lg:text-5xl font-normal mt-4 block">
            making the difference
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          I'm a full-stack developer passionate about creating innovative web applications
          that solve real-world problems and deliver exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="/#contact-section"
            className="group inline-flex items-center px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Request a consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/#contact-section"
            className="inline-flex items-center px-8 py-4 border border-gray-600 text-white hover:border-brand-purple hover:text-brand-purple rounded-full font-medium transition-colors"
          >
            Let's discuss your project
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-800 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">04+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">10+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">20+</div>
            <div className="text-gray-400 text-sm">Total Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">50%</div>
            <div className="text-gray-400 text-sm">Client Revenue Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
