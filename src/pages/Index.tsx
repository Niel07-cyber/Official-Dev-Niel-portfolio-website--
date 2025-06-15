
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const sections = [
  { name: "Hero", component: <Hero /> },
  { name: "About", component: <About /> },
  { name: "FeaturedWork", component: <FeaturedWork /> },
  { name: "Services", component: <Services /> },
  { name: "Testimonials", component: <Testimonials /> },
  { name: "Footer", component: <Footer /> },
];

// Slower transition for intro: 2 seconds per section
const INTRO_STEP_TIME = 2000; // 2s per slide, much slower for dramatic effect

const Index = () => {
  // Current section for intro autoplay
  const [current, setCurrent] = useState(0);
  // After intro transitions are done: allow natural scrolling
  const [isIntro, setIsIntro] = useState(true);

  // Prevents accidental double-advance in intro
  const timerRef = useRef<number | null>(null);

  // Intro animation: sequentially show each section
  useEffect(() => {
    if (!isIntro) return;

    if (current < sections.length - 1) {
      timerRef.current = window.setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, INTRO_STEP_TIME);
    } else {
      // All sections are revealed; end intro after the last one is visible for a moment
      timerRef.current = window.setTimeout(() => {
        setIsIntro(false);
      }, INTRO_STEP_TIME + 700);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isIntro]);

  // Disable scroll during intro; re-enable after
  useEffect(() => {
    if (isIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isIntro]);

  // ---- CSS tweaks ----
  // We'll ensure each intro section is always 100svh/100vh for full mobile/desktop fit.
  // During intro, all sections are absolutely stacked and only one is interactable at a time.

  return (
    <div className="bg-background font-sans text-foreground relative w-full min-h-screen overflow-x-hidden">
      <Header />
      {isIntro ? (
        <main
          className="relative w-full min-h-screen"
          style={{
            transition: "transform 1.3s cubic-bezier(0.86,0,0.07,1)",
            // Slide 'viewport' up for each new section intro
            transform: `translateY(-${current * 100}svh)`,
          }}
        >
          {sections.map((section, idx) => (
            <section
              key={section.name}
              className={`
                w-full min-h-screen h-[100svh] md:h-screen
                flex flex-col
                absolute left-0
                `}
              style={{
                top: `${idx * 100}svh`,
                width: "100%",
                height: "100svh",
                willChange: "transform",
                pointerEvents: idx === current ? "auto" : "none",
                // Enable hardware acceleration for smoothness
                contain: "layout style",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* For FeaturedWork, ensure grid fills full screen for any viewport */}
              <div className="w-full h-full flex flex-col">
                {section.component}
              </div>
            </section>
          ))}
          {/* Dots navigation, optional to show progression */}
          <div className="fixed right-3 top-1/2 z-50 flex flex-col gap-3 -translate-y-1/2">
            {sections.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full bg-white/40 border-2 border-white/80 transition-colors
                  ${idx === current ? "bg-brand-purple border-brand-purple" : "hover:bg-white/80"}
                `}
              />
            ))}
          </div>
        </main>
      ) : (
        // Normal scroll mode: render all sections in natural order, standard height
        <main className="w-full min-h-screen">
          {sections.map((section, idx) => (
            <section
              key={section.name}
              className="w-full min-h-screen md:min-h-screen h-fit flex flex-col"
            >
              <div className="w-full h-full flex flex-col">{section.component}</div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
};

export default Index;
