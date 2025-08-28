import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SyntaxHighlighter from './SyntaxHighlighter';
import { Theme } from '../theme';

interface FullScreenModalProps {
  visible: boolean;
  isPreviewMode: boolean;
  showEditorFeatures: boolean;
  code: string;
  placeholder: string;
  readOnly: boolean;
  isDark: boolean;
  screenWidth: number;
  screenHeight: number;
  onClose: () => void;
  onToggleMode: () => void;
  onToggleFeatures: () => void;
  onCodeChange: (text: string) => void;
  onSelectionChange: (event: any) => void;
  onFormat: () => void;
  onClear: () => void;
  onReset: () => void;
  onInsertTemplate: (template: string) => void;
  inputRef: React.RefObject<TextInput | null>;
  theme: Theme;
}

export default function FullScreenModal({
  visible,
  isPreviewMode,
  showEditorFeatures,
  code,
  placeholder,
  readOnly,
  isDark,
  screenWidth,
  screenHeight,
  onClose,
  onToggleMode,
  onToggleFeatures,
  onCodeChange,
  onSelectionChange,
  onFormat,
  onClear,
  onReset,
  onInsertTemplate,
  inputRef,
  theme,
}: FullScreenModalProps) {
  const styles = createStyles(theme);

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='fullScreen'
      onRequestClose={onClose}
    >
      <View style={[styles.fullScreenContainer, { width: screenWidth, height: screenHeight }]}>
        {/* Full Screen Header */}
        <View style={styles.fullScreenHeader}>
          <View style={styles.fullScreenHeaderLeft}>
            <Text style={styles.fullScreenTitle}>
              {isPreviewMode ? 'Code Preview' : 'Code Editor'} - Full Screen
            </Text>
          </View>
          <View style={styles.fullScreenHeaderRight}>
            {/* Hide/Show Features Button - only in Edit mode */}
            {!isPreviewMode && (
              <TouchableOpacity
                style={styles.fullScreenHideFeaturesButton}
                onPress={onToggleFeatures}
              >
                <Ionicons
                  name={showEditorFeatures ? 'eye-off' : 'eye'}
                  size={18}
                  color={theme.colors.white}
                />
                <Text style={styles.fullScreenHideFeaturesText}>
                  {showEditorFeatures ? 'Hide' : 'Show'} Features
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.fullScreenToggleButton} onPress={onToggleMode}>
              <Text style={[styles.fullScreenToggleText, { color: theme.colors.white }]}>
                {isPreviewMode ? 'Edit' : 'Preview'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeFullScreenButton} onPress={onClose}>
              <Ionicons name='close' size={24} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Full Screen Content */}
        <View style={styles.fullScreenContent}>
          {!isPreviewMode ? (
            <TextInput
              ref={inputRef}
              style={[styles.fullScreenCodeInput, { fontSize: 16, lineHeight: 24 }]}
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
              textAlign='left'
            />
          ) : (
            <View style={styles.fullScreenPreviewContainer}>
              <SyntaxHighlighter
                code={code || placeholder}
                language='rust'
                theme={isDark ? 'dark' : 'light'}
                fontSize={16}
                lineHeight={24}
                isFullScreen={true}
              />
            </View>
          )}
        </View>

        {/* Full Screen Footer */}
        {!readOnly && !isPreviewMode && showEditorFeatures && (
          <View style={styles.fullScreenFooter}>
            <View style={styles.fullScreenActions}>
              <TouchableOpacity style={styles.fullScreenActionButton} onPress={onFormat}>
                <Text style={styles.fullScreenActionButtonText}>Format</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fullScreenActionButton} onPress={onClear}>
                <Text style={styles.fullScreenActionButtonText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fullScreenActionButton} onPress={onReset}>
                <Text style={styles.fullScreenActionButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>

            {/* Quick Templates in Full Screen */}
            <View style={styles.fullScreenTemplates}>
              <Text style={styles.fullScreenTemplatesTitle}>Quick Templates:</Text>
              <View style={styles.fullScreenTemplateButtons}>
                <TouchableOpacity
                  style={styles.fullScreenTemplateButton}
                  onPress={() => onInsertTemplate('println!("Hello, World!");')}
                >
                  <Text style={styles.fullScreenTemplateButtonText}>Hello World</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fullScreenTemplateButton}
                  onPress={() => onInsertTemplate('let x = 42;\nprintln!("x = {}", x);')}
                >
                  <Text style={styles.fullScreenTemplateButtonText}>Variable</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fullScreenTemplateButton}
                  onPress={() => onInsertTemplate('for i in 1..=5 {\n  println!("{}", i);\n}')}
                >
                  <Text style={styles.fullScreenTemplateButtonText}>Loop</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fullScreenTemplateButton}
                  onPress={() => onInsertTemplate('fn main() {\n  \n}')}
                >
                  <Text style={styles.fullScreenTemplateButtonText}>Main Function</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    fullScreenContainer: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    fullScreenHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    fullScreenHeaderLeft: {
      flex: 1,
    },
    fullScreenHeaderRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    fullScreenTitle: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.lg,
      fontWeight: '600' as any,
    },
    fullScreenHideFeaturesButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      backgroundColor: theme.colors.white + '20',
      borderRadius: theme.borderRadius.sm,
      marginRight: theme.spacing.sm,
    },
    fullScreenHideFeaturesText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.xs,
      fontWeight: '500' as any,
    },
    fullScreenToggleButton: {
      backgroundColor: theme.colors.white + '20',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.sm,
    },
    fullScreenToggleText: {
      fontSize: theme.typography.sizes.sm,
      fontWeight: '600' as any,
    },
    closeFullScreenButton: {
      padding: theme.spacing.sm,
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.colors.error + '20',
    },
    fullScreenContent: {
      flex: 1,
      padding: theme.spacing.md,
    },
    fullScreenCodeInput: {
      flex: 1,
      padding: theme.spacing.md,
      fontFamily: 'monospace',
      color: theme.colors.text,
      textAlignVertical: 'top',
      textAlign: 'left',
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderRadius: 0,
      margin: 0,
      flexShrink: 0,
    },
    fullScreenPreviewContainer: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      overflow: 'hidden',
    },
    fullScreenFooter: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    fullScreenActions: {
      flexDirection: 'row',
      gap: theme.spacing.sm,
      justifyContent: 'center',
    },
    fullScreenActionButton: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.borderRadius.sm,
      minWidth: 100,
      alignItems: 'center',
    },
    fullScreenActionButtonText: {
      color: theme.colors.white,
      fontSize: theme.typography.sizes.md,
      fontWeight: '600' as any,
    },
    fullScreenTemplates: {
      marginTop: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    fullScreenTemplatesTitle: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.sizes.md,
      fontWeight: '600' as any,
      textAlign: 'center',
    },
    fullScreenTemplateButtons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
      justifyContent: 'center',
    },
    fullScreenTemplateButton: {
      backgroundColor: theme.colors.surface,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      minWidth: 120,
    },
    fullScreenTemplateButtonText: {
      color: theme.colors.text,
      fontSize: theme.typography.sizes.sm,
      fontWeight: '500' as any,
      textAlign: 'center',
    },
  });
