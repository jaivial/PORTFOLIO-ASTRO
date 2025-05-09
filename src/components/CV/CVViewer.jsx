import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaArrowLeft, FaTimes, FaMoon, FaSun, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CVContent from "./CVContent";
import LanguageSelector from "./LanguageSelector";
import CVPdfDocument from "./CVPdfDocument";
import { pdf } from "@react-pdf/renderer";
import useCV from "../../hooks/useCV";

const CVViewer = ({ onClose, initialLanguage = null, initialSection = null }) => {
  const { language, data, activeSection, isPdfGenerating, changeLanguage, navigateToSection, startPdfGeneration, completePdfGeneration } = useCV(initialLanguage, initialSection);

  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);
  const [downloadError, setDownloadError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  // Effect para escuchar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // En pantallas grandes, mostrar siempre el sidebar
      if (!mobile && !showSidebar) {
        setShowSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showSidebar]);

  // Cerrar el sidebar al hacer clic fuera en dispositivos móviles
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && showSidebar && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Solo cerrar si no es el botón de toggle
        if (!event.target.closest('button[aria-label="Show sidebar"]') && !event.target.closest('button[aria-label="Hide sidebar"]')) {
          setShowSidebar(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, showSidebar]);

  // Control del overlay cuando el sidebar está abierto en móvil
  useEffect(() => {
    setOverlayVisible(isMobile && showSidebar);
  }, [isMobile, showSidebar]);

  // Section navigation items
  const sections = [
    { id: "personal", label: language === "en" ? "Personal" : "Personal", icon: "👤" },
    { id: "experience", label: language === "en" ? "Experience" : "Experiencia", icon: "💼" },
    { id: "education", label: language === "en" ? "Education" : "Educación", icon: "🎓" },
    { id: "skills", label: language === "en" ? "Skills" : "Habilidades", icon: "🛠️" },
    { id: "projects", label: language === "en" ? "Projects" : "Proyectos", icon: "🚀" },
    { id: "certifications", label: language === "en" ? "Certifications" : "Certificaciones", icon: "🏆" },
    { id: "interests", label: language === "en" ? "Interests" : "Intereses", icon: "⭐" },
  ];

  const handleScrollNav = (sectionId) => {
    navigateToSection(sectionId);
    // En pantallas pequeñas, cerrar la barra lateral después de seleccionar una sección
    if (isMobile) {
      setShowSidebar(false);
    }
  };

  // Función mejorada para generar y descargar el PDF directamente
  const handleDownloadPDF = async () => {
    try {
      startPdfGeneration();
      setDownloadError(null);

      // Crear el documento PDF con los datos actuales
      const pdfDoc = <CVPdfDocument data={{ ...data, language }} />;

      // Generar el blob del documento
      const blob = await pdf(pdfDoc).toBlob();

      // Crear un objeto URL para el blob
      const objectUrl = URL.createObjectURL(blob);

      // Crear un enlace temporal para la descarga
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${data.personal.name.replace(/\s+/g, "_")}_CV_${language.toUpperCase()}.pdf`;

      // Añadir el enlace al DOM, hacer clic para descargar y luego eliminar
      document.body.appendChild(link);
      link.click();

      // Limpieza
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl);
        completePdfGeneration();
      }, 100);
    } catch (error) {
      console.error("Error al generar o descargar el PDF:", error);
      setDownloadError(language === "en" ? "There was an error generating the PDF. Please try again." : "Hubo un error al generar el PDF. Por favor, inténtelo de nuevo.");
      completePdfGeneration();
    }
  };

  // Alternar modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Alternar barra lateral
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-2 xs:p-4 sm:p-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div className={`relative w-full max-w-7xl h-[95vh] xs:h-[92vh] max-h-[95vh] xs:max-h-[92vh] ${darkMode ? "bg-gray-900" : "bg-white"} shadow-2xl rounded-xl sm:rounded-2xl flex flex-col overflow-hidden`} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", damping: 20 }} onClick={(e) => e.stopPropagation()}>
          {/* Decorative gradient circles */}
          <div className="absolute top-0 left-0 w-56 h-56 bg-primary opacity-10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

          {/* Header with controls */}
          <div className={`p-2 sm:p-4 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"} border-b flex flex-col sm:flex-row sm:items-center sm:justify-between relative z-20 gap-2 sm:gap-0`}>
            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-1 xs:gap-2">
                <button onClick={onClose} className={`p-1.5 xs:p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"} sm:bg-transparent sm:p-0 flex items-center transition-colors`} aria-label="Back">
                  <FaArrowLeft className="text-sm xs:text-base sm:mr-2" />
                  <span className="hidden sm:inline">{language === "en" ? "Back" : "Volver"}</span>
                </button>

                <h1 className={`text-sm xs:text-base sm:text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"} truncate max-w-[180px] xs:max-w-[220px] sm:max-w-none`}>
                  {language === "en" ? "CV" : "CV"} - {data.personal.name}
                </h1>
              </div>

              {/* Mobile-only sidebar toggle */}
              <button onClick={toggleSidebar} className={`md:hidden p-1.5 xs:p-2 rounded-full ${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"}`} aria-label={showSidebar ? "Hide sidebar" : "Show sidebar"}>
                {showSidebar ? <FaChevronLeft /> : <FaChevronRight />}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              <div className="flex items-center gap-1 xs:gap-2">
                {/* Toggle dark mode */}
                <button onClick={toggleDarkMode} className={`p-1.5 xs:p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-200 text-gray-700"} transition-colors`} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
                  {darkMode ? <FaSun className="text-sm xs:text-base" /> : <FaMoon className="text-sm xs:text-base" />}
                </button>

                <LanguageSelector currentLanguage={language} onLanguageChange={changeLanguage} darkMode={darkMode} compact={window.innerWidth < 640} />
              </div>

              <div className="flex items-center gap-1 xs:gap-2">
                <button onClick={handleDownloadPDF} disabled={isPdfGenerating} className="inline-flex items-center px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-primary text-white rounded-lg text-xs xs:text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {isPdfGenerating ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-0.5 mr-1.5 h-3 w-3 xs:h-4 xs:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="hidden xs:inline sm:hidden">PDF...</span>
                      <span className="hidden sm:inline">{language === "en" ? "Generating..." : "Generando..."}</span>
                    </span>
                  ) : (
                    <>
                      <FaDownload className="mr-1 sm:mr-2 text-xs xs:text-sm" />
                      <span className="hidden xs:inline sm:hidden">PDF</span>
                      <span className="hidden sm:inline">{language === "en" ? "Download PDF" : "Descargar PDF"}</span>
                    </>
                  )}
                </button>

                {/* Close button */}
                <button onClick={onClose} className={`p-1.5 xs:p-2 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"} transition-colors`} aria-label="Close">
                  <FaTimes className="text-sm xs:text-base" />
                </button>
              </div>
            </div>

            {/* Error message for PDF generation */}
            {downloadError && <div className="w-full mt-2 p-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs xs:text-sm rounded-md">{downloadError}</div>}
          </div>

          {/* Main content area */}
          <div className="flex flex-grow overflow-hidden relative">
            {/* Mobile sidebar overlay */}
            {overlayVisible && <motion.div className="fixed inset-0 bg-black/40 z-10 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSidebar(false)} />}

            {/* Left sidebar navigation - collapsible on mobile */}
            <AnimatePresence>
              {showSidebar && (
                <motion.div
                  ref={sidebarRef}
                  className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"} border-r overflow-y-auto z-20 absolute md:relative h-full`}
                  initial={{
                    width: 0,
                    x: isMobile ? -250 : 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: isMobile ? 250 : "22rem",
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    width: 0,
                    x: isMobile ? -250 : 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-3 sm:p-4">
                    <nav className="mt-2">
                      <ul className="space-y-2">
                        {sections.map((section) => (
                          <li key={section.id}>
                            <button className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 transition-colors ${activeSection === section.id ? "bg-primary text-white font-medium shadow-md" : `hover:bg-gray-200 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700"}`}`} onClick={() => handleScrollNav(section.id)}>
                              <span className="text-base sm:text-lg">{section.icon}</span>
                              <span className="text-sm sm:text-base">{section.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main content with custom scrollbar */}
            <div
              ref={contentRef}
              className={`flex-grow p-3 xs:p-4 sm:p-6 md:p-8 overflow-y-auto ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: darkMode ? "#4B5563 #1F2937" : "#CBD5E0 #F3F4F6",
              }}
            >
              <CVContent data={data} activeSection={activeSection} darkMode={darkMode} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CVViewer;
