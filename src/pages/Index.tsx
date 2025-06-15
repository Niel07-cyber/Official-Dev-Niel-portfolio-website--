import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import Education from "./Education";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { useNavigate } from "react-router-dom";
import Certificates from "@/components/Projects";
import Works from "./Works";
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
        {/* Removed Proficiency */}
        {/* Powershell experience/education */}
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
        <ContactSocials />
        {/* Removed Footer */}
        <section>
          <Services />
        </section>
        <section>
          <Testimonials />
        </section>
      </main>
    </div>
  );
};

export default Index;
