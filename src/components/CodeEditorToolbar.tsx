import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../theme';

interface CodeEditorToolbarProps {
  isPreviewMode: boolean;
  showEditorFeatures: boolean;
  onToggleMode: () => void;
  onToggleFeatures: () => void;
  theme: Theme;
}

export default function CodeEditorToolbar({
  isPreviewMode,
  showEditorFeatures,
  onToggleMode,
  onToggleFeatures,
  theme,
}: CodeEditorToolbarProps) {
  const styles = createStyles(theme);

  return (
    <>
      {/* Toggle Button */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, !isPreviewMode && styles.toggleButtonActive]}
          onPress={onToggleMode}
        >
          <Text style={[styles.toggleButtonText, !isPreviewMode && styles.toggleButtonTextActive]}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, isPreviewMode && styles.toggleButtonActive]}
          onPress={onToggleMode}
        >
          <Text style={[styles.toggleButtonText, isPreviewMode && styles.toggleButtonTextActive]}>
            Preview
          </Text>
        </TouchableOpacity>
      </View>

      {/* Hide/Show Editor Features Button */}
      <View style={styles.hideFeaturesContainer}>
        <TouchableOpacity style={styles.hideFeaturesButton} onPress={onToggleFeatures}>
          <Ionicons
            name={showEditorFeatures ? 'eye-off' : 'eye'}
            size={16}
            color={theme.colors.textSecondary}
          />
          <Text style={styles.hideFeaturesButtonText}>
            {showEditorFeatures ? 'Hide' : 'Show'} Features
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    toggleButton: {
      flex: 1,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      alignItems: 'center',
      borderRadius: theme.borderRadius.sm,
      marginHorizontal: theme.spacing.xs,
      backgroundColor: theme.colors.surface,
    },
    toggleButtonActive: {
      backgroundColor: theme.colors.primary,
    },
    toggleButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.sizes.sm,
      fontWeight: '500' as any,
    },
    toggleButtonTextActive: {
      color: theme.colors.white,
      fontWeight: '600' as any,
    },
    hideFeaturesContainer: {
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      alignItems: 'center',
    },
    hideFeaturesButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    hideFeaturesButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.sizes.sm,
      fontWeight: '500' as any,
    },
  });
