
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const services = [
  { title: "UI/UX DESIGNER", description: "Creating intuitive user combining deep industry knowledge with innovative techniques." },
  { title: "BRANDING", description: "Creating intuitive user combining deep industry knowledge with innovative techniques." },
  { title: "DEVELOPMENT", description: "Creating intuitive user combining deep industry knowledge with innovative techniques." },
  { title: "MOTION", description: "Creating intuitive user combining deep industry knowledge with innovative techniques." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 mb-12 tracking-widest">(SERVICES)</p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">SERVICE EXPERTISE</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Combining deep industry knowledge with innovative techniques to deliver standout solutions. Our expertise spans UI/UX design, branding, development, and motion.
            </p>
            <a href="#work" className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors">
              SEE ALL WORKS <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            {/* Updated Lottie centered just under the button */}
            <div className="mt-6 flex justify-center">
              <DotLottieReact
                src="https://lottie.host/cd5fbd33-2823-4b79-8f28-868c751ecc67/XDT2ug1rxT.lottie"
                loop
                autoplay
                style={{
                  width: "140px",
                  height: "100px",
                  maxWidth: "100%",
                  minWidth: "80px"
                }}
              />
            </div>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <a href="#" key={index} className="group block p-8 border border-gray-800 rounded-lg transition-all duration-300 hover:bg-brand-purple hover:border-brand-purple cursor-pointer">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-gray-400 group-hover:text-white/80 mt-2 max-w-sm">{service.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <div className="flex items-center text-white border border-gray-600 rounded-full py-2 px-4 text-sm group-hover:bg-white/10 group-hover:border-white/50 transition-colors">
                            DISCOVER <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                    </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
