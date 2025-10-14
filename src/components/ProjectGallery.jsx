import React from 'react';
import { useTranslations } from '../utils/translations';
import ImageCarouselModal from './ImageCarouselModal.jsx';
import VideoCarouselModal from './VideoCarouselModal.jsx';

function ProjectGallery({ project }) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      {/* Videos section with modal */}
      {project.videos && project.videos.length > 0 && (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 lg:p-8 rounded-xl border border-gray-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <h2 className="text-xl lg:text-2xl font-bold text-white">
              {t('projects.project_videos')}
            </h2>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <VideoCarouselModal videos={project.videos} title={project.title} />
          </div>
        </div>
      )}

      {/* Image gallery */}
      {project.images && project.images.length > 0 && (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 lg:p-8 rounded-xl border border-gray-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
            <h2 className="text-xl lg:text-2xl font-bold text-white">
              {t('projects.image_gallery')}
            </h2>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <ImageCarouselModal images={project.images} title={project.title} projectSlug={project.slug} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;