import { useState, useEffect } from 'react';
import { hasLanguageStorage, getCurrentLanguage } from '../utils/languageManager';
import LanguageSelectionModal from './LanguageSelectionModal';

function LanguageProvider({ children }) {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if language is stored in localStorage
    const hasLangStorage = hasLanguageStorage();
    
    if (!hasLangStorage) {
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

export default LanguageProvider;