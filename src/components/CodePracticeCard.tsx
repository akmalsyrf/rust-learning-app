import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '../state/useSettingsStore';
import CodeEditor from './CodeEditor';
import SyntaxHighlighter from './SyntaxHighlighter';
import { codeExecutionService, RustExecutionResult } from '../services/codeExecution';
import { useProgressStore } from '../state/useProgressStore';
import { CodePractice } from '../types';
import { darkTheme, lightTheme } from '../theme';

interface CodePracticeCardProps {
  practice: CodePractice;
  isPreview?: boolean;
  onComplete?: (practiceId: string, userCode: string) => void;
  onCodeExecution?: (practiceId: string, result: any) => void;
}

export default function CodePracticeCard({
  practice,
  isPreview = false,
  onComplete,
  onCodeExecution,
}: CodePracticeCardProps) {
  const { t } = useTranslation();
  const { getEffectiveTheme } = useSettingsStore();
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const [userCode, setUserCode] = useState(practice.initialCode);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [executionResult, setExecutionResult] = useState<RustExecutionResult | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleCodeChange = (code: string) => {
    setUserCode(code);
  };

  const handleRunCode = async () => {
    if (!userCode.trim()) {
      Alert.alert(
        t('codePractice.noCode', 'No Code'),
        t('codePractice.pleaseWriteCode', 'Please write some code first.'),
        [{ text: t('common.ok', 'OK') }]
      );
      return;
    }

    setIsExecuting(true);
    setExecutionResult(null);

    try {
      const result = await codeExecutionService.executeRustCode(userCode);
      setExecutionResult(result);

      if (result.success) {
        // Check if output matches expected output and award XP immediately
        if (practice.expectedOutput && result.output.trim() === practice.expectedOutput.trim()) {
          // Calculate XP reward
          const baseXP = practice.points;
          const bonusXP = 25; // Bonus for first completion
          const totalXP = baseXP + bonusXP;

          // Award XP immediately
          try {
            const xpResult = useProgressStore
              .getState()
              .completeCodePractice(practice, userCode, true);

            // Show success alert with XP earned
            Alert.alert(
              `🎉 ${t('codePractice.correctSolution', 'Correct Solution!')}`,
              `${t('codePractice.yourCodeOutputMatches', 'Your code output matches the expected output!')}\n\nOutput: "${result.output.trim()}"\n\n🎁 ${t('codePractice.xpEarned', 'XP Earned')}: +${totalXP}`,
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
          } catch (error) {
            // Show success alert without XP if there's an error
            Alert.alert(
              `🎉 ${t('codePractice.correctSolution', 'Correct Solution!')}`,
              `${t('codePractice.yourCodeOutputMatches', 'Your code output matches the expected output!')}\n\nOutput: "${result.output.trim()}"`,
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
          }
        } else {
          // Output doesn't match, show normal success
          Alert.alert(
            t('codePractice.codeExecuted', 'Code Executed'),
            t('codePractice.codeExecutedSuccessfully', 'Your code executed successfully!'),
            [{ text: t('common.ok', 'OK') }]
          );
        }
      } else {
        Alert.alert(t('codePractice.codeExecutionFailed', 'Code Execution Failed'), result.error, [
          { text: t('common.ok', 'OK') },
        ]);
      }
    } catch (error) {
      setExecutionResult({
        success: false,
        output: '',
        error: error instanceof Error ? error.message : 'Unknown error',
        executionTime: 0,
      });

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

  const handleShowHint = (hintIndex: number) => {
    if (!usedHints.includes(hintIndex)) {
      setUsedHints([...usedHints, hintIndex]);
      // The onHint prop is removed, so this function is no longer used for hinting.
      // Keeping it here for now, but it will not trigger the onHint callback.
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
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
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

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
            onPress={() => setShowSolution(!showSolution)}
          >
            <Ionicons name='eye' size={20} color={theme.colors.white} />
            <Text style={styles.actionButtonText} numberOfLines={1}>
              {showSolution
                ? t('codePractice.hide', 'Hide')
                : t('codePractice.solution', 'Solution')}
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
}

const createStyles = (theme: any) =>
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
    actionButtons: {
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
      backgroundColor: theme.colors.success, // Default green background for Run Code
      borderRadius: theme.borderRadius.sm,
      minHeight: 44, // Ensure consistent height
      minWidth: 120, // Ensure minimum width for text
      flex: 1, // Take available space
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
