import { create } from 'zustand';
import { UserSettings } from '../types';

interface SettingsState extends UserSettings {
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  setNotificationTime: (time: string) => void;
  setSoundEnabled: (enabled: boolean) => void;
  getEffectiveTheme: () => 'light' | 'dark';
}

export const useSettingsStore = create<SettingsState>()((set, get) => ({
  // Initial state
  theme: 'light' as const,
  notificationsEnabled: true,
  notificationTime: '19:00', // 7 PM default
  soundEnabled: true,

  // Actions
  setTheme: (theme) => set({ theme }),
  
  setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
  
  setNotificationTime: (time) => set({ notificationTime: time }),
  
  setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),

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
}));
