/**
 * CV Utilities
 * Helper functions to interact with the CV viewer from anywhere in the application
 */

/**
 * Opens the CV modal viewer through a custom event
 * This can be called from any component to show the CV modal
 */
export const openCVModal = () => {
    // Create and dispatch a custom event to open the CV modal
    const event = new CustomEvent('open-cv-modal');
    document.dispatchEvent(event);
};

/**
 * Opens the CV modal with a specific language pre-selected
 * @param {string} language - The language to show ("en" or "es")
 */
export const openCVModalWithLanguage = (language) => {
    // Create a custom event with language data
    const event = new CustomEvent('open-cv-modal', {
        detail: { language }
    });
    document.dispatchEvent(event);
};

/**
 * Opens the CV modal and navigates to a specific section
 * @param {string} section - The section ID to navigate to (e.g., "experience", "skills")
 * @param {string} language - Optional language to use ("en" or "es")
 */
export const openCVModalToSection = (section, language = null) => {
    // Create a custom event with section and optional language data
    const event = new CustomEvent('open-cv-modal', {
        detail: {
            section,
            language
        }
    });
    document.dispatchEvent(event);
}; 