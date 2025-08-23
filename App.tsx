import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { useDataStore } from './src/state/useDataStore';
import { sampleData } from './src/data/sampleData';

export default function App() {
  const dataStore = useDataStore();

  useEffect(() => {
    // Load sample data on app start
    try {
      if (dataStore?.loadData) {
        dataStore.loadData(sampleData);
        console.log('Sample data loaded successfully');
      }
    } catch (error) {
      console.warn('Error loading data:', error);
    }
  }, []);

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
