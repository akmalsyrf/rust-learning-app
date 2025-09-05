import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG, getGeminiApiKey } from '../config/gemini';

// Interface untuk AI Quiz Question
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

// Interface untuk AI Quiz Response
export interface AIQuizResponse {
  questions: AIQuizQuestion[];
  totalQuestions: number;
  difficulty: string;
  topic: string;
}

// Interface untuk AI Quiz Result
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

class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;
  private apiKey: string | null = null;

  constructor() {
    // API key akan di-set dari environment atau settings
    this.initializeAPI();
  }

  private initializeAPI() {
    this.apiKey = getGeminiApiKey();

    if (this.apiKey) {
      this.genAI = new GoogleGenerativeAI(this.apiKey);
    }
  }

  setAPIKey(apiKey: string) {
    this.apiKey = apiKey;
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  private getModel() {
    if (!this.genAI) {
      throw new Error('Gemini AI not initialized. Please set API key first.');
    }
    return this.genAI.getGenerativeModel({ model: GEMINI_CONFIG.MODEL });
  }

  async generateAdvancedRustQuiz(
    topic?: string,
    questionCount: number = 5,
    language: 'en' | 'id' = 'en'
  ): Promise<AIQuizResponse> {
    try {
      const model = this.getModel();

      const languageInstruction =
        language === 'id'
          ? 'Generate all questions, options, explanations, and topics in Indonesian (Bahasa Indonesia).'
          : 'Generate all questions, options, explanations, and topics in English.';

      const prompt = `
        Generate ${questionCount} advanced Rust programming questions in JSON format.
        ${languageInstruction}
        ${topic ? `Focus on the topic: ${topic}` : 'Cover various advanced Rust topics like ownership, lifetimes, async/await, macros, unsafe code, etc.'}
        
        Each question should be challenging and test deep understanding of Rust concepts.
        Include code examples where appropriate.
        
        Return the response in this exact JSON format:
        {
          "questions": [
            {
              "id": "unique_id",
              "question": "Question text here in ${language === 'id' ? 'Indonesian' : 'English'}",
              "options": ["Option A in ${language === 'id' ? 'Indonesian' : 'English'}", "Option B in ${language === 'id' ? 'Indonesian' : 'English'}", "Option C in ${language === 'id' ? 'Indonesian' : 'English'}", "Option D in ${language === 'id' ? 'Indonesian' : 'English'}"],
              "correctAnswer": 0,
              "explanation": "Detailed explanation in ${language === 'id' ? 'Indonesian' : 'English'} of why this answer is correct",
              "difficulty": "advanced",
              "topic": "specific topic in ${language === 'id' ? 'Indonesian' : 'English'}",
              "codeExample": "optional code example if relevant"
            }
          ],
          "totalQuestions": ${questionCount},
          "difficulty": "advanced",
          "topic": "${topic || (language === 'id' ? 'Konsep Rust Lanjutan' : 'Advanced Rust Concepts')}"
        }
        
        Make sure the questions are:
        1. Advanced level (not basic)
        2. Test real understanding, not just memorization
        3. Include practical scenarios
        4. Have clear, unambiguous correct answers
        5. Include detailed explanations
        6. Cover different advanced Rust topics
        7. All text content should be in ${language === 'id' ? 'Indonesian' : 'English'}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Parse JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Invalid JSON response from AI');
      }

      const quizData = JSON.parse(jsonMatch[0]);
      return quizData as AIQuizResponse;
    } catch (error) {
      console.error('Error generating AI quiz:', error);
      throw new Error('Failed to generate AI quiz. Please try again.');
    }
  }

  async generateQuizFeedback(
    questions: AIQuizQuestion[],
    userAnswers: number[],
    timeSpent: number,
    language: 'en' | 'id' = 'en'
  ): Promise<AIQuizResult> {
    try {
      const model = this.getModel();

      // Calculate basic stats
      let correctAnswers = 0;
      const wrongAnswers: number[] = [];

      userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          correctAnswers++;
        } else {
          wrongAnswers.push(index);
        }
      });

      const score = correctAnswers;
      const totalQuestions = questions.length;
      const percentage = Math.round((correctAnswers / totalQuestions) * 100);

      // Generate AI feedback
      const languageInstruction =
        language === 'id'
          ? 'Provide all feedback and recommendations in Indonesian (Bahasa Indonesia).'
          : 'Provide all feedback and recommendations in English.';

      const prompt = `
        Provide detailed feedback for a Rust programming quiz.
        ${languageInstruction}
        
        Quiz Results:
        - Score: ${score}/${totalQuestions} (${percentage}%)
        - Time spent: ${Math.round(timeSpent / 60)} minutes
        - Wrong answers: ${wrongAnswers.length}
        
        Questions and user answers:
        ${questions
          .map(
            (q, index) => `
          Q${index + 1}: ${q.question}
          User Answer: ${userAnswers[index] !== undefined ? q.options[userAnswers[index]] : 'Not answered'}
          Correct Answer: ${q.options[q.correctAnswer]}
          Explanation: ${q.explanation}
        `
          )
          .join('\n')}
        
        Provide feedback in this JSON format:
        {
          "feedback": "Overall feedback about performance in ${language === 'id' ? 'Indonesian' : 'English'}",
          "recommendations": [
            "Specific recommendation 1 in ${language === 'id' ? 'Indonesian' : 'English'}",
            "Specific recommendation 2 in ${language === 'id' ? 'Indonesian' : 'English'}",
            "Specific recommendation 3 in ${language === 'id' ? 'Indonesian' : 'English'}"
          ]
        }
        
        Make the feedback:
        1. Constructive and encouraging
        2. Specific to Rust programming
        3. Include actionable recommendations
        4. Mention specific topics to study more
        5. Acknowledge strengths and areas for improvement
        6. All text should be in ${language === 'id' ? 'Indonesian' : 'English'}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Parse JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Invalid JSON response from AI');
      }

      const feedbackData = JSON.parse(jsonMatch[0]);

      return {
        score,
        totalQuestions,
        percentage,
        correctAnswers,
        wrongAnswers: wrongAnswers.length,
        timeSpent,
        feedback: feedbackData.feedback,
        recommendations: feedbackData.recommendations,
      };
    } catch (error) {
      console.error('Error generating quiz feedback:', error);

      // Fallback feedback if AI fails
      const correctAnswers = userAnswers.filter(
        (answer, index) => answer === questions[index].correctAnswer
      ).length;

      const fallbackFeedback =
        language === 'id'
          ? 'Kerja bagus menyelesaikan kuis! Terus berlatih untuk meningkatkan skill Rust Anda.'
          : 'Great job completing the quiz! Keep practicing to improve your Rust skills.';

      const fallbackRecommendations =
        language === 'id'
          ? [
              'Ulas pertanyaan yang salah',
              'Berlatih lebih banyak dengan topik yang menantang',
              'Coba latihan Rust yang lebih advanced',
            ]
          : [
              'Review the questions you got wrong',
              'Practice more with the topics you found challenging',
              'Try more advanced Rust exercises',
            ];

      return {
        score: correctAnswers,
        totalQuestions: questions.length,
        percentage: Math.round((correctAnswers / questions.length) * 100),
        correctAnswers,
        wrongAnswers: questions.length - correctAnswers,
        timeSpent,
        feedback: fallbackFeedback,
        recommendations: fallbackRecommendations,
      };
    }
  }

  async generateCustomQuestion(
    topic: string,
    difficulty: 'beginner' | 'intermediate' | 'advanced' = 'advanced',
    language: 'en' | 'id' = 'en'
  ): Promise<AIQuizQuestion> {
    try {
      const model = this.getModel();

      const languageInstruction =
        language === 'id'
          ? 'Generate the question, options, explanation, and topic in Indonesian (Bahasa Indonesia).'
          : 'Generate the question, options, explanation, and topic in English.';

      const prompt = `
        Generate a single ${difficulty} Rust programming question about ${topic}.
        ${languageInstruction}
        
        Return the response in this exact JSON format:
        {
          "id": "unique_id_${Date.now()}",
          "question": "Question text here in ${language === 'id' ? 'Indonesian' : 'English'}",
          "options": ["Option A in ${language === 'id' ? 'Indonesian' : 'English'}", "Option B in ${language === 'id' ? 'Indonesian' : 'English'}", "Option C in ${language === 'id' ? 'Indonesian' : 'English'}", "Option D in ${language === 'id' ? 'Indonesian' : 'English'}"],
          "correctAnswer": 0,
          "explanation": "Detailed explanation in ${language === 'id' ? 'Indonesian' : 'English'} of why this answer is correct",
          "difficulty": "${difficulty}",
          "topic": "${topic} in ${language === 'id' ? 'Indonesian' : 'English'}",
          "codeExample": "optional code example if relevant"
        }
        
        Make sure the question is:
        1. ${difficulty} level
        2. Focused on ${topic}
        3. Has a clear correct answer
        4. Includes practical scenarios
        5. Has detailed explanation
        6. All text content should be in ${language === 'id' ? 'Indonesian' : 'English'}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Parse JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Invalid JSON response from AI');
      }

      const questionData = JSON.parse(jsonMatch[0]);
      return questionData as AIQuizQuestion;
    } catch (error) {
      console.error('Error generating custom question:', error);
      throw new Error('Failed to generate custom question. Please try again.');
    }
  }

  isInitialized(): boolean {
    return this.genAI !== null && this.apiKey !== null;
  }
}

// Export singleton instance
export const geminiService = new GeminiService();
