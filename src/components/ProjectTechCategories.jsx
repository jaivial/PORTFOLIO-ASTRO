import React from 'react';
import { useTranslations } from '../utils/translations';
import { getIcon } from '../utils/icons.js';
import { categorizeTech } from '../utils/techCategories.js';

function ProjectTechCategories({ project }) {
  const t = useTranslations();
  
  if (!project.tech) {
    return null;
  }

  const categorizedTech = categorizeTech(project.tech);

  return (
    <div className="bg-white bg-opacity-5 p-6 lg:p-8 rounded-lg border border-primary border-opacity-10">
      <h3 className="text-primary font-semibold text-xl mb-6">
        {t('projects.technologies_used')}
      </h3>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2">
        {categorizedTech.frameworks.length > 0 && (
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6">
            <h4 className="text-purple-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 fill-purple-400" viewBox="0 0 24 24">
                <path d="M21.5 7c0-.38-.21-.71-.53-.88L12 1.5c-.3-.16-.7-.16-1 0L2.03 6.12c-.32.17-.53.5-.53.88s.21.71.53.88L11 12.5c.15.08.33.12.5.12s.35-.04.5-.12l8.97-4.62c.32-.17.53-.5.53-.88M2.97 8.5L12 13.5l9.03-5v5L12 18.5l-9.03-5v-5z" />
              </svg>
              {t('projects.tech_categories.frameworks')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorizedTech.frameworks.map((tech, index) => {
                const icon = getIcon(tech.toLowerCase());
                return (
                  <div key={index} className="flex items-center gap-2 bg-purple-500/15 text-purple-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-purple-500/25 transition-colors duration-200">
                    {icon && (
                      icon.type === "svg" ? (
                        <div dangerouslySetInnerHTML={{ __html: icon.content }} />
                      ) : (
                        <img src={icon.src} alt={tech} className={icon.classes} />
                      )
                    )}
                    <span className="truncate">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {categorizedTech.frontend.length > 0 && (
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-blue-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 fill-blue-400" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              {t('projects.tech_categories.frontend')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorizedTech.frontend.map((tech, index) => {
                const icon = getIcon(tech.toLowerCase());
                return (
                  <div key={index} className="flex items-center gap-2 bg-blue-500/15 text-blue-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-500/25 transition-colors duration-200">
                    {icon && (
                      icon.type === "svg" ? (
                        <div dangerouslySetInnerHTML={{ __html: icon.content }} />
                      ) : (
                        <img src={icon.src} alt={tech} className={icon.classes} />
                      )
                    )}
                    <span className="truncate">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {categorizedTech.backend.length > 0 && (
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
            <h4 className="text-green-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 fill-green-400" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              {t('projects.tech_categories.backend')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorizedTech.backend.map((tech, index) => {
                const icon = getIcon(tech.toLowerCase());
                return (
                  <div key={index} className="flex items-center gap-2 bg-green-500/15 text-green-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-500/25 transition-colors duration-200">
                    {icon && (
                      icon.type === "svg" ? (
                        <div dangerouslySetInnerHTML={{ __html: icon.content }} />
                      ) : (
                        <img src={icon.src} alt={tech} className={icon.classes} />
                      )
                    )}
                    <span className="truncate">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {categorizedTech.integrations.length > 0 && (
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
            <h4 className="text-yellow-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {t('projects.tech_categories.integrations')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorizedTech.integrations.map((tech, index) => {
                const icon = getIcon(tech.toLowerCase());
                return (
                  <div key={index} className="flex items-center gap-2 bg-yellow-500/15 text-yellow-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500/25 transition-colors duration-200">
                    {icon && (
                      icon.type === "svg" ? (
                        <div dangerouslySetInnerHTML={{ __html: icon.content }} />
                      ) : (
                        <img src={icon.src} alt={tech} className={icon.classes} />
                      )
                    )}
                    <span className="truncate">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {categorizedTech.devops.length > 0 && (
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <h4 className="text-orange-400 font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 fill-orange-400" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              {t('projects.tech_categories.devops')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {categorizedTech.devops.map((tech, index) => {
                const icon = getIcon(tech.toLowerCase());
                return (
                  <div key={index} className="flex items-center gap-2 bg-orange-500/15 text-orange-300 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-500/25 transition-colors duration-200">
                    {icon && (
                      icon.type === "svg" ? (
                        <div dangerouslySetInnerHTML={{ __html: icon.content }} />
                      ) : (
                        <img src={icon.src} alt={tech} className={icon.classes} />
                      )
                    )}
                    <span className="truncate">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {categorizedTech.tools.length > 0 && (
          <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6">
            <h4 className="text-indigo-400 font-semibold text-lg mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 fill-indigo-400" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
              </svg>
              {t('projects.tech_categories.tools')}
            </h4>
            <div className="flex flex-wrap gap-3">
              {categorizedTech.tools.map((tech, index) => {
                const icon = getIcon(tech.toLowerCase());
                return (
                  <div key={index} className="flex items-center bg-indigo-500/10 px-3 py-2 rounded-lg border border-indigo-500/30">
                    {icon?.type === "svg" ? (
                      <div dangerouslySetInnerHTML={{ __html: icon.content }} />
                    ) : icon?.type === "img" ? (
                      <img src={icon.src} alt={tech} className={icon.classes} />
                    ) : (
                      <div className="w-8 h-8 bg-indigo-500/20 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-indigo-400">{tech.charAt(0)}</span>
                      </div>
                    )}
                    <span className="text-gray-300 font-medium ml-3">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectTechCategories;