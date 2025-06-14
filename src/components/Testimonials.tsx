
import React from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Fredrick Christopher",
    title: "Founder at elion",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop&crop=faces"
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Jane Doe",
    title: "CEO at Company",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 mb-12 text-center tracking-widest">(TESTIMONIALS)</p>
        <Carousel className="w-full max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="text-center">
                  <img src={testimonial.imageUrl} alt={testimonial.author} className="w-24 h-24 rounded-full mx-auto mb-6" />
                  <p className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <Quote className="mx-auto my-6 text-brand-purple h-12 w-12" fill="currentColor" strokeWidth={0} />
                  <p className="text-xl font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex absolute left-[-50px] top-1/2 -translate-y-1/2 text-brand-purple border-brand-purple hover:bg-brand-purple hover:text-white" />
          <CarouselNext className="hidden md:inline-flex absolute right-[-50px] top-1/2 -translate-y-1/2 text-brand-purple border-brand-purple hover:bg-brand-purple hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
