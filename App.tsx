import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { LanguageProvider } from './src/i18n/context/LanguageContext';
import AppNavigator from './src/navigation/AppNavigator';
import {
  initDatabase,
  checkDatabaseStatus,
  forceResetDatabase,
  testDatabaseQuery,
} from './src/services/database';

export default function App() {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dbStatus, setDbStatus] = useState<any>(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        console.log('Initializing database...');
        await initDatabase();
        setIsDatabaseReady(true);

        // Check database status
        const status = await checkDatabaseStatus();
        setDbStatus(status);

        console.log('App initialization completed');
      } catch (err) {
        console.error('Failed to initialize app:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      }
    };

    initializeApp();
  }, []);

  const handleForceReset = async () => {
    try {
      setError(null);
      setIsDatabaseReady(false);
      await forceResetDatabase();
      setIsDatabaseReady(true);

      // Check database status again
      const status = await checkDatabaseStatus();
      setDbStatus(status);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reset database');
    }
  };

  const handleTestQuery = async () => {
    try {
      await testDatabaseQuery();
    } catch (err) {
      console.error('Test query failed:', err);
    }
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Failed to initialize app</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleForceReset}>
          <Text style={styles.resetButtonText}>Force Reset Database</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!isDatabaseReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#007AFF' />
        <Text style={styles.loadingText}>Initializing app...</Text>
      </View>
    );
  }

  // Show database status for debugging
  if (dbStatus && (dbStatus.topicsCount === 0 || dbStatus.lessonsCount === 0)) {
    return (
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Database Status</Text>
        <Text style={styles.statusText}>Topics: {dbStatus.topicsCount}</Text>
        <Text style={styles.statusText}>Lessons: {dbStatus.lessonsCount}</Text>
        <Text style={styles.statusText}>Questions: {dbStatus.questionsCount}</Text>
        <Text style={styles.statusText}>Code Practices: {dbStatus.codePracticesCount}</Text>

        <TouchableOpacity style={styles.testButton} onPress={handleTestQuery}>
          <Text style={styles.testButtonText}>Test Database Query</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={handleForceReset}>
          <Text style={styles.resetButtonText}>Force Reset Database</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={() => setIsDatabaseReady(true)}>
          <Text style={styles.continueButtonText}>Continue Anyway</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <LanguageProvider>
      <AppNavigator />
      <StatusBar style='auto' />
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  errorTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  errorMessage: {
    fontSize: 14,
    textAlign: 'center',
    color: 'red',
    marginBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  statusText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  resetButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  testButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  testButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
