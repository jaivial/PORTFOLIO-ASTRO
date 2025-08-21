import { useState, useEffect } from "react";
import CVViewer from "./CV/CVViewer";
import { openCVModal } from "../utils/cvUtils";
import { 
  getCurrentLanguage, 
  setCurrentLanguage, 
  AVAILABLE_LANGUAGES, 
  getLanguageInfo 
} from "../utils/languageManager";
import { useTranslations } from "../utils/translations";

function NavBar() {
  const [isIndexPage, setIsIndexPage] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true); // Will be updated based on page
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [currentLanguage, setCurrentLanguageState] = useState(() => {
    // Initialize with stored language immediately
    return typeof window !== 'undefined' ? getCurrentLanguage() : 'es';
  });
  // Keep track of requested language and section
  const [cvParams, setCvParams] = useState({ language: null, section: null });
  
  const t = useTranslations();

  useEffect(() => {
    // Check if we're on the index page
    const checkIndexPage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    setIsIndexPage(checkIndexPage);
    
    // Set initial visibility - hidden on index page, visible on other pages
    setIsNavVisible(!checkIndexPage);
    
    // Initialize current language
    const lang = getCurrentLanguage();
    setCurrentLanguageState(lang);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 150;

      if (checkIndexPage) {
        // On index page: show navbar when scrolling down, hide when at top
        if (scrollPosition > headerHeight) {
          setIsNavVisible(true);
        } else {
          setIsNavVisible(false);
        }
      }
      // On other pages: navbar is always visible (no change needed)

      // Close menu when scrolling to top
      if (scrollPosition <= headerHeight && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Click outside handler to close dropdowns
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsLanguageSelectorOpen(false);
      }
    };

    // Event listener para el scroll
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

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

    // Language change event listener
    const handleLanguageChange = (event) => {
      setCurrentLanguageState(event.detail.language);
    };

    document.addEventListener("open-cv-modal", handleOpenCVEvent);
    window.addEventListener("language-changed", handleLanguageChange);

    // Limpieza de event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("open-cv-modal", handleOpenCVEvent);
      window.removeEventListener("language-changed", handleLanguageChange);
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

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguage(languageCode);
    setIsLanguageSelectorOpen(false);
    setIsMenuOpen(false);
  };

  const toggleLanguageSelector = () => {
    setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
  };

  const currentLangInfo = getLanguageInfo(currentLanguage);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-500 ${
        isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <span className="text-primary font-bold text-xl">Jaime Digital Studio</span>
              </a>
            </div>

            {/* Language selector and hamburger container */}
            <div className="flex items-center gap-4">
              {/* Language selector */}
              <div className="relative language-selector">
                <button
                  onClick={toggleLanguageSelector}
                  className="flex items-center gap-2 text-primary hover:text-white transition-colors p-2 rounded-md hover:bg-gray-800"
                  aria-expanded={isLanguageSelectorOpen}
                  aria-label="Select language"
                >
                  <span className="text-lg">{currentLangInfo.flag}</span>
                  <span className="text-sm font-medium hidden sm:block">{currentLangInfo.code.toUpperCase()}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isLanguageSelectorOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language dropdown */}
                {isLanguageSelectorOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-1 z-50">
                    {Object.entries(AVAILABLE_LANGUAGES).map(([code, { name, flag }]) => (
                      <button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-left transition-colors ${
                          currentLanguage === code
                            ? 'bg-primary bg-opacity-10 text-primary'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <span className="text-lg">{flag}</span>
                        <span className="font-medium">{name}</span>
                        {currentLanguage === code && (
                          <svg className="ml-auto w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
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
        </div>

        {/* Side menu overlay - behind the menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 h-screen w-screen bg-black bg-opacity-75 z-40" 
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Side menu - full height with solid background */}
        <div className={`fixed top-0 right-0 h-screen w-80 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Full height solid background */}
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Menu content */}
          <div className="relative flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-black">
              <span className="text-primary font-bold text-xl">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-primary hover:text-white transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <div className="flex-1 p-4 space-y-2 bg-black">
              <a href="/" className="text-primary hover:bg-gray-800 flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span>{t('navigation.inicio')}</span>
              </a>
              <a href="/projects" className="text-primary hover:bg-gray-800 flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span>{t('navigation.proyectos')}</span>
              </a>
              <a href="/#about" className="text-primary hover:bg-gray-800 flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span>{t('navigation.sobre_mi')}</span>
              </a>
              <a href="/#contact" className="text-primary hover:bg-gray-800 flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                <span>{t('navigation.contacto')}</span>
              </a>
              <button onClick={handleOpenCV} className="w-full text-left text-primary hover:bg-gray-800 flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors">
                <span>{t('navigation.descargar_cv')}</span>
              </button>
              
              {/* Language selector */}
              <div className="border-t border-gray-700 mt-4 pt-4">
                <div className="px-3 py-2 text-primary text-sm font-medium">{t('navigation.idioma_language')}</div>
                <div className="space-y-1">
                  {Object.entries(AVAILABLE_LANGUAGES).map(([code, { name, flag }]) => (
                    <button
                      key={code}
                      onClick={() => handleLanguageChange(code)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium transition-colors ${
                        currentLanguage === code
                          ? 'bg-primary bg-opacity-20 text-primary'
                          : 'text-primary hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-lg">{flag}</span>
                      <span>{name}</span>
                      {currentLanguage === code && (
                        <svg className="ml-auto w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* CV Viewer Modal with parameters */}
      {isCVOpen && <CVViewer onClose={handleCloseCV} initialLanguage={cvParams.language} initialSection={cvParams.section} />}
    </>
  );
}

export default NavBar;
