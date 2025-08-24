export type TopicId = string;
export type LessonId = string;
export type QuestionId = string;

export interface QuestionBase {
  id: QuestionId;
  prompt: string;
  explanation?: string; // shown after answer
  topicId: TopicId;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'mcq';
  choices: string[];
  correctIndex: number;
}

export interface TrueFalseQuestion extends QuestionBase {
  type: 'tf';
  answer: boolean;
}

export interface FillInBlankQuestion extends QuestionBase {
  type: 'fib';
  acceptableAnswers: string[]; // normalized
}

export interface CodeOutputPrediction extends QuestionBase {
  type: 'predict_output';
  code: string;
  expectedStdout: string; // normalized; small snippets only
}

export interface CodeFixQuestion extends QuestionBase {
  type: 'code_fix';
  code: string;
  choices: string[]; // fixes
  correctIndex: number;
}

export interface CodeWritingQuestion extends QuestionBase {
  type: 'code_write';
  scaffold: string; // function/signature/comments
  validators: {
    mustInclude?: string[]; // tokens
    mustNotInclude?: string[];
    testCases?: { input: string; expected: string }[]; // pure, deterministic
  };
}

export type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillInBlankQuestion
  | CodeOutputPrediction
  | CodeFixQuestion
  | CodeWritingQuestion;

export interface Topic {
  id: TopicId;
  title: string;
  description: string;
  order: number;
  lessons: LessonId[];
}

export interface Lesson {
  id: LessonId;
  title: string;
  topicId: TopicId;
  summary: string;
  questions: QuestionId[];
  attributionUrl: string; // link to the source section used
  order: number;
}

export interface UserProgress {
  completedQuestions: Record<QuestionId, { correct: boolean; timestamp: number }>;
  lessonStars: Record<LessonId, 0 | 1 | 2 | 3>;
  xp: number;
  currentStreakDays: number;
  highestStreakDays: number;
  lastActiveDate: string; // yyyy-mm-dd
  dailyXpCap: number; // track daily XP to prevent farming
  lastXpResetDate: string; // yyyy-mm-dd
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  notificationsEnabled: boolean;
  notificationTime: string; // HH:mm format
  soundEnabled: boolean;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  xpThisWeek: number;
}

export interface QuestionResult {
  questionId: QuestionId;
  correct: boolean;
  userAnswer: string | number | boolean;
  timeSpent: number; // milliseconds
}

export interface LessonResult {
  lessonId: LessonId;
  questionResults: QuestionResult[];
  completedAt: number; // timestamp
  xpEarned: number;
  perfectScore: boolean;
}
