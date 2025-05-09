import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ProjectDetail = ({ projectData }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  // Si no hay datos de proyecto, mostrar un mensaje
  if (!projectData) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-400">No se encontró información del proyecto.</p>
      </div>
    );
  }

  // Para la animación de scroll
  useEffect(() => {
    if (containerRef.current && isExpanded) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [isExpanded]);

  // Función para formatear las tecnologías como badges
  const renderTechBadges = (tech = []) => {
    return tech.map((item, index) => (
      <motion.span key={index} className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm inline-block m-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
        {item}
      </motion.span>
    ));
  };

  // Tabs para mostrar diferentes secciones del proyecto
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-4">
            <p className="text-gray-400 mb-6">{projectData.description || "Sin descripción disponible."}</p>

            {projectData.link && (
              <a href={projectData.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Ver sitio web
              </a>
            )}
          </motion.div>
        );

      case "features":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-4">
            {projectData.features && projectData.features.length > 0 ? (
              <div className="space-y-6">
                {projectData.features.map((feature, index) => (
                  <motion.div key={index} className="bg-primary bg-opacity-5 p-4 rounded-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <h3 className="font-bold text-primary text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-3">{feature.description}</p>

                    {feature.image && (
                      <div className="mb-3 rounded-md overflow-hidden">
                        <img src={feature.image} alt={feature.title} className="w-full h-auto" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No hay funcionalidades destacadas para mostrar.</p>
            )}
          </motion.div>
        );

      case "technologies":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-4">
            <h3 className="text-primary font-semibold mb-4">Tecnologías utilizadas</h3>
            <div className="flex flex-wrap">{projectData.tech && projectData.tech.length > 0 ? renderTechBadges(projectData.tech) : <p className="text-gray-400">No hay información sobre tecnologías utilizadas.</p>}</div>
          </motion.div>
        );

      case "gallery":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-4">
            {projectData.images && projectData.images.length > 0 ? (
              <div className="rounded-lg overflow-hidden">
                <Swiper modules={[Navigation, Pagination, EffectFade, Autoplay]} spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} effect="fade" autoplay={{ delay: 3000, disableOnInteraction: false }} className="project-swiper">
                  {projectData.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-video">
                        <img src={image.url || image} alt={image.alt || `Imagen ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <p className="text-gray-400">No hay imágenes disponibles para este proyecto.</p>
            )}
          </motion.div>
        );

      default:
        return <p className="text-gray-400 py-4">Selecciona una pestaña para ver más información.</p>;
    }
  };

  return (
    <div ref={containerRef} className="project-detail-container mt-8">
      {/* Imagen principal del proyecto */}
      <motion.div className="project-image-container rounded-lg overflow-hidden relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src={projectData.image} alt={projectData.name} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-white text-2xl md:text-3xl font-bold">{projectData.name}</h2>
          <p className="text-gray-300 mt-1">{projectData.subtitle || projectData.category}</p>
        </div>
      </motion.div>

      {/* Tabs de navegación */}
      <div className="mt-6 border-b border-primary border-opacity-20">
        <div className="flex overflow-x-auto space-x-4 pb-2">
          <button onClick={() => setActiveTab("overview")} className={`px-4 py-2 whitespace-nowrap transition-all ${activeTab === "overview" ? "text-primary font-medium border-b-2 border-primary" : "text-gray-400 hover:text-primary"}`}>
            Resumen
          </button>
          <button onClick={() => setActiveTab("features")} className={`px-4 py-2 whitespace-nowrap transition-all ${activeTab === "features" ? "text-primary font-medium border-b-2 border-primary" : "text-gray-400 hover:text-primary"}`}>
            Funcionalidades
          </button>
          <button onClick={() => setActiveTab("technologies")} className={`px-4 py-2 whitespace-nowrap transition-all ${activeTab === "technologies" ? "text-primary font-medium border-b-2 border-primary" : "text-gray-400 hover:text-primary"}`}>
            Tecnologías
          </button>
          <button onClick={() => setActiveTab("gallery")} className={`px-4 py-2 whitespace-nowrap transition-all ${activeTab === "gallery" ? "text-primary font-medium border-b-2 border-primary" : "text-gray-400 hover:text-primary"}`}>
            Galería
          </button>
        </div>
      </div>

      {/* Contenido de la pestaña activa */}
      <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>

      {/* Botón para expandir/colapsar */}
      {projectData.longDescription && (
        <div className="mt-4">
          <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-all">
            {isExpanded ? "Ver menos" : "Ver más detalles"}
            <svg className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="mt-4 bg-primary bg-opacity-5 p-4 rounded-lg">
                <p className="text-gray-400 whitespace-pre-line">{projectData.longDescription}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
