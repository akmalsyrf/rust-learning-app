import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { useLanguage } from '../i18n/context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme } from '../theme';
import { ProfileScreenProps } from '../types/navigation';

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { getEffectiveTheme, theme, setTheme, clearStorage: clearSettings } = useSettingsStore();
  const {
    xp,
    currentStreakDays,
    getTotalQuestionAnswered,
    clearStorage: clearProgress,
  } = useProgressStore();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  const isDark = getEffectiveTheme() === 'dark';
  const currentTheme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(currentTheme);

  const questionAnswered = getTotalQuestionAnswered();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleClearData = () => {
    Alert.alert(
      t('settings.clearData', 'Clear All Data'),
      t(
        'settings.clearDataWarning',
        'This will permanently delete all your progress and settings. Are you sure?'
      ),
      [
        {
          text: t('common.cancel', 'Cancel'),
          style: 'cancel',
        },
        {
          text: t('settings.clear', 'Clear'),
          style: 'destructive',
          onPress: async () => {
            try {
              await Promise.all([clearProgress(), clearSettings()]);
              Alert.alert(
                t('common.success', 'Success'),
                t('settings.dataClearedSuccess', 'All data has been cleared successfully')
              );
            } catch (error) {
              Alert.alert(
                t('common.error', 'Error'),
                t('settings.dataClearedError', 'Failed to clear data. Please try again.')
              );
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name='person' size={40} color={currentTheme.colors.primary} />
          </View>
          <Text style={styles.username}>{t('profile.username', 'Rust Learner')}</Text>
          <Text style={styles.joinDate}>
            {t('profile.joinDate', 'Learning since January 2024')}
          </Text>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name='star' size={24} color={currentTheme.colors.accent} />
            <Text style={styles.statNumber}>{xp}</Text>
            <Text style={styles.statLabel}>{t('profile.totalXP', 'Total XP')}</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name='flame' size={24} color={currentTheme.colors.streak} />
            <Text style={styles.statNumber}>{currentStreakDays}</Text>
            <Text style={styles.statLabel}>{t('profile.currentStreak', 'Day Streak')}</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name='checkmark-circle' size={24} color={currentTheme.colors.success} />
            <Text style={styles.statNumber}>{questionAnswered.correctAnswers}</Text>
            <Text style={styles.statLabel}>{t('profile.correctAnswers', 'Correct Answers')}</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('profile.achievements', 'Achievements')}</Text>
          <View style={styles.achievementsGrid}>
            <View
              style={[styles.achievement, currentStreakDays >= 3 && styles.achievementUnlocked]}
            >
              <Ionicons
                name='flame'
                size={24}
                color={
                  currentStreakDays >= 3 ? currentTheme.colors.streak : currentTheme.colors.border
                }
              />
              <Text
                style={[
                  styles.achievementText,
                  currentStreakDays >= 3 && styles.achievementTextUnlocked,
                ]}
              >
                {t('profile.achievement3DayStreak', '3-Day Streak')}
              </Text>
            </View>

            <View style={[styles.achievement, xp >= 100 && styles.achievementUnlocked]}>
              <Ionicons
                name='star'
                size={24}
                color={xp >= 100 ? currentTheme.colors.accent : currentTheme.colors.border}
              />
              <Text style={[styles.achievementText, xp >= 100 && styles.achievementTextUnlocked]}>
                {t('profile.achievement100XP', '100 XP')}
              </Text>
            </View>

            <View
              style={[
                styles.achievement,
                questionAnswered.correctAnswers >= 10 && styles.achievementUnlocked,
              ]}
            >
              <Ionicons
                name='checkmark-circle'
                size={24}
                color={
                  questionAnswered.correctAnswers >= 10
                    ? currentTheme.colors.success
                    : currentTheme.colors.border
                }
              />
              <Text
                style={[
                  styles.achievementText,
                  questionAnswered.correctAnswers >= 10 && styles.achievementTextUnlocked,
                ]}
              >
                {t('profile.achievement10Correct', '10 Correct')}
              </Text>
            </View>
          </View>
        </View>

        {/* Learning Results Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {t('profile.learningResults', 'Learning Results')}
          </Text>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('Certificate')}
          >
            <View style={styles.settingLeft}>
              <Ionicons name='ribbon' size={20} color={currentTheme.colors.accent} />
              <Text style={styles.settingText}>
                {t('profile.printCertificate', 'Print Certificate')}
              </Text>
            </View>
            <View style={styles.settingRight}>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('ReviewMistakes')}
          >
            <View style={styles.settingLeft}>
              <Ionicons name='refresh-circle' size={20} color={currentTheme.colors.warning} />
              <Text style={styles.settingText}>{t('reviewMistakes.title', 'Review Mistakes')}</Text>
            </View>
            <View style={styles.settingRight}>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.title', 'Settings')}</Text>

          <TouchableOpacity style={styles.settingItem} onPress={toggleTheme}>
            <View style={styles.settingLeft}>
              <Ionicons
                name={isDark ? 'moon' : 'sunny'}
                size={20}
                color={currentTheme.colors.text}
              />
              <Text style={styles.settingText}>{t('settings.theme', 'Theme')}</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>
                {isDark ? t('settings.dark', 'Dark') : t('settings.light', 'Light')}
              </Text>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => navigation.navigate('LanguageSettings')}
          >
            <View style={styles.settingLeft}>
              <Ionicons name='language' size={20} color={currentTheme.colors.text} />
              <Text style={styles.settingText}>{t('settings.language', 'Language')}</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>
                {currentLanguage === 'en'
                  ? t('settings.english', 'English')
                  : t('settings.indonesian', 'Indonesian')}
              </Text>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name='notifications' size={20} color={currentTheme.colors.text} />
              <Text style={styles.settingText}>{t('settings.notifications', 'Notifications')}</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>{t('common.yes', 'On')}</Text>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('About')}>
            <View style={styles.settingLeft}>
              <Ionicons name='information-circle' size={20} color={currentTheme.colors.text} />
              <Text style={styles.settingText}>{t('settings.about', 'About')}</Text>
            </View>
            <View style={styles.settingRight}>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Data Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.dataUsage', 'Data Management')}</Text>

          <TouchableOpacity style={styles.settingItem} onPress={handleClearData}>
            <View style={styles.settingLeft}>
              <Ionicons name='trash' size={20} color={currentTheme.colors.error} />
              <Text style={[styles.settingText, { color: currentTheme.colors.error }]}>
                {t('settings.clearData', 'Clear All Data')}
              </Text>
            </View>
            <View style={styles.settingRight}>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Progress Summary */}
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>
            {t('profile.learningProgress', 'Learning Progress')}
          </Text>
          <Text style={styles.progressDescription}>
            {t(
              'profile.progressDescription',
              "You're doing great! Keep up the daily practice to maintain your streak and unlock more achievements."
            )}
          </Text>

          <View style={styles.progressStats}>
            <View style={styles.progressStat}>
              <Text style={styles.progressStatValue}>
                {questionAnswered.totalQuestions > 0
                  ? Math.round(
                      (Number(questionAnswered.correctAnswers) /
                        Number(questionAnswered.totalQuestions)) *
                        100
                    )
                  : 0}
                %
              </Text>
              <Text style={styles.progressStatLabel}>{t('profile.accuracy', 'Accuracy')}</Text>
            </View>
            <View style={styles.progressStat}>
              <Text style={styles.progressStatValue}>{Math.min(currentStreakDays, 7)}/7</Text>
              <Text style={styles.progressStatLabel}>{t('profile.thisWeek', 'This Week')}</Text>
            </View>
          </View>
        </View>
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
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    username: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    joinDate: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.lg,
    },
    statCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginHorizontal: theme.spacing.xs,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.colors.text,
      marginVertical: theme.spacing.xs,
    },
    statLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
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
    achievementsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    achievement: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginHorizontal: theme.spacing.xs,
      opacity: 0.5,
    },
    achievementUnlocked: {
      opacity: 1,
      borderWidth: 2,
      borderColor: theme.colors.accent + '40',
    },
    achievementText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
    achievementTextUnlocked: {
      color: theme.colors.text,
      fontWeight: '500',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.sm,
    },
    settingLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    settingText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      marginLeft: theme.spacing.md,
    },
    settingRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingValue: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginRight: theme.spacing.sm,
    },
    progressCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    progressTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    progressDescription: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      lineHeight: 22,
      marginBottom: theme.spacing.md,
    },
    progressStats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    progressStat: {
      alignItems: 'center',
    },
    progressStatValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.colors.primary,
      marginBottom: theme.spacing.xs,
    },
    progressStatLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
  });
