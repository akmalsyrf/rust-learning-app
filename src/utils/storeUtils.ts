import { useSettingsStore } from '../state/useSettingsStore';
import { useProgressStore } from '../state/useProgressStore';
import { useDataStore } from '../state/useDataStore';

// Safe theme hook
export const useSafeTheme = () => {
  const settingsStore = useSettingsStore();
  const getEffectiveTheme = settingsStore?.getEffectiveTheme || (() => 'light' as const);
  return getEffectiveTheme();
};

// Safe progress hook
export const useSafeProgress = () => {
  const progressStore = useProgressStore();

  return {
    xp: progressStore?.xp || 0,
    currentStreakDays: progressStore?.currentStreakDays || 0,
    getTodayXP: progressStore?.getTodayXP || (() => 0),
    getTotalCorrectAnswers: progressStore?.getTotalCorrectAnswers || (() => 0),
    getLessonStars: progressStore?.getLessonStars || (() => 0),
    getQuestionProgress: progressStore?.getQuestionProgress || (() => null),
    completeQuestion: progressStore?.completeQuestion || (() => {}),
    completeLesson: progressStore?.completeLesson || (() => {}),
    updateStreak: progressStore?.updateStreak || (() => {}),
    addXP: progressStore?.addXP || (() => 0),
  };
};

// Safe data hook
export const useSafeData = () => {
  const dataStore = useDataStore();

  return {
    getTopics: dataStore?.getTopics || (() => []),
    getTopic: dataStore?.getTopic || (() => undefined),
    getLesson: dataStore?.getLesson || (() => undefined),
    getQuestion: dataStore?.getQuestion || (() => undefined),
    getLessonsForTopic: dataStore?.getLessonsForTopic || (() => []),
    getQuestionsForLesson: dataStore?.getQuestionsForLesson || (() => []),
    loadData: dataStore?.loadData || (() => {}),
  };
};

// Safe settings hook
export const useSafeSettings = () => {
  const settingsStore = useSettingsStore();

  return {
    theme: settingsStore?.theme || 'light',
    notificationsEnabled: settingsStore?.notificationsEnabled || true,
    notificationTime: settingsStore?.notificationTime || '19:00',
    soundEnabled: settingsStore?.soundEnabled || true,
    getEffectiveTheme: settingsStore?.getEffectiveTheme || (() => 'light' as const),
    setTheme: settingsStore?.setTheme || (() => {}),
    setNotificationsEnabled: settingsStore?.setNotificationsEnabled || (() => {}),
    setNotificationTime: settingsStore?.setNotificationTime || (() => {}),
    setSoundEnabled: settingsStore?.setSoundEnabled || (() => {}),
  };
};
