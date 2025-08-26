import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useDataStore } from '../state/useDataStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { CodePracticeScreenProps } from '../types/navigation';
import CodePracticeCard from '../components/CodePracticeCard';
import { CodePractice } from '../types';

export default function CodePracticeScreen({ route }: CodePracticeScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { getCodePractices, getTopics } = useDataStore();
  const { t } = useTranslation();
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [practices, setPractices] = useState<CodePractice[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadPractices();
  }, [route.params, getCodePractices, getTopics]);

  const loadPractices = () => {
    let loadedPractices: CodePractice[] = [];

    if (route.params?.lessonId) {
      loadedPractices = getCodePractices().filter(p => p.lessonId === route.params.lessonId);
    } else if (route.params?.topicId) {
      loadedPractices = getCodePractices().filter(p => p.topicId === route.params.topicId);
    } else {
      // Show all practices if no specific lesson or topic
      loadedPractices = getCodePractices();
    }

    setPractices(loadedPractices);
  };

  const filteredPractices = practices.filter(practice => {
    const matchesDifficulty = selectedFilter === 'all' || practice.difficulty === selectedFilter;
    const matchesCategory = selectedCategory === 'all' || practice.category === selectedCategory;
    return matchesDifficulty && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(practices.map(p => p.category)))];
  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const handlePracticeComplete = (practiceId: string, userCode: string) => {
    // Find the practice to get its details
    const practice = practices.find(p => p.id === practiceId);

    if (practice) {
      // Calculate XP reward
      const baseXP = practice.points;
      const bonusXP = 25; // First completion bonus
      const totalXP = baseXP + bonusXP;

      console.log(`Practice ${practiceId} completed with code:`, userCode);
      console.log(`XP Earned: +${totalXP} (${baseXP} base + ${bonusXP} bonus)`);

      // Show XP earned alert
      Alert.alert(
        t('codePractice.practiceCompleted', 'Practice Completed!'),
        `${t('codePractice.greatJob', 'Great job! You completed this practice.')}\n\n🎁 ${t('codePractice.xpEarned', 'XP Earned')}: +${totalXP}`,
        [{ text: t('common.ok', 'OK') }]
      );
    }
  };

  const handleHintUsed = (practiceId: string, hintIndex: number) => {
    // In a real app, this would track hint usage
    console.log(`Hint ${hintIndex} used for practice ${practiceId}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return theme.colors.success;
      case 'medium':
        return theme.colors.warning;
      case 'hard':
        return theme.colors.error;
      default:
        return theme.colors.textSecondary;
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'leaf';
      case 'medium':
        return 'trending-up';
      case 'hard':
        return 'flame';
      default:
        return 'help-circle';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{t('codePractice.title', 'Code Practice')}</Text>
          <Text style={styles.subtitle}>
            {t('codePractice.subtitle', 'Practice Rust programming with interactive exercises')}
          </Text>
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          {/* Difficulty Filter */}
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>{t('codePractice.difficulty', 'Difficulty:')}</Text>
            <View style={styles.filterButtons}>
              {difficulties.map(difficulty => (
                <TouchableOpacity
                  key={difficulty}
                  style={[
                    styles.filterButton,
                    selectedFilter === difficulty && styles.filterButtonActive,
                  ]}
                  onPress={() => setSelectedFilter(difficulty as any)}
                >
                  {difficulty !== 'all' && (
                    <Ionicons
                      name={getDifficultyIcon(difficulty) as any}
                      size={16}
                      color={
                        selectedFilter === difficulty
                          ? theme.colors.white
                          : getDifficultyColor(difficulty)
                      }
                    />
                  )}
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedFilter === difficulty && styles.filterButtonTextActive,
                    ]}
                  >
                    {difficulty === 'all'
                      ? t('codePractice.all', 'All')
                      : t(
                          `difficulty.${difficulty}`,
                          difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
                        )}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Category Filter */}
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>{t('codePractice.category', 'Category:')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.filterButtons}>
                {categories.map(category => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.filterButton,
                      selectedCategory === category && styles.filterButtonActive,
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text
                      style={[
                        styles.filterButtonText,
                        selectedCategory === category && styles.filterButtonTextActive,
                      ]}
                    >
                      {category === 'all' ? t('codePractice.all', 'All') : category}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Practice Count */}
        <View style={styles.practiceCount}>
          <Text style={styles.practiceCountText}>
            {filteredPractices.length} {t('codePractice.practice', 'practice')}
            {filteredPractices.length !== 1 ? 's' : ''} {t('codePractice.found', 'found')}
          </Text>
        </View>

        {/* Practices List */}
        {filteredPractices.length > 0 ? (
          <View style={styles.practicesList}>
            {filteredPractices.map(practice => (
              <CodePracticeCard
                key={practice.id}
                practice={practice}
                onComplete={handlePracticeComplete}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name='code-slash' size={64} color={theme.colors.textSecondary} />
            <Text style={styles.emptyStateTitle}>
              {t('codePractice.noPracticesFound', 'No Practices Found')}
            </Text>
            <Text style={styles.emptyStateText}>
              {t(
                'codePractice.emptyStateText',
                'Try adjusting your filters or check back later for more exercises.'
              )}
            </Text>
          </View>
        )}

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Ionicons name='information-circle' size={24} color={theme.colors.primary} />
            <Text style={styles.infoTitle}>
              {t('codePractice.aboutCodePractice', 'About Code Practice')}
            </Text>
          </View>
          <Text style={styles.infoText}>
            {t(
              'codePractice.infoText',
              'These interactive exercises help you learn Rust by writing actual code. Each practice includes hints, expected output, and a solution to check your work.'
            )}
          </Text>
          <View style={styles.infoFeatures}>
            <View style={styles.infoFeature}>
              <Ionicons name='checkmark-circle' size={16} color={theme.colors.success} />
              <Text style={styles.infoFeatureText}>
                {t('codePractice.syntaxHighlighting', 'Syntax highlighting')}
              </Text>
            </View>
            <View style={styles.infoFeature}>
              <Ionicons name='checkmark-circle' size={16} color={theme.colors.success} />
              <Text style={styles.infoFeatureText}>
                {t('codePractice.interactiveHints', 'Interactive hints')}
              </Text>
            </View>
            <View style={styles.infoFeature}>
              <Ionicons name='checkmark-circle' size={16} color={theme.colors.success} />
              <Text style={styles.infoFeatureText}>
                {t('codePractice.solutionChecking', 'Solution checking')}
              </Text>
            </View>
          </View>
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
      padding: theme.spacing.lg,
    },
    header: {
      marginBottom: theme.spacing.xl,
    },
    title: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    subtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      lineHeight: theme.typography.body.lineHeight,
    },
    filtersContainer: {
      marginBottom: theme.spacing.lg,
      gap: theme.spacing.md,
    },
    filterSection: {
      gap: theme.spacing.sm,
    },
    filterLabel: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
    },
    filterButtons: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
      flexWrap: 'wrap',
    },
    filterButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    filterButtonActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    filterButtonText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      fontWeight: '500' as any,
    },
    filterButtonTextActive: {
      color: theme.colors.white,
    },
    practiceCount: {
      marginBottom: theme.spacing.lg,
    },
    practiceCountText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    practicesList: {
      gap: theme.spacing.lg,
      marginBottom: theme.spacing.xl,
    },
    emptyState: {
      alignItems: 'center',
      paddingVertical: theme.spacing.xxl,
      gap: theme.spacing.md,
    },
    emptyStateTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
    },
    emptyStateText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: theme.typography.body.lineHeight,
      maxWidth: 300,
    },
    infoCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    infoHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    infoTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
    },
    infoText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: theme.typography.body.lineHeight,
      marginBottom: theme.spacing.md,
    },
    infoFeatures: {
      gap: theme.spacing.sm,
    },
    infoFeature: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    infoFeatureText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
    },
  });
