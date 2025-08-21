import React from 'react';
import { useTranslations } from '../utils/translations';

function Project({ data }) {
  const t = useTranslations();

  // Helper function to get translated text with fallback
  const getTranslatedText = (key, fallback) => {
    try {
      const translated = t(key);
      // If translation returns the key itself, it means translation not found, use fallback
      return translated === key ? fallback : translated;
    } catch {
      return fallback;
    }
  };

  return (
    <section id="projects" className="text-primary body-font w-full md:w-11/12 lg:w-5/6 mx-auto px-4 sm:px-6 md:px-0">
      <div className="py-16 sm:py-20 md:py-24 mx-auto">
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="mb-6 sm:mb-8 font-extrabold text-center text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]">
          {t('projects.recent_projects')}
        </h1>

        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="text-gray-400 font-medium text-base sm:text-lg text-center mb-12 sm:mb-16 w-full sm:w-11/12 lg:w-4/5 mx-auto">
          {t('projects.description_full')} <br className="hidden sm:block" /><br className="hidden sm:block" />{t('projects.description_cta')}
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between py-6 sm:py-8 gap-4 sm:gap-0">
          <h1 className="text-primary text-xl sm:text-2xl md:text-3xl font-semibold">
            {t('projects.all_projects')}
          </h1>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((item, index) => {
              return (
                <a 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-anchor-placement="center-bottom" 
                  href={`/projects/${item.slug}`} 
                  className="relative mx-auto overflow-hidden rounded-xl bg-transparent border border-1 border-primary border-opacity-25 shadow-xl group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] w-full"
                >
                  <div className="bg-transparent relative overflow-hidden h-48 sm:h-56 md:h-64 w-full">
                    <img 
                      src={item.image.src} 
                      className="object-cover object-top w-full h-full bg-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105" 
                      alt={`${t('projects.view_details')} ${item.name}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium text-sm mb-2">
                          {(() => {
                            const description = getTranslatedText(`projects.${item.slug}.description`, item.description);
                            return description ? description.substring(0, 120) + "..." : t('projects.view_details');
                          })()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 px-4 rounded-b-xl bg-opacity-75 h-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-lg sm:text-xl font-bold text-white">{item.name}</h1>
                        <p className="mb-2 text-xs sm:text-sm text-white text-opacity-80">
                          {getTranslatedText(`projects.${item.slug}.type`, item.type)}
                        </p>
                        {item.tech && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tech.slice(0, 3).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="inline-block text-xs py-1 px-2 rounded-full bg-primary bg-opacity-20 text-primary/80"
                              >
                                {tech}
                              </span>
                            ))}
                            {item.tech.length > 3 && (
                              <span className="inline-block text-xs py-1 px-2 rounded-full bg-primary bg-opacity-10 text-primary/80">
                                +{item.tech.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <button 
                        aria-label={`${t('projects.view_details')} ${item.name}`} 
                        className="p-2 mr-2 bg-primary rounded-full bg-opacity-10 transition-all duration-300 hover:bg-opacity-30 transform hover:scale-110"
                      >
                        <svg className="fill-primary h-6" viewBox="0 0 24 24" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                          <g>
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                              />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Project;