import { useState, useRef, useEffect } from "react";
import { Carousel, Modal, Button } from "rsuite";
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
  const playerRefs = useRef({}).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const carouselId = `video-carousel-${Math.random().toString(36).substr(2, 9)}`;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Si no hay videos, no mostrar nada
  if (!videos || videos.length === 0) {
    return <div className="text-gray-400 py-4">No hay videos disponibles</div>;
  }

  // Pausar todos los videos excepto el actual cuando cambia el índice
  useEffect(() => {
    Object.values(playerRefs).forEach((player) => {
      if (player && activeIndex !== Object.keys(playerRefs).findIndex((key) => player === playerRefs[key])) {
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

  // Función para cambiar al video anterior
  const handlePrevVideo = () => {
    const newIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
  };

  // Función para cambiar al siguiente video
  const handleNextVideo = () => {
    const newIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
  };

  // Función para cambiar a un video específico por su índice
  const handleVideoIndicatorClick = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

  // Toggle para reproducir/pausar el video actual
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Efecto para actualizar isPlaying cuando el video cambia de estado
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

      // Autoplay si está configurado para el video actual
      const currentVideo = videos[currentVideoIndex];
      if (currentVideo && currentVideo.autoplay) {
        videoElement.autoplay = true;
        videoElement.muted = currentVideo.muted || false;
        videoElement.loop = currentVideo.loop || false;
        videoElement.play().catch((e) => console.log("Autoplay prevented:", e));
        setIsPlaying(true);
      }

      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [currentVideoIndex, videos]);

  const currentVideo = videos[currentVideoIndex];

  // Comprobar si el video actual tiene propiedades de autoplay
  const hasAutoplayFeatures = (video) => {
    return video && (video.autoplay || video.loop || video.muted);
  };

  return (
    <div id={carouselId} className={`relative overflow-hidden rounded-lg shadow-lg ${width} ${className}`}>
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      <div className={`relative ${height}`} style={carouselStyle}>
        <Carousel className="h-full custom-carousel" autoplay={false} activeIndex={activeIndex} onSelect={handleSelect} shape="bar" style={{ objectFit: "cover !important" }}>
          {videos.map((video, index) => {
            // Si este video tiene propiedades especiales, lo renderizamos como un video autoplay
            if (hasAutoplayFeatures(video)) {
              return (
                <div key={index} className="w-full h-full flex items-center justify-center video-container cursor-pointer" onClick={() => openModal(index)}>
                  <Player
                    ref={(player) => (playerRefs[index] = player)}
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
              );
            }

            // Renderizado estándar para videos normales
            return (
              <div key={index} className="w-full h-full flex items-center justify-center video-container cursor-pointer" onClick={() => openModal(index)}>
                <Player
                  ref={(player) => (playerRefs[index] = player)}
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
            );
          })}
        </Carousel>
      </div>

      {/* Modal de visualización rsuite */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videos={videos} initialIndex={modalIndex} playerRefs={playerRefs} />

      <div className="relative rounded-md overflow-hidden bg-black">
        <div className="relative aspect-video w-full overflow-hidden">
          <video ref={videoRef} src={currentVideo.url} className="w-full h-full object-contain" poster={currentVideo.poster} preload="metadata" onClick={togglePlay} autoPlay={currentVideo.autoplay || false} muted={currentVideo.muted || false} loop={currentVideo.loop || false}></video>
        </div>

        {/* Controles del video */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying && (
            <button onClick={togglePlay} className="p-4 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-75 transition-all" aria-label="Reproducir video">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        {/* Navegación entre videos */}
        {videos.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex justify-between items-center">
              <button onClick={handlePrevVideo} className="p-2 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-75 transition-all" aria-label="Video anterior">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              <div className="flex space-x-2">
                {videos.map((_, index) => (
                  <button key={index} onClick={() => handleVideoIndicatorClick(index)} className={`w-3 h-3 rounded-full ${index === currentVideoIndex ? "bg-primary" : "bg-gray-400 bg-opacity-50"}`} aria-label={`Ver video ${index + 1}`} aria-current={index === currentVideoIndex ? "true" : "false"} />
                ))}
              </div>

              <button onClick={handleNextVideo} className="p-2 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-75 transition-all" aria-label="Siguiente video">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente Modal para visualización de videos
function VideoModal({ isOpen, onClose, videos, initialIndex, playerRefs }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    // Si está abierto, pausar todos los videos
    if (isOpen) {
      Object.values(playerRefs).forEach((player) => {
        if (player && player.pause) {
          player.pause();
        }
      });
    }
  }, [isOpen, playerRefs]);

  // Función para navegar entre videos
  const goToVideo = (index) => {
    const newIndex = (index + videos.length) % videos.length;
    setCurrentIndex(newIndex);
  };

  return (
    <Modal open={isOpen} onClose={onClose} size="lg" backdrop="static">
      <Modal.Header>
        <Modal.Title>Video {currentIndex + 1}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video src={videos[currentIndex].url} poster={videos[currentIndex].poster} controls className="w-full h-auto" autoPlay>
          Tu navegador no soporta la reproducción de videos.
        </video>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-between w-full">
          <Button onClick={() => goToVideo(currentIndex - 1)} appearance="primary" disabled={videos.length <= 1}>
            Anterior
          </Button>
          <div className="flex space-x-2">
            {videos.map((_, index) => (
              <div key={index} className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-gray-400"}`} onClick={() => goToVideo(index)} />
            ))}
          </div>
          <Button onClick={() => goToVideo(currentIndex + 1)} appearance="primary" disabled={videos.length <= 1}>
            Siguiente
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
