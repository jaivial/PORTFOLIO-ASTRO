import React from "react";
import { Document, Page, Text, View, StyleSheet, Image, Font, Svg, Path, Rect, Link } from "@react-pdf/renderer";
import { getTranslationFunction } from "../../utils/translations";

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

// SVG Icon Components for react-pdf
const EmailIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24" style={{ marginBottom: 5, marginRight: 3 }}>
    <Path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <Rect x="3" y="5" width="18" height="14" rx="2" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24" style={{ marginBottom: 5, marginRight: 3 }}>
    <Path
      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
      fill="#4b5563"
    />
  </Svg>
);

const LocationIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24" style={{ marginBottom: 5, marginRight: 3 }}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
      fill="#1f2937"
    />
  </Svg>
);

const WebsiteIcon = () => (
  <Svg width="12" height="12" viewBox="0 0 512 512" style={{ marginBottom: 5, marginRight: 3 }}>
    <Path
      d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667  c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146  z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034  C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187  h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306  c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50  H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414  C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404  c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514  H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667  c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z   M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593  C381.469,407.717,366.807,418.738,351.021,427.514z"
      fill="#4b5563"
    />
  </Svg>
);

const LocationIconSmall = () => (
  <Svg width="12" height="12" viewBox="0 0 24 24" style={styles.locationIconSmall}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
      fill="#1f2937"
    />
  </Svg>
);

// Function to get company website URL
const getCompanyWebsite = (companyName) => {
  const companyUrls = {
    "tour to valencia": "https://www.tourtovalencia.com/",
    "centro neuro expresion": "https://centroneuroexpresion.com/",
    "guillermo fernandez nutrition": "https://guillermofernandeznutricion.es/",
    "guillermo fernandez nutricion": "https://guillermofernandeznutricion.es/",
    "alqueria villacarmen": "https://alqueriavillacarmen.com/",
    "alqueria villa carmen": "https://alqueriavillacarmen.com/",
  };
  
  // Normalize the company name: lowercase, remove accents, trim spaces
  const normalizeString = (str) => {
    return str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };
  
  const normalizedName = normalizeString(companyName);
  return companyUrls[normalizedName] || null;
};

// Create styles with safe font fallbacks
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
    fontSize: 10,
  },
  section: {
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#6366f1",
    paddingBottom: 0,
    backgroundColor: "#f8fafc",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  headerContent: {
    flex: 1,
  },
  profileImage: {
    width: 90,
    height: 90,
    marginLeft: 20,
    objectFit: "contain",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Helvetica",
    color: "#1f2937",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 16,
    color: "#6366f1",
    marginBottom: 10,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  contactInfo: {
    fontSize: 11,
    marginBottom: 4,
    marginRight: 15,
    color: "#4b5563",
    lineHeight: 1.4,
  },
  contactRow: {
    flexDirection: "row",
    marginBottom: 0,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    flex: 1,
    marginRight: 10,
  },
  contactIcon: {
    marginRight: 6,
  },
  summaryContainer: {
    backgroundColor: "#f8fafc",
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 5,
  },
  experienceContainer: {
    backgroundColor: "#f8fafc",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 5,
  },
  experienceCard: {
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#6366f1",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
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
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    marginBottom: 2,
  },
  period: {
    fontSize: 10,
    color: "#666",
    marginLeft: "auto",
  },
  periodTag: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: "auto",
  },
  position: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Helvetica",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  location: {
    fontSize: 10,
    color: "#666",
    marginLeft: 0,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIconSmall: {
    marginRight: 1,
    marginBottom: 1,
  },
  companyWebsiteButton: {
    backgroundColor: "#6366f1",
    color: "#ffffff",
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 8,
    textDecoration: "none",
  },
  companyWebsiteUrl: {
    fontSize: 8,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 4,
    fontStyle: "italic",
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
    backgroundColor: "#f3f4f6",
    padding: "3 6",
    borderRadius: 3,
    color: "#374151",
  },
  projectItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f8fafc",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#1f2937",
    fontFamily: "Helvetica",
  },
  projectType: {
    fontSize: 9,
    color: "#6366f1",
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 9,
    marginBottom: 5,
    color: "#4b5563",
    lineHeight: 1.3,
  },
  projectTech: {
    fontSize: 8,
    marginRight: 4,
    marginBottom: 3,
    backgroundColor: "#6366f1",
    color: "white",
    padding: "2 4",
    borderRadius: 2,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  certificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
  },
  certificationContent: {
    flex: 1,
  },
  certificationName: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: "Helvetica",
  },
  certificationIssuer: {
    fontSize: 9,
    color: "#6b7280",
  },
  certificationPeriod: {
    fontSize: 9,
    color: "#6366f1",
    fontWeight: "bold",
  },
  column: {
    width: "50%",
    paddingRight: 10,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: "center",
    color: "#6b7280",
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 8,
    backgroundColor: "#f9fafb",
    padding: "8 12",
    borderRadius: 3,
  },
});

