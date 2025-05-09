import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { careerData } from "../utils/career";

// Estilos adicionales para el componente
const customStyles = `
  .timeline-item-expanded {
    max-height: 1000px;
    transition: max-height 0.5s ease-in-out;
  }
  
  .timeline-item-collapsed {
    max-height: 100px;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
  }
  
  .timeline-hover-effect {
    transition: all 0.3s ease;
  }
  
  .timeline-hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(209, 213, 219, 0.1);
  }
  
  .skill-tag {
    display: inline-block;
    background-color: rgba(209, 213, 219, 0.1);
    color: #d1d5db;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    margin: 0.2rem;
    font-size: 0.75rem;
    transition: all 0.2s ease;
  }
  
  .skill-tag:hover {
    background-color: rgba(209, 213, 219, 0.2);
    transform: scale(1.05);
  }
  
  .timeline-connector {
    position: absolute;
    left: -25px;
    top: 50%;
    width: 25px;
    height: 1px;
    background-color: rgba(209, 213, 219, 0.3);
  }
  
  .timeline-dot {
    position: absolute;
    left: -35px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d1d5db;
    z-index: 10;
  }
  
  .timeline-dot-pulse {
    position: absolute;
    left: -35px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(209, 213, 219, 0.3);
    animation: pulse 2s infinite;
    z-index: 5;
  }
  
  @keyframes pulse {
    0% {
      transform: translateY(-50%) scale(1);
      opacity: 1;
    }
    70% {
      transform: translateY(-50%) scale(3);
      opacity: 0;
    }
    100% {
      transform: translateY(-50%) scale(1);
      opacity: 0;
    }
  }
`;

