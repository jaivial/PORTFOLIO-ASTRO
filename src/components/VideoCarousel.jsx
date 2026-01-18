import { useState, useRef, useEffect } from "preact/hooks";

// Estilos personalizados
const customStyles = `
  .video-carousel-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .video-carousel-nav {
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

  .video-carousel-nav:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .video-carousel-nav.prev {
    left: 10px;
  }

  .video-carousel-nav.next {
    right: 10px;
  }

  .video-carousel-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s;
  }

  .video-carousel-indicator.active {
    background: var(--primary);
  }

  .video-carousel-indicator.inactive {
    background: rgba(156, 163, 175, 0.5);
  }
`;

export default function VideoCarousel({ videos, className = "", height = "h-auto md:h-auto", width = "w-full", carouselStyle = {} }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  if (!videos || videos.length === 0) {
    return <div className="text-gray-400 py-4">No hay videos disponibles</div>;
  }

  const currentVideo = videos[currentVideoIndex];

  const handlePrevVideo = () => {
    const newIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
  };

  const handleNextVideo = () => {
    const newIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
  };

  const handleVideoIndicatorClick = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(false);
  };

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

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToVideo = (index) => {
    const newIndex = (index + videos.length) % videos.length;
    setModalIndex(newIndex);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

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

  return (
    <>
      <style>{customStyles}</style>

      <div className={`relative overflow-hidden rounded-lg shadow-lg ${width} ${className}`}>
        <div className={`relative ${height}`} style={carouselStyle}>
          {videos.map((video, index) => (
            <div key={index} className={`w-full h-full flex items-center justify-center video-container cursor-pointer ${index === activeIndex ? 'block' : 'hidden'}`} onClick={() => openModal(index)}>
              <video
                src={video.url}
                poster={video.poster || ""}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => {
                  if (activeIndex !== index) {
                    setActiveIndex(index);
                  }
                }}
              />
            </div>
          ))}
        </div>

        <div className="relative rounded-md overflow-hidden bg-black mt-4">
          <div className="relative aspect-video w-full overflow-hidden">
            <video
              ref={videoRef}
              src={currentVideo.url}
              className="w-full h-full object-contain"
              poster={currentVideo.poster}
              preload="metadata"
              onClick={togglePlay}
              autoPlay={currentVideo.autoplay || false}
              muted={currentVideo.muted || false}
              loop={currentVideo.loop || false}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && (
              <button onClick={togglePlay} className="p-4 rounded-full bg-primary bg-opacity-50 hover:bg-opacity-75 transition-all" aria-label="Reproducir video">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>

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
                    <button
                      key={index}
                      onClick={() => handleVideoIndicatorClick(index)}
                      className={`video-carousel-indicator ${index === currentVideoIndex ? 'active' : 'inactive'}`}
                      aria-label={`Ver video ${index + 1}`}
                      aria-current={index === currentVideoIndex ? "true" : "false"}
                    />
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

      {isModalOpen && (
        <div className="video-modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }} onClick={closeModal}>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <video
              src={videos[modalIndex].url}
              poster={videos[modalIndex].poster}
              controls
              autoPlay
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            >
              Tu navegador no soporta la reproducción de videos.
            </video>

            {videos.length > 1 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', padding: '0 16px' }}>
                <button onClick={() => goToVideo(modalIndex - 1)} style={{ padding: '8px 16px', borderRadius: '4px', background: 'var(--primary)', color: 'black', border: 'none', cursor: 'pointer' }}>
                  Anterior
                </button>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToVideo(index)}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: index === modalIndex ? 'var(--primary)' : 'rgba(156, 163, 175, 0.5)',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
                <button onClick={() => goToVideo(modalIndex + 1)} style={{ padding: '8px 16px', borderRadius: '4px', background: 'var(--primary)', color: 'black', border: 'none', cursor: 'pointer' }}>
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
