import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useDataStore } from '../state/useDataStore';
import { useProgressStore } from '../state/useProgressStore';
import { lightTheme, darkTheme } from '../theme';

export default function ModulesScreen({ navigation }: any) {
  const { getEffectiveTheme } = useSettingsStore();
  const { getTopics, getLessonsForTopic } = useDataStore();
  const { getLessonStars } = useProgressStore();
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);
  
  const topics = getTopics();

  const getLessonProgress = (topicId: string) => {
    const lessons = getLessonsForTopic(topicId);
    const completedLessons = lessons.filter(lesson => getLessonStars(lesson.id) > 0);
    return {
      completed: completedLessons.length,
      total: lessons.length,
    };
  };

  const renderStars = (stars: number) => {
    return Array.from({ length: 3 }, (_, index) => (
      <Ionicons
        key={index}
        name={index < stars ? 'star' : 'star-outline'}
        size={16}
        color={index < stars ? theme.colors.accent : theme.colors.border}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Learn Rust</Text>
          <Text style={styles.subtitle}>Master Rust programming step by step</Text>
        </View>

        {topics.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="book-outline" size={64} color={theme.colors.textSecondary} />
            <Text style={styles.emptyText}>Loading lessons...</Text>
            <Text style={styles.emptySubtext}>Content will appear here once loaded</Text>
          </View>
        )}

        {topics.map((topic) => {
          const progress = getLessonProgress(topic.id);
          const progressPercentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
          
          return (
            <TouchableOpacity
              key={topic.id}
              style={styles.topicCard}
              onPress={() => {
                // Navigate to first lesson or topic detail
                const lessons = getLessonsForTopic(topic.id);
                if (lessons.length > 0) {
                  navigation.navigate('Lesson', { lessonId: lessons[0].id });
                }
              }}
            >
              <View style={styles.topicHeader}>
                <View style={styles.topicInfo}>
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  <Text style={styles.topicDescription}>{topic.description}</Text>
                </View>
                <View style={styles.topicProgress}>
                  <Text style={styles.progressText}>
                    {progress.completed}/{progress.total}
                  </Text>
                </View>
              </View>

              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { width: `${progressPercentage}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.progressLabel}>
                  {Math.round(progressPercentage)}% Complete
                </Text>
              </View>

              {/* Show lessons preview */}
              <View style={styles.lessonsPreview}>
                {getLessonsForTopic(topic.id).slice(0, 3).map((lesson) => {
                  const stars = getLessonStars(lesson.id);
                  return (
                    <View key={lesson.id} style={styles.lessonItem}>
                      <View style={styles.lessonInfo}>
                        <Text style={styles.lessonTitle}>{lesson.title}</Text>
                        <View style={styles.starsContainer}>
                          {renderStars(stars)}
                        </View>
                      </View>
                      <Ionicons 
                        name={stars > 0 ? 'checkmark-circle' : 'play-circle-outline'} 
                        size={20} 
                        color={stars > 0 ? theme.colors.success : theme.colors.textSecondary} 
                      />
                    </View>
                  );
                })}
                
                {getLessonsForTopic(topic.id).length > 3 && (
                  <Text style={styles.moreLessons}>
                    +{getLessonsForTopic(topic.id).length - 3} more lessons
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Placeholder topics for demo */}
        {topics.length === 0 && (
          <>
            <View style={styles.topicCard}>
              <View style={styles.topicHeader}>
                <View style={styles.topicInfo}>
                  <Text style={styles.topicTitle}>Getting Started</Text>
                  <Text style={styles.topicDescription}>
                    Learn the basics: setup, variables, and your first Rust program
                  </Text>
                </View>
                <View style={styles.topicProgress}>
                  <Text style={styles.progressText}>0/5</Text>
                </View>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '0%' }]} />
                </View>
                <Text style={styles.progressLabel}>0% Complete</Text>
              </View>
            </View>

            <View style={styles.topicCard}>
              <View style={styles.topicHeader}>
                <View style={styles.topicInfo}>
                  <Text style={styles.topicTitle}>Data Types & Control Flow</Text>
                  <Text style={styles.topicDescription}>
                    Master Rust's type system and control structures
                  </Text>
                </View>
                <View style={styles.topicProgress}>
                  <Text style={styles.progressText}>0/7</Text>
                </View>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '0%' }]} />
                </View>
                <Text style={styles.progressLabel}>0% Complete</Text>
              </View>
            </View>
          </>
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
  title: {
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  emptyText: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
  },
  emptySubtext: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  topicCard: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  topicInfo: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  topicTitle: {
    fontSize: theme.typography.subheading.fontSize,
    fontWeight: theme.typography.subheading.fontWeight,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  topicDescription: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  topicProgress: {
    alignItems: 'flex-end',
  },
  progressText: {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  progressContainer: {
    marginBottom: theme.spacing.md,
  },
  progressBar: {
    height: 6,
    backgroundColor: theme.colors.border,
    borderRadius: 3,
    marginBottom: theme.spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  lessonsPreview: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.sm,
  },
  lessonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  moreLessons: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
    marginTop: theme.spacing.xs,
  },
});
