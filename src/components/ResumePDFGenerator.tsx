
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, pdf } from '@react-pdf/renderer';

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

// PDF Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f2937',
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    color: '#6b7280',
  },
  description: {
    fontSize: 11,
    lineHeight: 1.6,
    marginBottom: 20,
    color: '#374151',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  contactItem: {
    flexDirection: 'column',
    flex: 1,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 9,
    color: '#6b7280',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    color: '#1f2937',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 5,
  },
  experienceItem: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  companyLogo: {
    width: 40,
    height: 40,
    backgroundColor: '#f3f4f6',
    marginRight: 15,
    borderRadius: 4,
  },
  experienceContent: {
    flex: 1,
  },
  companyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginRight: 10,
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
  },
  role: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 2,
  },
  jobDetails: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 8,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  techTag: {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    fontSize: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
    borderRadius: 2,
  },
  jobDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
  },
  achievementItem: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 2,
  },
  educationItem: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  schoolContent: {
    flex: 1,
  },
  schoolHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginRight: 10,
  },
  degree: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageTag: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: 9,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 12,
  },
});

// Resume data extracted from the page
const resumeData: ResumeData = {
  name: "Othniel Nii Dodou Aryee",
  title: "Software Engineer",
  description: "Skilled full-stack developer with expertise in diverse programming languages and frameworks. Proven ability to deliver impactful projects on GitHub, fostering a collaborative environment. Adept at tackling complex challenges and thriving in team settings. Seeking to leverage skills in a dynamic role.",
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

      {/* Work Experience */}
      <Text style={styles.sectionTitle}>💼 Work experience</Text>
      {resumeData.experience.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <View style={styles.companyLogo} />
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
                <Text key={achIndex} style={styles.achievementItem}>- {achievement}</Text>
              ))
            ) : (
              <Text style={styles.jobDescription}>{exp.description}</Text>
            )}
          </View>
        </View>
      ))}

      {/* Education */}
      <Text style={styles.sectionTitle}>🎓 Education</Text>
      {resumeData.education.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <View style={styles.companyLogo} />
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
      <Text style={styles.sectionTitle}>🌐 Languages</Text>
      <View style={styles.languagesContainer}>
        {resumeData.languages.map((lang, index) => (
          <Text key={index} style={styles.languageTag}>
            {lang.level} {lang.language}
          </Text>
        ))}
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
