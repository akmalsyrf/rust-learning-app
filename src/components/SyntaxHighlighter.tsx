import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { lightTheme, darkTheme, Theme } from '../theme';

interface SyntaxHighlighterProps {
  code: string;
  language: 'rust';
  theme?: 'light' | 'dark';
  fontSize?: number;
  lineHeight?: number;
  isFullScreen?: boolean;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language,
  theme: themeMode = 'light',
  fontSize = 14,
  lineHeight = 20,
  isFullScreen = false,
}) => {
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(theme, fontSize, lineHeight);

  const highlightRustCode = (code: string) => {
    if (!code) return [];

    const lines = code.split('\n');
    return lines.map((line, lineIndex) => {
      const tokens = parseRustLine(line);
      return (
        <View key={lineIndex} style={styles.line}>
          <Text style={styles.lineNumber}>{lineIndex + 1}</Text>
          <View style={styles.codeContent}>
            {tokens.map((token, tokenIndex) => (
              <Text key={tokenIndex} style={[styles.token, getTokenStyle(token.type)]}>
                {token.value}
              </Text>
            ))}
          </View>
        </View>
      );
    });
  };

  const parseRustLine = (line: string) => {
    const tokens: Array<{ value: string; type: string }> = [];

    // Keywords
    const keywords = [
      'fn',
      'let',
      'mut',
      'const',
      'static',
      'if',
      'else',
      'match',
      'loop',
      'while',
      'for',
      'in',
      'return',
      'break',
      'continue',
      'struct',
      'enum',
      'impl',
      'trait',
      'use',
      'mod',
      'pub',
      'crate',
      'extern',
      'unsafe',
      'async',
      'await',
      'move',
      'ref',
      'where',
      'type',
      'as',
      'dyn',
      'box',
      'unsized',
      'union',
      'macro_rules',
    ];

    // Types
    const types = [
      'i8',
      'i16',
      'i32',
      'i64',
      'i128',
      'isize',
      'u8',
      'u16',
      'u32',
      'u64',
      'u128',
      'usize',
      'f32',
      'f64',
      'bool',
      'char',
      'str',
      'String',
      'Vec',
      'Option',
      'Result',
      'Box',
      'Rc',
      'Arc',
    ];

    // Check for comments first (highest priority)
    if (line.trim().startsWith('//')) {
      // Whole line is a comment
      tokens.push({ value: line, type: 'comment' });
      return tokens;
    }

    // Check for inline comments
    const commentIndex = line.indexOf('//');
    if (commentIndex !== -1) {
      // Parse code before comment
      const codeBeforeComment = line.substring(0, commentIndex);
      if (codeBeforeComment.trim()) {
        tokens.push(...parseCodeTokens(codeBeforeComment, keywords, types));
      }

      // Add comment part
      tokens.push({ value: line.substring(commentIndex), type: 'comment' });
      return tokens;
    }

    // String literals
    const stringRegex = /"([^"\\]|\\.)*"/g;
    let match;
    let lastIndex = 0;

    while ((match = stringRegex.exec(line)) !== null) {
      // Add text before string
      if (match.index > lastIndex) {
        const beforeString = line.substring(lastIndex, match.index);
        tokens.push(...parseCodeTokens(beforeString, keywords, types));
      }

      // Add string literal
      tokens.push({ value: match[0], type: 'string' });
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < line.length) {
      const remainingText = line.substring(lastIndex);
      tokens.push(...parseCodeTokens(remainingText, keywords, types));
    }

    // If no tokens were found, treat the whole line as plain text
    if (tokens.length === 0) {
      tokens.push({ value: line, type: 'text' });
    }

    return tokens;
  };

  const parseCodeTokens = (text: string, keywords: string[], types: string[]) => {
    const tokens: Array<{ value: string; type: string }> = [];
    const words = text.split(/(\s+)/);

    words.forEach(word => {
      if (word.trim() === '') {
        tokens.push({ value: word, type: 'whitespace' });
      } else if (keywords.includes(word)) {
        tokens.push({ value: word, type: 'keyword' });
      } else if (types.includes(word)) {
        tokens.push({ value: word, type: 'type' });
      } else if (/^\d+$/.test(word)) {
        tokens.push({ value: word, type: 'number' });
      } else if (/^[{}()[\]()]$/.test(word)) {
        tokens.push({ value: word, type: 'bracket' });
      } else if (/^[+\-*/%=<>!&|^~]+$/.test(word)) {
        tokens.push({ value: word, type: 'operator' });
      } else {
        tokens.push({ value: word, type: 'text' });
      }
    });

    return tokens;
  };

  const getTokenStyle = (type: string) => {
    switch (type) {
      case 'keyword':
        return styles.keyword;
      case 'type':
        return styles.type;
      case 'string':
        return styles.string;
      case 'number':
        return styles.number;
      case 'comment':
        return styles.comment;
      case 'operator':
        return styles.operator;
      case 'bracket':
        return styles.bracket;
      case 'whitespace':
        return styles.whitespace;
      default:
        return styles.text;
    }
  };

  return (
    <View style={[styles.container, isFullScreen && styles.fullScreenContainer]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.codeContainer, isFullScreen && styles.fullScreenCodeContainer]}>
          {highlightRustCode(code)}
        </View>
      </ScrollView>
    </View>
  );
};

const createStyles = (theme: Theme, fontSize: number, lineHeight: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
    codeContainer: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      minWidth: '100%',
    },
    scrollContent: {
      flexGrow: 1,
    },
    line: {
      flexDirection: 'row',
      minHeight: lineHeight,
      alignItems: 'flex-start',
    },
    lineNumber: {
      width: 40,
      fontSize: fontSize - 2,
      color: theme.colors.textSecondary,
      fontFamily: 'monospace',
      textAlign: 'right',
      paddingRight: theme.spacing.sm,
      lineHeight: lineHeight,
    },
    codeContent: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      minWidth: 'auto',
    },
    token: {
      fontSize: fontSize,
      fontFamily: 'monospace',
      lineHeight: lineHeight,
    },
    text: {
      color: theme.colors.text,
    },
    keyword: {
      color: '#FF6B6B', // Red for keywords
      fontWeight: '600' as any,
    },
    type: {
      color: '#4ECDC4', // Teal for types
      fontWeight: '600' as any,
    },
    string: {
      color: '#45B7D1', // Blue for strings
    },
    number: {
      color: '#96CEB4', // Green for numbers
    },
    comment: {
      color: '#9CA3AF', // Gray for comments (more professional)
      fontStyle: 'italic' as any,
    },
    operator: {
      color: '#DDA0DD', // Plum for operators
      fontWeight: '600' as any,
    },
    bracket: {
      color: '#F8B500', // Orange for brackets
      fontWeight: '600' as any,
    },
    whitespace: {
      color: 'transparent',
    },
    fullScreenContainer: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    fullScreenCodeContainer: {
      padding: 0,
      backgroundColor: 'transparent',
    },
  });

export default SyntaxHighlighter;
