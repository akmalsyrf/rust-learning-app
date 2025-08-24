# Internationalization (i18n) Setup Guide

## Overview

This guide explains how to set up and use internationalization (i18n) in the Rust Learning App for English and Indonesian languages.

## Features

- ✅ **Dual Language Support**: English (en) and Indonesian (id)
- ✅ **Automatic Language Detection**: Based on device locale
- ✅ **Persistent Language Selection**: Saved to AsyncStorage
- ✅ **Context-based Management**: React Context for language state
- ✅ **Type-safe Translations**: TypeScript support for translation keys
- ✅ **Fallback Support**: Falls back to English if translation missing

## Architecture

### 1. File Structure

```
src/i18n/
├── index.ts                 # Main i18n configuration
├── context/
│   └── LanguageContext.tsx  # Language context and provider
└── locales/
    ├── en.ts               # English translations
    └── id.ts               # Indonesian translations
```

### 2. Core Components

- **i18n Configuration**: Main setup with language detection
- **LanguageContext**: React Context for language state management
- **LanguageSettings**: UI component for language selection
- **Translation Files**: JSON-like objects with translation keys

## Installation

### 1. Required Packages

```bash
npm install i18next react-i18next
npx expo install expo-localization
```

### 2. Package Versions

```json
{
  "dependencies": {
    "i18next": "^23.x.x",
    "react-i18next": "^14.x.x"
  },
  "devDependencies": {
    "expo-localization": "~15.x.x"
  }
}
```

## Configuration

### 1. Main i18n Setup (`src/i18n/index.ts`)

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

// Language resources
const resources = {
  en: { translation: en },
  id: { translation: id },
};

// Device locale detection
const deviceLocale = getLocales()[0];
const defaultLanguage = deviceLocale.languageCode === 'id' ? 'id' : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: 'en',
  debug: __DEV__,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});
```

### 2. Language Context (`src/i18n/context/LanguageContext.tsx`)

```typescript
interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => Promise<void>;
  isLanguageChanging: boolean;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Language state management
  // AsyncStorage persistence
  // i18n integration
};
```

## Usage

### 1. App Integration (`App.tsx`)

```typescript
import { LanguageProvider } from './src/i18n/context/LanguageContext';
import './src/i18n'; // Initialize i18n

export default function App() {
  return (
    <LanguageProvider>
      <AppNavigator />
      <StatusBar style='auto' />
    </LanguageProvider>
  );
}
```

### 2. Using Translations in Components

```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <Text>{t('home.title', 'Welcome to Rust Learning')}</Text>
  );
};
```

### 3. Language Switching

```typescript
import { useLanguage } from '../i18n/context/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = async (language: string) => {
    await changeLanguage(language);
  };

  return (
    <TouchableOpacity onPress={() => handleLanguageChange('id')}>
      <Text>Switch to Indonesian</Text>
    </TouchableOpacity>
  );
};
```

## Translation Structure

### 1. English Translations (`src/i18n/locales/en.ts`)

```typescript
export default {
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    // ... more common translations
  },
  home: {
    title: 'Welcome to Rust Learning',
    subtitle: 'Master Rust programming with interactive lessons',
    // ... more home translations
  },
  // ... more sections
};
```

### 2. Indonesian Translations (`src/i18n/locales/id.ts`)

```typescript
export default {
  common: {
    loading: 'Memuat...',
    error: 'Error',
    success: 'Berhasil',
    // ... more common translations
  },
  home: {
    title: 'Selamat Datang di Rust Learning',
    subtitle: 'Kuasai pemrograman Rust dengan pelajaran interaktif',
    // ... more home translations
  },
  // ... more sections
};
```

## Translation Categories

### 1. Common Elements

- Loading states, error messages, success messages
- Navigation buttons, form labels, action buttons
- Time units, numbers, difficulty levels

### 2. Screen-specific Content

- **Home**: Welcome messages, progress indicators, quick actions
- **Lessons**: Lesson titles, descriptions, status messages
- **Quiz**: Question labels, score displays, result messages
- **Code Practice**: Editor labels, execution messages, validation errors
- **Profile**: User information, statistics, achievements
- **Settings**: Configuration options, language selection, theme options

### 3. System Messages

- Error messages, validation errors, network errors
- Success confirmations, progress updates
- Time-related text, number formatting

## Best Practices

### 1. Translation Key Naming

```typescript
// ✅ Good: Hierarchical and descriptive
'settings.language.english': 'English'
'codePractice.runCode.button': 'Run Code'

