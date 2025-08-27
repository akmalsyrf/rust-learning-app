import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { useDataStore } from '../state/useDataStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { Question } from '../types';
import QuestionCard from '../components/QuestionCard';
import { ReviewMistakesScreenProps } from '../types/navigation';

export default function ReviewMistakesScreen({ navigation }: ReviewMistakesScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { getIncorrectQuestions, completeQuestion, addXP } = useProgressStore();
  const { getQuestion } = useDataStore();
  const { t } = useTranslation();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const [incorrectQuestions, setIncorrectQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | number | boolean | undefined>(undefined);
  const [isCorrect, setIsCorrect] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  useEffect(() => {
    loadIncorrectQuestions();
  }, []);

  const loadIncorrectQuestions = () => {
    const incorrectQuestionIds = getIncorrectQuestions();
    const questions = incorrectQuestionIds
      .map(id => getQuestion(id))
      .filter((q): q is Question => q !== undefined);

    // Shuffle questions for variety
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    setIncorrectQuestions(shuffledQuestions);
  };

  const handleAnswer = (answer: string | number | boolean) => {
    setUserAnswer(answer);
    setShowResult(true);
    setTotalAnswered(prev => prev + 1);

    const currentQuestion = incorrectQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    // Check if answer is correct
    let correct = false;
    if (currentQuestion.type === 'mcq') {
      correct = answer === currentQuestion.correctIndex;
    } else if (currentQuestion.type === 'tf') {
      correct = answer === currentQuestion.answer;
    } else if (currentQuestion.type === 'fib') {
      const normalizedAnswer = String(answer).toLowerCase().trim();
      correct = currentQuestion.acceptableAnswers.some(
        acceptable => acceptable.toLowerCase().trim() === normalizedAnswer
      );
    } else if (currentQuestion.type === 'code_fix') {
      correct = answer === currentQuestion.correctIndex;
    } else if (currentQuestion.type === 'predict_output') {
      correct =
        String(answer).toLowerCase().trim() === currentQuestion.expectedStdout.toLowerCase().trim();
    }

    setIsCorrect(correct);

    if (correct) {
      // Award half XP for correct answers in review mode
      const halfPoints = Math.floor(currentQuestion.points / 2);
      const actualXP = addXP(halfPoints);
      setScore(prev => prev + halfPoints);

      // Record the result
      completeQuestion({
        questionId: currentQuestion.id,
        correct: true,
        userAnswer: answer,
        timeSpent: 0, // We don't track time in review mode
        points: halfPoints,
      });
    } else {
      // Record the incorrect attempt
      completeQuestion({
        questionId: currentQuestion.id,
        correct: false,
        userAnswer: answer,
        timeSpent: 0,
        points: 0,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < incorrectQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowResult(false);
      setUserAnswer(undefined);
      setIsCorrect(false);
      setTextInput('');
    } else {
      // Quiz completed
      Alert.alert(
        t('reviewMistakes.completed', 'Review Completed!'),
        t('reviewMistakes.completedMessage', 'You have reviewed all your mistakes. Great job!'),
        [{ text: 'OK' }]
      );

      // Navigate back to main tabs
      navigation.navigate('MainTabs');
    }
  };

  const handleRetry = () => {
    setShowResult(false);
    setUserAnswer(undefined);
    setIsCorrect(false);
    setTextInput('');
  };

  const currentQuestion = incorrectQuestions[currentQuestionIndex];

  if (incorrectQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Ionicons name='checkmark-circle' size={64} color={theme.colors.success} />
          <Text style={styles.emptyTitle}>
            {t('reviewMistakes.noMistakes', 'No Mistakes to Review!')}
          </Text>
          <Text style={styles.emptySubtitle}>
            {t(
              'reviewMistakes.noMistakesMessage',
              "Great job! You haven't made any mistakes yet. Keep learning!"
            )}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{t('reviewMistakes.title', 'Review Your Mistakes')}</Text>
          <Text style={styles.subtitle}>
            {t('reviewMistakes.subtitle', 'Practice questions you got wrong before')}
          </Text>
        </View>

        {/* Progress */}
        <View style={styles.progressCard}>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>{t('reviewMistakes.progress', 'Progress')}</Text>
            <Text style={styles.progressValue}>
              {currentQuestionIndex + 1} / {incorrectQuestions.length}
            </Text>
          </View>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>{t('reviewMistakes.score', 'Score')}</Text>
            <Text style={styles.progressValue}>{score} XP</Text>
          </View>
        </View>

        {/* Question */}
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            showResult={showResult}
            userAnswer={userAnswer}
            isCorrect={isCorrect}
            textInput={textInput}
            setTextInput={setTextInput}
          />
        )}

        {/* Action Buttons */}
        {showResult && (
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
              <Ionicons name='refresh' size={20} color={theme.colors.primary} />
              <Text style={styles.retryButtonText}>{t('reviewMistakes.retry', 'Retry')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Ionicons name='arrow-forward' size={20} color='white' />
              <Text style={styles.nextButtonText}>
                {currentQuestionIndex < incorrectQuestions.length - 1
                  ? t('reviewMistakes.next', 'Next')
                  : t('reviewMistakes.finish', 'Finish')}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Ionicons name='information-circle-outline' size={20} color={theme.colors.info} />
          <Text style={styles.infoText}>
            {t(
              'reviewMistakes.info',
              'In review mode, you earn half XP for correct answers. This helps you learn from your mistakes!'
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
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    progressCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.md,
    },
    progressRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    progressLabel: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
    },
    progressValue: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.text,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.lg,
    },
    retryButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flex: 1,
      marginRight: theme.spacing.sm,
    },
    retryButtonText: {
      color: theme.colors.primary,
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginLeft: theme.spacing.sm,
    },
    nextButton: {
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      flex: 1,
      marginLeft: theme.spacing.sm,
    },
    nextButtonText: {
      color: 'white',
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
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.xl,
    },
    emptyTitle: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
      textAlign: 'center',
    },
    emptySubtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: theme.typography.lineHeights.relaxed,
    },
  });
