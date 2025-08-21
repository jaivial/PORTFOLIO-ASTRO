import React from 'react';
import { useTranslations } from '../utils/translations';

function ProjectHeader({ project }) {
  const t = useTranslations();

  // Helper function to get translated text with fallback
  const getTranslatedText = (key, fallback) => {
    try {
      const translated = t(key);
      return translated === key ? fallback : translated;
    } catch {
      return fallback;
    }
  };

  return (
    <>
      {/* Breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="mt-6">
        <ol className="flex text-sm text-gray-400">
          <li>
            <a href="/" className="hover:text-primary transition-colors text-gray-400" style={{textDecoration: 'none'}}>
              {t('breadcrumb.home')}
            </a>
          </li>
          <li className="mx-2">/</li>
          <li>
            <a href="/projects" className="hover:text-primary transition-colors text-gray-400">
              {t('breadcrumb.projects')}
            </a>
          </li>
          <li className="mx-2">/</li>
          <li aria-current="page" className="text-primary">{project.name}</li>
        </ol>
      </nav>

      <div className="mt-8 lg:mt-16">
        {/* Responsive layout for header */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-start">
          {/* Project content */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
                {project.name}
              </h1>
              <p className="text-primary text-base sm:text-lg font-medium text-center lg:text-left">
                {getTranslatedText(`projects.${project.slug}.type`, project.type)}
              </p>

              <div className="bg-primary bg-opacity-10 p-4 lg:p-6 rounded-lg">
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {getTranslatedText(`projects.${project.slug}.description`, project.description)}
                </p>
              </div>
            </div>

            {/* Project links - Visible on large screens below description */}
            <div className="hidden lg:block bg-white bg-opacity-5 p-4 lg:p-6 rounded-lg border border-primary border-opacity-10">
              <h3 className="text-primary font-semibold text-lg mb-4">{t('projects.project_links')}</h3>
              <div className="flex flex-col gap-3">
                {project.github && project.github !== "/" && (
                  <a 
                    className="flex items-center justify-center gap-2 rounded-md font-medium px-4 py-3 bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all duration-200 text-sm" 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="fill-primary" height="1em" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    {t('projects.github_repo')}
                  </a>
                )}

                {project.url && (
                  <a 
                    className="flex items-center justify-center gap-2 rounded-md font-medium px-4 py-3 bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all duration-200 text-sm" 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="fill-primary" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5,12c0,1,0,2,.12,3L8.39,15a12.36,12.36,0,0,0-3.08,1.35,10.06,10.06,0,0,0-1.61,1.2,10,10,0,0,1,0-11.14,10.06,10.06,0,0,0,1.61,1.2A12.29,12.29,0,0,0,8.38,9L8.62,9C8.54,10,8.5,11,8.5,12ZM4.3,5.62A9.55,9.55,0,0,0,5.91,6.83,11.11,11.11,0,0,0,8.66,8h0a24.72,24.72,0,0,1,.6-3.55,11,11,0,0,1,.79-2.3A10.05,10.05,0,0,0,4.3,5.62Zm9.61-3.44a11,11,0,0,1,.79,2.3A24.72,24.72,0,0,1,15.3,8h0a11.18,11.18,0,0,0,2.76-1.19A9.55,9.55,0,0,0,19.7,5.62,10.05,10.05,0,0,0,13.91,2.18ZM9.68,15.73a24.3,24.3,0,0,0,.74,4.12A7.82,7.82,0,0,0,11.31,22L12,22l.69,0a7.82,7.82,0,0,0,.89-2.13,24.3,24.3,0,0,0,.74-4.12A11.69,11.69,0,0,0,9.68,15.73ZM14.4,9.27A12.6,12.6,0,0,1,12,9.5a12.6,12.6,0,0,1-2.4-.23c-.07.85-.1,1.77-.1,2.73s0,1.88.1,2.74a12.7,12.7,0,0,1,4.8,0c.07-.85.1-1.77.1-2.73S14.47,10.12,14.4,9.27Zm-.82-5.12A7.82,7.82,0,0,0,12.69,2L12,2l-.69,0a7.82,7.82,0,0,0-.89,2.13,24.3,24.3,0,0,0-.74,4.12,11.69,11.69,0,0,0,4.64,0A24.3,24.3,0,0,0,13.58,4.15ZM20.3,6.43a10.06,10.06,0,0,1-1.61,1.2A12.36,12.36,0,0,1,15.61,9L15.38,9c.08,1,.12,2,.12,3s0,2-.12,3l.24.06a12.29,12.29,0,0,1,3.07,1.35,10.06,10.06,0,0,1,1.61,1.2,10,10,0,0,0,0-11.14ZM18.09,17.17A11.11,11.11,0,0,0,15.34,16h0a24.72,24.72,0,0,1-.6,3.55,11,11,0,0,1-.79,2.3,10.05,10.05,0,0,0,5.79-3.44A9.55,9.55,0,0,0,18.09,17.17ZM9.3,19.52A24.72,24.72,0,0,1,8.7,16h0a11.18,11.18,0,0,0-2.76,1.19A9.55,9.55,0,0,0,4.3,18.38a10.05,10.05,0,0,0,5.79,3.44A11,11,0,0,1,9.3,19.52Z" />
                    </svg>
                    {t('projects.live_demo')}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Main project image */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image.src} 
                alt={project.name} 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105" 
                width={600} 
                height={400} 
                loading="eager" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectHeader;