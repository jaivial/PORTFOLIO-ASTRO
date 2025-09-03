import { useState, useCallback, useEffect } from 'react';
import cvData from '../data/cvData';
import { getCurrentLanguage, setCurrentLanguage } from '../utils/languageManager';

export default function useCV(initialLanguage = null, initialSection = null) {
    // Use the provided initial values if available, otherwise use localStorage language
    const getInitialLanguage = () => {
        if (initialLanguage) return initialLanguage;
        const storedLanguage = getCurrentLanguage();
        // Ensure the stored language is supported by CV
        return ['en', 'es', 'de'].includes(storedLanguage) ? storedLanguage : 'en';
    };
    
    const [language, setLanguage] = useState(getInitialLanguage());
    const [activeSection, setActiveSection] = useState(initialSection || 'personal');
    const [isPdfGenerating, setIsPdfGenerating] = useState(false);

    // Set initial values when props change
    useEffect(() => {
        if (initialLanguage && (initialLanguage === 'en' || initialLanguage === 'es' || initialLanguage === 'de')) {
            setLanguage(initialLanguage);
        }

        if (initialSection) {
            setActiveSection(initialSection);
            // Wait for component to mount before scrolling
            setTimeout(() => {
                const element = document.getElementById(`cv-section-${initialSection}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [initialLanguage, initialSection]);

    // Listen for site language changes and sync CV language
    useEffect(() => {
        const handleLanguageChange = (event) => {
            const newLanguage = event.detail.language;
            if (['en', 'es', 'de'].includes(newLanguage)) {
                setLanguage(newLanguage);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('language-changed', handleLanguageChange);
            return () => window.removeEventListener('language-changed', handleLanguageChange);
        }
    }, []);

    // Get the CV data in the current language
    const data = cvData[language];

    // Toggle between English, Spanish and German
    const toggleLanguage = useCallback(() => {
        setLanguage(prev => {
            if (prev === 'en') return 'es';
            if (prev === 'es') return 'de';
            return 'en';
        });
    }, []);

    // Set language directly and sync with global language state
    const changeLanguage = useCallback((lang) => {
        if (lang === 'en' || lang === 'es' || lang === 'de') {
            setCurrentLanguage(lang); // This will trigger the global language-changed event
        }
    }, []);

    // Handle section navigation
    const navigateToSection = useCallback((section) => {
        setActiveSection(section);
        // Scroll to the section if needed
        const element = document.getElementById(`cv-section-${section}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    // Start PDF generation process
    const startPdfGeneration = useCallback(() => {
        setIsPdfGenerating(true);
    }, []);

    // Complete PDF generation process
    const completePdfGeneration = useCallback(() => {
        setIsPdfGenerating(false);
    }, []);

    return {
        language,
        data,
        activeSection,
        isPdfGenerating,
        toggleLanguage,
        changeLanguage,
        navigateToSection,
        startPdfGeneration,
        completePdfGeneration,
    };
} 