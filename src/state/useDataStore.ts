import { create } from 'zustand';
import { Topic, Lesson, Question, TopicId, LessonId, QuestionId } from '../types';

interface DataState {
  topics: Topic[];
  lessons: Record<LessonId, Lesson>;
  questions: Record<QuestionId, Question>;

  // Computed getters
  getTopics: () => Topic[];
  getTopic: (topicId: TopicId) => Topic | undefined;
  getLesson: (lessonId: LessonId) => Lesson | undefined;
  getQuestion: (questionId: QuestionId) => Question | undefined;
  getLessonsForTopic: (topicId: TopicId) => Lesson[];
  getQuestionsForLesson: (lessonId: LessonId) => Question[];

  // Actions
  loadData: (data: { topics: Topic[]; lessons: Lesson[]; questions: Question[] }) => void;
}

export const useDataStore = create<DataState>((set, get) => ({
  topics: [],
  lessons: {},
  questions: {},

  getTopics: () => {
    return get().topics.sort((a, b) => a.order - b.order);
  },

  getTopic: (topicId: TopicId) => {
    return get().topics.find(topic => topic.id === topicId);
  },

  getLesson: (lessonId: LessonId) => {
    return get().lessons[lessonId];
  },

  getQuestion: (questionId: QuestionId) => {
    return get().questions[questionId];
  },

  getLessonsForTopic: (topicId: TopicId) => {
    const topic = get().getTopic(topicId);
    if (!topic) return [];

    return topic.lessons
      .map(lessonId => get().lessons[lessonId])
      .filter(Boolean)
      .sort((a, b) => a.order - b.order);
  },

  getQuestionsForLesson: (lessonId: LessonId) => {
    const lesson = get().getLesson(lessonId);
    if (!lesson) return [];

    return lesson.questions.map(questionId => get().questions[questionId]).filter(Boolean);
  },

  loadData: data => {
    const lessonsMap: Record<LessonId, Lesson> = {};
    const questionsMap: Record<QuestionId, Question> = {};

    data.lessons.forEach(lesson => {
      lessonsMap[lesson.id] = lesson;
    });

    data.questions.forEach(question => {
      questionsMap[question.id] = question;
    });

    set({
      topics: data.topics,
      lessons: lessonsMap,
      questions: questionsMap,
    });
  },
}));
