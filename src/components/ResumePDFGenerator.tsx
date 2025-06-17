
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, pdf } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
});

Font.register({
  family: 'Inter-Bold',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2',
  fontWeight: 'bold',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    lineHeight: 1.3,
    padding: 25,
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  header: {
    marginBottom: 15,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginBottom: 3,
    color: '#1a1a1a',
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666666',
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    marginBottom: 10,
    color: '#444444',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    fontSize: 8,
  },
  contactItem: {
    flexDirection: 'column',
    flex: 1,
  },
  contactLabel: {
    fontFamily: 'Inter-Bold',
    marginBottom: 2,
    color: '#333333',
  },
  contactValue: {
    color: '#666666',
  },
  mainContent: {
    flexDirection: 'row',
    gap: 20,
  },
  leftColumn: {
    flex: 1.2,
  },
  rightColumn: {
    flex: 0.8,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    marginBottom: 8,
    marginTop: 15,
    color: '#1a1a1a',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: 3,
  },
  firstSectionTitle: {
    marginTop: 0,
  },
  experienceItem: {
    marginBottom: 12,
  },
  companyName: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    marginBottom: 2,
    color: '#1a1a1a',
  },
  jobTitle: {
    fontSize: 9,
    marginBottom: 1,
    color: '#0066cc',
    fontWeight: 'bold',
  },
  jobDetails: {
    fontSize: 8,
    marginBottom: 3,
    color: '#666666',
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginBottom: 5,
  },
  techItem: {
    backgroundColor: '#f0f4f8',
    color: '#0066cc',
    fontSize: 7,
    padding: '2 6',
    borderRadius: 8,
  },
  bulletPoint: {
    fontSize: 8,
    marginBottom: 2,
    color: '#444444',
    paddingLeft: 8,
  },
  educationItem: {
    marginBottom: 8,
  },
  schoolName: {
    fontFamily: 'Inter-Bold',
    fontSize: 9,
    marginBottom: 1,
    color: '#1a1a1a',
  },
  degree: {
    fontSize: 8,
    marginBottom: 1,
    color: '#0066cc',
  },
  educationDates: {
    fontSize: 7,
    color: '#666666',
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    fontSize: 8,
  },
  languageName: {
    color: '#333333',
  },
  languageLevel: {
    color: '#666666',
  },
});

const ResumePDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Othniel Nii Dodou Aryee</Text>
        <Text style={styles.title}>Software Engineer</Text>
        <Text style={styles.description}>
          Skilled full-stack developer with expertise in diverse programming languages and frameworks. 
          Proven ability to deliver impactful projects on GitHub, fostering a collaborative environment. 
          Adept at tackling complex challenges and thriving in team settings. Seeking to leverage skills 
          in a dynamic role. I am seeking an alternance starting September 2025 for one year.
        </Text>
        
        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Location</Text>
            <Text style={styles.contactValue}>Barcelona, España</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>contact@bsodium.fr</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>+33 7 83 79 29 25</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Website</Text>
            <Text style={styles.contactValue}>https://www.bsodium.fr</Text>
          </View>
        </View>
      </View>

      {/* Main Content - Two Columns */}
      <View style={styles.mainContent}>
        {/* Left Column - Work Experience */}
        <View style={styles.leftColumn}>
          <Text style={[styles.sectionTitle, styles.firstSectionTitle]}>Work Experience</Text>
          
          {/* Kanop */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>Kanop</Text>
            <Text style={styles.jobTitle}>Front-end engineer</Text>
            <Text style={styles.jobDetails}>Feb 2025 - Present (5 months) • Full-time • Barcelona, Spain</Text>
            <View style={styles.techStack}>
              {["React", "GCP", "Framer Motion", "Gitlab CI/CD", "Agentic AI UI/UX"].map((tech, index) => (
                <Text key={index} style={styles.techItem}>{tech}</Text>
              ))}
            </View>
            <Text style={styles.bulletPoint}>
              • Implementing high-performance cartography and data visualization tools for the Kanop SaaS platform.
            </Text>
          </View>

          {/* TalentYou.ai */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>TalentYou.ai</Text>
            <Text style={styles.jobTitle}>Full-stack engineer</Text>
            <Text style={styles.jobDetails}>Jul 2024 - Feb 2025 (8 months) • Full-time • Barcelona, Spain</Text>
            <View style={styles.techStack}>
              {["React", "REST", "Docker", "Django", "Redux", "i18n"].map((tech, index) => (
                <Text key={index} style={styles.techItem}>{tech}</Text>
              ))}
            </View>
            <Text style={styles.bulletPoint}>
              • Rewrote the entire front-end of the TalentYou platform using React, Redux, and i18n, greatly improving performance and user experience.
            </Text>
            <Text style={styles.bulletPoint}>
              • Containerized the back-end services using Docker and VS Code Dev Containers, reducing the onboarding time for new developers by up to 70%.
            </Text>
          </View>

          {/* Escape Technologies */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>Escape technologies</Text>
            <Text style={styles.jobTitle}>Full-stack engineer</Text>
            <Text style={styles.jobDetails}>Nov 2023 - May 2024 (6 months) • Full-time • Paris, France</Text>
            <View style={styles.techStack}>
              {["R&D", "UI/UX", "Svelte", "GraphQL", "NodeJS", "Figma"].map((tech, index) => (
                <Text key={index} style={styles.techItem}>{tech}</Text>
              ))}
            </View>
            <Text style={styles.bulletPoint}>
              • Designed and built a Svelte component library based on the latest Material UI guidelines.
            </Text>
            <Text style={styles.bulletPoint}>
              • Researched and implemented a contrast-aware palette generation algorithm.
            </Text>
            <Text style={styles.bulletPoint}>
              • Redesigned the company website improving SEO, leading to 30% traffic increase and 20% conversion increase.
            </Text>
          </View>
        </View>

        {/* Right Column - Education & Languages */}
        <View style={styles.rightColumn}>
          <Text style={[styles.sectionTitle, styles.firstSectionTitle]}>Education</Text>
          
          <View style={styles.educationItem}>
            <Text style={styles.schoolName}>ENSEEIHT</Text>
            <Text style={styles.degree}>Master's degree in engineering - Computer Science and Applied Mathematics</Text>
            <Text style={styles.educationDates}>Sep 2020 - May 2023</Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.schoolName}>AAU Klagenfurt</Text>
            <Text style={styles.degree}>Master's degree in computer science - Computer Graphics and Vision</Text>
            <Text style={styles.educationDates}>Sep 2022 - Mar 2023</Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.schoolName}>CPGE Lycée Déodat de Séverac</Text>
            <Text style={styles.degree}>PTSI/PSI* (Bachelor equivalent) - Mathematics and Physics</Text>
            <Text style={styles.educationDates}>Sep 2018 - Jul 2020</Text>
          </View>

          <Text style={styles.sectionTitle}>Languages</Text>
          
          <View style={styles.languageItem}>
            <Text style={styles.languageName}>French</Text>
            <Text style={styles.languageLevel}>C2 (Native)</Text>
          </View>
          
          <View style={styles.languageItem}>
            <Text style={styles.languageName}>English</Text>
            <Text style={styles.languageLevel}>C1</Text>
          </View>
          
          <View style={styles.languageItem}>
            <Text style={styles.languageName}>German</Text>
            <Text style={styles.languageLevel}>B1</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

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
