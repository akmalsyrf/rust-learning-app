import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { useDataStore } from './src/state/useDataStore';
import { useProgressStore } from './src/state/useProgressStore';
import { useSettingsStore } from './src/state/useSettingsStore';
import { sampleData } from './src/data';

export default function App() {
  const dataStore = useDataStore();
  const progressStore = useProgressStore();
  const settingsStore = useSettingsStore();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load lesson data
        if (dataStore?.loadData) {
          dataStore.loadData(sampleData);
          console.log('Sample data loaded successfully');
        }

        // Load persistent data from storage
        await Promise.all([
          progressStore.loadFromStorage(),
          settingsStore.loadFromStorage(),
        ]);
        console.log('Persistent data loaded from storage');
        
      } catch (error) {
        console.warn('Error initializing app:', error);
      }
    };

    initializeApp();
  }, []);

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
