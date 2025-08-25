import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Stack navigator param list
export type RootStackParamList = {
  MainTabs: undefined;
  Lesson: { lessonId: string };
  Quiz: { lessonId: string };
  CodePractice: { lessonId?: string; topicId?: string };
  FreeCodePractice: undefined;
  Results: { lessonId: string; score: number; totalQuestions: number; timeTaken: number };
  About: undefined;
  LanguageSettings: undefined;
};

export type TabParamList = {
  Home: undefined;
  Modules: undefined;
  Leaderboard: undefined;
  Profile: undefined;
};

// Navigation prop types
export type StackNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type NavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

// Route prop types
export type LessonScreenRouteProp = RouteProp<RootStackParamList, 'Lesson'>;
export type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;
export type CodePracticeScreenRouteProp = RouteProp<RootStackParamList, 'CodePractice'>;
export type FreeCodePracticeScreenRouteProp = RouteProp<RootStackParamList, 'FreeCodePractice'>;
export type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;
export type AboutScreenRouteProp = RouteProp<RootStackParamList, 'About'>;
export type LanguageSettingsScreenRouteProp = RouteProp<RootStackParamList, 'LanguageSettings'>;

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

export type FreeCodePracticeScreenProps = {
  navigation: StackNavigationProps;
  route: FreeCodePracticeScreenRouteProp;
};

export type ResultsScreenProps = {
  navigation: StackNavigationProps;
  route: ResultsScreenRouteProp;
};

export type AboutScreenProps = {
  navigation: StackNavigationProps;
};

export type LanguageSettingsScreenProps = {
  navigation: StackNavigationProps;
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
