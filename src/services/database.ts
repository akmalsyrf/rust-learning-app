import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';
import { migrationService } from './migration';
import {
  DatabaseTopic,
  DatabaseLesson,
  DatabaseQuestion,
  DatabaseCodePractice,
} from '../types/database';

// Database configuration
const DATABASE_NAME = 'rust_learning.db';
const DATABASE_VERSION = 1;

// Database instance
let database: SQLite.SQLiteDatabase | null = null;
let isInitializing = false;
let initializationPromise: Promise<SQLite.SQLiteDatabase> | null = null;

/**
 * Initialize database connection
 */
export const initDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  // If already initialized, return existing database
  if (database) {
    return database;
  }

  // If already initializing, wait for that promise
  if (isInitializing && initializationPromise) {
    return initializationPromise;
  }

  // Start initialization
  isInitializing = true;
  initializationPromise = performInitialization();

  try {
    const result = await initializationPromise;
    isInitializing = false;
    initializationPromise = null;
    return result;
  } catch (error) {
    isInitializing = false;
    initializationPromise = null;
    throw error;
  }
};

/**
 * Perform the actual database initialization
 */
const performInitialization = async (): Promise<SQLite.SQLiteDatabase> => {
  try {
    // Open database
    database = await SQLite.openDatabaseAsync(DATABASE_NAME);

    // Log database path for debugging
    console.log('🗄️ Database opened:', DATABASE_NAME);
    console.log('📱 Platform:', Platform.OS);

    if (Platform.OS === 'ios') {
      console.log(
        '📱 iOS Database Path: ~/Library/Developer/CoreSimulator/Devices/[DEVICE_ID]/data/Containers/Data/Application/[APP_ID]/Documents/',
        DATABASE_NAME
      );
    } else if (Platform.OS === 'android') {
      console.log('📱 Android Database Path: /data/data/[PACKAGE_NAME]/databases/', DATABASE_NAME);
    }

    // Create tables if they don't exist
    await createTables();

    // Run migrations
    await migrationService.runMigrations(database);

    // Check if data exists, if not, seed with initial data
    await seedInitialData();

    console.log('Database initialized successfully');
    return database;
  } catch (error) {
    console.error('Failed to initialize database:', error);
    database = null;
    throw error;
  }
};

/**
 * Get database instance
 */
export const getDatabase = (): SQLite.SQLiteDatabase => {
  if (!database) {
    throw new Error('Database not initialized. Call initDatabase() first.');
  }
  return database;
};

/**
 * Check if database is ready
 */
export const isDatabaseReady = (): boolean => {
  return database !== null;
};

/**
 * Wait for database to be ready
 */
export const waitForDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (database) {
    return database;
  }

  if (isInitializing && initializationPromise) {
    return initializationPromise;
  }

  // If not initialized, initialize it
  return initDatabase();
};

/**
 * Create database tables
 */
