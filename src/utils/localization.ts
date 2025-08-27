/**
 * Utility functions for handling multi-language content
 */

export type Language = 'en' | 'id';

export interface LocalizedText {
  en: string;
  id: string;
}

/**
 * Get localized text based on current language
 */
export const getLocalizedText = (localizedText: LocalizedText, language: Language): string => {
  return localizedText[language] || localizedText.en || '';
};

/**
 * Get localized title for a topic
 */
export const getTopicTitle = (topic: { title: LocalizedText }, language: Language): string => {
  return getLocalizedText(topic.title, language);
};

/**
 * Get localized description for a topic
 */
export const getTopicDescription = (
  topic: { description: LocalizedText },
  language: Language
): string => {
  return getLocalizedText(topic.description, language);
};

/**
 * Get localized title for a lesson
 */
export const getLessonTitle = (lesson: { title: LocalizedText }, language: Language): string => {
  return getLocalizedText(lesson.title, language);
};

/**
 * Get localized summary for a lesson
 */
export const getLessonSummary = (
  lesson: { summary: LocalizedText },
  language: Language
): string => {
  return getLocalizedText(lesson.summary, language);
};

/**
 * Get localized title for a code practice
 */
export const getCodePracticeTitle = (
  practice: { title: LocalizedText },
  language: Language
): string => {
  return getLocalizedText(practice.title, language);
};

/**
 * Get localized description for a code practice
 */
export const getCodePracticeDescription = (
  practice: { description: LocalizedText },
  language: Language
): string => {
  return getLocalizedText(practice.description, language);
};

/**
 * Get localized hints for a code practice
 */
export const getCodePracticeHints = (
  practice: { hints: LocalizedText[] },
  language: Language
): string[] => {
  return practice.hints.map(hint => getLocalizedText(hint, language));
};

/**
 * Get localized prompt for a question
 */
export const getQuestionPrompt = (
  question: { prompt: LocalizedText },
  language: Language
): string => {
  return getLocalizedText(question.prompt, language);
};

/**
 * Get localized explanation for a question
 */
export const getQuestionExplanation = (
  question: { explanation?: LocalizedText },
  language: Language
): string => {
  return question.explanation ? getLocalizedText(question.explanation, language) : '';
};

/**
 * Get localized choices for multiple choice questions
 */
export const getQuestionChoices = (
  question: { choices: LocalizedText[] },
  language: Language
): string[] => {
  return question.choices.map(choice => getLocalizedText(choice, language));
};

/**
 * Get localized text with fallback
 */
export const getLocalizedTextWithFallback = (
  localizedText: LocalizedText | undefined,
  language: Language,
  fallback: string = ''
): string => {
  if (!localizedText) return fallback;
  return getLocalizedText(localizedText, language);
};
