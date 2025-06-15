
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

const Index = () => {
  // Track the current "page/section"
  const [current, setCurrent] = useState(0);
  // Control when slide navigation is enabled (after intro animations)
  const [canSlide, setCanSlide] = useState(false);
  // Prevent too-fast multiple triggers
  const slidingRef = useRef(false);

  // Wait for hero/nav transitions before enabling navigation
  useEffect(() => {
    // Time delay matches longest transitionDelay + duration in Hero/Header
    const timer = setTimeout(() => setCanSlide(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Slide up to next section
  const nextSection = () => {
    if (!canSlide || slidingRef.current) return;
    if (current < sections.length - 1) {
      slidingRef.current = true;
      setCurrent((prev) => prev + 1);
      setTimeout(() => {
        slidingRef.current = false;
      }, 700); // match transition duration
    }
  };

  // Event handlers for user actions
  useEffect(() => {
    if (!canSlide) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      // Only trigger for non-link/clickable targets
      const target = e.target as HTMLElement;
      if (
        target.tagName !== "A" &&
        !target.closest("a") &&
        !target.closest("button") &&
        !target.closest("input") &&
        !target.closest("textarea")
      ) {
        nextSection();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 30) {
        nextSection();
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [canSlide, current]);

  // Disable native scroll and fix body overflow
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="bg-background font-sans text-foreground relative w-full h-screen overflow-hidden">
      <Header />
      <main
        className="relative w-full h-full"
        style={{
          // Slide effect: move all sections up by multiples of 100vh
          transition: "transform 0.7s cubic-bezier(0.86,0,0.07,1)",
          transform: `translateY(-${current * 100}vh)`,
        }}
      >
        {sections.map((section, idx) => (
          <section
            key={section.name}
            className="w-full min-h-screen h-screen"
            style={{
              // Stack sections vertically
              position: "absolute",
              top: `${idx * 100}vh`,
              left: 0,
              width: "100%",
              height: "100vh",
            }}
          >
            {section.component}
          </section>
        ))}
      </main>
      {/* optional: dots navigation */}
      <div className="fixed right-4 top-1/2 z-50 flex flex-col gap-3 -translate-y-1/2">
        {sections.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to section ${idx + 1}`}
            className={`w-3 h-3 rounded-full bg-white/40 border-2 border-white/80 transition-colors ${
              idx === current ? "bg-brand-purple border-brand-purple" : "hover:bg-white/80"
            }`}
            onClick={() => canSlide && setCurrent(idx)}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