// ❌ Bad: Flat and unclear
'english': 'English'
'runButton': 'Run Code'
```

### 2. Fallback Values

```typescript
// Always provide fallback values
t('home.title', 'Welcome to Rust Learning');
t('settings.language', 'Language');
```

### 3. Interpolation

```typescript
// Use interpolation for dynamic values
t('time.aboutMinutes', 'about {{count}} minutes', { count: 5 });
t('quiz.questionOf', 'Question {{current}} of {{total}}', {
  current: 1,
  total: 10,
});
```

### 4. Pluralization

```typescript
// Handle plural forms
t('time.aboutMinute', 'about a minute'); // singular
t('time.aboutMinutes', 'about {{count}} minutes'); // plural
```

## Language Switching Flow

### 1. User Action

1. User opens Language Settings
2. User selects new language
3. Component calls `changeLanguage()`

### 2. Language Change Process

1. **Validation**: Check if language is different from current
2. **State Update**: Set `isLanguageChanging` to true
3. **i18n Update**: Call `i18n.changeLanguage()`
4. **Context Update**: Update `currentLanguage` state
5. **Storage**: Save to AsyncStorage
6. **UI Update**: Set `isLanguageChanging` to false

### 3. Persistence

- Language selection saved to AsyncStorage
- Automatically loaded on app startup
- Survives app restarts and updates

## Testing

### 1. Development Testing

```bash
# Test TypeScript compilation
npm run typecheck

# Test app startup
npm start
```

### 2. Language Testing

- Switch between English and Indonesian
- Verify all UI elements are translated
- Check fallback behavior for missing translations
- Test persistence across app restarts

### 3. Edge Cases

- Missing translation keys
- Invalid language codes
- Storage failures
- Network errors during language change

## Troubleshooting

### 1. Common Issues

#### Translation Not Working

```typescript
// Check if i18n is initialized
import './src/i18n';

// Verify LanguageProvider is wrapping the app
<LanguageProvider>
  <App />
</LanguageProvider>
```

#### Language Not Persisting

```typescript
// Check AsyncStorage permissions
// Verify storage key consistency
const key = 'userLanguage';
await AsyncStorage.setItem(key, language);
```

#### TypeScript Errors

```typescript
// Ensure translation keys exist in both language files
// Check for typos in key names
// Verify interface definitions
```

### 2. Debug Mode

```typescript
// Enable debug in development
debug: __DEV__;

// Check console for i18n debug information
// Look for missing translation warnings
```

## Future Enhancements

### 1. Additional Languages

- Add more language support (e.g., Spanish, French, Chinese)
- Dynamic language loading
- Community-contributed translations

### 2. Advanced Features

- RTL language support
- Date/time localization
- Number formatting
- Currency formatting

### 3. Performance Optimizations

- Lazy loading of language files
- Translation caching
- Bundle size optimization

## Maintenance

### 1. Adding New Translations

1. Add keys to English file (`en.ts`)
2. Add corresponding translations to Indonesian file (`id.ts`)
3. Use in components with fallback values
4. Test both languages

### 2. Updating Existing Translations

1. Modify text in appropriate language file
2. Ensure consistency across languages
3. Test affected components
4. Update documentation if needed

### 3. Translation Quality

- Maintain consistent terminology
- Use appropriate formality levels
- Consider cultural context
- Regular review and updates

## Conclusion

The i18n setup provides a robust foundation for multi-language support in the Rust Learning App. With proper implementation and maintenance, users can enjoy the app in their preferred language, improving accessibility and user experience.

For questions or issues, refer to:

- i18next documentation: https://www.i18next.com/
- React i18next: https://react.i18next.com/
- Expo Localization: https://docs.expo.dev/versions/latest/sdk/localization/
