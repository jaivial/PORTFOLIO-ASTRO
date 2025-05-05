import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {/* Carousel container */}
      <div className="relative h-72 md:h-96">
        {images.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <img src={image.url} alt={image.alt || `Imagen ${index + 1}`} className="w-full h-full object-cover object-center" />
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
    </div>
  );
}
