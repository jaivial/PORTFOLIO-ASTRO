import { useState } from "react";
import { Modal } from "rsuite";

// Import rsuite styles
import "rsuite/dist/rsuite.min.css";

// Estilos personalizados para el carousel modal de video
const customStyles = `
  /* Estilos para el modal de video carousel */
  .video-carousel-modal-container .rs-modal-content {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
  
  .video-carousel-modal-container .rs-modal {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .video-carousel-modal-container .rs-modal-dialog {
    padding: 0;
  }
`;

export default function VideoCarouselModal({ videos, title }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!videos || videos.length === 0) return null;

  const currentVideo = videos[currentVideoIndex];

  // Determinar la URL del video actual
  const videoSrc = typeof currentVideo === "string" ? currentVideo : currentVideo.url || currentVideo.src || (currentVideo.default && currentVideo.default.src) || "";

  // Determinar la URL del poster
  const posterSrc = typeof currentVideo === "string" ? "" : currentVideo.poster || currentVideo.poster?.src || (currentVideo.poster?.default && currentVideo.poster?.default.src) || "";

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="video-carousel-container">
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      {/* Carousel de videos principal */}
      <div className="relative group">
        {/* Video principal */}
        <div onClick={openModal} className="cursor-pointer relative">
          <video src={videoSrc} poster={posterSrc} className="w-full h-auto object-cover rounded-lg" preload="metadata" muted />
          {/* Overlay con icono de play */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
            <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Flechas de navegación - Solo mostrar si hay más de un video */}
        {videos.length > 1 && (
          <>
            {/* Flecha anterior */}
            <button onClick={prevVideo} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Video anterior">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flecha siguiente */}
            <button onClick={nextVideo} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Video siguiente">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Indicador de posición */}
        {videos.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
            {currentVideoIndex + 1} de {videos.length}
          </div>
        )}
      </div>

      {/* Modal que muestra el video en grande con navegación */}
      <Modal open={isModalOpen} onClose={closeModal} className="video-carousel-modal-container" size="full" backdrop={true}>
        <div className="relative w-full h-full bg-black bg-opacity-95 flex items-center justify-center" onClick={closeModal}>
          {/* Botón de cierre */}
          <button
            className="absolute right-4 top-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flechas de navegación en modal - Solo mostrar si hay más de un video */}
          {videos.length > 1 && (
            <>
              {/* Flecha anterior en modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevVideo();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all"
                aria-label="Video anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Flecha siguiente en modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextVideo();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all"
                aria-label="Video siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indicador de posición en modal */}
          {videos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
              {currentVideoIndex + 1} de {videos.length}
            </div>
          )}

          {/* Video ampliado centrado */}
          <div className="w-full max-w-6xl mx-auto h-auto flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <video src={videoSrc} poster={posterSrc} controls autoPlay className="max-w-full max-h-[85vh] object-contain rounded-lg" preload="metadata">
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
        </div>
      </Modal>
    </div>
  );
}
