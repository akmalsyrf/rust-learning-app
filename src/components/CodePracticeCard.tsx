import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettingsStore } from '../state/useSettingsStore';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme, Theme } from '../theme';
import CodeEditor from './CodeEditor';
import SyntaxHighlighter from './SyntaxHighlighter';
import { codeExecutionService, RustExecutionResult } from '../services/codeExecution';

interface CodePractice {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  expectedOutput?: string;
  hints: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

interface CodePracticeCardProps {
  practice: CodePractice;
  onComplete?: (practiceId: string, userCode: string) => void;
  onHint?: (practiceId: string, hintIndex: number) => void;
  onCodeExecution?: (practiceId: string, result: any) => void;
  isPreview?: boolean;
}

const CodePracticeCard: React.FC<CodePracticeCardProps> = ({
  practice,
  onComplete,
  onHint,
  onCodeExecution,
  isPreview = false,
}) => {
  const { getEffectiveTheme } = useSettingsStore();
  const { t } = useTranslation();
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const [userCode, setUserCode] = useState(practice.initialCode);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [executionResult, setExecutionResult] = useState<RustExecutionResult | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [solutionStatus, setSolutionStatus] = useState<'not_checked' | 'correct' | 'incorrect'>(
    'not_checked'
  );

  const handleCodeChange = (code: string) => {
    setUserCode(code);
    // Reset solution status when code changes
    if (solutionStatus !== 'not_checked') {
      setSolutionStatus('not_checked');
    }
  };

  const handleRunCode = async () => {
    // Validate code before execution
    const validation = codeExecutionService.validateRustCode(userCode);
    if (!validation.isValid) {
      Alert.alert(
        t('codePractice.codeValidationError', 'Code Validation Error'),
        `${t('codePractice.pleaseFixIssues', 'Please fix the following issues')}:\n\n${validation.errors.join('\n')}`,
        [{ text: t('common.ok', 'OK') }]
      );
      return;
    }

    setIsExecuting(true);
    setExecutionResult(null);

    try {
      const result = await codeExecutionService.executeRustCode(userCode);
      setExecutionResult(result);

      // Call the callback if provided
      if (onCodeExecution) {
        onCodeExecution(practice.id, result);
      }

      if (!result.success) {
        Alert.alert(t('codePractice.codeExecutionFailed', 'Code Execution Failed'), result.error, [
          { text: t('common.ok', 'OK') },
        ]);
      }
    } catch (error) {
      const errorResult = { success: false, output: '', error: 'An unexpected error occurred' };
      setExecutionResult(errorResult);

      // Call the callback with error result
      if (onCodeExecution) {
        onCodeExecution(practice.id, errorResult);
      }

      Alert.alert(
        t('codePractice.executionError', 'Execution Error'),
        t(
          'codePractice.executionErrorText',
          'An error occurred while executing your code. Please try again.'
        ),
        [{ text: t('common.ok', 'OK') }]
      );
    } finally {
      setIsExecuting(false);
    }
  };

  const handleCheckSolution = async () => {
    // Check if code has been executed first
    if (!executionResult) {
      Alert.alert(
        t('codePractice.codeNotExecuted', 'Code Not Executed'),
        t(
          'codePractice.pleaseRunCodeFirst',
          'Please run your code first before checking the solution.'
        ),
        [{ text: t('common.ok', 'OK') }]
      );
      return;
    }

    // Check if execution was successful
    if (!executionResult.success) {
      Alert.alert(
        t('codePractice.codeExecutionFailed', 'Code Execution Failed'),
        t(
          'codePractice.pleaseFixErrors',
          'Please fix the errors in your code before checking the solution.'
        ),
        [{ text: t('common.ok', 'OK') }]
      );
      return;
    }

    // Check if expected output is available
    if (!practice.expectedOutput) {
      Alert.alert(
        t('codePractice.noExpectedOutput', 'No Expected Output'),
        t(
          'codePractice.noExpectedOutputText',
          'This practice does not have an expected output to check against.'
        ),
        [{ text: t('common.ok', 'OK') }]
      );
      return;
    }

    // Compare output with expected output
    const userOutput = executionResult.output.trim();
    const expectedOutput = practice.expectedOutput.trim();

    const isCorrect = userOutput === expectedOutput;

    if (isCorrect) {
      setSolutionStatus('correct');
      Alert.alert(
        `🎉 ${t('codePractice.correctSolution', 'Correct Solution!')}`,
        `${t('codePractice.yourCodeOutputMatches', 'Your code output matches the expected output!')}\n\nOutput: "${userOutput}"`,
        [
          {
            text: t('codePractice.great', 'Great!'),
            onPress: () => {
              if (onComplete) {
                onComplete(practice.id, userCode);
              }
            },
          },
        ]
      );
    } else {
      setSolutionStatus('incorrect');
      Alert.alert(
        `❌ ${t('codePractice.incorrectSolution', 'Incorrect Solution')}`,
        `${t('codePractice.yourCodeOutputDoesNotMatch', 'Your code output does not match the expected output.')}\n\nYour output: "${userOutput}"\nExpected: "${expectedOutput}"\n\n${t('codePractice.pleaseCheckCode', 'Please check your code and try again.')}`,
        [{ text: t('codePractice.tryAgain', 'Try Again') }]
      );
    }
  };

  const handleShowHint = (hintIndex: number) => {
    if (!usedHints.includes(hintIndex)) {
      setUsedHints([...usedHints, hintIndex]);
      if (onHint) {
        onHint(practice.id, hintIndex);
      }
    }
    setShowHints(true);
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{practice.title}</Text>
          <View style={styles.difficultyBadge}>
            <Ionicons
              name={getDifficultyIcon(practice.difficulty) as any}
              size={16}
              color={getDifficultyColor(practice.difficulty)}
            />
            <Text
              style={[styles.difficultyText, { color: getDifficultyColor(practice.difficulty) }]}
            >
              {practice.difficulty.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.category}>{practice.category}</Text>
          {/* Solution Status Indicator */}
          {solutionStatus !== 'not_checked' && (
            <View
              style={[
                styles.statusBadge,
                solutionStatus === 'correct' ? styles.statusCorrect : styles.statusIncorrect,
              ]}
            >
              <Ionicons
                name={solutionStatus === 'correct' ? 'checkmark-circle' : 'close-circle'}
                size={16}
                color={theme.colors.white}
              />
              <Text style={styles.statusText}>
                {solutionStatus === 'correct'
                  ? t('codePractice.correct', 'Correct')
                  : t('codePractice.incorrect', 'Incorrect')}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{practice.description}</Text>
      </View>

      {/* Code Editor */}
      <View style={styles.editorSection}>
        <Text style={styles.sectionTitle}>{t('codePractice.yourCode', 'Your Code:')}</Text>
        <CodeEditor
          initialCode={practice.initialCode}
          language='rust'
          onCodeChange={handleCodeChange}
          placeholder='// Write your Rust code here...'
        />
      </View>

      {/* Expected Output (if available) */}
      {practice.expectedOutput && (
        <View style={styles.outputSection}>
          <Text style={styles.sectionTitle}>
            {t('codePractice.expectedOutput', 'Expected Output:')}
          </Text>
          <SyntaxHighlighter
            code={practice.expectedOutput}
            language='rust'
            theme={isDark ? 'dark' : 'light'}
            fontSize={12}
            lineHeight={16}
          />
        </View>
      )}

      {/* Hints */}
      <View style={styles.hintsSection}>
        <View style={styles.hintsHeader}>
          <Text style={styles.sectionTitle}>
            {t('codePractice.hints', 'Hints')} ({practice.hints.length})
          </Text>
          <TouchableOpacity style={styles.hintToggle} onPress={() => setShowHints(!showHints)}>
            <Ionicons
              name={showHints ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        {showHints && (
          <View style={styles.hintsList}>
            {practice.hints.map((hint, index) => (
              <View key={index} style={styles.hintItem}>
                <TouchableOpacity
                  style={[styles.hintButton, usedHints.includes(index) && styles.hintButtonUsed]}
                  onPress={() => handleShowHint(index)}
                  disabled={usedHints.includes(index)}
                >
                  <Ionicons
                    name={usedHints.includes(index) ? 'checkmark-circle' : 'bulb'}
                    size={16}
                    color={usedHints.includes(index) ? theme.colors.success : theme.colors.primary}
                  />
                  <Text
                    style={[
                      styles.hintButtonText,
                      usedHints.includes(index) && styles.hintButtonTextUsed,
                    ]}
                  >
                    {t('codePractice.hint', 'Hint')} {index + 1}
                  </Text>
                </TouchableOpacity>

                {usedHints.includes(index) && <Text style={styles.hintText}>{hint}</Text>}
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Action Buttons */}
      {!isPreview && (
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.actionButton, isExecuting && styles.actionButtonDisabled]}
            onPress={handleRunCode}
            disabled={isExecuting}
          >
            {isExecuting ? (
              <ActivityIndicator size='small' color={theme.colors.white} />
            ) : (
              <Ionicons name='play' size={20} color={theme.colors.white} />
            )}
            <Text style={styles.actionButtonText} numberOfLines={1}>
              {isExecuting
                ? t('codePractice.running', 'Running...')
                : t('codePractice.runCode', 'Run Code')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleCheckSolution}>
            <Ionicons name='checkmark' size={20} color={theme.colors.white} />
            <Text style={styles.actionButtonText} numberOfLines={1}>
              {t('codePractice.checkSolution', 'Check Solution')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={() => setShowSolution(!showSolution)}
          >
            <Ionicons name='eye' size={20} color={theme.colors.primary} />
            <Text style={[styles.actionButtonText, styles.secondaryButtonText]} numberOfLines={1}>
              {showSolution ? t('codePractice.hide', 'Hide') : t('codePractice.show', 'Show')}{' '}
              {t('codePractice.solution', 'Solution')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Preview Mode Message */}
      {isPreview && (
        <View style={styles.previewMessage}>
          <Ionicons name='information-circle' size={20} color={theme.colors.info} />
          <Text style={styles.previewText}>
            {t(
              'freeCodePractice.previewMode',
              'This is a preview. Navigate to full practice to run code and check solutions.'
            )}
          </Text>
        </View>
      )}

      {/* Preview Mode Run Code Button */}
      {isPreview && (
        <View style={styles.previewActions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.previewRunButton]}
            onPress={handleRunCode}
            disabled={isExecuting}
          >
            {isExecuting ? (
              <ActivityIndicator size='small' color={theme.colors.white} />
            ) : (
              <Ionicons name='play' size={20} color={theme.colors.white} />
            )}
            <Text style={styles.actionButtonText} numberOfLines={1}>
              {isExecuting
                ? t('codePractice.running', 'Running...')
                : t('codePractice.runCode', 'Run Code')}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Execution Result (when available) */}
      {executionResult && (
        <View style={styles.executionSection}>
          <Text style={styles.sectionTitle}>
            {t('codePractice.executionResult', 'Execution Result:')}
          </Text>
          <View
            style={[
              styles.executionResult,
              executionResult.success ? styles.executionSuccess : styles.executionError,
            ]}
          >
            <Text style={styles.executionResultText}>
              {codeExecutionService.formatExecutionResult(executionResult)}
            </Text>
          </View>

          {/* Solution Check Result */}
          {practice.expectedOutput && (
            <View style={styles.checkResultSection}>
              <Text style={styles.checkResultTitle}>
                {t('codePractice.solutionCheck', 'Solution Check:')}
              </Text>
              <View style={styles.checkResultContent}>
                <View style={styles.outputComparison}>
                  <Text style={styles.comparisonLabel}>
                    {t('codePractice.yourOutput', 'Your Output:')}
                  </Text>
                  <Text style={styles.comparisonValue}>
                    {executionResult.output.trim() || '(empty)'}
                  </Text>
                </View>
                <View style={styles.outputComparison}>
                  <Text style={styles.comparisonLabel}>
                    {t('codePractice.expectedOutputLabel', 'Expected Output:')}
                  </Text>
                  <Text style={styles.comparisonValue}>{practice.expectedOutput.trim()}</Text>
                </View>
                <View style={styles.comparisonResult}>
                  <Text style={styles.comparisonResultText}>
                    {executionResult.output.trim() === practice.expectedOutput.trim()
                      ? `✅ ${t('codePractice.match', 'Match')}`
                      : `❌ ${t('codePractice.noMatch', 'No Match')}`}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      )}

      {/* Solution (when shown) */}
      {showSolution && (
        <View style={styles.solutionSection}>
          <Text style={styles.sectionTitle}>{t('codePractice.solution', 'Solution:')}</Text>
          <SyntaxHighlighter
            code={practice.solution || practice.initialCode}
            language='rust'
            theme={isDark ? 'dark' : 'light'}
            fontSize={14}
            lineHeight={20}
          />
        </View>
      )}
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
    },
    header: {
      marginBottom: theme.spacing.md,
    },
    headerRight: {
      alignItems: 'flex-end',
      gap: theme.spacing.sm,
    },
    statusBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
    },
    statusCorrect: {
      backgroundColor: theme.colors.success,
    },
    statusIncorrect: {
      backgroundColor: theme.colors.error,
    },
    statusText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.xs,
      fontWeight: '600' as any,
    },
    checkResultSection: {
      marginTop: theme.spacing.md,
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    checkResultTitle: {
      fontSize: theme.typography.sizes.sm,
      fontWeight: '600' as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    checkResultContent: {
      gap: theme.spacing.sm,
    },
    outputComparison: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    comparisonLabel: {
      fontSize: theme.typography.sizes.xs,
      color: theme.colors.textSecondary,
      fontWeight: '500' as any,
    },
    comparisonValue: {
      fontSize: theme.typography.sizes.xs,
      color: theme.colors.text,
      fontFamily: 'monospace',
      flex: 1,
      textAlign: 'right',
      marginLeft: theme.spacing.sm,
    },
    comparisonResult: {
      alignItems: 'center',
      paddingTop: theme.spacing.sm,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    comparisonResultText: {
      fontSize: theme.typography.sizes.sm,
      fontWeight: '600' as any,
      color: theme.colors.text,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    title: {
      fontSize: theme.typography.heading.fontSize,
      fontWeight: theme.typography.heading.fontWeight as any,
      color: theme.colors.text,
      flex: 1,
    },
    difficultyBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    difficultyText: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: '600' as any,
    },
    category: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      textTransform: 'uppercase' as any,
      letterSpacing: 0.5,
    },
    descriptionContainer: {
      marginBottom: theme.spacing.lg,
    },
    description: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: theme.typography.body.lineHeight,
    },
    editorSection: {
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight as any,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    outputSection: {
      marginBottom: theme.spacing.lg,
    },
    hintsSection: {
      marginBottom: theme.spacing.lg,
    },
    hintsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    hintToggle: {
      padding: theme.spacing.xs,
    },
    hintsList: {
      gap: theme.spacing.sm,
    },
    hintItem: {
      gap: theme.spacing.xs,
    },
    hintButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignSelf: 'flex-start',
    },
    hintButtonUsed: {
      backgroundColor: theme.colors.success + '20',
      borderColor: theme.colors.success,
    },
    hintButtonText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.primary,
      fontWeight: '500' as any,
    },
    hintButtonTextUsed: {
      color: theme.colors.success,
    },
    hintText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.textSecondary,
      fontStyle: 'italic' as any,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.sm,
    },
    actions: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.lg,
      flexWrap: 'wrap', // Allow wrapping if needed
    },
    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.sm,
      minHeight: 44, // Ensure consistent height
      minWidth: 120, // Ensure minimum width for text
      flex: 1, // Take available space
    },
    actionButtonDisabled: {
      backgroundColor: theme.colors.textSecondary,
      opacity: 0.6,
    },
    actionButtonText: {
      color: theme.colors.white,
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600' as any,
      textAlign: 'center', // Center align text
      flexShrink: 1, // Allow text to shrink if needed
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    secondaryButtonText: {
      color: theme.colors.primary,
    },
    solutionSection: {
      marginTop: theme.spacing.lg,
    },
    executionSection: {
      marginTop: theme.spacing.lg,
    },
    executionResult: {
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
    },
    executionSuccess: {
      borderColor: theme.colors.success,
      backgroundColor: theme.colors.success + '10',
    },
    executionError: {
      borderColor: theme.colors.error,
      backgroundColor: theme.colors.error + '10',
    },
    executionResultText: {
      fontSize: theme.typography.body.fontSize,
      fontFamily: 'monospace',
      lineHeight: theme.typography.body.lineHeight,
      color: theme.colors.text, // Ensure text color matches theme
    },
    debugInfo: {
      marginTop: theme.spacing.sm,
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
    },
    debugText: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      fontFamily: 'monospace',
    },
    previewMessage: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
      padding: theme.spacing.md,
      backgroundColor: theme.colors.info + '10',
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.info,
      marginTop: theme.spacing.lg,
    },
    previewText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.info,
      fontStyle: 'italic' as any,
    },
    previewActions: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
      marginBottom: theme.spacing.lg,
    },
    previewRunButton: {
      flex: 1,
      justifyContent: 'center',
      minHeight: 44, // Ensure consistent height
      minWidth: 120, // Ensure minimum width for text
    },
  });

export default CodePracticeCard;
