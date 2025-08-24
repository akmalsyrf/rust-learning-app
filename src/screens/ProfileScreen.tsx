import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { lightTheme, darkTheme } from '../theme';
import { ProfileScreenProps } from '../types/navigation';

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  const { getEffectiveTheme, theme, setTheme, clearStorage: clearSettings } = useSettingsStore();
  const {
    xp,
    currentStreakDays,
    getTotalCorrectAnswers,
    clearStorage: clearProgress,
  } = useProgressStore();

  const isDark = getEffectiveTheme() === 'dark';
  const currentTheme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(currentTheme);

  const totalCorrect = getTotalCorrectAnswers();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const handleClearData = () => {
    Alert.alert(
      'Clear All Data',
      'This will permanently delete all your progress and settings. Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            try {
              await Promise.all([clearProgress(), clearSettings()]);
              Alert.alert('Success', 'All data has been cleared successfully');
            } catch (error) {
              Alert.alert('Error', 'Failed to clear data. Please try again.');
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name='person' size={40} color={currentTheme.colors.primary} />
          </View>
          <Text style={styles.username}>Rust Learner</Text>
          <Text style={styles.joinDate}>Learning since January 2024</Text>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name='star' size={24} color={currentTheme.colors.accent} />
            <Text style={styles.statNumber}>{xp}</Text>
            <Text style={styles.statLabel}>Total XP</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name='flame' size={24} color={currentTheme.colors.streak} />
            <Text style={styles.statNumber}>{currentStreakDays}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name='checkmark-circle' size={24} color={currentTheme.colors.success} />
            <Text style={styles.statNumber}>{totalCorrect}</Text>
            <Text style={styles.statLabel}>Correct Answers</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            <View
              style={[styles.achievement, currentStreakDays >= 3 && styles.achievementUnlocked]}
            >
              <Ionicons
                name='flame'
                size={24}
                color={
                  currentStreakDays >= 3 ? currentTheme.colors.streak : currentTheme.colors.border
                }
              />
              <Text
                style={[
                  styles.achievementText,
                  currentStreakDays >= 3 && styles.achievementTextUnlocked,
                ]}
              >
                3-Day Streak
              </Text>
            </View>

            <View style={[styles.achievement, xp >= 100 && styles.achievementUnlocked]}>
              <Ionicons
                name='star'
                size={24}
                color={xp >= 100 ? currentTheme.colors.accent : currentTheme.colors.border}
              />
              <Text style={[styles.achievementText, xp >= 100 && styles.achievementTextUnlocked]}>
                100 XP
              </Text>
            </View>

            <View style={[styles.achievement, totalCorrect >= 10 && styles.achievementUnlocked]}>
              <Ionicons
                name='checkmark-circle'
                size={24}
                color={
                  totalCorrect >= 10 ? currentTheme.colors.success : currentTheme.colors.border
                }
              />
              <Text
                style={[
                  styles.achievementText,
                  totalCorrect >= 10 && styles.achievementTextUnlocked,
                ]}
              >
                10 Correct
              </Text>
            </View>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingItem} onPress={toggleTheme}>
            <View style={styles.settingLeft}>
              <Ionicons
                name={isDark ? 'moon' : 'sunny'}
                size={20}
                color={currentTheme.colors.text}
              />
              <Text style={styles.settingText}>Theme</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>{isDark ? 'Dark' : 'Light'}</Text>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Ionicons name='notifications' size={20} color={currentTheme.colors.text} />
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.settingValue}>On</Text>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('About')}>
            <View style={styles.settingLeft}>
              <Ionicons name='information-circle' size={20} color={currentTheme.colors.text} />
              <Text style={styles.settingText}>About</Text>
            </View>
            <View style={styles.settingRight}>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Data Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Management</Text>

          <TouchableOpacity style={styles.settingItem} onPress={handleClearData}>
            <View style={styles.settingLeft}>
              <Ionicons name='trash' size={20} color={currentTheme.colors.error} />
              <Text style={[styles.settingText, { color: currentTheme.colors.error }]}>
                Clear All Data
              </Text>
            </View>
            <View style={styles.settingRight}>
              <Ionicons
                name='chevron-forward'
                size={16}
                color={currentTheme.colors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Progress Summary */}
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Learning Progress</Text>
          <Text style={styles.progressDescription}>
            You're doing great! Keep up the daily practice to maintain your streak and unlock more
            achievements.
          </Text>

          <View style={styles.progressStats}>
            <View style={styles.progressStat}>
              <Text style={styles.progressStatValue}>
                {Math.round((totalCorrect / Math.max(totalCorrect + 5, 1)) * 100)}%
              </Text>
              <Text style={styles.progressStatLabel}>Accuracy</Text>
            </View>
            <View style={styles.progressStat}>
              <Text style={styles.progressStatValue}>{Math.min(currentStreakDays, 7)}/7</Text>
              <Text style={styles.progressStatLabel}>This Week</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (theme: any) =>
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
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    username: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    joinDate: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
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
      marginVertical: theme.spacing.xs,
    },
    statLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    section: {
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    achievementsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    achievement: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      marginHorizontal: theme.spacing.xs,
      opacity: 0.5,
    },
    achievementUnlocked: {
      opacity: 1,
      borderWidth: 2,
      borderColor: theme.colors.accent + '40',
    },
    achievementText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
    achievementTextUnlocked: {
      color: theme.colors.text,
      fontWeight: '500',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.sm,
    },
    settingLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    settingText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      marginLeft: theme.spacing.md,
    },
    settingRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingValue: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      marginRight: theme.spacing.sm,
    },
    progressCard: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
    },
    progressTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    progressDescription: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      lineHeight: 22,
      marginBottom: theme.spacing.md,
    },
    progressStats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    progressStat: {
      alignItems: 'center',
    },
    progressStatValue: {
      fontSize: 20,
      fontWeight: '700',
      color: theme.colors.primary,
      marginBottom: theme.spacing.xs,
    },
    progressStatLabel: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
    },
  });
