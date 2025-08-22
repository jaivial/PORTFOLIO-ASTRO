import React, { useState, useEffect, useRef } from 'react';
import { useTranslations } from '../utils/translations';
import TimelineInteractive from './TimelineInteractive';
import ReactApexChart from 'react-apexcharts';
import { getIcon } from '../utils/icons';

// Component for individual skill radial chart
const SkillRadialChart = ({ skillName, percentage = 100, isVisible = false }) => {
  const t = useTranslations();
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
          background: 'rgba(209, 213, 219, 0.1)',
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
        shadeIntensity: 0.5,
        gradientToColors: ['#818cf8'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: [skillName],
    colors: ['#6366f1']
  };

  const series = [currentPercentage];

  return (
    <div className="flex flex-col items-center p-1 xs:p-2 bg-primary bg-opacity-5 rounded-lg border border-primary border-opacity-10 hover:bg-opacity-10 transition-all">
      <div className="text-xs xs:text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 mb-1">
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
            ['react', 'javascript', 'html', 'css', 'astro'].includes(skillName.toLowerCase()) 
              ? 'transform translate-y-[-7px] translate-x-[-7px] xs:translate-y-[-1px] xs:translate-x-[-2px] md:translate-y-0 md:translate-x-0' 
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
                    className={`${
                      ['react', 'javascript', 'html', 'css', 'astro'].includes(skillName.toLowerCase()) 
                        ? 'w-4 h-4 xs:w-7 xs:h-7 md:w-8 md:h-8' 
                        : skillName.toLowerCase() === 'typescript'
                          ? 'xs:w-7 xs:h-7 md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'tailwind css'
                          ? 'w-auto h-[1.4rem] xs:w-7 xs:h-7 md:w-8 md:h-8'
                          : 'w-2 h-2 xs:w-5 xs:h-5 md:w-6 md:h-6'
                    }`} 
                    dangerouslySetInnerHTML={{ __html: icon.content }} 
                  />
                ) : (
                  <img 
                    src={icon.src} 
                    alt={skillName}
                    className={`${icon.classes} ${
                      ['react', 'typescript', 'javascript', 'html', 'css', 'astro'].includes(skillName.toLowerCase()) 
                        ? 'w-4 h-4 xs:w-7 xs:h-7 md:w-8 md:h-8' 
                        : skillName.toLowerCase() === 'tailwind css'
                          ? 'w-auto h-[1.4rem] xs:w-7 xs:h-7 md:w-8 md:h-8'
                        : skillName.toLowerCase() === 'next.js' 
                          ? 'w-auto h-[1.8rem] xs:w-8 xs:h-8 md:w-8 md:h-8 brightness-[500]' 
                          : 'w-2 h-2 xs:w-5 xs:h-5 md:w-6 md:h-6'
                    }`}
                    style={skillName.toLowerCase() === 'next.js' ? { filter: 'brightness(5) invert(1)' } : {}}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <h4 className="text-xs xs:text-xs md:text-sm font-semibold text-primary text-center mt-1">{skillName}</h4>
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
    <div ref={sectionRef} className={`${bgColor} p-6 rounded-xl border border-primary/20`}>
      <div className="flex items-center gap-3 mb-6 justify-center">
        {icon}
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3">
        {skills.map((skill) => (
          <SkillRadialChart key={skill} skillName={skill} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

function Timeline() {
  const t = useTranslations();

  const handleCVButtonClick = () => {
    // Disparar un evento personalizado que será capturado por el componente NavBar
    const event = new CustomEvent("open-cv-modal");
    document.dispatchEvent(event);
  };

  return (
    <section id="timeline" className="w-full mx-auto mt-28 md:mt-48 px-4">
      <div>
        <h1 
          data-aos="fade-up" 
          data-aos-anchor-placement="center-bottom" 
          className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]"
        >
          {t('timeline.title')}
        </h1>
        <p 
          data-aos="fade-up" 
          data-aos-anchor-placement="center-bottom" 
          className="text-gray-400 text-center text-lg font-semibold max-w-3xl mx-auto"
        >
          {t('timeline.description')}
        </p>

        {/* Componente React interactivo */}
        <TimelineInteractive />

        {/* Sección de habilidades */}
        <div data-aos="fade-up" className="mt-20 max-w-7xl mx-auto">
          <h2 className="text-2xl text-primary font-bold text-center mb-8">{t('timeline.skills_title')}</h2>

          <div className="flex flex-col space-y-8">
            {/* Frontend Section */}
            <SkillSection
              title={t('timeline.frontend')}
              bgColor="bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              skills={["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Astro", "Next.js"]}
              icon={
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 13h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zM10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4z"></path>
                </svg>
              }
            />

            {/* Tools & Others Section */}
            <SkillSection
              title={t('timeline.tools')}
              bgColor="bg-gradient-to-r from-orange-500/10 to-red-500/10"
              skills={["VSCode", "Figma", "Git", "VPS", "Vercel", "Netlify", "React Native", "Flutter"]}
              icon={
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              }
            />
          </div>

          {/* CV Download Section */}
          <div data-aos="fade-up" className="mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="text-center">
                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {t('timeline.cv_section_title')}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 text-base">
                  {t('timeline.cv_section_description')}
                </p>
                
                {/* Download button */}
                <button 
                  onClick={handleCVButtonClick}
                  className="inline-flex items-center gap-2 bg-primary bg-opacity-10 text-primary px-8 py-4 rounded-lg hover:bg-opacity-20 transition-all font-semibold text-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  {t('timeline.download_cv')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;