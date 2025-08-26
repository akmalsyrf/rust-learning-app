import { waitForDatabase } from './database';
import { Topic, Lesson, Question, CodePractice } from '../types/database';

/**
 * Data Access Layer for database operations
 */
export class DataAccessService {
  // ===== TOPICS =====

  /**
   * Get all topics
   */
  async getTopics(): Promise<Topic[]> {
    try {
      console.log('🔍 DataAccess: Getting topics...');
      const db = await waitForDatabase();
      console.log('🔍 DataAccess: Database ready, executing query...');

      const sql = 'SELECT * FROM topics ORDER BY order_index ASC';
      console.log('🔍 DataAccess: SQL Query:', sql);

      const result = await db.getAllAsync<Topic>(sql);

      console.log('🔍 DataAccess: Raw database result:', result);
      console.log('🔍 DataAccess: Result length:', result?.length || 0);
      console.log('🔍 DataAccess: Result type:', typeof result);
      console.log('🔍 DataAccess: Is array:', Array.isArray(result));

      if (result && result.length > 0) {
        console.log('🔍 DataAccess: First topic sample:', JSON.stringify(result[0], null, 2));
        console.log('🔍 DataAccess: First topic keys:', Object.keys(result[0]));
      } else {
        console.log('🔍 DataAccess: No topics found in result');
      }

      return result || [];
    } catch (error) {
      console.error('❌ DataAccess: Failed to get topics:', error);
      return [];
    }
  }

  /**
   * Get topic by ID
   */
  async getTopicById(id: string): Promise<Topic | null> {
    try {
      console.log('🔍 DataAccess: Getting topic by ID:', id);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM topics WHERE id = ?';
      const params = [id];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getFirstAsync<Topic>(sql, params);

      console.log('🔍 DataAccess: Topic result:', result);
      if (result) {
        console.log('🔍 DataAccess: Topic keys:', Object.keys(result));
      }

      return result || null;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get topic by ID:', error);
      return null;
    }
  }

  // ===== LESSONS =====

  /**
   * Get lessons for a specific topic
   */
  async getLessonsForTopic(topicId: string): Promise<Lesson[]> {
    try {
      console.log('🔍 DataAccess: Getting lessons for topic:', topicId);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM lessons WHERE topic_id = ? ORDER BY order_index ASC';
      const params = [topicId];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync<Lesson>(sql, params);

      console.log('🔍 DataAccess: Lessons result:', result);
      console.log('🔍 DataAccess: Lessons count:', result?.length || 0);
      console.log('🔍 DataAccess: Is array:', Array.isArray(result));

      if (result && result.length > 0) {
        console.log('🔍 DataAccess: First lesson sample:', JSON.stringify(result[0], null, 2));
        console.log('🔍 DataAccess: First lesson keys:', Object.keys(result[0]));
      } else {
        console.log('🔍 DataAccess: No lessons found for topic:', topicId);
      }

      return result || [];
    } catch (error) {
      console.error('❌ DataAccess: Failed to get lessons for topic:', error);
      return [];
    }
  }

  /**
   * Get lesson by ID
   */
  async getLessonById(id: string): Promise<Lesson | null> {
    try {
      console.log('🔍 DataAccess: Getting lesson by ID:', id);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM lessons WHERE id = ?';
      const params = [id];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getFirstAsync<Lesson>(sql, params);

      console.log('🔍 DataAccess: Lesson result:', result);
      if (result) {
        console.log('🔍 DataAccess: Lesson keys:', Object.keys(result));
      }

      return result || null;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get lesson by ID:', error);
      return null;
    }
  }

  /**
   * Get all lessons
   */
  async getAllLessons(): Promise<Lesson[]> {
    try {
      console.log('🔍 DataAccess: Getting all lessons...');
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM lessons ORDER BY order_index ASC';
      console.log('🔍 DataAccess: SQL Query:', sql);

      const result = await db.getAllAsync<Lesson>(sql);

      console.log('🔍 DataAccess: All lessons result:', result);
      console.log('🔍 DataAccess: All lessons count:', result?.length || 0);

      if (result && result.length > 0) {
        console.log('🔍 DataAccess: First lesson sample:', JSON.stringify(result[0], null, 2));
      }

      return result || [];
    } catch (error) {
      console.error('❌ DataAccess: Failed to get all lessons:', error);
      return [];
    }
  }

