import { t } from './translations.js';

// Function to translate elements with data-translate attribute
export function initTranslations() {
  if (typeof document === 'undefined') return;
  
  const translateElements = () => {
    console.log('🔄 Translating elements with data-translate attributes');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate');
      const replacements = {};
      
      // Check for replacement attributes
      const replaceKeys = Array.from(element.attributes)
        .filter(attr => attr.name.startsWith('data-replace-'))
        .map(attr => ({
          key: attr.name.replace('data-replace-', ''),
          value: attr.value
        }));
      
      replaceKeys.forEach(({ key, value }) => {
        replacements[key] = value;
      });
      
      const translatedText = t(key, replacements);
      console.log('🔤 Translating element:', key, '->', translatedText);
      element.textContent = translatedText;
    });
  };
  
  // Wait for DOM and localStorage to be ready
  const initializeWhenReady = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', translateElements);
    } else {
      // Use requestAnimationFrame to ensure everything is settled
      requestAnimationFrame(translateElements);
    }
  };
  
  // Initialize
  initializeWhenReady();
  
  // Re-translate when language changes
  window.addEventListener('language-changed', translateElements);
  
  return translateElements;
}

// Function to get translated text for use in Astro components
export function getTranslation(key, replacements = {}) {
  return t(key, replacements);
}

// Re-export translation function for easier access
export { t };