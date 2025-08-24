import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';
import { ResultsScreenProps } from '../types/navigation';

export default function ResultsScreen({ route }: ResultsScreenProps) {
  const { lessonResult } = route.params;
  const { getEffectiveTheme } = useSettingsStore();
  
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text style={{ fontSize: 18, color: theme.colors.text, textAlign: 'center' }}>
          Results Screen
        </Text>
        <Text style={{ fontSize: 14, color: theme.colors.textSecondary, marginTop: 8, textAlign: 'center' }}>
          Quiz results and performance analysis will be shown here
        </Text>
      </View>
    </SafeAreaView>
  );
}
