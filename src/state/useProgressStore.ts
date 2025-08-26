import { create } from 'zustand';
import {
  UserProgress,
  QuestionResult,
  LessonResult,
  QuestionId,
  LessonId,
  CodePractice,
} from '../types';
import { progressStorage } from '../utils/storage';

interface ProgressState extends UserProgress {
  // Actions
  completeQuestion: (result: QuestionResult) => void;
  completeLesson: (result: LessonResult) => void;
  updateStreak: () => void;
  addXP: (amount: number) => number; // returns actual XP added (may be capped)
  resetDailyXP: () => void;
  getQuestionProgress: (questionId: QuestionId) => { correct: boolean; timestamp: number } | null;
  getLessonStars: (lessonId: LessonId) => 0 | 1 | 2 | 3;
  getTotalCorrectAnswers: () => number;
  getTodayXP: () => number;
  completeCodePractice: (
    practice: CodePractice,
    userCode: string,
    isCorrect: boolean
  ) => {
    success: boolean;
    xpEarned: number;
    totalXP: number;
    reason?: string;
  };

  // Persistence actions
  loadFromStorage: () => Promise<void>;
  saveToStorage: () => Promise<void>;
  clearStorage: () => Promise<void>;
}

const DAILY_XP_LIMIT = 100;
const XP_PER_CORRECT = 10;
const XP_PERFECT_LESSON_BONUS = 10;

