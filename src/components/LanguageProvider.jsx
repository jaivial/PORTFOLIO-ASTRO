import { useState, useEffect } from 'react';
import { hasLanguageCookie, getCurrentLanguage } from '../utils/languageManager';
import LanguageSelectionModal from './LanguageSelectionModal';

export default function LanguageProvider({ children }) {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if language cookie exists
    const hasLangCookie = hasLanguageCookie();
    
    if (!hasLangCookie) {
      // Show modal if no language is set
      setShowLanguageModal(true);
    }
    
    setIsLoaded(true);
  }, []);

  const handleLanguageModalClose = () => {
    setShowLanguageModal(false);
  };

  // Don't render anything until we've checked for the cookie
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {children}
      {showLanguageModal && (
        <LanguageSelectionModal onClose={handleLanguageModalClose} />
      )}
    </>
  );
}