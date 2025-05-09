import React from "react";
import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";

// Register standard PDF fonts that are always available
Font.registerHyphenationCallback((word) => [word]);

// Register the standard PDF fonts that are guaranteed to work
Font.register({ family: "Courier" });
Font.register({ family: "Helvetica" });
Font.register({ family: "Times" });

// Try to register custom web fonts (these may fail on some systems)
try {
  Font.register({
    family: "Manrope",
    src: "https://fonts.cdnfonts.com/s/29129/Manrope-Regular.woff",
  });

  Font.register({
    family: "Roboto",
    src: "https://fonts.cdnfonts.com/s/13528/Roboto-Regular.woff",
  });
} catch (error) {
  console.warn("Custom font registration error:", error);
}

// Create styles with safe font fallbacks
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 3,
  },
  experienceItem: {
    marginBottom: 15,
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  period: {
    fontSize: 10,
    color: "#666",
    marginLeft: "auto",
  },
  position: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Helvetica",
  },
  location: {
    fontSize: 10,
    color: "#666",
  },
  description: {
    fontSize: 10,
    marginTop: 5,
  },
  achievement: {
    fontSize: 9,
    marginLeft: 10,
    marginTop: 2,
  },
  bulletPoint: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#333",
    marginRight: 5,
    marginTop: 3,
  },
  skillCategory: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Helvetica",
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 3,
  },
  skillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  skill: {
    fontSize: 9,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: "#efefef",
    padding: "3 6",
    borderRadius: 3,
  },
  column: {
    width: "50%",
    paddingRight: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: "center",
    color: "grey",
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 5,
  },
});

// CV PDF Document Component
const CVPdfDocument = ({ data }) => (
  <Document title={`${data.personal.name} - ${data.personal.title} - CV`} author={data.personal.name} subject="Curriculum Vitae" keywords="cv, resume, curriculum, portfolio" producer="Jaime Digital Studio CV Generator" creator="Jaime Digital Studio">
    <Page size="A4" style={styles.page}>
      {/* Header Section with Personal Info */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>{data.personal.name}</Text>
          <Text style={styles.title}>{data.personal.title}</Text>
          <Text style={styles.contactInfo}>
            {data.personal.email} | {data.personal.phone} | {data.personal.location}
          </Text>
          <Text style={styles.contactInfo}>{data.personal.website}</Text>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.language === "en" ? "Professional Summary" : "Resumen Profesional"}</Text>
        <Text style={styles.description}>{data.personal.summary}</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.language === "en" ? "Professional Experience" : "Experiencia Profesional"}</Text>
        {data.experience.map((exp, index) => (
          <View key={`exp-${index}`} style={styles.experienceItem}>
            <View style={styles.row}>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.period}>{exp.period}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.position}>{exp.position}</Text>
              <Text style={styles.location}>{exp.location}</Text>
            </View>
            <Text style={styles.description}>{exp.description}</Text>
            {exp.achievements.map((achievement, i) => (
              <View key={`exp-${index}-ach-${i}`} style={[styles.row, { alignItems: "center" }]}>
                <View style={styles.bulletPoint} />
                <Text style={styles.achievement}>{achievement}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.language === "en" ? "Education" : "Formación Académica"}</Text>
        {data.education.map((edu, index) => (
          <View key={`edu-${index}`} style={styles.experienceItem}>
            <View style={styles.row}>
              <Text style={styles.company}>{edu.institution}</Text>
              <Text style={styles.period}>{edu.period}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.position}>{edu.degree}</Text>
              <Text style={styles.location}>{edu.location}</Text>
            </View>
            <Text style={styles.description}>{edu.description}</Text>
          </View>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.language === "en" ? "Skills & Expertise" : "Habilidades y Competencias"}</Text>

        <View style={styles.row}>
          {/* Technical Skills */}
          <View style={styles.column}>
            <Text style={styles.skillCategory}>{data.language === "en" ? "Technical Skills" : "Habilidades Técnicas"}</Text>
            <View style={styles.skillRow}>
              {data.skills.technical.map((skill, index) => (
                <Text key={`tech-${index}`} style={styles.skill}>
                  {skill.name}
                </Text>
              ))}
            </View>
          </View>

          {/* Languages */}
          <View style={styles.column}>
            <Text style={styles.skillCategory}>{data.language === "en" ? "Languages" : "Idiomas"}</Text>
            {data.skills.languages.map((lang, index) => (
              <Text key={`lang-${index}`} style={styles.skillItem}>
                {lang.name}: {lang.level}
              </Text>
            ))}
          </View>
        </View>

        {/* Soft Skills */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.skillCategory}>{data.language === "en" ? "Soft Skills" : "Habilidades Personales"}</Text>
          <View style={styles.skillRow}>
            {data.skills.soft.map((skill, index) => (
              <Text key={`soft-${index}`} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.language === "en" ? "Certifications" : "Certificaciones"}</Text>
        {data.certifications.map((cert, index) => (
          <View key={`cert-${index}`} style={[styles.row, { marginBottom: 5 }]}>
            <Text style={[styles.description, styles.bold]}>{cert.name}</Text>
            <Text style={styles.period}>{cert.date}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>{data.language === "en" ? `${data.personal.name} - CV - Generated on ${new Date().toLocaleDateString()}` : `${data.personal.name} - CV - Generado el ${new Date().toLocaleDateString()}`}</Text>
    </Page>
  </Document>
);

export default CVPdfDocument;
