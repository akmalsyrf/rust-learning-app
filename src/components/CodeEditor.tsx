import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme, Theme } from '../theme';
import SyntaxHighlighter from './SyntaxHighlighter';

interface CodeEditorProps {
  initialCode: string;
  language: 'rust';
  onCodeChange: (code: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  language,
  onCodeChange,
  readOnly = false,
  placeholder = '// Write your Rust code here...',
}) => {
  const { getEffectiveTheme } = useSettingsStore();
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const [code, setCode] = useState(initialCode);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (text: string) => {
    setCode(text);
    onCodeChange(text);
  };

  const formatCode = () => {
    // Basic Rust code formatting
    let formatted = code
      .trim()
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\s*\{\s*/g, ' {\n  ') // Format opening braces
      .replace(/\s*\}\s*/g, '\n}') // Format closing braces
      .replace(/\s*;\s*/g, ';\n  ') // Format semicolons
      .replace(/\n\s*\n/g, '\n') // Remove empty lines
      .trim();

    setCode(formatted);
    onCodeChange(formatted);
  };

  const clearCode = () => {
    setCode('');
    onCodeChange('');
  };

  const resetCode = () => {
    setCode(initialCode);
    onCodeChange(initialCode);
  };

  const insertTemplate = (template: string) => {
    const newCode = code + '\n' + template;
    setCode(newCode);
    onCodeChange(newCode);
  };

  const getLineNumber = (text: string, position: number) => {
    return text.substring(0, position).split('\n').length;
  };

  const getColumnNumber = (text: string, position: number) => {
    const lines = text.substring(0, position).split('\n');
    return lines[lines.length - 1].length + 1;
  };

  const currentLine = getLineNumber(code, cursorPosition);
  const currentColumn = getColumnNumber(code, cursorPosition);

  return (
    <View style={styles.container}>
      {/* Editor Header */}
      <View style={styles.header}>
        <View style={styles.languageBadge}>
          <Text style={styles.languageText}>{language.toUpperCase()}</Text>
        </View>
        <View style={styles.positionInfo}>
          <Text style={styles.positionText}>
            Ln {currentLine}, Col {currentColumn}
          </Text>
        </View>
      </View>

      {/* Code Input */}
      <View style={styles.editorContainer}>
        <View style={styles.editorHeader}>
          <Text style={styles.editorTitle}>Code Editor</Text>
        </View>

        {/* Debug Info */}
        <View style={styles.debugInfo}>
          <Text style={styles.debugText}>Code length: {code.length} characters</Text>
          <Text style={styles.debugText}>Lines: {code.split('\n').length}</Text>
        </View>

        {/* Toggle Button */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, !isPreviewMode && styles.toggleButtonActive]}
            onPress={() => setIsPreviewMode(false)}
          >
            <Text
              style={[styles.toggleButtonText, !isPreviewMode && styles.toggleButtonTextActive]}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, isPreviewMode && styles.toggleButtonActive]}
            onPress={() => setIsPreviewMode(true)}
          >
            <Text style={[styles.toggleButtonText, isPreviewMode && styles.toggleButtonTextActive]}>
              Preview
            </Text>
          </TouchableOpacity>
        </View>

        {/* Code Input or Syntax Highlighted Preview */}
        {!isPreviewMode ? (
          <View style={styles.editorWrapper}>
            {/* TextInput for editing - now with proper cursor visibility */}
            <TextInput
              ref={inputRef}
              style={[styles.codeInput, code === '' && styles.codeInputEmpty]}
              value={code}
              onChangeText={handleCodeChange}
              onSelectionChange={event => {
                setCursorPosition(event.nativeEvent.selection.start);
              }}
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
      </View>

      {/* Editor Footer */}
      {!readOnly && (
        <View style={styles.footer}>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={formatCode}>
              <Text style={styles.actionButtonText}>Format</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={clearCode}>
              <Text style={styles.actionButtonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={resetCode}>
              <Text style={styles.actionButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Quick Templates */}
          <View style={styles.templates}>
            <Text style={styles.templatesTitle}>Quick Templates:</Text>
            <View style={styles.templateButtons}>
              <TouchableOpacity
                style={styles.templateButton}
                onPress={() => insertTemplate('println!("Hello, World!");')}
              >
                <Text style={styles.templateButtonText}>Hello World</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.templateButton}
                onPress={() => insertTemplate('let x = 42;\nprintln!("x = {}", x);')}
              >
                <Text style={styles.templateButtonText}>Variable</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.templateButton}
                onPress={() => insertTemplate('for i in 1..=5 {\n  println!("{}", i);\n}')}
              >
                <Text style={styles.templateButtonText}>Loop</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.templateButton}
                onPress={() => insertTemplate('fn main() {\n  \n}')}
              >
                <Text style={styles.templateButtonText}>Main Function</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
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
    editorContainer: {
      backgroundColor: theme.colors.background,
    },
    editorHeader: {
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    editorTitle: {
      color: theme.colors.text,
      fontSize: theme.typography.sizes.sm,
      fontWeight: '600' as any,
    },
    debugInfo: {
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    debugText: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.sizes.xs,
      fontFamily: 'monospace',
    },
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
    editorWrapper: {
      minHeight: 200,
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.sm,
      margin: theme.spacing.sm,
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
    codeInput: {
      padding: theme.spacing.md,
      fontSize: theme.typography.sizes.md,
      fontFamily: 'monospace',
      color: theme.colors.text,
      lineHeight: theme.typography.lineHeights.normal,
      textAlignVertical: 'top',
      minHeight: 200,
      backgroundColor: 'transparent', // Transparent background for cursor visibility
      borderWidth: 0, // No border to avoid conflicts
      borderRadius: 0,
      margin: 0,
      // Enable horizontal scrolling for long lines
      textAlign: 'left',
    },
    codeInputEmpty: {
      backgroundColor: 'transparent',
    },
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
    },
    actionButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.sm,
      minWidth: 80,
      alignItems: 'center',
    },
    actionButtonText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.sm,
      fontWeight: '600' as any,
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

export default CodeEditor;
