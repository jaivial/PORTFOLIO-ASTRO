import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronRight, FaCheck } from "react-icons/fa";
import { useTranslations } from "../../utils/translations";

const LanguageSelector = ({ currentLanguage, onLanguageChange, darkMode, compact = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const t = useTranslations();

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (code) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className={`flex items-center px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg text-xs xs:text-sm ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} transition-colors`} aria-label={t('cv.viewer.select_language')}>
        <span className="mr-1.5 text-base">{currentLang.flag}</span>
        {!compact && <span className="hidden xs:inline">{currentLang.code.toUpperCase()}</span>}
        {isMobile ? <FaChevronRight className={`ml-1 xs:ml-2 text-xs transition-transform ${isOpen ? "rotate-90" : ""}`} /> : <FaChevronDown className={`ml-1 xs:ml-2 text-xs transition-transform ${isOpen ? "rotate-180" : ""}`} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { opacity: 0, x: -10, y: 0 } : { opacity: 0, y: -10, x: 0 }}
            animate={isMobile ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, y: 0, x: 0 }}
            exit={isMobile ? { opacity: 0, x: -10, y: 0 } : { opacity: 0, y: -10, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`${isMobile ? "absolute left-full ml-2 top-0" : "absolute right-0 mt-1"} w-32 rounded-md shadow-lg ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} z-50`}
          >
            <ul className="py-1">
              {languages.map((language) => (
                <li key={language.code}>
                  <button onClick={() => handleSelect(language.code)} className={`w-full text-left px-3 py-2 text-xs xs:text-sm flex items-center ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"} ${currentLanguage === language.code ? (darkMode ? "bg-gray-700" : "bg-gray-100") : ""}`}>
                    <span className="mr-2 text-base">{language.flag}</span>
                    <span>{language.label}</span>
                    {currentLanguage === language.code && <FaCheck className="ml-auto text-primary" />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
