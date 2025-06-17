
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import Works from "./Works";
import Projects from "@/components/Projects";
import ContactSocials from "@/components/ContactSocials";
import TerminalSection from "@/components/TerminalSection";
import ResumeBanner from "@/components/ResumeBanner";
import OpenSourceSection from "@/components/OpenSourceSection";
import SoftwarePhilosophySection from "@/components/SoftwarePhilosophySection";

const Index = () => (
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
      <section id="terminal-section">
        <TerminalSection />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Works />
      </section>
      <section>
        <OpenSourceSection />
      </section>
      <section>
        <SoftwarePhilosophySection />
      </section>
      <section id="resume-banner">
        <ResumeBanner />
      </section>
      <section id="contact-section">
        <ContactSocials />
      </section>
    </main>
  </div>
);

export default Index;
