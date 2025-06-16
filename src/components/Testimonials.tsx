
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The best code is not just functional, but beautiful, maintainable, and empowering for both developers and users.",
    author: "DevNiel",
    title: "Software Engineer"
  },
  {
    quote: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
    title: "Author of Clean Code"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    title: "Software Developer"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    title: "Software Architect"
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    title: "Software Developer"
  },
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
    title: "Author"
  },
  {
    quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
    title: "Computer Scientist"
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    title: "Renaissance Polymath"
  },
  {
    quote: "Good software, like wine, takes time.",
    author: "Joel Spolsky",
    title: "Software Developer"
  },
  {
    quote: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith",
    title: "Software Developer"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <div className="min-h-[200px] flex flex-col justify-center">
            <Quote className="mx-auto mb-6 text-brand-purple h-12 w-12" fill="currentColor" strokeWidth={0} />
            <blockquote className="text-xl md:text-2xl text-white font-medium italic mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>
            <cite className="text-brand-purple font-semibold text-lg">
              — {currentTestimonial.author}
            </cite>
            <p className="text-gray-400 text-sm mt-1">{currentTestimonial.title}</p>
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-brand-purple' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
