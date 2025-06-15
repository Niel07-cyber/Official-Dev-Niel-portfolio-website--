
import React from "react";

// Certificates list (replacing previous projects)
const certificateList = [
  {
    title: "Google UX Design Certificate",
    desc: "Credential demonstrating advanced knowledge in user experience design, best practices, and accessibility.",
    organization: "Google",
    issued: "March 2024",
    location: "Online",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/abc123"
  },
  {
    title: "Meta Front-End Developer Certificate",
    desc: "Completed comprehensive coursework on modern front-end development and web accessibility.",
    organization: "Meta",
    issued: "January 2023",
    location: "Remote",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/xyz456"
  },
  {
    title: "AWS Certified Solutions Architect",
    desc: "Validated expertise in cloud architecture, IAM, and security design.",
    organization: "Amazon Web Services",
    issued: "June 2022",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://aws.amazon.com/verification"
  },
  {
    title: "Scrum Master Certified (SMC)",
    desc: "Signifies agile project leadership and the ability to facilitate high performing teams.",
    organization: "Scrum Study",
    issued: "December 2021",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    credentialUrl: "https://www.scrumstudy.com/certification/verify"
  }
];

const Certificates = () => (
  <section id="certificates" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <p className="text-gray-400 mb-10 tracking-widest text-base">(CERTIFICATES)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateList.map((cert, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-lg bg-[#161616] transition-all animate-fade-in min-h-[220px] group hover:scale-105 hover:shadow-2xl duration-200"
            style={{ animationDelay: `${0.2 + i * 0.07}s` }}
          >
            {/* Background Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full px-7 py-7">
              {/* Top Part: Title, Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{cert.title}</h2>
                <p className="text-gray-200 text-base mb-4">{cert.desc}</p>
                <div className="flex items-center flex-wrap gap-3 mb-1">
                  <span className="font-semibold text-gray-200">{cert.organization}</span>
                  <span className="text-gray-300 text-sm">•</span>
                  <span className="text-gray-300 text-sm">{cert.location}</span>
                  <span className="text-gray-300 text-sm">|</span>
                  <span className="text-gray-300 text-sm">{cert.issued}</span>
                </div>
              </div>
              {/* Bottom: Credential URL */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-purple/40 text-brand-purple px-3 py-1 rounded-full text-xs font-medium hover:bg-brand-purple/70 hover:text-white transition"
                >
                  View Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Certificates button */}
      <div className="text-center mt-12 animate-fade-in">
        <a
          href="#certificates"
          className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-brand-purple hover:border-brand-purple transition-colors"
        >
          View All Certificates
        </a>
      </div>
    </div>
  </section>
);

export default Certificates;
