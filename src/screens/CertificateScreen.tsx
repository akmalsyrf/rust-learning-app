import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { useDataStore } from '../state/useDataStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { CertificateScreenProps } from '../types/navigation';
import { certificateService } from '../services/certificateService';
import { CertificateData } from '../utils/certificateGenerator';

export default function CertificateScreen({ navigation }: CertificateScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const {
    getAllLessonsCompletionStatus,
    getAllCodePracticesCompletionStatus,
    getTotalQuestionAnswered,
    getQuestionProgress,
    xp,
    currentStreakDays,
  } = useProgressStore();
  const { getTopics, getCodePractices, getLessonsForTopic, getQuestionsForLesson } = useDataStore();
  const { t } = useTranslation();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const lessonStatus = getAllLessonsCompletionStatus();
  const codePracticeStatus = getAllCodePracticesCompletionStatus();
  const codePractices = getCodePractices();
  const totalCodePractices = codePractices.length;

  // Get dynamic data for certificates
  const appStats = useMemo(() => {
    const topics = getTopics();

    // Calculate total questions from all lessons
    const totalQuestions = topics.reduce((total: number, topic) => {
      const lessonsForTopic = getLessonsForTopic(topic.id);
      return (
        total +
        lessonsForTopic.reduce((lessonTotal: number, lesson) => {
          return lessonTotal + lesson.questions.length;
        }, 0)
      );
    }, 0);

    // Calculate total code practices
    const totalCodePractices = codePractices.length;

    // Get completed topics with detailed progress
    const getCompletedTopicsWithProgress = () => {
      const completedTopics: Array<{
        name: string;
        completedQuestions: number;
        totalQuestions: number;
        progress: number;
      }> = [];

      topics.forEach(topic => {
        const lessonsForTopic = getLessonsForTopic(topic.id);
        let topicCompletedQuestions = 0;
        let topicTotalQuestions = 0;

        lessonsForTopic.forEach(lesson => {
          const questionsForLesson = getQuestionsForLesson(lesson.id);
          topicTotalQuestions += questionsForLesson.length;

          // Count completed questions for this lesson
          questionsForLesson.forEach(question => {
            const questionProgress = getQuestionProgress(question.id);
            if (questionProgress) {
              topicCompletedQuestions++;
            }
          });
        });

        // Only include topics that have some progress
        if (topicCompletedQuestions > 0) {
          completedTopics.push({
            name: topic.title.en,
            completedQuestions: topicCompletedQuestions,
            totalQuestions: topicTotalQuestions,
            progress: Math.round((topicCompletedQuestions / topicTotalQuestions) * 100),
          });
        }
      });

      return completedTopics;
    };

    return {
      totalQuestions,
      totalCodePractices,
      completedTopicsWithProgress: getCompletedTopicsWithProgress(),
    };
  }, [
    lessonStatus,
    getTopics,
    getCodePractices,
    getLessonsForTopic,
    getQuestionsForLesson,
    getQuestionProgress,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name='ribbon' size={64} color={theme.colors.accent} />
          <Text style={styles.title}>{t('certificate.title', 'Certificates')}</Text>
          <Text style={styles.subtitle}>
            {t('certificate.subtitle', 'Print your achievement certificates')}
          </Text>
        </View>

        {/* Lesson Completion Certificate */}
        <View style={styles.certificateCard}>
          <View style={styles.certificateHeader}>
            <View style={styles.certificateIcon}>
              <Ionicons name='school' size={32} color={theme.colors.primary} />
            </View>
            <View style={styles.certificateInfo}>
              <Text style={styles.certificateTitle}>
                {t('certificate.lessonCompletion', 'Lesson Completion')}
              </Text>
              <Text style={styles.certificateDescription}>
                {t(
                  'certificate.lessonCompletionDescription',
                  'Certificate for completing all questions in lessons'
                )}
              </Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusLabel}>{t('certificate.progress', 'Progress')}:</Text>
                <Text style={styles.statusValue}>
                  {lessonStatus.totalCompletedQuestions} {t('certificate.questions', 'questions')} /{' '}
                  {appStats.totalQuestions} {t('certificate.questions', 'questions')}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            {lessonStatus.hasCompletedAnyLesson ? (
              <TouchableOpacity
                style={styles.shareButton}
                onPress={async () => {
                  try {
                    const questionStats = getTotalQuestionAnswered();
                    const accuracy =
                      questionStats.totalQuestions > 0
                        ? Math.round(
                            (questionStats.correctAnswers / questionStats.totalQuestions) * 100
                          )
                        : 0;

                    const certificateData: CertificateData = {
                      userName: 'Rust Learner',
                      type: 'lesson',
                      completionDate: new Date().toISOString(),
                      xp: lessonStatus.totalCompletedQuestions * 10,
                      totalQuestions: lessonStatus.totalCompletedQuestions,
                      completedCount: lessonStatus.totalCompletedQuestions,
                      totalCount: appStats.totalQuestions,
                      completedTopics: appStats.completedTopicsWithProgress.map(t => t.name),
                      accuracy: accuracy,
                      streakDays: currentStreakDays,
                      // Pass detailed topic progress for better certificate generation
                      topicProgress: appStats.completedTopicsWithProgress,
                    };

                    const filePath = await certificateService.generatePDF(certificateData);
                    if (filePath) {
                      await certificateService.shareCertificate(filePath, certificateData);
                    }
                  } catch (error) {
                    Alert.alert('Error', 'Failed to share certificate');
                  }
                }}
              >
                <Ionicons name='share-social' size={20} color={theme.colors.accent} />
                <Text style={styles.shareButtonText}>
                  {t('certificate.shareCertificate', 'Share')}
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.notEligibleContainer}>
                <Ionicons name='lock-closed' size={20} color={theme.colors.textSecondary} />
                <Text style={styles.notEligibleText}>
                  {t('certificate.notEligible', 'Not Eligible')}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Code Practice Certificate */}
        <View style={styles.certificateCard}>
          <View style={styles.certificateHeader}>
            <View style={styles.certificateIcon}>
              <Ionicons name='code' size={32} color={theme.colors.secondary} />
            </View>
            <View style={styles.certificateInfo}>
              <Text style={styles.certificateTitle}>
                {t('certificate.codePracticeCompletion', 'Code Practice Completion')}
              </Text>
              <Text style={styles.certificateDescription}>
                {t(
                  'certificate.codePracticeCompletionDescription',
                  'Certificate for completing all code practices'
                )}
              </Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusLabel}>{t('certificate.progress', 'Progress')}:</Text>
                <Text style={styles.statusValue}>
                  {codePracticeStatus.completed} / {totalCodePractices}{' '}
                  {t('certificate.practices', 'practices')}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            {codePracticeStatus.completed > 0 ? (
              <TouchableOpacity
                style={styles.shareButton}
                onPress={async () => {
                  try {
                    const certificateData: CertificateData = {
                      userName: 'Rust Learner',
                      type: 'codePractice',
                      completionDate: new Date().toISOString(),
                      xp: codePracticeStatus.completed * 25,
                      totalPractices: codePracticeStatus.completed,
                      completedCount: codePracticeStatus.completed,
                      totalCount: appStats.totalCodePractices,
                      completedTopics: appStats.completedTopicsWithProgress.map(t => t.name),
                      accuracy: 100, // Code practices are always 100% if completed
                      streakDays: currentStreakDays,
                      // Pass detailed topic progress for better certificate generation
                      topicProgress: appStats.completedTopicsWithProgress,
                    };

                    const filePath = await certificateService.generatePDF(certificateData);
                    if (filePath) {
                      await certificateService.shareCertificate(filePath, certificateData);
                    }
                  } catch (error) {
                    Alert.alert('Error', 'Failed to share certificate');
                  }
                }}
              >
                <Ionicons name='share-social' size={20} color={theme.colors.accent} />
                <Text style={styles.shareButtonText}>
                  {t('certificate.shareCertificate', 'Share')}
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.notEligibleContainer}>
                <Ionicons name='lock-closed' size={20} color={theme.colors.textSecondary} />
                <Text style={styles.notEligibleText}>
                  {t('certificate.notEligible', 'Not Eligible')}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Ionicons name='information-circle-outline' size={20} color={theme.colors.info} />
          <Text style={styles.infoText}>
            {t(
              'certificate.info',
              'Certificates are awarded for completing all questions in lessons and all code practices. Print them to showcase your achievements!'
            )}
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
    title: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    certificateCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.md,
    },
    certificateHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: theme.spacing.md,
    },
    certificateIcon: {
      marginRight: theme.spacing.md,
      marginTop: theme.spacing.xs,
    },
    certificateInfo: {
      flex: 1,
    },
    certificateTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    certificateDescription: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.sm,
      lineHeight: theme.typography.lineHeights.relaxed,
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginRight: theme.spacing.xs,
    },
    statusValue: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: '600',
      color: theme.colors.text,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
    },
    printButton: {
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flex: 1,
    },
    printButtonDisabled: {
      backgroundColor: theme.colors.border,
    },
    printButtonText: {
      color: 'white',
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    printButtonTextDisabled: {
      color: theme.colors.textSecondary,
    },
    shareButton: {
      backgroundColor: theme.colors.surface,
      borderWidth: 2,
      borderColor: theme.colors.accent,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flex: 1,
    },
    shareButtonText: {
      color: theme.colors.accent,
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    notEligibleContainer: {
      backgroundColor: theme.colors.surface,
      borderWidth: 2,
      borderColor: theme.colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flex: 1,
    },
    notEligibleText: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    infoCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    infoText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginLeft: theme.spacing.sm,
      flex: 1,
      lineHeight: theme.typography.lineHeights.relaxed,
    },
  });
