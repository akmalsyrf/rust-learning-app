import * as SQLite from 'expo-sqlite';

/**
 * Migration service for handling database schema updates
 */
export class MigrationService {
  private currentVersion = 1;

  /**
   * Run all pending migrations
   */
  async runMigrations(db: SQLite.SQLiteDatabase): Promise<void> {
    try {
      // Get current database version
      const version = await this.getDatabaseVersion(db);

      if (version < this.currentVersion) {
        console.log(`Running migrations from version ${version} to ${this.currentVersion}`);

        // Run migrations in order
        for (let v = version + 1; v <= this.currentVersion; v++) {
          await this.runMigration(db, v);
        }

        // Update database version
        await this.updateDatabaseVersion(db, this.currentVersion);

        console.log('All migrations completed successfully');
      }
    } catch (error) {
      console.error('Migration failed:', error);
      throw error;
    }
  }

  /**
   * Get current database version
   */
  private async getDatabaseVersion(db: SQLite.SQLiteDatabase): Promise<number> {
    try {
      // Check if version table exists
      const tableExists = await db.getFirstAsync(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='database_version'"
      );

      if (!tableExists) {
        // Create version table if it doesn't exist
        await db.execAsync(`
          CREATE TABLE database_version (
            id INTEGER PRIMARY KEY,
            version INTEGER NOT NULL,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
        `);

        // Insert initial version
        await db.runAsync('INSERT INTO database_version (id, version) VALUES (1, 0)');

        return 0;
      }

      // Get current version
      const result = await db.getFirstAsync<{ version: number }>(
        'SELECT version FROM database_version ORDER BY id DESC LIMIT 1'
      );

      return result?.version || 0;
    } catch (error) {
      console.error('Failed to get database version:', error);
      return 0;
    }
  }

  /**
   * Update database version
   */
  private async updateDatabaseVersion(db: SQLite.SQLiteDatabase, version: number): Promise<void> {
    try {
      await db.runAsync('INSERT INTO database_version (version) VALUES (?)', [version]);
    } catch (error) {
      console.error('Failed to update database version:', error);
      throw error;
    }
  }

  /**
   * Run specific migration
   */
  private async runMigration(db: SQLite.SQLiteDatabase, version: number): Promise<void> {
    console.log(`Running migration ${version}`);

    switch (version) {
      case 1:
        await this.migration1();
        break;
      // Add more migrations here as needed
      default:
        console.log(`No migration found for version ${version}`);
    }
  }

  /**
   * Migration 1: Initial schema
   * This is already handled in database.ts createTables()
   */
  private async migration1(): Promise<void> {
    // This migration is handled during initial table creation
    // No additional steps needed
    console.log('Migration 1: Initial schema (already applied)');
  }

  /**
   * Migration 2: Add new columns or tables (future use)
   */
  private async migration2(): Promise<void> {
    // Example: Add new columns to existing tables
    // await this.db.execAsync(`
    //   ALTER TABLE lessons ADD COLUMN tags TEXT;
    // `);
    console.log('Migration 2: Not implemented yet');
  }

  /**
   * Migration 3: Data updates (future use)
   */
  private async migration3(): Promise<void> {
    // Example: Update existing data
    // await this.db.runAsync(`
    //   UPDATE lessons SET difficulty = 'intermediate' WHERE difficulty = 'medium';
    // `);
    console.log('Migration 3: Not implemented yet');
  }
}

// Export singleton instance
export const migrationService = new MigrationService();
