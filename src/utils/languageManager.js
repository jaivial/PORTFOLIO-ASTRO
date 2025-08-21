export const AVAILABLE_LANGUAGES = {
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
};

export const DEFAULT_LANGUAGE = 'es';

export const LANGUAGE_COOKIE_NAME = 'site-language';
export const LANGUAGE_COOKIE_EXPIRES = 365; // days

export function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

export function getCookie(name) {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function getCurrentLanguage() {
  return getCookie(LANGUAGE_COOKIE_NAME) || DEFAULT_LANGUAGE;
}

export function setCurrentLanguage(languageCode) {
  if (languageCode in AVAILABLE_LANGUAGES) {
    setCookie(LANGUAGE_COOKIE_NAME, languageCode, LANGUAGE_COOKIE_EXPIRES);
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('language-changed', { 
      detail: { language: languageCode } 
    }));
    return true;
  }
  return false;
}

export function hasLanguageCookie() {
  return getCookie(LANGUAGE_COOKIE_NAME) !== null;
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