
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
import ContactSocials from "@/components/ContactSocials";
import TerminalSection from "@/components/TerminalSection";

// Removed the old ContactForm

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
          <ProgrammingLanguages />
        </section>
        <section>
          <Proficiency />
        </section>
        {/* Terminal style section for Experience/Education */}
        <TerminalSection />
        <section>
          <FeaturedWork />
        </section>
        <section>
          <Works />
        </section>
        <section>
          <Certificates />
        </section>
        {/* Contact socials as in screenshot - stylish, animated */}
        <ContactSocials />
        <section>
          <Services />
        </section>
        <section>
          <Testimonials />
        </section>
        {/* Footer with no black bg and edge-to-edge */}
        <section className="!px-0 !max-w-none">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
