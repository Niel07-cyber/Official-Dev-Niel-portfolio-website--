
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

// transition timing in ms for cascading intro (slow and visually appealing)
const INTRO_STEP_TIME = 1400; // 1.4s per section

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
      }, INTRO_STEP_TIME + 400);
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

  // No pointer/wheel listeners, no dots navigation during normal scroll mode
  // Only show them during intro

  return (
    <div className="bg-background font-sans text-foreground relative w-full min-h-screen overflow-x-hidden">
      <Header />
      {isIntro ? (
        <main
          className="relative w-full h-screen"
          style={{
            transition: "transform 1s cubic-bezier(0.86,0,0.07,1)",
            transform: `translateY(-${current * 100}vh)`,
          }}
        >
          {sections.map((section, idx) => (
            <section
              key={section.name}
              className="w-full min-h-screen h-screen"
              style={{
                position: "absolute",
                top: `${idx * 100}vh`,
                left: 0,
                width: "100%",
                height: "100vh",
                // Use will-change for smoother animation
                willChange: "transform",
                pointerEvents: idx === current ? "auto" : "none",
              }}
            >
              {section.component}
            </section>
          ))}
          {/* Dots navigation, optional to show progression */}
          <div className="fixed right-4 top-1/2 z-50 flex flex-col gap-3 -translate-y-1/2">
            {sections.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full bg-white/40 border-2 border-white/80 transition-colors ${
                  idx === current ? "bg-brand-purple border-brand-purple" : "hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </main>
      ) : (
        // Normal scroll mode: render in natural stacking order, no absolute/fixed positions
        <main className="w-full min-h-screen">
          {sections.map((section, idx) => (
            <section key={section.name} className="w-full min-h-screen">
              {section.component}
            </section>
          ))}
        </main>
      )}
    </div>
  );
};

export default Index;

