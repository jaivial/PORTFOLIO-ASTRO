import { useState } from "preact/hooks";

// Estilos personalizados para el carousel modal de video nativo
const customStyles = `
  .video-carousel-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.2s ease-out;
  }

  .video-carousel-modal-content {
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
    animation: scaleIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .video-carousel-modal-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .video-carousel-modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .video-carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    z-index: 10;
  }

  .video-carousel-nav:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .video-carousel-nav.prev {
    left: -60px;
  }

  .video-carousel-nav.next {
    right: -60px;
  }

  .video-carousel-counter {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    .video-carousel-nav.prev {
      left: 10px;
    }
    .video-carousel-nav.next {
      right: 10px;
    }
  }
`;

export default function VideoCarouselModal({ videos, title }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!videos || videos.length === 0) return null;

  const currentVideo = videos[currentVideoIndex];

  const videoSrc = typeof currentVideo === "string" ? currentVideo : currentVideo.url || currentVideo.src || (currentVideo.default && currentVideo.default.src) || "";

  const posterSrc = typeof currentVideo === "string" ? "" : currentVideo.poster || currentVideo.poster?.src || (currentVideo.poster?.default && currentVideo.poster?.default.src) || "";

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style>{customStyles}</style>

      <div className="video-carousel-container">
        <div className="relative group">
          <div onClick={openModal} className="cursor-pointer relative">
            <video src={videoSrc} poster={posterSrc} className="w-full h-auto object-cover rounded-lg" preload="metadata" muted />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
              <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {videos.length > 1 && (
            <>
              <button onClick={prevVideo} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Video anterior">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextVideo} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Video siguiente">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                {currentVideoIndex + 1} de {videos.length}
              </div>
            </>
          )}
        </div>

        {isModalOpen && (
          <div className="video-carousel-modal-overlay" onClick={closeModal}>
            <div className="video-carousel-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="video-carousel-modal-close" onClick={closeModal} aria-label="Cerrar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {videos.length > 1 && (
                <>
                  <button onClick={prevVideo} className="video-carousel-nav prev" aria-label="Video anterior">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={nextVideo} className="video-carousel-nav next" aria-label="Video siguiente">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <video src={videoSrc} poster={posterSrc} controls autoPlay className="max-w-full max-h-[85vh] object-contain rounded-lg" preload="metadata">
                Tu navegador no soporta la reproducción de videos.
              </video>

              {videos.length > 1 && (
                <div className="video-carousel-counter">
                  {currentVideoIndex + 1} de {videos.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
