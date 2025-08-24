# 🛠️ Development Setup

This document describes the development environment setup and code quality tools for the Rust Learning App.

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI
- VSCode (recommended)

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

## 🧹 Code Quality Tools

### **Prettier** - Code Formatting

- **Config**: `.prettierrc`
- **Format code**: `npm run format`
- **Check formatting**: `npm run format:check`

### **ESLint** - Code Linting

- **Config**: `.eslintrc.js`
- **Lint code**: `npm run lint`
- **Auto-fix issues**: `npm run lint:fix`

### **TypeScript** - Type Checking

- **Config**: `tsconfig.json`
- **Type check**: `npm run typecheck`

## 🎯 All-in-One Commands

### **Check Everything** (Recommended before commits)

```bash
npm run quality
# or
npm run code:check
```

This runs:

- ✅ TypeScript type checking
- ✅ ESLint linting
- ✅ Prettier format checking

### **Fix Everything** (Auto-fix all issues)

```bash
npm run quality:fix
# or
npm run code:fix
```

This runs:

- ✅ ESLint auto-fix
- ✅ Prettier formatting

## 🔧 VSCode Setup

1. **Install recommended extensions:**
   - Prettier - Code formatter
   - ESLint
   - TypeScript Importer
   - React Native Tools

2. **Workspace settings** (auto-configured):
   - Format on save enabled
   - ESLint auto-fix on save
   - Prettier as default formatter

## 🪝 Git Hooks (Husky)

### **Pre-commit Hook**

- Automatically runs `lint-staged` before commits
- Formats and lints only staged files
- Prevents commits with code quality issues

### **Commit Message Hook**

- Enforces conventional commit format
- Examples:
  - `feat: add new quiz feature`
  - `fix: resolve navigation type error`
  - `docs: update README`
  - `style: format code with prettier`

## 📝 Conventional Commits

Follow this format for commit messages:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Maintenance tasks
- `revert`: Revert previous commit

## 🚨 Troubleshooting

### **ESLint Errors**

```bash
npm run lint:fix
```

### **Prettier Issues**

```bash
npm run format
```

### **Type Errors**

```bash
npm run typecheck
```

### **Reset All Tools**

```bash
npm run quality:fix
```

## 📊 Current Status

### **Code Quality Check Results**

```bash
npm run quality
```

**Expected Output:**

- ✅ TypeScript: 0 errors
- ⚠️ ESLint: ~75 warnings (mostly console statements and unused variables)
- ✅ Prettier: All files formatted

### **Common Warnings (Non-blocking)**

- `no-console`: Console statements in development
- `@typescript-eslint/no-explicit-any`: Type `any` usage
- `@typescript-eslint/no-unused-vars`: Unused variables/imports

## 🔄 Workflow

### **Daily Development**

1. Make code changes
2. Run `npm run quality` to check issues
3. Run `npm run quality:fix` to auto-fix what's possible
4. Manually fix remaining issues if any
5. Commit with conventional commit message

### **Before Committing**

```bash
npm run quality
```

- Ensures code quality standards
- Catches type errors early
- Maintains consistent formatting

### **Continuous Integration**

The same commands can be used in CI/CD pipelines:

```bash
npm run quality
```

## 📚 Additional Resources

- [Prettier Documentation](https://prettier.io/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Git Hooks](https://typicode.github.io/husky/)
- [TypeScript ESLint](https://typescript-eslint.io/)

## 🎉 Success!

Your development environment is now fully configured with:

- ✅ **Prettier** for consistent code formatting
- ✅ **ESLint** for code quality and best practices
- ✅ **TypeScript** for type safety
- ✅ **Husky** for automated quality checks
- ✅ **Conventional Commits** for standardized commit messages
- ✅ **One-command quality checks** for easy development workflow
