import { create } from 'zustand';
import { UserSettings } from '../types';
import { settingsStorage } from '../utils/storage';

interface SettingsState extends UserSettings {
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  setNotificationTime: (time: string) => void;
  setSoundEnabled: (enabled: boolean) => void;
  getEffectiveTheme: () => 'light' | 'dark';

  // Persistence actions
  loadFromStorage: () => Promise<void>;
  saveToStorage: () => Promise<void>;
  clearStorage: () => Promise<void>;
}

export const useSettingsStore = create<SettingsState>()((set, get) => ({
  // Initial state
  theme: 'light' as const,
  notificationsEnabled: true,
  notificationTime: '19:00', // 7 PM default
  soundEnabled: true,

  // Actions
  setTheme: theme => {
    set({ theme });
    get().saveToStorage();
  },

  setNotificationsEnabled: enabled => {
    set({ notificationsEnabled: enabled });
    get().saveToStorage();
  },

  setNotificationTime: time => {
    set({ notificationTime: time });
    get().saveToStorage();
  },

  setSoundEnabled: enabled => {
    set({ soundEnabled: enabled });
    get().saveToStorage();
  },

  getEffectiveTheme: () => {
    try {
      const state = get();
      if (!state || !state.theme) {
        return 'light';
      }
      if (state.theme === 'system') {
        // In a real app, you'd check system theme here
        // For now, default to light
        return 'light';
      }
      return state.theme;
    } catch (error) {
      console.warn('Error getting theme:', error);
      return 'light';
    }
  },

  // Persistence methods
  loadFromStorage: async () => {
    try {
      const savedSettings = await settingsStorage.get();
      if (savedSettings) {
        set({
          theme: savedSettings.theme || 'light',
          notificationsEnabled:
            savedSettings.notificationsEnabled !== undefined
              ? savedSettings.notificationsEnabled
              : true,
          notificationTime: savedSettings.notificationTime || '19:00',
          soundEnabled:
            savedSettings.soundEnabled !== undefined ? savedSettings.soundEnabled : true,
        });
        console.log('Settings loaded from storage');
      }
    } catch (error) {
      console.warn('Failed to load settings from storage:', error);
    }
  },

  saveToStorage: async () => {
    try {
      const state = get();
      const settingsData: UserSettings = {
        theme: state.theme,
        notificationsEnabled: state.notificationsEnabled,
        notificationTime: state.notificationTime,
        soundEnabled: state.soundEnabled,
      };

      await settingsStorage.set(settingsData);
      console.log('Settings saved to storage');
    } catch (error) {
      console.warn('Failed to save settings to storage:', error);
    }
  },

  clearStorage: async () => {
    try {
      await settingsStorage.clear();
      set({
        theme: 'light',
        notificationsEnabled: true,
        notificationTime: '19:00',
        soundEnabled: true,
      });
      console.log('Settings cleared from storage');
    } catch (error) {
      console.warn('Failed to clear settings from storage:', error);
    }
  },
}));
