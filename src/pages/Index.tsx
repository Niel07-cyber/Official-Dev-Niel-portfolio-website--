
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import Works from "./Works";
import Certificates from "@/components/Projects";
import ContactSocials from "@/components/ContactSocials";
import TerminalSection from "@/components/TerminalSection";
import ResumeBanner from "@/components/ResumeBanner";

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
      <TerminalSection />
      <ResumeBanner />
      <section>
        <Works />
      </section>
      <section>
        <Certificates />
      </section>
      <ContactSocials />
    </main>
  </div>
);

export default Index;
