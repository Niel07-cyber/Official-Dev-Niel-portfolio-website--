
import React from 'react';

const stats = [
  { value: "06+", label: "YEARS EXPERIENCES" },
  { value: "120+", label: "PROJECTS" },
  { value: "900+", label: "TOTAL CLIENTS" },
  { value: "72%", label: "CLIENT REVENUE" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 mb-4 tracking-widest">(ABOUT ME)</p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Hi, I'm Samin, a passionate front-end developer with a love for creating visually appealing and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialise in turning creative designs into fully responsive and interactive websites. I'm constantly learning new technologies and pushing the boundaries of what's possible in web development. Let's bring your ideas to life!
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors">
              Request a consultation
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -inset-px bg-gradient-to-r from-brand-purple/10 via-brand-purple/5 to-gray-800/10 rounded-lg"></div>
                <p className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-2 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
