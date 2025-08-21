import React from 'react';
import { useTranslations } from '../utils/translations';
import FeatureImageModal from './FeatureImageModal.jsx';
import ImageCarouselModal from './ImageCarouselModal.jsx';

function ProjectFeatures({ project }) {
  const t = useTranslations();

  const getTranslatedText = (key, fallback) => {
    try {
      const translated = t(key);
      return translated === key ? fallback : translated;
    } catch {
      return fallback;
    }
  };

  if (!project.features || project.features.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl lg:text-2xl font-bold text-primary mb-6">
        {t('projects.main_features')}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {project.features.map((feature, index) => (
          <div 
            key={index}
            className="bg-primary bg-opacity-5 p-4 lg:p-6 rounded-lg border border-primary border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Feature content */}
              <div className="lg:col-span-1 space-y-3">
                <h3 className="font-bold text-primary text-lg lg:text-xl">
                  {getTranslatedText(`projects.${project.slug}.features.${index}.title`, feature.title)}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  {getTranslatedText(`projects.${project.slug}.features.${index}.description`, feature.description)}
                </p>
              </div>

              {/* Feature media */}
              <div className="lg:col-span-1">
                {feature.image && (
                  <div className="rounded-md overflow-hidden">
                    <FeatureImageModal image={feature.image} title={feature.title} />
                  </div>
                )}

                {feature.carousel && (
                  <div className="rounded-md overflow-hidden">
                    <ImageCarouselModal 
                      images={feature.carousel.map((img) => ({ url: img.src, alt: feature.title }))} 
                      title={feature.title} 
                    />
                  </div>
                )}

                {feature.video && (
                  <div className="rounded-md overflow-hidden">
                    <video 
                      src={feature.video} 
                      controls={!feature.autoplay} 
                      className="w-full h-auto" 
                      poster={feature.videoPoster || ""} 
                      preload="metadata" 
                      autoPlay={feature.autoplay || false} 
                      muted={feature.muted || false} 
                      loop={feature.loop || false} 
                      playsInline
                    >
                      {t('projects.video_not_supported')}
                    </video>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectFeatures;