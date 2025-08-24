import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useDataStore } from '../state/useDataStore';
import { useProgressStore } from '../state/useProgressStore';
import { lightTheme, darkTheme } from '../theme';
import QuestionCard from '../components/QuestionCard';
import { Question, QuestionResult, LessonResult } from '../types';
import { QuizScreenProps } from '../types/navigation';

export default function QuizScreen({ route, navigation }: QuizScreenProps) {
  const { lessonId } = route.params;
  const { getEffectiveTheme } = useSettingsStore();
  const { getLesson, getQuestionsForLesson } = useDataStore();
  const { completeQuestion, completeLesson } = useProgressStore();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number | boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [startTime] = useState(Date.now());
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);
  
  const lesson = getLesson(lessonId);
  const questions = getQuestionsForLesson(lessonId);
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    if (!lesson || questions.length === 0) {
      Alert.alert('Error', 'Lesson or questions not found', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    }
  }, [lesson, questions, navigation]);

  const checkAnswer = (question: Question, userAnswer: string | number | boolean): boolean => {
    switch (question.type) {
      case 'mcq':
      case 'code_fix':
        return userAnswer === question.correctIndex;
      case 'tf':
        return userAnswer === question.answer;
      case 'fib':
        const normalizedAnswer = String(userAnswer).toLowerCase().trim();
        return question.acceptableAnswers.some(acceptable => 
          acceptable.toLowerCase().trim() === normalizedAnswer
        );
      case 'predict_output':
        const normalizedOutput = String(userAnswer).trim();
        const expectedOutput = question.expectedStdout.trim();
        return normalizedOutput === expectedOutput;
      default:
        return false;
    }
  };

  const handleAnswer = (answer: string | number | boolean) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
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
      
      const result: QuestionResult = {
        questionId: question.id,
        correct: isCorrect,
        userAnswer: userAnswer || '',
        timeSpent: 0, // Could be implemented with per-question timing
      };

      // Update progress for each question
      completeQuestion(result);
      
      return result;
    });

    setQuestionResults(results);
    
    // Calculate lesson completion
    const correctCount = results.filter(r => r.correct).length;
    const perfectScore = correctCount === questions.length;
    const xpEarned = correctCount * 10 + (perfectScore ? 10 : 0);
    
    const lessonResult: LessonResult = {
      lessonId,
      questionResults: results,
      completedAt: Date.now(),
      xpEarned,
      perfectScore,
    };

    completeLesson(lessonResult);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setQuestionResults([]);
  };

  const goToResults = () => {
    const lessonResult: LessonResult = {
      lessonId,
      questionResults,
      completedAt: Date.now(),
      xpEarned: questionResults.filter(r => r.correct).length * 10,
      perfectScore: questionResults.every(r => r.correct),
    };
    
    navigation.navigate('Results', { lessonResult });
  };

  if (!lesson || questions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={64} color={theme.colors.error} />
          <Text style={styles.errorText}>No questions available</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (showResults) {
    const correctCount = questionResults.filter(r => r.correct).length;
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.resultsHeader}>
            <Ionicons 
              name={percentage >= 70 ? 'checkmark-circle' : 'close-circle'} 
              size={64} 
              color={percentage >= 70 ? theme.colors.success : theme.colors.warning}
            />
            <Text style={styles.resultsTitle}>Quiz Complete!</Text>
            <Text style={styles.resultsScore}>
              {correctCount}/{questions.length} ({percentage}%)
            </Text>
          </View>

          <View style={styles.resultsSummary}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>{correctCount}</Text>
              <Text style={styles.summaryLabel}>Correct</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>{questions.length - correctCount}</Text>
              <Text style={styles.summaryLabel}>Incorrect</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>{correctCount * 10}</Text>
              <Text style={styles.summaryLabel}>XP Earned</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.goBack()}>
              <Text style={styles.primaryButtonText}>Continue Learning</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.secondaryButton} onPress={restartQuiz}>
              <Ionicons name="refresh" size={16} color={theme.colors.primary} />
              <Text style={styles.secondaryButtonText}>Retake Quiz</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const hasAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} of {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.questionContainer} showsVerticalScrollIndicator={false}>
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      </ScrollView>

      <View style={styles.navigationButtons}>
        <TouchableOpacity 
          style={[styles.navButton, currentQuestionIndex === 0 && styles.navButtonDisabled]}
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <Ionicons name="chevron-back" size={20} color={
            currentQuestionIndex === 0 ? theme.colors.textSecondary : theme.colors.primary
          } />
          <Text style={[
            styles.navButtonText,
            currentQuestionIndex === 0 && styles.navButtonTextDisabled
          ]}>
            Previous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.navButton, 
            styles.nextButton,
            !hasAnswered && styles.navButtonDisabled
          ]}
          onPress={handleNext}
          disabled={!hasAnswered}
        >
          <Text style={[
            styles.navButtonText,
            styles.nextButtonText,
            !hasAnswered && styles.navButtonTextDisabled
          ]}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </Text>
          <Ionicons name="chevron-forward" size={20} color={
            !hasAnswered ? theme.colors.textSecondary : 'white'
          } />
        </TouchableOpacity>
      </View>
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
  resultsHeader: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  resultsTitle: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  resultsScore: {
    fontSize: theme.typography.subheading.fontSize,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  resultsSummary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.lg,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  summaryLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  actionButtons: {
    gap: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    gap: theme.spacing.sm,
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
});