const createTables = async (): Promise<void> => {
  const db = getDatabase();

  try {
    // Topics table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS topics (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        icon TEXT,
        color TEXT,
        order_index INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Lessons table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS lessons (
        id TEXT PRIMARY KEY,
        topic_id TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT,
        order_index INTEGER DEFAULT 0,
        difficulty TEXT DEFAULT 'beginner',
        estimated_time INTEGER DEFAULT 10,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (topic_id) REFERENCES topics (id) ON DELETE CASCADE
      );
    `);

    // Questions table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS questions (
        id TEXT PRIMARY KEY,
        lesson_id TEXT NOT NULL,
        question TEXT NOT NULL,
        type TEXT NOT NULL,
        options TEXT, -- JSON string for multiple choice
        correct_answer TEXT NOT NULL,
        explanation TEXT,
        points INTEGER DEFAULT 10,
        difficulty TEXT DEFAULT 'beginner',
        order_index INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
      );
    `);

    // Code practices table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS code_practices (
        id TEXT PRIMARY KEY,
        lesson_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        initial_code TEXT,
        expected_output TEXT,
        hints TEXT, -- JSON string for multiple hints
        points INTEGER DEFAULT 15,
        difficulty TEXT DEFAULT 'beginner',
        order_index INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
      );
    `);

    // User progress table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS user_progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id TEXT NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        stars INTEGER DEFAULT 0,
        best_score INTEGER DEFAULT 0,
        attempts INTEGER DEFAULT 0,
        last_attempt DATETIME,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
      );
    `);

    // Quiz results table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS quiz_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id TEXT NOT NULL,
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        time_taken INTEGER NOT NULL,
        xp_earned INTEGER NOT NULL,
        is_perfect BOOLEAN DEFAULT FALSE,
        completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
      );
    `);

    // Create indexes for better performance
    await db.execAsync(`
      CREATE INDEX IF NOT EXISTS idx_lessons_topic_id ON lessons (topic_id);
      CREATE INDEX IF NOT EXISTS idx_questions_lesson_id ON questions (lesson_id);
      CREATE INDEX IF NOT EXISTS idx_code_practices_lesson_id ON code_practices (lesson_id);
      CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_id ON user_progress (lesson_id);
      CREATE INDEX IF NOT EXISTS idx_quiz_results_lesson_id ON quiz_results (lesson_id);
    `);

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Failed to create tables:', error);
    throw error;
  }
};

/**
 * Seed initial data from JSON files
 */
const seedInitialData = async (): Promise<void> => {
  const db = getDatabase();

  try {
    // Check if data already exists
    const topicsCount = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM topics'
    );

    console.log('Current topics count:', topicsCount?.count || 0);

    if (topicsCount && topicsCount.count > 0) {
      console.log('Database already contains data, skipping seed');
      return;
    }

    console.log('Seeding database with initial data...');

    // Import JSON data
    const { topics } = await import('../data/topics');
    const { lessons } = await import('../data/lessons');
    const { questions } = await import('../data/questions');
    const { codePractices } = await import('../data/codePractices');

    console.log(
      `Imported ${topics.length} topics, ${lessons.length} lessons, ${questions.length} questions, ${codePractices.length} code practices`
    );

    // Clear existing data first (safety measure)
    console.log('Clearing existing data...');
    await db.execAsync(`
      DELETE FROM quiz_results;
      DELETE FROM user_progress;
      DELETE FROM code_practices;
      DELETE FROM questions;
      DELETE FROM lessons;
      DELETE FROM topics;
    `);

    // Insert topics
    console.log('Inserting topics...');
    for (const topic of topics) {
      try {
        await db.runAsync(
          'INSERT INTO topics (id, title, description, order_index) VALUES (?, ?, ?, ?)',
          [topic.id, topic.title, topic.description, topic.order]
        );
        console.log(`✓ Inserted topic: ${topic.title}`);
      } catch (error) {
        console.warn(`Failed to insert topic ${topic.id}:`, error);
      }
    }

    // Insert lessons
    console.log('Inserting lessons...');
    for (const lesson of lessons) {
      try {
        await db.runAsync(
          'INSERT INTO lessons (id, topic_id, title, order_index, difficulty, estimated_time) VALUES (?, ?, ?, ?, ?, ?)',
          [lesson.id, lesson.topicId, lesson.title, lesson.order, 'beginner', 10]
        );
        console.log(`✓ Inserted lesson: ${lesson.title}`);
      } catch (error) {
        console.warn(`Failed to insert lesson ${lesson.id}:`, error);
      }
    }

    // Insert questions
    console.log('Inserting questions...');
    for (const question of questions) {
      try {
        const options =
          question.type === 'mcq' && 'choices' in question
            ? JSON.stringify(question.choices)
            : null;
        const correctAnswer =
          question.type === 'mcq' && 'correctIndex' in question
            ? question.choices[question.correctIndex]
            : question.type === 'tf' && 'answer' in question
              ? question.answer.toString()
              : question.type === 'fib' && 'acceptableAnswers' in question
                ? question.acceptableAnswers[0]
                : question.type === 'predict_output' && 'expectedStdout' in question
                  ? question.expectedStdout
                  : question.type === 'code_fix' && 'choices' in question
                    ? question.choices[question.correctIndex]
                    : '';

        await db.runAsync(
          'INSERT INTO questions (id, lesson_id, question, type, options, correct_answer, explanation, points, difficulty, order_index) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [
            question.id,
            question.topicId,
            question.prompt,
            question.type,
            options,
            correctAnswer,
            question.explanation || '',
            question.points,
            question.difficulty,
            0,
          ]
        );
        console.log(`✓ Inserted question: ${question.id}`);
      } catch (error) {
        console.warn(`Failed to insert question ${question.id}:`, error);
      }
    }

    // Insert code practices
    console.log('Inserting code practices...');
    for (const practice of codePractices) {
      try {
        const hints = practice.hints ? JSON.stringify(practice.hints) : null;
        await db.runAsync(
          'INSERT INTO code_practices (id, lesson_id, title, description, initial_code, expected_output, hints, points, difficulty, order_index) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [
            practice.id,
            practice.lessonId,
            practice.title,
            practice.description,
            practice.initialCode,
            practice.expectedOutput || '',
            hints,
            practice.points,
            practice.difficulty,
            0,
          ]
        );
        console.log(`✓ Inserted code practice: ${practice.title}`);
      } catch (error) {
        console.warn(`Failed to insert code practice ${practice.id}:`, error);
      }
    }

    // Verify data was inserted
    const finalTopicsCount = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM topics'
    );
    const finalLessonsCount = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM lessons'
    );
    const finalQuestionsCount = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM questions'
    );
    const finalCodePracticesCount = await db.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM code_practices'
    );

    console.log(
      `Final counts - Topics: ${finalTopicsCount?.count}, Lessons: ${finalLessonsCount?.count}, Questions: ${finalQuestionsCount?.count}, Code Practices: ${finalCodePracticesCount?.count}`
    );

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Failed to seed database:', error);
    throw error;
  }
};

/**
 * Close database connection
 */
export const closeDatabase = async (): Promise<void> => {
  if (database) {
    await database.closeAsync();
    database = null;
    console.log('Database connection closed');
  }
};

/**
 * Reset database (for development/testing)
 */
export const resetDatabase = async (): Promise<void> => {
  const db = getDatabase();

  try {
    console.log('Resetting database...');

    // Drop all tables in correct order (respecting foreign keys)
    await db.execAsync(`
      DROP TABLE IF EXISTS quiz_results;
      DROP TABLE IF EXISTS user_progress;
      DROP TABLE IF EXISTS code_practices;
      DROP TABLE IF EXISTS questions;
      DROP TABLE IF EXISTS lessons;
      DROP TABLE IF EXISTS topics;
      DROP TABLE IF EXISTS database_version;
    `);

    // Reset database instance
    database = null;

    // Reinitialize database
    await initDatabase();

    console.log('Database reset successfully');
  } catch (error) {
    console.error('Failed to reset database:', error);
    throw error;
  }
};

/**
 * Clear all data but keep tables (for development/testing)
 */
export const clearDatabaseData = async (): Promise<void> => {
  const db = getDatabase();

  try {
    console.log('Clearing database data...');

    // Clear all data but keep table structure
    await db.execAsync(`
      DELETE FROM quiz_results;
      DELETE FROM user_progress;
      DELETE FROM code_practices;
      DELETE FROM questions;
      DELETE FROM lessons;
      DELETE FROM topics;
      DELETE FROM database_version;
    `);

    // Reset database version
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS database_version (
        id INTEGER PRIMARY KEY,
        version INTEGER NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.runAsync('INSERT INTO database_version (id, version) VALUES (1, 0)');

    console.log('Database data cleared successfully');
  } catch (error) {
    console.error('Failed to clear database data:', error);
    throw error;
  }
};

/**
 * Force reset database and reseed data (for development/testing)
 */
export const forceResetDatabase = async (): Promise<void> => {
  try {
    console.log('Force resetting database...');

    // Close existing connection
    if (database) {
      await database.closeAsync();
      database = null;
    }

    // Reset initialization state
    isInitializing = false;
    initializationPromise = null;

    // Reinitialize from scratch
    await initDatabase();

    console.log('Database force reset completed');
  } catch (error) {
    console.error('Failed to force reset database:', error);
    throw error;
  }
};

/**
 * Check database status and data counts
 */
export const checkDatabaseStatus = async (): Promise<{
  isReady: boolean;
  topicsCount: number;
  lessonsCount: number;
  questionsCount: number;
  codePracticesCount: number;
}> => {
  try {
    if (!database) {
      return {
        isReady: false,
        topicsCount: 0,
        lessonsCount: 0,
        questionsCount: 0,
        codePracticesCount: 0,
      };
    }

    const topicsCount = await database.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM topics'
    );
    const lessonsCount = await database.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM lessons'
    );
    const questionsCount = await database.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM questions'
    );
    const codePracticesCount = await database.getFirstAsync<{ count: number }>(
      'SELECT COUNT(*) as count FROM code_practices'
    );

    return {
      isReady: true,
      topicsCount: topicsCount?.count || 0,
      lessonsCount: lessonsCount?.count || 0,
      questionsCount: questionsCount?.count || 0,
      codePracticesCount: codePracticesCount?.count || 0,
    };
  } catch (error) {
    console.error('Failed to check database status:', error);
    return {
      isReady: false,
      topicsCount: 0,
      lessonsCount: 0,
      questionsCount: 0,
      codePracticesCount: 0,
    };
  }
};

/**
 * Test function to directly query database (for debugging)
 */
export const testDatabaseQuery = async (): Promise<void> => {
  try {
    if (!database) {
      console.log('❌ Database not initialized');
      return;
    }

    console.log('🧪 Testing database queries...');

    // Test topics
    const topics = await database.getAllAsync('SELECT * FROM topics LIMIT 3');
    console.log('🧪 Topics (first 3):', topics);

    // Test lessons
    const lessons = await database.getAllAsync('SELECT * FROM lessons LIMIT 3');
    console.log('🧪 Lessons (first 3):', lessons);

    // Test questions
    const questions = await database.getAllAsync('SELECT * FROM questions LIMIT 3');
    console.log('🧪 Questions (first 3):', questions);

    // Test code practices
    const codePractices = await database.getAllAsync('SELECT * FROM code_practices LIMIT 3');
    console.log('🧪 Code Practices (first 3):', codePractices);

    // Test table structure
    const tables = await database.getAllAsync("SELECT name FROM sqlite_master WHERE type='table'");
    console.log('🧪 Available tables:', tables);
  } catch (error) {
    console.error('❌ Test query failed:', error);
  }
};
