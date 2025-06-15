
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import Education from "./Education";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import Certificates from "@/components/Projects";
import Works from "./Works";
import Proficiency from "@/components/Proficiency";

// Contact form component pulled from Footer
const ContactForm = () => (
  <div className="w-full flex justify-center items-center pb-10 pt-10">
    <form
      className="w-full md:w-1/2 max-w-md bg-white/5 rounded-lg p-4 flex flex-col gap-4 shadow-lg"
      onSubmit={e => {
        e.preventDefault();
        alert('Message sent! (Form is demo only.)');
      }}
    >
      <h4 className="text-lg font-bold text-white mb-2">Contact Me</h4>
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-name" className="text-sm text-gray-200 font-medium">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="rounded px-3 py-2 bg-black/30 border border-gray-700 text-white focus:ring-2 focus:ring-brand-purple focus:outline-none"
          placeholder="Your Name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-email" className="text-sm text-gray-200 font-medium">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="rounded px-3 py-2 bg-black/30 border border-gray-700 text-white focus:ring-2 focus:ring-brand-purple focus:outline-none"
          placeholder="you@email.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className="text-sm text-gray-200 font-medium">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          required
          className="rounded px-3 py-2 bg-black/30 border border-gray-700 text-white focus:ring-2 focus:ring-brand-purple focus:outline-none"
          placeholder="How can I help you?"
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-2 rounded transition-colors font-bold"
      >
        Send
      </button>
    </form>
  </div>
);

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-sans text-foreground relative w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full min-h-screen px-8 md:px-20 xl:px-60 max-w-screen-2xl mx-auto">
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <ProgrammingLanguages />
        </section>
        <section>
          <Proficiency />
        </section>
        <section>
          <FeaturedWork />
        </section>
        <section>
          <Works />
        </section>
        <section>
          <Certificates />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Testimonials />
        </section>
        {/* Contact form moved outside of footer */}
        <ContactForm />
        <section className="!px-0 !max-w-none">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
