import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useDataStore } from '../state/useDataStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import { FreeCodePracticeScreenProps } from '../types/navigation';
import CodePracticeCard from '../components/CodePracticeCard';
import { useProgressStore } from '../state/useProgressStore';
import { getTopicTitle } from '../utils/localization';

export default function FreeCodePracticeScreen({ navigation }: FreeCodePracticeScreenProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const { getCodePractices, getTopics } = useDataStore();
  const { t, i18n } = useTranslation();
  const { xp, getTodayXP } = useProgressStore(); // Get current XP and today XP function

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  // Get current language
  const currentLanguage = i18n.language as 'en' | 'id';

  const topics = getTopics();
  const allPractices = getCodePractices();

  // Default to first topic if available
  const [selectedTopic, setSelectedTopic] = useState<string>(topics.length > 0 ? topics[0].id : '');

  const filteredPractices = useMemo(() => {
    if (!selectedTopic) return allPractices;
    return allPractices.filter(practice => practice.topicId === selectedTopic);
  }, [selectedTopic, allPractices]);

  const getPracticesCountByTopic = (topicId: string) => {
    return allPractices.filter(practice => practice.topicId === topicId).length;
  };

  const getTopicName = (topicId: string) => {
    const topic = topics.find(t => t.id === topicId);
    return topic ? getTopicTitle(topic, currentLanguage) : '';
  };

  const handlePracticeComplete = (practiceId: string, userCode: string) => {
    // Find the practice to get its details
    const practice = allPractices.find(p => p.id === practiceId);

    if (practice) {
      // Calculate XP reward
      const baseXP = practice.points;
      const bonusXP = 25; // First completion bonus
      const totalXP = baseXP + bonusXP;

      Alert.alert(
        t('codePractice.practiceCompleted', 'Practice Completed!'),
        `${t('codePractice.greatJob', 'Great job! You completed this practice.')}\n\n🎁 ${t('codePractice.xpEarned', 'XP Earned')}: +${totalXP}`,
        [{ text: t('common.ok', 'OK') }]
      );
    }
  };

  const handleNavigateToFullPractice = () => {
    navigation.navigate('CodePractice', {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name='code-slash' size={48} color={theme.colors.primary} />
          <Text style={styles.title}>{t('freeCodePractice.title', 'Free Code Practice')}</Text>
          <Text style={styles.subtitle}>
            {t(
              'freeCodePractice.subtitle',
              'Practice Rust programming with hands-on coding exercises'
            )}
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name='code-slash' size={24} color={theme.colors.primary} />
            <Text style={styles.statNumber}>{allPractices.length}</Text>
            <Text style={styles.statLabel}>
              {t('freeCodePractice.totalExercises', 'Total Exercises')}
            </Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name='library' size={24} color={theme.colors.accent} />
            <Text style={styles.statNumber}>{topics.length}</Text>
            <Text style={styles.statLabel}>{t('freeCodePractice.topics', 'Topics')}</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name='star' size={24} color={theme.colors.streak} />
            <Text style={styles.statNumber}>
              {allPractices.filter(p => p.difficulty === 'easy').length}
            </Text>
            <Text style={styles.statLabel}>
              {t('freeCodePractice.beginnerFriendly', 'Beginner')}
            </Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name='trophy' size={24} color={theme.colors.success} />
            <Text style={styles.statNumber}>{xp}</Text>
            <Text style={styles.statLabel}>{t('common.xp', 'Total XP')}</Text>
          </View>
        </View>

        {/* Topic Selection */}
        <View style={styles.topicsSection}>
          <Text style={styles.sectionTitle}>
            {t('freeCodePractice.selectTopic', 'Select a Topic')}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topicsScroll}>
            {topics.map(topic => (
              <TouchableOpacity
                key={topic.id}
                style={[
                  styles.topicButton,
                  selectedTopic === topic.id && styles.topicButtonSelected,
                ]}
                onPress={() => setSelectedTopic(topic.id)}
              >
                <Text
                  style={[
                    styles.topicButtonText,
                    {
                      color:
                        selectedTopic === topic.id
                          ? theme.colors.primary
                          : theme.colors.textSecondary,
                    },
                  ]}
                >
                  {getTopicTitle(topic, currentLanguage)}
                </Text>
                <Text style={styles.topicCount}>{getPracticesCountByTopic(topic.id)}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Practices List */}
        <View style={styles.practicesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {selectedTopic
                ? `${getTopicName(selectedTopic)} ${t('freeCodePractice.exercises', 'Exercises')}`
                : t('freeCodePractice.selectTopic', 'Select a Topic')}
            </Text>
            <Text style={styles.practiceCount}>
              {filteredPractices.length} {t('freeCodePractice.exercises', 'exercises')}
            </Text>
          </View>

          {filteredPractices.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name='code-slash' size={48} color={theme.colors.textSecondary} />
              <Text style={styles.emptyTitle}>
                {t('freeCodePractice.noExercises', 'No Exercises Found')}
              </Text>
              <Text style={styles.emptySubtitle}>
                {t(
                  'freeCodePractice.tryDifferentTopic',
                  'Try selecting a different topic or check back later.'
                )}
              </Text>
            </View>
          ) : (
            filteredPractices.slice(0, 3).map(practice => (
              <View key={practice.id} style={styles.practiceCard}>
                <CodePracticeCard
                  practice={practice}
                  onComplete={handlePracticeComplete}
                  isPreview={true}
                />
              </View>
            ))
          )}

          {/* Show More Button */}
          {filteredPractices.length > 3 && (
            <TouchableOpacity style={styles.showMoreButton} onPress={handleNavigateToFullPractice}>
              <Text style={styles.showMoreText}>
                {t('freeCodePractice.showMore', 'Show More Exercises')}
              </Text>
              <Ionicons name='arrow-forward' size={16} color={theme.colors.primary} />
            </TouchableOpacity>
          )}
        </View>

        {/* Call to Action */}
        <View style={styles.ctaCard}>
          <Ionicons name='rocket' size={32} color={theme.colors.primary} />
          <Text style={styles.ctaTitle}>
            {t('freeCodePractice.readyForMore', 'Ready for More?')}
          </Text>
          <Text style={styles.ctaSubtitle}>
            {t(
              'freeCodePractice.exploreFullLibrary',
              'Explore our full library of code practices with detailed solutions and hints.'
            )}
          </Text>
          <TouchableOpacity style={styles.ctaButton} onPress={handleNavigateToFullPractice}>
            <Text style={styles.ctaButtonText}>
              {t('freeCodePractice.exploreFullLibrary', 'Explore Full Library')}
            </Text>
            <Ionicons name='arrow-forward' size={16} color='white' />
          </TouchableOpacity>
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
      marginBottom: theme.spacing.lg,
      alignItems: 'center',
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
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.lg,
    },
    statCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginHorizontal: theme.spacing.xs,
    },
    statNumber: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.colors.text,
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    },
    statLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    topicsSection: {
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    topicsScroll: {
      flexDirection: 'row',
      paddingBottom: theme.spacing.xs,
    },
    topicButton: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      marginRight: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 80,
    },
    topicButtonSelected: {
      backgroundColor: theme.colors.primary + '15',
      borderColor: theme.colors.primary,
    },
    topicButtonText: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: '500',
      textAlign: 'center',
    },
    topicCount: {
      fontSize: 10,
      color: theme.colors.textSecondary,
      marginTop: 2,
    },
    practicesSection: {
      marginBottom: theme.spacing.lg,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    practiceCount: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
    practiceCard: {
      marginBottom: theme.spacing.md,
    },
    emptyState: {
      alignItems: 'center',
      padding: theme.spacing.xl,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
    },
    emptyTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.xs,
    },
    emptySubtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    showMoreButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    showMoreText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.primary,
      fontWeight: '500',
      marginRight: theme.spacing.sm,
    },
    ctaCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginBottom: theme.spacing.lg,
    },
    ctaTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
    },
    ctaSubtitle: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing.lg,
      lineHeight: theme.typography.lineHeights.relaxed,
    },
    ctaButton: {
      backgroundColor: theme.colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    ctaButtonText: {
      color: 'white',
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      marginRight: theme.spacing.sm,
    },
  });
