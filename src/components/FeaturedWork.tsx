
import React from 'react';
import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    title: "HERO PRODUCTS",
    category: "E-commerce website",
    imageUrl: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1964&auto=format&fit=crop"
  },
  {
    title: "HERO COLLECTION",
    category: "Marking Website",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "ESSENTIALS COLLECTION",
    category: "Marking Website",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "TOP PICKS",
    category: "E-commerce Website",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto=format&fit=crop"
  }
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 mb-12 tracking-widest">(FEATURED WORK)</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border border-gray-800 aspect-video">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors">
            SEE ALL WORKS <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