export default function TimelineInteractive() {
  // Obtenemos los datos de la trayectoria directamente del array careerData
  const timelineData = careerData;

  const [expandedItem, setExpandedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItems, setVisibleItems] = useState(timelineData);
  const timelineRef = useRef(null);

  // Filtrar elementos según búsqueda y filtros
  useEffect(() => {
    let filtered = timelineData;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((item) => item.title.toLowerCase().includes(term) || item.company.toLowerCase().includes(term) || item.description.toLowerCase().includes(term) || item.skills.some((skill) => skill.toLowerCase().includes(term)));
    }

    // Filtrar por categoría
    if (activeFilter !== "all") {
      filtered = filtered.filter((item) => {
        if (activeFilter === "desarrollo") {
          return item.skills.some((skill) => ["React", "JavaScript", "HTML/CSS", "TypeScript", "Node.js"].includes(skill));
        } else if (activeFilter === "marketing") {
          return item.skills.some((skill) => ["Marketing Digital", "SEO", "Redes Sociales", "Gestión de Contenido"].includes(skill));
        } else if (activeFilter === "education") {
          return item.category === "education";
        } else if (activeFilter === "project") {
          return item.category === "project";
        } else if (activeFilter === "job") {
          return item.category === "job";
        }
        return true;
      });
    }

    setVisibleItems(filtered);
  }, [searchTerm, activeFilter]);

  // Animar entrada al viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timeline-item-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, [visibleItems]);

  // Añado comprobación para mostrar imagen de placeholder si la imagen no está disponible
  const getImageUrl = (item) => {
    // Si la imagen no existe o es una ruta relativa, mostrar una imagen de placeholder
    if (!item.image || item.image === "/" || (typeof item.image === "string" && item.image.startsWith("../assets"))) {
      return "https://via.placeholder.com/800x450?text=Imagen+no+disponible";
    }
    return item.image;
  };

  return (
    <div ref={timelineRef} className="timeline-container w-full max-w-4xl mx-auto mt-12">
      <style>{customStyles}</style>

      {/* Filtros y Búsqueda */}
      <div className="timeline-controls flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="filter-buttons flex flex-wrap gap-2 justify-center sm:justify-start">
          <button onClick={() => setActiveFilter("all")} className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === "all" ? "bg-primary text-black font-medium" : "bg-primary bg-opacity-10 text-primary hover:bg-opacity-20"}`}>
            Todos
          </button>
          <button onClick={() => setActiveFilter("project")} className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === "project" ? "bg-primary text-black font-medium" : "bg-primary bg-opacity-10 text-primary hover:bg-opacity-20"}`}>
            Proyectos
          </button>
          <button onClick={() => setActiveFilter("job")} className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === "job" ? "bg-primary text-black font-medium" : "bg-primary bg-opacity-10 text-primary hover:bg-opacity-20"}`}>
            Trabajo
          </button>
          <button onClick={() => setActiveFilter("education")} className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === "education" ? "bg-primary text-black font-medium" : "bg-primary bg-opacity-10 text-primary hover:bg-opacity-20"}`}>
            Formación
          </button>
        </div>

        <div className="search-box relative mt-4 sm:mt-0">
          <input type="text" placeholder="Buscar experiencia o habilidad..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 pl-10 bg-primary bg-opacity-10 rounded-full text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30 w-full sm:w-64" />
          <svg className="absolute left-3 top-2.5 h-4 w-4 text-primary opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-content relative">
        {/* Línea vertical */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary bg-opacity-20"></div>

        <AnimatePresence>
          {visibleItems.length > 0 ? (
            visibleItems.map((item, index) => (
              <motion.div key={item.id} className="timeline-item relative ml-10 mb-10" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                {/* Elemento visual de tiempo */}
                <div className="timeline-dot"></div>
                <div className="timeline-dot-pulse"></div>
                <div className="timeline-connector"></div>

                {/* Tarjeta principal */}
                <div className={`timeline-card bg-primary bg-opacity-5 border border-primary border-opacity-10 rounded-lg p-5 cursor-pointer timeline-hover-effect ${expandedItem === item.id ? "ring-2 ring-primary ring-opacity-20" : ""}`} onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {item.role} • {item.period}
                      </p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-200 text-sm inline-block mt-1" onClick={(e) => e.stopPropagation()}>
                        {item.company}
                      </a>
                    </div>
                    <span className="text-primary opacity-70">
                      {expandedItem === item.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-2">{item.description}</p>

                  {/* Sección de habilidades */}
                  <div className="skills-container mt-3 flex flex-wrap">
                    {item.skills.map((skill, idx) => (
                      <Tooltip key={idx} placement="top" content={`Experiencia en ${skill}`}>
                        <span className="skill-tag">{skill}</span>
                      </Tooltip>
                    ))}
                  </div>

                  {/* Contenido expandido */}
                  <AnimatePresence>
                    {expandedItem === item.id && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="expanded-content mt-4 pt-4 border-t border-primary border-opacity-10">
                        {/* Imagen del proyecto si existe */}
                        {item.image && (
                          <div className="mb-4 rounded-md overflow-hidden">
                            <img src={getImageUrl(item)} alt={item.title} className="w-full h-auto object-cover rounded-md" />
                          </div>
                        )}

                        {/* Localización */}
                        {item.location && (
                          <div className="flex items-center gap-2 text-gray-400 mb-3">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{item.location}</span>
                          </div>
                        )}

                        {/* Detalles adicionales */}
                        {item.details && <p className="text-gray-400 mb-3">{item.details}</p>}

                        <h4 className="text-primary font-medium mb-2">Aspectos destacados:</h4>
                        <ul className="list-disc list-inside text-gray-400">
                          {item.highlights.map((highlight, idx) => (
                            <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: idx * 0.1 }} className="mb-1">
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Enlace al proyecto */}
                        {item.link && item.link !== "/" && (
                          <div className="mt-4">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-lg hover:bg-opacity-20 transition-all" onClick={(e) => e.stopPropagation()}>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Visitar {item.category === "project" ? "proyecto" : item.category === "education" ? "institución" : "empresa"}
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 text-gray-400">
              <svg className="mx-auto h-12 w-12 text-gray-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                No se encontraron resultados para <span className="text-primary">"{searchTerm}"</span>
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="mt-2 text-indigo-300 hover:text-indigo-200"
              >
                Restablecer filtros
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