export const useProgressStore = create<ProgressState>()((set, get) => ({
  // Initial state
  completedQuestions: {},
  lessonStars: {},
  completedCodePractices: [],
  xp: 0,
  currentStreakDays: 0,
  highestStreakDays: 0,
  lastActiveDate: '',
  dailyXpCap: 0,
  lastXpResetDate: '',

  // Actions
  completeQuestion: (result: QuestionResult) => {
    set(state => ({
      completedQuestions: {
        ...state.completedQuestions,
        [result.questionId]: {
          correct: result.correct,
          timestamp: Date.now(),
        },
      },
    }));

    // Add XP for correct answer
    if (result.correct) {
      get().addXP(XP_PER_CORRECT);
    }

    // Auto-save to storage
    get().saveToStorage();
  },

  completeLesson: (result: LessonResult) => {
    const { lessonId, questionResults, perfectScore } = result;

    // Calculate stars based on performance
    const correctCount = questionResults.filter(q => q.correct).length;
    const totalQuestions = questionResults.length;
    const percentage = correctCount / totalQuestions;

    let stars: 0 | 1 | 2 | 3;
    if (percentage >= 0.9) stars = 3;
    else if (percentage >= 0.7) stars = 2;
    else if (percentage >= 0.5) stars = 1;
    else stars = 0;

    set(state => ({
      lessonStars: {
        ...state.lessonStars,
        [lessonId]: Math.max(state.lessonStars[lessonId] || 0, stars) as 0 | 1 | 2 | 3,
      },
    }));

    // Add bonus XP for perfect lesson
    if (perfectScore) {
      get().addXP(XP_PERFECT_LESSON_BONUS);
    }

    // Update streak
    get().updateStreak();

    // Auto-save to storage
    get().saveToStorage();
  },

  updateStreak: () => {
    const today = new Date().toISOString().split('T')[0];
    const state = get();

    if (state.lastActiveDate === today) {
      // Already updated today
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (state.lastActiveDate === yesterdayStr) {
      // Consecutive day - increment streak
      const newStreak = state.currentStreakDays + 1;
      set({
        currentStreakDays: newStreak,
        highestStreakDays: Math.max(state.highestStreakDays, newStreak),
        lastActiveDate: today,
      });
    } else if (state.lastActiveDate === '') {
      // First time - start streak
      set({
        currentStreakDays: 1,
        highestStreakDays: Math.max(state.highestStreakDays, 1),
        lastActiveDate: today,
      });
    } else {
      // Streak broken - reset
      set({
        currentStreakDays: 1,
        highestStreakDays: state.highestStreakDays, // Keep highest
        lastActiveDate: today,
      });
    }
  },

  addXP: (amount: number) => {
    const state = get();
    const today = new Date().toISOString().split('T')[0];

    // Reset daily XP if new day
    if (state.lastXpResetDate !== today) {
      get().resetDailyXP();
    }

    // Check daily limit
    const remainingXP = DAILY_XP_LIMIT - state.dailyXpCap;
    const actualXPToAdd = Math.min(amount, remainingXP);

    if (actualXPToAdd > 0) {
      set({
        xp: state.xp + actualXPToAdd,
        dailyXpCap: state.dailyXpCap + actualXPToAdd,
      });
    }

    return actualXPToAdd;
  },

  resetDailyXP: () => {
    const today = new Date().toISOString().split('T')[0];
    set({
      dailyXpCap: 0,
      lastXpResetDate: today,
    });
  },

  getQuestionProgress: (questionId: QuestionId) => {
    const state = get();
    return state.completedQuestions[questionId] || null;
  },

  getLessonStars: (lessonId: LessonId) => {
    const state = get();
    return state.lessonStars[lessonId] || 0;
  },

  getTotalCorrectAnswers: () => {
    const state = get();
    return Object.values(state.completedQuestions).filter(q => q.correct).length;
  },

  getTodayXP: () => {
    try {
      const state = get();
      if (!state) return 0;

      const today = new Date().toISOString().split('T')[0];

      if (state.lastXpResetDate === today) {
        return state.dailyXpCap || 0;
      }
      return 0;
    } catch (error) {
      console.warn('Error getting today XP:', error);
      return 0;
    }
  },

  completeCodePractice: (practice: CodePractice, userCode: string, isCorrect: boolean) => {
    const completedPractice = get().completedCodePractices.find(p => p.id === practice.id);

    if (completedPractice) {
      return { success: false, reason: 'already_completed', xpEarned: 0, totalXP: get().xp };
    }

    // Only give XP for correct solutions
    let xpReward = 0;

    if (isCorrect) {
      // Use points from CodePractice (like quiz questions)
      xpReward = practice.points;

      // Bonus XP for first-time completion
      xpReward += 25;
    }
    // No XP for incorrect attempts

    // Add to completed practices and update XP
    set(state => {
      const today = new Date().toISOString().split('T')[0];

      // Reset daily XP if new day
      let newDailyXpCap = state.dailyXpCap;
      if (state.lastXpResetDate !== today) {
        newDailyXpCap = 0;
      }

      const newState = {
        completedCodePractices: [
          ...state.completedCodePractices,
          {
            id: practice.id,
            completedAt: Date.now(),
            userCode,
            isCorrect,
            xpEarned: xpReward,
          },
        ],
        // Add XP to total (no daily limit)
        xp: state.xp + xpReward,
        // Update daily XP cap for today's tracking
        dailyXpCap: newDailyXpCap + xpReward,
        // Update last reset date if it's a new day
        lastXpResetDate: today,
      };
      return newState;
    });

    // Update streak if practice was completed correctly
    if (isCorrect) {
      get().updateStreak();
    }

    if (xpReward > 0) {
      return { success: true, xpEarned: xpReward, totalXP: get().xp };
    } else {
      return { success: false, reason: 'incorrect_solution', xpEarned: 0, totalXP: get().xp };
    }
  },

  // Persistence methods
  loadFromStorage: async () => {
    try {
      const savedProgress = await progressStorage.get();
      if (savedProgress) {
        set({
          completedQuestions: savedProgress.completedQuestions || {},
          lessonStars: savedProgress.lessonStars || {},
          xp: savedProgress.xp || 0,
          currentStreakDays: savedProgress.currentStreakDays || 0,
          highestStreakDays: savedProgress.highestStreakDays || 0,
          lastActiveDate: savedProgress.lastActiveDate || '',
          dailyXpCap: savedProgress.dailyXpCap || 0,
          lastXpResetDate: savedProgress.lastXpResetDate || '',
          completedCodePractices: savedProgress.completedCodePractices || [],
        });
        console.log('Progress loaded from storage');
      }
    } catch (error) {
      console.warn('Failed to load progress from storage:', error);
    }
  },

  saveToStorage: async () => {
    try {
      const state = get();
      const progressData: UserProgress = {
        completedQuestions: state.completedQuestions,
        lessonStars: state.lessonStars,
        completedCodePractices: state.completedCodePractices,
        xp: state.xp,
        currentStreakDays: state.currentStreakDays,
        highestStreakDays: state.highestStreakDays,
        lastActiveDate: state.lastActiveDate,
        dailyXpCap: state.dailyXpCap,
        lastXpResetDate: state.lastXpResetDate,
      };

      await progressStorage.set(progressData);
      console.log('Progress saved to storage');
    } catch (error) {
      console.warn('Failed to save progress to storage:', error);
    }
  },

  clearStorage: async () => {
    try {
      await progressStorage.clear();
      set({
        completedQuestions: {},
        lessonStars: {},
        xp: 0,
        currentStreakDays: 0,
        highestStreakDays: 0,
        lastActiveDate: '',
        dailyXpCap: 0,
        lastXpResetDate: '',
        completedCodePractices: [],
      });
      console.log('Progress cleared from storage');
    } catch (error) {
      console.warn('Failed to clear progress from storage:', error);
    }
  },
}));
