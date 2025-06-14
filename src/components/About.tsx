
import React from 'react';

const stats = [
  { value: "06+", label: "YEARS EXPERIENCES", reversed: true },
  { value: "120+", label: "PROJECTS", reversed: false },
  { value: "900+", label: "TOTAL CLIENTS", reversed: true },
  { value: "72%", label: "CLIENT REVENUE", reversed: false },
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
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-brand-purple rounded-full text-white hover:bg-brand-purple transition-colors">
              Request a consultation
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#161616] p-6 rounded-xl flex flex-col justify-between h-40">
                {stat.reversed ? (
                  <>
                    <p className="text-sm text-gray-400 tracking-wider uppercase">{stat.label}</p>
                    <p className="text-5xl font-bold text-white text-right">{stat.value}</p>
                  </>
                ) : (
                  <>
                    <p className="text-5xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400 tracking-wider uppercase self-end">{stat.label}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
