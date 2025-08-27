import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ModulesScreen from '../screens/ModulesScreen';
import LessonScreen from '../screens/LessonScreen';
import QuizScreen from '../screens/QuizScreen';
import CodePracticeScreen from '../screens/CodePracticeScreen';
import FreeCodePracticeScreen from '../screens/FreeCodePracticeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ReviewMistakesScreen from '../screens/ReviewMistakesScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import LanguageSettings from '../components/LanguageSettings';

// Import theme and types
import { useSettingsStore } from '../state/useSettingsStore';
import { lightTheme, darkTheme } from '../theme';
import { RootStackParamList, TabParamList } from '../types/navigation';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  const { getEffectiveTheme } = useSettingsStore();
  const { t } = useTranslation();
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Modules':
              iconName = focused ? 'library' : 'library-outline';
              break;
            case 'Leaderboard':
              iconName = focused ? 'trophy' : 'trophy-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Tab Bar Styling - Platform-specific with increased spacing
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 100 : 80, // Increased height for more spacing
          paddingBottom: Platform.OS === 'ios' ? 30 : 16, // Increased bottom padding
          paddingTop: 12, // Increased top padding
          paddingHorizontal: 20, // Increased horizontal padding
          elevation: Platform.OS === 'android' ? 8 : 0,
          shadowColor: Platform.OS === 'ios' ? theme.colors.border : 'transparent',
          shadowOffset: Platform.OS === 'ios' ? { width: 0, height: -2 } : { width: 0, height: 0 },
          shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0,
          shadowRadius: Platform.OS === 'ios' ? 4 : 0,
        },
        tabBarLabelStyle: {
          fontSize: theme.typography.sizes.xs,
          fontWeight: theme.typography.weights.medium as any,
          marginTop: 4, // Increased from 0 for better spacing
        },
        tabBarIconStyle: {
          marginTop: 6, // Increased from 2 for better spacing
        },
        // Header Styling
        headerStyle: {
          backgroundColor: theme.colors.surface,
          borderBottomColor: theme.colors.border,
          borderBottomWidth: 1,
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontSize: theme.typography.subheading.fontSize,
          fontWeight: theme.typography.weights.semibold as any,
          color: theme.colors.text,
        },
        headerShadowVisible: false,
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: t('navigation.home', 'Home'),
          tabBarLabel: t('navigation.home', 'Home'),
        }}
      />
      <Tab.Screen
        name='Modules'
        component={ModulesScreen}
        options={{
          title: t('navigation.learn', 'Learn'),
          tabBarLabel: t('navigation.learn', 'Learn'),
        }}
      />
      <Tab.Screen
        name='Leaderboard'
        component={LeaderboardScreen}
        options={{
          title: t('navigation.leaderboard', 'Leaderboard'),
          tabBarLabel: t('navigation.leaderboard', 'Leaderboard'),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: t('navigation.profile', 'Profile'),
          tabBarLabel: t('navigation.profile', 'Profile'),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { getEffectiveTheme } = useSettingsStore();
  const { t } = useTranslation();
  const isDark = getEffectiveTheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <NavigationContainer
      theme={{
        dark: isDark,
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.surface,
          text: theme.colors.text,
          border: theme.colors.border,
          notification: theme.colors.accent,
        },
        fonts: {
          regular: {
            fontFamily: 'System',
            fontWeight: '400',
          },
          medium: {
            fontFamily: 'System',
            fontWeight: '500',
          },
          bold: {
            fontFamily: 'System',
            fontWeight: '700',
          },
          heavy: {
            fontFamily: 'System',
            fontWeight: '900',
          },
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          // Stack Header Styling
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: {
            fontSize: theme.typography.subheading.fontSize,
            fontWeight: theme.typography.weights.semibold as any,
            color: theme.colors.text,
          },
          headerShadowVisible: false,
          // Animation
          animation: 'slide_from_right',
          animationDuration: 200,
          // Gesture
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          // Status Bar
          statusBarStyle: isDark ? 'light' : 'dark',
          statusBarTranslucent: false,
        }}
      >
        <Stack.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name='Lesson'
          component={LessonScreen}
          options={{
            title: t('navigation.lesson', 'Lesson'),
            headerBackTitle: t('common.back', 'Back'),
          }}
        />
        <Stack.Screen
          name='Quiz'
          component={QuizScreen}
          options={{
            title: t('navigation.quiz', 'Quiz'),
            headerBackTitle: t('common.back', 'Back'),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name='CodePractice'
          component={CodePracticeScreen}
          options={{
            title: t('navigation.codePractice', 'Code Practice'),
            headerBackTitle: t('common.back', 'Back'),
          }}
        />
        <Stack.Screen
          name='FreeCodePractice'
          component={FreeCodePracticeScreen}
          options={{
            title: t('navigation.freeCodePractice', 'Free Code Practice'),
            headerBackTitle: t('common.back', 'Back'),
          }}
        />
        <Stack.Screen
          name='Results'
          component={ResultsScreen}
          options={{
            title: t('navigation.results', 'Results'),
            headerBackTitle: t('common.back', 'Back'),
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name='ReviewMistakes'
          component={ReviewMistakesScreen}
          options={{
            title: t('navigation.reviewMistakes', 'Review Mistakes'),
            headerBackTitle: t('common.back', 'Back'),
          }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{
            title: t('navigation.about', 'About'),
            headerBackTitle: t('common.back', 'Back'),
          }}
        />
        <Stack.Screen
          name='LanguageSettings'
          component={LanguageSettings}
          options={{
            title: t('navigation.languageSettings', 'Language Settings'),
            headerBackTitle: t('common.back', 'Back'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
