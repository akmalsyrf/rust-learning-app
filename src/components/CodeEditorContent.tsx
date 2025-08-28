import React, { forwardRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SyntaxHighlighter from './SyntaxHighlighter';
import { Theme } from '../theme';

interface CodeEditorContentProps {
  isPreviewMode: boolean;
  code: string;
  placeholder: string;
  readOnly: boolean;
  isDark: boolean;
  onCodeChange: (text: string) => void;
  onSelectionChange: (event: any) => void;
  theme: Theme;
  inputRef: React.RefObject<TextInput | null>;
}

export default function CodeEditorContent({
  isPreviewMode,
  code,
  placeholder,
  readOnly,
  isDark,
  onCodeChange,
  onSelectionChange,
  theme,
  inputRef,
}: CodeEditorContentProps) {
  const styles = createStyles(theme);

  return (
    <>
      {/* Code Input or Syntax Highlighted Preview */}
      {!isPreviewMode ? (
        <View style={styles.editorWrapper}>
          {/* TextInput for editing - now with proper cursor visibility */}
          <TextInput
            ref={inputRef}
            style={[styles.codeInput, code === '' && styles.codeInputEmpty]}
            value={code}
            onChangeText={onCodeChange}
            onSelectionChange={onSelectionChange}
            multiline
            autoCapitalize='none'
            autoCorrect={false}
            autoComplete='off'
            spellCheck={false}
            editable={!readOnly}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.textSecondary}
            selectionColor={theme.colors.primary}
            textAlignVertical='top'
            numberOfLines={10}
            scrollEnabled={true}
            textAlign='left'
          />
        </View>
      ) : (
        <View style={styles.previewContainer}>
          <SyntaxHighlighter
            code={code || placeholder}
            language='rust'
            theme={isDark ? 'dark' : 'light'}
            fontSize={theme.typography.sizes.md}
            lineHeight={theme.typography.lineHeights.normal}
          />
        </View>
      )}
    </>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    editorWrapper: {
      minHeight: 200,
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.sm,
      margin: theme.spacing.sm,
      overflow: 'hidden', // Ensure content doesn't overflow
    },
    codeInput: {
      padding: theme.spacing.md,
      fontSize: theme.typography.sizes.md,
      fontFamily: 'monospace',
      color: theme.colors.text,
      lineHeight: theme.typography.lineHeights.normal,
      textAlignVertical: 'top',
      textAlign: 'left',
      minHeight: 200,
      backgroundColor: 'transparent', // Transparent background for cursor visibility
      borderWidth: 0, // No border to avoid conflicts
      borderRadius: 0,
      margin: 0,
      // Ensure text doesn't wrap and can be scrolled horizontally
      flexShrink: 0,
    },
    codeInputEmpty: {
      backgroundColor: 'transparent',
    },
    previewContainer: {
      flex: 1,
      minHeight: 200,
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.sm,
      margin: theme.spacing.sm,
    },
  });
