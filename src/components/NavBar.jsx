import { useState, useEffect } from "react";
import CVViewer from "./CV/CVViewer";
import { openCVModal } from "../utils/cvUtils";

export default function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  // Keep track of requested language and section
  const [cvParams, setCvParams] = useState({ language: null, section: null });

  useEffect(() => {
    const handleScroll = () => {
      // Aparecer después de pasar la sección del header (ajustar valor según sea necesario)
      const scrollPosition = window.scrollY;
      const headerHeight = 150; // Ajustar según la altura real del header

      if (scrollPosition > headerHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
        // Cerrar el menú si está abierto y volvemos arriba
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };

    // Event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Event listener mejorado para abrir el CV desde cualquier parte de la aplicación
    const handleOpenCVEvent = (event) => {
      setIsCVOpen(true);

      // Check if we have additional parameters (language, section)
      if (event.detail) {
        const { language, section } = event.detail;
        setCvParams({ language, section });
      } else {
        // Reset parameters if none provided
        setCvParams({ language: null, section: null });
      }
    };

    document.addEventListener("open-cv-modal", handleOpenCVEvent);

    // Limpieza de event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("open-cv-modal", handleOpenCVEvent);
    };
  }, [isMenuOpen]);

  const handleOpenCV = () => {
    setIsCVOpen(true);
    setIsMenuOpen(false);
    // Reset parameters when opened directly from navbar
    setCvParams({ language: null, section: null });
  };

  const handleCloseCV = () => {
    setIsCVOpen(false);
    // Reset parameters when closed
    setCvParams({ language: null, section: null });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-500 ${isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <span className="text-primary font-bold text-xl">Jaime Digital Studio</span>
              </a>
            </div>

            {/* Hamburger button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary focus:outline-none" aria-expanded={isMenuOpen} aria-label="Toggle navigation menu">
              {isMenuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden bg-black bg-opacity-90`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
            <a href="/projects" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </a>
            <a href="/#about" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Sobre Mi
            </a>
            <a href="/#contact" className="text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
            <button onClick={handleOpenCV} className="w-full text-left text-primary hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Descargar CV
            </button>
          </div>
        </div>
      </nav>

      {/* CV Viewer Modal with parameters */}
      {isCVOpen && <CVViewer onClose={handleCloseCV} initialLanguage={cvParams.language} initialSection={cvParams.section} />}
    </>
  );
}