  // ===== QUESTIONS =====

  /**
   * Get questions for a specific lesson
   */
  async getQuestionsForLesson(lessonId: string): Promise<Question[]> {
    try {
      console.log('🔍 DataAccess: Getting questions for lesson:', lessonId);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM questions WHERE lesson_id = ? ORDER BY order_index ASC';
      const params = [lessonId];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync<Question>(sql, params);

      console.log('🔍 DataAccess: Questions result:', result);
      console.log('🔍 DataAccess: Questions count:', result?.length || 0);

      if (result && result.length > 0) {
        console.log('🔍 DataAccess: First question sample:', JSON.stringify(result[0], null, 2));
        console.log('🔍 DataAccess: First question keys:', Object.keys(result[0]));
      }

      // Parse options JSON for multiple choice questions
      const parsedResult = (result || []).map(question => {
        try {
          const parsed = {
            ...question,
            options: question.options ? JSON.parse(question.options) : undefined,
          };
          console.log('🔍 DataAccess: Parsed question options:', parsed.options);
          return parsed;
        } catch (parseError) {
          console.warn('⚠️ DataAccess: Failed to parse question options:', parseError);
          return question;
        }
      });

      return parsedResult;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get questions for lesson:', error);
      return [];
    }
  }

  /**
   * Get question by ID
   */
  async getQuestionById(id: string): Promise<Question | null> {
    try {
      console.log('🔍 DataAccess: Getting question by ID:', id);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM questions WHERE id = ?';
      const params = [id];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getFirstAsync<Question>(sql, params);

      console.log('🔍 DataAccess: Question result:', result);

      if (result) {
        try {
          const parsed = {
            ...result,
            options: result.options ? JSON.parse(result.options) : undefined,
          };
          console.log('🔍 DataAccess: Parsed question:', parsed);
          return parsed;
        } catch (parseError) {
          console.warn('⚠️ DataAccess: Failed to parse question options:', parseError);
          return result;
        }
      }

      return null;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get question by ID:', error);
      return null;
    }
  }

  // ===== CODE PRACTICES =====

  /**
   * Get code practices for a specific lesson
   */
  async getCodePracticesForLesson(lessonId: string): Promise<CodePractice[]> {
    try {
      console.log('🔍 DataAccess: Getting code practices for lesson:', lessonId);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM code_practices WHERE lesson_id = ? ORDER BY order_index ASC';
      const params = [lessonId];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync<CodePractice>(sql, params);

      console.log('🔍 DataAccess: Code practices result:', result);
      console.log('🔍 DataAccess: Code practices count:', result?.length || 0);

      if (result && result.length > 0) {
        console.log(
          '🔍 DataAccess: First code practice sample:',
          JSON.stringify(result[0], null, 2)
        );
      }

      // Parse hints JSON
      const parsedResult = (result || []).map(practice => {
        try {
          const parsed = {
            ...practice,
            hints: practice.hints ? JSON.parse(practice.hints) : undefined,
          };
          console.log('🔍 DataAccess: Parsed practice hints:', parsed.hints);
          return parsed;
        } catch (parseError) {
          console.warn('⚠️ DataAccess: Failed to parse practice hints:', parseError);
          return practice;
        }
      });

      return parsedResult;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get code practices for lesson:', error);
      return [];
    }
  }

