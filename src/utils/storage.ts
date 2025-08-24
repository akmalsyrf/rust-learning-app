import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
export const STORAGE_KEYS = {
  USER_PROGRESS: '@rust_app_progress',
  USER_SETTINGS: '@rust_app_settings',
} as const;

// Generic storage functions
export const storage = {
  // Get data from storage
  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.warn(`Failed to get data for key ${key}:`, error);
      return null;
    }
  },

  // Set data to storage
  async set<T>(key: string, value: T): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Failed to set data for key ${key}:`, error);
      return false;
    }
  },

  // Remove data from storage
  async remove(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Failed to remove data for key ${key}:`, error);
      return false;
    }
  },

  // Clear all app data
  async clear(): Promise<boolean> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const appKeys = keys.filter(key => key.startsWith('@rust_app_'));
      await AsyncStorage.multiRemove(appKeys);
      return true;
    } catch (error) {
      console.warn('Failed to clear app data:', error);
      return false;
    }
  },

  // Get multiple keys at once
  async getMultiple<T>(keys: string[]): Promise<Record<string, T | null>> {
    try {
      const results = await AsyncStorage.multiGet(keys);
      const data: Record<string, T | null> = {};
      
      results.forEach(([key, value]) => {
        data[key] = value ? JSON.parse(value) : null;
      });
      
      return data;
    } catch (error) {
      console.warn('Failed to get multiple keys:', error);
      return {};
    }
  }
};

// Typed storage functions for specific data types
export const progressStorage = {
  async get() {
    return storage.get<any>(STORAGE_KEYS.USER_PROGRESS);
  },
  
  async set(progress: any) {
    return storage.set(STORAGE_KEYS.USER_PROGRESS, progress);
  },
  
  async clear() {
    return storage.remove(STORAGE_KEYS.USER_PROGRESS);
  }
};

export const settingsStorage = {
  async get() {
    return storage.get<any>(STORAGE_KEYS.USER_SETTINGS);
  },
  
  async set(settings: any) {
    return storage.set(STORAGE_KEYS.USER_SETTINGS, settings);
  },
  
  async clear() {
    return storage.remove(STORAGE_KEYS.USER_SETTINGS);
  }
};
