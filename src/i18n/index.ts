import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

// Import language resources
import en from './locales/en';
import id from './locales/id';

// Get device locale
const deviceLocale = getLocales()[0];
const defaultLanguage = deviceLocale.languageCode === 'id' ? 'id' : 'en';

// Language resources
const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

// i18n configuration
i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage, // Default language
  fallbackLng: 'en', // Fallback to English if translation missing
  debug: __DEV__, // Enable debug in development

  interpolation: {
    escapeValue: false, // React already escapes values
  },

  // Language detection
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },

  // React i18next options
  react: {
    useSuspense: false, // Disable suspense for React Native
  },
});

export default i18n;

// Export context and hook
export { LanguageProvider, useLanguage } from './context/LanguageContext';
