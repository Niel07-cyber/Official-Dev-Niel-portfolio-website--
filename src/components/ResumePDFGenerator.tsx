
import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';

// Define the resume data structure
interface ResumeData {
  name: string;
  title: string;
  description: string;
  contact: {
    location: string;
    email: string;
    phone: string;
    website: string;
  };
  experience: Array<{
    company: string;
    role: string;
    period: string;
    duration: string;
    type: string;
    location: string;
    technologies: string[];
    description: string;
    achievements?: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    period: string;
  }>;
  languages: Array<{
    language: string;
    level: string;
  }>;
}

// PDF Styles - Clean, readable layout
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
    color: '#2563EB',
    fontWeight: 'normal',
  },
  description: {
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 15,
    color: '#4a4a4a',
    textAlign: 'justify',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  contactItem: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 10,
    color: '#666666',
  },
  mainContent: {
    flexDirection: 'row',
    flex: 1,
    gap: 25,
  },
  leftColumn: {
    flex: 1.8,
  },
  rightColumn: {
    flex: 1.2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 20,
    color: '#1a1a1a',
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitleFirst: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 0,
    color: '#1a1a1a',
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  experienceItem: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  companyLogo: {
    width: 35,
    height: 35,
    marginRight: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  experienceContent: {
    flex: 1,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  period: {
    fontSize: 10,
    color: '#666666',
  },
  role: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 3,
  },
  jobDetails: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 8,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  techTag: {
    backgroundColor: '#F0F0F0',
    color: '#333333',
    fontSize: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 3,
    borderRadius: 3,
  },
  jobDescription: {
    fontSize: 10,
    color: '#4a4a4a',
    lineHeight: 1.4,
    marginBottom: 3,
  },
  achievementItem: {
    fontSize: 10,
    color: '#4a4a4a',
    lineHeight: 1.4,
    marginBottom: 4,
  },
  educationItem: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  schoolContent: {
    flex: 1,
  },
  schoolHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  degree: {
    fontSize: 10,
    color: '#2563EB',
    lineHeight: 1.3,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  languageTag: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    fontSize: 9,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 6,
  },
  kanopLogo: {
    backgroundColor: '#059669',
  },
  talentYouLogo: {
    backgroundColor: '#7C3AED',
  },
  escapeLogo: {
    backgroundColor: '#1F2937',
  },
  enseeihtLogo: {
    backgroundColor: '#2563EB',
  },
  aauLogo: {
    backgroundColor: '#3B82F6',
  },
  cpgeLogo: {
    backgroundColor: '#6B7280',
  },
});

// Resume data
const resumeData: ResumeData = {
  name: "Othniel Nii Dodou Aryee",
  title: "Software Engineer",
  description: "Skilled full-stack developer with expertise in diverse programming languages and frameworks. Proven ability to deliver impactful projects on GitHub, fostering a collaborative environment. Adept at tackling complex challenges and thriving in team settings. Seeking to leverage skills in a dynamic role. I am seeking an alternance starting September 2025 for one year.",
  contact: {
    location: "Barcelona, España",
    email: "contact@bsodium.fr",
    phone: "+33 7 83 79 29 25",
    website: "https://www.bsodium.fr"
  },
  experience: [
    {
      company: "Kanop",
      role: "Front-end engineer",
      period: "Feb 2025 - Present",
      duration: "5 months",
      type: "Full-time",
      location: "Barcelona, Spain",
      technologies: ["React", "GCP", "Framer Motion", "Gitlab CI/CD", "Agentic AI UI/UX"],
      description: "Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform."
    },
    {
      company: "TalentYou.ai",
      role: "Full-stack engineer",
      period: "Jul 2024 - Feb 2025",
      duration: "8 months",
      type: "Full-time",
      location: "Barcelona, Spain",
      technologies: ["React", "REST", "Docker", "Django", "Redux", "i18n"],
      description: "Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.",
      achievements: [
        "Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.",
        "Containerized the back-end services using Docker and VS Code Dev Containers, reducing the onboarding time for new developers by up to 70%."
      ]
    },
    {
      company: "Escape technologies",
      role: "Full-stack engineer",
      period: "Nov 2023 - May 2024",
      duration: "6 months",
      type: "Full-time",
      location: "Paris, France",
      technologies: ["R&D", "UI/UX", "Svelte", "GraphQL", "NodeJS", "Figma"],
      description: "Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency.",
      achievements: [
        "Designed and built a Svelte component library based on the latest Material UI guidelines, greatly increasing development speed and design consistency.",
        "Researched and implemented a contrast-aware palette generation algorithm which significantly improved aesthetics and accessibility.",
        "Redesigned the company website to improve SEO and user experience, leading to a 30% increase in traffic and a 20% increase in conversion rate."
      ]
    }
  ],
  education: [
    {
      school: "ENSEEIHT",
      degree: "Master's degree in engineering - Computer Science and Applied Mathematics",
      period: "Sep 2020 - May 2023"
    },
    {
      school: "AAU Klagenfurt",
      degree: "Master's degree in computer science - Computer Graphics and Vision",
      period: "Sep 2022 - Mar 2023"
    },
    {
      school: "CPGE Lycée Déodat de Séverac",
      degree: "PTSI/PSI* (Bachelor equivalent) - Mathematics and Physics",
      period: "Sep 2018 - Jul 2020"
    }
  ],
  languages: [
    { language: "French", level: "C2 (native)" },
    { language: "English", level: "C1" },
    { language: "German", level: "B1" }
  ]
};

