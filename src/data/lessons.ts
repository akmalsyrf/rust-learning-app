import { Lesson } from '../types';

export const lessons: Lesson[] = [
  // Fundamentals (A.1-A.5)
  {
    id: 'hello-world',
    title: {
      en: 'Hello World',
      id: 'Halo Dunia',
    },
    summary: {
      en: 'Learn how to write your first Rust program and understand the basic structure.',
      id: 'Pelajari cara menulis program Rust pertama Anda dan pahami struktur dasarnya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-hello-world.html',
    topicId: 'fundamentals',
    order: 1,
    questions: ['hello-q1', 'hello-q2', 'hello-q3', 'hello-q4', 'hello-q5'],
  },
  {
    id: 'comments',
    title: {
      en: 'Comments',
      id: 'Komentar',
    },
    summary: {
      en: 'Learn about different types of comments in Rust including line, block, and doc comments.',
      id: 'Pelajari tentang berbagai jenis komentar di Rust termasuk komentar baris, blok, dan dokumentasi.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-comments.html',
    topicId: 'fundamentals',
    order: 2,
    questions: ['comment-q1', 'comment-q2', 'comment-q3', 'comment-q4', 'comment-q5'],
  },
  {
    id: 'variables',
    title: {
      en: 'Variables & Mutability',
      id: 'Variabel & Mutabilitas',
    },
    summary: {
      en: 'Understand variable declaration, mutability, constants, and shadowing in Rust.',
      id: 'Pahami deklarasi variabel, mutabilitas, konstanta, dan shadowing di Rust.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-variables.html',
    topicId: 'fundamentals',
    order: 3,
    questions: ['vars-q1', 'vars-q2', 'vars-q3', 'vars-q4', 'vars-q5', 'vars-q6'],
  },
  {
    id: 'scalar-types',
    title: {
      en: 'Scalar Data Types',
      id: 'Tipe Data Skalar',
    },
    summary: {
      en: 'Learn about integers, floats, booleans, and characters in Rust.',
      id: 'Pelajari tentang integer, float, boolean, dan karakter di Rust.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-scalar-data-types.html',
    topicId: 'fundamentals',
    order: 4,
    questions: ['scalar-q1', 'scalar-q2', 'scalar-q3', 'scalar-q4', 'scalar-q5'],
  },
  {
    id: 'string-literals',
    title: {
      en: 'String Literals',
      id: 'Literal String',
    },
    summary: {
      en: 'Understanding string literals (&str) and the basics of string data.',
      id: 'Memahami literal string (&str) dan dasar-dasar data string.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-string-literals.html',
    topicId: 'fundamentals',
    order: 5,
    questions: ['str-basic-q1', 'str-basic-q2', 'str-basic-q3', 'str-basic-q4', 'str-basic-q5'],
  },

  // Data Types (A.7-A.8, A.27)
  {
    id: 'constants',
    title: {
      en: 'Constants',
      id: 'Konstanta',
    },
    summary: {
      en: 'Learn the difference between constants and variables and how to declare them.',
      id: 'Pelajari perbedaan antara konstanta dan variabel serta cara mendeklarasikannya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-constants.html',
    topicId: 'data-types',
    order: 1,
    questions: ['const-q1', 'const-q2', 'const-q3', 'const-q4', 'const-q5'],
  },
  {
    id: 'operators',
    title: {
      en: 'Operators',
      id: 'Operator',
    },
    summary: {
      en: 'Understand arithmetic, comparison, logical, and bitwise operators in Rust.',
      id: 'Pahami operator aritmatika, perbandingan, logika, dan bitwise di Rust.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-operators.html',
    topicId: 'data-types',
    order: 2,
    questions: ['op-q1', 'op-q2', 'op-q3', 'op-q4', 'op-q5'],
  },
  {
    id: 'type-alias-casting',
    title: {
      en: 'Type Alias & Casting',
      id: 'Alias Tipe & Casting',
    },
    summary: {
      en: 'Learn about creating type aliases with `type` and explicit type casting using the `as` keyword.',
      id: 'Pelajari tentang membuat alias tipe dengan `type` dan casting tipe eksplisit menggunakan kata kunci `as`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-type-alias-type-casting.html',
    topicId: 'data-types',
    order: 3,
    questions: ['alias-q1', 'cast-q1', 'cast-q2', 'alias-q2', 'cast-q3'],
  },

  // Control Structures (A.9-A.12)
  {
    id: 'conditional-if',
    title: {
      en: 'Conditional If-Else',
      id: 'Kondisional If-Else',
    },
    summary: {
      en: 'Learn about if, else if, and using if as an expression to assign values.',
      id: 'Pelajari tentang if, else if, dan menggunakan if sebagai ekspresi untuk memberikan nilai.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-conditional-if.html',
    topicId: 'control-structures',
    order: 1,
    questions: ['cond-q1', 'cond-q2', 'cond-q3', 'cond-q4', 'cond-q5'],
  },
  {
    id: 'while-loops',
    title: {
      en: 'While Loops',
      id: 'Perulangan While',
    },
    summary: {
      en: 'Understanding how to use while loops for conditional iteration.',
      id: 'Memahami cara menggunakan perulangan while untuk iterasi kondisional.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-while-loops.html',
    topicId: 'control-structures',
    order: 2,
    questions: ['while-q1', 'while-q2', 'while-q3', 'while-q4', 'while-q5'],
  },
  {
    id: 'loop-break-continue',
    title: {
      en: 'Loop, Break, Continue',
      id: 'Loop, Break, Continue',
    },
    summary: {
      en: 'Learn about infinite loops, returning values from loops, and flow control with break/continue.',
      id: 'Pelajari tentang perulangan tak terbatas, mengembalikan nilai dari perulangan, dan kontrol alur dengan break/continue.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-loop-break-continue.html',
    topicId: 'control-structures',
    order: 3,
    questions: ['loop-q1', 'loop-q2', 'loop-q3', 'loop-q4', 'loop-q5'],
  },
  {
    id: 'for-loops',
    title: {
      en: 'For Loops',
      id: 'Perulangan For',
    },
    summary: {
      en: 'Understanding for loops for iterating over collections and ranges.',
      id: 'Memahami perulangan for untuk melakukan iterasi pada koleksi dan rentang.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-for-loops.html',
    topicId: 'control-structures',
    order: 4,
    questions: ['for-q1', 'for-q2', 'for-q3', 'for-q4', 'for-q5'],
  },

  // Collections (A.13-A.16)
  {
    id: 'arrays',
    title: {
      en: 'Arrays',
      id: 'Array',
    },
    summary: {
      en: 'Learn about fixed-size arrays, declaration, and accessing elements.',
      id: 'Pelajari tentang array berukuran tetap, deklarasi, dan cara mengakses elemennya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-arrays.html',
    topicId: 'collections',
    order: 1,
    questions: ['arr-q1', 'arr-q2', 'arr-q3', 'arr-q4', 'arr-q5'],
  },
  {
    id: 'slices',
    title: {
      en: 'Slices',
      id: 'Slice',
    },
    summary: {
      en: 'Understanding how to create references to a contiguous sequence of elements in a collection.',
      id: 'Memahami cara membuat referensi ke urutan elemen yang berdekatan dalam sebuah koleksi.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-slices.html',
    topicId: 'collections',
    order: 2,
    questions: ['slice-q1', 'slice-q2', 'slice-q3', 'slice-q4', 'slice-q5'],
  },
  {
    id: 'tuples',
    title: {
      en: 'Tuples',
      id: 'Tuple',
    },
    summary: {
      en: 'Learn about tuples for grouping values of different types, destructuring, and element access.',
      id: 'Pelajari tentang tuple untuk mengelompokkan nilai dari tipe yang berbeda, destrukturisasi, dan akses elemen.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-tuples.html',
    topicId: 'collections',
    order: 3,
    questions: ['tuple-q1', 'tuple-q2', 'tuple-q3', 'tuple-q4', 'tuple-q5'],
  },
  {
    id: 'vectors',
    title: {
      en: 'Vectors',
      id: 'Vektor',
    },
    summary: {
      en: 'Understanding dynamic, growable arrays (vectors), including creating, updating, and reading elements.',
      id: 'Memahami array dinamis yang dapat berkembang (vektor), termasuk membuat, memperbarui, dan membaca elemen.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-vectors.html',
    topicId: 'collections',
    order: 4,
    questions: ['vec-q1', 'vec-q2', 'vec-q3', 'vec-q4', 'vec-q5', 'vec-q6'],
  },

  // Functions & Modules (A.17-A.22)
  {
    id: 'functions',
    title: {
      en: 'Functions',
      id: 'Fungsi',
    },
    summary: {
      en: 'Learn how to define functions with parameters and return values, and understand the difference between statements and expressions.',
      id: 'Pelajari cara mendefinisikan fungsi dengan parameter dan nilai kembalian, serta pahami perbedaan antara statement dan ekspresi.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-functions.html',
    topicId: 'functions-modules',
    order: 1,
    questions: ['func-q1', 'func-q2', 'func-q3', 'func-q4', 'func-q5'],
  },
  {
    id: 'module-path',
    title: {
      en: 'Module Path',
      id: 'Path Modul',
    },
    summary: {
      en: 'Understanding module paths for navigating the module tree using `super` and `crate`.',
      id: 'Memahami path modul untuk menavigasi pohon modul menggunakan `super` dan `crate`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-module-path.html',
    topicId: 'functions-modules',
    order: 2,
    questions: ['path-q1', 'path-q2', 'path-q3', 'path-q4', 'path-q5'],
  },
  {
    id: 'package-crate',
    title: {
      en: 'Package & Crate',
      id: 'Package & Crate',
    },
    summary: {
      en: 'Learn the distinction between Rust packages and crates (binary or library).',
      id: 'Pelajari perbedaan antara package dan crate (binary atau library) di Rust.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-package-crate.html',
    topicId: 'functions-modules',
    order: 3,
    questions: ['pkg-q1', 'crate-q1', 'pkg-q2', 'crate-q2', 'pkg-q3'],
  },
  {
    id: 'modules',
    title: {
      en: 'Modules',
      id: 'Modul',
    },
    summary: {
      en: 'Understanding how to use modules to organize code within a crate.',
      id: 'Memahami cara menggunakan modul untuk mengorganisir kode di dalam sebuah crate.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-modules.html',
    topicId: 'functions-modules',
    order: 4,
    questions: ['mod-q1', 'mod-q2', 'mod-q3', 'mod-q4', 'mod-q5'],
  },
  {
    id: 'inline-modules',
    title: {
      en: 'Inline Modules',
      id: 'Modul Inline',
    },
    summary: {
      en: 'Learn how to define modules inline within a single file.',
      id: 'Pelajari cara mendefinisikan modul secara inline di dalam satu file.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-inline-modules.html',
    topicId: 'functions-modules',
    order: 5,
    questions: ['inline-q1', 'inline-q2', 'inline-q3', 'inline-q4', 'inline-q5'],
  },
  {
    id: 'module-scope',
    title: {
      en: 'Module Scope & Visibility',
      id: 'Scope & Visibilitas Modul',
    },
    summary: {
      en: 'Understanding visibility and scope with the `pub` keyword.',
      id: 'Memahami visibilitas dan scope dengan kata kunci `pub`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-module-scope.html',
    topicId: 'functions-modules',
    order: 6,
    questions: ['scope-q1', 'scope-q2', 'scope-q3', 'scope-q4', 'scope-q5'],
  },
  {
    id: 'module-access',
    title: {
      en: 'Module Access',
      id: 'Akses Modul',
    },
    summary: {
      en: 'Learn how to access items across different modules.',
      id: 'Pelajari cara mengakses item dari modul yang berbeda.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-module-access.html',
    topicId: 'functions-modules',
    order: 7,
    questions: ['access-q1', 'access-q2', 'access-q3', 'access-q4', 'access-q5'],
  },

  // Structs & Enums (A.23-A.26, A.28-A.31)
  {
    id: 'structs',
    title: {
      en: 'Structs',
      id: 'Struct',
    },
    summary: {
      en: 'Learn how to define and instantiate custom data structures.',
      id: 'Pelajari cara mendefinisikan dan membuat instance dari struktur data kustom.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-structs.html',
    topicId: 'structs-enums',
    order: 1,
    questions: ['struct-q1', 'struct-q2', 'struct-q3', 'struct-q4', 'struct-q5'],
  },
  {
    id: 'struct-update',
    title: {
      en: 'Struct Update Syntax',
      id: 'Sintaks Pembaruan Struct',
    },
    summary: {
      en: 'Learn the convenient syntax for creating a new struct instance from an existing one.',
      id: 'Pelajari sintaks yang mudah untuk membuat instance struct baru dari yang sudah ada.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-struct-update-syntax.html',
    topicId: 'structs-enums',
    order: 2,
    questions: [
      'struct-update-q1',
      'struct-update-q2',
      'struct-update-q3',
      'struct-update-q4',
      'struct-update-q5',
    ],
  },
  {
    id: 'tuple-structs',
    title: {
      en: 'Tuple Structs',
      id: 'Struct Tuple',
    },
    summary: {
      en: 'Learn about tuple-like structs without named fields.',
      id: 'Pelajari tentang struct yang mirip tuple tanpa field bernama.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-tuple-structs.html',
    topicId: 'structs-enums',
    order: 3,
    questions: [
      'tuple-struct-q1',
      'tuple-struct-q2',
      'tuple-struct-q3',
      'tuple-struct-q4',
      'tuple-struct-q5',
    ],
  },
  {
    id: 'unit-structs',
    title: {
      en: 'Unit-Like Structs',
      id: 'Struct Unit-Like',
    },
    summary: {
      en: 'Understanding structs with no fields and their use cases, especially with traits.',
      id: 'Memahami struct tanpa field dan kasus penggunaannya, terutama dengan trait.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-unit-structs.html',
    topicId: 'structs-enums',
    order: 4,
    questions: [
      'unit-struct-q1',
      'unit-struct-q2',
      'unit-struct-q3',
      'unit-struct-q4',
      'unit-struct-q5',
    ],
  },
  {
    id: 'struct-methods',
    title: {
      en: 'Struct Methods',
      id: 'Method Struct',
    },
    summary: {
      en: 'Learn how to implement methods and associated functions for structs using `impl` blocks.',
      id: 'Pelajari cara mengimplementasikan method dan fungsi terkait untuk struct menggunakan blok `impl`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-struct-methods.html',
    topicId: 'structs-enums',
    order: 5,
    questions: ['method-q1', 'method-q2', 'method-q3', 'method-q4', 'method-q5'],
  },
  {
    id: 'enums',
    title: {
      en: 'Enums',
      id: 'Enum',
    },
    summary: {
      en: 'Understanding how to define enumerations, which can encode meaning and attach data to variants.',
      id: 'Memahami cara mendefinisikan enumerasi, yang dapat menyandikan makna dan melampirkan data ke varian.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-enums.html',
    topicId: 'structs-enums',
    order: 6,
    questions: ['enum-q1', 'enum-q2', 'enum-q3', 'enum-q4', 'enum-q5'],
  },
  {
    id: 'enum-methods',
    title: {
      en: 'Enum Methods',
      id: 'Method Enum',
    },
    summary: {
      en: 'Learn how to implement methods on enums using an `impl` block.',
      id: 'Pelajari cara mengimplementasikan method pada enum menggunakan blok `impl`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-enum-methods.html',
    topicId: 'structs-enums',
    order: 7,
    questions: [
      'enum-method-q1',
      'enum-method-q2',
      'enum-method-q3',
      'enum-method-q4',
      'enum-method-q5',
    ],
  },

  // Advanced Module System (A.32-A.34)
  {
    id: 'use-statements',
    title: {
      en: 'Use Statements',
      id: 'Statement `use`',
    },
    summary: {
      en: 'Learn about bringing items into scope with `use` to shorten paths.',
      id: 'Pelajari tentang membawa item ke dalam scope dengan `use` untuk mempersingkat path.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-use-statements.html',
    topicId: 'module-system-advanced',
    order: 1,
    questions: ['use-q1', 'use-q2', 'use-q3', 'use-q4', 'use-q5'],
  },
  {
    id: 'nested-use',
    title: {
      en: 'Nested & Glob Use',
      id: '`use` Bersarang & Glob',
    },
    summary: {
      en: 'Understanding how to clean up `use` lists with nested paths and the glob operator.',
      id: 'Memahami cara membersihkan daftar `use` dengan path bersarang dan operator glob.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-nested-use.html',
    topicId: 'module-system-advanced',
    order: 2,
    questions: [
      'nested-use-q1',
      'nested-use-q2',
      'nested-use-q3',
      'nested-use-q4',
      'nested-use-q5',
    ],
  },
  {
    id: 'use-external-crates',
    title: {
      en: 'Use External Crates',
      id: 'Menggunakan Crate Eksternal',
    },
    summary: {
      en: 'Learn how to add external crates as dependencies in `Cargo.toml` and use them.',
      id: 'Pelajari cara menambahkan crate eksternal sebagai dependensi di `Cargo.toml` dan menggunakannya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-use-external-crates.html',
    topicId: 'module-system-advanced',
    order: 3,
    questions: [
      'external-crate-q1',
      'external-crate-q2',
      'external-crate-q3',
      'external-crate-q4',
      'external-crate-q5',
    ],
  },

  // Memory Management (A.35-A.39)
  {
    id: 'ownership',
    title: {
      en: 'Ownership',
      id: 'Kepemilikan (Ownership)',
    },
    summary: {
      en: "Learn Rust's core feature: the ownership system, move semantics, and how memory is managed.",
      id: 'Pelajari fitur inti Rust: sistem kepemilikan, semantik pemindahan, dan cara memori dikelola.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-ownership.html',
    topicId: 'memory-management',
    order: 1,
    questions: ['owner-q1', 'owner-q2', 'owner-q3', 'owner-q4', 'owner-q5'],
  },
  {
    id: 'borrowing-ref',
    title: {
      en: 'Borrowing & References',
      id: 'Meminjam & Referensi',
    },
    summary: {
      en: 'Learn how to access data without taking ownership using references.',
      id: 'Pelajari cara mengakses data tanpa mengambil alih kepemilikan menggunakan referensi.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-borrowing-references.html',
    topicId: 'memory-management',
    order: 2,
    questions: ['borrow-q1', 'borrow-q2', 'borrow-q3', 'borrow-q4', 'borrow-q5'],
  },
  {
    id: 'mutable-ref',
    title: {
      en: 'Mutable References',
      id: 'Referensi Mutable',
    },
    summary: {
      en: 'Understanding how to create mutable references to modify borrowed data and the one-writer rule.',
      id: 'Memahami cara membuat referensi mutable untuk memodifikasi data yang dipinjam dan aturan satu penulis.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-mutable-references.html',
    topicId: 'memory-management',
    order: 3,
    questions: ['mut-ref-q1', 'mut-ref-q2', 'mut-ref-q3', 'mut-ref-q4', 'mut-ref-q5'],
  },
  {
    id: 'ref-dangling-ref',
    title: {
      en: 'Dangling References',
      id: 'Referensi Menggantung (Dangling)',
    },
    summary: {
      en: "Learn how Rust's compiler prevents dangling references, ensuring all references point to valid data.",
      id: 'Pelajari bagaimana kompiler Rust mencegah referensi menggantung, memastikan semua referensi menunjuk ke data yang valid.',
    },
    attributionUrl:
      'https://dasarpemrogramanrust.novalagung.com/A-references-dangling-references.html',
    topicId: 'memory-management',
    order: 4,
    questions: ['dangle-q1', 'dangle-q2', 'dangle-q3', 'dangle-q4', 'dangle-q5'],
  },
  {
    id: 'slice-references',
    title: {
      en: 'The Slice Type',
      id: 'Tipe Slice',
    },
    summary: {
      en: 'Understanding slice references for strings and other collections.',
      id: 'Memahami referensi slice untuk string dan koleksi lainnya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-slice-references.html',
    topicId: 'memory-management',
    order: 5,
    questions: ['slice-ref-q1', 'slice-ref-q2', 'slice-ref-q3', 'slice-ref-q4', 'slice-ref-q5'],
  },

  // Traits & Generics (A.40-A.48)
  {
    id: 'traits',
    title: {
      en: 'Traits',
      id: 'Trait',
    },
    summary: {
      en: 'Learn how to define shared behavior across different types using traits.',
      id: 'Pelajari cara mendefinisikan perilaku bersama di berbagai tipe menggunakan trait.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-traits.html',
    topicId: 'traits-generics',
    order: 1,
    questions: ['trait-q1', 'trait-q2', 'trait-q3', 'trait-q4', 'trait-q5'],
  },
  {
    id: 'trait-default',
    title: {
      en: 'Trait Default Implementation',
      id: 'Implementasi Default Trait',
    },
    summary: {
      en: 'Understanding how to provide default implementations for trait methods.',
      id: 'Memahami cara menyediakan implementasi default untuk method trait.',
    },
    attributionUrl:
      'https://dasarpemrogramanrust.novalagung.com/A-trait-default-implementation.html',
    topicId: 'traits-generics',
    order: 2,
    questions: [
      'trait-default-q1',
      'trait-default-q2',
      'trait-default-q3',
      'trait-default-q4',
      'trait-default-q5',
    ],
  },
  {
    id: 'trait-parameter',
    title: {
      en: 'Trait as Parameter',
      id: 'Trait sebagai Parameter',
    },
    summary: {
      en: 'Using traits to accept different types as function parameters with `impl Trait`.',
      id: 'Menggunakan trait untuk menerima berbagai tipe sebagai parameter fungsi dengan `impl Trait`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-trait-as-parameter.html',
    topicId: 'traits-generics',
    order: 3,
    questions: [
      'trait-param-q1',
      'trait-param-q2',
      'trait-param-q3',
      'trait-param-q4',
      'trait-param-q5',
    ],
  },
  {
    id: 'trait-return',
    title: {
      en: 'Trait as Return Type',
      id: 'Trait sebagai Tipe Kembalian',
    },
    summary: {
      en: 'Returning types that implement a specific trait from functions.',
      id: 'Mengembalikan tipe yang mengimplementasikan trait tertentu dari fungsi.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-trait-as-return-type.html',
    topicId: 'traits-generics',
    order: 4,
    questions: [
      'trait-return-q1',
      'trait-return-q2',
      'trait-return-q3',
      'trait-return-q4',
      'trait-return-q5',
    ],
  },
  {
    id: 'trait-bound',
    title: {
      en: 'Trait Bounds',
      id: 'Batasan Trait (Trait Bounds)',
    },
    summary: {
      en: 'Understanding trait bounds for constraining generic types in functions and structs.',
      id: 'Memahami batasan trait untuk membatasi tipe generik dalam fungsi dan struct.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-trait-bound.html',
    topicId: 'traits-generics',
    order: 5,
    questions: [
      'trait-bound-q1',
      'trait-bound-q2',
      'trait-bound-q3',
      'trait-bound-q4',
      'trait-bound-q5',
    ],
  },
  {
    id: 'trait-conditionally',
    title: {
      en: 'Conditional Trait Implementation',
      id: 'Implementasi Trait Kondisional',
    },
    summary: {
      en: 'Conditionally implementing traits for types that meet certain criteria.',
      id: 'Mengimplementasikan trait secara kondisional untuk tipe yang memenuhi kriteria tertentu.',
    },
    attributionUrl:
      'https://dasarpemrogramanrust.novalagung.com/A-trait-implementation-conditionally.html',
    topicId: 'traits-generics',
    order: 6,
    questions: [
      'trait-cond-q1',
      'trait-cond-q2',
      'trait-cond-q3',
      'trait-cond-q4',
      'trait-cond-q5',
    ],
  },
  {
    id: 'trait-blanket',
    title: {
      en: 'Blanket Implementation',
      id: 'Implementasi Menyeluruh (Blanket)',
    },
    summary: {
      en: 'Understanding how to implement a trait for any type that satisfies certain bounds.',
      id: 'Memahami cara mengimplementasikan trait untuk tipe apa pun yang memenuhi batasan tertentu.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-blanket-implementation.html',
    topicId: 'traits-generics',
    order: 7,
    questions: ['blanket-q1', 'blanket-q2', 'blanket-q3', 'blanket-q4', 'blanket-q5'],
  },
  {
    id: 'lifetimes',
    title: {
      en: 'Lifetimes',
      id: 'Lifetime',
    },
    summary: {
      en: 'Understanding the concept of lifetimes for ensuring references are valid.',
      id: 'Memahami konsep lifetime untuk memastikan referensi valid.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-lifetimes.html',
    topicId: 'traits-generics',
    order: 8,
    questions: ['life-q1', 'life-q2', 'life-q3', 'life-q4', 'life-q5'],
  },
  {
    id: 'lifetime-annotation',
    title: {
      en: 'Lifetime Annotation',
      id: 'Anotasi Lifetime',
    },
    summary: {
      en: 'Learn the syntax for annotating lifetimes in functions and structs.',
      id: 'Pelajari sintaks untuk memberi anotasi lifetime dalam fungsi dan struct.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-lifetime-annotation.html',
    topicId: 'traits-generics',
    order: 9,
    questions: ['life-ann-q1', 'life-ann-q2', 'life-ann-q3', 'life-ann-q4', 'life-ann-q5'],
  },

  // Advanced Types (A.49)
  {
    id: 'advanced-functions',
    title: {
      en: 'Advanced Functions & Closures',
      id: 'Fungsi & Closure Tingkat Lanjut',
    },
    summary: {
      en: 'Function pointers and how they differ from closures.',
      id: 'Pointer fungsi dan perbedaannya dengan closure.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-advanced-functions.html',
    topicId: 'advanced-types',
    order: 1,
    questions: ['adv-func-q1', 'adv-func-q2', 'adv-func-q3', 'adv-func-q4', 'adv-func-q5'],
  },
  {
    id: 'newtype-pattern',
    title: {
      en: 'Newtype Pattern',
      id: 'Pola Newtype',
    },
    summary: {
      en: 'Using a tuple struct with one element to create a new type for type safety and abstraction.',
      id: 'Menggunakan struct tuple dengan satu elemen untuk membuat tipe baru demi keamanan tipe dan abstraksi.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-newtype-pattern.html',
    topicId: 'advanced-types',
    order: 2,
    questions: ['newtype-q1', 'newtype-q2', 'newtype-q3', 'newtype-q4', 'newtype-q5'],
  },
  {
    id: 'type-alias',
    title: {
      en: 'Type Alias Advanced',
      id: 'Alias Tipe Tingkat Lanjut',
    },
    summary: {
      en: 'Advanced usage of type aliases for reducing repetition and simplifying complex types.',
      id: 'Penggunaan lanjutan alias tipe untuk mengurangi pengulangan dan menyederhanakan tipe yang kompleks.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-type-alias-advanced.html',
    topicId: 'advanced-types',
    order: 3,
    questions: [
      'type-alias-adv-q1',
      'type-alias-adv-q2',
      'type-alias-adv-q3',
      'type-alias-adv-q4',
      'type-alias-adv-q5',
    ],
  },
  {
    id: 'never-type',
    title: {
      en: 'The Never Type',
      id: 'Tipe Never (`!`)',
    },
    summary: {
      en: 'Understanding the `!` type, which represents computations that never return.',
      id: 'Memahami tipe `!`, yang merepresentasikan komputasi yang tidak pernah kembali (return).',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-never-type.html',
    topicId: 'advanced-types',
    order: 4,
    questions: ['never-q1', 'never-q2', 'never-q3', 'never-q4', 'never-q5'],
  },
  {
    id: 'dynamically-sized',
    title: {
      en: 'Dynamically Sized Types',
      id: 'Tipe Berukuran Dinamis (DST)',
    },
    summary: {
      en: 'Working with Dynamically Sized Types (DSTs) like `str` and `[T]` using pointers like `&` or `Box`.',
      id: 'Bekerja dengan Tipe Berukuran Dinamis (DST) seperti `str` dan `[T]` menggunakan pointer seperti `&` atau `Box`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-dynamically-sized-types.html',
    topicId: 'advanced-types',
    order: 5,
    questions: ['dst-q1', 'dst-q2', 'dst-q3', 'dst-q4', 'dst-q5'],
  },

  // Strings Advanced (A.50)
  {
    id: 'string-slice',
    title: {
      en: 'String Slice Advanced',
      id: 'Slice String Tingkat Lanjut',
    },
    summary: {
      en: 'Advanced operations and characteristics of string slices.',
      id: 'Operasi dan karakteristik lanjutan dari slice string.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-string-slice-advanced.html',
    topicId: 'strings-advanced',
    order: 1,
    questions: [
      'str-slice-adv-q1',
      'str-slice-adv-q2',
      'str-slice-adv-q3',
      'str-slice-adv-q4',
      'str-slice-adv-q5',
    ],
  },
  {
    id: 'string-literal',
    title: {
      en: 'String Literal Advanced',
      id: 'Literal String Tingkat Lanjut',
    },
    summary: {
      en: 'Advanced features and types of string literals in Rust.',
      id: 'Fitur dan jenis lanjutan dari literal string di Rust.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-string-literal-advanced.html',
    topicId: 'strings-advanced',
    order: 2,
    questions: [
      'str-lit-adv-q1',
      'str-lit-adv-q2',
      'str-lit-adv-q3',
      'str-lit-adv-q4',
      'str-lit-adv-q5',
    ],
  },
  {
    id: 'raw-string',
    title: {
      en: 'Raw String Literals',
      id: 'Literal String Mentah (Raw)',
    },
    summary: {
      en: 'Working with raw string literals to avoid interpreting escape sequences.',
      id: 'Bekerja dengan literal string mentah untuk menghindari interpretasi urutan escape.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-raw-string.html',
    topicId: 'strings-advanced',
    order: 3,
    questions: ['raw-str-q1', 'raw-str-q2', 'raw-str-q3', 'raw-str-q4', 'raw-str-q5'],
  },

  // Functional Programming (A.51)
  {
    id: 'closures',
    title: {
      en: 'Closures',
      id: 'Closure',
    },
    summary: {
      en: 'Understanding closures, anonymous functions that can capture their environment.',
      id: 'Memahami closure, fungsi anonim yang dapat menangkap lingkungannya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-closures.html',
    topicId: 'functional-programming',
    order: 1,
    questions: ['closure-q1', 'closure-q2', 'closure-q3', 'closure-q4', 'closure-q5'],
  },
  {
    id: 'closure-traits',
    title: {
      en: 'Closure Traits (Fn, FnMut, FnOnce)',
      id: 'Trait Closure (Fn, FnMut, FnOnce)',
    },
    summary: {
      en: 'Understanding the `Fn`, `FnMut`, and `FnOnce` traits that closures implement.',
      id: 'Memahami trait `Fn`, `FnMut`, dan `FnOnce` yang diimplementasikan oleh closure.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-closure-traits.html',
    topicId: 'functional-programming',
    order: 2,
    questions: [
      'closure-traits-q1',
      'closure-traits-q2',
      'closure-traits-q3',
      'closure-traits-q4',
      'closure-traits-q5',
    ],
  },
  {
    id: 'iterators',
    title: {
      en: 'Iterators',
      id: 'Iterator',
    },
    summary: {
      en: 'Working with iterators, which produce a sequence of values, and understanding their lazy nature.',
      id: 'Bekerja dengan iterator, yang menghasilkan urutan nilai, dan memahami sifatnya yang lazy.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-iterators.html',
    topicId: 'functional-programming',
    order: 3,
    questions: ['iter-q1', 'iter-q2', 'iter-q3', 'iter-q4', 'iter-q5'],
  },
  {
    id: 'iterator-adaptors',
    title: {
      en: 'Iterator Adaptors',
      id: 'Adaptor Iterator',
    },
    summary: {
      en: 'Using consuming and producing adaptors like `map`, `filter`, and `collect` for data processing.',
      id: 'Menggunakan adaptor consuming dan producing seperti `map`, `filter`, dan `collect` untuk pemrosesan data.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-iterator-adaptors.html',
    topicId: 'functional-programming',
    order: 4,
    questions: [
      'iter-adapt-q1',
      'iter-adapt-q2',
      'iter-adapt-q3',
      'iter-adapt-q4',
      'iter-adapt-q5',
    ],
  },

  // System Programming (A.52-A.54)
  {
    id: 'unsafe',
    title: {
      en: 'Unsafe Rust',
      id: 'Rust `unsafe`',
    },
    summary: {
      en: "Understanding `unsafe` blocks for operations that bypass Rust's safety guarantees, like dereferencing raw pointers.",
      id: 'Memahami blok `unsafe` untuk operasi yang melewati jaminan keamanan Rust, seperti dereferensi pointer mentah.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-unsafe.html',
    topicId: 'system-programming',
    order: 1,
    questions: ['unsafe-q1', 'unsafe-q2', 'unsafe-q3', 'unsafe-q4', 'unsafe-q5'],
  },
  {
    id: 'testing',
    title: {
      en: 'Testing',
      id: 'Pengujian (Testing)',
    },
    summary: {
      en: 'Writing unit, documentation, and integration tests in Rust using the `#[test]` attribute.',
      id: 'Menulis tes unit, dokumentasi, dan integrasi di Rust menggunakan atribut `#[test]`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-testing.html',
    topicId: 'system-programming',
    order: 2,
    questions: ['test-q1', 'test-q2', 'test-q3', 'test-q4', 'test-q5'],
  },
  {
    id: 'attributes',
    title: {
      en: 'Attributes',
      id: 'Atribut',
    },
    summary: {
      en: 'Using attributes like `#[derive]` and `#[cfg]` for metadata and conditional compilation.',
      id: 'Menggunakan atribut seperti `#[derive]` dan `#[cfg]` untuk metadata dan kompilasi kondisional.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-attributes.html',
    topicId: 'system-programming',
    order: 3,
    questions: ['attr-q1', 'attr-q2', 'attr-q3', 'attr-q4', 'attr-q5'],
  },

  // Advanced Concepts (placeholder)
  {
    id: 'smart-pointers',
    title: {
      en: 'Smart Pointers',
      id: 'Smart Pointer',
    },
    summary: {
      en: 'Understanding `Box`, `Rc`, `RefCell` and other smart pointers.',
      id: 'Memahami `Box`, `Rc`, `RefCell` dan smart pointer lainnya.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-smart-pointers.html',
    topicId: 'advanced-concepts',
    order: 1,
    questions: ['smart-ptr-q1', 'smart-ptr-q2', 'smart-ptr-q3', 'smart-ptr-q4', 'smart-ptr-q5'],
  },
  {
    id: 'concurrency',
    title: {
      en: 'Concurrency',
      id: 'Konkurensi',
    },
    summary: {
      en: 'Concurrency and parallelism in Rust, including threads and message passing.',
      id: 'Konkurensi dan paralelisme di Rust, termasuk thread dan message passing.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-concurrency.html',
    topicId: 'advanced-concepts',
    order: 2,
    questions: ['concur-q1', 'concur-q2', 'concur-q3', 'concur-q4', 'concur-q5'],
  },
  {
    id: 'async-await',
    title: {
      en: 'Async/Await',
      id: 'Async/Await',
    },
    summary: {
      en: 'Asynchronous programming in Rust using `async` and `await`.',
      id: 'Pemrograman asinkron di Rust menggunakan `async` dan `await`.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-async-await.html',
    topicId: 'advanced-concepts',
    order: 3,
    questions: ['async-q1', 'async-q2', 'async-q3', 'async-q4', 'async-q5'],
  },

  // Error Handling (A.55)
  {
    id: 'panic',
    title: {
      en: 'Unrecoverable Errors with `panic!`',
      id: 'Error Tak Terpulihkan dengan `panic!`',
    },
    summary: {
      en: 'Understanding `panic!` for unrecoverable errors and stack unwinding.',
      id: 'Memahami `panic!` untuk error yang tidak dapat dipulihkan dan stack unwinding.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-panic.html',
    topicId: 'error-handling',
    order: 1,
    questions: ['panic-q1', 'panic-q2', 'panic-q3', 'panic-q4', 'panic-q5'],
  },
  {
    id: 'result-type',
    title: {
      en: 'Recoverable Errors with `Result`',
      id: 'Error Terpulihkan dengan `Result`',
    },
    summary: {
      en: 'Working with the `Result<T, E>` enum for handling errors that can be recovered from.',
      id: 'Bekerja dengan enum `Result<T, E>` untuk menangani error yang dapat dipulihkan.',
    },
    attributionUrl: 'https://dasarpemrogramanrust.novalagung.com/A-result-type.html',
    topicId: 'error-handling',
    order: 2,
    questions: ['result-q1', 'result-q2', 'result-q3', 'result-q4', 'result-q5'],
  },
  {
    id: 'recoverable-errors',
    title: {
      en: 'Error Propagation & Handling',
      id: 'Propagasi & Penanganan Error',
    },
    summary: {
      en: 'Comprehensive error handling strategies, including the `?` operator for propagation.',
      id: 'Strategi penanganan error yang komprehensif, termasuk operator `?` untuk propagasi.',
    },
    attributionUrl:
      'https://dasarpemrogramanrust.novalagung.com/A-recoverable-error-error-handling.html',
    topicId: 'error-handling',
    order: 3,
    questions: [
      'err-handle-q1',
      'err-handle-q2',
      'err-handle-q3',
      'err-handle-q4',
      'err-handle-q5',
    ],
  },
];
