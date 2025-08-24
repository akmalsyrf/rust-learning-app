import { Lesson, Topic } from '../types';

type GetNextLessonProps = {
  allTopics: Topic[];
  getLessonsForTopic: (topicId: string) => Lesson[];
  getLessonStars: (lessonId: string) => number;
};

export const getNextLesson = ({
  allTopics,
  getLessonsForTopic,
  getLessonStars,
}: GetNextLessonProps) => {
  for (const topic of allTopics) {
    const lessons = getLessonsForTopic(topic.id);
    for (const lesson of lessons) {
      if (getLessonStars(lesson.id) === 0) {
        return lesson;
      }
    }
  }
  return null; // All lessons completed
};
