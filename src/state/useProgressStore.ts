import { create } from 'zustand';
import { UserProgress, QuestionResult, LessonResult, QuestionId, LessonId } from '../types';

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
}

const DAILY_XP_LIMIT = 100;
const XP_PER_CORRECT = 10;
const XP_PERFECT_LESSON_BONUS = 10;

export const useProgressStore = create<ProgressState>()((set, get) => ({
      // Initial state
      completedQuestions: {},
      lessonStars: {},
      xp: 0,
      currentStreakDays: 0,
      lastActiveDate: '',
      dailyXpCap: 0,
      lastXpResetDate: '',

      // Actions
      completeQuestion: (result: QuestionResult) => {
        set((state) => ({
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

        set((state) => ({
          lessonStars: {
            ...state.lessonStars,
            [lessonId]: Math.max(state.lessonStars[lessonId] || 0, stars),
          },
        }));

        // Add bonus XP for perfect lesson
        if (perfectScore) {
          get().addXP(XP_PERFECT_LESSON_BONUS);
        }

        // Update streak
        get().updateStreak();
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
          set({
            currentStreakDays: state.currentStreakDays + 1,
            lastActiveDate: today,
          });
        } else if (state.lastActiveDate === '') {
          // First time - start streak
          set({
            currentStreakDays: 1,
            lastActiveDate: today,
          });
        } else {
          // Streak broken - reset
          set({
            currentStreakDays: 1,
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
    }));
