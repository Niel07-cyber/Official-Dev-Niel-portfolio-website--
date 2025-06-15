import React from "react";
import { useInView } from "@/hooks/useInView";

// Use placeholder images for logos
const items = [
  {
    logo: "photo-1487958449943-2429e8be8625",
    school: "University of Frontend Mastery",
    degree: "B.Sc. Computer Science",
    years: "2017 – 2021",
    location: "Accra, Ghana",
    content: "Graduated with honors, specializing in web user interfaces and interactive experiences.",
    relevantCoursework: "Relevant Coursework: Web Development, UI/UX Design, Data Structures, Algorithms",
    additionalCoursework: "Other Courses: Distributed Systems, Software Engineering, Database Systems"
  },
  {
    logo: "photo-1494891848038-7bd202a2afeb",
    school: "React School of Engineering",
    degree: "Professional Certification, React",
    years: "2021",
    location: "Remote",
    content: "Built real-world applications and mastered advanced React, design systems, and web animation.",
    relevantCoursework: "Relevant Coursework: Advanced React, State Management, Animation in UI, Design Systems",
    additionalCoursework: "Other Courses: Testing React Apps, Performance Optimization, TypeScript"
  },
];

const Education = () => (
  <section
    id="education"
    className="relative w-full py-20 bg-gradient-to-tr from-brand-purple/10 via-background to-background"
  >
    <div className="max-w-5xl mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base text-left font-semibold pl-2">
        (EDUCATION)
      </p>
      <div className="grid gap-12">
        {items.map((item, i) => {
          const [ref, inView] = useInView<HTMLDivElement>();
          return (
            <div
              key={i}
              ref={ref}
              className={`
                bg-[#191919] rounded-2xl shadow-lg border-l-8 border-brand-purple
                flex flex-row items-center p-8
                max-w-4xl w-full mx-auto
                relative overflow-hidden
                will-change-transform will-change-opacity
                ${inView ? "edu-slide-in-left" : "edu-pre-slide"}
              `}
              style={{
                animationDelay: inView ? `${0.25 + i * 0.6}s` : undefined,
                animationDuration: inView ? "2.2s" : undefined,
              }}
            >
              {/* School Logo */}
              <div className="min-w-[88px] h-24 w-24 flex items-center justify-center rounded-full overflow-hidden shadow-md bg-background mr-8">
                <img
                  src={`https://images.unsplash.com/${item.logo}?auto=format&fit=facearea&w=92&h=92&facepad=2&q=80`}
                  alt={item.school + " logo"}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Card Details */}
              <div className="flex-grow">
                {/* School & Years */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-2xl font-bold text-white">
                    {item.school}
                  </span>
                  <span className="text-gray-400 text-md ml-4">{item.years}</span>
                </div>
                {/* Degree & Location */}
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-base font-semibold text-brand-purple">
                    {item.degree}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    ({item.location})
                  </span>
                </div>
                {/* Description Text */}
                <p className="text-gray-300 mt-4 text-base">{item.content}</p>
                {/* Relevant Coursework */}
                <p className="text-gray-100 mt-2 text-sm font-semibold">
                  {item.relevantCoursework}
                </p>
                {/* Additional Coursework */}
                <p className="text-gray-400 mt-1 text-xs italic">
                  {item.additionalCoursework}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    {/* Blending: bottom fade overlay for smooth transition */}
    <div
      className="pointer-events-none absolute left-0 bottom-0 w-full h-16 z-10"
      style={{
        background:
          "linear-gradient(to bottom, rgba(25,25,25,0) 0%, #191919 60%, #18171a 85%, #0d0d0d 100%)",
      }}
    />
    <style>
      {`
      /* Hide initially and provide initial state for transition */
      .edu-pre-slide {
        opacity: 0;
        transform: translateX(-120px) scale(0.97);
      }
      @keyframes edu-slide-in-left-smooth {
        0% {
          opacity: 0;
          transform: translateX(-120px) scale(0.97);
        }
        60% {
          opacity: 1;
          transform: translateX(10px) scale(1.02);
        }
        78% {
          opacity: 1;
          transform: translateX(-4px) scale(1.01);
        }
        100% {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }
      .edu-slide-in-left {
        animation: edu-slide-in-left-smooth 2.2s cubic-bezier(0.66,0.17,0.23,0.98) forwards;
      }
      `}
    </style>
  </section>
);

export default Education;
