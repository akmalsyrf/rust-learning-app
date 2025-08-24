import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../i18n/context/LanguageContext';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme, Theme } from '../theme';
import { LanguageSettingsScreenProps } from '../types/navigation';

const LanguageSettings: React.FC<LanguageSettingsScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, isLanguageChanging } = useLanguage();
  const { getEffectiveTheme } = useSettingsStore();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const handleLanguageChange = async (language: string) => {
    if (language === currentLanguage) return;

    try {
      await changeLanguage(language);

      Alert.alert(
        t('success.languageChanged', 'Language Changed'),
        t(
          'success.languageChangedMessage',
          'Language has been changed successfully. The app will restart to apply changes.'
        ),
        [
          {
            text: t('common.ok', 'OK'),
            onPress: () => {
              // Navigate back to profile screen
              navigation.goBack();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        t('errors.languageChangeFailed', 'Language Change Failed'),
        t('errors.languageChangeFailedMessage', 'Failed to change language. Please try again.'),
        [{ text: t('common.ok', 'OK') }]
      );
    }
  };

  const languages = [
    {
      code: 'en',
      name: t('settings.english', 'English'),
      nativeName: 'English',
      flag: '🇺🇸',
      description: t('settings.englishDescription', 'International English'),
    },
    {
      code: 'id',
      name: t('settings.indonesian', 'Indonesian'),
      nativeName: 'Bahasa Indonesia',
      flag: '🇮🇩',
      description: t('settings.indonesianDescription', 'Bahasa Indonesia'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('settings.language', 'Language')}</Text>
        <Text style={styles.subtitle}>
          {t('settings.languageSubtitle', 'Choose your preferred language for the app')}
        </Text>
      </View>

      <View style={styles.languageList}>
        {languages.map(language => (
          <TouchableOpacity
            key={language.code}
            style={[
              styles.languageItem,
              currentLanguage === language.code && styles.languageItemSelected,
            ]}
            onPress={() => handleLanguageChange(language.code)}
            disabled={isLanguageChanging}
          >
            <View style={styles.languageInfo}>
              <View style={styles.languageHeader}>
                <Text style={styles.languageFlag}>{language.flag}</Text>
                <View style={styles.languageNames}>
                  <Text style={styles.languageName}>{language.name}</Text>
                  <Text style={styles.languageNativeName}>{language.nativeName}</Text>
                </View>
              </View>
              <Text style={styles.languageDescription}>{language.description}</Text>
            </View>

            <View style={styles.languageActions}>
              {currentLanguage === language.code && (
                <View style={styles.selectedIndicator}>
                  <Ionicons name='checkmark-circle' size={24} color={theme.colors.success} />
                </View>
              )}
              {isLanguageChanging && currentLanguage !== language.code && (
                <View style={styles.loadingIndicator}>
                  <Text style={styles.loadingText}>{t('common.loading', 'Loading...')}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {t('settings.languageNote', 'Note: Some content may remain in the original language')}
        </Text>
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      padding: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    title: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      lineHeight: theme.typography.body.lineHeight,
    },
    languageList: {
      flex: 1,
      padding: theme.spacing.md,
    },
    languageItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      marginBottom: theme.spacing.sm,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    languageItemSelected: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary + '10',
    },
    languageInfo: {
      flex: 1,
    },
    languageHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    languageFlag: {
      fontSize: 32,
      marginRight: theme.spacing.md,
    },
    languageNames: {
      flex: 1,
    },
    languageName: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: 2,
    },
    languageNativeName: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      fontStyle: 'italic' as any,
    },
    languageDescription: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginLeft: 48, // Align with language name
    },
    languageActions: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
    },
    selectedIndicator: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingIndicator: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
    footer: {
      padding: theme.spacing.lg,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    footerText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      fontStyle: 'italic' as any,
    },
  });

export default LanguageSettings;
