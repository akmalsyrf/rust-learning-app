import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ModulesScreen from '../screens/ModulesScreen';
import LessonScreen from '../screens/LessonScreen';
import QuizScreen from '../screens/QuizScreen';
import CodePracticeScreen from '../screens/CodePracticeScreen';
import FreeCodePracticeScreen from '../screens/FreeCodePracticeScreen';
import ResultsScreen from '../screens/ResultsScreen';
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
        // Tab Bar Styling
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          paddingHorizontal: 16,
          elevation: 8,
          shadowColor: theme.colors.border,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: theme.typography.sizes.xs,
          fontWeight: theme.typography.weights.medium as any,
          marginTop: 2,
        },
        tabBarIconStyle: {
          marginTop: 4,
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