  /**
   * Get all code practices
   */
  async getAllCodePractices(): Promise<CodePractice[]> {
    try {
      console.log('🔍 DataAccess: Getting all code practices...');
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM code_practices ORDER BY order_index ASC';
      console.log('🔍 DataAccess: SQL Query:', sql);

      const result = await db.getAllAsync<CodePractice>(sql);

      console.log('🔍 DataAccess: All code practices result:', result);
      console.log('🔍 DataAccess: All code practices count:', result?.length || 0);

      if (result && result.length > 0) {
        console.log(
          '🔍 DataAccess: First code practice sample:',
          JSON.stringify(result[0], null, 2)
        );
      }

      // Parse hints JSON
      const parsedResult = (result || []).map(practice => {
        try {
          const parsed = {
            ...practice,
            hints: practice.hints ? JSON.parse(practice.hints) : undefined,
          };
          return parsed;
        } catch (parseError) {
          console.warn('⚠️ DataAccess: Failed to parse practice hints:', parseError);
          return practice;
        }
      });

      return parsedResult;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get all code practices:', error);
      return [];
    }
  }

  /**
   * Get code practice by ID
   */
  async getCodePracticeById(id: string): Promise<CodePractice | null> {
    try {
      console.log('🔍 DataAccess: Getting code practice by ID:', id);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM code_practices WHERE id = ?';
      const params = [id];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getFirstAsync<CodePractice>(sql, params);

      console.log('🔍 DataAccess: Code practice result:', result);

      if (result) {
        try {
          const parsed = {
            ...result,
            hints: result.hints ? JSON.parse(result.hints) : undefined,
          };
          console.log('🔍 DataAccess: Parsed code practice:', parsed);
          return parsed;
        } catch (parseError) {
          console.warn('⚠️ DataAccess: Failed to parse code practice hints:', parseError);
          return result;
        }
      }

      return null;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get code practice by ID:', error);
      return null;
    }
  }

  // ===== USER PROGRESS =====

  /**
   * Get user progress for a lesson
   */
  async getUserProgress(lessonId: string): Promise<any> {
    try {
      console.log('🔍 DataAccess: Getting user progress for lesson:', lessonId);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM user_progress WHERE lesson_id = ?';
      const params = [lessonId];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getFirstAsync(sql, params);
      console.log('🔍 DataAccess: User progress result:', result);

      return result || null;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get user progress:', error);
      return null;
    }
  }

  /**
   * Update user progress for a lesson
   */
  async updateUserProgress(lessonId: string, progress: any): Promise<void> {
    try {
      console.log('🔍 DataAccess: Updating user progress for lesson:', lessonId);
      console.log('🔍 DataAccess: Progress data:', progress);

      const db = await waitForDatabase();
      const existing = await this.getUserProgress(lessonId);

      if (existing) {
        const sql = `UPDATE user_progress 
                     SET completed = ?, stars = ?, best_score = ?, attempts = ?, last_attempt = ?, updated_at = CURRENT_TIMESTAMP
                     WHERE lesson_id = ?`;
        const params = [
          progress.completed,
          progress.stars,
          progress.bestScore,
          progress.attempts,
          progress.lastAttempt,
          lessonId,
        ];
        console.log('🔍 DataAccess: SQL Query (UPDATE):', sql);
        console.log('🔍 DataAccess: SQL Params:', params);

        await db.runAsync(sql, params);
        console.log('🔍 DataAccess: User progress updated successfully');
      } else {
        const sql = `INSERT INTO user_progress (lesson_id, completed, stars, best_score, attempts, last_attempt)
                     VALUES (?, ?, ?, ?, ?, ?)`;
        const params = [
          lessonId,
          progress.completed,
          progress.stars,
          progress.bestScore,
          progress.attempts,
          progress.lastAttempt,
        ];
        console.log('🔍 DataAccess: SQL Query (INSERT):', sql);
        console.log('🔍 DataAccess: SQL Params:', params);

        await db.runAsync(sql, params);
        console.log('🔍 DataAccess: User progress inserted successfully');
      }
    } catch (error) {
      console.error('❌ DataAccess: Failed to update user progress:', error);
      throw error;
    }
  }

  // ===== QUIZ RESULTS =====

