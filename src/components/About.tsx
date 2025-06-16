
import React from 'react';

const stats = [
  { value: "06+", label: "YEARS EXPERIENCES", reversed: true },
  { value: "120+", label: "PROJECTS", reversed: false },
  { value: "900+", label: "TOTAL CLIENTS", reversed: true },
  { value: "72%", label: "CLIENT REVENUE", reversed: false },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="flex flex-col items-start gap-8">
              <p className="text-slate-500 dark:text-gray-400 tracking-widest">(ABOUT ME)</p>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-white bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-lg">
                Request a consultation
              </a>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
                Hi, I'm Samin, a passionate front-end developer with a love for creating visually appealing and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialise in turning creative designs into fully responsive and interactive websites. I'm constantly learning new technologies and pushing the boundaries of what's possible in web development. Let's bring your ideas to life!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 dark:bg-[#161616] border border-slate-200 dark:border-gray-800 p-6 rounded-xl flex flex-col justify-between h-40 shadow-sm hover:shadow-md transition-shadow">
                {stat.reversed ? (
                  <>
                    <p className="text-sm text-slate-500 dark:text-gray-400 tracking-wider uppercase">{stat.label}</p>
                    <p className="text-5xl font-bold text-slate-900 dark:text-white text-right">{stat.value}</p>
                  </>
                ) : (
                  <>
                    <p className="text-5xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-slate-500 dark:text-gray-400 tracking-wider uppercase self-end">{stat.label}</p>
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
