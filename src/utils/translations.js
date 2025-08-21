import { useState, useEffect } from 'react';
import { getCurrentLanguage } from './languageManager';

// Import all language files
import esTranslations from '../languages/es.json';
import enTranslations from '../languages/en.json';
import deTranslations from '../languages/de.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
  de: deTranslations
};

export function t(key, replacements = {}) {
  const currentLang = getCurrentLanguage();
  const langTranslations = translations[currentLang] || translations.es;
  
  // Navigate through nested keys (e.g., "navigation.inicio")
  const keys = key.split('.');
  let value = langTranslations;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  
  // Fallback to Spanish if translation not found
  if (value === undefined) {
    value = translations.es;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
  }
  
  // If still not found, return the key
  if (value === undefined) {
    console.warn(`Translation not found for key: ${key}`);
    return key;
  }
  
  // Replace placeholders like {count}, {total}
  let result = value;
  Object.entries(replacements).forEach(([placeholder, replacement]) => {
    result = result.replace(new RegExp(`{${placeholder}}`, 'g'), replacement);
  });
  
  return result;
}

export function useTranslation() {
  const currentLang = getCurrentLanguage();
  
  return {
    t,
    currentLanguage: currentLang,
    isLoading: false
  };
}

// Proper React hook for translations
export function useTranslations() {
  // Initialize with client-side language if available, fallback to 'es'
  const getInitialLanguage = () => {
    if (typeof window !== 'undefined') {
      return getCurrentLanguage();
    }
    return 'es'; // Server-side fallback
  };
  
  const [currentLang, setCurrentLang] = useState(getInitialLanguage);
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  
  console.log('🔤 useTranslations hook initialized with language:', currentLang);
  
  useEffect(() => {
    // Force client-side language loading after component mount to ensure sync
    const storedLang = getCurrentLanguage();
    console.log('🔃 Client-side language loading:', storedLang);
    if (storedLang !== currentLang) {
      setCurrentLang(storedLang);
    }
    setIsClientLoaded(true);
    
    const handleLanguageChange = (event) => {
      if (event.detail && event.detail.language) {
        console.log('🔄 useTranslations received language change:', event.detail.language);
        setCurrentLang(event.detail.language);
      }
    };
    
    window.addEventListener('language-changed', handleLanguageChange);
    
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
    };
  }, []);
  
  const translateFunction = (key, replacements = {}) => {
    const langTranslations = translations[currentLang] || translations.es;
    console.log('🔤 Translating key:', key, 'with language:', currentLang);
    
    // Navigate through nested keys (e.g., "navigation.inicio")
    const keys = key.split('.');
    let value = langTranslations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    // Fallback to Spanish if translation not found
    if (value === undefined) {
      value = translations.es;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }
    
    // If still not found, return the key
    if (value === undefined) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
    
    // Replace placeholders like {count}, {total}
    let result = value;
    Object.entries(replacements).forEach(([placeholder, replacement]) => {
      result = result.replace(new RegExp(`{${placeholder}}`, 'g'), replacement);
    });
    
    console.log('🔤 Translation result for', key, ':', result);
    return result;
  };
  
  return translateFunction;
}

// Non-hook version for use outside React components
export function getTranslationFunction() {
  return function(key, replacements = {}) {
    const currentLang = getCurrentLanguage();
    const langTranslations = translations[currentLang] || translations.es;
    
    // Navigate through nested keys (e.g., "navigation.inicio")
    const keys = key.split('.');
    let value = langTranslations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    // Fallback to Spanish if translation not found
    if (value === undefined) {
      value = translations.es;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }
    
    // If still not found, return the key
    if (value === undefined) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
    
    // Replace placeholders like {count}, {total}
    let result = value;
    Object.entries(replacements).forEach(([placeholder, replacement]) => {
      result = result.replace(new RegExp(`{${placeholder}}`, 'g'), replacement);
    });
    
    return result;
  };
}