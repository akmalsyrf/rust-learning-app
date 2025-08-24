import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { LessonResult } from './index';

// Stack navigator param list
export type RootStackParamList = {
  MainTabs: undefined;
  Lesson: { lessonId: string };
  Quiz: { lessonId: string };
  CodePractice: { lessonId?: string; topicId?: string };
  Results: { lessonResult: LessonResult };
  About: undefined;
  LanguageSettings: undefined;
};

// Tab navigator param list
export type TabParamList = {
  Home: undefined;
  Modules: undefined;
  Leaderboard: undefined;
  Profile: undefined;
};

// Stack navigation prop
export type StackNavigationProps = NativeStackNavigationProp<RootStackParamList>;

// Tab navigation prop
export type TabNavigationProps = BottomTabNavigationProp<TabParamList>;

// Combined navigation prop for screens that can access both
export type NavigationProps = CompositeNavigationProp<TabNavigationProps, StackNavigationProps>;

// Route props for specific screens
export type LessonScreenRouteProp = RouteProp<RootStackParamList, 'Lesson'>;
export type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;
export type CodePracticeScreenRouteProp = RouteProp<RootStackParamList, 'CodePractice'>;
export type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

// Screen props combining navigation and route
export type LessonScreenProps = {
  navigation: StackNavigationProps;
  route: LessonScreenRouteProp;
};

export type QuizScreenProps = {
  navigation: StackNavigationProps;
  route: QuizScreenRouteProp;
};

export type CodePracticeScreenProps = {
  navigation: StackNavigationProps;
  route: CodePracticeScreenRouteProp;
};

export type ResultsScreenProps = {
  navigation: StackNavigationProps;
  route: ResultsScreenRouteProp;
};

export type HomeScreenProps = {
  navigation: NavigationProps;
};

export type ModulesScreenProps = {
  navigation: NavigationProps;
};

export type LeaderboardScreenProps = {
  navigation: NavigationProps;
};

export type ProfileScreenProps = {
  navigation: NavigationProps;
};

export type AboutScreenProps = {
  navigation: StackNavigationProps;
};

export type LanguageSettingsScreenProps = {
  navigation: StackNavigationProps;
};
