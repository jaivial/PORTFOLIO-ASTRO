import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaCode, FaBookmark, FaAward, FaInstagram } from "react-icons/fa";
import ReactApexChart from 'react-apexcharts';
import { useTranslations } from "../../utils/translations";
import { getIcon } from "../../utils/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Component for individual skill radial chart
const SkillRadialChart = ({ skillName, percentage = 100, isVisible = false }) => {
  const icon = getIcon(skillName.toLowerCase());
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 1;
      const steps = 18;
      const increment = percentage / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCurrentPercentage(Math.min(step * increment, percentage));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, animationDuration / steps);

      return () => clearInterval(timer);
    } else {
      setCurrentPercentage(0);
    }
  }, [isVisible, percentage]);
  
  const chartOptions = {
    chart: {
      height: 120,
      type: 'radialBar',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '60%',
          background: 'transparent',
        },
        track: {
          background: 'rgba(209, 213, 219, 0.3)',
          strokeWidth: '100%',
          margin: 0,
        },
        dataLabels: {
          show: false
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.3,
        gradientToColors: ['#8b5cf6'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round',
      width: 8
    },
    labels: [skillName],
    colors: ['#6366f1']
  };

  const series = [currentPercentage];

  return (
    <div className="flex flex-col items-center p-1 xs:p-2 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-lg border border-primary border-opacity-30 hover:border-opacity-50 hover:shadow-md transition-all">
      <div className="text-xs xs:text-sm md:text-lg font-bold text-gray-900 dark:text-white mb-1 drop-shadow-md">
        {Math.round(currentPercentage)}%
      </div>
      <div className="relative scale-75 xs:scale-100">
        <ReactApexChart 
          options={chartOptions} 
          series={series} 
          type="radialBar" 
          height={120} 
          width={120}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`flex flex-col items-center ${
            ['react', 'javascript', 'html', 'css', 'astro', 'node.js'].includes(skillName.toLowerCase()) 
              ? 'transform translate-y-[-7px] translate-x-[-7px] xs:translate-y-[-1px] xs:translate-x-[-2px] md:translate-y-0 md:translate-x-0'
              : ['figma', 'git'].includes(skillName.toLowerCase())
                ? 'transform translate-y-0 translate-x-0 xs:translate-y-0 xs:translate-x-0 md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'vscode'
                ? 'transform translate-y-0 translate-x-0 xs:translate-y-0 xs:translate-x-0 md:translate-y-0 md:translate-x-0'
              : ['vps', 'vercel', 'netlify', 'flutter'].includes(skillName.toLowerCase()) 
                ? 'transform translate-y-0 translate-x-0 xs:translate-y-[-1px] xs:translate-x-[-2px] md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'react native'
                ? 'transform translate-y-0 translate-x-0'
              : skillName.toLowerCase() === 'prisma'
                ? 'transform translate-y-0 translate-x-[1px] xs:translate-y-0 xs:translate-x-[1px] md:translate-y-0 md:translate-x-0' 
              : ['php', 'go'].includes(skillName.toLowerCase())
                ? 'transform translate-y-0 translate-x-0 xs:translate-y-0 xs:translate-x-0 md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'mysql'
                ? 'transform translate-y-[-1px] translate-x-[1px] xs:translate-y-[-1px] xs:translate-x-[1px] md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'mongodb'
                ? 'transform translate-y-[-1px] translate-x-[1px] xs:translate-y-[-1px] xs:translate-x-[1px] md:translate-y-[-2px] md:translate-x-[2px]'
              : skillName.toLowerCase() === 'postgresql'
                ? 'transform translate-y-[-1px] translate-x-[1px] xs:translate-y-[-1px] xs:translate-x-[1px] md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'api'
                ? 'transform translate-y-0 translate-x-[1px] xs:translate-y-0 xs:translate-x-[1px] md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'typescript'
                ? 'transform translate-y-0 translate-x-0 xs:translate-y-[-1px] xs:translate-x-[-2px] md:translate-y-0 md:translate-x-0'
              : skillName.toLowerCase() === 'tailwind css' || skillName.toLowerCase() === 'next.js'
                ? 'transform translate-y-0 translate-x-0 xs:translate-y-[-1px] xs:translate-x-[-2px] md:translate-y-0 md:translate-x-0'
                : ''
          }`}>
            {icon && (
              <div>
                {icon.type === 'svg' ? (
                  <div 
                    className={`cv-icon-override ${
                      ['react', 'javascript', 'html', 'css', 'astro', 'node.js', 'vps', 'vercel', 'netlify', 'flutter'].includes(skillName.toLowerCase()) 
                        ? 'w-4 h-4 xs:w-7 xs:h-7 md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'vscode'
                          ? 'w-[2rem] h-[2rem] xs:w-[2rem] xs:h-[2rem] md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'react native'
                          ? 'w-[3.5rem] h-[2.5rem] xs:w-[3.5rem] xs:h-[2.5rem] md:w-[3.5rem] md:h-[2.5rem]'
                        : ['figma', 'git'].includes(skillName.toLowerCase())
                          ? 'w-[2rem] h-[2rem] xs:w-[2rem] xs:h-[2rem] md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'prisma'
                          ? 'w-[2rem] h-[2rem] xs:w-[2rem] xs:h-[2rem] md:w-8 md:h-8' 
                        : skillName.toLowerCase() === 'mysql'
                          ? 'w-[2.5rem] h-[2.5rem] xs:w-[2.5rem] xs:h-[2.5rem] md:w-[3rem] md:h-[3rem]'
                        : skillName.toLowerCase() === 'mongodb'
                          ? 'w-[3rem] h-[3rem] xs:w-[3rem] xs:h-[3rem] md:w-[3.2rem] md:h-[3.2rem]'
                        : skillName.toLowerCase() === 'postgresql'
                          ? 'w-[2.5rem] h-[2.5rem] xs:w-[2.5rem] xs:h-[2.5rem] md:w-[3.2rem] md:h-[3.2rem]'
                        : skillName.toLowerCase() === 'api'
                          ? 'w-[4.2rem] h-[4.2rem] xs:w-[4.2rem] xs:h-[4.2rem] md:w-[3.2rem] md:h-[3.2rem]'
                        : ['php', 'go'].includes(skillName.toLowerCase())
                          ? 'w-[2.8rem] h-auto xs:w-[3.2rem] xs:h-auto md:w-[3rem] md:h-[2rem]'
                        : skillName.toLowerCase() === 'typescript'
                          ? 'xs:w-7 xs:h-7 md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'tailwind css'
                          ? 'w-auto h-[1.4rem] xs:w-7 xs:h-7 md:w-8 md:h-8'
                          : 'w-2 h-2 xs:w-5 xs:h-5 md:w-6 md:h-6'
                    }`} 
                    dangerouslySetInnerHTML={{ 
                      __html: ['astro'].includes(skillName.toLowerCase())
                        ? icon.content.replace(/fill-primary/g, 'fill-black')
                        : icon.content.replace(/fill-primary/g, 'fill-gray-900')
                    }} 
                  />
                ) : (
                  <img 
                    src={icon.src} 
                    alt={skillName}
                    className={`${icon.classes} ${
                      ['react', 'javascript', 'html', 'css', 'astro', 'node.js', 'vscode', 'vps', 'vercel', 'netlify', 'flutter'].includes(skillName.toLowerCase()) 
                        ? 'w-4 h-4 xs:w-7 xs:h-7 md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'react native'
                          ? 'w-[3.5rem] h-[2.5rem] xs:w-[3.5rem] xs:h-[2.5rem] md:w-[3.5rem] md:h-[2.5rem]'
                        : ['figma', 'git'].includes(skillName.toLowerCase())
                          ? 'w-[2rem] h-[2rem] xs:w-[2rem] xs:h-[2rem] md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'prisma'
                          ? 'w-[2rem] h-[2rem] xs:w-[2rem] xs:h-[2rem] md:w-8 md:h-8' 
                        : skillName.toLowerCase() === 'mysql'
                          ? 'w-[2.5rem] h-[2.5rem] xs:w-[2.5rem] xs:h-[2.5rem] md:w-[3rem] md:h-[3rem]'
                        : skillName.toLowerCase() === 'mongodb'
                          ? 'w-[3rem] h-[3rem] xs:w-[3rem] xs:h-[3rem] md:w-[3.2rem] md:h-[3.2rem]'
                        : skillName.toLowerCase() === 'postgresql'
                          ? 'w-[2.5rem] h-[2.5rem] xs:w-[2.5rem] xs:h-[2.5rem] md:w-[3.2rem] md:h-[3.2rem]'
                        : skillName.toLowerCase() === 'api'
                          ? 'w-[4.2rem] h-[4.2rem] xs:w-[4.2rem] xs:h-[4.2rem] md:w-[3.2rem] md:h-[3.2rem]'
                        : ['php', 'go'].includes(skillName.toLowerCase())
                          ? 'w-[2.8rem] h-auto xs:w-[3.2rem] xs:h-auto md:w-[3rem] md:h-[2rem]'
                        : skillName.toLowerCase() === 'tailwind css'
                          ? 'w-auto h-[1.4rem] xs:w-7 xs:h-7 md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'next.js' 
                          ? 'w-auto h-[1.8rem] xs:w-8 xs:h-8 md:w-8 md:h-8 brightness-[500]' 
                          : 'w-2 h-2 xs:w-5 xs:h-5 md:w-6 md:h-6'
                    }`}
                    style={
                      ['netlify', 'mysql', 'prisma', 'go', 'next.js', 'react native', 'vercel'].includes(skillName.toLowerCase())
                        ? { filter: 'brightness(0) saturate(100%)' }
                        : {}
                    }
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <h4 className="text-xs xs:text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-100 text-center mt-1">{skillName}</h4>
    </div>
  );
};

const SkillSection = ({ title, icon, skills, bgColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`${bgColor} p-4 sm:p-6 rounded-xl border border-primary/30 mb-6 sm:mb-8 shadow-sm`}>
      <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-center">
        <div className="text-gray-900 drop-shadow-md">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3">
        {skills.map((skill) => (
          <SkillRadialChart key={skill} skillName={skill} isVisible={isVisible} percentage={100} />
        ))}
      </div>
    </div>
  );
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

        <div className="space-y-6 sm:space-y-8">
          {/* Technical Skills with Radial Charts */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Frontend Section */}
            <SkillSection
              title={t('timeline.frontend')}
              bgColor="bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              skills={["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Astro", "Next.js", "React Native"]}
              icon={
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.5c2.5 0 4.5-2 4.5-4.5S14.5 7.5 12 7.5 7.5 9.5 7.5 12s2 4.5 4.5 4.5zm0-7c1.4 0 2.5 1.1 2.5 2.5S13.4 14.5 12 14.5 9.5 13.4 9.5 12 10.6 9.5 12 9.5z"></path>
                  <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm0-18c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"></path>
                </svg>
              }
            />

            {/* Backend Section */}
            <SkillSection
              title={t('timeline.backend')}
              bgColor="bg-gradient-to-r from-green-500/10 to-teal-500/10"
              skills={["Node.js", "PHP", "Go", "MongoDB", "MySQL", "PostgreSQL", "Prisma", "API"]}
              icon={
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 13h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zM10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4z"></path>
                </svg>
              }
            />

            {/* Tools & Others Section */}
            <SkillSection
              title={t('timeline.tools')}
              bgColor="bg-gradient-to-r from-orange-500/10 to-red-500/10"
              skills={["VSCode", "Figma", "Git", "VPS", "Vercel", "Netlify"]}
              icon={
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              }
            />
          </div>

          {/* Languages */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-600 pb-2">{t('cv.skills_categories.languages')}</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {data.skills.languages.map((lang, index) => {
                // Function to get flag emoji based on language name
                const getLanguageFlag = (languageName) => {
                  const lowerName = languageName.toLowerCase();
                  if (lowerName.includes('spanish') || lowerName.includes('español') || lowerName.includes('spanisch')) {
                    return '🇪🇸';
                  } else if (lowerName.includes('english') || lowerName.includes('inglés') || lowerName.includes('englisch')) {
                    return '🇺🇸';
                  } else if (lowerName.includes('german') || lowerName.includes('alemán') || lowerName.includes('deutsch')) {
                    return '🇩🇪';
                  }
                  return '🌍'; // Default globe emoji for other languages
                };

                return (
                  <motion.div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700" 
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getLanguageFlag(lang.name)}</span>
                        <span className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">{lang.name}</span>
                      </div>
                      <span className="text-white font-bold text-xs sm:text-sm bg-gray-900 dark:bg-gray-700 rounded-full px-3 sm:px-4 py-2 shadow-sm">
                        {lang.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
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
      </motion.section>

      {/* Projects Section - Enhanced Card Grid */}
      <motion.section id="cv-section-projects" className={`mb-10 ${activeSection === "projects" ? "border-l-4 border-primary pl-4" : ""}`} initial="hidden" animate="visible" variants={fadeInUp}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pb-2 border-b border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white">{t('cv.sections.projects')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {data.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700" 
              whileHover={{ y: -12, scale: 1.02 }} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Project Image */}
              {project.thumbnail && (
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Proyecto {index + 1}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    <span>{t('cv.actions.view_project')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" clipRule="evenodd" />
                    </svg>
                    <span className="truncate">En vivo</span>
                  </div>
                </div>
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
                <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white flex items-center justify-center mr-3 sm:mr-5 shrink-0">
                  <img 
                    src="https://florida.floridawp.florida.es/wp-content/uploads/sites/25/2017/04/logo.jpg" 
                    alt="Florida Universitaria Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800 dark:text-gray-100">{cert.name}</h3>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs">{cert.timespan}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
