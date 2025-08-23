import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';

export default function CodePracticeScreen({ route }: any) {
  const { lessonId } = route.params;
  const { getEffectiveTheme } = useSettingsStore();
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text style={{ fontSize: 18, color: theme.colors.text, textAlign: 'center' }}>
          Code Practice for lesson: {lessonId}
        </Text>
        <Text style={{ fontSize: 14, color: theme.colors.textSecondary, marginTop: 8, textAlign: 'center' }}>
          Code editor and exercises will be implemented here
        </Text>
      </View>
    </SafeAreaView>
  );
}
