
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

// PDF Styles - Clean, aligned layout
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#2563EB',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    color: '#2563EB',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 18,
    color: '#4a4a4a',
    textAlign: 'justify',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap: 20,
  },
  contactItem: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  contactValue: {
    fontSize: 10,
    color: '#666666',
  },
  mainContent: {
    flexDirection: 'row',
    flex: 1,
    gap: 40,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 30,
    color: '#2563EB',
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitleFirst: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 0,
    color: '#2563EB',
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  experienceItem: {
    marginBottom: 25,
    paddingLeft: 0,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  companyName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1a1a1a',
    flex: 1,
  },
  period: {
    fontSize: 11,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft: 10,
  },
  role: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 5,
  },
  jobDetails: {
    fontSize: 11,
    color: '#666666',
    marginBottom: 10,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  techTag: {
    backgroundColor: '#F3F4F6',
    color: '#374151',
    fontSize: 9,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 5,
    borderRadius: 4,
    fontWeight: 'bold',
  },
  jobDescription: {
    fontSize: 11,
    color: '#4a4a4a',
    lineHeight: 1.5,
    marginBottom: 4,
  },
  achievementItem: {
    fontSize: 11,
    color: '#4a4a4a',
    lineHeight: 1.5,
    marginBottom: 6,
    paddingLeft: 12,
  },
  educationItem: {
    marginBottom: 22,
  },
  schoolHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 10,
  },
  schoolName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
    flex: 1,
  },
  degree: {
    fontSize: 11,
    color: '#2563EB',
    lineHeight: 1.4,
    marginBottom: 4,
    paddingRight: 10,
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  languageTag: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    fontSize: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 8,
    fontWeight: 'bold',
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
          ))}
        </View>

        {/* Right Column - Education & Languages */}
        <View style={styles.rightColumn}>
          {/* Education */}
          <Text style={styles.sectionTitleFirst}>Education</Text>
          {resumeData.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.schoolHeader}>
                <Text style={styles.schoolName}>{edu.school}</Text>
                <Text style={styles.period}>{edu.period}</Text>
              </View>
              <Text style={styles.degree}>{edu.degree}</Text>
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
