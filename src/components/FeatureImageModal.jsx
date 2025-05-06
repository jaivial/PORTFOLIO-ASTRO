import { useState } from "react";
import { Modal } from "rsuite";

// Import rsuite styles
import "rsuite/dist/rsuite.min.css";

// Estilos personalizados para el modal
const customStyles = `
  /* Estilos para el modal */
  .feature-modal-container .rs-modal-content {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
  
  .feature-modal-container .rs-modal {
    max-width: 90vw;
    max-height: 90vh;
  }
  
  .feature-modal-container .rs-modal-dialog {
    padding: 0;
  }
`;

export default function FeatureImageModal({ image, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determinar la URL de la imagen
  const imgSrc =
    typeof image === "string"
      ? image // Si es una ruta de imagen directa (string)
      : image.src || (image.default && image.default.src) || ""; // Si es un objeto de Astro u otro tipo de objeto

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="feature-image-container">
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      {/* Imagen en miniatura que activa el modal */}
      <div onClick={openModal} className="cursor-pointer">
        <img src={imgSrc} alt={title} className="w-full h-auto object-cover" />
      </div>

      {/* Modal que muestra la imagen en grande */}
      <Modal open={isModalOpen} onClose={closeModal} className="feature-modal-container" size="full" backdrop={true}>
        <div className="relative w-full h-full bg-black bg-opacity-90 flex items-center justify-center" onClick={closeModal}>
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

          {/* Imagen ampliada centrada */}
          <div className="w-full max-w-5xl mx-auto h-auto flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={imgSrc} alt={title} className="max-w-full max-h-[80vh] object-contain" />
          </div>
        </div>
      </Modal>
    </div>
  );
}
