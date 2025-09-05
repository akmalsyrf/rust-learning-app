import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Modal,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';
import { AIQuizScreenProps } from '../types/navigation';
import { AIQuizQuestion, AIQuizSession, AIQuizResult } from '../types';
import { geminiService } from '../services/geminiService';

const { width } = Dimensions.get('window');

export default function AIQuizScreen({ navigation, route }: AIQuizScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { t, i18n } = useTranslation();
  const { topic, questionCount = 5 } = route.params;

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  // State management
  const [session, setSession] = useState<AIQuizSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState<AIQuizResult | null>(null);

  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!geminiService.isInitialized()) {
        setError('apiKeyRequired');
        return;
      }

      // Get current language
      const currentLanguage = i18n.language as 'en' | 'id';

      const quizResponse = await geminiService.generateAdvancedRustQuiz(
        topic,
        questionCount,
        currentLanguage
      );

      const newSession: AIQuizSession = {
        id: `ai_quiz_${Date.now()}`,
        questions: quizResponse.questions,
        userAnswers: new Array(quizResponse.questions.length).fill(null),
        currentQuestionIndex: 0,
        startTime: Date.now(),
        isCompleted: false,
      };

      setSession(newSession);
      startTime.current = Date.now();
    } catch (err) {
      console.error('Error initializing quiz:', err);
      setError('failedToGenerate');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!session || quizCompleted) return;

    setSelectedAnswer(answerIndex);

    // Update session with user's answer
    const updatedAnswers = [...session.userAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;

    setSession({
      ...session,
      userAnswers: updatedAnswers,
    });
  };

  const handleNext = () => {
    if (!session) return;

    if (selectedAnswer === null) {
      Alert.alert(t('aiQuiz.noAnswerSelected'), t('aiQuiz.selectAnswer'));
      return;
    }

    if (currentQuestionIndex < session.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(session.userAnswers[currentQuestionIndex + 1]);
      setShowExplanation(false);
    } else {
      handleFinishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(session?.userAnswers[currentQuestionIndex - 1] || null);
      setShowExplanation(false);
    }
  };

  const handleFinishQuiz = async () => {
    if (!session) return;

    try {
      setIsLoading(true);

      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);

      // Get current language
      const currentLanguage = i18n.language as 'en' | 'id';

      const quizResult = await geminiService.generateQuizFeedback(
        session.questions,
        session.userAnswers as number[],
        timeSpent,
        currentLanguage
      );

      setResult(quizResult);
      setQuizCompleted(true);

      // Navigate to results screen
      navigation.navigate('AIQuizResults', {
        sessionId: session.id,
        score: quizResult.score,
        totalQuestions: quizResult.totalQuestions,
        timeSpent: quizResult.timeSpent,
        percentage: quizResult.percentage,
      });
    } catch (err) {
      console.error('Error finishing quiz:', err);
      setError('failedToGenerate');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExit = () => {
    setShowExitModal(true);
  };

  const confirmExit = () => {
    navigation.goBack();
  };

  const retryQuiz = () => {
    setError(null);
    setQuizCompleted(false);
    setResult(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    initializeQuiz();
  };

  const goToSettings = () => {
    navigation.navigate('LanguageSettings');
  };

  if (isLoading && !session) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color={theme.colors.primary} />
          <Text style={styles.loadingText}>{t('aiQuiz.generatingQuestions')}</Text>
          <Text style={styles.loadingSubtext}>{t('aiQuiz.pleaseWait')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name='alert-circle-outline' size={64} color={theme.colors.error} />
          <Text style={styles.errorTitle}>{t('aiQuiz.error')}</Text>
          <Text style={styles.errorText}>
            {error === 'apiKeyRequired' ? t('aiQuiz.setupApiKey') : t('aiQuiz.failedToGenerate')}
          </Text>

          <View style={styles.errorActions}>
            {error === 'apiKeyRequired' ? (
              <TouchableOpacity style={styles.primaryButton} onPress={goToSettings}>
                <Text style={styles.primaryButtonText}>{t('aiQuiz.goToSettings')}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.primaryButton} onPress={retryQuiz}>
                <Text style={styles.primaryButtonText}>{t('aiQuiz.tryAgain')}</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.goBack()}>
              <Text style={styles.secondaryButtonText}>{t('common.back')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (!session) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{t('aiQuiz.noQuestions')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = session.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === session.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleExit}>
          <Ionicons name='arrow-back' size={24} color={theme.colors.text} />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>{t('aiQuiz.title')}</Text>
          <Text style={styles.headerSubtitle}>
            {t('aiQuiz.question')} {currentQuestionIndex + 1} {t('aiQuiz.of')}{' '}
            {session.questions.length}
          </Text>
        </View>

        <View style={styles.headerBadge}>
          <Ionicons name='sparkles' size={16} color={theme.colors.accent} />
          <Text style={styles.badgeText}>{t('aiQuiz.poweredByAI')}</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${((currentQuestionIndex + 1) / session.questions.length) * 100}%` },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {Math.round(((currentQuestionIndex + 1) / session.questions.length) * 100)}%
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>
                {t(`difficulty.${currentQuestion.difficulty}`)}
              </Text>
            </View>
            <Text style={styles.topicText}>{currentQuestion.topic}</Text>
          </View>

          <Text style={styles.questionText}>{currentQuestion.question}</Text>

          {/* Code Example */}
          {currentQuestion.codeExample && (
            <View style={styles.codeContainer}>
              <Text style={styles.codeText}>{currentQuestion.codeExample}</Text>
            </View>
          )}

          {/* Answer Options */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = selectedAnswer !== null;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    isSelected && styles.optionSelected,
                    showResult && isCorrect && styles.optionCorrect,
                    showResult && isSelected && !isCorrect && styles.optionIncorrect,
                  ]}
                  onPress={() => handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <View style={styles.optionContent}>
                    <View
                      style={[
                        styles.optionIndicator,
                        isSelected && styles.optionIndicatorSelected,
                        showResult && isCorrect && styles.optionIndicatorCorrect,
                        showResult && isSelected && !isCorrect && styles.optionIndicatorIncorrect,
                      ]}
                    >
                      <Text
                        style={[
                          styles.optionLetter,
                          isSelected && styles.optionLetterSelected,
                          showResult && isCorrect && styles.optionLetterCorrect,
                          showResult && isSelected && !isCorrect && styles.optionLetterIncorrect,
                        ]}
                      >
                        {String.fromCharCode(65 + index)}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.optionTextSelected,
                        showResult && isCorrect && styles.optionTextCorrect,
                        showResult && isSelected && !isCorrect && styles.optionTextIncorrect,
                      ]}
                    >
                      {option}
                    </Text>
                  </View>

                  {showResult && isCorrect && (
                    <Ionicons name='checkmark-circle' size={20} color={theme.colors.success} />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <Ionicons name='close-circle' size={20} color={theme.colors.error} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Explanation */}
          {selectedAnswer !== null && (
            <View style={styles.explanationContainer}>
              <TouchableOpacity
                style={styles.explanationHeader}
                onPress={() => setShowExplanation(!showExplanation)}
              >
                <Text style={styles.explanationTitle}>{t('aiQuiz.questionExplanation')}</Text>
                <Ionicons
                  name={showExplanation ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>

              {showExplanation && (
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <View style={styles.navigationButtons}>
          {!isFirstQuestion && (
            <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
              <Ionicons name='chevron-back' size={20} color={theme.colors.primary} />
              <Text style={styles.navButtonText}>{t('aiQuiz.previous')}</Text>
            </TouchableOpacity>
          )}

          <View style={styles.spacer} />

          <TouchableOpacity
            style={[
              styles.primaryNavButton,
              selectedAnswer === null && styles.primaryNavButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={selectedAnswer === null}
          >
            <Text
              style={[
                styles.primaryNavButtonText,
                selectedAnswer === null && styles.primaryNavButtonTextDisabled,
              ]}
            >
              {isLastQuestion ? t('aiQuiz.finish') : t('aiQuiz.next')}
            </Text>
            <Ionicons
              name={isLastQuestion ? 'checkmark' : 'chevron-forward'}
              size={20}
              color={selectedAnswer === null ? theme.colors.textSecondary : theme.colors.background}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Exit Confirmation Modal */}
      <Modal
        visible={showExitModal}
        transparent
        animationType='fade'
        onRequestClose={() => setShowExitModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('aiQuiz.areYouSureExit')}</Text>
            <Text style={styles.modalMessage}>{t('aiQuiz.progressWillBeLost')}</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setShowExitModal(false)}>
                <Text style={styles.modalButtonText}>{t('aiQuiz.continue')}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={confirmExit}
              >
                <Text style={[styles.modalButtonText, styles.modalButtonTextPrimary]}>
                  {t('aiQuiz.exit')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
      padding: theme.spacing.lg,
    },
    loadingText: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      textAlign: 'center',
    },
    loadingSubtext: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.sm,
      textAlign: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.lg,
    },
    errorTitle: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight,
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
    errorActions: {
      width: '100%',
      gap: theme.spacing.md,
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
    secondaryButton: {
      backgroundColor: 'transparent',
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
    },
    secondaryButtonText: {
      color: theme.colors.text,
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
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
    headerSubtitle: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginTop: 2,
    },
    headerBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
    },
    badgeText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.accent,
      marginLeft: theme.spacing.xs,
      fontWeight: '600',
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
    },
    progressBar: {
      flex: 1,
      height: 4,
      backgroundColor: theme.colors.border,
      borderRadius: 2,
      marginRight: theme.spacing.sm,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
    },
    progressText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      fontWeight: '600',
    },
    content: {
      flex: 1,
      padding: theme.spacing.md,
    },
    questionCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.md,
    },
    questionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    difficultyBadge: {
      backgroundColor: theme.colors.accent,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
      marginRight: theme.spacing.sm,
    },
    difficultyText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.background,
      fontWeight: '600',
    },
    topicText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      flex: 1,
    },
    questionText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 24,
      marginBottom: theme.spacing.lg,
    },
    codeContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.lg,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primary,
    },
    codeText: {
      fontSize: theme.typography.body.fontSize,
      fontFamily: 'monospace',
      color: theme.colors.text,
      lineHeight: 20,
    },
    optionsContainer: {
      marginBottom: theme.spacing.lg,
    },
    optionButton: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionSelected: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary + '10',
    },
    optionCorrect: {
      borderColor: theme.colors.success,
      backgroundColor: theme.colors.success + '10',
    },
    optionIncorrect: {
      borderColor: theme.colors.error,
      backgroundColor: theme.colors.error + '10',
    },
    optionContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionIndicator: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.colors.border,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing.md,
    },
    optionIndicatorSelected: {
      backgroundColor: theme.colors.primary,
    },
    optionIndicatorCorrect: {
      backgroundColor: theme.colors.success,
    },
    optionIndicatorIncorrect: {
      backgroundColor: theme.colors.error,
    },
    optionLetter: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.textSecondary,
    },
    optionLetterSelected: {
      color: theme.colors.background,
    },
    optionLetterCorrect: {
      color: theme.colors.background,
    },
    optionLetterIncorrect: {
      color: theme.colors.background,
    },
    optionText: {
      flex: 1,
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 20,
    },
    optionTextSelected: {
      color: theme.colors.primary,
    },
    optionTextCorrect: {
      color: theme.colors.success,
    },
    optionTextIncorrect: {
      color: theme.colors.error,
    },
    explanationContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    explanationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.md,
    },
    explanationTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.primary,
    },
    explanationText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 22,
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
    navigationContainer: {
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    navigationButtons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    navButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
    },
    navButtonText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.primary,
      marginLeft: theme.spacing.xs,
    },
    spacer: {
      flex: 1,
    },
    primaryNavButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
    },
    primaryNavButtonDisabled: {
      backgroundColor: theme.colors.border,
    },
    primaryNavButtonText: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.background,
      marginRight: theme.spacing.sm,
    },
    primaryNavButtonTextDisabled: {
      color: theme.colors.textSecondary,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      margin: theme.spacing.lg,
      minWidth: width * 0.8,
    },
    modalTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
      textAlign: 'center',
    },
    modalMessage: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing.lg,
    },
    modalButtons: {
      flexDirection: 'row',
      gap: theme.spacing.md,
    },
    modalButton: {
      flex: 1,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
    },
    modalButtonPrimary: {
      backgroundColor: theme.colors.error,
      borderColor: theme.colors.error,
    },
    modalButtonText: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.text,
    },
    modalButtonTextPrimary: {
      color: theme.colors.background,
    },
  });
