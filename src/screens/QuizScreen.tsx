import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useDataStore } from '../state/useDataStore';
import { useProgressStore, XP_PERFECT_LESSON_BONUS } from '../state/useProgressStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme } from '../theme';
import QuestionCard from '../components/QuestionCard';
import { Question, QuestionResult, LessonResult } from '../types';
import { QuizScreenProps } from '../types/navigation';

export default function QuizScreen({ route, navigation }: QuizScreenProps) {
  const { lessonId } = route.params;
  const { t } = useTranslation();
  const { getEffectiveTheme } = useSettingsStore();
  const { getLesson, getQuestionsForLesson } = useDataStore();
  const { completeQuestion, completeLesson } = useProgressStore();

  const lesson = getLesson(lessonId);
  const questions = getQuestionsForLesson(lessonId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [startTime, setStartTime] = useState(Date.now());
  const [textInput, setTextInput] = useState('');

  const theme = getEffectiveTheme() === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (!lesson || questions.length === 0) {
      Alert.alert(
        t('common.error', 'Error'),
        t('quiz.lessonOrQuestionsNotFound', 'Lesson or questions not found'),
        [{ text: t('common.ok', 'OK'), onPress: () => navigation.goBack() }]
      );
    }
  }, [lesson, questions, navigation]);

  const checkAnswer = (question: Question, userAnswer: string | number | boolean): boolean => {
    switch (question.type) {
      case 'mcq':
      case 'code_fix':
        return userAnswer === question.correctIndex;
      case 'tf':
        return userAnswer === question.answer;
      case 'fib': {
        const normalizedAnswer = String(userAnswer).toLowerCase().trim();
        return question.acceptableAnswers.some(
          acceptable => acceptable.toLowerCase().trim() === normalizedAnswer
        );
      }
      case 'predict_output': {
        const normalizedAnswer = String(userAnswer).trim();
        return question.expectedStdout.trim() === normalizedAnswer;
      }
      default:
        return false;
    }
  };

  const handleAnswer = (answer: string | number | boolean) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTextInput('');
    } else {
      finishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const finishQuiz = () => {
    const results: QuestionResult[] = questions.map(question => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer !== undefined ? checkAnswer(question, userAnswer) : false;

      const qResult: QuestionResult = {
        questionId: question.id,
        correct: isCorrect,
        userAnswer: userAnswer || '',
        timeSpent: 0, // Could be implemented with per-question timing
        points: question.points,
      };

      // Update progress for each question
      completeQuestion(qResult);

      return qResult;
    });

    // Calculate lesson completion
    const correctCount = results.filter(r => r.correct).length;
    const perfectScore = correctCount === questions.length;
    const xpEarned =
      results.reduce((total, r) => total + r.points, 0) +
      (perfectScore ? XP_PERFECT_LESSON_BONUS : 0);

    const lessonResult: LessonResult = {
      lessonId,
      completedAt: Date.now(),
      xpEarned: xpEarned,
      perfectScore,
      questionResults: results,
    };

    completeLesson(lessonResult);

    navigation.navigate('Results', {
      lessonId,
      score: correctCount,
      totalQuestions: questions.length,
      timeTaken: Date.now() - startTime,
      xpEarned,
      isPerfectScore: perfectScore,
    });

    setTextInput('');
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  if (!lesson || questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name='alert-circle-outline' size={64} color={theme.colors.error} />
          <Text style={styles.errorText}>
            {t('quiz.noQuestionsAvailable', 'No questions available')}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const hasAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} {t('quiz.of', 'of')} {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name='close' size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.questionContainer} showsVerticalScrollIndicator={false}>
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          textInput={textInput}
          setTextInput={setTextInput}
        />
      </ScrollView>

      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestionIndex === 0 && styles.navButtonDisabled]}
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <Ionicons
            name='chevron-back'
            size={20}
            color={currentQuestionIndex === 0 ? theme.colors.textSecondary : theme.colors.primary}
          />
          <Text
            style={[
              styles.navButtonText,
              currentQuestionIndex === 0 && styles.navButtonTextDisabled,
            ]}
          >
            {t('quiz.previous', 'Previous')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.nextButton, !hasAnswered && styles.navButtonDisabled]}
          onPress={handleNext}
          disabled={!hasAnswered}
        >
          <Text
            style={[
              styles.navButtonText,
              styles.nextButtonText,
              !hasAnswered && styles.navButtonTextDisabled,
            ]}
          >
            {currentQuestionIndex === questions.length - 1
              ? t('quiz.finish', 'Finish')
              : t('quiz.next', 'Next')}
          </Text>
          <Ionicons
            name='chevron-forward'
            size={20}
            color={!hasAnswered ? theme.colors.textSecondary : 'white'}
          />
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
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    progressContainer: {
      flex: 1,
      marginRight: theme.spacing.md,
    },
    progressText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.xs,
    },
    progressBar: {
      height: 4,
      backgroundColor: theme.colors.border,
      borderRadius: 2,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
    },
    closeButton: {
      padding: theme.spacing.xs,
    },
    questionContainer: {
      flex: 1,
      padding: theme.spacing.md,
    },
    navigationButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: theme.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    navButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },
    nextButton: {
      backgroundColor: theme.colors.primary,
    },
    navButtonDisabled: {
      borderColor: theme.colors.border,
      backgroundColor: 'transparent',
    },
    navButtonText: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.primary,
    },
    nextButtonText: {
      color: 'white',
    },
    navButtonTextDisabled: {
      color: theme.colors.textSecondary,
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.xl,
    },
    errorText: {
      fontSize: theme.typography.subheading.fontSize,
      color: theme.colors.error,
      marginTop: theme.spacing.md,
    },
  });
