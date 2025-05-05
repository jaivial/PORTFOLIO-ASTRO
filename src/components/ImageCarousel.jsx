import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Si no hay imágenes, no mostrar nada
  if (!images || images.length === 0) {
    return <div className="text-gray-400 py-4">No hay imágenes disponibles</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {/* Carousel container con aspect-ratio fijo */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
        {images.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => openModal(currentIndex)}>
            <img src={image.url} alt={image.alt || `Imagen ${index + 1}`} className="w-full h-full object-contain md:object-cover object-center cursor-pointer" />
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none" onClick={prevSlide} aria-label="Imagen anterior">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none" onClick={nextSlide} aria-label="Imagen siguiente">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"}`} aria-label={`Ir a imagen ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Modal de visualización */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} images={images} initialIndex={modalIndex} />
    </div>
  );
}

// Componente Modal para visualización de imágenes
function ImageModal({ isOpen, onClose, images, initialIndex }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Función simplificada para manejar clics en el fondo oscuro
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={handleBackdropClick}>
      {/* Contenedor principal de la imagen y controles - también detecta clics en áreas vacías */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto flex flex-col" onClick={handleBackdropClick}>
        {/* Cerrar modal */}
        <button
          className="absolute right-4 top-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenedor de imágenes - permite propagación en áreas vacías */}
        <div className="flex-1 overflow-hidden relative">
          {images.map((image, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <img src={image.url} alt={image.alt || `Imagen ${index + 1}`} className="w-full h-full object-contain" onClick={(e) => e.stopPropagation()} />
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Imagen anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Imagen siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"}`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
