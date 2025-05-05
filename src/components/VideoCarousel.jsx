import { useState, useRef, useEffect } from "react";
import { Carousel } from "rsuite";
import { Player } from "video-react";

// Import rsuite styles
import "rsuite/dist/rsuite.min.css";
// Import video-react styles
import "video-react/dist/video-react.css";

export default function VideoCarousel({ videos, className = "", height = "h-auto md:h-auto", width = "w-full", carouselStyle = {} }) {
  const playerRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Estilos personalizados específicos para este carrusel
  const customStyles = `
    #${carouselId} .rs-carousel-slider-item {
      padding: 0 !important;
    }
    #${carouselId} .rs-carousel {
      background-color: transparent !important;
    }
    /* Ajustes para video-react dentro del carrusel */
    #${carouselId} .video-container .video-react {
      width: 100%;
      height: 100%;
    }
    #${carouselId} .video-container .video-react-video {
      object-fit: contain;
    }
  `;

  return (
    <div id={carouselId} className={`relative overflow-hidden rounded-lg shadow-lg ${width} ${className}`}>
      {/* Estilos personalizados */}
      <style>{customStyles}</style>

      <div className={`relative ${height}`} style={carouselStyle}>
        <Carousel className="h-full custom-carousel" autoplay={false} activeIndex={activeIndex} onSelect={handleSelect} shape="bar" style={{ objectFit: "cover !important" }}>
          {videos.map((video, index) => (
            <div key={index} className="w-full h-full flex items-center justify-center video-container">
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
    </div>
  );
}
