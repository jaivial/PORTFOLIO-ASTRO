import { useState } from "preact/hooks";

// Estilos personalizados para el modal nativo
const customStyles = `
  .feature-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.2s ease-out;
  }

  .feature-modal-content {
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

  .feature-modal-close {
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

  .feature-modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default function FeatureImageModal({ image, title, projectSlug }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determinar la URL de la imagen
  const imgSrc =
    typeof image === "string"
      ? image
      : image.src || (image.default && image.default.src) || "";

  // Determinar si la imagen es un SVG
  const isSvg = imgSrc.endsWith('.svg');

  // Determinar el estilo de altura según el proyecto
  const getImageClassName = () => {
    if (projectSlug === "hero-budget") {
      const baseClasses = "h-auto object-contain max-[500px]:w-full min-[500px]:h-[70vh] min-[500px]:w-auto";
      if (isSvg) {
        return `${baseClasses} bg-white p-4 rounded-lg`;
      }
      return baseClasses;
    }
    return "w-full h-auto object-cover";
  };

  const getContainerClassName = () => {
    if (projectSlug === "hero-budget") {
      return "cursor-pointer flex justify-center items-center";
    }
    return "cursor-pointer";
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style>{customStyles}</style>

      <div className="feature-image-container">
        <div onClick={openModal} className={getContainerClassName()}>
          <img src={imgSrc} alt={title} className={getImageClassName()} />
        </div>

        {isModalOpen && (
          <div className="feature-modal-overlay" onClick={closeModal}>
            <div className="feature-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="feature-modal-close" onClick={closeModal} aria-label="Cerrar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={imgSrc} alt={title} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
