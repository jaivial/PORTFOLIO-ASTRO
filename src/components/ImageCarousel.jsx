import { useState } from "react";
import { Carousel, Modal } from "rsuite";

// Import rsuite styles
import "rsuite/dist/rsuite.min.css";

// Estilos personalizados para rsuite carousel
const customStyles = `
  .rs-carousel-slider-item {
    padding: 0 !important;
    background-color: transparent !important;
  }
  .rs-carousel {
    background-color: transparent !important;
  }
  
  /* Estilos para el modal */
  .modal-container .rs-modal-content {
    background-color: transparent;
    box-shadow: none;
  }
  
  .modal-container .rs-modal {
    max-width: 90vw;
    max-height: 90vh;
  }
  
  .modal-container .rs-modal-dialog {
    padding: 0;
  }
`;

export default function ImageCarousel({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Si no hay imágenes, no mostrar nada
  if (!images || images.length === 0) {
    return <div className="text-gray-400 py-4">No hay imágenes disponibles</div>;
  }

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
        <Carousel className="h-full custom-carousel" autoplay={false} shape="bar">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full" onClick={() => openModal(index)}>
              <img src={image.url} alt={image.alt || `Imagen ${index + 1}`} className="w-full h-full object-cover md:object-cover object-center cursor-pointer" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal de visualización rsuite */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} images={images} initialIndex={modalIndex} />
    </div>
  );
}

// Componente Modal para visualización de imágenes
function ImageModal({ isOpen, onClose, images, initialIndex }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="modal-container" full backdrop={true}>
      <div className="relative w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
        {/* Botón de cierre */}
        <button className="absolute right-4 top-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all" onClick={onClose} aria-label="Cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Carousel dentro del modal - centrado */}
        <div className="w-full max-w-5xl mx-auto h-[80vh] flex items-center justify-center">
          <Carousel className="h-full w-full" autoplay={false} activeIndex={currentIndex} onSelect={(index) => setCurrentIndex(index)} shape="bar">
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center h-full">
                <img src={image.url} alt={image.alt || `Imagen ${index + 1}`} className="max-w-full max-h-[80vh] object-contain" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Controles de navegación personalizados */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none z-10" onClick={prevSlide} aria-label="Imagen anterior">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none z-10" onClick={nextSlide} aria-label="Imagen siguiente">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Modal>
  );
}
