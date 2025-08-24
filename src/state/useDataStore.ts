import { create } from 'zustand';
import { Topic, Lesson, Question, TopicId, LessonId, QuestionId, CodePractice } from '../types';

interface DataState {
  topics: Topic[];
  lessons: Record<LessonId, Lesson>;
  questions: Record<QuestionId, Question>;
  codePractices: CodePractice[];

  // Computed getters
  getTopics: () => Topic[];
  getTopic: (topicId: TopicId) => Topic | undefined;
  getLesson: (lessonId: LessonId) => Lesson | undefined;
  getQuestion: (questionId: QuestionId) => Question | undefined;
  getLessonsForTopic: (topicId: TopicId) => Lesson[];
  getQuestionsForLesson: (lessonId: LessonId) => Question[];
  getCodePractices: () => CodePractice[];
  getCodePractice: (id: string) => CodePractice | undefined;
  getCodePracticesForLesson: (lessonId: LessonId) => CodePractice[];
  getCodePracticesForTopic: (topicId: TopicId) => CodePractice[];

  // Actions
  loadData: (data: {
    topics: Topic[];
    lessons: Lesson[];
    questions: Question[];
    codePractices: CodePractice[];
  }) => void;
}

export const useDataStore = create<DataState>((set, get) => ({
  topics: [],
  lessons: {},
  questions: {},
  codePractices: [],

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

  getCodePractices: () => {
    return get().codePractices;
  },

  getCodePractice: (id: string) => {
    return get().codePractices.find(practice => practice.id === id);
  },

  getCodePracticesForLesson: (lessonId: LessonId) => {
    return get().codePractices.filter(practice => practice.lessonId === lessonId);
  },

  getCodePracticesForTopic: (topicId: TopicId) => {
    return get().codePractices.filter(practice => practice.topicId === topicId);
  },

  loadData: data => {
    const lessonsMap: Record<LessonId, Lesson> = {};
    const questionsMap: Record<QuestionId, Question> = {};

    if (data.lessons && Array.isArray(data.lessons)) {
      data.lessons.forEach(lesson => {
        lessonsMap[lesson.id] = lesson;
      });
    }

    if (data.questions && Array.isArray(data.questions)) {
      data.questions.forEach(question => {
        questionsMap[question.id] = question;
      });
    }

    set({
      topics: data.topics || [],
      lessons: lessonsMap,
      questions: questionsMap,
      codePractices: data.codePractices || [],
    });
  },
}));
