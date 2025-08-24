import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';

interface StreakCounterProps {
  streakDays: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

export default function StreakCounter({
  streakDays,
  size = 'medium',
  showLabel = true,
}: StreakCounterProps) {
  const { getEffectiveTheme } = useSettingsStore();

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 16;
      case 'medium':
        return 24;
      case 'large':
        return 32;
      default:
        return 24;
    }
  };

  const getNumberSize = () => {
    switch (size) {
      case 'small':
        return 14;
      case 'medium':
        return 18;
      case 'large':
        return 24;
      default:
        return 18;
    }
  };

  const getLabelSize = () => {
    switch (size) {
      case 'small':
        return 12;
      case 'medium':
        return 14;
      case 'large':
        return 16;
      default:
        return 14;
    }
  };

  const getStreakColor = () => {
    if (streakDays === 0) return theme.colors.textSecondary;
    if (streakDays < 3) return theme.colors.warning;
    if (streakDays < 7) return theme.colors.streak;
    return theme.colors.accent;
  };

  const getStreakMessage = () => {
    if (streakDays === 0) return 'Start your streak!';
    if (streakDays === 1) return 'Great start!';
    if (streakDays < 7) return 'Keep it up!';
    if (streakDays < 30) return 'Amazing streak!';
    return 'Incredible dedication!';
  };

  const getSizeStyle = () => {
    const sizeKey =
      `container${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles;
    return styles[sizeKey] as any;
  };

  return (
    <View style={[styles.container, getSizeStyle()]}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={streakDays > 0 ? 'flame' : 'flame-outline'}
          size={getIconSize()}
          color={getStreakColor()}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.streakNumber, { fontSize: getNumberSize(), color: getStreakColor() }]}>
          {streakDays}
        </Text>

        {showLabel && (
          <>
            <Text style={[styles.streakLabel, { fontSize: getLabelSize() }]}>
              {streakDays === 1 ? 'Day' : 'Days'}
            </Text>

            {size !== 'small' && (
              <Text style={[styles.streakMessage, { fontSize: getLabelSize() - 2 }]}>
                {getStreakMessage()}
              </Text>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerSmall: {
      gap: theme.spacing.xs,
    },
    containerMedium: {
      gap: theme.spacing.sm,
    },
    containerLarge: {
      gap: theme.spacing.md,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      alignItems: 'flex-start',
    },
    streakNumber: {
      fontWeight: '700',
      lineHeight: 1.2,
    },
    streakLabel: {
      color: theme.colors.textSecondary,
      fontWeight: '500',
      marginTop: -2,
    },
    streakMessage: {
      color: theme.colors.textSecondary,
      fontStyle: 'italic',
      marginTop: 2,
    },
  });
