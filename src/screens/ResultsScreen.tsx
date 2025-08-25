import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { ResultsScreenProps } from '../types/navigation';

export default function ResultsScreen({ route, navigation }: ResultsScreenProps) {
  const { lessonId, score, totalQuestions, timeTaken } = route.params;
  const { getEffectiveTheme } = useSettingsStore();
  const { t } = useTranslation();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  const styles = createStyles(theme);
  const percentage = Math.round((score / totalQuestions) * 100);
  const timeInSeconds = Math.round(timeTaken / 1000);
  const timeInMinutes = timeInSeconds / 60;
  const questionsPerMinute = timeInMinutes > 0 ? (totalQuestions / timeInMinutes).toFixed(1) : '0';
  const averageTimePerQuestion = timeInSeconds / totalQuestions;

  const getPerformanceMessage = () => {
    if (percentage === 100) {
      return t('results.perfectScore', 'Perfect Score!');
    } else if (percentage >= 80) {
      return t('results.goodJob', 'Good Job!');
    } else if (percentage >= 60) {
      return t('results.keepLearning', 'Keep Learning');
    } else {
      return t('results.keepLearning', 'Keep Learning');
    }
  };

  const getPerformanceColor = () => {
    if (percentage === 100) return theme.colors.success;
    if (percentage >= 80) return theme.colors.primary;
    if (percentage >= 60) return theme.colors.warning;
    return theme.colors.error;
  };

  const getPerformanceIcon = () => {
    if (percentage === 100) return 'trophy';
    if (percentage >= 80) return 'star';
    if (percentage >= 60) return 'checkmark-circle';
    return 'alert-circle';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: getPerformanceColor() + '20' }]}>
            <Ionicons name={getPerformanceIcon() as any} size={48} color={getPerformanceColor()} />
          </View>
          <Text style={styles.title}>{t('results.title', 'Quiz Results')}</Text>
          <Text style={styles.performanceMessage}>{getPerformanceMessage()}</Text>
        </View>

        {/* Score Overview */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>{t('results.score', 'Score')}</Text>
            <Text style={styles.scoreValue}>
              {score} {t('results.of', 'of')} {totalQuestions}
            </Text>
          </View>
          <View style={styles.percentageContainer}>
            <Text style={[styles.percentageText, { color: getPerformanceColor() }]}>
              {percentage}%
            </Text>
          </View>
        </View>

        {/* Performance Metrics */}
        <View style={styles.metricsContainer}>
          <View style={styles.metricCard}>
            <Ionicons name='time' size={24} color={theme.colors.primary} />
            <Text style={styles.metricValue}>{timeInSeconds}s</Text>
            <Text style={styles.metricLabel}>{t('results.timeTaken', 'Time taken')}</Text>
          </View>
          <View style={styles.metricCard}>
            <Ionicons name='speedometer' size={24} color={theme.colors.accent} />
            <Text style={styles.metricValue}>{questionsPerMinute}</Text>
            <Text style={styles.metricLabel}>
              {t('results.questionsPerMinute', 'questions per minute')}
            </Text>
          </View>
          <View style={styles.metricCard}>
            <Ionicons name='analytics' size={24} color={theme.colors.info} />
            <Text style={styles.metricValue}>{averageTimePerQuestion.toFixed(1)}s</Text>
            <Text style={styles.metricLabel}>
              {t('results.averageTime', 'Average time per question')}
            </Text>
          </View>
        </View>

        {/* Detailed Breakdown */}
        <View style={styles.breakdownCard}>
          <Text style={styles.sectionTitle}>{t('results.performance', 'Performance')}</Text>
          <View style={styles.breakdownRow}>
            <View style={styles.breakdownItem}>
              <Ionicons name='checkmark-circle' size={20} color={theme.colors.success} />
              <Text style={styles.breakdownLabel}>{t('results.correct', 'Correct')}</Text>
              <Text style={styles.breakdownValue}>{score}</Text>
            </View>
            <View style={styles.breakdownItem}>
              <Ionicons name='close-circle' size={20} color={theme.colors.error} />
              <Text style={styles.breakdownLabel}>{t('results.incorrect', 'Incorrect')}</Text>
              <Text style={styles.breakdownValue}>{totalQuestions - score}</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={20} color='white' />
            <Text style={styles.primaryButtonText}>
              {t('results.continueLearning', 'Continue Learning')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()}>
            <Ionicons name='refresh' size={20} color={theme.colors.primary} />
            <Text style={styles.secondaryButtonText}>{t('results.retakeQuiz', 'Retake Quiz')}</Text>
          </TouchableOpacity>
        </View>

        {/* Encouragement Message */}
        <View style={styles.encouragementCard}>
          <Ionicons name='heart' size={24} color={theme.colors.accent} />
          <Text style={styles.encouragementText}>
            {percentage === 100
              ? t('results.congratulations', 'Congratulations!')
              : t('results.keepLearning', 'Keep Learning')}
          </Text>
          <Text style={styles.encouragementSubtext}>
            {t('results.youCompleted', 'You completed the quiz')}{' '}
            {t('results.withScore', 'with a score of')} {percentage}%
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
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    title: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
    },
    performanceMessage: {
      fontSize: theme.typography.subheading.fontSize,
      color: theme.colors.primary,
      fontWeight: theme.typography.weights.semibold as any,
      textAlign: 'center',
    },
    scoreCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.lg,
      alignItems: 'center',
    },
    scoreRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    scoreLabel: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginRight: theme.spacing.xs,
    },
    scoreValue: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.weights.semibold as any,
      color: theme.colors.text,
    },
    percentageContainer: {
      backgroundColor: theme.colors.primary + '15',
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    percentageText: {
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
    },
    metricsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.lg,
    },
    metricCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginHorizontal: theme.spacing.xs,
    },
    metricValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.colors.text,
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    },
    metricLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    breakdownCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.weights.semibold as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
    },
    breakdownRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    breakdownItem: {
      alignItems: 'center',
    },
    breakdownLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    },
    breakdownValue: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.colors.text,
    },
    actionButtons: {
      marginBottom: theme.spacing.lg,
    },
    primaryButton: {
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.md,
    },
    primaryButtonText: {
      color: 'white',
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    secondaryButtonText: {
      color: theme.colors.primary,
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    encouragementCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
    },
    encouragementText: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.weights.semibold as any,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
    },
    encouragementSubtext: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: theme.typography.lineHeights.relaxed,
    },
  });
