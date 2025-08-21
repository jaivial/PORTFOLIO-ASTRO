export const AVAILABLE_LANGUAGES = {
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
};

export const DEFAULT_LANGUAGE = 'es';

export const LANGUAGE_STORAGE_KEY = 'site-language';

export function setLocalStorage(key, value) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(key, value);
    console.log('🔧 localStorage SET:', key, '=', value);
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
}

export function getLocalStorage(key) {
  if (typeof localStorage === 'undefined') return null;
  try {
    const value = localStorage.getItem(key);
    console.log('📖 localStorage GET:', key, '=', value);
    return value;
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return null;
  }
}

export function removeLocalStorage(key) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Failed to remove from localStorage:', error);
  }
}

export function getCurrentLanguage() {
  const storedLang = getLocalStorage(LANGUAGE_STORAGE_KEY);
  const currentLang = storedLang || DEFAULT_LANGUAGE;
  console.log('🌐 getCurrentLanguage() returning:', currentLang);
  return currentLang;
}

export function setCurrentLanguage(languageCode) {
  console.log('🔄 setCurrentLanguage() called with:', languageCode);
  
  if (languageCode in AVAILABLE_LANGUAGES) {
    setLocalStorage(LANGUAGE_STORAGE_KEY, languageCode);
    
    // Trigger language change event
    if (typeof window !== 'undefined') {
      console.log('📢 Dispatching language-changed event for:', languageCode);
      window.dispatchEvent(new CustomEvent('language-changed', { 
        detail: { language: languageCode } 
      }));
    }
    return true;
  }
  console.warn('❌ Invalid language code:', languageCode, '- Available languages:', Object.keys(AVAILABLE_LANGUAGES));
  return false;
}

export function hasLanguageStorage() {
  return getLocalStorage(LANGUAGE_STORAGE_KEY) !== null;
}

export function getLanguageInfo(languageCode) {
  return AVAILABLE_LANGUAGES[languageCode] || AVAILABLE_LANGUAGES[DEFAULT_LANGUAGE];
}

export function getBrowserLanguage() {
  if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;
  
  const browserLang = navigator.language || navigator.languages[0];
  const langCode = browserLang.split('-')[0];
  
  return AVAILABLE_LANGUAGES[langCode] ? langCode : DEFAULT_LANGUAGE;
}