import { useState } from "preact/hooks";

// Estilos personalizados para el carousel modal nativo
const customStyles = `
  .image-carousel-modal-overlay {
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

  .image-carousel-modal-content {
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

  .image-carousel-modal-close {
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

  .image-carousel-modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .image-carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    z-index: 10;
  }

  .image-carousel-nav:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .image-carousel-nav.prev {
    left: -60px;
  }

  .image-carousel-nav.next {
    right: -60px;
  }

  .image-carousel-counter {
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
    .image-carousel-nav.prev {
      left: 10px;
    }
    .image-carousel-nav.next {
      right: 10px;
    }
  }
`;

export default function ImageCarouselModal({ images, title, projectSlug }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentImageIndex];

  const imageSrc = typeof currentImage === "string" ? currentImage : currentImage.url || currentImage.src || (currentImage.default && currentImage.default.src) || "";

  const getImageClassName = () => {
    if (projectSlug === "hero-budget") {
      return "h-auto object-contain rounded-lg max-[500px]:w-full min-[500px]:h-[70vh] min-[500px]:w-auto";
    }
    return "w-full h-auto object-cover rounded-lg";
  };

  const getImageContainerClassName = () => {
    if (projectSlug === "hero-budget") {
      return "cursor-pointer relative flex justify-center items-center";
    }
    return "cursor-pointer relative";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style>{customStyles}</style>

      <div className="image-carousel-container">
        <div className="relative group">
          <div onClick={openModal} className={getImageContainerClassName()}>
            <img src={imageSrc} alt={currentImage.alt || `${title} - Imagen ${currentImageIndex + 1}`} className={getImageClassName()} />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Imagen anterior">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100" aria-label="Imagen siguiente">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                {currentImageIndex + 1} de {images.length}
              </div>
            </>
          )}
        </div>

        {isModalOpen && (
          <div className="image-carousel-modal-overlay" onClick={closeModal}>
            <div className="image-carousel-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-carousel-modal-close" onClick={closeModal} aria-label="Cerrar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="image-carousel-nav prev" aria-label="Imagen anterior">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={nextImage} className="image-carousel-nav next" aria-label="Imagen siguiente">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <img src={imageSrc} alt={currentImage.alt || `${title} - Imagen ${currentImageIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg" />

              {images.length > 1 && (
                <div className="image-carousel-counter">
                  {currentImageIndex + 1} de {images.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
