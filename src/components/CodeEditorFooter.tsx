import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Theme } from '../theme';

interface CodeEditorFooterProps {
  readOnly: boolean;
  showEditorFeatures: boolean;
  onFormat: () => void;
  onClear: () => void;
  onReset: () => void;
  onInsertTemplate: (template: string) => void;
  theme: Theme;
}

export default function CodeEditorFooter({
  readOnly,
  showEditorFeatures,
  onFormat,
  onClear,
  onReset,
  onInsertTemplate,
  theme,
}: CodeEditorFooterProps) {
  const styles = createStyles(theme);

  if (readOnly || !showEditorFeatures) {
    return null;
  }

  return (
    <View style={styles.footer}>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onFormat}>
          <Text style={styles.actionButtonText}>Format</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onClear}>
          <Text style={styles.actionButtonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onReset}>
          <Text style={styles.actionButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Templates */}
      <View style={styles.templates}>
        <Text style={styles.templatesTitle}>Quick Templates:</Text>
        <View style={styles.templateButtons}>
          <TouchableOpacity
            style={styles.templateButton}
            onPress={() => onInsertTemplate('println!("Hello, World!");')}
          >
            <Text style={styles.templateButtonText}>Hello World</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.templateButton}
            onPress={() => onInsertTemplate('let x = 42;\nprintln!("x = {}", x);')}
          >
            <Text style={styles.templateButtonText}>Variable</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.templateButton}
            onPress={() => onInsertTemplate('for i in 1..=5 {\n  println!("{}", i);\n}')}
          >
            <Text style={styles.templateButtonText}>Loop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.templateButton}
            onPress={() => onInsertTemplate('fn main() {\n  \n}')}
          >
            <Text style={styles.templateButtonText}>Main Function</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    footer: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    actions: {
      flexDirection: 'row',
      marginBottom: theme.spacing.md,
      gap: theme.spacing.sm,
      flexWrap: 'wrap', // Allow wrapping if needed
    },
    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.success, // Default green background for Run Code
      borderRadius: theme.borderRadius.sm,
      minHeight: 44, // Ensure consistent height
      minWidth: 120, // Ensure minimum width for text
      flex: 1, // Take available space
    },
    actionButtonText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.md,
      fontWeight: '600' as any,
      textAlign: 'center', // Center align text
      flexShrink: 1, // Allow text to shrink if needed
    },
    templates: {
      gap: theme.spacing.sm,
    },
    templatesTitle: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.sizes.sm,
      fontWeight: '600' as any,
    },
    templateButtons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
    },
    templateButton: {
      backgroundColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    templateButtonText: {
      color: theme.colors.text,
      fontSize: theme.typography.sizes.xs,
      fontWeight: '500' as any,
    },
  });
