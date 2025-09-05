import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';
import { AIQuizResultsScreenProps } from '../types/navigation';
import { AIQuizResult } from '../types';
import { geminiService } from '../services/geminiService';

export default function AIQuizResultsScreen({ navigation, route }: AIQuizResultsScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { t } = useTranslation();
  const { sessionId, score, totalQuestions, timeSpent, percentage } = route.params;

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const [result, setResult] = useState<AIQuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // For now, we'll create a basic result from the route params
    // In a real app, you might fetch the full result from storage or API
    const basicResult: AIQuizResult = {
      score,
      totalQuestions,
      percentage,
      correctAnswers: score,
      wrongAnswers: totalQuestions - score,
      timeSpent,
      feedback: 'Great job completing the AI quiz! Keep practicing to improve your Rust skills.',
      recommendations: [
        'Review the questions you got wrong',
        'Practice more with the topics you found challenging',
        'Try more advanced Rust exercises',
      ],
    };

    setResult(basicResult);
    setIsLoading(false);
  }, [score, totalQuestions, timeSpent, percentage]);

  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return t('aiQuiz.excellent');
    if (percentage >= 80) return t('aiQuiz.greatWork');
    if (percentage >= 70) return t('aiQuiz.goodJob');
    if (percentage >= 60) return t('aiQuiz.wellDone');
    if (percentage >= 50) return t('aiQuiz.almostThere');
    if (percentage >= 40) return t('aiQuiz.notBad');
    return t('aiQuiz.tryHarder');
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return theme.colors.success;
    if (percentage >= 60) return theme.colors.warning;
    return theme.colors.error;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    return `${remainingSeconds}s`;
  };

  const handleRetakeQuiz = () => {
    navigation.goBack();
  };

  const handleTryAnotherTopic = () => {
    navigation.navigate('AIQuiz', { questionCount: 5 });
  };

  const handleBackToModules = () => {
    navigation.navigate('MainTabs');
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color={theme.colors.primary} />
          <Text style={styles.loadingText}>{t('aiQuiz.loading')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !result) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name='alert-circle-outline' size={64} color={theme.colors.error} />
          <Text style={styles.errorTitle}>{t('aiQuiz.error')}</Text>
          <Text style={styles.errorText}>{t('aiQuiz.failedToGenerate')}</Text>

          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.goBack()}>
            <Text style={styles.primaryButtonText}>{t('common.back')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const performanceMessage = getPerformanceMessage(result.percentage);
  const performanceColor = getPerformanceColor(result.percentage);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={24} color={theme.colors.text} />
          </TouchableOpacity>

          <View style={styles.headerInfo}>
            <Text style={styles.headerTitle}>{t('aiQuiz.quizComplete')}</Text>
            <View style={styles.headerBadge}>
              <Ionicons name='sparkles' size={16} color={theme.colors.accent} />
              <Text style={styles.badgeText}>{t('aiQuiz.poweredByAI')}</Text>
            </View>
          </View>
        </View>

        {/* Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreHeader}>
            <Text style={styles.scoreTitle}>{t('aiQuiz.yourScore')}</Text>
            <View style={[styles.scoreBadge, { backgroundColor: performanceColor }]}>
              <Text style={styles.scorePercentage}>{result.percentage}%</Text>
            </View>
          </View>

          <Text style={[styles.performanceMessage, { color: performanceColor }]}>
            {performanceMessage}
          </Text>

          <View style={styles.scoreDetails}>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreItemLabel}>{t('aiQuiz.correctAnswers')}</Text>
              <Text style={[styles.scoreItemValue, { color: theme.colors.success }]}>
                {result.correctAnswers}
              </Text>
            </View>

            <View style={styles.scoreItem}>
              <Text style={styles.scoreItemLabel}>{t('aiQuiz.wrongAnswers')}</Text>
              <Text style={[styles.scoreItemValue, { color: theme.colors.error }]}>
                {result.wrongAnswers}
              </Text>
            </View>

            <View style={styles.scoreItem}>
              <Text style={styles.scoreItemLabel}>{t('aiQuiz.timeSpent')}</Text>
              <Text style={styles.scoreItemValue}>{formatTime(result.timeSpent)}</Text>
            </View>
          </View>
        </View>

        {/* AI Feedback */}
        <View style={styles.feedbackCard}>
          <View style={styles.feedbackHeader}>
            <Ionicons name='chatbubble-outline' size={24} color={theme.colors.primary} />
            <Text style={styles.feedbackTitle}>{t('aiQuiz.feedback')}</Text>
          </View>

          <Text style={styles.feedbackText}>{result.feedback}</Text>
        </View>

        {/* Recommendations */}
        <View style={styles.recommendationsCard}>
          <View style={styles.recommendationsHeader}>
            <Ionicons name='bulb-outline' size={24} color={theme.colors.accent} />
            <Text style={styles.recommendationsTitle}>{t('aiQuiz.recommendations')}</Text>
          </View>

          {result.recommendations.map((recommendation, index) => (
            <View key={index} style={styles.recommendationItem}>
              <View style={styles.recommendationBullet}>
                <Text style={styles.recommendationNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.recommendationText}>{recommendation}</Text>
            </View>
          ))}
        </View>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Quiz Statistics</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{result.totalQuestions}</Text>
              <Text style={styles.statLabel}>{t('aiQuiz.totalQuestions')}</Text>
            </View>

            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.success }]}>
                {result.correctAnswers}
              </Text>
              <Text style={styles.statLabel}>Correct</Text>
            </View>

            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.error }]}>
                {result.wrongAnswers}
              </Text>
              <Text style={styles.statLabel}>Incorrect</Text>
            </View>

            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {Math.round(result.timeSpent / result.totalQuestions)}s
              </Text>
              <Text style={styles.statLabel}>Avg/Question</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.secondaryActionButton} onPress={handleRetakeQuiz}>
            <Ionicons name='refresh' size={20} color={theme.colors.primary} />
            <Text style={styles.secondaryActionButtonText}>{t('aiQuiz.retakeQuiz')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryActionButton} onPress={handleTryAnotherTopic}>
            <Ionicons name='add-circle' size={20} color={theme.colors.background} />
            <Text style={styles.primaryActionButtonText}>{t('aiQuiz.tryAnotherTopic')}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backToModulesButton} onPress={handleBackToModules}>
          <Ionicons name='book-outline' size={20} color={theme.colors.textSecondary} />
          <Text style={styles.backToModulesButtonText}>{t('aiQuiz.backToModules')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.md,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.lg,
    },
    errorTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },
    errorText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing.lg,
    },
    primaryButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
    },
    primaryButtonText: {
      color: theme.colors.background,
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
    },
    content: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    backButton: {
      padding: theme.spacing.sm,
    },
    headerInfo: {
      flex: 1,
      marginLeft: theme.spacing.sm,
    },
    headerTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
    },
    headerBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
      marginTop: theme.spacing.xs,
      alignSelf: 'flex-start',
    },
    badgeText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.accent,
      marginLeft: theme.spacing.xs,
      fontWeight: '600',
    },
    scoreCard: {
      backgroundColor: theme.colors.surface,
      margin: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      alignItems: 'center',
    },
    scoreHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    scoreTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginRight: theme.spacing.md,
    },
    scoreBadge: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.lg,
    },
    scorePercentage: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight,
      color: theme.colors.background,
    },
    performanceMessage: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginBottom: theme.spacing.lg,
    },
    scoreDetails: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    scoreItem: {
      alignItems: 'center',
    },
    scoreItemLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.xs,
    },
    scoreItemValue: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
    },
    feedbackCard: {
      backgroundColor: theme.colors.surface,
      marginHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
    },
    feedbackHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    feedbackTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginLeft: theme.spacing.sm,
    },
    feedbackText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 22,
    },
    recommendationsCard: {
      backgroundColor: theme.colors.surface,
      marginHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
    },
    recommendationsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    recommendationsTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginLeft: theme.spacing.sm,
    },
    recommendationItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: theme.spacing.md,
    },
    recommendationBullet: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: theme.colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.sm,
      marginTop: 2,
    },
    recommendationNumber: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: '600',
      color: theme.colors.background,
    },
    recommendationText: {
      flex: 1,
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 20,
    },
    statsCard: {
      backgroundColor: theme.colors.surface,
      marginHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
    },
    statsTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    statsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    statItem: {
      width: '48%',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    statValue: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    statLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    actionContainer: {
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    actionButtons: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    primaryActionButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    primaryActionButtonText: {
      color: theme.colors.background,
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      marginLeft: theme.spacing.sm,
    },
    secondaryActionButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    secondaryActionButtonText: {
      color: theme.colors.primary,
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      marginLeft: theme.spacing.sm,
    },
    backToModulesButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: theme.spacing.sm,
    },
    backToModulesButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.body.fontSize,
      marginLeft: theme.spacing.sm,
    },
  });
