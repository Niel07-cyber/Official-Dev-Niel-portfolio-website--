
import React from "react";
import { useInView } from "@/hooks/useInView";

const Hero = () => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [counterRef, counterInView] = useInView<HTMLDivElement>();

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration: number = 2000, suffix: string = "") => {
    const [count, setCount] = React.useState(0);
    
    React.useEffect(() => {
      if (!counterInView) return;
      
      let startTime: number;
      let animationFrame: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [counterInView, end, duration]);
    
    return count + suffix;
  };

  const yearsExp = useAnimatedCounter(4, 2000, "+");
  const projects = useAnimatedCounter(15, 2000, "+");
  const clients = useAnimatedCounter(20, 2000, "+");
  const revenue = useAnimatedCounter(65, 2000, "%");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-transparent to-brand-purple/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-brand-purple">Othniel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer specializing in creating exceptional digital experiences with modern web technologies
          </p>
          
          {/* Stats Section */}
          <div 
            ref={counterRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">{yearsExp}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">{projects}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">{clients}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Total Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-purple mb-2">{revenue}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Client Revenue</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="/resume"
              className="px-8 py-4 border border-gray-600 hover:border-brand-purple text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
