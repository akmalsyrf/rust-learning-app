import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useDataStore } from '../state/useDataStore';
import { useProgressStore } from '../state/useProgressStore';
import { lightTheme, darkTheme } from '../theme';
import { LessonScreenProps } from '../types/navigation';

export default function LessonScreen({ route, navigation }: LessonScreenProps) {
  const { lessonId } = route.params;
  const { getEffectiveTheme } = useSettingsStore();
  const { getLesson, getTopic, getQuestionsForLesson } = useDataStore();
  const { getLessonStars } = useProgressStore();
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);
  
  const lesson = getLesson(lessonId);
  const topic = lesson ? getTopic(lesson.topicId) : null;
  const questions = getQuestionsForLesson(lessonId);
  const stars = getLessonStars(lessonId);

  if (!lesson || !topic) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={64} color={theme.colors.error} />
          <Text style={styles.errorText}>Lesson not found</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const renderStars = (stars: number) => {
    return Array.from({ length: 3 }, (_, index) => (
      <Ionicons
        key={index}
        name={index < stars ? 'star' : 'star-outline'}
        size={20}
        color={index < stars ? theme.colors.accent : theme.colors.border}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.breadcrumb}>
            <Text style={styles.topicName}>{topic.title}</Text>
            <Ionicons name="chevron-forward" size={16} color={theme.colors.textSecondary} />
            <Text style={styles.lessonName}>{lesson.title}</Text>
          </View>
          
          <View style={styles.progressIndicator}>
            <Text style={styles.progressText}>Your Progress</Text>
            <View style={styles.starsContainer}>
              {renderStars(stars)}
            </View>
          </View>
        </View>

        {/* Lesson Content */}
        <View style={styles.contentCard}>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          <Text style={styles.lessonSummary}>{lesson.summary}</Text>
          
          {/* Attribution */}
          <View style={styles.attributionContainer}>
            <Ionicons name="link-outline" size={16} color={theme.colors.primary} />
            <Text style={styles.attributionText}>
              Based on content from{' '}
              <Text style={styles.attributionLink}>Dasar Pemrograman Rust</Text>
            </Text>
          </View>
        </View>

        {/* Quiz Info */}
        <View style={styles.quizCard}>
          <View style={styles.quizHeader}>
            <View style={styles.quizIcon}>
              <Ionicons name="help-circle" size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.quizInfo}>
              <Text style={styles.quizTitle}>Practice Quiz</Text>
              <Text style={styles.quizSubtitle}>
                {questions.length} questions • Test your understanding
              </Text>
            </View>
          </View>

          <View style={styles.questionTypes}>
            <Text style={styles.questionTypesTitle}>Question Types:</Text>
            <View style={styles.questionTypesGrid}>
              <View style={styles.questionType}>
                <Ionicons name="checkmark-circle-outline" size={16} color={theme.colors.success} />
                <Text style={styles.questionTypeText}>Multiple Choice</Text>
              </View>
              <View style={styles.questionType}>
                <Ionicons name="code-outline" size={16} color={theme.colors.info} />
                <Text style={styles.questionTypeText}>Code Reading</Text>
              </View>
              <View style={styles.questionType}>
                <Ionicons name="create-outline" size={16} color={theme.colors.warning} />
                <Text style={styles.questionTypeText}>Fill in Blanks</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.startQuizButton}
            onPress={() => navigation.navigate('Quiz', { lessonId })}
          >
            <Ionicons name="play" size={20} color="white" />
            <Text style={styles.startQuizButtonText}>
              {stars > 0 ? 'Retake Quiz' : 'Start Quiz'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Code Practice (if available) */}
        <View style={styles.practiceCard}>
          <View style={styles.practiceHeader}>
            <View style={styles.practiceIcon}>
              <Ionicons name="code-slash" size={24} color={theme.colors.secondary} />
            </View>
            <View style={styles.practiceInfo}>
              <Text style={styles.practiceTitle}>Code Practice</Text>
              <Text style={styles.practiceSubtitle}>
                Hands-on coding exercises
              </Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.practiceButton}
            onPress={() => navigation.navigate('CodePractice', { lessonId })}
          >
            <Ionicons name="code" size={20} color={theme.colors.secondary} />
            <Text style={styles.practiceButtonText}>Try Code Exercises</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Summary */}
        {stars > 0 && (
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Your Achievement</Text>
            <View style={styles.summaryContent}>
              <View style={styles.starsContainer}>
                {renderStars(stars)}
              </View>
              <Text style={styles.summaryText}>
                Great work! You've completed this lesson with {stars} star{stars !== 1 ? 's' : ''}.
              </Text>
            </View>
          </View>
        )}
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
    marginBottom: theme.spacing.lg,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  topicName: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  lessonName: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    fontWeight: '500',
  },
  starsContainer: {
    flexDirection: 'row',
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
    marginBottom: theme.spacing.lg,
  },
  backButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  backButtonText: {
    color: 'white',
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
  contentCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
  },
  lessonTitle: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  lessonSummary: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    lineHeight: 24,
    marginBottom: theme.spacing.md,
  },
  attributionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  attributionText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  attributionLink: {
    color: theme.colors.primary,
    fontWeight: '500',
  },
  quizCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  quizIcon: {
    marginRight: theme.spacing.md,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  quizSubtitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
  },
  questionTypes: {
    marginBottom: theme.spacing.md,
  },
  questionTypesTitle: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '500',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  questionTypesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  questionType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.md,
    marginBottom: theme.spacing.xs,
  },
  questionTypeText: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  startQuizButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  startQuizButtonText: {
    color: 'white',
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    marginLeft: theme.spacing.sm,
  },
  practiceCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
  },
  practiceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  practiceIcon: {
    marginRight: theme.spacing.md,
  },
  practiceInfo: {
    flex: 1,
  },
  practiceTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  practiceSubtitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
  },
  practiceButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  practiceButtonText: {
    color: theme.colors.secondary,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    marginLeft: theme.spacing.sm,
  },
  summaryCard: {
    backgroundColor: theme.colors.success + '20',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.success + '40',
  },
  summaryTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  summaryContent: {
    alignItems: 'center',
  },
  summaryText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
});
