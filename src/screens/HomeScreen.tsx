import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { useDataStore } from '../state/useDataStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { HomeScreenProps } from '../types/navigation';
import { getNextLesson } from '../utils';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { xp, currentStreakDays, getTodayXP, highestStreakDays, getLessonStars } =
    useProgressStore();
  const { getTopics, getLessonsForTopic } = useDataStore();
  const { t } = useTranslation();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  const styles = createStyles(theme);
  const todayXP = getTodayXP();

  const allTopics = getTopics();
  const nextLesson = getNextLesson({
    allTopics,
    getLessonsForTopic,
    getLessonStars,
  });

  const calculateOverallProgress = () => {
    const allTopics = getTopics();
    let totalLessons = 0;
    let completedLessons = 0;

    allTopics.forEach(topic => {
      const lessons = getLessonsForTopic(topic.id);
      totalLessons += lessons.length;
      completedLessons += lessons.filter(lesson => getLessonStars(lesson.id) > 0).length;
    });

    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  const overallProgress = calculateOverallProgress();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>{t('home.welcomeBack', 'Welcome back!')}</Text>
          <Text style={styles.subtitle}>{t('home.readyToLearn', 'Ready to learn Rust?')}</Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {/* Streak Card */}
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name='flame' size={24} color={theme.colors.streak} />
            </View>
            <Text style={styles.statNumber}>{currentStreakDays}</Text>
            <Text style={styles.statLabel}>{t('home.dayStreak', 'Day Streak')}</Text>
          </View>

          {/* XP Card */}
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name='star' size={24} color={theme.colors.accent} />
            </View>
            <Text style={styles.statNumber}>{xp}</Text>
            <Text style={styles.statLabel}>{t('home.totalXP', 'Total XP')}</Text>
          </View>

          {/* Today XP Card */}
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons name='today' size={24} color={theme.colors.primary} />
            </View>
            <Text style={styles.statNumber}>{todayXP}</Text>
            <Text style={styles.statLabel}>{t('home.todayXP', 'Today XP')}</Text>
          </View>
        </View>

        {/* Daily Goal */}
        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <Text style={styles.goalTitle}>{t('home.dailyGoal', 'Daily Goal')}</Text>
            <Text style={styles.goalProgress}>{todayXP}/50 XP</Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${Math.min((todayXP / 50) * 100, 100)}%` }]}
            />
          </View>
          <Text style={styles.goalDescription}>
            {t('home.goalDescription', 'Complete lessons to earn XP and maintain your streak!')}
          </Text>
        </View>

        {/* Progress Overview */}
        <View style={styles.progressOverview}>
          <Text style={styles.sectionTitle}>{t('home.progressOverview', 'Progress Overview')}</Text>
          <View style={styles.overviewCard}>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewValue}>{overallProgress}%</Text>
              <Text style={styles.overviewLabel}>
                {t('home.overallProgress', 'Overall Progress')}
              </Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewValue}>{highestStreakDays}</Text>
              <Text style={styles.overviewLabel}>{t('home.bestStreak', 'Best Streak')}</Text>
            </View>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewValue}>{xp}</Text>
              <Text style={styles.overviewLabel}>{t('home.totalXP', 'Total XP')}</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.primaryAction}
            onPress={() => {
              if (nextLesson) {
                navigation.navigate('Lesson', { lessonId: nextLesson.id });
              } else {
                navigation.navigate('Modules');
              }
            }}
          >
            <Ionicons name='play' size={20} color='white' />
            <Text style={styles.primaryActionText}>
              {nextLesson
                ? t('home.continueLearning', 'Continue Learning')
                : t('home.browseModules', 'Browse Modules')}
            </Text>
          </TouchableOpacity>

          <View style={styles.secondaryActions}>
            <TouchableOpacity
              style={styles.secondaryAction}
              onPress={() => navigation.navigate('Leaderboard')}
            >
              <Ionicons name='trophy' size={20} color={theme.colors.text} />
              <Text style={styles.secondaryActionText}>
                {t('navigation.leaderboard', 'Leaderboard')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryAction}
              onPress={() => navigation.navigate('Profile')}
            >
              <Ionicons name='person' size={20} color={theme.colors.text} />
              <Text style={styles.secondaryActionText}>{t('navigation.profile', 'Profile')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity (Placeholder) */}
        <View style={styles.recentCard}>
          <Text style={styles.recentTitle}>{t('home.recentActivity', 'Recent Activity')}</Text>
          <Text style={styles.recentItem}>
            • {t('home.completedLesson', 'Completed "Variables and Types"')}
          </Text>
          <Text style={styles.recentItem}>• {t('home.earnedXP', 'Earned 30 XP today')}</Text>
          <Text style={styles.recentItem}>
            • {t('home.streakMaintained', '3-day streak maintained!')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: theme.spacing.md,
    },
    header: {
      marginBottom: theme.spacing.lg,
    },
    welcomeText: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    subtitle: {
      fontSize: theme.typography.body.fontSize,
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
    statIcon: {
      marginBottom: theme.spacing.xs,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    statLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
    goalCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.lg,
    },
    goalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    goalTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
    },
    goalProgress: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.primary,
    },
    progressBar: {
      height: 8,
      backgroundColor: theme.colors.border,
      borderRadius: 4,
      marginBottom: theme.spacing.sm,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 4,
    },
    goalDescription: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
    actionsContainer: {
      marginBottom: theme.spacing.lg,
    },
    primaryAction: {
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.md,
    },
    primaryActionText: {
      color: 'white',
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    secondaryActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    secondaryAction: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginHorizontal: theme.spacing.xs,
    },
    secondaryActionText: {
      color: theme.colors.text,
      fontSize: theme.typography.body.fontSize,
      fontWeight: '500',
      marginLeft: theme.spacing.sm,
    },
    recentCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    recentTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    recentItem: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.xs,
    },
    progressOverview: {
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    overviewCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    overviewItem: {
      alignItems: 'center',
    },
    overviewValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.colors.primary,
      marginBottom: theme.spacing.xs,
    },
    overviewLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
  });
