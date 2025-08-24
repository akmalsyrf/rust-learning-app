import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Question } from '../types';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string | number | boolean) => void;
  showResult?: boolean;
  userAnswer?: string | number | boolean;
  isCorrect?: boolean;
}

export default function QuestionCard({
  question,
  onAnswer,
  showResult = false,
  userAnswer,
  isCorrect,
}: QuestionCardProps) {
  const { getEffectiveTheme } = useSettingsStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | boolean | null>(null);
  const [textInput, setTextInput] = useState('');

  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const handleAnswer = (answer: string | number | boolean) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  const renderMultipleChoice = () => {
    if (question.type !== 'mcq') return null;

    return (
      <View style={styles.choicesContainer}>
        {question.choices.map((choice, index) => {
          const isSelected = selectedAnswer === index || userAnswer === index;
          const isCorrectChoice = question.correctIndex === index;

          const choiceStyle = [
            styles.choice,
            showResult && isCorrectChoice && styles.correctChoice,
            showResult && isSelected && !isCorrect && styles.incorrectChoice,
            !showResult && isSelected && styles.selectedChoice,
          ].filter(Boolean);

          const textStyle = [
            styles.choiceText,
            showResult && isCorrectChoice && styles.correctChoiceText,
            showResult && isSelected && !isCorrect && styles.incorrectChoiceText,
            !showResult && isSelected && styles.selectedChoiceText,
          ].filter(Boolean);

          return (
            <TouchableOpacity
              key={index}
              style={choiceStyle}
              onPress={() => !showResult && handleAnswer(index)}
              disabled={showResult}
            >
              <View style={styles.choiceContent}>
                <Text style={styles.choiceLabel}>{String.fromCharCode(65 + index)}.</Text>
                <Text style={textStyle}>{choice}</Text>
                {showResult && isCorrectChoice && (
                  <Ionicons name='checkmark-circle' size={20} color={theme.colors.correct} />
                )}
                {showResult && isSelected && !isCorrect && (
                  <Ionicons name='close-circle' size={20} color={theme.colors.incorrect} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderTrueFalse = () => {
    if (question.type !== 'tf') return null;

    return (
      <View style={styles.trueFalseContainer}>
        {[true, false].map(value => {
          const isSelected = selectedAnswer === value || userAnswer === value;
          const isCorrectChoice = question.answer === value;

          const choiceStyle = [
            styles.trueFalseChoice,
            showResult && isCorrectChoice && styles.correctChoice,
            showResult && isSelected && !isCorrect && styles.incorrectChoice,
            !showResult && isSelected && styles.selectedChoice,
          ].filter(Boolean);

          const textStyle = [
            styles.trueFalseText,
            showResult && isCorrectChoice && styles.correctChoiceText,
            showResult && isSelected && !isCorrect && styles.incorrectChoiceText,
            !showResult && isSelected && styles.selectedChoiceText,
          ].filter(Boolean);

          return (
            <TouchableOpacity
              key={value.toString()}
              style={choiceStyle}
              onPress={() => !showResult && handleAnswer(value)}
              disabled={showResult}
            >
              <View style={styles.trueFalseContent}>
                <Ionicons
                  name={value ? 'checkmark-circle-outline' : 'close-circle-outline'}
                  size={24}
                  color={isSelected ? theme.colors.background : theme.colors.text}
                />
                <Text style={textStyle}>{value ? 'True' : 'False'}</Text>
                {showResult && isCorrectChoice && (
                  <Ionicons name='checkmark' size={20} color={theme.colors.correct} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderFillInBlank = () => {
    if (question.type !== 'fib') return null;

    return (
      <View style={styles.fillInBlankContainer}>
        <TextInput
          style={[
            styles.textInput,
            showResult && isCorrect && styles.correctInput,
            showResult && !isCorrect && styles.incorrectInput,
          ]}
          value={showResult ? String(userAnswer || '') : textInput}
          onChangeText={text => {
            if (!showResult) {
              setTextInput(text);
              handleAnswer(text);
            }
          }}
          placeholder='Type your answer here...'
          placeholderTextColor={theme.colors.textSecondary}
          editable={!showResult}
          autoCapitalize='none'
          autoCorrect={false}
        />
        {showResult && (
          <View style={styles.correctAnswerContainer}>
            <Text style={styles.correctAnswerLabel}>Correct answer(s):</Text>
            <Text style={styles.correctAnswerText}>{question.acceptableAnswers.join(', ')}</Text>
          </View>
        )}
      </View>
    );
  };

  const renderCodeOutput = () => {
    if (question.type !== 'predict_output') return null;

    return (
      <View style={styles.codeContainer}>
        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>{question.code}</Text>
        </View>
        <Text style={styles.codePrompt}>What will this code output?</Text>
        <TextInput
          style={[
            styles.textInput,
            styles.codeInput,
            showResult && isCorrect && styles.correctInput,
            showResult && !isCorrect && styles.incorrectInput,
          ]}
          value={showResult ? String(userAnswer || '') : textInput}
          onChangeText={text => {
            if (!showResult) {
              setTextInput(text);
              handleAnswer(text);
            }
          }}
          placeholder='Enter the expected output...'
          placeholderTextColor={theme.colors.textSecondary}
          editable={!showResult}
          multiline
        />
        {showResult && (
          <View style={styles.correctAnswerContainer}>
            <Text style={styles.correctAnswerLabel}>Expected output:</Text>
            <Text style={styles.correctAnswerText}>{question.expectedStdout}</Text>
          </View>
        )}
      </View>
    );
  };

  const renderCodeFix = () => {
    if (question.type !== 'code_fix') return null;

    return (
      <View style={styles.codeContainer}>
        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>{question.code}</Text>
        </View>
        <Text style={styles.codePrompt}>Choose the correct fix:</Text>
        <View style={styles.choicesContainer}>
          {question.choices.map((choice, index) => {
            const isSelected = selectedAnswer === index || userAnswer === index;
            const isCorrectChoice = question.correctIndex === index;

            const choiceStyle = [
              styles.codeChoice,
              showResult && isCorrectChoice && styles.correctChoice,
              showResult && isSelected && !isCorrect && styles.incorrectChoice,
              !showResult && isSelected && styles.selectedChoice,
            ].filter(Boolean);

            const textStyle = [
              styles.codeChoiceText,
              showResult && isCorrectChoice && styles.correctChoiceText,
              showResult && isSelected && !isCorrect && styles.incorrectChoiceText,
              !showResult && isSelected && styles.selectedChoiceText,
            ].filter(Boolean);

            return (
              <TouchableOpacity
                key={index}
                style={choiceStyle}
                onPress={() => !showResult && handleAnswer(index)}
                disabled={showResult}
              >
                <Text style={textStyle}>{choice}</Text>
                {showResult && isCorrectChoice && (
                  <Ionicons name='checkmark-circle' size={20} color={theme.colors.correct} />
                )}
                {showResult && isSelected && !isCorrect && (
                  <Ionicons name='close-circle' size={20} color={theme.colors.incorrect} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.questionInfo}>
          <Text style={styles.questionType}>
            {question.type.toUpperCase()} • {question.difficulty} • {question.points} XP
          </Text>
          <View style={styles.difficultyBadge}>
            <Ionicons
              name={question.difficulty === 'beginner' ? 'leaf' : 'flash'}
              size={12}
              color={theme.colors.accent}
            />
          </View>
        </View>
      </View>

      <Text style={styles.prompt}>{question.prompt}</Text>

      {question.type === 'mcq' && renderMultipleChoice()}
      {question.type === 'tf' && renderTrueFalse()}
      {question.type === 'fib' && renderFillInBlank()}
      {question.type === 'predict_output' && renderCodeOutput()}
      {question.type === 'code_fix' && renderCodeFix()}

      {showResult && question.explanation && (
        <View style={styles.explanationContainer}>
          <View style={styles.explanationHeader}>
            <Ionicons name='bulb' size={16} color={theme.colors.info} />
            <Text style={styles.explanationTitle}>Explanation</Text>
          </View>
          <Text style={styles.explanationText}>{question.explanation}</Text>
        </View>
      )}
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    header: {
      marginBottom: theme.spacing.md,
    },
    questionInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    questionType: {
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.textSecondary,
      fontWeight: '500',
    },
    difficultyBadge: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    prompt: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 24,
      marginBottom: theme.spacing.md,
      fontWeight: '500',
    },
    choicesContainer: {
      gap: theme.spacing.sm,
    },
    choice: {
      backgroundColor: theme.colors.background,
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
    },
    selectedChoice: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary + '10',
    },
    correctChoice: {
      borderColor: theme.colors.correct,
      backgroundColor: theme.colors.correct + '20',
    },
    incorrectChoice: {
      borderColor: theme.colors.incorrect,
      backgroundColor: theme.colors.incorrect + '20',
    },
    choiceContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    choiceLabel: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.primary,
      marginRight: theme.spacing.sm,
      minWidth: 24,
    },
    choiceText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      flex: 1,
    },
    selectedChoiceText: {
      color: theme.colors.primary,
    },
    correctChoiceText: {
      color: theme.colors.correct,
    },
    incorrectChoiceText: {
      color: theme.colors.incorrect,
    },
    trueFalseContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
    },
    trueFalseChoice: {
      flex: 1,
      backgroundColor: theme.colors.background,
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
    },
    trueFalseContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.sm,
    },
    trueFalseText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      fontWeight: '500',
    },
    fillInBlankContainer: {
      gap: theme.spacing.md,
    },
    textInput: {
      backgroundColor: theme.colors.background,
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      minHeight: 48,
    },
    correctInput: {
      borderColor: theme.colors.correct,
      backgroundColor: theme.colors.correct + '10',
    },
    incorrectInput: {
      borderColor: theme.colors.incorrect,
      backgroundColor: theme.colors.incorrect + '10',
    },
    codeContainer: {
      gap: theme.spacing.md,
    },
    codeBlock: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    codeText: {
      fontFamily: theme.typography.code.fontFamily,
      fontSize: theme.typography.code.fontSize,
      color: theme.colors.text,
      lineHeight: theme.typography.code.lineHeight,
    },
    codePrompt: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      fontWeight: '500',
    },
    codeInput: {
      fontFamily: theme.typography.code.fontFamily,
      minHeight: 80,
    },
    codeChoice: {
      backgroundColor: theme.colors.background,
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    codeChoiceText: {
      fontFamily: theme.typography.code.fontFamily,
      fontSize: theme.typography.caption.fontSize,
      color: theme.colors.text,
      flex: 1,
    },
    correctAnswerContainer: {
      backgroundColor: theme.colors.success + '20',
      padding: theme.spacing.sm,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.success + '40',
    },
    correctAnswerLabel: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: '600',
      color: theme.colors.success,
      marginBottom: theme.spacing.xs,
    },
    correctAnswerText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
    },
    explanationContainer: {
      marginTop: theme.spacing.md,
      backgroundColor: theme.colors.info + '20',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.info + '40',
    },
    explanationHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    explanationTitle: {
      fontSize: theme.typography.body.fontSize,
      fontWeight: '600',
      color: theme.colors.info,
      marginLeft: theme.spacing.sm,
    },
    explanationText: {
      fontSize: theme.typography.body.fontSize,
      color: theme.colors.text,
      lineHeight: 22,
    },
  });
