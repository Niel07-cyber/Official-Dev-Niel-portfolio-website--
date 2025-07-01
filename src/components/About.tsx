
import React from 'react';

const stats = [
  { value: "04+", label: "YEARS EXPERIENCES", reversed: true },
  { value: "10+", label: "PROJECTS", reversed: false },
  { value: "20+", label: "TOTAL CLIENTS", reversed: true },
  { value: "50%", label: "CLIENT REVENUE", reversed: false },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-purple-950/5 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-brand-purple/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:gap-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="flex flex-col items-start gap-6 sm:gap-8">
              <p className="text-gray-400 text-sm sm:text-base tracking-widest">(ABOUT ME)</p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-brand-purple rounded-full text-white bg-gradient-to-r from-brand-purple/20 to-purple-600/20 hover:from-brand-purple hover:to-purple-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-brand-purple/25"
              >
                Request a consultation
              </a>
            </div>
            <div className="md:col-span-2">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
               Hi, I’m Othniel — a passionate full-stack developer and quality assurance engineer who loves crafting visually stunning and user-friendly web and mobile experiences. I blend creativity with precision, ensuring quality throughout development while exploring innovations in AI and model training. Skilled in JavaScript, Java, and Python, I specialize in transforming designs into fully responsive, interactive interfaces. Always eager to learn and push tech boundaries, I’m excited to help bring your ideas to life!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`
                  bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm
                  border border-gray-700/50 hover:border-brand-purple/50
                  p-4 sm:p-6 rounded-xl flex flex-col justify-between 
                  h-32 sm:h-40 shadow-lg hover:shadow-brand-purple/10
                  transition-all duration-300 transform hover:scale-105
                  hover:bg-gradient-to-br hover:from-brand-purple/10 hover:to-purple-600/10
                  ${index === 1 ? 'lg:mt-8' : ''} ${index === 3 ? 'lg:mt-16' : ''}
                `}
              >
                {stat.reversed ? (
                  <>
                    <p className="text-xs sm:text-sm text-gray-400 tracking-wider uppercase leading-tight">{stat.label}</p>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-right bg-gradient-to-r from-white to-brand-purple bg-clip-text text-transparent">{stat.value}</p>
                  </>
                ) : (
                  <>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white bg-gradient-to-r from-brand-purple to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-400 tracking-wider uppercase self-end leading-tight">{stat.label}</p>
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
