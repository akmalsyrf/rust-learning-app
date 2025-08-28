import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../theme';

interface CodeEditorHeaderProps {
  language: string;
  currentLine: number;
  currentColumn: number;
  onFullScreenPress: () => void;
  theme: Theme;
}

export default function CodeEditorHeader({
  language,
  currentLine,
  currentColumn,
  onFullScreenPress,
  theme,
}: CodeEditorHeaderProps) {
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <View style={styles.languageBadge}>
        <Text style={styles.languageText}>{language.toUpperCase()}</Text>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.positionInfo}>
          <Text style={styles.positionText}>
            Ln {currentLine}, Col {currentColumn}
          </Text>
        </View>
        <TouchableOpacity style={styles.fullScreenButton} onPress={onFullScreenPress}>
          <Ionicons name='expand' size={20} color={theme.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.primary,
    },
    languageBadge: {
      backgroundColor: theme.colors.white + '20',
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
    },
    languageText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.xs,
      fontWeight: '600' as any,
      letterSpacing: 0.5,
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    positionInfo: {
      backgroundColor: theme.colors.white + '20',
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
    },
    positionText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.xs,
      fontFamily: 'monospace',
    },
    fullScreenButton: {
      padding: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.colors.white + '20',
    },
  });