// Helper function to get company logo style
const getCompanyLogoStyle = (company: string) => {
  switch (company) {
    case 'Kanop':
      return [styles.companyLogo, styles.kanopLogo];
    case 'TalentYou.ai':
      return [styles.companyLogo, styles.talentYouLogo];
    case 'Escape technologies':
      return [styles.companyLogo, styles.escapeLogo];
    default:
      return styles.companyLogo;
  }
};

// Helper function to get school logo style
const getSchoolLogoStyle = (school: string) => {
  switch (school) {
    case 'ENSEEIHT':
      return [styles.companyLogo, styles.enseeihtLogo];
    case 'AAU Klagenfurt':
      return [styles.companyLogo, styles.aauLogo];
    case 'CPGE Lycée Déodat de Séverac':
      return [styles.companyLogo, styles.cpgeLogo];
    default:
      return styles.companyLogo;
  }
};

// Helper function to get logo text
const getLogoText = (name: string) => {
  switch (name) {
    case 'Kanop':
      return 'K';
    case 'TalentYou.ai':
      return 'TY';
    case 'Escape technologies':
      return 'ESC';
    case 'ENSEEIHT':
      return 'N7';
    case 'AAU Klagenfurt':
      return 'AAU';
    case 'CPGE Lycée Déodat de Séverac':
      return 'CPGE';
    default:
      return name.charAt(0);
  }
};

// PDF Document Component
const ResumePDFDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.title}>{resumeData.title}</Text>
        <Text style={styles.description}>{resumeData.description}</Text>
        
        {/* Contact Information */}
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Location</Text>
            <Text style={styles.contactValue}>{resumeData.contact.location}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>{resumeData.contact.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>{resumeData.contact.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Website</Text>
            <Text style={styles.contactValue}>{resumeData.contact.website}</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Left Column - Work Experience */}
        <View style={styles.leftColumn}>
          <Text style={styles.sectionTitleFirst}>Work experience</Text>
          {resumeData.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={getCompanyLogoStyle(exp.company)}>
                <Text style={styles.logoText}>{getLogoText(exp.company)}</Text>
              </View>
              <View style={styles.experienceContent}>
                <View style={styles.companyHeader}>
                  <Text style={styles.companyName}>{exp.company}</Text>
                  <Text style={styles.period}>{exp.period} ({exp.duration})</Text>
                </View>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.jobDetails}>{exp.type} - {exp.location}</Text>
                
                <View style={styles.technologies}>
                  {exp.technologies.map((tech, techIndex) => (
                    <Text key={techIndex} style={styles.techTag}>{tech}</Text>
                  ))}
                </View>
                
                {exp.achievements ? (
                  exp.achievements.map((achievement, achIndex) => (
                    <Text key={achIndex} style={styles.achievementItem}>• {achievement}</Text>
                  ))
                ) : (
                  <Text style={styles.jobDescription}>{exp.description}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Right Column - Education & Languages */}
        <View style={styles.rightColumn}>
          {/* Education */}
          <Text style={styles.sectionTitleFirst}>Education</Text>
          {resumeData.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={getSchoolLogoStyle(edu.school)}>
                <Text style={styles.logoText}>{getLogoText(edu.school)}</Text>
              </View>
              <View style={styles.schoolContent}>
                <View style={styles.schoolHeader}>
                  <Text style={styles.schoolName}>{edu.school}</Text>
                  <Text style={styles.period}>{edu.period}</Text>
                </View>
                <Text style={styles.degree}>{edu.degree}</Text>
              </View>
            </View>
          ))}

          {/* Languages */}
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languagesContainer}>
            {resumeData.languages.map((lang, index) => (
              <Text key={index} style={styles.languageTag}>
                {lang.level} {lang.language}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Function to generate and download PDF
export const generateResumePDF = async () => {
  const blob = await pdf(<ResumePDFDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Resume_Othniel_Nii_Dodou_Aryee.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default ResumePDFDocument;
