import {
  DatabaseTopic,
  DatabaseLesson,
  DatabaseQuestion,
  DatabaseCodePractice,
  Topic,
  Lesson,
  Question,
  CodePractice,
} from '../types/database';

/**
 * Convert database topic to app topic
 */
export const convertDatabaseTopicToTopic = (dbTopic: DatabaseTopic): Topic => {
  return {
    id: dbTopic.id,
    title: dbTopic.title,
    description: dbTopic.description,
    icon: dbTopic.icon,
    color: dbTopic.color,
    order: dbTopic.order_index,
    lessons: [], // This will be populated separately
  };
};

/**
 * Convert database lesson to app lesson
 */
export const convertDatabaseLessonToLesson = (dbLesson: DatabaseLesson): Lesson => {
  return {
    id: dbLesson.id,
    title: dbLesson.title,
    topicId: dbLesson.topic_id,
    summary: dbLesson.content || '',
    questions: [], // This will be populated separately
    attributionUrl: '', // Not stored in database, will need to be added
    order: dbLesson.order_index,
    difficulty: dbLesson.difficulty,
    estimated_time: dbLesson.estimated_time,
  };
};

/**
 * Convert database question to app question
 */
export const convertDatabaseQuestionToQuestion = (dbQuestion: DatabaseQuestion): Question => {
  return {
    id: dbQuestion.id,
    lessonId: dbQuestion.lesson_id,
    prompt: dbQuestion.question,
    topicId: '', // Not stored in database, will need to be added
    explanation: dbQuestion.explanation,
    difficulty: dbQuestion.difficulty,
    points: dbQuestion.points,
    order: dbQuestion.order_index,
    type: dbQuestion.type,
    question: dbQuestion.question,
    correct_answer: dbQuestion.correct_answer,
  };
};

/**
 * Convert database code practice to app code practice
 */
export const convertDatabaseCodePracticeToCodePractice = (
  dbPractice: DatabaseCodePractice
): CodePractice => {
  return {
    id: dbPractice.id,
    lessonId: dbPractice.lesson_id,
    title: dbPractice.title,
    description: dbPractice.description,
    initial_code: dbPractice.initial_code,
    expected_output: dbPractice.expected_output,
    solution: '', // Not stored in database, will need to be added
    hints: dbPractice.hints ? JSON.parse(dbPractice.hints) : [],
    difficulty: dbPractice.difficulty,
    category: '', // Not stored in database, will need to be added
    topicId: '', // Not stored in database, will need to be added
    points: dbPractice.points,
    order: dbPractice.order_index,
  };
};

/**
 * Convert app topic to database topic
 */
export const convertTopicToDatabaseTopic = (
  topic: Topic
): Omit<DatabaseTopic, 'created_at' | 'updated_at'> => {
  return {
    id: topic.id,
    title: topic.title,
    description: topic.description,
    icon: topic.icon,
    color: topic.color,
    order_index: topic.order,
  };
};

/**
 * Convert app lesson to database lesson
 */
export const convertLessonToDatabaseLesson = (
  lesson: Lesson
): Omit<DatabaseLesson, 'created_at' | 'updated_at'> => {
  return {
    id: lesson.id,
    topic_id: lesson.topicId,
    title: lesson.title,
    content: lesson.summary,
    order_index: lesson.order,
    difficulty: lesson.difficulty || 'beginner',
    estimated_time: lesson.estimated_time || 10,
  };
};

/**
 * Convert app question to database question
 */
export const convertQuestionToDatabaseQuestion = (
  question: Question
): Omit<DatabaseQuestion, 'created_at' | 'updated_at'> => {
  return {
    id: question.id,
    lesson_id: question.lessonId,
    question: question.prompt,
    type: question.type || 'mcq', // Default value, will need to be determined from question type
    options: undefined, // Will need to be populated based on question type
    correct_answer: question.correct_answer || '', // Will need to be populated based on question type
    explanation: question.explanation,
    points: question.points,
    difficulty: question.difficulty,
    order_index: question.order,
  };
};

/**
 * Convert app code practice to database code practice
 */
export const convertCodePracticeToDatabaseCodePractice = (
  practice: CodePractice
): Omit<DatabaseCodePractice, 'created_at' | 'updated_at'> => {
  return {
    id: practice.id,
    lesson_id: practice.lessonId,
    title: practice.title,
    description: practice.description,
    initial_code: practice.initial_code,
    expected_output: practice.expected_output,
    hints: practice.hints ? JSON.stringify(practice.hints) : undefined,
    points: practice.points,
    difficulty: practice.difficulty,
    order_index: practice.order,
  };
};
