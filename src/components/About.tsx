
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
        <div className="grid gap-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="flex flex-col items-start gap-8">
              <p className="text-gray-400 dark:text-gray-400 text-gray-600 tracking-widest">(ABOUT ME)</p>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-brand-purple rounded-full text-white dark:text-white text-gray-700 bg-brand-purple hover:bg-brand-purple/90 transition-colors">
                Request a consultation
              </a>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
                Hi, I'm Samin, a passionate front-end developer with a love for creating visually appealing and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialise in turning creative designs into fully responsive and interactive websites. I'm constantly learning new technologies and pushing the boundaries of what's possible in web development. Let's bring your ideas to life!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#161616] dark:bg-[#161616] bg-white border border-gray-200 dark:border-gray-800 p-6 rounded-xl flex flex-col justify-between h-40 shadow-sm">
                {stat.reversed ? (
                  <>
                    <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 tracking-wider uppercase">{stat.label}</p>
                    <p className="text-5xl font-bold text-white dark:text-white text-gray-900 text-right">{stat.value}</p>
                  </>
                ) : (
                  <>
                    <p className="text-5xl font-bold text-white dark:text-white text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 tracking-wider uppercase self-end">{stat.label}</p>
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
