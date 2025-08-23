import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';

export default function AboutScreen() {
  // Hardcode theme to avoid store issues
  const isDark = false;
  const theme = lightTheme;
  const styles = createStyles(theme);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* App Info */}
        <View style={styles.header}>
          <View style={styles.appIcon}>
            <Ionicons name="library" size={40} color={theme.colors.primary} />
          </View>
          <Text style={styles.appName}>Rust Learning App</Text>
          <Text style={styles.version}>Version 1.0.0 (MVP)</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.description}>
            A mobile app to learn Rust programming through interactive quizzes, code comprehension exercises, 
            and gamified learning with streaks and leaderboards. Perfect for beginners starting their Rust journey.
          </Text>
        </View>

        {/* Attribution */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content Attribution</Text>
          <View style={styles.attributionCard}>
            <Ionicons name="book" size={24} color={theme.colors.primary} />
            <View style={styles.attributionText}>
              <Text style={styles.attributionTitle}>Dasar Pemrograman Rust</Text>
              <Text style={styles.attributionAuthor}>by Noval Agung Prayogo</Text>
              <Text style={styles.attributionDescription}>
                Learning content is based on and adapted from this comprehensive Rust tutorial.
              </Text>
              <TouchableOpacity 
                style={styles.linkButton}
                onPress={() => openLink('https://dasarpemrogramanrust.novalagung.com/')}
              >
                <Ionicons name="link" size={16} color={theme.colors.primary} />
                <Text style={styles.linkText}>Visit Source</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* License */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>License & Terms</Text>
          <View style={styles.licenseCard}>
            <Text style={styles.licenseText}>
              This app uses content under CC BY-SA 4.0 license from the source material. 
              All original content is properly attributed and linked to its source.
            </Text>
            <Text style={styles.licenseText}>
              The app itself is built for educational purposes and follows open learning principles.
            </Text>
          </View>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featuresList}>
            <View style={styles.feature}>
              <Ionicons name="help-circle" size={20} color={theme.colors.success} />
              <Text style={styles.featureText}>Interactive quizzes and code comprehension</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="flame" size={20} color={theme.colors.streak} />
              <Text style={styles.featureText}>Daily streak tracking</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="trophy" size={20} color={theme.colors.accent} />
              <Text style={styles.featureText}>Weekly leaderboards</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="star" size={20} color={theme.colors.primary} />
              <Text style={styles.featureText}>XP and achievement system</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="download" size={20} color={theme.colors.info} />
              <Text style={styles.featureText}>Offline-first learning</Text>
            </View>
          </View>
        </View>

        {/* Technical Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Built With</Text>
          <View style={styles.techStack}>
            <Text style={styles.techItem}>• React Native + Expo</Text>
            <Text style={styles.techItem}>• TypeScript</Text>
            <Text style={styles.techItem}>• Zustand for state management</Text>
            <Text style={styles.techItem}>• React Navigation</Text>
            <Text style={styles.techItem}>• AsyncStorage for offline data</Text>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Feedback & Support</Text>
          <Text style={styles.contactText}>
            Have suggestions or found a bug? We'd love to hear from you!
          </Text>
          <View style={styles.contactButtons}>
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => openLink('mailto:antumkiriya@gmail.com')}
            >
              <Ionicons name="mail" size={16} color={theme.colors.primary} />
              <Text style={styles.contactButtonText}>Send Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Made with ❤️ by akmalsyrf
          </Text>
          <Text style={styles.footerText}>
            © 2025 Rust Learning App
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) => StyleSheet.create({
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
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  appName: {
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
  attributionCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'flex-start',
  },
  attributionText: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  attributionTitle: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  attributionAuthor: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.sm,
  },
  attributionDescription: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text,
    lineHeight: 18,
    marginBottom: theme.spacing.sm,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.primary,
    fontWeight: '500',
    marginLeft: theme.spacing.xs,
  },
  licenseCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  licenseText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text,
    lineHeight: 18,
    marginBottom: theme.spacing.sm,
  },
  featuresList: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  feature: {
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
  techStack: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  techItem: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.typography.code.fontFamily,
  },
  contactText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    lineHeight: 22,
  },
  contactButtons: {
    flexDirection: 'row',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.sm,
  },
  contactButtonText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.primary,
    fontWeight: '500',
    marginLeft: theme.spacing.xs,
  },
  footer: {
    alignItems: 'center',
    paddingTop: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  footerText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
});
