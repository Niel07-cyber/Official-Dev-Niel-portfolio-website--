
import React from "react";

const items = [
  {
    school: "University of Frontend Mastery",
    degree: "B.Sc. Computer Science",
    years: "2017 – 2021",
    content: "Graduated with honors, specializing in web user interfaces and interactive experiences.",
  },
  {
    school: "React School of Engineering",
    degree: "Professional Certification, React",
    years: "2021",
    content: "Built real-world applications and mastered advanced React, design systems, and web animation.",
  },
];

const Education = () => (
  <div className="relative min-h-screen py-24 bg-gradient-to-tr from-brand-purple/10 via-background to-background">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white text-center animate-fade-in">Education</h1>
      <div className="grid gap-12 max-w-2xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#191919] rounded-xl shadow-lg p-8 border-l-8 border-brand-purple animate-fade-in"
            style={{ animationDelay: `${0.3 + i * 0.2}s` }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <p className="text-lg font-semibold text-brand-purple">{item.school}</p>
                <h2 className="text-2xl font-bold text-white">{item.degree}</h2>
                <p className="text-gray-400 mt-1">{item.content}</p>
              </div>
              <span className="text-md text-gray-300 mt-4 md:mt-0 md:text-right">{item.years}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Education;
