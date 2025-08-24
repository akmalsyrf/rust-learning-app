import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => Promise<void>;
  isLanguageChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isLanguageChanging, setIsLanguageChanging] = useState<boolean>(false);

  // Load saved language from storage on app start
  useEffect(() => {
    const loadSavedLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('userLanguage');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
          setCurrentLanguage(savedLanguage);
          await i18n.changeLanguage(savedLanguage);
        }
      } catch (error) {
        console.error('Failed to load saved language:', error);
      }
    };

    loadSavedLanguage();
  }, [i18n]);

  // Change language function
  const changeLanguage = async (language: string) => {
    if (language === currentLanguage) return;

    setIsLanguageChanging(true);
    try {
      // Change i18n language
      await i18n.changeLanguage(language);

      // Update state
      setCurrentLanguage(language);

      // Save to storage
      await AsyncStorage.setItem('userLanguage', language);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsLanguageChanging(false);
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    isLanguageChanging,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
