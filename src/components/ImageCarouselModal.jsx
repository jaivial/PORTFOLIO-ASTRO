import { useState } from "react";
import { Modal } from "rsuite";

// Import rsuite styles
import "rsuite/dist/rsuite.min.css";

// Estilos personalizados para el carousel modal de imágenes
const customStyles = `
  /* Estilos para el modal de imagen carousel */
  .image-carousel-modal-container .rs-modal-content {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
  
  .image-carousel-modal-container .rs-modal {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .image-carousel-modal-container .rs-modal-dialog {
    padding: 0;
  }
`;

export default function ImageCarouselModal({ images, title }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentImageIndex];

  // Determinar la URL de la imagen actual
  const imageSrc = typeof currentImage === "string" ? currentImage : currentImage.url || currentImage.src || (currentImage.default && currentImage.default.src) || "";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="image-carousel-container">
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      {/* Carousel de imágenes principal */}
      <div className="relative group">
        {/* Imagen principal */}
        <div onClick={openModal} className="cursor-pointer relative">
          <img src={imageSrc} alt={currentImage.alt || `${title} - Imagen ${currentImageIndex + 1}`} className="w-full h-auto object-cover rounded-lg" />
          {/* Overlay sutil para indicar que es clickeable */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
            <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Flechas de navegación - Solo mostrar si hay más de una imagen */}
        {images.length > 1 && (
          <>
            {/* Flecha anterior */}
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Imagen anterior">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flecha siguiente */}
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Imagen siguiente">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Indicador de posición */}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
            {currentImageIndex + 1} de {images.length}
          </div>
        )}
      </div>

      {/* Modal que muestra la imagen en grande con navegación */}
      <Modal open={isModalOpen} onClose={closeModal} className="image-carousel-modal-container" size="full" backdrop={true}>
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

          {/* Flechas de navegación en modal - Solo mostrar si hay más de una imagen */}
          {images.length > 1 && (
            <>
              {/* Flecha anterior en modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Flecha siguiente en modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition-all"
                aria-label="Imagen siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indicador de posición en modal */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
              {currentImageIndex + 1} de {images.length}
            </div>
          )}

          {/* Imagen ampliada centrada */}
          <div className="w-full max-w-6xl mx-auto h-auto flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={imageSrc} alt={currentImage.alt || `${title} - Imagen ${currentImageIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
          </div>
        </div>
      </Modal>
    </div>
  );
}
