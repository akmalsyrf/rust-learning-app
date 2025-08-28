import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'fundamentals',
    title: {
      en: 'Rust Fundamentals',
      id: 'Dasar-Dasar Rust',
    },
    description: {
      en: 'Learn the basics of Rust programming',
      id: 'Pelajari dasar-dasar pemrograman Rust',
    },
    order: 1,
    lessons: ['hello-world', 'comments', 'variables', 'scalar-types', 'string-literals'],
    requiredSkills: {
      en: 'Basic Rust syntax, main function, println! macro, comments, variables, data types, string literals',
      id: 'Sintaks Rust dasar, fungsi main, makro println!, komentar, variabel, tipe data, literal string',
    },
  },
  {
    id: 'data-types',
    title: {
      en: 'Data Types & Operations',
      id: 'Tipe Data & Operasi',
    },
    description: {
      en: 'Understanding Rust data types and operations',
      id: 'Memahami tipe data dan operasi dalam Rust',
    },
    order: 2,
    lessons: ['constants', 'operators', 'type-alias-casting'],
    requiredSkills: {
      en: 'Constants, operators, type aliases, type casting, arithmetic operations',
      id: 'Konstanta, operator, alias tipe, casting tipe, operasi aritmatika',
    },
  },
  {
    id: 'control-structures',
    title: {
      en: 'Control Structures',
      id: 'Struktur Kontrol',
    },
    description: {
      en: 'Learn about control flow in Rust',
      id: 'Pelajari alur kontrol dalam Rust',
    },
    order: 3,
    lessons: ['conditional-if', 'while-loops', 'loop-break-continue', 'for-loops'],
    requiredSkills: {
      en: 'Conditional statements, loops, control flow, break/continue, pattern matching',
      id: 'Pernyataan kondisional, loop, alur kontrol, break/continue, pattern matching',
    },
  },
  {
    id: 'collections',
    title: {
      en: 'Collections',
      id: 'Koleksi',
    },
    description: {
      en: 'Arrays, slices, tuples, and vectors',
      id: 'Array, slice, tuple, dan vector',
    },
    order: 4,
    lessons: ['arrays', 'slices', 'tuples', 'vectors'],
    requiredSkills: {
      en: 'Array operations, slice manipulation, tuple destructuring, vector methods',
      id: 'Operasi array, manipulasi slice, destructuring tuple, method vector',
    },
  },
  {
    id: 'functions-modules',
    title: {
      en: 'Functions & Modules',
      id: 'Fungsi & Modul',
    },
    description: {
      en: 'Functions, modules, and code organization',
      id: 'Fungsi, modul, dan organisasi kode',
    },
    order: 5,
    lessons: [
      'functions',
      'module-path',
      'package-crate',
      'modules',
      'inline-modules',
      'module-scope',
      'module-access',
    ],
    requiredSkills: {
      en: 'Function definition, parameters, return types, module system, package management',
      id: 'Definisi fungsi, parameter, tipe return, sistem modul, manajemen package',
    },
  },
  {
    id: 'structs-enums',
    title: {
      en: 'Structs & Enums',
      id: 'Struct & Enum',
    },
    description: {
      en: 'Custom data types and pattern matching',
      id: 'Tipe data kustom dan pattern matching',
    },
    order: 6,
    lessons: [
      'structs',
      'struct-update',
      'tuple-structs',
      'unit-structs',
      'struct-methods',
      'enums',
      'enum-methods',
    ],
    requiredSkills: {
      en: 'Struct definition, methods, enums, pattern matching, custom data types',
      id: 'Definisi struct, method, enum, pattern matching, tipe data kustom',
    },
  },
  {
    id: 'module-system-advanced',
    title: {
      en: 'Advanced Module System',
      id: 'Sistem Modul Lanjutan',
    },
    description: {
      en: 'Advanced module organization and use statements',
      id: 'Organisasi modul lanjutan dan pernyataan use',
    },
    order: 7,
    lessons: ['use-statements', 'nested-use', 'use-external-crates'],
    requiredSkills: {
      en: 'Use statements, module organization, external crates, visibility rules',
      id: 'Pernyataan use, organisasi modul, crate eksternal, aturan visibility',
    },
  },
  {
    id: 'memory-management',
    title: {
      en: 'Memory Management',
      id: 'Manajemen Memori',
    },
    description: {
      en: 'Ownership, borrowing, and references',
      id: 'Ownership, borrowing, dan referensi',
    },
    order: 8,
    lessons: ['ownership', 'borrowing-ref', 'mutable-ref', 'ref-dangling-ref', 'slice-references'],
    requiredSkills: {
      en: 'Ownership rules, borrowing, references, lifetimes, memory safety',
      id: 'Aturan ownership, borrowing, referensi, lifetime, keamanan memori',
    },
  },
  {
    id: 'traits-generics',
    title: {
      en: 'Traits & Generics',
      id: 'Trait & Generik',
    },
    description: {
      en: 'Traits, generics, and lifetimes',
      id: 'Trait, generik, dan lifetime',
    },
    order: 9,
    lessons: [
      'traits',
      'trait-default',
      'trait-parameter',
      'trait-return',
      'trait-bound',
      'trait-conditionally',
      'trait-blanket',
      'lifetimes',
      'lifetime-annotation',
    ],
    requiredSkills: {
      en: 'Trait definition, generics, trait bounds, lifetimes, advanced type system',
      id: 'Definisi trait, generik, trait bounds, lifetime, sistem tipe lanjutan',
    },
  },
  {
    id: 'advanced-types',
    title: {
      en: 'Advanced Types',
      id: 'Tipe Lanjutan',
    },
    description: {
      en: 'Advanced type system features',
      id: 'Fitur sistem tipe lanjutan',
    },
    order: 10,
    lessons: [
      'advanced-functions',
      'newtype-pattern',
      'type-alias',
      'never-type',
      'dynamically-sized',
    ],
    requiredSkills: {
      en: 'Advanced functions, newtype pattern, type aliases, never type, dynamic sizing',
      id: 'Fungsi lanjutan, pola newtype, alias tipe, tipe never, dynamic sizing',
    },
  },
  {
    id: 'strings-advanced',
    title: {
      en: 'Advanced Strings',
      id: 'String Lanjutan',
    },
    description: {
      en: 'String manipulation and formatting',
      id: 'Manipulasi dan pemformatan string',
    },
    order: 11,
    lessons: ['string-slice', 'string-literal', 'raw-string'],
    requiredSkills: {
      en: 'String manipulation, formatting, raw strings, string methods',
      id: 'Manipulasi string, pemformatan, raw string, method string',
    },
  },
  {
    id: 'functional-programming',
    title: {
      en: 'Functional Programming',
      id: 'Pemrograman Fungsional',
    },
    description: {
      en: 'Closures, iterators, and functional patterns',
      id: 'Closure, iterator, dan pola fungsional',
    },
    order: 12,
    lessons: ['closures', 'closure-traits', 'iterators', 'iterator-adaptors'],
    requiredSkills: {
      en: 'Closures, iterators, functional patterns, higher-order functions',
      id: 'Closure, iterator, pola fungsional, fungsi orde tinggi',
    },
  },
  {
    id: 'system-programming',
    title: {
      en: 'System Programming',
      id: 'Pemrograman Sistem',
    },
    description: {
      en: 'Unsafe code, testing, and attributes',
      id: 'Kode unsafe, testing, dan atribut',
    },
    order: 13,
    lessons: ['unsafe', 'testing', 'attributes'],
    requiredSkills: {
      en: 'Unsafe code, testing frameworks, attributes, system-level programming',
      id: 'Kode unsafe, framework testing, atribut, pemrograman level sistem',
    },
  },
  {
    id: 'advanced-concepts',
    title: {
      en: 'Advanced Concepts',
      id: 'Konsep Lanjutan',
    },
    description: {
      en: 'Smart pointers, concurrency, and advanced patterns',
      id: 'Smart pointer, konkurensi, dan pola lanjutan',
    },
    order: 14,
    lessons: ['smart-pointers', 'concurrency', 'async-await'],
    requiredSkills: {
      en: 'Smart pointers, concurrency, async/await, advanced patterns',
      id: 'Smart pointer, konkurensi, async/await, pola lanjutan',
    },
  },
  {
    id: 'error-handling',
    title: {
      en: 'Error Handling',
      id: 'Penanganan Error',
    },
    description: {
      en: 'Comprehensive error handling in Rust',
      id: 'Penanganan error komprehensif dalam Rust',
    },
    order: 15,
    lessons: ['panic', 'result-type', 'recoverable-errors'],
    requiredSkills: {
      en: 'Error handling, Result type, panic, recoverable errors, error propagation',
      id: 'Penanganan error, tipe Result, panic, error yang dapat dipulihkan, propagasi error',
    },
  },
];
