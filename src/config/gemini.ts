import Constants from 'expo-constants';

export const GEMINI_CONFIG = {
  // For development/testing, you can set your API key directly here
  // For production, use environment variables
  API_KEY: Constants.expoConfig?.extra?.env?.GEMINI_API_KEY || null,

  // Model configuration
  MODEL: 'gemini-2.5-pro',

  // Default settings
  DEFAULT_QUESTION_COUNT: 5,
  DEFAULT_DIFFICULTY: 'advanced' as const,

  // Available topics for AI Quiz
  AVAILABLE_TOPICS: [
    'Ownership & Borrowing',
    'Lifetimes',
    'Async/Await',
    'Macros',
    'Unsafe Code',
    'Concurrency',
    'Error Handling',
    'Generics',
    'Traits',
    'Memory Management',
    'Performance',
  ],

  // Topic translations
  TOPIC_TRANSLATIONS: {
    en: {
      'Ownership & Borrowing': 'Ownership & Borrowing',
      Lifetimes: 'Lifetimes',
      'Async/Await': 'Async/Await',
      Macros: 'Macros',
      'Unsafe Code': 'Unsafe Code',
      Concurrency: 'Concurrency',
      'Error Handling': 'Error Handling',
      Generics: 'Generics',
      Traits: 'Traits',
      'Memory Management': 'Memory Management',
      Performance: 'Performance',
    },
    id: {
      'Ownership & Borrowing': 'Kepemilikan & Peminjaman',
      Lifetimes: 'Lifetimes',
      'Async/Await': 'Async/Await',
      Macros: 'Macros',
      'Unsafe Code': 'Kode Unsafe',
      Concurrency: 'Konkurensi',
      'Error Handling': 'Penanganan Error',
      Generics: 'Generics',
      Traits: 'Traits',
      'Memory Management': 'Manajemen Memori',
      Performance: 'Performa',
    },
  },
};

// Helper function to check if API key is configured
export const isGeminiConfigured = (): boolean => {
  return GEMINI_CONFIG.API_KEY !== null && GEMINI_CONFIG.API_KEY.length > 0;
};

// Helper function to get API key with fallback message
export const getGeminiApiKey = (): string | null => {
  if (!isGeminiConfigured()) {
    console.warn(
      'Gemini API key not configured. Please set GEMINI_API_KEY in your environment variables.'
    );
    return null;
  }
  return GEMINI_CONFIG.API_KEY;
};

// Helper function to translate topic names
export const translateTopic = (topic: string, language: 'en' | 'id'): string => {
  const translations = GEMINI_CONFIG.TOPIC_TRANSLATIONS[language];
  return (translations as any)[topic] || topic;
};

// Helper function to get available topics in specific language
export const getAvailableTopics = (language: 'en' | 'id'): string[] => {
  return GEMINI_CONFIG.AVAILABLE_TOPICS.map(topic => translateTopic(topic, language));
};
