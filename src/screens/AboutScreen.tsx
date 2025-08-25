import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { AboutScreenProps } from '../types/navigation';
import { useSettingsStore } from '../state/useSettingsStore';

export default function AboutScreen({ navigation }: AboutScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { t } = useTranslation();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name='information-circle' size={64} color={theme.colors.primary} />
          <Text style={styles.title}>{t('about.title', 'About Rust Learning')}</Text>
          <Text style={styles.version}>{t('about.version', 'Version 1.0.0')}</Text>
        </View>

        {/* App Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.description', 'Description')}</Text>
          <Text style={styles.description}>
            {t(
              'about.appDescription',
              'Rust Learning is an interactive mobile application designed to help you master Rust programming through structured lessons, quizzes, and hands-on coding practice.'
            )}
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.features', 'Features')}</Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Ionicons name='book' size={20} color={theme.colors.primary} />
              <Text style={styles.featureText}>
                {t('about.interactiveLessons', 'Interactive Lessons')}
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name='help-circle' size={20} color={theme.colors.primary} />
              <Text style={styles.featureText}>{t('about.quizzes', 'Quizzes & Assessments')}</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name='code-slash' size={20} color={theme.colors.primary} />
              <Text style={styles.featureText}>{t('about.codePractice', 'Code Practice')}</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name='trophy' size={20} color={theme.colors.primary} />
              <Text style={styles.featureText}>
                {t('about.progressTracking', 'Progress Tracking')}
              </Text>
            </View>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('about.contact', 'Contact')}</Text>
          <Text style={styles.contactText}>
            {t(
              'about.contactDescription',
              "Have questions or suggestions? We'd love to hear from you!"
            )}
          </Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => Linking.openURL('mailto:support@rustlearning.com')}
          >
            <Ionicons name='mail' size={20} color='white' />
            <Text style={styles.contactButtonText}>{t('about.contactUs', 'Contact Us')}</Text>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={20} color={theme.colors.primary} />
          <Text style={styles.backButtonText}>{t('common.back', 'Back')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: theme.spacing.md,
    },
    header: {
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    title: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    version: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
    section: {
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    description: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 24,
      textAlign: 'center',
    },
    featureList: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    featureText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      marginLeft: theme.spacing.md,
      flex: 1,
    },
    contactText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
      lineHeight: 22,
    },
    contactButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.lg,
      marginTop: theme.spacing.md,
    },
    contactButtonText: {
      fontSize: theme.typography.body.fontSize,
      color: 'white',
      fontWeight: '500',
      marginLeft: theme.spacing.xs,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      backgroundColor: theme.colors.surface,
    },
    backButtonText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.primary,
      fontWeight: '500',
      marginLeft: theme.spacing.xs,
    },
  });
