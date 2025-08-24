## Rust Learning App (React Native + Expo) — Development Plan (MVP)

### Vision

- **Goal**: A mobile app to learn Rust via quizzes, code comprehension, and basic code-writing exercises, with Duolingo-style **streaks** and **leaderboards** to drive daily engagement.
- **Primary content source**: [Dasar Pemrograman Rust](https://dasarpemrogramanrust.novalagung.com/) — used for topic structure, examples, and references. Make sure to attribute and follow license terms (CC BY-SA 4.0 as stated on the site).

### Target Users

- **Beginners** learning Rust fundamentals.
- **Self-paced learners** who value gamified progress and daily practice.

### Success Metrics (MVP)

- **DAU**: ≥ 50 test users using the app during pilot.
- **7-day retention**: ≥ 25%.
- **Median session length**: ≥ 6 minutes.
- **Avg. daily streak length**: ≥ 3 days during pilot.

### Scope (MVP)

- **Learning modes**:
  - Quiz: multiple choice, true/false, fill-in-the-blank.
  - Code comprehension: “What does this code print?”, “What is the type of X?”, simple error-spotting.
  - Code writing (lightweight): short function-completion and simple expressions with deterministic checks.
- **Engagement**: streak tracking, XP points, weekly leaderboard (highest points), reminders.
- **Content**: 8–12 curated lessons mapped from the source, each with ~6–10 questions.
- **Offline-first** for learned content and progress; network used for leaderboard and optional remote code checks.

### References and Attribution

- Source material: [Dasar Pemrograman Rust — Webbook](https://dasarpemrogramanrust.novalagung.com/).
- Follow the site’s licensing guidance and include clear in-app attribution on the About screen.

## Feature Breakdown

### Core Learning

- **Module list**: Guided path from basics (variables, types) to ownership/borrowing, traits, and pattern matching.
- **Lesson detail**: short summary + practice set.
- **Question types**:
  - MultipleChoiceQuestion
  - TrueFalseQuestion
  - FillInBlankQuestion
  - CodeOutputPrediction (deterministic small snippets)
  - CodeFix (choose-the-bug or select-the-correct-fix)
  - CodeWriting (short; matching with tokenized/AST-like heuristics when possible)

### Gamification

- **Streaks**: Increment on any completed lesson/quiz item daily; break resets; MVP includes “streak freeze” as a future idea, not in MVP.
- **Points/XP**: Award per correct answer; bonus for perfect lesson; decay/limits to avoid farming.
- **Leaderboard**: Weekly top points among friends or global (MVP: global weekly board).

### Notifications

- Local daily reminder (configurable time).

### Content Coverage (MVP)

Map initial lessons to these chapters/topics (names align with the source sitemap):

- A.1–A.5: Hello Rust, Build & Run, Comments, Variables, Primitive Scalar Types
- A.6–A.12: String Literal (&str), Control Flow (if/else, while, loop, for in)
- A.13–A.17: Array, Slice (basic), Tuple, Vector, Function
- A.23–A.27: Struct, Associated Function, Method, Enum, Type Alias & Casting
- A.32–A.35: Basic Memory Mgmt, Pointers & References, Ownership, Borrowing
- A.36–A.38: Traits (basic+advanced), Generics
- A.39–A.42: Option, Result, ?, Pattern Matching

Add more topics after MVP. Ensure all content references the original source and paraphrases appropriately with attribution.

## Architecture

### Frontend (Mobile)

- **Tech**: React Native (Expo), TypeScript.
- **Navigation**: React Navigation (stack + tabs).
- **State**: Zustand or Redux Toolkit (prefer Zustand for simplicity).
- **Storage**: AsyncStorage for offline progress and content cache.
- **Theming**: light/dark; accessible font sizes.
- **Code editor**: Minimal custom editor (TextInput) with monospaced font for MVP; consider WebView-based Monaco later.

### Backend (Minimal, only if needed in MVP)

- For code-writing validation:
  - **Option A (MVP default)**: Deterministic checks client-side (string matching, tokenization, test cases with expected outputs). No remote execution.
  - **Option B (Stretch)**: Serverless endpoint to compile/run in sandbox (e.g., Cloud Run/Functions with Docker + Rust toolchain or WASM runtime). Rate-limited, timeboxed, resource-capped.
- For leaderboard:
  - Managed backend (e.g., Supabase or Firebase). Tables: users, scores, weekly_boards.

### Offline-first

- Bundle the first 8–12 lessons and question banks locally.
- Sync user XP and weekly scores when online.

## Data Model (TypeScript)

```ts
type TopicId = string;
type LessonId = string;
type QuestionId = string;

type QuestionBase = {
  id: QuestionId;
  prompt: string;
  explanation?: string; // shown after answer
  topicId: TopicId;
  difficulty: 'beginner' | 'intermediate';
  points: number;
};

type MultipleChoiceQuestion = QuestionBase & {
  type: 'mcq';
  choices: string[];
  correctIndex: number;
};

type TrueFalseQuestion = QuestionBase & {
  type: 'tf';
  answer: boolean;
};

type FillInBlankQuestion = QuestionBase & {
  type: 'fib';
  acceptableAnswers: string[]; // normalized
};

type CodeOutputPrediction = QuestionBase & {
  type: 'predict_output';
  code: string;
  expectedStdout: string; // normalized; small snippets only
};

type CodeFixQuestion = QuestionBase & {
  type: 'code_fix';
  code: string;
  choices: string[]; // fixes
  correctIndex: number;
};

type CodeWritingQuestion = QuestionBase & {
  type: 'code_write';
  scaffold: string; // function/signature/comments
  validators: {
    mustInclude?: string[]; // tokens
    mustNotInclude?: string[];
    testCases?: { input: string; expected: string }[]; // pure, deterministic
  };
};

type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillInBlankQuestion
  | CodeOutputPrediction
  | CodeFixQuestion
  | CodeWritingQuestion;

type Lesson = {
  id: LessonId;
  title: string;
  topicId: TopicId;
  summary: string;
  questions: QuestionId[];
  attributionUrl: string; // link to the source section used
};

type UserProgress = {
  completedQuestions: Record<QuestionId, { correct: boolean; timestamp: number }>;
  lessonStars: Record<LessonId, 0 | 1 | 2 | 3>;
  xp: number;
  currentStreakDays: number;
  lastActiveDate: string; // yyyy-mm-dd
};

type LeaderboardEntry = {
  userId: string;
  displayName: string;
  xpThisWeek: number;
};
```

## API (if backend used)

- `POST /execute` (stretch): run small Rust snippets in sandbox; returns stdout/stderr, exitCode.
- `POST /score/submit`: submit XP earned.
- `GET /leaderboard/weekly`: top N entries.

## App Navigation & Screens

- **Onboarding**: explain streaks, points, and attribution.
- **Home**: daily goal, streak, continue lesson, quick quiz.
- **Modules**: list of topics/lessons + progress.
- **Lesson**: summary, practice set, explanations after answers.
- **Code Practice**: focused editor for small tasks.
- **Results**: per-lesson breakdown, retry wrong ones.
- **Leaderboard**: weekly ranking.
- **Profile**: streak calendar, XP history, settings.
- **About**: attribution and license note for source.

## Project Structure (Frontend)

```
app/
  screens/
    HomeScreen.tsx
    ModulesScreen.tsx
    LessonScreen.tsx
    QuizScreen.tsx
    CodePracticeScreen.tsx
    ResultsScreen.tsx
    LeaderboardScreen.tsx
    ProfileScreen.tsx
    AboutScreen.tsx
  components/
    QuestionCard.tsx
    CodeEditor.tsx
    StreakCounter.tsx
    XPBadge.tsx
  data/
    lessons/
      lesson-a1.json
      lesson-a2.json
      ...
  state/
    useProgressStore.ts
    useSettingsStore.ts
  services/
    leaderboard.ts
    notifications.ts
    validator.ts
  utils/
    normalization.ts
    date.ts
  theme/
    index.ts
```

## Streak & XP Logic (MVP)

- **Streak**: If user completes ≥1 question on a calendar day (local time), increment streak; missing a day resets to 0.
- **XP**: 10 XP per correct answer; +10 XP bonus for perfect lesson; cap 100 XP/day to limit grinding.
- **Leaderboard**: `xpThisWeek` resets every Monday 00:00 UTC.

## Content Production Workflow (MVP)

1. Define lesson objectives and map to source sections.
2. Author paraphrased prompts; include small code snippets.
3. Add explanations referencing the source with link.
4. Validate via a simple content linter (checks answer consistency and token rules).
5. Export to JSON in `app/data/lessons/`.

## Roadmap & Milestones (6 weeks)

### Week 1 — Foundations

- Project scaffolding with Expo + TS, navigation, theme.
- State stores (progress, settings), AsyncStorage persistence.
- Home, Modules, Lesson screens (skeleton).

### Week 2 — Questions & Content

- Implement MCQ/TF/FIB question components + feedback.
- Load lessons from JSON; progress tracking; XP logic.
- Author 4 lessons: A.1–A.5, A.6–A.8.

### Week 3 — Code Tasks & Comprehension

- CodeOutputPrediction and CodeFix types/components.
- Minimal CodeWriting with validators (client-only checks).
- Author 4 more lessons: A.9–A.12, A.13–A.17.

### Week 4 — Gamification & Notifications

- Streak counter and calendar; daily reminder notification.
- Results screen; retry incorrect.
- Polish lesson summaries and explanations with attribution.

### Week 5 — Leaderboard (Backend-lite)

- Integrate Supabase/Firebase for auth-less device UUID and weekly XP submission.
- Weekly leaderboard screen.
- QA for offline sync and conflict resolution.

### Week 6 — Beta & Hardening

- Accessibility pass, small devices, RTL readiness.
- Performance optimization and error handling.
- Pilot release to TestFlight / internal testers.

## Risks & Mitigations

- **License/Attribution compliance**: add in-app attribution and link back to the source on relevant lessons and About screen.
- **Code execution complexity**: keep MVP client-side validation; defer remote execution to post-MVP.
- **Content quality**: establish review checklist; small pilots; iterate.
- **Cheating/farming XP**: daily caps and diminishing returns.

## QA & Analytics

- Unit tests for validators and progress logic.
- Manual test matrix across iOS/Android devices and OS versions.
- Analytics: screens visited, completion rates, daily streak, XP per day (privacy-first, no PII).

## Launch Checklist (MVP)

- 8–12 lessons with explanations and source links.
- Streak + XP + weekly leaderboard working.
- Daily notifications.
- About screen with attribution and license note.
- App store assets and privacy policy.

## Post-MVP Ideas

- Rich code editor with syntax highlighting; playground with remote execution.
- Friend lists; leagues; challenges.
- Path personalization; spaced repetition.
- Localization; downloadable content packs.

---

Content structure and topics are derived from: [Dasar Pemrograman Rust](https://dasarpemrogramanrust.novalagung.com/).
