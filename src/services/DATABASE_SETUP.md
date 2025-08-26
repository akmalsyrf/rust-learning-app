# 🗄️ Database Setup dengan Expo SQLite

## 📋 Overview

Aplikasi Rust Learning App sekarang menggunakan **Expo SQLite** sebagai database lokal untuk menggantikan data JSON. Ini memberikan performa yang lebih baik, query yang fleksibel, dan kemampuan untuk menyimpan user progress secara persistent.

## 🏗️ Architecture

### **Database Schema**

```sql
-- Topics table
CREATE TABLE topics (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  color TEXT,
  order_index INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Lessons table
CREATE TABLE lessons (
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

-- Questions table
CREATE TABLE questions (
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

-- Code practices table
CREATE TABLE code_practices (
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

-- User progress table
CREATE TABLE user_progress (
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

-- Quiz results table
CREATE TABLE quiz_results (
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
```

## 📁 File Structure

```
src/
├── services/
│   ├── database.ts          # Database connection & initialization
│   ├── dataAccess.ts        # Data access layer (DAL)
│   └── migration.ts         # Database migration service
├── types/
│   └── database.ts          # Database-specific types
└── utils/
    └── databaseUtils.ts     # Type conversion utilities
```

## 🚀 Setup & Usage

### **1. Initialize Database**

Database akan otomatis di-initialize saat app start:

```typescript
// App.tsx
import { initDatabase } from './src/services/database';

useEffect(() => {
  const initializeApp = async () => {
    await initDatabase(); // Creates tables & seeds data
  };
  initializeApp();
}, []);
```

### **2. Use Data Access Service**

```typescript
import { dataAccessService } from '../services/dataAccess';

// Get all topics
const topics = await dataAccessService.getTopics();

// Get lessons for a topic
const lessons = await dataAccessService.getLessonsForTopic('fundamentals');

// Get questions for a lesson
const questions = await dataAccessService.getQuestionsForLesson('hello-world');
```

### **3. Type Conversion**

Gunakan utility functions untuk convert antara database dan app types:

```typescript
import { convertDatabaseTopicToTopic } from '../utils/databaseUtils';

const dbTopic = await dataAccessService.getTopicById('fundamentals');
const appTopic = convertDatabaseTopicToTopic(dbTopic);
```

## 🔄 Migration System

Database menggunakan migration system untuk handle schema updates:

```typescript
// migration.ts
export class MigrationService {
  private currentVersion = 1;

  async runMigrations(): Promise<void> {
    // Automatically runs pending migrations
  }
}
```

### **Adding New Migration**

```typescript
// migration.ts
private async migration2(): Promise<void> {
  await this.db.execAsync(`
    ALTER TABLE lessons ADD COLUMN tags TEXT;
  `);
}
```

## 📊 Performance Features

### **Indexes**

- `idx_lessons_topic_id` - Fast topic-based lesson queries
- `idx_questions_lesson_id` - Fast lesson-based question queries
- `idx_code_practices_lesson_id` - Fast lesson-based practice queries
- `idx_user_progress_lesson_id` - Fast progress queries
- `idx_quiz_results_lesson_id` - Fast result queries

### **Foreign Keys**

- Cascade deletes untuk maintain data integrity
- Referential integrity untuk relationships

## 🧪 Development & Testing

### **Reset Database**

```typescript
import { resetDatabase } from '../services/database';

// Reset database (drops all tables and re-seeds)
await resetDatabase();
```

### **Close Database**

```typescript
import { closeDatabase } from '../services/database';

// Close database connection
await closeDatabase();
```

## 🔍 Query Examples

### **Search Lessons**

```typescript
const searchResults = await dataAccessService.searchLessons('variables');
```

### **Filter by Difficulty**

```typescript
const beginnerLessons = await dataAccessService.getLessonsByDifficulty('beginner');
const hardPractices = await dataAccessService.getCodePracticesByDifficulty('hard');
```

### **User Progress**

```typescript
// Get progress for a lesson
const progress = await dataAccessService.getUserProgress('hello-world');

// Update progress
await dataAccessService.updateUserProgress('hello-world', {
  completed: true,
  stars: 3,
  bestScore: 100,
  attempts: 1,
  lastAttempt: new Date().toISOString(),
});
```

## 🚨 Error Handling

Semua database operations menggunakan try-catch dengan proper error logging:

```typescript
try {
  const result = await this.db.getAllAsync<Topic>('SELECT * FROM topics');
  return result || [];
} catch (error) {
  console.error('Failed to get topics:', error);
  return []; // Return empty array on error
}
```

## 📱 Platform Support

- ✅ **iOS** - SQLite via Expo
- ✅ **Android** - SQLite via Expo
- ⚠️ **Web** - Not supported (will need fallback to IndexedDB)

## 🔮 Future Improvements

1. **Offline Sync** - Sync dengan cloud database
2. **Data Compression** - Compress large text fields
3. **Query Optimization** - Advanced query planning
4. **Background Sync** - Sync data in background
5. **Data Validation** - Schema validation & constraints

## 🐛 Troubleshooting

### **Common Issues**

1. **Database not initialized**
   - Ensure `initDatabase()` is called before using database
   - Check console for initialization errors

2. **Type conversion errors**
   - Verify database types match schema
   - Use conversion utilities for type mapping

3. **Migration failures**
   - Check migration version numbers
   - Verify migration SQL syntax

### **Debug Commands**

```typescript
// Check database version
const version = await migrationService.getDatabaseVersion();

// Reset database
await resetDatabase();

// Check table structure
const tables = await db.getAllAsync("SELECT name FROM sqlite_master WHERE type='table'");
```

## 📚 Additional Resources

- [Expo SQLite Documentation](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [SQLite Official Site](https://www.sqlite.org/)
- [React Native Database Best Practices](https://reactnative.dev/docs/performance#database-optimization)
