import { useState, useRef, useEffect } from "react";
import { Carousel, Modal } from "rsuite";
import { Player } from "video-react";

// Import rsuite styles
import "rsuite/dist/rsuite.min.css";
// Import video-react styles
import "video-react/dist/video-react.css";

// Estilos personalizados para rsuite carousel y modal
const customStyles = `
  .rs-carousel-slider-item {
    padding: 0 !important;
    background-color: transparent !important;
  }
  .rs-carousel {
    background-color: transparent !important;
  }
  
  /* Estilos para el modal de video */
  .video-modal-container .rs-modal-content {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
  }
  
  .video-modal-container .rs-modal {
    max-width: 90vw;
    max-height: 90vh;
  }
  
  .video-modal-container .rs-modal-dialog {
    padding: 0;
  }
  
  .video-modal-container .video-react {
    width: 100%;
    height: 100%;
  }
`;

export default function VideoCarousel({ videos, className = "", height = "h-auto md:h-auto", width = "w-full", carouselStyle = {} }) {
  const playerRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const carouselId = `video-carousel-${Math.random().toString(36).substr(2, 9)}`;

  // Si no hay videos, no mostrar nada
  if (!videos || videos.length === 0) {
    return <div className="text-gray-400 py-4">No hay videos disponibles</div>;
  }

  // Pausar todos los videos excepto el actual cuando cambia el índice
  useEffect(() => {
    playerRefs.current.forEach((player, index) => {
      if (player && index !== activeIndex) {
        // Acceder al API del player para pausar
        if (player.actions && player.actions.pause) {
          player.actions.pause();
        }
      }
    });
  }, [activeIndex]);

  // Manejar el cambio de slide
  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  // Función para abrir el modal
  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id={carouselId} className={`relative overflow-hidden rounded-lg shadow-lg ${width} ${className}`}>
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      <div className={`relative ${height}`} style={carouselStyle}>
        <Carousel className="h-full custom-carousel" autoplay={false} activeIndex={activeIndex} onSelect={handleSelect} shape="bar" style={{ objectFit: "cover !important" }}>
          {videos.map((video, index) => (
            <div key={index} className="w-full h-full flex items-center justify-center video-container cursor-pointer" onClick={() => openModal(index)}>
              <Player
                ref={(player) => (playerRefs.current[index] = player)}
                poster={video.poster || ""}
                src={video.url}
                playsInline
                fluid={false}
                width="100%"
                height="100%"
                onPlay={() => {
                  // Cuando un video se reproduce, actualizar el índice activo
                  if (activeIndex !== index) {
                    setActiveIndex(index);
                  }
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal de visualización rsuite */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videos={videos} initialIndex={modalIndex} playerRefs={playerRefs} />
    </div>
  );
}

// Componente Modal para visualización de videos
function VideoModal({ isOpen, onClose, videos, initialIndex, playerRefs }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const modalPlayerRefs = useRef([]);

  // Efecto para actualizar el índice actual cuando cambia initialIndex
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Siguiente video
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  // Video anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  // Pausar todos los videos en el carrusel principal cuando se abre el modal
  useEffect(() => {
    if (isOpen && playerRefs && playerRefs.current) {
      playerRefs.current.forEach((player) => {
        if (player && player.actions && player.actions.pause) {
          player.actions.pause();
        }
      });
    }
  }, [isOpen, playerRefs]);

  // Auto reproducir el video actual en el modal cuando está abierto
  useEffect(() => {
    if (isOpen && modalPlayerRefs.current[currentIndex]) {
      const currentPlayer = modalPlayerRefs.current[currentIndex];
      if (currentPlayer && currentPlayer.actions && currentPlayer.actions.play) {
        // Pequeño timeout para dar tiempo a que se monte completamente
        setTimeout(() => {
          currentPlayer.actions.play();
        }, 300);
      }
    }
  }, [isOpen, currentIndex]);

  return (
    <Modal open={isOpen} onClose={onClose} className="video-modal-container" size="full" backdrop={true}>
      <div className="relative w-full h-full bg-black bg-opacity-90 flex items-center justify-center" onClick={onClose}>
        {/* Botón de cierre */}
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

        {/* Video reproductor dentro del modal - centrado */}
        <div className="w-full max-w-5xl mx-auto h-auto flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <Carousel className="h-full w-full" autoplay={false} activeIndex={currentIndex} onSelect={(index) => setCurrentIndex(index)} shape="bar">
            {videos.map((video, index) => (
              <div key={index} className="flex items-center justify-center h-full">
                <Player ref={(player) => (modalPlayerRefs.current[index] = player)} poster={video.poster || ""} src={video.url} playsInline fluid={true} width="100%" height="auto" className="max-w-full max-h-[80vh]" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Controles de navegación personalizados */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none z-10"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Video anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none z-10"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Video siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Modal>
  );
}
