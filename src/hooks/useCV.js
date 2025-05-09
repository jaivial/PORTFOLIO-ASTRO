import { useState, useCallback, useEffect } from 'react';
import cvData from '../data/cvData';

export default function useCV(initialLanguage = null, initialSection = null) {
    // Use the provided initial values if available, otherwise defaults
    const [language, setLanguage] = useState(initialLanguage || 'en');
    const [activeSection, setActiveSection] = useState(initialSection || 'personal');
    const [isPdfGenerating, setIsPdfGenerating] = useState(false);

    // Set initial values when props change
    useEffect(() => {
        if (initialLanguage && (initialLanguage === 'en' || initialLanguage === 'es')) {
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

    // Get the CV data in the current language
    const data = cvData[language];

    // Toggle between English and Spanish
    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    }, []);

    // Set language directly
    const changeLanguage = useCallback((lang) => {
        if (lang === 'en' || lang === 'es') {
            setLanguage(lang);
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