  /**
   * Save quiz result
   */
  async saveQuizResult(result: any): Promise<void> {
    try {
      console.log('🔍 DataAccess: Saving quiz result:', result);
      const db = await waitForDatabase();

      const sql = `INSERT INTO quiz_results (lesson_id, score, total_questions, time_taken, xp_earned, is_perfect)
                   VALUES (?, ?, ?, ?, ?, ?)`;
      const params = [
        result.lessonId,
        result.score,
        result.totalQuestions,
        result.timeTaken,
        result.xpEarned,
        result.isPerfect,
      ];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      await db.runAsync(sql, params);
      console.log('🔍 DataAccess: Quiz result saved successfully');
    } catch (error) {
      console.error('❌ DataAccess: Failed to save quiz result:', error);
      throw error;
    }
  }

  /**
   * Get quiz results for a lesson
   */
  async getQuizResults(lessonId: string): Promise<any[]> {
    try {
      console.log('🔍 DataAccess: Getting quiz results for lesson:', lessonId);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM quiz_results WHERE lesson_id = ? ORDER BY completed_at DESC';
      const params = [lessonId];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync(sql, params);
      console.log('🔍 DataAccess: Quiz results:', result);
      console.log('🔍 DataAccess: Quiz results count:', result?.length || 0);

      return result || [];
    } catch (error) {
      console.error('❌ DataAccess: Failed to get quiz results:', error);
      return [];
    }
  }

  // ===== SEARCH AND FILTER =====

  /**
   * Search lessons by title or content
   */
  async searchLessons(query: string): Promise<Lesson[]> {
    try {
      console.log('🔍 DataAccess: Searching lessons with query:', query);
      const db = await waitForDatabase();

      const sql = `SELECT * FROM lessons 
                   WHERE title LIKE ? OR content LIKE ?
                   ORDER BY order_index ASC`;
      const params = [`%${query}%`, `%${query}%`];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync<Lesson>(sql, params);
      console.log('🔍 DataAccess: Search results:', result);
      console.log('🔍 DataAccess: Search results count:', result?.length || 0);

      return result || [];
    } catch (error) {
      console.error('❌ DataAccess: Failed to search lessons:', error);
      return [];
    }
  }

  /**
   * Get lessons by difficulty
   */
  async getLessonsByDifficulty(difficulty: string): Promise<Lesson[]> {
    try {
      console.log('🔍 DataAccess: Getting lessons by difficulty:', difficulty);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM lessons WHERE difficulty = ? ORDER BY order_index ASC';
      const params = [difficulty];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync<Lesson>(sql, params);
      console.log('🔍 DataAccess: Difficulty lessons result:', result);
      console.log('🔍 DataAccess: Difficulty lessons count:', result?.length || 0);

      return result || [];
    } catch (error) {
      console.error('❌ DataAccess: Failed to get lessons by difficulty:', error);
      return [];
    }
  }

  /**
   * Get code practices by difficulty
   */
  async getCodePracticesByDifficulty(difficulty: string): Promise<CodePractice[]> {
    try {
      console.log('🔍 DataAccess: Getting code practices by difficulty:', difficulty);
      const db = await waitForDatabase();

      const sql = 'SELECT * FROM code_practices WHERE difficulty = ? ORDER BY order_index ASC';
      const params = [difficulty];
      console.log('🔍 DataAccess: SQL Query:', sql);
      console.log('🔍 DataAccess: SQL Params:', params);

      const result = await db.getAllAsync<CodePractice>(sql, params);
      console.log('🔍 DataAccess: Difficulty code practices result:', result);
      console.log('🔍 DataAccess: Difficulty code practices count:', result?.length || 0);

      const parsedResult = (result || []).map(practice => {
        try {
          const parsed = {
            ...practice,
            hints: practice.hints ? JSON.parse(practice.hints) : undefined,
          };
          return parsed;
        } catch (parseError) {
          console.warn('⚠️ DataAccess: Failed to parse practice hints:', parseError);
          return practice;
        }
      });

      return parsedResult;
    } catch (error) {
      console.error('❌ DataAccess: Failed to get code practices by difficulty:', error);
      return [];
    }
  }
}

// Export singleton instance
export const dataAccessService = new DataAccessService();
