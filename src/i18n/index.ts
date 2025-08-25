import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en';
import id from './locales/id';

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Get device locale
const deviceLocale = getLocales()[0];
const defaultLanguage = deviceLocale.languageCode === 'id' ? 'id' : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
  },
  lng: defaultLanguage,
  fallbackLng: 'en',
  debug: isDevelopment,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// Export context and hook
export { LanguageProvider, useLanguage } from './context/LanguageContext';
