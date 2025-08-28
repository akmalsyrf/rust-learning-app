import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme, Theme } from '../theme';
import CodeEditorHeader from './CodeEditorHeader';
import CodeEditorToolbar from './CodeEditorToolbar';
import CodeEditorContent from './CodeEditorContent';
import CodeEditorFooter from './CodeEditorFooter';
import FullScreenModal from './FullScreenModal';

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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showEditorFeatures, setShowEditorFeatures] = useState(false); // Default hidden in normal mode
  const inputRef = useRef<TextInput | null>(null);

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (text: string) => {
    setCode(text);
    onCodeChange(text);
  };

  const formatCode = () => {
    // Smart Rust code formatting that preserves structure
    let formatted = code
      .trim()
      // Preserve existing line breaks and structure
      .split('\n')
      .map(line => {
        // Clean up each line individually
        return line
          .trim() // Remove leading/trailing whitespace
          .replace(/\s+/g, ' '); // Replace multiple spaces with single space
      })
      .filter(line => line.length > 0) // Remove empty lines
      .join('\n'); // Join lines back together

    // Add proper formatting for common Rust patterns
    formatted = formatted
      .replace(/\s*\{\s*/g, ' {\n  ') // Format opening braces
      .replace(/\s*\}\s*/g, '\n}') // Format closing braces
      .replace(/\s*;\s*/g, ';\n  ') // Format semicolons
      .replace(/\n\s*\n/g, '\n') // Remove excessive empty lines
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
      <CodeEditorHeader
        language={language}
        currentLine={currentLine}
        currentColumn={currentColumn}
        onFullScreenPress={() => setIsFullScreen(true)}
        theme={theme}
      />

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

        {/* Toolbar */}
        <CodeEditorToolbar
          isPreviewMode={isPreviewMode}
          showEditorFeatures={showEditorFeatures}
          onToggleMode={() => setIsPreviewMode(!isPreviewMode)}
          onToggleFeatures={() => setShowEditorFeatures(!showEditorFeatures)}
          theme={theme}
        />

        {/* Content */}
        <CodeEditorContent
          isPreviewMode={isPreviewMode}
          code={code}
          placeholder={placeholder}
          readOnly={readOnly}
          isDark={isDark}
          onCodeChange={handleCodeChange}
          onSelectionChange={(event: any) => {
            setCursorPosition(event.nativeEvent.selection.start);
          }}
          theme={theme}
          inputRef={inputRef}
        />
      </View>

      {/* Editor Footer */}
      <CodeEditorFooter
        readOnly={readOnly}
        showEditorFeatures={showEditorFeatures}
        onFormat={formatCode}
        onClear={clearCode}
        onReset={resetCode}
        onInsertTemplate={insertTemplate}
        theme={theme}
      />

      {/* Full Screen Modal */}
      <FullScreenModal
        visible={isFullScreen}
        isPreviewMode={isPreviewMode}
        showEditorFeatures={showEditorFeatures}
        code={code}
        placeholder={placeholder}
        readOnly={readOnly}
        isDark={isDark}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        onClose={() => setIsFullScreen(false)}
        onToggleMode={() => setIsPreviewMode(!isPreviewMode)}
        onToggleFeatures={() => setShowEditorFeatures(!showEditorFeatures)}
        onCodeChange={handleCodeChange}
        onSelectionChange={(event: any) => {
          setCursorPosition(event.nativeEvent.selection.start);
        }}
        onFormat={formatCode}
        onClear={clearCode}
        onReset={resetCode}
        onInsertTemplate={insertTemplate}
        inputRef={inputRef}
        theme={theme}
      />
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
  });

export default CodeEditor;
