
import React from "react";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    school: "University of Frontend Mastery",
    degree: "B.Sc. Computer Science",
    years: "2017 – 2021",
    location: "Accra, Ghana",
    content: "Graduated with honors, specializing in web user interfaces and interactive experiences.",
    relevantCoursework: "Web Development, UI/UX Design, Data Structures, Algorithms",
  },
  {
    school: "React School of Engineering",
    degree: "Professional Certification, React",
    years: "2021",
    location: "Remote",
    content: "Built real-world applications and mastered advanced React, design systems, and web animation.",
    relevantCoursework: "Advanced React, State Management, Animation in UI, Design Systems",
  },
];

const Education = () => (
  <section
    id="education"
    className="relative w-full py-20 bg-gradient-to-tr from-brand-purple/10 via-background to-background"
  >
    <div className="max-w-4xl mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base text-left font-semibold pl-2">
        (EDUCATION)
      </p>
      <div className="grid gap-8">
        {items.map((item, i) => {
          const [ref, inView] = useInView<HTMLDivElement>();
          return (
            <div
              key={i}
              ref={ref}
              className={`bg-[#191919] rounded-xl shadow-lg px-12 py-8 border-l-8 border-brand-purple
                transition-all duration-700 delay-100
                hover:scale-105 
                max-w-3xl
                relative
                ${inView ? "animate-edu-slide-in-right" : "opacity-0 translate-x-20"}
              `}
              style={{
                animationDelay: inView ? `${0.1 + i * 0.25}s` : undefined,
              }}
            >
              {/* School & Years */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-semibold text-brand-purple">
                  {item.school}
                  <span className="text-gray-400 text-sm ml-2">
                    ({item.years})
                  </span>
                </span>
              </div>
              {/* Degree & Location */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                <span className="text-base font-bold text-white">
                  {item.degree}
                  <span className="text-gray-400 text-xs ml-2">
                    ({item.location})
                  </span>
                </span>
              </div>
              {/* Description */}
              <p className="text-gray-400 mt-2 text-sm">{item.content}</p>
              <p className="text-gray-300 mt-2 text-xs italic">
                <span className="font-semibold">Relevant Coursework:</span> {item.relevantCoursework}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    <style>
      {`
      @keyframes edu-slide-in-right {
        0% {
          opacity: 0;
          transform: translateX(70px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .animate-edu-slide-in-right {
        animation: edu-slide-in-right 0.7s cubic-bezier(0.5,0,0.5,1) forwards;
      }
      `}
    </style>
  </section>
);

export default Education;
