import 'dotenv/config';

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PREVIEW = process.env.NODE_ENV === 'preview';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
  expo: {
    name: IS_PRODUCTION ? 'Rust Learning App' : 'Rust Learning App (Dev)',
    slug: 'rust-learning-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.akmalsyrf.rustlearningapp',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: 'com.akmalsyrf.rustlearningapp',
      permissions: ['android.permission.INTERNET'],
      usesCleartextTraffic: true,
      versionCode: IS_PRODUCTION ? 1 : 0,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: ['expo-font', 'expo-localization'],
    extra: {
      eas: {
        projectId: '48a2ae9d-ad6b-4e99-a3ca-dec162764a75',
      },
      env: {
        NODE_ENV: process.env.NODE_ENV || 'development',
        DEBUG_MODE: IS_DEV || IS_PREVIEW,
        GEMINI_API_KEY: process.env.GEMINI_API_KEY,
      },
    },
  },
};
