/**
 * Database-specific types that match the SQLite schema
 */

export interface DatabaseTopic {
  id: string;
  title: string;
  description: string;
  icon?: string;
  color?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface DatabaseLesson {
  id: string;
  topic_id: string;
  title: string;
  content?: string;
  order_index: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimated_time: number;
  created_at: string;
  updated_at: string;
}

export interface DatabaseQuestion {
  id: string;
  lesson_id: string;
  question: string;
  type: string;
  options?: string; // JSON string for multiple choice
  correct_answer: string;
  explanation?: string;
  points: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface DatabaseCodePractice {
  id: string;
  lesson_id: string;
  title: string;
  description: string;
  initial_code: string;
  expected_output?: string;
  hints?: string; // JSON string for multiple hints
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface DatabaseUserProgress {
  id: number;
  lesson_id: string;
  completed: boolean;
  stars: number;
  best_score: number;
  attempts: number;
  last_attempt?: string;
  created_at: string;
  updated_at: string;
}

export interface DatabaseQuizResult {
  id: number;
  lesson_id: string;
  score: number;
  total_questions: number;
  time_taken: number;
  xp_earned: number;
  is_perfect: boolean;
  completed_at: string;
}

/**
 * Mapped types for converting between database and app types
 */
export interface Topic extends Omit<DatabaseTopic, 'order_index' | 'created_at' | 'updated_at'> {
  order: number;
  lessons: string[];
}

export interface Lesson
  extends Omit<DatabaseLesson, 'topic_id' | 'order_index' | 'created_at' | 'updated_at'> {
  topicId: string;
  summary: string;
  questions: string[];
  attributionUrl: string;
  order: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimated_time: number;
}

export interface Question
  extends Omit<DatabaseQuestion, 'lesson_id' | 'order_index' | 'created_at' | 'updated_at'> {
  lessonId: string;
  prompt: string;
  topicId: string;
  order: number;
}

export interface CodePractice
  extends Omit<DatabaseCodePractice, 'lesson_id' | 'order_index' | 'created_at' | 'updated_at'> {
  lessonId: string;
  solution: string;
  category: string;
  topicId: string;
  order: number;
}