// CV PDF Document Component
const CVPdfDocument = ({ data }) => {
  const t = getTranslationFunction();

  return (
    <Document title={`${data.personal.name} - ${data.personal.title} - CV`} author={data.personal.name} subject="Curriculum Vitae" keywords="cv, resume, curriculum, portfolio" producer="Jaime Digital Studio CV Generator" creator="Jaime Digital Studio">
      <Page size="A4" style={styles.page}>
        {/* Header Section with Personal Info */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>Jaime Villanueva Alcon</Text>
            <Text style={styles.title}>{data.personal.title}</Text>
            <View style={styles.contactRow}>
              <View style={styles.contactItem}>
                <EmailIcon />
                <Text style={[styles.contactInfo, { marginLeft: 2 }]}>{data.personal.email}</Text>
              </View>
              <View style={styles.contactItem}>
                <PhoneIcon />
                <Text style={styles.contactInfo}>{data.personal.phone}</Text>
              </View>
            </View>
            <View style={styles.contactRow}>
              <View style={styles.contactItem}>
                <LocationIcon />
                <Text style={styles.contactInfo}>{data.personal.location}</Text>
              </View>
              <View style={styles.contactItem}>
                <WebsiteIcon />
                <Text style={[styles.contactInfo, { marginLeft: 2 }]}>{data.personal.website}</Text>
              </View>
            </View>
          </View>
          <Image style={styles.profileImage} src={`${window.location.origin}/profilephoto.png`} />
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("cv.pdf.professional_summary")}</Text>
          <View style={styles.summaryContainer}>
            <Text style={[styles.description, { textAlign: "justify", lineHeight: 1.5 }]}>
              Experienced Full-Stack Software Engineer specializing in cross-platform application development, mobile app architecture, and scalable backend solutions. Proficient in developing robust microservice architectures, implementing DevOps practices, and managing server configurations with technologies like Nginx. Strong expertise in modern frameworks, cloud deployment
              strategies, and delivering high-performance applications across web and mobile platforms. Passionate about creating efficient, maintainable code and optimizing system performance through innovative technical solutions.
            </Text>
          </View>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("cv.sections.experience")}</Text>
          <View style={styles.experienceContainer}>
            {data.experience.slice(0, 2).map((exp, index) => (
              <View key={`exp-${index}`} style={styles.experienceCard}>
                <View style={styles.row}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.periodTag}>{exp.period}</Text>
                </View>
                <View style={styles.row}>
                  <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                    <Text style={styles.position}>{exp.position}</Text>
                    <View style={[styles.locationContainer, { marginLeft: 8 }]}>
                      <LocationIconSmall />
                      <Text style={styles.location}>{exp.location}</Text>
                    </View>
                  </View>
                </View>
                <Text style={[styles.description, { lineHeight: 1.5 }]}>{exp.description}</Text>
                {exp.achievements.map((achievement, i) => (
                  <View key={`exp-${index}-ach-${i}`} style={[styles.row, { alignItems: "center" }]}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.achievement}>{achievement}</Text>
                  </View>
                ))}
                {getCompanyWebsite(exp.company) && (
                  <View style={{ alignItems: "center" }}>
                    <Link src={getCompanyWebsite(exp.company)} style={styles.companyWebsiteButton}>
                      Visit Website
                    </Link>
                    <Text style={styles.companyWebsiteUrl}>{getCompanyWebsite(exp.company)}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* Second Page - Continuing Experience and Other Sections */}
      <Page size="A4" style={styles.page}>
        {/* Continuing Experience Section */}
        <View style={styles.section}>
          <View style={styles.experienceContainer}>
            {data.experience.slice(2).map((exp, index) => (
              <View key={`exp-${index + 2}`} style={styles.experienceCard}>
                <View style={styles.row}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.periodTag}>{exp.period}</Text>
                </View>
                <View style={styles.row}>
                  <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                    <Text style={styles.position}>{exp.position}</Text>
                    <View style={[styles.locationContainer, { marginLeft: 8 }]}>
                      <LocationIconSmall />
                      <Text style={styles.location}>{exp.location}</Text>
                    </View>
                  </View>
                </View>
                <Text style={[styles.description, { lineHeight: 1.5 }]}>{exp.description}</Text>
                {exp.achievements.map((achievement, i) => (
                  <View key={`exp-${index + 2}-ach-${i}`} style={[styles.row, { alignItems: "center" }]}>
                    <View style={styles.bulletPoint} />
                    <Text style={styles.achievement}>{achievement}</Text>
                  </View>
                ))}
                {getCompanyWebsite(exp.company) && (
                  <View style={{ alignItems: "center" }}>
                    <Link src={getCompanyWebsite(exp.company)} style={styles.companyWebsiteButton}>
                      Visit Website
                    </Link>
                    <Text style={styles.companyWebsiteUrl}>{getCompanyWebsite(exp.company)}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("cv.sections.education")}</Text>
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
          <Text style={styles.sectionTitle}>{t("cv.sections.skills")}</Text>

          <View style={styles.row}>
            {/* Technical Skills */}
            <View style={styles.column}>
              <Text style={styles.skillCategory}>{t("cv.skills_categories.technical")}</Text>
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
              <Text style={styles.skillCategory}>{t("cv.skills_categories.languages")}</Text>
              {data.skills.languages.map((lang, index) => (
                <Text key={`lang-${index}`} style={styles.skillItem}>
                  {lang.name}: {lang.level}
                </Text>
              ))}
            </View>
          </View>

          {/* Soft Skills */}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.skillCategory}>{t("cv.skills_categories.soft")}</Text>
            <View style={styles.skillRow}>
              {data.skills.soft.map((skill, index) => (
                <Text key={`soft-${index}`} style={styles.skill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("cv.sections.projects")}</Text>
          {data.projects.slice(0, 4).map((project, index) => (
            <View key={`project-${index}`} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectType}>{project.type || "Web Application"}</Text>
              <Text style={styles.projectDescription}>{project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}</Text>
              <View style={styles.techRow}>
                {project.technologies.slice(0, 8).map((tech, techIndex) => (
                  <Text key={`project-${index}-tech-${techIndex}`} style={styles.projectTech}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("cv.sections.certifications")}</Text>
          {data.certifications.map((cert, index) => (
            <View key={`cert-${index}`} style={styles.certificationItem}>
              <View style={styles.certificationContent}>
                <Text style={styles.certificationName}>{cert.name}</Text>
                <Text style={styles.certificationIssuer}>{cert.issuer}</Text>
              </View>
              <Text style={styles.certificationPeriod}>{cert.timespan}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CVPdfDocument;
