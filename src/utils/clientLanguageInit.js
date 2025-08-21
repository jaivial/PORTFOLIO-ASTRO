import { getCurrentLanguage, hasLanguageStorage, DEFAULT_LANGUAGE } from './languageManager.js';
import { initTranslations } from './astroTranslations.js';

// Initialize client-side language handling
export function initClientLanguage() {
  if (typeof document === 'undefined') return;

  // Get the current language from localStorage or default
  const currentLang = getCurrentLanguage();
  
  // Set the lang attribute on the HTML element for accessibility and CSS targeting
  document.documentElement.lang = currentLang;
  
  // Initialize translations immediately if we have a stored language
  if (hasLanguageStorage()) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initTranslations();
    }, 10);
  }
  
  // Listen for language changes and update HTML lang attribute
  window.addEventListener('language-changed', (event) => {
    if (event.detail && event.detail.language) {
      document.documentElement.lang = event.detail.language;
      // Re-run translations for dynamic content
      initTranslations();
    }
  });
  
  console.log('Client language initialized:', currentLang, 'Has storage:', hasLanguageStorage());
}

// Auto-initialize when the DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClientLanguage);
  } else {
    initClientLanguage();
  }
}