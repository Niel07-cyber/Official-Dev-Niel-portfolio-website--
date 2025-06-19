
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import Projects from "@/components/Projects";
import ContactSocials from "@/components/ContactSocials";
import TerminalSection from "@/components/TerminalSection";
import ResumeBanner from "@/components/ResumeBanner";
import OpenSourceSection from "@/components/OpenSourceSection";
import SoftwarePhilosophySection from "@/components/SoftwarePhilosophySection";

const Index = () => (
  <div className="bg-background font-sans text-foreground relative w-full min-h-screen overflow-x-hidden">
    <Header />
    <main className="w-full min-h-screen">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <About />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <ProgrammingLanguages />
      </section>
      <section id="terminal-section" className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <TerminalSection />
      </section>
      <section className="w-full">
        <Projects />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <OpenSourceSection />
      </section>
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <SoftwarePhilosophySection />
      </section>
      <section id="resume-banner" className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <ResumeBanner />
      </section>
      <section id="contact-section" className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-60 max-w-screen-2xl mx-auto">
        <ContactSocials />
      </section>
    </main>
  </div>
);

export default Index;
