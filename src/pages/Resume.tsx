import React, { useState } from "react";
import { ArrowLeft, Eye, Download, X } from "lucide-react";
import { generateResumePDF } from "../components/ResumePDFGenerator";
import { Document, Page, pdfjs } from 'react-pdf';
import { pdf } from '@react-pdf/renderer';
import ResumePDFDocument from "../components/ResumePDFGenerator";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [showPDFPreview, setShowPDFPreview] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [numPages, setNumPages] = useState<number>();

  const handleViewPDF = async () => {
    try {
      // Generate PDF blob
      const blob = await pdf(<ResumePDFDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      setShowPDFPreview(true);
    } catch (error) {
      console.error('Error generating PDF preview:', error);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await generateResumePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to original method if PDF generation fails
      const link = document.createElement('a');
      link.href = "/Resume_Othniel_Nii_Dodou_Aryee.pdf";
      link.download = "Resume_Othniel_Nii_Dodou_Aryee.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const closePDFPreview = () => {
    setShowPDFPreview(false);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl('');
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-600/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
        </div>

        {/* Header */}
        <div className="px-8 md:px-16 py-8 relative z-10">
          <div className="mx-auto w-full max-w-4xl">
            <a 
              href="/"
              className="flex items-center gap-3 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-colors w-fit backdrop-blur-sm bg-black/20"
            >
              <ArrowLeft size={18} />
              <span>Back to homepage</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 md:px-16 pb-16 relative z-10">
          <div className="mx-auto w-full max-w-4xl">
            {/* Header Section */}
            <div className="mb-12 bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Othniel Nii Dodou Aryee
              </h1>
              <h2 className="text-2xl text-blue-300 mb-6">Software Engineer</h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Skilled <span className="font-semibold text-white">full-stack developer</span> with expertise in diverse programming languages and frameworks. Proven ability to deliver impactful 
                projects on GitHub, fostering a <span className="font-semibold text-white">collaborative environment</span>. Adept at tackling <span className="font-semibold text-white">complex challenges</span> and thriving in team settings. 
                Seeking to leverage skills in a dynamic role.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Lille, France</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">aryeeothniel@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+33 7 80 75 94 99</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Website</h3>
                  <p className="text-gray-300">https://www.devniel.com</p>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">04+</div>
                  <div className="text-sm text-gray-400">YEARS EXPERIENCES</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">10+</div>
                  <div className="text-sm text-gray-400">TOTAL CLIENTS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-300 mb-2">20+</div>
                  <div className="text-sm text-gray-400">PROJECTS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">50%</div>
                  <div className="text-sm text-gray-400">CLIENT REVENUE</div>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="mb-12 relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              {/* Vertical line connecting all experiences */}
              <div className="absolute left-16 top-24 bottom-8 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
                <h2 className="text-2xl font-bold">Work experience</h2>
              </div>

              <div className="space-y-8">
                {/* Kanop */}
                <div className="flex gap-6 relative">

                  <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    NG
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold">Nightingale - Johannes Gutenberg</h3>
                      <span className="text-gray-400 text-sm">April 2025 – Aug 2025</span>
                    </div>
                    <p className="text-teal-400 font-semibold mb-1">Medical AI Developer / Web Developer</p>
                    <p className="text-gray-400 text-sm mb-3">Internship - Mainz,Germany</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React", "Python", "FastAPI", "Github",].map(tech => (
                        <span key={tech} className="bg-gray-800 text-blue-300 px-3 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm">
                      Entraînement et implémentation de modèles de deep learning pour l’analyse de scanners cardiovasculaires, ayant permis une amélioration de 70 % de la précision diagnostique.Développement d’interfaces front-end et de fonctionnalités de gamification pour des services d’IA médicale.
                    </p>
                  </div>
                </div>

                {/* TalentYou.ai */}
                <div className="flex gap-6 relative">
                 
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    DG
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold">Dreamosoft Ghana</h3>
                      <span className="text-gray-400 text-sm">Dec 2024 – Aug 2025</span>
                    </div>
                    <p className="text-blue-400 font-semibold mb-1">Mobile Developer</p>
                    <p className="text-gray-400 text-sm mb-3">Remote Contract - Kumasi, Ghana</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["React Native", "REST", "Docker", "Git",].map(tech => (
                        <span key={tech} className="bg-gray-800 text-blue-300 px-3 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>Developing intuitive web and mobile applications for education, commerce, and events.Delivering tailored solutions by addressing sector-specific challenge</li>
                      
                    </ul>
                  </div>
                </div>

                {/* Escape technologies */}
                <div className="flex gap-6 relative">
                  
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    MIS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold">Ministry of Information Systems</h3>
                      <span className="text-gray-400 text-sm">Aug 2023 – Jan 2024</span>
                    </div>
                    <p className="text-blue-400 font-semibold mb-1">Software engineer</p>
                    <p className="text-gray-400 text-sm mb-3">Partime - Accra, Ghana</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Php", "React", "JavaScript", "MYSQL", "HTML/CSS",].map(tech => (
                        <span key={tech} className="bg-gray-800 text-blue-300 px-3 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>Collaborated on the development of the Ministry of Information Systems document Tracking System for VRA, achieving a 60% reduction in physical storage and a 70% transition to cloud storage. Played a key role in designing a chatbot system, enabling 24 2hour MIS access for stakeholders via the VRA website.</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-12 relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              {/* Vertical line connecting all education entries */}
              <div className="absolute left-16 top-24 bottom-8 w-px bg-gradient-to-b from-purple-500 to-blue-500"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                  <span className="text-sm">🎓</span>
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                {/* ENSEEIHT */}
                <div className="flex gap-6 relative">
                  
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    ISEN
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">Junia ISEN Grande Ecole </h3>
                    <span className="text-gray-400 text-sm block mb-2">Sep 2024 - Dec 2026</span>
                    <p className="text-blue-400 font-semibold">Master's degree in engineering - Software Engineering</p>
                  </div>
                </div>

                {/* AAU Klagenfurt */}
                <div className="flex gap-6 relative">
                  
                  <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    KNUST
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">Kwame Nkrumah University of Science and Technology</h3>
                    <span className="text-gray-400 text-sm block mb-2">Jan 2022 - Aug 2024</span>
                    <p className="text-blue-400 font-semibold">Bachelor's degree in computer science </p>
                  </div>
                </div>

                
                
              </div>
            </div>

            {/* Languages Section */}
            <div className="mb-12 bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded flex items-center justify-center">
                  <span className="text-sm">🌐</span>
                </div>
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  A2 French 
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  English (native)
                </span>
                <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  A1 Chinese
                </span>
              </div>
            </div>

            {/* PDF Actions */}
            <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-800/50 bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-lg">📄</span>
                <span className="font-medium">Resume_Othniel_Nii_Dodou_Aryee.pdf</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPDFPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center z-10">
              <h3 className="text-lg font-semibold text-black">Resume Preview</h3>
              <button
                onClick={closePDFPreview}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            <div className="p-4 flex justify-center">
              {pdfUrl && (
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="flex flex-col items-center"
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      scale={1.2}
                      className="mb-4 shadow-lg"
                    />
                  ))}
                </Document>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
