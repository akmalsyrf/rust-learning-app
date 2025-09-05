export type TopicId = string;
export type LessonId = string;
export type QuestionId = string;

export interface QuestionBase {
  id: QuestionId;
  prompt: {
    en: string;
    id: string;
  };
  explanation?: {
    en: string;
    id: string;
  }; // shown after answer
  topicId: TopicId;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'mcq';
  choices: {
    en: string;
    id: string;
  }[];
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
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  order: number;
  lessons: LessonId[];
  requiredSkills: {
    en: string;
    id: string;
  };
}

export interface Lesson {
  id: LessonId;
  title: {
    en: string;
    id: string;
  };
  topicId: TopicId;
  summary: {
    en: string;
    id: string;
  };
  questions: QuestionId[];
  attributionUrl: string; // link to the source section used
  order: number;
}

export interface CodePractice {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  initialCode: string;
  expectedOutput?: string;
  solution: string;
  hints: {
    en: string;
    id: string;
  }[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  lessonId: string;
  topicId: string;
  points: number; // XP points for completing this practice
}

export interface CompletedCodePractice {
  id: string;
  completedAt: number;
  userCode: string;
  isCorrect: boolean;
  xpEarned: number;
}

export interface UserProgress {
  completedQuestions: Record<QuestionId, { correct: boolean; timestamp: number }>;
  lessonStars: Record<LessonId, 0 | 1 | 2 | 3>;
  completedCodePractices: CompletedCodePractice[];
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
  points: number; // XP points for this question
}

export interface LessonResult {
  lessonId: LessonId;
  questionResults: QuestionResult[];
  completedAt: number; // timestamp
  xpEarned: number;
  perfectScore: boolean;
}

// AI Quiz Types
export interface AIQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index dari jawaban yang benar
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  codeExample?: string;
}

export interface AIQuizResponse {
  questions: AIQuizQuestion[];
  totalQuestions: number;
  difficulty: string;
  topic: string;
}

export interface AIQuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeSpent: number; // dalam detik
  feedback: string;
  recommendations: string[];
}

export interface AIQuizSession {
  id: string;
  questions: AIQuizQuestion[];
  userAnswers: (number | null)[];
  currentQuestionIndex: number;
  startTime: number;
  endTime?: number;
  isCompleted: boolean;
  result?: AIQuizResult;
}
