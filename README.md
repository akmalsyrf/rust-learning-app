# Rust Learning App (MVP)

A React Native Expo application for learning Rust programming through interactive quizzes, code comprehension, and gamified learning with streaks and leaderboards.

## 🎯 Features Implemented (MVP)

### Core Learning
- ✅ **Interactive Quizzes**: Multiple choice, true/false, fill-in-the-blank questions
- ✅ **Code Comprehension**: "What does this code print?" exercises
- ✅ **Code Fix**: Choose the correct fix for broken code
- ✅ **Progressive Learning**: Structured lessons from basic to advanced topics

### Gamification
- ✅ **Streak System**: Daily streak tracking with visual indicators
- ✅ **XP System**: Points for correct answers, bonuses for perfect lessons
- ✅ **Achievement Levels**: Newbie to Legend based on total XP
- ✅ **Leaderboard**: Weekly rankings (mock data for MVP)
- ✅ **Progress Tracking**: Stars for lesson completion, overall progress

### UI/UX
- ✅ **Modern Design**: Clean, accessible interface with light/dark themes
- ✅ **Responsive Navigation**: Tab-based navigation with stack navigation for details
- ✅ **Progress Visualization**: Progress bars, badges, and visual feedback
- ✅ **Offline-First**: Local data storage with AsyncStorage

### Content
- ✅ **Structured Curriculum**: Based on "Dasar Pemrograman Rust" by Noval Agung Prayogo
- ✅ **Proper Attribution**: Links and credits to original source material
- ✅ **Sample Lessons**: 9 lessons covering basics to structs
- ✅ **40+ Questions**: Variety of question types across different difficulty levels

## 📱 Screens Implemented

1. **Home Screen**: Daily goals, streak counter, quick stats, continue learning
2. **Modules Screen**: List of topics with progress indicators and lesson previews  
3. **Lesson Screen**: Lesson summary, quiz info, code practice access
4. **Quiz Screen**: Interactive question flow with progress tracking
5. **Leaderboard Screen**: Weekly rankings with podium display
6. **Profile Screen**: User stats, achievements, settings, progress summary
7. **About Screen**: App info, content attribution, features list, contact

## 🏗️ Technical Architecture

### Frontend Stack
- **React Native + Expo**: Cross-platform mobile development
- **TypeScript**: Type safety and better developer experience
- **React Navigation**: Navigation system (tabs + stack)
- **Zustand**: Lightweight state management
- **AsyncStorage**: Offline data persistence

### State Management
- **Progress Store**: User progress, XP, streaks, completed questions
- **Settings Store**: App preferences, theme, notifications
- **Data Store**: Lessons, questions, topics with computed getters

### Component Structure
- **QuestionCard**: Reusable component for all question types
- **StreakCounter**: Visual streak display with motivational messages
- **XPBadge**: XP display with level indicators
- **Theme System**: Consistent styling with light/dark mode support

## 📚 Content Structure

### Topics Covered
1. **Getting Started**: Hello Rust, Build & Run, Variables & Types
2. **Control Flow**: Conditionals, Loops, Functions  
3. **Data Structures**: Arrays, Vectors, Tuples, Structs

### Question Types
- **Multiple Choice (MCQ)**: Concept understanding
- **True/False (TF)**: Quick fact checking
- **Fill in the Blank (FIB)**: Code completion
- **Code Output Prediction**: Reading comprehension
- **Code Fix**: Error identification and correction

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Expo CLI (optional, can use npx)

### Installation
```bash
# Clone and navigate to the directory
cd rust-learning-app

# Install dependencies
npm install

# Start development server
npx expo start

# Run on specific platform
npx expo start --web    # Web browser
npx expo start --ios    # iOS simulator  
npx expo start --android # Android emulator
```

### Development Commands
```bash
# Type checking
npx tsc --noEmit

# Linting (if configured)
npm run lint

# Build for production
npx expo build

# Clear cache
npx expo start --clear
```

## 🎮 How to Use

1. **Start Learning**: Open the app and explore the Home screen
2. **Choose a Topic**: Navigate to Modules and select a topic
3. **Read Lesson**: Review lesson summary and attribution
4. **Take Quiz**: Complete interactive questions to earn XP
5. **Track Progress**: Monitor your streak and compete on leaderboard
6. **Customize**: Adjust theme and settings in Profile

## 📊 Progress System

### XP Earning
- **Correct Answer**: 10 XP
- **Perfect Lesson**: +10 XP bonus
- **Daily Cap**: 100 XP to prevent farming

### Streak Mechanics
- **Daily Activity**: Complete ≥1 question to maintain streak
- **Reset**: Missing a day resets streak to 0
- **Visual Feedback**: Fire icon with motivational messages

### Achievement Levels
- **Newbie**: 0-99 XP
- **Beginner**: 100-499 XP  
- **Intermediate**: 500-999 XP
- **Advanced**: 1000-4999 XP
- **Expert**: 5000-9999 XP
- **Legend**: 10000+ XP

## 🎨 Design System

### Colors
- **Light Theme**: Clean whites and grays with blue accents
- **Dark Theme**: Rich darks with purple accents
- **Semantic Colors**: Success (green), error (red), warning (orange)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, good line height
- **Code**: Monospace font for code snippets
- **Captions**: Secondary information display

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Clear primary/secondary distinction
- **Progress**: Visual progress bars and indicators
- **Icons**: Ionicons for consistency

## 📖 Content Attribution

This app uses educational content adapted from:
- **Source**: [Dasar Pemrograman Rust](https://dasarpemrogramanrust.novalagung.com/)
- **Author**: Noval Agung Prayogo  
- **License**: CC BY-SA 4.0
- **Usage**: Content paraphrased and adapted for mobile quiz format

All lessons include direct links to source material and maintain proper attribution as required by the license.

## 🔮 Future Enhancements (Post-MVP)

### Features
- [ ] **Code Editor**: Rich code editing with syntax highlighting
- [ ] **Remote Code Execution**: Sandboxed Rust compilation
- [ ] **Social Features**: Friend lists, study groups, challenges
- [ ] **Advanced Gamification**: Badges, leagues, seasonal events
- [ ] **Spaced Repetition**: Smart review scheduling
- [ ] **Audio/Video**: Multimedia learning content
- [ ] **Offline Sync**: Better conflict resolution and sync

### Technical
- [ ] **Backend**: User accounts, cloud progress sync
- [ ] **Analytics**: Learning effectiveness tracking
- [ ] **Performance**: Memory optimization, lazy loading
- [ ] **Accessibility**: Screen reader support, font scaling
- [ ] **Internationalization**: Multiple language support

### Content
- [ ] **Expanded Curriculum**: Advanced Rust topics (lifetimes, async, etc.)
- [ ] **Practice Projects**: Real-world coding challenges
- [ ] **Community Content**: User-generated questions
- [ ] **Adaptive Learning**: Personalized difficulty adjustment

## 📄 License

This project is created for educational purposes. The app itself is open for learning and modification. Content attribution follows CC BY-SA 4.0 requirements from the source material.

## 🤝 Contributing

This is an MVP implementation. Feedback and suggestions are welcome for:
- UI/UX improvements
- Additional question types
- Performance optimizations
- Accessibility enhancements
- Content quality improvements

## 📧 Contact

For questions, feedback, or collaboration opportunities, please reach out through the About screen in the app or create an issue in the repository.

---
