
import React from "react";

const items = [
  {
    school: "University of Frontend Mastery",
    degree: "B.Sc. Computer Science",
    years: "2017 – 2021",
    location: "Accra, Ghana",
    content: "Graduated with honors, specializing in web user interfaces and interactive experiences.",
  },
  {
    school: "React School of Engineering",
    degree: "Professional Certification, React",
    years: "2021",
    location: "Remote",
    content: "Built real-world applications and mastered advanced React, design systems, and web animation.",
  },
];

const Education = () => (
  <section id="education" className="relative w-full py-20 bg-gradient-to-tr from-brand-purple/10 via-background to-background">
    <div className="max-w-3xl mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base text-center">(EDUCATION)</p>
      <div className="grid gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#191919] rounded-xl shadow-lg px-8 py-8 border-l-8 border-brand-purple 
              transition-transform duration-200 hover:scale-105 hover:border-brand-purple/80 animate-fade-in"
            style={{ animationDelay: `${0.3 + i * 0.2}s`, maxWidth: "100%" }}
          >
            {/* School & Years */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-lg font-semibold text-brand-purple">
                {item.school}
                <span className="text-gray-400 text-sm ml-2">({item.years})</span>
              </span>
            </div>
            {/* Degree & Location */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
              <span className="text-base font-bold text-white">
                {item.degree}
                <span className="text-gray-400 text-xs ml-2">({item.location})</span>
              </span>
            </div>
            {/* Description */}
            <p className="text-gray-400 mt-2 text-sm">({item.content})</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
