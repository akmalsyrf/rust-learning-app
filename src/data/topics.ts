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
  },
];
