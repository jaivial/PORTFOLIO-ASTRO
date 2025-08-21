import { useState } from 'react';
import { AVAILABLE_LANGUAGES, setCurrentLanguage, getBrowserLanguage } from '../utils/languageManager';

export default function LanguageSelectionModal({ onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState(getBrowserLanguage());

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  const handleConfirm = () => {
    setCurrentLanguage(selectedLanguage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full mx-4 border border-gray-700 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">🌍 Selecciona tu idioma</h2>
          <p className="text-gray-300 text-sm">Choose your language / Wähle deine Sprache</p>
        </div>

        <div className="space-y-3 mb-8">
          {Object.entries(AVAILABLE_LANGUAGES).map(([code, { name, flag }]) => (
            <button
              key={code}
              onClick={() => handleLanguageSelect(code)}
              className={`w-full flex items-center p-4 rounded-lg border transition-all duration-200 ${
                selectedLanguage === code
                  ? 'border-primary bg-primary bg-opacity-10 text-primary'
                  : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span className="text-2xl mr-4">{flag}</span>
              <span className="font-medium text-lg">{name}</span>
              {selectedLanguage === code && (
                <svg
                  className="ml-auto w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
          >
            Confirmar
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Puedes cambiar el idioma en cualquier momento desde el menú superior
        </p>
      </div>
    </div>
  );
}