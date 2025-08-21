import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaCode, FaBookmark, FaAward, FaInstagram } from "react-icons/fa";
import { useTranslations } from "../../utils/translations";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CVContent = ({ data, activeSection }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const t = useTranslations();

  // Map icon names to components
  const getIcon = (iconName) => {
    const icons = {
      linkedin: <FaLinkedin />,
      github: <FaGithub />,
      twitter: <FaTwitter />,
      instagram: <FaInstagram />,
    };
    return icons[iconName] || null;
  };

  return (
    <div className="cv-content text-gray-800 dark:text-gray-200">
      {/* Personal Information Section - Modern Header Card */}
      <motion.section id="cv-section-personal" className={`mb-10 ${activeSection === "personal" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 sm:p-8 shadow-lg relative overflow-hidden">
          {/* Background animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 opacity-20"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">{data.personal.name}</h1>
            <h2 className="text-xl sm:text-2xl text-primary font-bold mb-4 sm:mb-6">{data.personal.title}</h2>

            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300 max-w-3xl">{data.personal.summary}</p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 items-start sm:items-center mb-6">
              <div className="flex items-center bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm w-full sm:w-auto">
                <FaEnvelope className="mr-2 text-primary flex-shrink-0" />
                <a href={`mailto:${data.personal.email}`} className="text-gray-200 hover:text-primary transition-colors text-sm sm:text-base truncate">
                  {data.personal.email}
                </a>
              </div>

              <div className="flex items-center bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm w-full sm:w-auto">
                <FaPhone className="mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">{data.personal.phone}</span>
              </div>

              <div className="flex items-center bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm w-full sm:w-auto">
                <FaMapMarkerAlt className="mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-200 text-sm sm:text-base">{data.personal.location}</span>
              </div>

              <div className="flex items-center bg-gray-800/50 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm w-full sm:w-auto">
                <FaGlobe className="mr-2 text-primary flex-shrink-0" />
                <a href={`https://${data.personal.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-primary transition-colors text-sm sm:text-base truncate">
                  {data.personal.website}
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              {data.personal.socials.map((social, index) => (
                <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-gray-300 hover:text-primary hover:bg-gray-700 p-2.5 sm:p-3 rounded-full transition-all" aria-label={social.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {getIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section - Timeline Style */}
      <motion.section id="cv-section-experience" className={`mb-10 ${activeSection === "experience" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-300 dark:border-gray-700 flex items-center">
          <FaBookmark className="mr-2 sm:mr-3 text-primary" />
          {t('cv.sections.experience')}
        </h2>

        <div className="space-y-0">
          {data.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 sm:pl-10 mb-12 sm:mb-16 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 sm:before:w-4 before:h-3 sm:before:h-4 before:bg-primary before:rounded-full 
              after:content-[''] after:absolute after:left-[6px] sm:after:left-[7.5px] after:top-6 after:w-[2px] after:h-full after:bg-gray-300 dark:after:bg-gray-700 last:after:hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.position}</h3>
                  <span className="text-sm font-semibold bg-gray-800 text-white px-3 py-1 rounded-full w-fit">{exp.period}</span>
                </div>

                <div className="mb-4 flex flex-col sm:flex-row sm:items-center text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-base sm:text-lg">{exp.company}</span>
                  <span className="hidden sm:block mx-2">•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="mb-6 text-gray-800 dark:text-gray-200 text-sm sm:text-base">{exp.description}</p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mt-5">
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">{t('cv.achievements')}</h4>
                    <ul className="list-none space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 sm:mr-3 mt-1 text-base sm:text-lg flex-shrink-0">•</span>
                          <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section - Card Style */}
      <motion.section id="cv-section-education" className={`mb-10 ${activeSection === "education" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-300 dark:border-gray-700 flex items-center">
          <FaAward className="mr-2 sm:mr-3 text-primary" />
          {t('cv.sections.education')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {data.education.map((edu, index) => (
            <motion.div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ y: -5 }}>
              <div className="bg-gray-800 text-white py-3 sm:py-4 px-4 sm:px-6">
                <h3 className="font-bold text-lg sm:text-xl">{edu.degree}</h3>
              </div>

              <div className="p-4 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                  <span className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100">{edu.institution}</span>
                  <span className="text-sm bg-gray-800 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-100 dark:text-gray-200 w-fit">{edu.period}</span>
                </div>

                <p className="text-gray-800 dark:text-gray-200 mb-5 text-sm sm:text-base">{edu.description}</p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-5 border-t border-gray-200 dark:border-gray-700 pt-5">
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">{t('cv.achievements')}</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section - Interactive */}
      <motion.section id="cv-section-skills" className={`mb-10 ${activeSection === "skills" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-300 dark:border-gray-700 flex items-center">
          <FaCode className="mr-2 sm:mr-3 text-primary" />
          {t('cv.sections.skills')}
        </h2>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">{t('cv.skills_categories.technical')}</h3>
              <div className="space-y-4 sm:space-y-5">
                {data.skills.technical.map((skill, index) => (
                  <motion.div key={index} className="w-full" onHoverStart={() => setHoveredSkill(skill.name)} onHoverEnd={() => setHoveredSkill(null)}>
                    <div className="flex justify-between mb-1 sm:mb-2">
                      <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-100">{skill.name}</span>
                      <span className={`text-xs sm:text-sm font-bold ${hoveredSkill === skill.name ? "text-primary" : "text-gray-700 dark:text-gray-300"}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 sm:h-3">
                      <motion.div className="bg-gradient-to-r from-primary to-indigo-500 h-2 sm:h-3 rounded-full relative" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.1 }} whileHover={{ scale: 1.02 }}>
                        {hoveredSkill === skill.name && <motion.div className="absolute -right-1 -top-1 w-3 sm:w-5 h-3 sm:h-5 bg-white dark:bg-primary rounded-full border-2 border-primary" initial={{ scale: 0 }} animate={{ scale: 1 }} />}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div>
              {/* Languages */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">{t('cv.skills_categories.languages')}</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {data.skills.languages.map((lang, index) => (
                    <motion.div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all" whileHover={{ x: 5 }}>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-100">{lang.name}</span>
                        <span className="text-primary font-bold text-xs sm:text-sm bg-primary bg-opacity-10 rounded-full px-2 sm:px-3 py-1">{lang.level}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">{t('cv.skills_categories.soft')}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {data.skills.soft.map((skill, index) => (
                    <motion.span key={index} className="bg-white dark:bg-gray-900 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-800 dark:text-gray-100 shadow-sm hover:shadow-md cursor-default" whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Card Grid */}
      <motion.section id="cv-section-projects" className={`mb-10 ${activeSection === "projects" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-300 dark:border-gray-700">{t('cv.sections.projects')}</h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {data.projects.map((project, index) => (
            <motion.div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all" whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-medium text-sm sm:text-base">
                  {t('cv.actions.view_project')}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section - Modern List */}
      <motion.section id="cv-section-certifications" className={`mb-10 ${activeSection === "certifications" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-300 dark:border-gray-700">{t('cv.sections.certifications')}</h2>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {data.certifications.map((cert, index) => (
              <motion.div key={index} className="flex items-start bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-3 sm:mr-5 text-primary shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800 dark:text-gray-100">{cert.name}</h3>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs">{cert.date}</span>
                  </div>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline text-xs sm:text-sm font-medium">
                    {t('cv.actions.view_certificate')}
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interests Section - Interactive Bubbles */}
      <motion.section id="cv-section-interests" className={`mb-10 ${activeSection === "interests" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-300 dark:border-gray-700">{t('cv.sections.interests')}</h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md">
          {data.interests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-primary/80 to-indigo-500/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full cursor-default text-xs sm:text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer with download reminder */}
      <motion.div className="mt-12 sm:mt-16 text-center p-5 sm:p-7 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <p className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base">{t('cv.footer_download_reminder')}</p>
      </motion.div>
    </div>
  );
};

export default CVContent;
