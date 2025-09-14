// Internationalization (i18n) Core System
// Shared i18n functionality for all pages

class I18nCore {
    constructor() {
        this.currentLanguage = 'en'; // Default to English
        this.translations = {};
    }

    // Detect browser language
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        
        // Check if browser language starts with 'en' (English)
        if (browserLang.toLowerCase().startsWith('en')) {
            return 'en';
        }
        // Check if browser language starts with 'es' (Spanish)  
        else if (browserLang.toLowerCase().startsWith('es')) {
            return 'es';
        }
        // Default to English for other languages
        else {
            return 'en';
        }
    }

    // Load translation data
    loadTranslations(translationData) {
        this.translations = translationData;
    }

    // Initialize i18n system
    init(translationData) {
        this.loadTranslations(translationData);
        
        // Always auto-detect browser language
        const detectedLang = this.detectBrowserLanguage();
        this.currentLanguage = detectedLang;
        
        console.log('Browser language:', navigator.language);
        console.log('Detected language:', detectedLang);
        console.log('Using language:', this.currentLanguage);
        
        // Update page content immediately
        this.updatePageContent();
    }

    // Helper function to get nested property (supports array notation)
    getNestedValue(obj, path) {
        if (!obj || !path) return null;
        
        const parts = path.split('.');
        return parts.reduce((current, part) => {
            if (!current) return null;
            
            // Check if this part has array notation
            const arrayMatch = part.match(/^(.+)\[(\d+)\]$/);
            if (arrayMatch) {
                const prop = arrayMatch[1];
                const index = parseInt(arrayMatch[2]);
                return current[prop] ? current[prop][index] : null;
            } else {
                return current[part];
            }
        }, obj);
    }

    // Update all page content with translations
    updatePageContent() {
        const t = this.translations[this.currentLanguage];
        if (!t) {
            console.warn(`Translations not found for language: ${this.currentLanguage}`);
            return;
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update page title if translation exists
        if (t.meta && t.meta.title) {
            document.title = t.meta.title;
        }
        
        // Update all elements with data-i18n attributes
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedValue(t, key);
            
            if (translation) {
                // Handle different element types
                if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    // For other input types, don't change value but could handle labels
                    return; // Use return instead of continue in forEach
                } else {
                    element.innerHTML = translation;
                }
            } else {
                console.warn(`Translation not found for key: ${key} in language: ${this.currentLanguage}`);
            }
        });
        
        // Update all elements with data-i18n-placeholder attributes
        const elementsWithPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
        elementsWithPlaceholder.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getNestedValue(t, key);
            
            if (translation) {
                element.placeholder = translation;
            } else {
                console.warn(`Placeholder translation not found for key: ${key} in language: ${this.currentLanguage}`);
            }
        });

        // Update all elements with data-i18n-title attributes (for tooltips)
        const elementsWithTitle = document.querySelectorAll('[data-i18n-title]');
        elementsWithTitle.forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.getNestedValue(t, key);
            
            if (translation) {
                element.title = translation;
            }
        });

        // Update all elements with data-i18n-alt attributes (for images)
        const elementsWithAlt = document.querySelectorAll('[data-i18n-alt]');
        elementsWithAlt.forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            const translation = this.getNestedValue(t, key);
            
            if (translation) {
                element.alt = translation;
            }
        });

        console.log(`Page content updated to ${this.currentLanguage}`);
    }

    // Get translation for a specific key
    t(key) {
        const translation = this.getNestedValue(this.translations[this.currentLanguage], key);
        if (!translation) {
            console.warn(`Translation not found for key: ${key} in language: ${this.currentLanguage}`);
            return key; // Return the key if translation not found
        }
        return translation;
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Switch language manually (for testing or future language switcher)
    switchLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updatePageContent();
        } else {
            console.warn(`Language not supported: ${lang}`);
        }
    }
}

// Create global i18n instance
window.i18n = new I18nCore();