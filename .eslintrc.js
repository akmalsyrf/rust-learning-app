module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',

    // General code quality rules
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  ignorePatterns: [
    'node_modules/',
    '*.config.js',
    '*.config.ts',
    'metro.config.js',
    'babel.config.js',
    '.expo/',
    'dist/',
    'build/',
    'ios/',
    'android/',
    'Pods/',
  ],
};
