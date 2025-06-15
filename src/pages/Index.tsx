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

// The page now uses only normal scrolling. No intro/slide-in logic!
const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-sans text-foreground relative w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className="w-full min-h-screen">
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Education />
        </section>
        {/* Programming languages now comes directly AFTER Education */}
        <section>
          <ProgrammingLanguages />
        </section>
        {/* Add Proficiency (loading progress bars) here! */}
        <section>
          <Proficiency />
        </section>
        <section>
          <FeaturedWork />
        </section>
        {/* (PROJECTS) just after Featured Work */}
        <section>
          <Works />
        </section>
        {/* Certificates */}
        <section>
          <Certificates />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
