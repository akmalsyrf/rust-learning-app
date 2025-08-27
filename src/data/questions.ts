import { Question } from '../types';

export const questions: Question[] = [
  // =================================================================
  // Topic: fundamentals
  // =================================================================

  // Lesson: hello-world
  {
    id: 'hello-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the macro used to print text to the console in Rust?',
      id: 'Makro apa yang digunakan untuk mencetak teks ke konsol di Rust?',
    },
    choices: [
      { en: 'print()', id: 'print()' },
      { en: 'console.log()', id: 'console.log()' },
      { en: 'println!', id: 'println!' },
      { en: 'echo', id: 'echo' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`println!` is a macro that prints a string to the console, followed by a new line.',
      id: '`println!` adalah makro yang mencetak string ke konsol, diikuti oleh baris baru.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this Rust program?',
      id: 'Apa output dari program Rust ini?',
    },
    code: 'fn main() {\n    println!("Rust is cool!");\n}',
    expectedStdout: 'Rust is cool!',
    explanation: {
      en: 'The `println!` macro prints the exact string provided within the parentheses and quotation marks.',
      id: 'Makro `println!` mencetak string persis seperti yang diberikan di dalam tanda kurung dan tanda kutip.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q3',
    type: 'tf',
    prompt: {
      en: 'Every Rust program must have a `main` function.',
      id: 'Setiap program Rust harus memiliki fungsi `main`.',
    },
    answer: true,
    explanation: {
      en: 'The `main` function is the entry point of every executable Rust program.',
      id: 'Fungsi `main` adalah titik masuk dari setiap program Rust yang dapat dieksekusi.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q4',
    type: 'mcq',
    prompt: {
      en: 'Which command is used to compile a Rust file named `main.rs`?',
      id: 'Perintah mana yang digunakan untuk mengkompilasi file Rust bernama `main.rs`?',
    },
    choices: [
      { en: 'rust compile main.rs', id: 'rust compile main.rs' },
      { en: 'cargo build', id: 'cargo build' },
      { en: 'rustc main.rs', id: 'rustc main.rs' },
      { en: 'gcc main.rs', id: 'gcc main.rs' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`rustc` is the Rust compiler. You use it to compile `.rs` source files directly.',
      id: '`rustc` adalah kompiler Rust. Anda menggunakannya untuk mengkompilasi file sumber `.rs` secara langsung.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q5',
    type: 'fib',
    prompt: {
      en: 'The file extension for Rust source code files is _____.',
      id: 'Ekstensi file untuk file kode sumber Rust adalah _____.',
    },
    acceptableAnswers: ['.rs', 'rs'],
    explanation: {
      en: 'Rust source code files always end with the `.rs` extension.',
      id: 'File kode sumber Rust selalu diakhiri dengan ekstensi `.rs`.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: comments
  {
    id: 'comment-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you start a single-line comment in Rust?',
      id: 'Bagaimana Anda memulai komentar satu baris di Rust?',
    },
    choices: [
      { en: '#', id: '#' },
      { en: '//', id: '//' },
      { en: '/*', id: '/*' },
      { en: '--', id: '--' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Single-line comments start with `//` and continue to the end of the line.',
      id: 'Komentar satu baris dimulai dengan `//` dan berlanjut hingga akhir baris.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q2',
    type: 'tf',
    prompt: {
      en: 'Block comments in Rust can be nested.',
      id: 'Komentar blok di Rust bisa bersarang.',
    },
    answer: true,
    explanation: {
      en: 'Rust supports nested block comments, like `/* outer /* inner */ */`, which can be useful for commenting out code blocks.',
      id: 'Rust mendukung komentar blok bersarang, seperti `/* outer /* inner */ */`, yang dapat berguna untuk menjadikan blok kode sebagai komentar.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q3',
    type: 'mcq',
    prompt: {
      en: 'Which type of comment is typically used for documentation that can be processed by `cargo doc`?',
      id: 'Jenis komentar mana yang biasanya digunakan untuk dokumentasi yang dapat diproses oleh `cargo doc`?',
    },
    choices: [
      { en: '//', id: '//' },
      { en: '/*', id: '/*' },
      { en: '///', id: '///' },
      { en: '/**', id: '/**' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Doc comments, starting with `///` for items or `//!` for containing modules, are used to generate library documentation.',
      id: 'Komentar dokumentasi, yang dimulai dengan `///` untuk item atau `//!` untuk modul yang mengandungnya, digunakan untuk menghasilkan dokumentasi pustaka.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q4',
    type: 'code_fix',
    prompt: {
      en: 'Make the second line of code a comment so the program prints "5".',
      id: 'Jadikan baris kedua kode sebagai komentar agar program mencetak "5".',
    },
    code: 'fn main() {\n    let x = 5;\n    let x = 10; // This should be a comment\n    println!("{}", x);\n}',
    choices: [
      'fn main() {\n    let x = 5;\n    / let x = 10;\n    println!("{}", x);\n}',
      'fn main() {\n    let x = 5;\n    /* let x = 10; */\n    println!("{}", x);\n}',
      'fn main() {\n    let x = 5;\n    * let x = 10;\n    println!("{}", x);\n}',
      'fn main() {\n    let x = 5;\n    # let x = 10;\n    println!("{}", x);\n}',
    ],
    correctIndex: 1,
    explanation: {
      en: 'Both `//` and `/* ... */` can be used to comment out a line of code.',
      id: 'Baik `//` maupun `/* ... */` dapat digunakan untuk menjadikan satu baris kode sebagai komentar.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q5',
    type: 'tf',
    prompt: {
      en: 'The main purpose of comments is to make the compiler ignore certain lines of code.',
      id: 'Tujuan utama dari komentar adalah membuat kompiler mengabaikan baris kode tertentu.',
    },
    answer: false,
    explanation: {
      en: 'While comments do make the compiler ignore code, their main purpose is to explain the code to human readers.',
      id: 'Meskipun komentar memang membuat kompiler mengabaikan kode, tujuan utamanya adalah untuk menjelaskan kode kepada pembaca manusia.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: variables
  {
    id: 'vars-q1',
    type: 'mcq',
    prompt: {
      en: 'Which keyword is used to declare a variable in Rust?',
      id: 'Kata kunci mana yang digunakan untuk mendeklarasikan variabel di Rust?',
    },
    choices: [
      { en: 'var', id: 'var' },
      { en: 'let', id: 'let' },
      { en: 'const', id: 'const' },
      { en: 'mut', id: 'mut' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The `let` keyword is used to introduce a new variable binding.',
      id: 'Kata kunci `let` digunakan untuk memperkenalkan sebuah ikatan variabel baru.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vars-q2',
    type: 'tf',
    prompt: {
      en: 'By default, variables in Rust are immutable.',
      id: 'Secara default, variabel di Rust bersifat immutable.',
    },
    answer: true,
    explanation: {
      en: 'This is a core principle of Rust. To make a variable mutable, you must use the `mut` keyword.',
      id: 'Ini adalah prinsip inti dari Rust. Untuk membuat variabel menjadi mutable, Anda harus menggunakan kata kunci `mut`.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vars-q3',
    type: 'code_fix',
    prompt: {
      en: 'Fix the code to allow the variable `x` to be reassigned.',
      id: 'Perbaiki kode agar variabel `x` dapat di-assign ulang.',
    },
    code: 'let x = 5;\nx = 6;',
    choices: [
      'let mut x = 5;\nx = 6;',
      'let x = 5;\nlet x = 6;',
      'const x = 5;\nx = 6;',
      'var x = 5;\nx = 6;',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The `mut` keyword must be added after `let` to make a variable mutable.',
      id: 'Kata kunci `mut` harus ditambahkan setelah `let` untuk membuat variabel menjadi mutable.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vars-q4',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code, which demonstrates shadowing?',
      id: 'Apa output dari kode ini, yang mendemonstrasikan shadowing?',
    },
    code: 'fn main() {\n   let x = 5;\n   let x = x + 1;\n   {\n       let x = x * 2;\n       println!("Inner x: {}", x);\n   }\n   println!("Outer x: {}", x);\n}',
    expectedStdout: 'Inner x: 12\nOuter x: 6',
    explanation: {
      en: 'Shadowing allows re-declaring a variable. The inner scope has its own `x` (12), which does not affect the outer `x` (6).',
      id: 'Shadowing memungkinkan deklarasi ulang sebuah variabel. Cakupan dalam memiliki `x` sendiri (12), yang tidak mempengaruhi `x` di cakupan luar (6).',
    },
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'vars-q5',
    type: 'mcq',
    prompt: {
      en: 'What is the primary difference between a variable and a constant (`const`)?',
      id: 'Apa perbedaan utama antara variabel dan konstanta (`const`)?',
    },
    choices: [
      {
        en: 'Constants must be declared in all caps.',
        id: 'Konstanta harus dideklarasikan dengan huruf kapital semua.',
      },
      {
        en: 'Constants are always immutable, while `let` variables can be mutable.',
        id: 'Konstanta selalu immutable, sedangkan variabel `let` bisa menjadi mutable.',
      },
      {
        en: 'Constants must have their type annotated and can only be set to a constant expression.',
        id: 'Konstanta harus memiliki anotasi tipe dan hanya dapat diatur ke ekspresi konstan.',
      },
      { en: 'All of the above.', id: 'Semua jawaban di atas benar.' },
    ],
    correctIndex: 3,
    explanation: {
      en: 'All three points are true. Constants have stricter rules: they require type annotations, must be in uppercase by convention, and are evaluated at compile-time.',
      id: 'Ketiga poin tersebut benar. Konstanta memiliki aturan yang lebih ketat: mereka memerlukan anotasi tipe, harus menggunakan huruf kapital semua sesuai konvensi, dan dievaluasi pada saat kompilasi.',
    },
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: scalar-types
  {
    id: 'scalar-q1',
    type: 'mcq',
    prompt: {
      en: 'Which of these is NOT a scalar type in Rust?',
      id: 'Manakah di antara berikut ini yang BUKAN merupakan tipe skalar di Rust?',
    },
    choices: [
      { en: 'Integer', id: 'Integer' },
      { en: 'Floating-point', id: 'Floating-point' },
      { en: 'String', id: 'String' },
      { en: 'Boolean', id: 'Boolean' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`String` is a compound type, not a scalar type. The scalar types are integers, floats, booleans, and characters.',
      id: '`String` adalah tipe majemuk, bukan tipe skalar. Tipe skalar adalah integer, float, boolean, dan karakter.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q2',
    type: 'tf',
    prompt: {
      en: 'The `char` type in Rust can represent emojis.',
      id: 'Tipe `char` di Rust dapat merepresentasikan emoji.',
    },
    answer: true,
    explanation: {
      en: "Rust's `char` type is a 4-byte Unicode Scalar Value, which includes letters, symbols, and emojis.",
      id: 'Tipe `char` Rust adalah Nilai Skalar Unicode 4-byte, yang mencakup huruf, simbol, dan emoji.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q3',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this integer operation?',
      id: 'Apa output dari operasi integer ini?',
    },
    code: 'fn main() {\n   let a: i8 = 10;\n   let b: i8 = 20;\n   let c = a + b;\n   println!("{}", c);\n}',
    expectedStdout: '30',
    explanation: {
      en: 'The program performs a simple addition of two 8-bit signed integers.',
      id: 'Program ini melakukan penjumlahan sederhana dari dua integer bertanda 8-bit.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q4',
    type: 'fib',
    prompt: {
      en: 'To declare a 32-bit unsigned integer, you would use the type _____.',
      id: 'Untuk mendeklarasikan integer tak bertanda 32-bit, Anda akan menggunakan tipe _____.',
    },
    acceptableAnswers: ['u32'],
    explanation: {
      en: 'The `u` stands for unsigned, and `32` represents the number of bits.',
      id: '`u` adalah singkatan dari unsigned (tak bertanda), dan `32` merepresentasikan jumlah bit.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q5',
    type: 'mcq',
    prompt: {
      en: 'What happens if you try to assign a value too large for its integer type in a debug build?',
      id: 'Apa yang terjadi jika Anda mencoba memberikan nilai yang terlalu besar untuk tipe integernya dalam build debug?',
    },
    choices: [
      { en: 'The value wraps around', id: 'Nilainya akan berputar (wrap around)' },
      { en: 'The program panics', id: 'Program akan panic' },
      { en: 'It results in a compile-time error', id: 'Menghasilkan eror saat kompilasi' },
      { en: 'The value is truncated', id: 'Nilainya akan dipotong' },
    ],
    correctIndex: 1,
    explanation: {
      en: "In debug builds, Rust checks for integer overflow. If it occurs, the program will `panic`. In release builds, it performs two's complement wrapping.",
      id: "Dalam build debug, Rust memeriksa adanya integer overflow. Jika terjadi, program akan `panic`. Dalam build rilis, ia akan melakukan pembungkusan komplemen dua (two's complement wrapping).",
    },
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: string-literals
  {
    id: 'str-basic-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the type of a string literal like `"hello"` in Rust?',
      id: 'Apa tipe dari literal string seperti `"hello"` di Rust?',
    },
    choices: [
      { en: 'String', id: 'String' },
      { en: 'str', id: 'str' },
      { en: '&str', id: '&str' },
      { en: 'char[]', id: 'char[]' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'String literals are string slices (`&str`), which are immutable references to a sequence of UTF-8 bytes stored in the binary.',
      id: 'Literal string adalah potongan string (`&str`), yang merupakan referensi immutable ke urutan byte UTF-8 yang disimpan dalam biner.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'str-basic-q2',
    type: 'tf',
    prompt: {
      en: '`&str` types are mutable and can be modified after creation.',
      id: 'Tipe `&str` bersifat mutable dan dapat dimodifikasi setelah dibuat.',
    },
    answer: false,
    explanation: {
      en: 'String slices (`&str`) are immutable. To have a modifiable string, you need to use the `String` type.',
      id: 'Potongan string (`&str`) bersifat immutable. Untuk memiliki string yang dapat dimodifikasi, Anda perlu menggunakan tipe `String`.',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'str-basic-q3',
    type: 'predict_output',
    prompt: {
      en: 'What will this program print?',
      id: 'Apa yang akan dicetak oleh program ini?',
    },
    code: 'fn main() {\n   let my_str = "Hello, Rust!";\n   println!("Length: {}", my_str.len());\n}',
    expectedStdout: 'Length: 12',
    explanation: {
      en: 'The `.len()` method on a string slice returns the number of bytes, which is 12 for the ASCII string "Hello, Rust!".',
      id: 'Metode `.len()` pada potongan string mengembalikan jumlah byte, yaitu 12 untuk string ASCII "Hello, Rust!".',
    },
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'str-basic-q4',
    type: 'mcq',
    prompt: {
      en: 'Which is true about string literals in Rust?',
      id: 'Manakah yang benar tentang literal string di Rust?',
    },
    choices: [
      { en: 'They are stored on the stack.', id: 'Disimpan di stack.' },
      { en: 'They are growable.', id: 'Ukurannya bisa bertambah.' },
      {
        en: 'They are hardcoded directly into the final executable.',
        id: 'Ditanamkan langsung ke dalam file eksekusi akhir.',
      },
      { en: 'They must be explicitly deallocated.', id: 'Harus didealokasi secara eksplisit.' },
    ],
    correctIndex: 2,
    explanation: {
      en: "String literals are embedded in the program's binary, making them fast and efficient as they are loaded into read-only memory.",
      id: 'Literal string disematkan dalam biner program, membuatnya cepat dan efisien karena dimuat ke dalam memori hanya-baca.',
    },
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'str-basic-q5',
    type: 'tf',
    prompt: {
      en: 'You can combine two string literals using the `+` operator.',
      id: 'Anda dapat menggabungkan dua literal string menggunakan operator `+`.',
    },
    answer: false,
    explanation: {
      en: 'The `+` operator is not defined for `&str`. It is used to concatenate a `String` with an `&str`. For literals, the `concat!` macro is a better choice.',
      id: 'Operator `+` tidak didefinisikan untuk `&str`. Ini digunakan untuk menggabungkan `String` dengan `&str`. Untuk literal, makro `concat!` adalah pilihan yang lebih baik.',
    },
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: data-types
  // =================================================================

  // Lesson: constants
  {
    id: 'const-q1',
    type: 'mcq',
    prompt: {
      en: 'Which syntax is correct for declaring a constant?',
      id: 'Sintaks mana yang benar untuk mendeklarasikan konstanta?',
    },
    choices: [
      { en: 'let MAX_POINTS = 100_000;', id: 'let MAX_POINTS = 100_000;' },
      { en: 'const MAX_POINTS: u32 = 100_000;', id: 'const MAX_POINTS: u32 = 100_000;' },
      { en: 'const MAX_POINTS = 100_000;', id: 'const MAX_POINTS = 100_000;' },
      { en: 'final MAX_POINTS: u32 = 100_000;', id: 'final MAX_POINTS: u32 = 100_000;' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Constants require the `const` keyword, a type annotation (e.g., `u32`), and are conventionally named in SCREAMING_SNAKE_CASE.',
      id: 'Konstanta memerlukan kata kunci `const`, anotasi tipe (misalnya, `u32`), dan secara konvensional dinamai dalam format SCREAMING_SNAKE_CASE.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'const-q2',
    type: 'tf',
    prompt: {
      en: 'The value of a constant can be determined by a function call at runtime.',
      id: 'Nilai sebuah konstanta dapat ditentukan oleh pemanggilan fungsi saat runtime.',
    },
    answer: false,
    explanation: {
      en: 'Constants must be set to a value that can be computed at compile time. They cannot be the result of a runtime function call.',
      id: 'Konstanta harus diatur ke nilai yang dapat dihitung pada saat kompilasi. Mereka tidak bisa menjadi hasil dari pemanggilan fungsi runtime.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'const-q3',
    type: 'mcq',
    prompt: {
      en: 'What is a key difference between `const` and an immutable `let` variable?',
      id: 'Apa perbedaan utama antara `const` dan variabel `let` yang immutable?',
    },
    choices: [
      { en: 'There is no difference.', id: 'Tidak ada perbedaan.' },
      {
        en: '`const` can be declared in any scope, including the global scope.',
        id: '`const` dapat dideklarasikan di cakupan mana pun, termasuk cakupan global.',
      },
      {
        en: '`let` variables are always stored on the stack, `const` on the heap.',
        id: 'Variabel `let` selalu disimpan di stack, `const` di heap.',
      },
      {
        en: '`const` can be made mutable with `mut`.',
        id: '`const` dapat dibuat mutable dengan `mut`.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Constants can be declared in any scope, including globally, making them useful for values shared across the program.',
      id: 'Konstanta dapat dideklarasikan di cakupan mana pun, termasuk secara global, membuatnya berguna untuk nilai yang dibagikan di seluruh program.',
    },
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'const-q4',
    type: 'fib',
    prompt: {
      en: 'By convention, constant variable names in Rust are written in _________ case.',
      id: 'Menurut konvensi, nama variabel konstanta di Rust ditulis dalam format _________.',
    },
    acceptableAnswers: ['UPPER', 'SCREAMING_SNAKE', 'SCREAMING SNAKE'],
    explanation: {
      en: 'The convention is to use all uppercase letters with underscores between words, e.g., `MAX_SPEED`.',
      id: 'Konvensinya adalah menggunakan semua huruf kapital dengan garis bawah di antara kata-kata, misalnya, `MAX_SPEED`.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'const-q5',
    type: 'tf',
    prompt: {
      en: 'A new memory address is allocated every time a `const` is used.',
      id: 'Alamat memori baru dialokasikan setiap kali sebuah `const` digunakan.',
    },
    answer: false,
    explanation: {
      en: 'Constants are not stored in a specific memory location. The compiler effectively inlines their values wherever they are used.',
      id: 'Konstanta tidak disimpan di lokasi memori tertentu. Kompiler secara efektif menyisipkan (inline) nilainya di mana pun mereka digunakan.',
    },
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: operators
  {
    id: 'op-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the remainder/modulo operator in Rust?',
      id: 'Apa operator sisa bagi/modulo di Rust?',
    },
    choices: [
      { en: '/', id: '/' },
      { en: '%', id: '%' },
      { en: 'mod', id: 'mod' },
      { en: 'rem', id: 'rem' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The `%` symbol is used as the remainder operator in Rust, just like in many other C-like languages.',
      id: 'Simbol `%` digunakan sebagai operator sisa bagi di Rust, sama seperti di banyak bahasa lain yang mirip C.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'op-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let x = 2 * (3 + 4);\n   println!("{}", x);\n}',
    expectedStdout: '14',
    explanation: {
      en: 'The expression inside the parentheses `(3 + 4)` is evaluated first, resulting in 7. Then, `2 * 7` equals 14.',
      id: 'Ekspresi di dalam tanda kurung `(3 + 4)` dievaluasi terlebih dahulu, menghasilkan 7. Kemudian, `2 * 7` sama dengan 14.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'op-q3',
    type: 'tf',
    prompt: {
      en: 'Rust supports operator overloading.',
      id: 'Rust mendukung operator overloading.',
    },
    answer: true,
    explanation: {
      en: 'Yes, you can implement traits like `std::ops::Add`, `std::ops::Sub`, etc., on your own custom types to define how operators work with them.',
      id: 'Ya, Anda dapat mengimplementasikan trait seperti `std::ops::Add`, `std::ops::Sub`, dll., pada tipe kustom Anda sendiri untuk mendefinisikan cara kerja operator dengan tipe tersebut.',
    },
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'op-q4',
    type: 'mcq',
    prompt: {
      en: 'Which of these is a bitwise operator?',
      id: 'Manakah di antara ini yang merupakan operator bitwise?',
    },
    choices: [
      { en: '&&', id: '&&' },
      { en: '||', id: '||' },
      { en: '^', id: '^' },
      { en: '==', id: '==' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`^` is the bitwise XOR operator. `&&` and `||` are logical operators.',
      id: '`^` adalah operator bitwise XOR. `&&` dan `||` adalah operator logika.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'op-q5',
    type: 'predict_output',
    prompt: {
      en: 'What will be printed to the console?',
      id: 'Apa yang akan dicetak ke konsol?',
    },
    code: 'fn main() {\n   let is_active = true;\n   println!("{}", !is_active);\n}',
    expectedStdout: 'false',
    explanation: {
      en: 'The `!` operator is the logical NOT operator, which inverts the boolean value from `true` to `false`.',
      id: 'Operator `!` adalah operator logika NOT, yang membalikkan nilai boolean dari `true` menjadi `false`.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: type-alias-casting
  {
    id: 'alias-q1',
    type: 'mcq',
    prompt: {
      en: 'Which keyword is used to create a type alias in Rust?',
      id: 'Kata kunci mana yang digunakan untuk membuat alias tipe di Rust?',
    },
    choices: [
      { en: 'type', id: 'type' },
      { en: 'alias', id: 'alias' },
      { en: 'typedef', id: 'typedef' },
      { en: 'using', id: 'using' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The `type` keyword is used to give a new name to an existing type.',
      id: 'Kata kunci `type` digunakan untuk memberikan nama baru ke tipe yang sudah ada.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cast-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you explicitly cast a value from `f64` to `i32`?',
      id: 'Bagaimana cara Anda secara eksplisit melakukan casting nilai dari `f64` ke `i32`?',
    },
    choices: [
      { en: '(i32)my_float', id: '(i32)my_float' },
      { en: 'i32(my_float)', id: 'i32(my_float)' },
      { en: 'my_float as i32', id: 'my_float as i32' },
      { en: 'cast<i32>(my_float)', id: 'cast<i32>(my_float)' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The `as` keyword is used for explicit type casting in Rust.',
      id: 'Kata kunci `as` digunakan untuk casting tipe secara eksplisit di Rust.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cast-q2',
    type: 'predict_output',
    prompt: {
      en: 'What will this casting operation print?',
      id: 'Apa yang akan dicetak oleh operasi casting ini?',
    },
    code: 'fn main() {\n   let decimal = 65.4321_f32;\n   let integer = decimal as u8;\n   let character = integer as char;\n   println!("{}", character);\n}',
    expectedStdout: 'A',
    explanation: {
      en: "The float `65.4321` is truncated to the integer `65`. The `u8` value `65` corresponds to the character 'A' in ASCII.",
      id: "Float `65.4321` dipotong menjadi integer `65`. Nilai `u8` `65` sesuai dengan karakter 'A' dalam ASCII.",
    },
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'alias-q2',
    type: 'code_fix',
    prompt: {
      en: 'Correct the syntax for this type alias.',
      id: 'Perbaiki sintaks untuk alias tipe ini.',
    },
    code: 'alias Kilometers = i32;',
    choices: [
      'type Kilometers = i32;',
      'type Kilometers: i32;',
      'let Kilometers = i32;',
      'typedef Kilometers = i32;',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The correct syntax is `type AliasName = OriginalType;`.',
      id: 'Sintaks yang benar adalah `type NamaAlias = TipeAsli;`.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cast-q3',
    type: 'tf',
    prompt: {
      en: 'Casting in Rust is always safe and can never fail.',
      id: 'Casting di Rust selalu aman dan tidak akan pernah gagal.',
    },
    answer: false,
    explanation: {
      en: 'Casting can be unsafe. For example, casting a large integer to a smaller type can result in truncation and loss of data.',
      id: 'Casting bisa jadi tidak aman. Misalnya, melakukan casting integer besar ke tipe yang lebih kecil dapat mengakibatkan pemotongan dan kehilangan data.',
    },
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },

  // =================================================================
  // Topic: control-structures
  // =================================================================

  // Lesson: conditional-if
  {
    id: 'cond-q1',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let number = 6;\n   if number % 4 == 0 {\n       println!("divisible by 4");\n   } else if number % 3 == 0 {\n       println!("divisible by 3");\n   } else {\n       println!("not divisible by 4 or 3");\n   }\n}',
    expectedStdout: 'divisible by 3',
    explanation: {
      en: 'The first condition `6 % 4 == 0` is false. The second condition `6 % 3 == 0` is true, so its block is executed.',
      id: 'Kondisi pertama `6 % 4 == 0` adalah salah. Kondisi kedua `6 % 3 == 0` adalah benar, sehingga bloknya dieksekusi.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cond-q2',
    type: 'mcq',
    prompt: {
      en: 'Why is `if` considered an expression in Rust?',
      id: 'Mengapa `if` dianggap sebagai ekspresi di Rust?',
    },
    choices: [
      {
        en: 'Because it can be used in a `for` loop.',
        id: 'Karena dapat digunakan dalam perulangan `for`.',
      },
      { en: 'Because it can return a value.', id: 'Karena dapat mengembalikan nilai.' },
      { en: "Because it doesn't need parentheses.", id: 'Karena tidak memerlukan tanda kurung.' },
      {
        en: 'Because it must end with a semicolon.',
        id: 'Karena harus diakhiri dengan titik koma.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: '`if` is an expression, which means it evaluates to a value. This allows for concise code like `let x = if condition { 5 } else { 6 };`.',
      id: '`if` adalah sebuah ekspresi, yang berarti ia mengevaluasi menjadi sebuah nilai. Ini memungkinkan kode yang ringkas seperti `let x = if kondisi { 5 } else { 6 };`.',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'cond-q3',
    type: 'tf',
    prompt: {
      en: 'The condition in an `if` statement must evaluate to a `bool`.',
      id: 'Kondisi dalam pernyataan `if` harus mengevaluasi menjadi `bool`.',
    },
    answer: true,
    explanation: {
      en: 'Unlike some languages, Rust does not automatically convert non-boolean types to a boolean. The condition must explicitly be `true` or `false`.',
      id: 'Tidak seperti beberapa bahasa, Rust tidak secara otomatis mengubah tipe non-boolean menjadi boolean. Kondisinya harus secara eksplisit `true` atau `false`.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cond-q4',
    type: 'predict_output',
    prompt: {
      en: 'What will be the value of `x`?',
      id: 'Berapakah nilai dari `x`?',
    },
    code: 'fn main() {\n   let condition = true;\n   let x = if condition { 10 } else { 20 };\n   println!("{}", x);\n}',
    expectedStdout: '10',
    explanation: {
      en: 'Since `condition` is true, the `if` expression evaluates to the value of its `then` block, which is 10.',
      id: 'Karena `condition` bernilai benar, ekspresi `if` mengevaluasi ke nilai dari blok `then`-nya, yaitu 10.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cond-q5',
    type: 'code_fix',
    prompt: {
      en: 'This code has an error because the `if` and `else` arms have different types. Fix it.',
      id: 'Kode ini memiliki eror karena cabang `if` dan `else` memiliki tipe yang berbeda. Perbaiki.',
    },
    code: 'let number = 5;\nlet result = if number > 0 { "positive" } else { 0 };',
    choices: [
      'let result = if number > 0 { "positive".to_string() } else { "zero".to_string() };',
      'let result = if number > 0 { 1 } else { 0 };',
      'let result = if number > 0 { true } else { false };',
      'All of the above could be valid fixes depending on intent.',
    ],
    correctIndex: 3,
    explanation: {
      en: 'All arms of an `if-else` expression must return the same type. Any of the choices would make the types consistent.',
      id: 'Semua cabang dari ekspresi `if-else` harus mengembalikan tipe yang sama. Salah satu dari pilihan tersebut akan membuat tipe menjadi konsisten.',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: while-loops
  {
    id: 'while-q1',
    type: 'predict_output',
    prompt: {
      en: 'What is the final value of `number` that gets printed?',
      id: 'Berapakah nilai akhir dari `number` yang akan dicetak?',
    },
    code: 'fn main() {\n   let mut number = 3;\n   while number != 0 {\n       println!("{}!", number);\n       number -= 1;\n   }\n   println!("Final number: {}", number);\n}',
    expectedStdout: '3!\n2!\n1!\nFinal number: 0',
    explanation: {
      en: 'The loop continues as long as `number` is not 0. It prints the number, decrements it, and stops when it becomes 0.',
      id: 'Perulangan berlanjut selama `number` tidak sama dengan 0. Ia mencetak angka, menguranginya, dan berhenti ketika menjadi 0.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'while-q2',
    type: 'tf',
    prompt: {
      en: 'A `while` loop is generally more efficient than a `for` loop for iterating over a collection.',
      id: 'Perulangan `while` umumnya lebih efisien daripada perulangan `for` untuk melakukan iterasi pada sebuah koleksi.',
    },
    answer: false,
    explanation: {
      en: 'A `for` loop is often safer and more idiomatic for iterating over collections in Rust, as it handles bounds checks and iteration logic automatically, which can lead to better optimizations.',
      id: 'Perulangan `for` seringkali lebih aman dan lebih idiomatik untuk melakukan iterasi pada koleksi di Rust, karena ia menangani pemeriksaan batas dan logika iterasi secara otomatis, yang dapat menghasilkan optimisasi yang lebih baik.',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'while-q3',
    type: 'mcq',
    prompt: {
      en: 'What happens if the condition of a `while` loop never becomes false?',
      id: 'Apa yang terjadi jika kondisi perulangan `while` tidak pernah menjadi salah?',
    },
    choices: [
      { en: 'A compile-time error occurs', id: 'Terjadi eror saat kompilasi' },
      {
        en: 'The loop runs forever (an infinite loop)',
        id: 'Perulangan berjalan selamanya (perulangan tak terbatas)',
      },
      { en: 'The loop runs once and then stops', id: 'Perulangan berjalan sekali lalu berhenti' },
      { en: 'The program panics', id: 'Program akan panic' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'If the condition remains true indefinitely, the loop will continue executing its body without end, which is known as an infinite loop.',
      id: 'Jika kondisi tetap benar tanpa batas, perulangan akan terus mengeksekusi badannya tanpa akhir, yang dikenal sebagai perulangan tak terbatas.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'while-q4',
    type: 'fib',
    prompt: {
      en: "A `while` loop is a good choice when you don't know beforehand how many times the loop should _____.",
      id: 'Perulangan `while` adalah pilihan yang baik ketika Anda tidak tahu sebelumnya berapa kali perulangan harus _____.',
    },
    acceptableAnswers: ['run', 'execute', 'iterate', 'berjalan', 'dieksekusi', 'beriterasi'],
    explanation: {
      en: '`while` is ideal for situations where the number of iterations depends on a condition that changes within the loop.',
      id: '`while` ideal untuk situasi di mana jumlah iterasi bergantung pada kondisi yang berubah di dalam perulangan.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'while-q5',
    type: 'code_fix',
    prompt: {
      en: "The following code is intended to print numbers from 1 to 5, but it's an infinite loop. What is the fix?",
      id: 'Kode berikut dimaksudkan untuk mencetak angka dari 1 hingga 5, tetapi ini adalah perulangan tak terbatas. Apa perbaikannya?',
    },
    code: 'let mut i = 1;\nwhile i <= 5 {\n   println!("{}", i);\n}',
    choices: [
      'Add `i += 1;` inside the loop.',
      'Change the condition to `while i < 5`.',
      'Change `let mut i` to `let i`.',
      'Use a `for` loop instead.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The loop variable `i` was not being incremented, causing the condition `i <= 5` to always be true. Adding `i += 1;` ensures the loop terminates.',
      id: 'Variabel perulangan `i` tidak dinaikkan nilainya, menyebabkan kondisi `i <= 5` selalu benar. Menambahkan `i += 1;` memastikan perulangan berhenti.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: loop-break-continue
  {
    id: 'loop-q1',
    type: 'mcq',
    prompt: {
      en: 'Which keyword creates a loop that runs forever until explicitly stopped?',
      id: 'Kata kunci mana yang membuat perulangan yang berjalan selamanya hingga dihentikan secara eksplisit?',
    },
    choices: [
      { en: 'while true', id: 'while true' },
      { en: 'for', id: 'for' },
      { en: 'loop', id: 'loop' },
      { en: 'repeat', id: 'repeat' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The `loop` keyword creates an infinite loop, which is often used with `break` to provide a value or stop the iteration on a certain condition.',
      id: 'Kata kunci `loop` membuat perulangan tak terbatas, yang sering digunakan dengan `break` untuk memberikan nilai atau menghentikan iterasi pada kondisi tertentu.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'loop-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let mut counter = 0;\n   let result = loop {\n       counter += 1;\n       if counter == 10 {\n           break counter * 2;\n       }\n   };\n   println!("The result is {}", result);\n}',
    expectedStdout: 'The result is 20',
    explanation: {
      en: 'The `loop` runs until `counter` is 10. The `break` statement then stops the loop and returns the value `counter * 2` (which is 20).',
      id: '`loop` berjalan hingga `counter` sama dengan 10. Pernyataan `break` kemudian menghentikan perulangan dan mengembalikan nilai `counter * 2` (yaitu 20).',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'loop-q3',
    type: 'tf',
    prompt: {
      en: 'The `continue` keyword exits the loop entirely.',
      id: 'Kata kunci `continue` keluar dari perulangan sepenuhnya.',
    },
    answer: false,
    explanation: {
      en: '`continue` skips the rest of the current iteration and starts the next one. `break` is used to exit the loop entirely.',
      id: '`continue` melewati sisa iterasi saat ini dan memulai iterasi berikutnya. `break` digunakan untuk keluar dari perulangan sepenuhnya.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'loop-q4',
    type: 'predict_output',
    prompt: {
      en: 'What numbers will be printed by this loop?',
      id: 'Angka berapa saja yang akan dicetak oleh perulangan ini?',
    },
    code: 'fn main() {\n   for number in 0..=5 {\n       if number % 2 == 0 {\n           continue;\n       }\n       println!("{}", number);\n   }\n}',
    expectedStdout: '1\n3\n5',
    explanation: {
      en: 'The `continue` keyword is executed for even numbers (0, 2, 4), skipping the `println!`. Only the odd numbers get printed.',
      id: 'Kata kunci `continue` dieksekusi untuk angka genap (0, 2, 4), melewati `println!`. Hanya angka ganjil yang dicetak.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'loop-q5',
    type: 'mcq',
    prompt: {
      en: "What are loop labels (`'label:`) used for?",
      id: "Untuk apa label perulangan (`'label:`) digunakan?",
    },
    choices: [
      {
        en: 'To name a loop for documentation.',
        id: 'Untuk menamai perulangan untuk dokumentasi.',
      },
      {
        en: 'To specify which loop to `break` or `continue` from in nested loops.',
        id: 'Untuk menentukan dari perulangan mana harus `break` atau `continue` dalam perulangan bersarang.',
      },
      { en: 'To mark a loop as private.', id: 'Untuk menandai perulangan sebagai privat.' },
      {
        en: 'To define the return type of a loop.',
        id: 'Untuk mendefinisikan tipe kembalian dari sebuah perulangan.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Loop labels are used to disambiguate `break` and `continue` statements when dealing with nested loops.',
      id: 'Label perulangan digunakan untuk membedakan pernyataan `break` dan `continue` saat berhadapan dengan perulangan bersarang.',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: for-loops
  {
    id: 'for-q1',
    type: 'predict_output',
    prompt: {
      en: 'What will this `for` loop print?',
      id: 'Apa yang akan dicetak oleh perulangan `for` ini?',
    },
    code: 'fn main() {\n   for number in 1..4 {\n       println!("{}!", number);\n   }\n}',
    expectedStdout: '1!\n2!\n3!',
    explanation: {
      en: 'The range `1..4` is exclusive of the final number, so it generates numbers 1, 2, and 3.',
      id: 'Rentang `1..4` tidak termasuk angka terakhir, jadi ia menghasilkan angka 1, 2, dan 3.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'for-q2',
    type: 'mcq',
    prompt: {
      en: 'How would you write a `for` loop that includes the final number in the range?',
      id: 'Bagaimana Anda menulis perulangan `for` yang menyertakan angka terakhir dalam rentang?',
    },
    choices: [
      { en: 'for i in 1..4', id: 'for i in 1..4' },
      { en: 'for i in 1...4', id: 'for i in 1...4' },
      { en: 'for i in 1..=4', id: 'for i in 1..=4' },
      { en: 'for i in range(1, 5)', id: 'for i in range(1, 5)' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The `..=` syntax creates a range that is inclusive of the end value.',
      id: 'Sintaks `..=` membuat rentang yang inklusif terhadap nilai akhir.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'for-q3',
    type: 'code_fix',
    prompt: {
      en: 'Fix this code to correctly iterate over the elements of the array.',
      id: 'Perbaiki kode ini untuk melakukan iterasi pada elemen-elemen array dengan benar.',
    },
    code: 'fn main() {\n   let a = [10, 20, 30, 40, 50];\n   for i in 0..a.len() {\n       println!("the value is: {}", a[i]);\n   }\n}',
    choices: [
      'This code is already correct.',
      'Change `for i in 0..a.len()` to `for element in a`.',
      'Change `for i in 0..a.len()` to `for element in a.iter()`.',
      'Both B and C are more idiomatic ways to write this loop.',
    ],
    correctIndex: 3,
    explanation: {
      en: 'While the original code works, directly iterating over the collection with `for element in a.iter()` or `for element in a` is safer and more idiomatic in Rust.',
      id: 'Meskipun kode asli berfungsi, melakukan iterasi langsung pada koleksi dengan `for element in a.iter()` atau `for element in a` lebih aman dan lebih idiomatik di Rust.',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'for-q4',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this loop using `.rev()`?',
      id: 'Apa output dari perulangan ini yang menggunakan `.rev()`?',
    },
    code: 'fn main() {\n   for number in (1..4).rev() {\n       println!("{}!", number);\n   }\n}',
    expectedStdout: '3!\n2!\n1!',
    explanation: {
      en: 'The `.rev()` method reverses the iterator, so the loop counts down from 3 to 1.',
      id: 'Metode `.rev()` membalikkan iterator, sehingga perulangan menghitung mundur dari 3 ke 1.',
    },
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'for-q5',
    type: 'tf',
    prompt: {
      en: "The variable declared in the `for` loop (e.g., `number` in `for number in ...`) consumes ownership of the collection's items by default.",
      id: 'Variabel yang dideklarasikan dalam perulangan `for` (misalnya, `number` dalam `for number in ...`) secara default mengambil alih (consume) kepemilikan item koleksi.',
    },
    answer: true,
    explanation: {
      en: '`for item in collection` will move the items out of the collection. To borrow instead, use `for item in &collection` or `for item in collection.iter()`.',
      id: '`for item in collection` akan memindahkan item keluar dari koleksi. Untuk meminjam (borrow), gunakan `for item in &collection` atau `for item in collection.iter()`.',
    },
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: collections
  // =================================================================

  // Lesson: arrays
  {
    id: 'arr-q1',
    type: 'mcq',
    prompt: {
      en: 'Which statement about Rust arrays is true?',
      id: 'Pernyataan mana tentang array Rust yang benar?',
    },
    choices: [
      {
        en: 'Arrays can grow or shrink in size at runtime.',
        id: 'Ukuran array dapat bertambah atau berkurang saat runtime.',
      },
      {
        en: 'Arrays must have a fixed size that is known at compile time.',
        id: 'Array harus memiliki ukuran tetap yang diketahui saat kompilasi.',
      },
      {
        en: 'Arrays can store elements of different types.',
        id: 'Array dapat menyimpan elemen dari tipe yang berbeda.',
      },
      { en: 'Arrays are stored on the heap.', id: 'Array disimpan di heap.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Arrays have a fixed length, and this is part of their type signature (e.g., `[i32; 5]`). They are allocated on the stack.',
      id: 'Array memiliki panjang tetap, dan ini adalah bagian dari signature tipenya (misalnya, `[i32; 5]`). Mereka dialokasikan di stack.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q2',
    type: 'tf',
    prompt: {
      en: 'Accessing an array index that is out of bounds will cause a panic in Rust.',
      id: 'Mengakses indeks array yang di luar batas akan menyebabkan panic di Rust.',
    },
    answer: true,
    explanation: {
      en: "Rust performs bounds checking. If you try to access an index that doesn't exist, the program will panic to prevent memory safety issues.",
      id: 'Rust melakukan pemeriksaan batas. Jika Anda mencoba mengakses indeks yang tidak ada, program akan panic untuk mencegah masalah keamanan memori.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q3',
    type: 'predict_output',
    prompt: {
      en: 'What will this program print?',
      id: 'Apa yang akan dicetak oleh program ini?',
    },
    code: 'fn main() {\n   let a: [i32; 5] = [1, 2, 3, 4, 5];\n   println!("The third element is {}", a[2]);\n}',
    expectedStdout: 'The third element is 3',
    explanation: {
      en: 'Array indexing is zero-based, so index `2` refers to the third element.',
      id: 'Pengindeksan array berbasis nol, jadi indeks `2` merujuk ke elemen ketiga.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q4',
    type: 'mcq',
    prompt: {
      en: 'How do you create an array of 100 elements, where each element is the number 5?',
      id: 'Bagaimana Anda membuat array dengan 100 elemen, di mana setiap elemen adalah angka 5?',
    },
    choices: [
      { en: 'let a = [5; 100];', id: 'let a = [5; 100];' },
      { en: 'let a = [100; 5];', id: 'let a = [100; 5];' },
      { en: 'let a = Array::new(100, 5);', id: 'let a = Array::new(100, 5);' },
      { en: 'let a: [i32; 100] = 5;', id: 'let a: [i32; 100] = 5;' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The syntax `[initial_value; size]` is a convenient way to initialize an array where all elements are the same.',
      id: 'Sintaks `[nilai_awal; ukuran]` adalah cara mudah untuk menginisialisasi array di mana semua elemennya sama.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q5',
    type: 'fib',
    prompt: {
      en: 'Unlike vectors, arrays are allocated on the _____.',
      id: 'Tidak seperti vektor, array dialokasikan di _____.',
    },
    acceptableAnswers: ['stack'],
    explanation: {
      en: 'Because their size is known at compile time, arrays can be allocated directly on the stack, which is faster than heap allocation.',
      id: 'Karena ukurannya diketahui saat kompilasi, array dapat dialokasikan langsung di stack, yang lebih cepat daripada alokasi heap.',
    },
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },
  // Melanjutkan dari pertanyaan sebelumnya...

  // Lesson: slices
  {
    id: 'slice-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a slice in Rust?',
      id: 'Apa itu slice di Rust?',
    },
    choices: [
      { en: 'A copy of a part of an array.', id: 'Salinan dari sebagian array.' },
      {
        en: 'A reference to a contiguous sequence of elements in a collection.',
        id: 'Referensi ke urutan elemen yang berdekatan dalam sebuah koleksi.',
      },
      { en: 'A mutable, growable list.', id: 'Daftar yang bisa diubah dan bertambah besar.' },
      {
        en: 'A fixed-size collection of different types.',
        id: 'Koleksi berukuran tetap dengan tipe yang berbeda.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'A slice allows you to borrow a section of a collection without taking ownership. It does not have ownership of its data.',
      id: 'Slice memungkinkan Anda untuk meminjam sebagian dari koleksi tanpa mengambil alih kepemilikan. Slice tidak memiliki kepemilikan atas datanya.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'slice-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let a = [10, 20, 30, 40, 50];\n   let slice = &a[1..=3];\n   println!("{:?}", slice);\n}',
    expectedStdout: '[20, 30, 40]',
    explanation: {
      en: 'The range `1..=3` is inclusive, so it includes the elements at indices 1, 2, and 3.',
      id: 'Rentang `1..=3` bersifat inklusif, jadi ia menyertakan elemen pada indeks 1, 2, dan 3.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'slice-q3',
    type: 'tf',
    prompt: {
      en: 'A slice stores its data directly.',
      id: 'Slice menyimpan datanya secara langsung.',
    },
    answer: false,
    explanation: {
      en: 'A slice is a "view" or a "borrow" of data owned by something else, like an Array or a Vector. It consists of a pointer and a length.',
      id: 'Slice adalah "tampilan" atau "pinjaman" dari data yang dimiliki oleh sesuatu yang lain, seperti Array atau Vector. Slice terdiri dari sebuah pointer dan panjang.',
    },
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-q4',
    type: 'mcq',
    prompt: {
      en: 'What is the type of a string slice?',
      id: 'Apa tipe dari string slice?',
    },
    choices: [
      { en: 'String', id: 'String' },
      { en: 'str', id: 'str' },
      { en: '&str', id: '&str' },
      { en: 'slice<char>', id: 'slice<char>' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`&str` is the type for a string slice, which is a slice of `u8` bytes that are guaranteed to be valid UTF-8.',
      id: '`&str` adalah tipe untuk string slice, yang merupakan potongan dari byte `u8` yang dijamin valid sebagai UTF-8.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'slice-q5',
    type: 'code_fix',
    prompt: {
      en: 'Fix the function signature to correctly accept a slice of integers.',
      id: 'Perbaiki signature fungsi agar dapat menerima slice integer dengan benar.',
    },
    code: 'fn sum_slice(slice: [i32]) -> i32 { /* ... */ }',
    choices: [
      'fn sum_slice(slice: &[i32]) -> i32 { /* ... */ }',
      'fn sum_slice(slice: Vec<i32>) -> i32 { /* ... */ }',
      'fn sum_slice(slice: &Vec<i32>) -> i32 { /* ... */ }',
      'fn sum_slice(slice: i32[]) -> i32 { /* ... */ }',
    ],
    correctIndex: 0,
    explanation: {
      en: 'To pass a slice to a function, you need to use a reference, `&[T]`. This is more flexible as it can accept references to arrays, vectors, or parts of them.',
      id: 'Untuk memberikan slice ke sebuah fungsi, Anda perlu menggunakan referensi, `&[T]`. Ini lebih fleksibel karena dapat menerima referensi ke array, vektor, atau bagian dari keduanya.',
    },
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: tuples
  {
    id: 'tuple-q1',
    type: 'mcq',
    prompt: {
      en: 'Which statement about tuples is correct?',
      id: 'Pernyataan mana tentang tuple yang benar?',
    },
    choices: [
      {
        en: 'All elements in a tuple must have the same type.',
        id: 'Semua elemen dalam tuple harus memiliki tipe yang sama.',
      },
      {
        en: 'Tuples have a fixed length and can hold elements of different types.',
        id: 'Tuple memiliki panjang tetap dan dapat menampung elemen dari tipe yang berbeda.',
      },
      {
        en: 'Tuples are accessed using square bracket indexing like `my_tuple[0]`.',
        id: 'Tuple diakses menggunakan pengindeksan kurung siku seperti `my_tuple[0]`.',
      },
      { en: 'Tuples are growable.', id: 'Ukuran tuple dapat bertambah.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Tuples are a simple way to group together a variety of values into one compound type. Their size is fixed once declared.',
      id: 'Tuple adalah cara sederhana untuk mengelompokkan berbagai nilai ke dalam satu tipe majemuk. Ukurannya tetap setelah dideklarasikan.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let tup = (500, 6.4, "hello");\n   let (x, y, z) = tup;\n   println!("The value of y is: {}", y);\n}',
    expectedStdout: 'The value of y is: 6.4',
    explanation: {
      en: 'This is an example of "destructuring," where the tuple\'s values are broken apart into three separate variables.',
      id: 'Ini adalah contoh dari "destructuring," di mana nilai-nilai tuple dipecah menjadi tiga variabel terpisah.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-q3',
    type: 'mcq',
    prompt: {
      en: 'How do you access the second element of a tuple named `my_tup`?',
      id: 'Bagaimana Anda mengakses elemen kedua dari sebuah tuple bernama `my_tup`?',
    },
    choices: [
      { en: 'my_tup[1]', id: 'my_tup[1]' },
      { en: 'my_tup.get(1)', id: 'my_tup.get(1)' },
      { en: 'my_tup.1', id: 'my_tup.1' },
      { en: 'my_tup(1)', id: 'my_tup(1)' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Tuple elements are accessed by using a period (`.`) followed by the zero-based index of the value.',
      id: 'Elemen tuple diakses dengan menggunakan titik (`.`) diikuti oleh indeks berbasis nol dari nilai tersebut.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-q4',
    type: 'fib',
    prompt: {
      en: 'A tuple without any values, `()`, is called the _____ type.',
      id: 'Sebuah tuple tanpa nilai, `()`, disebut tipe _____.',
    },
    acceptableAnswers: ['unit', 'unit type'],
    explanation: {
      en: "The unit type `()` has only one value, also `()`, and is implicitly returned by functions that don't return any other value.",
      id: 'Tipe unit `()` hanya memiliki satu nilai, yaitu `()`, dan secara implisit dikembalikan oleh fungsi yang tidak mengembalikan nilai lain.',
    },
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'tuple-q5',
    type: 'tf',
    prompt: {
      en: 'Functions can return tuples to effectively return multiple values.',
      id: 'Fungsi dapat mengembalikan tuple untuk secara efektif mengembalikan beberapa nilai.',
    },
    answer: true,
    explanation: {
      en: 'Returning a tuple is the idiomatic way for a function to return multiple values in Rust.',
      id: 'Mengembalikan tuple adalah cara yang idiomatik bagi sebuah fungsi untuk mengembalikan beberapa nilai di Rust.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: vectors
  {
    id: 'vec-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a key difference between a vector and an array?',
      id: 'Apa perbedaan utama antara vektor dan array?',
    },
    choices: [
      {
        en: 'Vectors are stored on the stack, while arrays are on the heap.',
        id: 'Vektor disimpan di stack, sedangkan array di heap.',
      },
      {
        en: 'Vectors can grow or shrink in size, while arrays have a fixed size.',
        id: 'Ukuran vektor dapat bertambah atau berkurang, sedangkan array memiliki ukuran tetap.',
      },
      {
        en: 'Vector elements must be of the same type, while array elements can differ.',
        id: 'Elemen vektor harus memiliki tipe yang sama, sedangkan elemen array bisa berbeda.',
      },
      {
        en: 'Vectors are accessed with `.get()`, arrays with `[]`.',
        id: 'Vektor diakses dengan `.get()`, array dengan `[]`.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "Vectors are growable list types stored on the heap, making them flexible when you don't know the size of the list at compile time.",
      id: 'Vektor adalah tipe daftar yang dapat bertambah besar dan disimpan di heap, membuatnya fleksibel ketika Anda tidak mengetahui ukuran daftar saat kompilasi.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q2',
    type: 'predict_output',
    prompt: {
      en: 'What will be printed to the console?',
      id: 'Apa yang akan dicetak ke konsol?',
    },
    code: 'fn main() {\n   let mut v = Vec::new();\n   v.push(5);\n   v.push(6);\n   v.push(7);\n   println!("{:?}", v);\n}',
    expectedStdout: '[5, 6, 7]',
    explanation: {
      en: 'The code creates a new vector and adds three elements to it using the `.push()` method.',
      id: 'Kode ini membuat vektor baru dan menambahkan tiga elemen ke dalamnya menggunakan metode `.push()`.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q3',
    type: 'tf',
    prompt: {
      en: 'Accessing a vector element with `v[index]` can cause a panic if the index is out of bounds.',
      id: 'Mengakses elemen vektor dengan `v[index]` dapat menyebabkan panic jika indeksnya di luar batas.',
    },
    answer: true,
    explanation: {
      en: 'Using square brackets `[]` for access will panic on an invalid index. Using `v.get(index)` is a safer alternative that returns an `Option`.',
      id: 'Menggunakan kurung siku `[]` untuk akses akan menyebabkan panic pada indeks yang tidak valid. Menggunakan `v.get(index)` adalah alternatif yang lebih aman yang mengembalikan `Option`.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q4',
    type: 'mcq',
    prompt: {
      en: 'What does the `vec!` macro do?',
      id: 'Apa yang dilakukan oleh makro `vec!`?',
    },
    choices: [
      {
        en: 'It clears a vector, removing all elements.',
        id: 'Membersihkan vektor, menghapus semua elemen.',
      },
      { en: 'It returns the capacity of a vector.', id: 'Mengembalikan kapasitas sebuah vektor.' },
      {
        en: 'It provides a convenient way to create a `Vec<T>` with initial values.',
        id: 'Menyediakan cara mudah untuk membuat `Vec<T>` dengan nilai awal.',
      },
      { en: 'It converts an array to a vector.', id: 'Mengubah array menjadi vektor.' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The `vec!` macro is the most common way to create a vector with known elements, for example: `let v = vec![1, 2, 3];`.',
      id: 'Makro `vec!` adalah cara paling umum untuk membuat vektor dengan elemen yang sudah diketahui, contohnya: `let v = vec![1, 2, 3];`.',
    },
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q5',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let mut v = vec![100, 32, 57];\n   for i in &mut v {\n       *i += 50;\n   }\n   println!("{:?}", v);\n}',
    expectedStdout: '[150, 82, 107]',
    explanation: {
      en: 'The loop iterates over mutable references to each element in the vector. The `*` dereferences `i` so we can modify the value it refers to.',
      id: 'Perulangan ini melakukan iterasi pada referensi mutable ke setiap elemen dalam vektor. Tanda `*` melakukan dereferensi pada `i` sehingga kita dapat memodifikasi nilai yang dirujuknya.',
    },
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: functions-modules
  // =================================================================

  // Lesson: functions
  {
    id: 'func-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you specify the return type of a function in Rust?',
      id: 'Bagaimana cara menentukan tipe kembalian (return type) dari sebuah fungsi di Rust?',
    },
    choices: [
      { en: ': i32', id: ': i32' },
      { en: '-> i32', id: '-> i32' },
      { en: '=> i32', id: '=> i32' },
      { en: 'returns i32', id: 'returns i32' },
    ],
    correctIndex: 1,
    explanation: {
      en: "The return type is specified after an arrow `->` following the function's parameter list.",
      id: 'Tipe kembalian ditentukan setelah tanda panah `->` yang mengikuti daftar parameter fungsi.',
    },
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'func-q2',
    type: 'code_fix',
    prompt: {
      en: 'Fix this function so it correctly returns the sum.',
      id: 'Perbaiki fungsi ini agar mengembalikan hasil penjumlahan dengan benar.',
    },
    code: 'fn plus_one(x: i32) -> i32 {\n   x + 1;\n}',
    choices: [
      'fn plus_one(x: i32) -> i32 {\n   return x + 1;\n}',
      'fn plus_one(x: i32) -> i32 {\n   x + 1\n}',
      'Both A and B are correct.',
      'fn plus_one(x: i32) -> i32 {\n   let result = x + 1;\n}',
    ],
    correctIndex: 2,
    explanation: {
      en: 'In Rust, the last expression in a function is automatically returned. A semicolon turns an expression into a statement, which does not return a value. Both using `return` explicitly or removing the semicolon from the last expression are valid fixes.',
      id: 'Di Rust, ekspresi terakhir dalam sebuah fungsi secara otomatis dikembalikan. Titik koma mengubah ekspresi menjadi pernyataan, yang tidak mengembalikan nilai. Menggunakan `return` secara eksplisit atau menghapus titik koma dari ekspresi terakhir adalah perbaikan yang valid.',
    },
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'func-q3',
    type: 'tf',
    prompt: {
      en: 'In a function signature, you must declare the type of each parameter.',
      id: 'Dalam signature fungsi, Anda harus mendeklarasikan tipe dari setiap parameter.',
    },
    answer: true,
    explanation: {
      en: 'Rust is a statically typed language and requires explicit type annotations for all function parameters.',
      id: 'Rust adalah bahasa yang diketik secara statis dan memerlukan anotasi tipe eksplisit untuk semua parameter fungsi.',
    },
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'func-q4',
    type: 'mcq',
    prompt: {
      en: 'What is the difference between a statement and an expression?',
      id: 'Apa perbedaan antara pernyataan (statement) dan ekspresi (expression)?',
    },
    choices: [
      { en: 'There is no difference.', id: 'Tidak ada perbedaan.' },
      {
        en: 'Statements perform actions and do not return a value, while expressions evaluate to a value.',
        id: 'Pernyataan melakukan aksi dan tidak mengembalikan nilai, sedangkan ekspresi mengevaluasi menjadi sebuah nilai.',
      },
      {
        en: 'Expressions must end with a semicolon.',
        id: 'Ekspresi harus diakhiri dengan titik koma.',
      },
      {
        en: 'Statements can only be used inside functions.',
        id: 'Pernyataan hanya bisa digunakan di dalam fungsi.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: '`let x = 6;` is a statement. `5 + 6` is an expression because it evaluates to the value 11.',
      id: '`let x = 6;` adalah sebuah pernyataan. `5 + 6` adalah sebuah ekspresi karena ia mengevaluasi menjadi nilai 11.',
    },
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'func-q5',
    type: 'predict_output',
    prompt: {
      en: 'What will be printed?',
      id: 'Apa yang akan dicetak?',
    },
    code: 'fn main() {\n   let y = {\n       let x = 3;\n       x + 1\n   };\n   println!("The value of y is: {}", y);\n}',
    expectedStdout: 'The value of y is: 4',
    explanation: {
      en: 'The curly braces `{...}` create a new scope which is also an expression. The last line of the block `x + 1` is the value that the block evaluates to, which is then assigned to `y`.',
      id: 'Kurung kurawal `{...}` membuat cakupan baru yang juga merupakan sebuah ekspresi. Baris terakhir dari blok `x + 1` adalah nilai yang dievaluasi oleh blok tersebut, yang kemudian di-assign ke `y`.',
    },
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: module-path, package-crate, modules, etc. (Combined for clarity)
  {
    id: 'mod-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a "crate" in Rust?',
      id: 'Apa itu "crate" di Rust?',
    },
    choices: [
      { en: 'A data structure for storing items.', id: 'Struktur data untuk menyimpan item.' },
      { en: 'A keyword for creating loops.', id: 'Kata kunci untuk membuat perulangan.' },
      {
        en: 'The smallest unit of compilation; a library or binary.',
        id: 'Unit kompilasi terkecil; sebuah pustaka atau biner.',
      },
      { en: 'A file containing package metadata.', id: 'File yang berisi metadata paket.' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'A crate is a binary or library. The crate root is a source file that the Rust compiler starts from and makes up the root module of the crate.',
      id: 'Crate adalah sebuah biner atau pustaka. Akar crate (crate root) adalah file sumber tempat kompiler Rust memulai dan yang membentuk modul akar dari crate tersebut.',
    },
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'mod-q2',
    type: 'tf',
    prompt: {
      en: 'By default, all items (functions, structs, etc.) in a module are private.',
      id: 'Secara default, semua item (fungsi, struct, dll.) dalam sebuah modul bersifat privat.',
    },
    answer: true,
    explanation: {
      en: "Rust's privacy default is private. To expose an item outside a module, you must use the `pub` keyword.",
      id: 'Default privasi Rust adalah privat. Untuk mengekspos item di luar modul, Anda harus menggunakan kata kunci `pub`.',
    },
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'path-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you call a public function `my_func` inside a module `my_mod`?',
      id: 'Bagaimana cara memanggil fungsi publik `my_func` di dalam modul `my_mod`?',
    },
    choices: [
      { en: 'my_mod.my_func()', id: 'my_mod.my_func()' },
      { en: 'my_mod->my_func()', id: 'my_mod->my_func()' },
      { en: 'my_mod::my_func()', id: 'my_mod::my_func()' },
      { en: 'my_mod/my_func()', id: 'my_mod/my_func()' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The double colon `::` is the path separator used to navigate the module hierarchy.',
      id: 'Titik dua ganda `::` adalah pemisah path yang digunakan untuk menavigasi hierarki modul.',
    },
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'path-q2',
    type: 'mcq',
    prompt: {
      en: 'Inside a child module, which keyword refers to the parent module?',
      id: 'Di dalam modul anak, kata kunci mana yang merujuk ke modul induk?',
    },
    choices: [
      { en: 'parent', id: 'parent' },
      { en: 'super', id: 'super' },
      { en: 'crate', id: 'crate' },
      { en: 'self', id: 'self' },
    ],
    correctIndex: 1,
    explanation: {
      en: "`super` is used to access items from the parent module's scope, similar to `..` in a filesystem path.",
      id: '`super` digunakan untuk mengakses item dari cakupan modul induk, mirip dengan `..` dalam path sistem file.',
    },
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'pkg-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a "package" in Rust?',
      id: 'Apa itu "package" di Rust?',
    },
    choices: [
      { en: 'A single Rust file.', id: 'Satu file Rust.' },
      {
        en: 'One or more crates that provide a set of functionality.',
        id: 'Satu atau lebih crate yang menyediakan seperangkat fungsionalitas.',
      },
      { en: 'A special type of comment.', id: 'Jenis komentar khusus.' },
      { en: 'A tool for formatting Rust code.', id: 'Alat untuk memformat kode Rust.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'A package contains a `Cargo.toml` file and holds one or more crates. A package must contain at least one crate (either a library or a binary).',
      id: 'Sebuah package berisi file `Cargo.toml` dan menampung satu atau lebih crate. Sebuah package harus berisi setidaknya satu crate (baik pustaka maupun biner).',
    },
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: structs-enums
  // =================================================================

  // Lesson: structs
  {
    id: 'struct-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you define a basic struct in Rust?',
      id: 'Bagaimana cara mendefinisikan struct dasar di Rust?',
    },
    choices: [
      {
        en: 'struct User { name: String, age: u32 }',
        id: 'struct User { name: String, age: u32 }',
      },
      { en: 'class User { name: String, age: u32 }', id: 'class User { name: String, age: u32 }' },
      {
        en: 'type User = { name: String, age: u32 }',
        id: 'type User = { name: String, age: u32 }',
      },
      {
        en: 'let User = struct { name: String, age: u32 }',
        id: 'let User = struct { name: String, age: u32 }',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Structs are defined using the `struct` keyword, followed by the name and a set of key-value pairs for its fields.',
      id: 'Struct didefinisikan menggunakan kata kunci `struct`, diikuti oleh nama dan serangkaian pasangan kunci-nilai untuk field-nya.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code that instantiates and accesses a struct?',
      id: 'Apa output dari kode yang membuat instance dan mengakses struct ini?',
    },
    code: 'struct User { username: String, active: bool }\nfn main() {\n   let user1 = User { username: String::from("rustacean"), active: true };\n   println!("{}", user1.username);\n}',
    expectedStdout: 'rustacean',
    explanation: {
      en: 'You access the fields of a struct instance using dot notation.',
      id: 'Anda mengakses field dari instance struct menggunakan notasi titik.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-q3',
    type: 'tf',
    prompt: {
      en: 'Once a struct instance is created as immutable, you cannot change any of its fields.',
      id: 'Setelah instance struct dibuat sebagai immutable, Anda tidak dapat mengubah field-nya sama sekali.',
    },
    answer: true,
    explanation: {
      en: 'If the instance is immutable (declared with `let`), none of its fields can be changed. The entire instance must be marked as `mut` to allow modification of any field.',
      id: 'Jika instance bersifat immutable (dideklarasikan dengan `let`), tidak ada field-nya yang dapat diubah. Seluruh instance harus ditandai sebagai `mut` untuk memungkinkan modifikasi pada field mana pun.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-q4',
    type: 'mcq',
    prompt: {
      en: 'What is field init shorthand syntax?',
      id: 'Apa itu sintaks singkatan inisialisasi field (field init shorthand)?',
    },
    choices: [
      {
        en: 'A way to automatically generate fields.',
        id: 'Cara untuk menghasilkan field secara otomatis.',
      },
      {
        en: 'A way to initialize a struct when variable names match field names.',
        id: 'Cara untuk menginisialisasi struct ketika nama variabel cocok dengan nama field.',
      },
      {
        en: 'A way to make all fields public.',
        id: 'Cara untuk membuat semua field menjadi publik.',
      },
      { en: 'A macro for struct initialization.', id: 'Makro untuk inisialisasi struct.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'If a function parameter or local variable has the same name as a struct field, you can use the name directly without `field: variable`, which is called field init shorthand.',
      id: 'Jika parameter fungsi atau variabel lokal memiliki nama yang sama dengan field struct, Anda dapat menggunakan nama tersebut secara langsung tanpa `field: variabel`, yang disebut field init shorthand.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-q5',
    type: 'code_fix',
    prompt: {
      en: 'This code fails because `user1` is immutable. How do you fix it to allow changing the username?',
      id: 'Kode ini gagal karena `user1` bersifat immutable. Bagaimana cara memperbaikinya agar bisa mengubah username?',
    },
    code: 'struct User { username: String, active: bool }\nfn main() {\n   let user1 = User { username: String::from("user1"), active: true };\n   user1.username = String::from("new_user");\n}',
    choices: [
      'Change `let user1` to `let mut user1`.',
      'Add `mut` to the `username` field in the struct definition.',
      'Re-declare `user1` with `let user1 = ...` again.',
      'It cannot be fixed.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'Mutability is a property of the binding, not the struct itself. The `mut` keyword must be used when creating the instance.',
      id: 'Mutability adalah properti dari ikatan (binding), bukan dari struct itu sendiri. Kata kunci `mut` harus digunakan saat membuat instance.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  // Melanjutkan dari pertanyaan sebelumnya...

  // Lesson: struct-update
  {
    id: 'struct-update-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the purpose of the `..` syntax when creating a struct instance?',
      id: 'Apa tujuan dari sintaks `..` saat membuat instance struct?',
    },
    choices: [
      { en: 'To specify a range of values.', id: 'Untuk menentukan rentang nilai.' },
      {
        en: 'To create a struct with default values for all fields.',
        id: 'Untuk membuat struct dengan nilai default untuk semua field.',
      },
      {
        en: 'To populate the remaining fields from another instance of the same struct.',
        id: 'Untuk mengisi field yang tersisa dari instance lain dari struct yang sama.',
      },
      {
        en: 'To indicate that some fields are optional.',
        id: 'Untuk menunjukkan bahwa beberapa field bersifat opsional.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The struct update syntax `..` allows you to create a new instance by copying most of the values from an old instance, only specifying the fields you want to change.',
      id: 'Sintaks pembaruan struct `..` memungkinkan Anda membuat instance baru dengan menyalin sebagian besar nilai dari instance lama, hanya dengan menentukan field yang ingin Anda ubah.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-update-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the `username` of `user2`?',
      id: 'Apa `username` dari `user2`?',
    },
    code: 'struct User { username: String, email: String, active: bool }\nfn main() {\n   let user1 = User { email: String::from("a@ex.com"), username: String::from("user1"), active: true };\n   let user2 = User { email: String::from("b@ex.com"), ..user1 };\n   println!("{}", user2.username);\n}',
    expectedStdout: 'user1',
    explanation: {
      en: 'The `..user1` syntax copies the `username` and `active` fields from `user1` into `user2`. Note that this moves the `username` string, so `user1` can no longer be used in its entirety.',
      id: 'Sintaks `..user1` menyalin field `username` dan `active` dari `user1` ke `user2`. Perhatikan bahwa ini memindahkan string `username`, sehingga `user1` tidak dapat lagi digunakan secara keseluruhan.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-update-q3',
    type: 'tf',
    prompt: {
      en: 'Using struct update syntax always performs a deep copy of all fields.',
      id: 'Menggunakan sintaks pembaruan struct selalu melakukan salinan dalam (deep copy) dari semua field.',
    },
    answer: false,
    explanation: {
      en: "Struct update syntax follows Rust's ownership rules. It will move data for types that don't implement the `Copy` trait (like `String`) and copy data for types that do (like `i32` or `bool`).",
      id: 'Sintaks pembaruan struct mengikuti aturan kepemilikan Rust. Ini akan memindahkan (move) data untuk tipe yang tidak mengimplementasikan trait `Copy` (seperti `String`) dan menyalin (copy) data untuk tipe yang mengimplementasikannya (seperti `i32` atau `bool`).',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-update-q4',
    type: 'fib',
    prompt: {
      en: 'The struct update syntax must always come _____ in the field list.',
      id: 'Sintaks pembaruan struct harus selalu diletakkan di _____ dalam daftar field.',
    },
    acceptableAnswers: ['last', 'terakhir'],
    explanation: {
      en: 'The `..` syntax must be last to specify that any remaining fields should get their values from the other instance.',
      id: 'Sintaks `..` harus berada di akhir untuk menentukan bahwa setiap field yang tersisa harus mendapatkan nilainya dari instance lain.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-update-q5',
    type: 'code_fix',
    prompt: {
      en: 'This code has an error after using `user1` to create `user2`. Why?',
      id: 'Kode ini memiliki eror setelah menggunakan `user1` untuk membuat `user2`. Mengapa?',
    },
    code: 'struct User { username: String, email: String }\nfn main() {\n   let user1 = User { username: String::from("a"), email: String::from("b") };\n   let user2 = User { username: String::from("c"), ..user1 };\n   println!("{}", user1.email);\n}',
    choices: [
      'Because `user1.email` was moved to `user2`.',
      'Because `user1` was completely deallocated.',
      'Because you cannot print fields from the old struct.',
      'Because the struct does not implement `Display`.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The `String` type does not implement the `Copy` trait. When `user2` is created, the value for the `email` field is moved from `user1`, making `user1.email` invalid.',
      id: 'Tipe `String` tidak mengimplementasikan trait `Copy`. Ketika `user2` dibuat, nilai untuk field `email` dipindahkan (moved) dari `user1`, membuat `user1.email` menjadi tidak valid.',
    },
    topicId: 'structs-enums',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: tuple-structs
  {
    id: 'tuple-struct-q1',
    type: 'mcq',
    prompt: {
      en: 'What defines a tuple struct?',
      id: 'Apa yang mendefinisikan sebuah tuple struct?',
    },
    choices: [
      {
        en: 'It is a struct where all fields must be tuples.',
        id: 'Struct di mana semua field harus berupa tuple.',
      },
      {
        en: 'It is a struct with named fields, but the values are tuples.',
        id: 'Struct dengan field bernama, tetapi nilainya adalah tuple.',
      },
      {
        en: 'It is a struct defined with a name, but its fields have no names.',
        id: 'Struct yang didefinisikan dengan nama, tetapi field-nya tidak memiliki nama.',
      },
      { en: 'It is an alias for a tuple type.', id: 'Alias untuk tipe tuple.' },
    ],
    correctIndex: 2,
    explanation: {
      en: "Tuple structs have the added meaning a struct name provides, but don't have named fields. They are useful when the names of the fields would be redundant, like `struct Color(i32, i32, i32);`.",
      id: 'Tuple struct memiliki makna tambahan yang diberikan oleh nama struct, tetapi tidak memiliki field bernama. Mereka berguna ketika nama field akan menjadi berlebihan, seperti `struct Color(i32, i32, i32);`.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-struct-q2',
    type: 'predict_output',
    prompt: {
      en: 'How do you access the value `255` from the `blue` instance?',
      id: 'Bagaimana cara mengakses nilai `255` dari instance `blue`?',
    },
    code: 'struct Color(i32, i32, i32);\nfn main() {\n   let blue = Color(0, 0, 255);\n   println!("{}", blue.2);\n}',
    expectedStdout: '255',
    explanation: {
      en: 'You access the fields of a tuple struct using dot notation followed by a zero-based index, similar to a regular tuple.',
      id: 'Anda mengakses field dari tuple struct menggunakan notasi titik diikuti oleh indeks berbasis nol, mirip dengan tuple biasa.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-struct-q3',
    type: 'tf',
    prompt: {
      en: 'Each tuple struct you define is its own distinct type, even if they have the exact same fields.',
      id: 'Setiap tuple struct yang Anda definisikan adalah tipe yang berbeda, bahkan jika mereka memiliki field yang sama persis.',
    },
    answer: true,
    explanation: {
      en: '`struct Point(i32, i32);` and `struct Vector(i32, i32);` are not interchangeable, even though they have the same structure. This is a key advantage over using a plain tuple.',
      id: '`struct Point(i32, i32);` dan `struct Vector(i32, i32);` tidak dapat dipertukarkan, meskipun memiliki struktur yang sama. Ini adalah keuntungan utama dibandingkan menggunakan tuple biasa.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'tuple-struct-q4',
    type: 'code_fix',
    prompt: {
      en: 'Destructure the `origin` tuple struct to get its `x` and `y` values.',
      id: 'Lakukan destructuring pada tuple struct `origin` untuk mendapatkan nilai `x` dan `y`-nya.',
    },
    code: 'struct Point(i32, i32);\nfn main() {\n   let origin = Point(0, 0);\n   // Your code here to get x and y\n}',
    choices: [
      'let Point(x, y) = origin;',
      'let (x, y) = origin;',
      'let {x, y} = origin;',
      'let x = origin[0]; let y = origin[1];',
    ],
    correctIndex: 0,
    explanation: {
      en: "You can destructure a tuple struct with a `let` statement, similar to how you would destructure a regular tuple, but you include the struct's name.",
      id: 'Anda dapat melakukan destructuring pada tuple struct dengan pernyataan `let`, mirip dengan cara Anda melakukan destructuring pada tuple biasa, tetapi Anda menyertakan nama struct-nya.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-struct-q5',
    type: 'mcq',
    prompt: {
      en: 'When is a tuple struct a good choice?',
      id: 'Kapan tuple struct menjadi pilihan yang baik?',
    },
    choices: [
      {
        en: 'When you have a very large number of fields.',
        id: 'Ketika Anda memiliki jumlah field yang sangat banyak.',
      },
      {
        en: 'When you want to give a tuple a name to add meaning and type safety.',
        id: 'Ketika Anda ingin memberi nama pada tuple untuk menambahkan makna dan keamanan tipe.',
      },
      {
        en: 'When the fields need to be mutable by default.',
        id: 'Ketika field harus bersifat mutable secara default.',
      },
      {
        en: 'When you want to store different data types.',
        id: 'Ketika Anda ingin menyimpan tipe data yang berbeda.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Tuple structs are perfect when a tuple would suffice, but you want to enforce a specific type for function parameters or return values to prevent mixing up different kinds of tuples.',
      id: 'Tuple struct sangat cocok ketika tuple saja sudah cukup, tetapi Anda ingin memberlakukan tipe tertentu untuk parameter fungsi atau nilai kembalian untuk mencegah tercampurnya berbagai jenis tuple.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: unit-structs
  {
    id: 'unit-struct-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a unit-like struct?',
      id: 'Apa itu unit-like struct?',
    },
    choices: [
      { en: 'A struct with exactly one field.', id: 'Struct dengan tepat satu field.' },
      {
        en: 'A struct that can only be instantiated once.',
        id: 'Struct yang hanya bisa dibuat instance-nya sekali.',
      },
      { en: 'A struct with no fields.', id: 'Struct tanpa field.' },
      {
        en: 'A struct that is used as a unit of measurement.',
        id: 'Struct yang digunakan sebagai satuan pengukuran.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Unit-like structs are structs that have no fields at all. They are defined by the `struct` keyword, a name, and a semicolon.',
      id: 'Unit-like struct adalah struct yang tidak memiliki field sama sekali. Mereka didefinisikan dengan kata kunci `struct`, sebuah nama, dan titik koma.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'unit-struct-q2',
    type: 'tf',
    prompt: {
      en: 'The main purpose of a unit-like struct is to store data.',
      id: 'Tujuan utama dari unit-like struct adalah untuk menyimpan data.',
    },
    answer: false,
    explanation: {
      en: 'Since they have no fields, they cannot store data. They are useful for implementing a trait on a type without needing to hold any data.',
      id: 'Karena tidak memiliki field, mereka tidak dapat menyimpan data. Mereka berguna untuk mengimplementasikan trait pada sebuah tipe tanpa perlu menyimpan data apa pun.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'unit-struct-q3',
    type: 'code_fix',
    prompt: {
      en: 'What is the correct way to define a unit-like struct named `AlwaysEqual`?',
      id: 'Apa cara yang benar untuk mendefinisikan unit-like struct bernama `AlwaysEqual`?',
    },
    code: 'struct AlwaysEqual()',
    choices: [
      'struct AlwaysEqual;',
      'struct AlwaysEqual {};',
      'struct AlwaysEqual();',
      'Both A and B are correct.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The idiomatic way to define a unit-like struct is with a semicolon immediately after the name.',
      id: 'Cara idiomatik untuk mendefinisikan unit-like struct adalah dengan titik koma langsung setelah namanya.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'unit-struct-q4',
    type: 'fib',
    prompt: {
      en: "Unit-like structs are most useful when you need to implement a _____ on some type but don't have any data to store in it.",
      id: 'Unit-like struct paling berguna ketika Anda perlu mengimplementasikan _____ pada suatu tipe tetapi tidak memiliki data untuk disimpan di dalamnya.',
    },
    acceptableAnswers: ['trait'],
    explanation: {
      en: 'For example, you might create a marker trait and implement it on a unit struct to represent a certain capability or state.',
      id: 'Sebagai contoh, Anda mungkin membuat marker trait dan mengimplementasikannya pada unit struct untuk merepresentasikan kemampuan atau keadaan tertentu.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'unit-struct-q5',
    type: 'predict_output',
    prompt: {
      en: 'What will this code print?',
      id: 'Apa yang akan dicetak oleh kode ini?',
    },
    code: 'use std::fmt;\nstruct MyUnitStruct;\nimpl fmt::Display for MyUnitStruct {\n   fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n       write!(f, "Hello from unit struct!")\n   }\n}\nfn main() {\n   let s = MyUnitStruct;\n   println!("{}", s);\n}',
    expectedStdout: 'Hello from unit struct!',
    explanation: {
      en: 'This demonstrates a primary use case: the `MyUnitStruct` type itself holds no data, but it is used as a concrete type on which to implement the `Display` trait.',
      id: 'Ini menunjukkan kasus penggunaan utama: tipe `MyUnitStruct` itu sendiri tidak menyimpan data, tetapi digunakan sebagai tipe konkret untuk mengimplementasikan trait `Display`.',
    },
    topicId: 'structs-enums',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: struct-methods
  {
    id: 'method-q1',
    type: 'mcq',
    prompt: {
      en: 'Where are methods for a struct defined in Rust?',
      id: 'Di mana metode untuk sebuah struct didefinisikan di Rust?',
    },
    choices: [
      { en: 'Inside the `struct` definition block.', id: 'Di dalam blok definisi `struct`.' },
      {
        en: 'In a separate file named `methods.rs`.',
        id: 'Di file terpisah bernama `methods.rs`.',
      },
      {
        en: 'Inside an `impl` (implementation) block.',
        id: 'Di dalam blok `impl` (implementasi).',
      },
      {
        en: 'Globally, with the struct name as the first parameter.',
        id: 'Secara global, dengan nama struct sebagai parameter pertama.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: 'All functions associated with a struct, including methods and associated functions, are defined within an `impl` block.',
      id: 'Semua fungsi yang terkait dengan sebuah struct, termasuk metode dan fungsi terkait (associated functions), didefinisikan di dalam blok `impl`.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'method-q2',
    type: 'mcq',
    prompt: {
      en: 'What is the first parameter of a method that borrows the instance immutably?',
      id: 'Apa parameter pertama dari sebuah metode yang meminjam instance secara immutable?',
    },
    choices: [
      { en: 'self', id: 'self' },
      { en: '&self', id: '&self' },
      { en: '&mut self', id: '&mut self' },
      { en: 'this', id: 'this' },
    ],
    correctIndex: 1,
    explanation: {
      en: "`&self` is shorthand for `self: &Self`. It gives the method read-only access to the struct instance's data.",
      id: '`&self` adalah singkatan dari `self: &Self`. Ini memberikan metode akses hanya-baca ke data instance struct.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'method-q3',
    type: 'tf',
    prompt: {
      en: 'An associated function is a function within an `impl` block that does not take `self` as its first parameter.',
      id: 'Fungsi terkait (associated function) adalah fungsi di dalam blok `impl` yang tidak mengambil `self` sebagai parameter pertamanya.',
    },
    answer: true,
    explanation: {
      en: "Associated functions are often used as constructors, like `String::new()`, because they are associated with the type but don't need an instance of it to be called.",
      id: 'Fungsi terkait sering digunakan sebagai konstruktor, seperti `String::new()`, karena mereka terkait dengan tipe tetapi tidak memerlukan instance dari tipe tersebut untuk dipanggil.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'method-q4',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this program?',
      id: 'Apa output dari program ini?',
    },
    code: 'struct Rectangle { width: u32, height: u32 }\nimpl Rectangle {\n   fn area(&self) -> u32 {\n       self.width * self.height\n   }\n}\nfn main() {\n   let rect = Rectangle { width: 30, height: 50 };\n   println!("Area: {}", rect.area());\n}',
    expectedStdout: 'Area: 1500',
    explanation: {
      en: "The `area` method is called on the `rect` instance. It takes an immutable reference `&self` and calculates the product of the instance's `width` and `height` fields.",
      id: 'Metode `area` dipanggil pada instance `rect`. Metode ini mengambil referensi immutable `&self` dan menghitung hasil kali dari field `width` dan `height` instance tersebut.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'method-q5',
    type: 'code_fix',
    prompt: {
      en: 'The `scale` method needs to modify the rectangle. What should its `self` parameter be?',
      id: 'Metode `scale` perlu memodifikasi persegi panjang. Seharusnya parameter `self`-nya apa?',
    },
    code: 'struct Rectangle { width: u32, height: u32 }\nimpl Rectangle {\n   fn scale(&self, factor: u32) {\n       self.width *= factor;\n       self.height *= factor;\n   }\n}',
    choices: [
      'Change `&self` to `&mut self`.',
      'Change `&self` to `self`.',
      'Remove the `self` parameter.',
      'The code is already correct.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'To mutate the instance, the method must take a mutable reference, `&mut self`. This allows it to write to the fields of the struct.',
      id: 'Untuk mengubah (mutate) instance, metode harus mengambil referensi mutable, `&mut self`. Ini memungkinkannya untuk menulis ke field dari struct.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: enums
  {
    id: 'enum-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the primary purpose of an `enum` in Rust?',
      id: 'Apa tujuan utama dari `enum` di Rust?',
    },
    choices: [
      {
        en: 'To create a list of integer constants.',
        id: 'Untuk membuat daftar konstanta integer.',
      },
      {
        en: 'To define a type that can have one of several possible variants.',
        id: 'Untuk mendefinisikan tipe yang dapat memiliki salah satu dari beberapa varian yang mungkin.',
      },
      {
        en: 'To group related functions together.',
        id: 'Untuk mengelompokkan fungsi-fungsi terkait.',
      },
      {
        en: 'To create a collection that can store different types.',
        id: 'Untuk membuat koleksi yang dapat menyimpan tipe yang berbeda.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Enums (enumerations) allow you to define a type by enumerating its possible variants. For example, `enum IpAddrKind { V4, V6 }`.',
      id: 'Enum (enumerasi) memungkinkan Anda untuk mendefinisikan sebuah tipe dengan menyebutkan varian-varian yang mungkin. Contohnya, `enum IpAddrKind { V4, V6 }`.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-q2',
    type: 'tf',
    prompt: {
      en: 'Enum variants in Rust can hold data.',
      id: 'Varian enum di Rust dapat menampung data.',
    },
    answer: true,
    explanation: {
      en: 'This is a powerful feature. A variant can hold no data, a single value, a tuple, or even a struct, e.g., `enum Message { Write(String), ChangeColor(i32, i32, i32) }`.',
      id: 'Ini adalah fitur yang kuat. Sebuah varian bisa tidak menampung data, satu nilai, sebuah tuple, atau bahkan sebuah struct, contohnya, `enum Message { Write(String), ChangeColor(i32, i32, i32) }`.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-q3',
    type: 'predict_output',
    prompt: {
      en: 'What will this code print?',
      id: 'Apa yang akan dicetak oleh kode ini?',
    },
    code: 'enum Message { Quit, Write(String) }\nfn main() {\n   let msg = Message::Write(String::from("hello"));\n   match msg {\n       Message::Quit => println!("Quit"),\n       Message::Write(text) => println!("Text: {}", text),\n   }\n}',
    expectedStdout: 'Text: hello',
    explanation: {
      en: 'The `match` expression checks the variant of `msg`. Since it is `Message::Write`, it executes the second arm, binding the contained `String` to the variable `text`.',
      id: 'Ekspresi `match` memeriksa varian dari `msg`. Karena variannya adalah `Message::Write`, ia mengeksekusi cabang kedua, mengikat `String` yang terkandung ke variabel `text`.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-q4',
    type: 'mcq',
    prompt: {
      en: 'Which standard library enum is commonly used to represent the presence or absence of a value?',
      id: 'Enum dari pustaka standar manakah yang biasa digunakan untuk merepresentasikan ada atau tidaknya suatu nilai?',
    },
    choices: [
      { en: 'Result<T, E>', id: 'Result<T, E>' },
      { en: 'Option<T>', id: 'Option<T>' },
      { en: 'Presence<T>', id: 'Presence<T>' },
      { en: 'Maybe<T>', id: 'Maybe<T>' },
    ],
    correctIndex: 1,
    explanation: {
      en: '`Option<T>` is a very common enum with two variants: `Some(T)` to represent a value being present, and `None` to represent its absence.',
      id: '`Option<T>` adalah enum yang sangat umum dengan dua varian: `Some(T)` untuk merepresentasikan adanya nilai, dan `None` untuk merepresentasikan ketiadaannya.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-q5',
    type: 'fib',
    prompt: {
      en: 'The _____ control flow operator is perfect for handling `enum` values.',
      id: 'Operator alur kontrol _____ sangat cocok untuk menangani nilai `enum`.',
    },
    acceptableAnswers: ['match'],
    explanation: {
      en: '`match` allows you to compare a value against a series of patterns and execute code based on which pattern matches. It is exhaustive, meaning you must handle every possible variant of an enum.',
      id: '`match` memungkinkan Anda membandingkan nilai dengan serangkaian pola dan mengeksekusi kode berdasarkan pola mana yang cocok. Ini bersifat menyeluruh (exhaustive), artinya Anda harus menangani setiap varian yang mungkin dari sebuah enum.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  // Melanjutkan dari pertanyaan sebelumnya...

  // Lesson: enum-methods
  {
    id: 'enum-method-q1',
    type: 'tf',
    prompt: {
      en: 'Just like structs, you can define methods on enums using an `impl` block.',
      id: 'Sama seperti struct, Anda dapat mendefinisikan metode pada enum menggunakan blok `impl`.',
    },
    answer: true,
    explanation: {
      en: "You can implement methods on enums to provide functionality related to the enum's variants.",
      id: 'Anda dapat mengimplementasikan metode pada enum untuk menyediakan fungsionalitas yang terkait dengan varian enum tersebut.',
    },
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-method-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this program?',
      id: 'Apa output dari program ini?',
    },
    code: 'enum Message { Quit, Write { text: String } }\nimpl Message {\n   fn call(&self) {\n       match self {\n           Message::Quit => println!("Quitting..."),\n           Message::Write { text } => println!("Writing: {}", text),\n       }\n   }\n}\nfn main() {\n   let m = Message::Write { text: String::from("Hi") };\n   m.call();\n}',
    expectedStdout: 'Writing: Hi',
    explanation: {
      en: 'The `call` method is defined on the `Message` enum. When called on an instance of `Message::Write`, it matches the variant and prints the associated text.',
      id: 'Metode `call` didefinisikan pada enum `Message`. Ketika dipanggil pada instance `Message::Write`, ia akan cocok dengan varian tersebut dan mencetak teks yang terkait.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-method-q3',
    type: 'code_fix',
    prompt: {
      en: 'Complete the `is_quit` method to return `true` only for the `Quit` variant.',
      id: 'Lengkapi metode `is_quit` untuk mengembalikan `true` hanya untuk varian `Quit`.',
    },
    code: 'enum Message { Quit, Move { x: i32, y: i32 } }\nimpl Message {\n   fn is_quit(&self) -> bool {\n       // Your code here\n   }\n}',
    choices: [
      'match self { Message::Quit => true, _ => false }',
      'if self == Message::Quit { true } else { false }',
      'self == Message::Quit',
      'All of the above are valid ways.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'Using a `match` statement is the most idiomatic and often clearest way to check enum variants. The `_` is a wildcard that matches any other variant.',
      id: 'Menggunakan pernyataan `match` adalah cara yang paling idiomatik dan seringkali paling jelas untuk memeriksa varian enum. `_` adalah wildcard yang cocok dengan varian lainnya.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-method-q4',
    type: 'mcq',
    prompt: {
      en: 'In an enum method, how does `self` relate to the enum variants?',
      id: 'Dalam metode enum, bagaimana `self` berhubungan dengan varian enum?',
    },
    choices: [
      {
        en: '`self` refers to the enum type itself, not a specific variant.',
        id: '`self` merujuk pada tipe enum itu sendiri, bukan varian spesifik.',
      },
      {
        en: '`self` refers to the specific instance of the enum, including its variant and any associated data.',
        id: '`self` merujuk pada instance spesifik dari enum, termasuk variannya dan data terkait.',
      },
      {
        en: '`self` can only be used if the enum has no data.',
        id: '`self` hanya dapat digunakan jika enum tidak memiliki data.',
      },
      {
        en: '`self` must be taken by value, not by reference.',
        id: '`self` harus diambil berdasarkan nilai, bukan referensi.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The `self`, `&self`, or `&mut self` parameter in an enum method refers to the actual instance you call the method on, allowing you to `match` on its variant and use its data.',
      id: 'Parameter `self`, `&self`, atau `&mut self` dalam metode enum merujuk pada instance aktual tempat Anda memanggil metode, memungkinkan Anda untuk melakukan `match` pada variannya dan menggunakan datanya.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-method-q5',
    type: 'tf',
    prompt: {
      en: 'You cannot define associated functions (like constructors) for enums.',
      id: 'Anda tidak dapat mendefinisikan fungsi terkait (seperti konstruktor) untuk enum.',
    },
    answer: false,
    explanation: {
      en: 'You can absolutely define associated functions for enums. For example, you could create an `impl Message { fn new_quit_message() -> Message { Message::Quit } }`.',
      id: 'Anda tentu saja dapat mendefinisikan fungsi terkait untuk enum. Misalnya, Anda bisa membuat `impl Message { fn new_quit_message() -> Message { Message::Quit } }`.',
    },
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: module-system-advanced
  // =================================================================

  // Lesson: use-statements
  {
    id: 'use-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the primary purpose of the `use` keyword?',
      id: 'Apa tujuan utama dari kata kunci `use`?',
    },
    choices: [
      {
        en: 'To include an external library in the project.',
        id: 'Untuk menyertakan pustaka eksternal dalam proyek.',
      },
      { en: 'To define a new module.', id: 'Untuk mendefinisikan modul baru.' },
      {
        en: 'To bring a path into the current scope, allowing for shorter references.',
        id: 'Untuk membawa path ke dalam cakupan saat ini, memungkinkan referensi yang lebih pendek.',
      },
      {
        en: 'To export a function to be used by other modules.',
        id: 'Untuk mengekspor fungsi agar dapat digunakan oleh modul lain.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: "`use` creates a shortcut to an item, so you don't have to write out its full path every time you use it.",
      id: '`use` membuat pintasan ke sebuah item, sehingga Anda tidak perlu menulis path lengkapnya setiap kali menggunakannya.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'use-q2',
    type: 'code_fix',
    prompt: {
      en: 'Add a `use` statement to make this code compile.',
      id: 'Tambahkan pernyataan `use` agar kode ini dapat dikompilasi.',
    },
    code: 'fn main() {\n   let mut map = HashMap::new();\n   map.insert(1, 2);\n}',
    choices: [
      'use std::collections::HashMap;',
      'use std::HashMap;',
      'import std::collections::HashMap;',
      'include std::collections::HashMap;',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The `HashMap` type is located in the `std::collections` module. The `use` statement brings it into the current scope so it can be referred to directly.',
      id: 'Tipe `HashMap` terletak di modul `std::collections`. Pernyataan `use` membawanya ke dalam cakupan saat ini sehingga dapat dirujuk secara langsung.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'use-q3',
    type: 'tf',
    prompt: {
      en: 'The idiomatic way to bring a struct into scope is to specify its full path, e.g., `use std::collections::HashMap;`.',
      id: 'Cara idiomatik untuk membawa struct ke dalam cakupan adalah dengan menentukan path lengkapnya, contohnya, `use std::collections::HashMap;`.',
    },
    answer: true,
    explanation: {
      en: 'For structs, enums, and other items, the convention is to bring the full type into scope. For functions, the convention is to bring the parent module into scope (`use std::collections;`) and then call the function with its full path (`collections::HashMap::new();`). This helps clarify where the function is from.',
      id: 'Untuk struct, enum, dan item lainnya, konvensinya adalah membawa tipe lengkap ke dalam cakupan. Untuk fungsi, konvensinya adalah membawa modul induk ke dalam cakupan (`use std::collections;`) dan kemudian memanggil fungsi dengan path lengkapnya (`collections::HashMap::new();`). Ini membantu memperjelas asal fungsi tersebut.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'use-q4',
    type: 'mcq',
    prompt: {
      en: 'How can you rename a type being brought into scope to avoid name conflicts?',
      id: 'Bagaimana cara mengganti nama tipe yang dibawa ke dalam cakupan untuk menghindari konflik nama?',
    },
    choices: [
      {
        en: 'You cannot rename types with `use`.',
        id: 'Anda tidak dapat mengganti nama tipe dengan `use`.',
      },
      { en: 'use std::fmt::Result as FmtResult;', id: 'use std::fmt::Result as FmtResult;' },
      {
        en: 'use std::fmt::Result rename FmtResult;',
        id: 'use std::fmt::Result rename FmtResult;',
      },
      { en: 'use FmtResult = std::fmt::Result;', id: 'use FmtResult = std::fmt::Result;' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The `as` keyword provides a new local name for the type, which is very useful for resolving ambiguity between types with the same name from different crates.',
      id: 'Kata kunci `as` memberikan nama lokal baru untuk tipe tersebut, yang sangat berguna untuk menyelesaikan ambiguitas antara tipe dengan nama yang sama dari crate yang berbeda.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'use-q5',
    type: 'fib',
    prompt: {
      en: 'To make a `use` statement available to code outside the current module, you can combine it with the _____ keyword.',
      id: 'Untuk membuat pernyataan `use` tersedia bagi kode di luar modul saat ini, Anda dapat menggabungkannya dengan kata kunci _____.',
    },
    acceptableAnswers: ['pub'],
    explanation: {
      en: "A `pub use` statement re-exports an item, meaning that code that can access your module can now also access the item you brought into scope. This is common when building a library's public API.",
      id: 'Pernyataan `pub use` mengekspor ulang sebuah item, artinya kode yang dapat mengakses modul Anda sekarang juga dapat mengakses item yang Anda bawa ke dalam cakupan. Ini umum dilakukan saat membangun API publik sebuah pustaka.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: nested-use
  {
    id: 'nested-use-q1',
    type: 'mcq',
    prompt: {
      en: 'How can you bring both `std::io::Error` and `std::io::Write` into scope with a single `use` line?',
      id: 'Bagaimana cara membawa `std::io::Error` dan `std::io::Write` ke dalam cakupan dengan satu baris `use`?',
    },
    choices: [
      { en: 'use std::io::{Error, Write};', id: 'use std::io::{Error, Write};' },
      { en: 'use std::io::*;', id: 'use std::io::*;' },
      {
        en: 'use std::io::Error; use std::io::Write;',
        id: 'use std::io::Error; use std::io::Write;',
      },
      { en: 'use std::io::{Error + Write};', id: 'use std::io::{Error + Write};' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'You can use nested paths with curly braces `{}` to bring multiple items from the same parent path into scope concisely.',
      id: 'Anda dapat menggunakan path bersarang dengan kurung kurawal `{}` untuk membawa beberapa item dari path induk yang sama ke dalam cakupan secara ringkas.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'nested-use-q2',
    type: 'predict_output',
    prompt: {
      en: 'What items does `use std::cmp::{self, Ordering};` bring into scope?',
      id: 'Item apa saja yang dibawa oleh `use std::cmp::{self, Ordering};` ke dalam cakupan?',
    },
    code: '// This is a conceptual question, no code to run.',
    expectedStdout: 'It brings `std::cmp` and `std::cmp::Ordering` into scope.',
    explanation: {
      en: 'The `self` keyword inside a nested path refers to the parent path itself. So this line makes both `cmp` and `Ordering` available in the current scope.',
      id: 'Kata kunci `self` di dalam path bersarang merujuk pada path induk itu sendiri. Jadi baris ini membuat `cmp` dan `Ordering` tersedia di cakupan saat ini.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'nested-use-q3',
    type: 'tf',
    prompt: {
      en: 'The glob operator (`*`) brings all public items from a path into scope.',
      id: 'Operator glob (`*`) membawa semua item publik dari sebuah path ke dalam cakupan.',
    },
    answer: true,
    explanation: {
      en: 'For example, `use std::collections::*;` will bring `HashMap`, `Vec`, `BTreeMap`, etc., into the current scope. This should be used sparingly to avoid polluting the namespace.',
      id: 'Contohnya, `use std::collections::*;` akan membawa `HashMap`, `Vec`, `BTreeMap`, dll., ke dalam cakupan saat ini. Ini harus digunakan secukupnya untuk menghindari polusi namespace.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'nested-use-q4',
    type: 'code_fix',
    prompt: {
      en: 'Consolidate these two `use` statements into a single line.',
      id: 'Gabungkan dua pernyataan `use` ini menjadi satu baris.',
    },
    code: 'use std::fs::File;\nuse std::io::Read;',
    choices: [
      'use std::{fs::File, io::Read};',
      'use std::fs::File, std::io::Read;',
      'use std::(fs::File, io::Read);',
      'This cannot be consolidated.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'Nested paths can be used even when the immediate parents are different, as long as they share a common ancestor path (`std` in this case).',
      id: 'Path bersarang dapat digunakan bahkan ketika induk langsungnya berbeda, selama mereka berbagi path leluhur yang sama (`std` dalam kasus ini).',
    },
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'nested-use-q5',
    type: 'mcq',
    prompt: {
      en: 'When is using the glob operator (`*`) generally discouraged?',
      id: 'Kapan penggunaan operator glob (`*`) umumnya tidak disarankan?',
    },
    choices: [
      {
        en: 'When importing from the `prelude` module.',
        id: 'Saat mengimpor dari modul `prelude`.',
      },
      { en: 'In library code that will be shared.', id: 'Dalam kode pustaka yang akan dibagikan.' },
      { en: 'In tests.', id: 'Dalam pengujian (tests).' },
      { en: 'Both B and C.', id: 'Keduanya B dan C.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Using the glob operator in libraries can make it hard for users of your code to determine where types are defined. In tests, it is sometimes considered acceptable for convenience.',
      id: 'Menggunakan operator glob di pustaka dapat menyulitkan pengguna kode Anda untuk menentukan di mana tipe didefinisikan. Dalam pengujian, terkadang dianggap dapat diterima untuk kenyamanan.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: use-external-crates
  {
    id: 'external-crate-q1',
    type: 'mcq',
    prompt: {
      en: 'Where must you declare an external crate dependency for a Cargo-based project?',
      id: 'Di mana Anda harus mendeklarasikan dependensi crate eksternal untuk proyek berbasis Cargo?',
    },
    choices: [
      {
        en: 'In the `main.rs` file using `extern crate`.',
        id: 'Di file `main.rs` menggunakan `extern crate`.',
      },
      { en: 'In a `dependencies.txt` file.', id: 'Di file `dependencies.txt`.' },
      {
        en: 'In the `[dependencies]` section of the `Cargo.toml` file.',
        id: 'Di bagian `[dependencies]` dari file `Cargo.toml`.',
      },
      {
        en: 'In the `[lib]` section of the `Cargo.toml` file.',
        id: 'Di bagian `[lib]` dari file `Cargo.toml`.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: "Cargo, Rust's package manager, reads the `Cargo.toml` file to determine which crates to download from crates.io and link against.",
      id: 'Cargo, manajer paket Rust, membaca file `Cargo.toml` untuk menentukan crate mana yang akan diunduh dari crates.io dan ditautkan.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q2',
    type: 'tf',
    prompt: {
      en: 'In modern Rust (2018 edition and later), `extern crate` is usually not necessary.',
      id: 'Di Rust modern (edisi 2018 dan setelahnya), `extern crate` biasanya tidak diperlukan.',
    },
    answer: true,
    explanation: {
      en: 'After adding a dependency to `Cargo.toml`, you can typically just use a `use` statement (e.g., `use rand::Rng;`) without needing `extern crate rand;` first. The compiler handles it automatically.',
      id: 'Setelah menambahkan dependensi ke `Cargo.toml`, Anda biasanya bisa langsung menggunakan pernyataan `use` (misalnya, `use rand::Rng;`) tanpa perlu `extern crate rand;` terlebih dahulu. Kompiler menanganinya secara otomatis.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q3',
    type: 'fib',
    prompt: {
      en: 'The official registry for open-source Rust crates is called _____.',
      id: 'Registri resmi untuk crate Rust sumber terbuka disebut _____.',
    },
    acceptableAnswers: ['crates.io'],
    explanation: {
      en: 'crates.io is the central repository where the Rust community publishes and downloads packages.',
      id: 'crates.io adalah repositori pusat tempat komunitas Rust mempublikasikan dan mengunduh paket.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q4',
    type: 'code_fix',
    prompt: {
      en: 'Assuming `rand` is added to `Cargo.toml`, how do you bring its `Rng` trait into scope?',
      id: 'Dengan asumsi `rand` ditambahkan ke `Cargo.toml`, bagaimana cara membawa trait `Rng`-nya ke dalam cakupan?',
    },
    code: '// Your use statement here\nfn main() {\n   let mut rng = rand::thread_rng();\n   let n: u32 = rng.gen();\n}',
    choices: ['use rand::Rng;', 'use Rng from rand;', 'use rand;', 'use crate::rand::Rng;'],
    correctIndex: 0,
    explanation: {
      en: 'You refer to the crate by its name, followed by `::` and the path to the item you want to use. Traits often need to be in scope for their methods to be available.',
      id: 'Anda merujuk ke crate dengan namanya, diikuti oleh `::` dan path ke item yang ingin Anda gunakan. Trait sering kali perlu berada dalam cakupan agar metodenya tersedia.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q5',
    type: 'mcq',
    prompt: {
      en: 'How would you specify a specific version of a crate in `Cargo.toml`?',
      id: 'Bagaimana cara menentukan versi spesifik dari sebuah crate di `Cargo.toml`?',
    },
    choices: [
      { en: 'rand = "0.8.5"', id: 'rand = "0.8.5"' },
      { en: 'rand: "0.8.5"', id: 'rand: "0.8.5"' },
      { en: 'rand("0.8.5")', id: 'rand("0.8.5")' },
      { en: 'rand depends on "0.8.5"', id: 'rand depends on "0.8.5"' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The standard format is `crate-name = "version-string"`, where the version string follows Semantic Versioning rules.',
      id: 'Format standarnya adalah `nama-crate = "string-versi"`, di mana string versi mengikuti aturan Semantic Versioning.',
    },
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: memory-management
  // =================================================================

  // Lesson: ownership
  {
    id: 'owner-q1',
    type: 'mcq',
    prompt: {
      en: 'Which of these is NOT one of the three ownership rules in Rust?',
      id: 'Manakah di antara ini yang BUKAN salah satu dari tiga aturan kepemilikan di Rust?',
    },
    choices: [
      {
        en: "Each value in Rust has a variable that's called its owner.",
        id: 'Setiap nilai di Rust memiliki variabel yang disebut pemiliknya.',
      },
      {
        en: 'There can only be one owner at a time.',
        id: 'Hanya boleh ada satu pemilik pada satu waktu.',
      },
      {
        en: 'When the owner goes out of scope, the value will be dropped.',
        id: 'Ketika pemilik keluar dari cakupan, nilainya akan dihapus (dropped).',
      },
      {
        en: 'All values must be manually deallocated by the programmer.',
        id: 'Semua nilai harus didealokasi secara manual oleh programmer.',
      },
    ],
    correctIndex: 3,
    explanation: {
      en: "Rust's ownership system is designed to manage memory automatically without a garbage collector, so manual deallocation is not required.",
      id: 'Sistem kepemilikan Rust dirancang untuk mengelola memori secara otomatis tanpa garbage collector, jadi dealokasi manual tidak diperlukan.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'owner-q2',
    type: 'predict_output',
    prompt: {
      en: 'Why does this code fail to compile?',
      id: 'Mengapa kode ini gagal dikompilasi?',
    },
    code: 'fn main() {\n   let s1 = String::from("hello");\n   let s2 = s1;\n   println!("{}, world!", s1);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation: {
      en: 'When `s2` is assigned `s1`, ownership of the `String` data is moved from `s1` to `s2`. After the move, `s1` is no longer valid and cannot be used.',
      id: 'Ketika `s2` di-assign `s1`, kepemilikan data `String` dipindahkan dari `s1` ke `s2`. Setelah pemindahan, `s1` tidak lagi valid dan tidak dapat digunakan.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'owner-q3',
    type: 'mcq',
    prompt: {
      en: 'Which of these types implements the `Copy` trait by default?',
      id: 'Tipe manakah di antara ini yang mengimplementasikan trait `Copy` secara default?',
    },
    choices: [
      { en: 'String', id: 'String' },
      { en: 'Vec<T>', id: 'Vec<T>' },
      { en: 'i32', id: 'i32' },
      { en: 'Box<T>', id: 'Box<T>' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Simple scalar types like integers (`i32`), booleans (`bool`), and floating-point numbers are stored on the stack and implement the `Copy` trait. When assigned, their bits are simply copied, and the old variable remains valid.',
      id: 'Tipe skalar sederhana seperti integer (`i32`), boolean (`bool`), dan angka floating-point disimpan di stack dan mengimplementasikan trait `Copy`. Ketika di-assign, bit-bitnya hanya disalin, dan variabel lama tetap valid.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'owner-q4',
    type: 'tf',
    prompt: {
      en: 'When a function takes ownership of a value, the value is moved into the function, and the original variable becomes invalid (if the type is not `Copy`).',
      id: 'Ketika sebuah fungsi mengambil alih kepemilikan sebuah nilai, nilai tersebut dipindahkan ke dalam fungsi, dan variabel asli menjadi tidak valid (jika tipenya bukan `Copy`).',
    },
    answer: true,
    explanation: {
      en: "Passing a value to a function is semantically similar to assignment. Ownership is transferred to the function's parameter, and the value will be dropped when the function ends, unless ownership is returned.",
      id: 'Memberikan nilai ke sebuah fungsi secara semantik mirip dengan assignment. Kepemilikan ditransfer ke parameter fungsi, dan nilainya akan dihapus (dropped) saat fungsi berakhir, kecuali jika kepemilikan dikembalikan.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'owner-q5',
    type: 'code_fix',
    prompt: {
      en: 'How can you make a deep copy of a `String` so that both variables remain valid?',
      id: 'Bagaimana cara membuat salinan dalam (deep copy) dari `String` agar kedua variabel tetap valid?',
    },
    code: 'fn main() {\n   let s1 = String::from("hello");\n   let s2 = s1; // How to change this line?\n   println!("s1 = {}, s2 = {}", s1, s2);\n}',
    choices: ['let s2 = s1.clone();', 'let s2 = &s1;', 'let s2 = *s1;', 'let s2 = copy s1;'],
    correctIndex: 0,
    explanation: {
      en: 'The `.clone()` method explicitly creates a deep copy of the heap data, creating a new, independent `String`. This is a more expensive operation than moving.',
      id: 'Metode `.clone()` secara eksplisit membuat salinan dalam dari data heap, menciptakan `String` baru yang independen. Ini adalah operasi yang lebih mahal daripada memindahkan (moving).',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  // Melanjutkan dari pertanyaan sebelumnya...

  // Lesson: borrowing-ref
  {
    id: 'borrow-q1',
    type: 'mcq',
    prompt: {
      en: 'What is "borrowing" in Rust?',
      id: 'Apa itu "borrowing" (meminjam) di Rust?',
    },
    choices: [
      {
        en: 'Temporarily taking ownership of a value.',
        id: 'Mengambil alih kepemilikan nilai untuk sementara.',
      },
      {
        en: 'Creating a reference to a value without taking ownership.',
        id: 'Membuat referensi ke sebuah nilai tanpa mengambil alih kepemilikan.',
      },
      {
        en: 'Making a deep copy of a value.',
        id: 'Membuat salinan dalam (deep copy) dari sebuah nilai.',
      },
      { en: 'Converting a value to a raw pointer.', id: 'Mengubah nilai menjadi raw pointer.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Borrowing allows you to use a value without taking ownership. You create a reference (`&`), which acts like a pointer but with compile-time safety checks from the borrow checker.',
      id: 'Meminjam (borrowing) memungkinkan Anda menggunakan nilai tanpa mengambil alih kepemilikan. Anda membuat sebuah referensi (`&`), yang bertindak seperti pointer tetapi dengan pemeriksaan keamanan waktu kompilasi dari borrow checker.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'borrow-q2',
    type: 'tf',
    prompt: {
      en: 'By default, references are immutable.',
      id: 'Secara default, referensi bersifat immutable.',
    },
    answer: true,
    explanation: {
      en: 'Just like variables, references are immutable by default. You cannot modify the value through an `&T` reference. You need a mutable reference, `&mut T`, to do so.',
      id: 'Sama seperti variabel, referensi bersifat immutable secara default. Anda tidak dapat memodifikasi nilai melalui referensi `&T`. Anda memerlukan referensi mutable, `&mut T`, untuk melakukannya.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'borrow-q3',
    type: 'code_fix',
    prompt: {
      en: 'Fix this code by passing a reference to the function instead of moving ownership.',
      id: 'Perbaiki kode ini dengan memberikan referensi ke fungsi alih-alih memindahkan kepemilikan.',
    },
    code: 'fn main() {\n   let s = String::from("hello");\n   calculate_length(s);\n   println!("The length of \'{}\' is still available here.", s);\n}\nfn calculate_length(s: String) -> usize {\n   s.len()\n}',
    choices: [
      'Change `calculate_length(s)` to `calculate_length(&s)` and the parameter to `s: &String`.',
      'Change the function to return the String: `-> (String, usize)`.',
      'Clone `s` before passing it: `calculate_length(s.clone())`.',
      'All of the above are valid ways to solve the problem.',
    ],
    correctIndex: 3,
    explanation: {
      en: 'While all options would make the code compile, passing a reference (`&s`) is the most efficient and idiomatic solution as it avoids unnecessary data copies or complex return types.',
      id: 'Meskipun semua opsi akan membuat kode dapat dikompilasi, memberikan referensi (`&s`) adalah solusi yang paling efisien dan idiomatik karena menghindari penyalinan data yang tidak perlu atau tipe kembalian yang kompleks.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'borrow-q4',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let mut s = String::from("hello");\n   let r1 = &s;\n   let r2 = &s;\n   println!("{} and {}", r1, r2);\n}',
    expectedStdout: 'hello and hello',
    explanation: {
      en: 'This code is valid because you can have multiple immutable references to the same piece of data simultaneously.',
      id: 'Kode ini valid karena Anda dapat memiliki beberapa referensi immutable ke data yang sama secara bersamaan.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'borrow-q5',
    type: 'fib',
    prompt: {
      en: 'The action of creating a reference is called _____.',
      id: 'Tindakan membuat referensi disebut _____.',
    },
    acceptableAnswers: ['borrowing', 'meminjam'],
    explanation: {
      en: 'When you create a reference (`&`), you are borrowing the value for a certain scope.',
      id: 'Ketika Anda membuat referensi (`&`), Anda sedang meminjam (borrowing) nilai tersebut untuk cakupan tertentu.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: mutable-ref
  {
    id: 'mut-ref-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the most important rule about mutable references?',
      id: 'Apa aturan terpenting tentang referensi mutable?',
    },
    choices: [
      {
        en: 'You can have as many mutable references as you want.',
        id: 'Anda dapat memiliki referensi mutable sebanyak yang Anda inginkan.',
      },
      {
        en: 'You can only have one mutable reference to a particular piece of data in a particular scope.',
        id: 'Anda hanya boleh memiliki satu referensi mutable ke data tertentu dalam cakupan tertentu.',
      },
      {
        en: 'Mutable references can only be created for data on the heap.',
        id: 'Referensi mutable hanya dapat dibuat untuk data di heap.',
      },
      {
        en: 'A mutable reference automatically makes a copy of the data.',
        id: 'Referensi mutable secara otomatis membuat salinan data.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "This rule is key to Rust's prevention of data races at compile time. You can have either one mutable reference or any number of immutable references, but not both.",
      id: 'Aturan ini adalah kunci pencegahan data race di Rust pada waktu kompilasi. Anda boleh memiliki satu referensi mutable atau beberapa referensi immutable, tetapi tidak keduanya.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mut-ref-q2',
    type: 'predict_output',
    prompt: {
      en: 'Why does this code fail to compile?',
      id: 'Mengapa kode ini gagal dikompilasi?',
    },
    code: 'fn main() {\n   let mut s = String::from("hello");\n   let r1 = &mut s;\n   let r2 = &mut s;\n   println!("{}, {}", r1, r2);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation: {
      en: 'This violates the rule of only having one mutable reference at a time. Rust prevents this to avoid potential data races where two references could try to modify the same data concurrently.',
      id: 'Ini melanggar aturan hanya boleh memiliki satu referensi mutable pada satu waktu. Rust mencegah ini untuk menghindari potensi data race di mana dua referensi dapat mencoba memodifikasi data yang sama secara bersamaan.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mut-ref-q3',
    type: 'code_fix',
    prompt: {
      en: 'Fix this function to accept and modify the string.',
      id: 'Perbaiki fungsi ini agar menerima dan memodifikasi string.',
    },
    code: 'fn main() {\n   let mut s = String::from("hello");\n   change(&s);\n}\nfn change(some_string: &String) {\n   some_string.push_str(", world");\n}',
    choices: [
      'Change the parameter to `&mut String` and the argument to `&mut s`.',
      'Change the parameter to `String` and return a new `String`.',
      'Remove the `&` from the parameter type.',
      'Add `mut` inside the function: `let mut some_string = ...`.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'To modify a borrowed value, the reference itself must be mutable (`&mut T`). This must be specified at both the call site (`&mut s`) and in the function signature (`some_string: &mut String`).',
      id: 'Untuk memodifikasi nilai yang dipinjam, referensi itu sendiri harus mutable (`&mut T`). Ini harus ditentukan baik di lokasi pemanggilan (`&mut s`) maupun di signature fungsi (`some_string: &mut String`).',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'mut-ref-q4',
    type: 'tf',
    prompt: {
      en: 'You cannot have an immutable reference while a mutable reference to the same value exists.',
      id: 'Anda tidak dapat memiliki referensi immutable saat referensi mutable ke nilai yang sama ada.',
    },
    answer: true,
    explanation: {
      en: "If you have a mutable reference, you cannot have any other references (mutable or immutable). Users of an immutable reference don't expect the value to suddenly change.",
      id: 'Jika Anda memiliki referensi mutable, Anda tidak dapat memiliki referensi lain (baik mutable maupun immutable). Pengguna referensi immutable tidak mengharapkan nilainya tiba-tiba berubah.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mut-ref-q5',
    type: 'predict_output',
    prompt: {
      en: 'Is this code valid? If so, what does it print?',
      id: 'Apakah kode ini valid? Jika ya, apa yang dicetaknya?',
    },
    code: 'fn main() {\n   let mut s = String::from("hello");\n   {\n       let r1 = &mut s;\n       r1.push_str(" world");\n   }\n   let r2 = &s;\n   println!("{}", r2);\n}',
    expectedStdout: 'hello world',
    explanation: {
      en: 'This code is valid. The mutable reference `r1` goes out of scope at the closing curly brace `}`. After that point, it is safe to create a new (immutable) reference `r2`.',
      id: 'Kode ini valid. Referensi mutable `r1` keluar dari cakupan pada kurung kurawal penutup `}`. Setelah titik itu, aman untuk membuat referensi baru (immutable) `r2`.',
    },
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: dangling-references
  {
    id: 'dangle-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a dangling reference?',
      id: 'Apa itu dangling reference (referensi menjuntai)?',
    },
    choices: [
      {
        en: 'A reference to a value that has been deallocated or moved.',
        id: 'Referensi ke nilai yang telah didealokasi atau dipindahkan.',
      },
      {
        en: 'A reference that has not been initialized.',
        id: 'Referensi yang belum diinisialisasi.',
      },
      {
        en: 'A reference that points to the null address.',
        id: 'Referensi yang menunjuk ke alamat null.',
      },
      { en: 'A reference that is mutable.', id: 'Referensi yang bersifat mutable.' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'A dangling reference points to a memory location that no longer contains the data that the reference was created for, because that data has been deallocated.',
      id: 'Dangling reference menunjuk ke lokasi memori yang tidak lagi berisi data yang menjadi tujuan pembuatan referensi tersebut, karena data tersebut telah didealokasi.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q2',
    type: 'tf',
    prompt: {
      en: 'The Rust compiler prevents dangling references at compile time.',
      id: 'Kompiler Rust mencegah dangling references pada waktu kompilasi.',
    },
    answer: true,
    explanation: {
      en: 'This is a core safety guarantee of Rust. The borrow checker analyzes lifetimes to ensure that no reference can outlive the data it points to.',
      id: 'Ini adalah jaminan keamanan inti dari Rust. Borrow checker menganalisis lifetime untuk memastikan tidak ada referensi yang dapat hidup lebih lama dari data yang dirujuknya.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'dangle-q3',
    type: 'predict_output',
    prompt: {
      en: 'Why is this function guaranteed by the compiler to NOT create a dangling reference?',
      id: 'Mengapa fungsi ini dijamin oleh kompiler TIDAK akan membuat dangling reference?',
    },
    code: 'fn no_dangle() -> String {\n   let s = String::from("hello");\n   s\n}',
    expectedStdout: 'This code is valid and does not create a dangling reference.',
    explanation: {
      en: 'The function returns the `String` itself, not a reference to it. This transfers ownership of the string to the calling scope, so the data remains valid.',
      id: 'Fungsi ini mengembalikan `String` itu sendiri, bukan referensi ke sana. Ini mentransfer kepemilikan string ke cakupan pemanggil, sehingga data tetap valid.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q4',
    type: 'code_fix',
    prompt: {
      en: 'The following function fails to compile because it tries to return a dangling reference. How would you fix it?',
      id: 'Fungsi berikut gagal dikompilasi karena mencoba mengembalikan dangling reference. Bagaimana cara memperbaikinya?',
    },
    code: 'fn dangle() -> &String {\n   let s = String::from("hello");\n   &s\n}',
    choices: [
      'Change the return type to `String` and return `s`.',
      'Allocate `s` on the heap using `Box::new`.',
      'Mark `s` as `static`.',
      'Return `s.clone()`.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The variable `s` is created inside the function and is deallocated when the function ends. You cannot return a reference to it. The correct approach is to transfer ownership of `s` out of the function.',
      id: 'Variabel `s` dibuat di dalam fungsi dan didealokasi saat fungsi berakhir. Anda tidak dapat mengembalikan referensi ke sana. Pendekatan yang benar adalah mentransfer kepemilikan `s` keluar dari fungsi.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q5',
    type: 'mcq',
    prompt: {
      en: 'How do lifetimes help prevent dangling references?',
      id: 'Bagaimana lifetime membantu mencegah dangling references?',
    },
    choices: [
      { en: 'By manually freeing memory.', id: 'Dengan membebaskan memori secara manual.' },
      {
        en: 'By ensuring the data a reference points to lives at least as long as the reference itself.',
        id: 'Dengan memastikan data yang dirujuk oleh referensi hidup setidaknya selama referensi itu sendiri.',
      },
      {
        en: 'By copying data every time a reference is created.',
        id: 'Dengan menyalin data setiap kali referensi dibuat.',
      },
      { en: 'By using a garbage collector.', id: 'Dengan menggunakan garbage collector.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The borrow checker uses lifetime annotations (explicit or elided) to compare the scope of the reference with the scope of the data it points to, issuing a compile error if the data might be dropped too soon.',
      id: 'Borrow checker menggunakan anotasi lifetime (eksplisit atau yang dihilangkan) untuk membandingkan cakupan referensi dengan cakupan data yang dirujuknya, dan akan mengeluarkan eror kompilasi jika data mungkin dihapus terlalu cepat.',
    },
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: slice-references
  {
    id: 'slice-ref-q1',
    type: 'mcq',
    prompt: {
      en: 'What does a string slice `&str` contain?',
      id: 'Apa isi dari string slice `&str`?',
    },
    choices: [
      {
        en: 'A pointer to the string data and an ownership token.',
        id: 'Pointer ke data string dan token kepemilikan.',
      },
      {
        en: 'A pointer to the string data and a length.',
        id: 'Pointer ke data string dan sebuah panjang.',
      },
      { en: 'A copy of the string data.', id: 'Salinan dari data string.' },
      {
        en: 'A null-terminated sequence of characters.',
        id: 'Urutan karakter yang diakhiri null.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'A slice is a two-word object: it stores a pointer to the starting position of the data and the length of the slice.',
      id: 'Slice adalah objek dua kata: ia menyimpan pointer ke posisi awal data dan panjang dari slice tersebut.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-ref-q2',
    type: 'predict_output',
    prompt: {
      en: 'What will be printed by this function call?',
      id: 'Apa yang akan dicetak oleh pemanggilan fungsi ini?',
    },
    code: 'fn first_word(s: &String) -> &str {\n   let bytes = s.as_bytes();\n   for (i, &item) in bytes.iter().enumerate() {\n       if item == b\' \' {\n           return &s[0..i];\n       }\n   }\n   &s[..]\n}\nfn main() {\n   let my_string = String::from("hello world");\n   println!("{}", first_word(&my_string));\n}',
    expectedStdout: 'hello',
    explanation: {
      en: "The function iterates through the string bytes. When it finds a space (b' '), it returns a slice of the string from the beginning up to that point.",
      id: "Fungsi ini melakukan iterasi melalui byte string. Ketika menemukan spasi (b' '), ia mengembalikan potongan string dari awal hingga titik tersebut.",
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-ref-q3',
    type: 'tf',
    prompt: {
      en: 'You can have a mutable slice `&mut [i32]` which allows you to modify the elements it refers to.',
      id: 'Anda dapat memiliki slice mutable `&mut [i32]` yang memungkinkan Anda memodifikasi elemen yang dirujuknya.',
    },
    answer: true,
    explanation: {
      en: 'Just like regular references, slices can be mutable (`&mut T`), allowing for in-place modification of the borrowed data.',
      id: 'Sama seperti referensi biasa, slice bisa bersifat mutable (`&mut T`), memungkinkan modifikasi di tempat pada data yang dipinjam.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'slice-ref-q4',
    type: 'mcq',
    prompt: {
      en: 'Why is using a slice `&str` as a function parameter often better than `&String`?',
      id: 'Mengapa menggunakan slice `&str` sebagai parameter fungsi seringkali lebih baik daripada `&String`?',
    },
    choices: [
      { en: 'It is always faster.', id: 'Selalu lebih cepat.' },
      {
        en: 'It is more general, as it can accept both `&String` and `&str` (string literals).',
        id: 'Lebih umum, karena dapat menerima `&String` dan `&str` (literal string).',
      },
      {
        en: 'It automatically makes a mutable copy.',
        id: 'Secara otomatis membuat salinan mutable.',
      },
      {
        en: 'It prevents the string from being dropped.',
        id: 'Mencegah string agar tidak di-drop.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'By taking `&str`, your function becomes more flexible. Rust can automatically convert a `&String` into a `&str` (deref coercion), so your function works with both owned strings and string literals without needing changes.',
      id: 'Dengan menerima `&str`, fungsi Anda menjadi lebih fleksibel. Rust dapat secara otomatis mengubah `&String` menjadi `&str` (deref coercion), sehingga fungsi Anda bekerja dengan string yang dimiliki (owned) maupun literal string tanpa perlu perubahan.',
    },
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'slice-ref-q5',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let a = [1, 2, 3, 4, 5];\n   let slice = &a[..];\n   println!("Length: {}", slice.len());\n}',
    expectedStdout: 'Length: 5',
    explanation: {
      en: 'The `&a[..]` syntax creates a slice that contains all the elements of the array `a`.',
      id: 'Sintaks `&a[..]` membuat slice yang berisi semua elemen dari array `a`.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },

  // =================================================================
  // Topic: traits-generics
  // =================================================================

  // Lesson: traits
  {
    id: 'trait-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a trait in Rust?',
      id: 'Apa itu trait di Rust?',
    },
    choices: [
      { en: 'A specific data type, like a struct.', id: 'Tipe data spesifik, seperti struct.' },
      {
        en: 'A way to define shared behavior, similar to an interface.',
        id: 'Cara untuk mendefinisikan perilaku bersama, mirip dengan interface.',
      },
      { en: 'A tool for memory management.', id: 'Alat untuk manajemen memori.' },
      {
        en: 'A special kind of module for public APIs.',
        id: 'Jenis modul khusus untuk API publik.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "A trait defines a set of methods that a type must implement, allowing for abstraction over behavior. It's how Rust achieves polymorphism.",
      id: 'Trait mendefinisikan serangkaian metode yang harus diimplementasikan oleh sebuah tipe, memungkinkan abstraksi atas perilaku. Inilah cara Rust mencapai polimorfisme.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q2',
    type: 'code_fix',
    prompt: {
      en: 'How do you implement the `Summary` trait for the `Tweet` struct?',
      id: 'Bagaimana cara mengimplementasikan trait `Summary` untuk struct `Tweet`?',
    },
    code: 'pub trait Summary { fn summarize(&self) -> String; }\npub struct Tweet { pub username: String, pub content: String }\n\n// Your implementation here',
    choices: [
      'impl Summary for Tweet {\n   fn summarize(&self) -> String {\n       format!("{}: {}", self.username, self.content)\n   }\n}',
      'impl Tweet for Summary {\n   fn summarize(&self) -> String {\n       format!("{}: {}", self.username, self.content)\n   }\n}',
      'fn summarize(t: &Tweet) -> String { ... }',
      'Tweet impl Summary { ... }',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The correct syntax is `impl Trait for Type`, where you provide the concrete implementations for the methods defined in the trait.',
      id: 'Sintaks yang benar adalah `impl Trait for Type`, di mana Anda menyediakan implementasi konkret untuk metode yang didefinisikan dalam trait.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q3',
    type: 'tf',
    prompt: {
      en: 'A type can only implement one trait.',
      id: 'Sebuah tipe hanya bisa mengimplementasikan satu trait.',
    },
    answer: false,
    explanation: {
      en: 'A type can implement many different traits, allowing it to have a wide range of behaviors.',
      id: 'Sebuah tipe dapat mengimplementasikan banyak trait yang berbeda, memungkinkannya memiliki berbagai macam perilaku.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q4',
    type: 'mcq',
    prompt: {
      en: 'What is the orphan rule?',
      id: 'Apa itu aturan yatim piatu (orphan rule)?',
    },
    choices: [
      {
        en: 'You cannot implement a trait for a type if both the trait and the type are defined in external crates.',
        id: 'Anda tidak dapat mengimplementasikan trait untuk sebuah tipe jika baik trait maupun tipe tersebut didefinisikan di crate eksternal.',
      },
      {
        en: 'You cannot implement a trait that has no methods.',
        id: 'Anda tidak dapat mengimplementasikan trait yang tidak memiliki metode.',
      },
      {
        en: 'A struct must implement all traits from its parent module.',
        id: 'Sebuah struct harus mengimplementasikan semua trait dari modul induknya.',
      },
      {
        en: 'A trait must be implemented for at least one type.',
        id: 'Sebuah trait harus diimplementasikan untuk setidaknya satu tipe.',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "The orphan rule ensures that implementations don't conflict. It states that an `impl` is only allowed if either the trait or the type for which you are implementing the trait is local to your crate.",
      id: 'Aturan yatim piatu memastikan bahwa implementasi tidak bertentangan. Aturan ini menyatakan bahwa sebuah `impl` hanya diizinkan jika salah satu dari trait atau tipe yang Anda implementasikan bersifat lokal untuk crate Anda.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-q5',
    type: 'fib',
    prompt: {
      en: 'The methods of a trait that a type implements can be called on an instance of that type, just like regular _____.',
      id: 'Metode dari sebuah trait yang diimplementasikan oleh sebuah tipe dapat dipanggil pada instance tipe tersebut, sama seperti _____ biasa.',
    },
    acceptableAnswers: ['methods', 'metode'],
    explanation: {
      en: 'Once a trait is implemented, its methods become available on the type, accessible via dot notation.',
      id: 'Setelah sebuah trait diimplementasikan, metodenya menjadi tersedia pada tipe tersebut, dapat diakses melalui notasi titik.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: trait-default
  {
    id: 'trait-default-q1',
    type: 'tf',
    prompt: {
      en: 'Traits can provide default implementations for their methods.',
      id: 'Trait dapat menyediakan implementasi default untuk metodenya.',
    },
    answer: true,
    explanation: {
      en: 'A trait can provide a default implementation for a method, which can be used by implementing types or overridden with a custom implementation.',
      id: 'Sebuah trait dapat menyediakan implementasi default untuk sebuah metode, yang dapat digunakan oleh tipe yang mengimplementasikannya atau ditimpa dengan implementasi kustom.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-default-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this program?',
      id: 'Apa output dari program ini?',
    },
    code: 'pub trait Summary {\n   fn summarize(&self) -> String {\n       String::from("(Read more...)")\n   }\n}\nstruct NewsArticle { headline: String }\nimpl Summary for NewsArticle {}\nfn main() {\n   let article = NewsArticle { headline: String::from("Rust is fast!") };\n   println!("{}", article.summarize());\n}',
    expectedStdout: '(Read more...)',
    explanation: {
      en: 'Since the `impl Summary for NewsArticle` block is empty, the `NewsArticle` type uses the default implementation of `summarize` provided by the trait.',
      id: 'Karena blok `impl Summary for NewsArticle` kosong, tipe `NewsArticle` menggunakan implementasi default dari `summarize` yang disediakan oleh trait.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-default-q3',
    type: 'mcq',
    prompt: {
      en: 'Can a default method implementation call other methods from the same trait?',
      id: 'Dapatkah implementasi metode default memanggil metode lain dari trait yang sama?',
    },
    choices: [
      {
        en: 'No, that would cause a circular dependency.',
        id: 'Tidak, itu akan menyebabkan dependensi sirkular.',
      },
      {
        en: 'Yes, even methods that do not have a default implementation.',
        id: 'Ya, bahkan metode yang tidak memiliki implementasi default.',
      },
      {
        en: 'Only if the other methods also have a default implementation.',
        id: 'Hanya jika metode lain juga memiliki implementasi default.',
      },
      {
        en: 'Only if the methods are marked as `pub`.',
        id: 'Hanya jika metode ditandai sebagai `pub`.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Yes, a default method can call other methods in the trait. This allows for creating complex default behavior that relies on a few required methods to be implemented by the user.',
      id: 'Ya, sebuah metode default dapat memanggil metode lain dalam trait. Ini memungkinkan pembuatan perilaku default yang kompleks yang bergantung pada beberapa metode yang harus diimplementasikan oleh pengguna.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-default-q4',
    type: 'code_fix',
    prompt: {
      en: 'The `Tweet` struct should have a more specific summary. How do you override the default implementation?',
      id: 'Struct `Tweet` seharusnya memiliki ringkasan yang lebih spesifik. Bagaimana cara menimpa (override) implementasi default?',
    },
    code: 'pub trait Summary { fn summarize(&self) -> String { String::from("(Read more...)") } }\nstruct Tweet { content: String }\n// Your overriding implementation here',
    choices: [
      'impl Summary for Tweet {\n   fn summarize(&self) -> String {\n       format!("Tweet: {}", self.content)\n   }\n}',
      'impl Summary for Tweet {\n   fn override_summarize(&self) -> String {\n       ...\n   }\n}',
      'impl Summary for Tweet { default = false; ... }',
      'You must create a new trait.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'To override a default method, you simply provide a new implementation for that method within the `impl` block for your type.',
      id: 'Untuk menimpa metode default, Anda cukup menyediakan implementasi baru untuk metode tersebut di dalam blok `impl` untuk tipe Anda.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-default-q5',
    type: 'tf',
    prompt: {
      en: 'If a trait has all default methods, you must still use an empty `impl` block (`impl MyTrait for MyType {}`) to apply it to a type.',
      id: 'Jika sebuah trait memiliki semua metode default, Anda masih harus menggunakan blok `impl` kosong (`impl MyTrait for MyType {}`) untuk menerapkannya pada sebuah tipe.',
    },
    answer: true,
    explanation: {
      en: "Even if all methods are default, Rust needs an explicit `impl` block to know that you intend for that type to have the trait's behavior.",
      id: 'Meskipun semua metode bersifat default, Rust memerlukan blok `impl` eksplisit untuk mengetahui bahwa Anda bermaksud agar tipe tersebut memiliki perilaku dari trait.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: traits as parameters and return types
  {
    id: 'trait-param-q1',
    type: 'mcq',
    prompt: {
      en: 'What does the `impl Trait` syntax in a function parameter mean?',
      id: 'Apa arti dari sintaks `impl Trait` pada parameter fungsi?',
    },
    choices: [
      {
        en: 'The function returns a type that implements the trait.',
        id: 'Fungsi mengembalikan tipe yang mengimplementasikan trait.',
      },
      {
        en: 'The function takes a concrete type named `impl`.',
        id: 'Fungsi menerima tipe konkret bernama `impl`.',
      },
      {
        en: 'The function accepts any type that implements the specified trait.',
        id: 'Fungsi menerima tipe apa pun yang mengimplementasikan trait yang ditentukan.',
      },
      {
        en: 'The function will implement the trait for the given parameter.',
        id: 'Fungsi akan mengimplementasikan trait untuk parameter yang diberikan.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: '`fn notify(item: &impl Summary)` is syntactic sugar for a trait bound. It means the `item` parameter accepts any type that implements the `Summary` trait.',
      id: '`fn notify(item: &impl Summary)` adalah gula sintaksis untuk batasan trait (trait bound). Artinya parameter `item` menerima tipe apa pun yang mengimplementasikan trait `Summary`.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-return-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a limitation of using `impl Trait` as a return type?',
      id: 'Apa batasan dari penggunaan `impl Trait` sebagai tipe kembalian?',
    },
    choices: [
      {
        en: 'You can only return one specific concrete type that implements the trait.',
        id: 'Anda hanya dapat mengembalikan satu tipe konkret spesifik yang mengimplementasikan trait.',
      },
      {
        en: 'It is less efficient than returning a concrete type.',
        id: 'Kurang efisien dibandingkan mengembalikan tipe konkret.',
      },
      {
        en: 'It cannot be used with traits that have associated types.',
        id: 'Tidak dapat digunakan dengan trait yang memiliki tipe terkait.',
      },
      {
        en: 'You cannot call methods on the returned value.',
        id: 'Anda tidak dapat memanggil metode pada nilai yang dikembalikan.',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Even though the caller only sees `impl Trait`, the function must return a single, specific type. You cannot have `if-else` logic that returns different concrete types (e.g., `Tweet` or `NewsArticle`) within the same function.',
      id: 'Meskipun pemanggil hanya melihat `impl Trait`, fungsi tersebut harus mengembalikan satu tipe konkret yang spesifik. Anda tidak dapat memiliki logika `if-else` yang mengembalikan tipe konkret berbeda (misalnya, `Tweet` atau `NewsArticle`) dalam fungsi yang sama.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-bound-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the full syntax for a "trait bound", for which `impl Trait` is sugar?',
      id: 'Apa sintaks lengkap untuk "trait bound", di mana `impl Trait` adalah gula sintaksisnya?',
    },
    choices: [
      { en: '<T: Summary>', id: '<T: Summary>' },
      { en: '<T where Summary>', id: '<T where Summary>' },
      { en: '<T is Summary>', id: '<T is Summary>' },
      { en: '<T implements Summary>', id: '<T implements Summary>' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The full generic syntax is `fn my_func<T: Summary>(item: &T)`. The `T: Summary` part is called a trait bound, which constrains the generic type `T` to types that implement `Summary`.',
      id: 'Sintaks generik lengkapnya adalah `fn my_func<T: Summary>(item: &T)`. Bagian `T: Summary` disebut trait bound, yang membatasi tipe generik `T` hanya untuk tipe yang mengimplementasikan `Summary`.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-cond-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you conditionally implement a method on a struct only if its generic type implements a certain trait?',
      id: 'Bagaimana cara mengimplementasikan metode secara kondisional pada sebuah struct hanya jika tipe generiknya mengimplementasikan trait tertentu?',
    },
    choices: [
      {
        en: 'impl<T: Display> Pair<T> { fn to_string(&self) -> String { ... } }',
        id: 'impl<T: Display> Pair<T> { fn to_string(&self) -> String { ... } }',
      },
      {
        en: 'impl<T> Pair<T> { if T: Display { fn to_string(&self) ... } }',
        id: 'impl<T> Pair<T> { if T: Display { fn to_string(&self) ... } }',
      },
      {
        en: 'impl<T> Pair<T> where T: Display { fn to_string(&self) -> String { ... } }',
        id: 'impl<T> Pair<T> where T: Display { fn to_string(&self) -> String { ... } }',
      },
      { en: 'Both A and C are valid syntax.', id: 'Keduanya A dan C adalah sintaks yang valid.' },
    ],
    correctIndex: 3,
    explanation: {
      en: 'You can add trait bounds to an `impl` block. This means the methods inside will only be available if the generic type of the struct instance meets those bounds.',
      id: 'Anda dapat menambahkan batasan trait ke blok `impl`. Ini berarti metode di dalamnya hanya akan tersedia jika tipe generik dari instance struct memenuhi batasan tersebut.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a "blanket implementation"?',
      id: 'Apa itu "blanket implementation"?',
    },
    choices: [
      {
        en: 'A default implementation for all methods in a trait.',
        id: 'Implementasi default untuk semua metode dalam sebuah trait.',
      },
      {
        en: 'An implementation of a trait for any type that satisfies certain trait bounds.',
        id: 'Implementasi trait untuk tipe apa pun yang memenuhi batasan trait tertentu.',
      },
      {
        en: 'An implementation that covers all possible enum variants.',
        id: 'Implementasi yang mencakup semua varian enum yang mungkin.',
      },
      {
        en: 'A `use` statement that imports all items from a module.',
        id: 'Pernyataan `use` yang mengimpor semua item dari sebuah modul.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "A classic example is the standard library's implementation of `ToString` for any type that implements `Display`: `impl<T: Display> ToString for T`. This is a powerful way to add behavior to many types at once.",
      id: 'Contoh klasiknya adalah implementasi `ToString` dari pustaka standar untuk tipe apa pun yang mengimplementasikan `Display`: `impl<T: Display> ToString for T`. Ini adalah cara yang kuat untuk menambahkan perilaku ke banyak tipe sekaligus.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: lifetimes
  {
    id: 'life-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the main purpose of lifetimes in Rust?',
      id: 'Apa tujuan utama dari lifetime di Rust?',
    },
    choices: [
      {
        en: 'To measure how long a program runs.',
        id: 'Untuk mengukur berapa lama sebuah program berjalan.',
      },
      {
        en: 'To ensure that references are valid for as long as they are used.',
        id: 'Untuk memastikan bahwa referensi valid selama masih digunakan.',
      },
      {
        en: 'To control when memory is allocated and deallocated.',
        id: 'Untuk mengontrol kapan memori dialokasikan dan didealokasikan.',
      },
      {
        en: 'To define the lifespan of a thread.',
        id: 'Untuk mendefinisikan masa hidup sebuah thread.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Lifetimes are a static analysis tool that allows the borrow checker to prove that references will not outlive the data they point to, thus preventing dangling references.',
      id: 'Lifetime adalah alat analisis statis yang memungkinkan borrow checker untuk membuktikan bahwa referensi tidak akan hidup lebih lama dari data yang dirujuknya, sehingga mencegah dangling references.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-ann-q1',
    type: 'mcq',
    prompt: {
      en: "What does the lifetime annotation in `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str` signify?",
      id: "Apa arti dari anotasi lifetime dalam `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str`?",
    },
    choices: [
      {
        en: 'The function takes exactly one second to run.',
        id: 'Fungsi tersebut membutuhkan waktu tepat satu detik untuk berjalan.',
      },
      {
        en: 'The returned reference will be valid for as long as both input references are valid.',
        id: 'Referensi yang dikembalikan akan valid selama kedua referensi input valid.',
      },
      {
        en: 'The function allocates memory that must be freed later.',
        id: 'Fungsi mengalokasikan memori yang harus dibebaskan nanti.',
      },
      {
        en: 'The function only works with static strings.',
        id: 'Fungsi hanya bekerja dengan string statis.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "The generic lifetime parameter `'a` connects the lifetimes of the parameters and the return value. It tells the compiler that the lifetime of the returned reference is constrained by the smaller of the lifetimes of `x` and `y`.",
      id: "Parameter lifetime generik `'a` menghubungkan lifetime dari parameter dan nilai kembalian. Ini memberitahu kompiler bahwa lifetime dari referensi yang dikembalikan dibatasi oleh lifetime yang lebih kecil dari `x` dan `y`.",
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-q2',
    type: 'tf',
    prompt: {
      en: 'Lifetime annotations change how long any of the references live.',
      id: 'Anotasi lifetime mengubah berapa lama sebuah referensi hidup.',
    },
    answer: false,
    explanation: {
      en: "Lifetimes don't alter the lifespan of any values. They describe the relationships between the lifetimes of multiple references, allowing the compiler to perform its safety checks.",
      id: 'Lifetime tidak mengubah masa hidup nilai apa pun. Mereka mendeskripsikan hubungan antara lifetime dari beberapa referensi, memungkinkan kompiler untuk melakukan pemeriksaan keamanannya.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q3',
    type: 'predict_output',
    prompt: {
      en: 'Why does this code fail to compile?',
      id: 'Mengapa kode ini gagal dikompilasi?',
    },
    code: 'fn main() {\n   let r;\n   {\n       let x = 5;\n       r = &x;\n   }\n   println!("r: {}", r);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation: {
      en: 'This is a classic dangling reference. The variable `x` goes out of scope (and is dropped) at the end of the inner block. The reference `r` would be left pointing to invalid memory, but the borrow checker prevents this at compile time.',
      id: 'Ini adalah contoh klasik dari dangling reference. Variabel `x` keluar dari cakupan (dan di-drop) di akhir blok dalam. Referensi `r` akan menunjuk ke memori yang tidak valid, tetapi borrow checker mencegah ini pada waktu kompilasi.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q4',
    type: 'mcq',
    prompt: {
      en: "What is the special lifetime `'static` used for?",
      id: "Untuk apa lifetime khusus `'static` digunakan?",
    },
    choices: [
      {
        en: 'A reference that is only valid within the current function.',
        id: 'Referensi yang hanya valid di dalam fungsi saat ini.',
      },
      {
        en: 'A reference that can live for the entire duration of the program.',
        id: 'Referensi yang dapat hidup selama seluruh durasi program.',
      },
      {
        en: 'A lifetime for variables that cannot be changed.',
        id: 'Lifetime untuk variabel yang tidak dapat diubah.',
      },
      {
        en: 'A lifetime that is determined at runtime.',
        id: 'Lifetime yang ditentukan saat runtime.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "The `'static` lifetime indicates that the data pointed to by the reference lives for the entire program runtime. String literals, for example, have a `'static` lifetime because they are stored in the program's binary.",
      id: "Lifetime `'static` menunjukkan bahwa data yang dirujuk oleh referensi hidup selama seluruh waktu jalan program. Literal string, misalnya, memiliki lifetime `'static` karena disimpan dalam biner program.",
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },

  // =================================================================
  // Topic: advanced-concepts & error-handling
  // =================================================================

  // Lesson: smart-pointers (Box<T>)
  {
    id: 'smart-ptr-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the primary use case for `Box<T>`?',
      id: 'Apa kasus penggunaan utama untuk `Box<T>`?',
    },
    choices: [
      { en: 'To store data on the stack.', id: 'Untuk menyimpan data di stack.' },
      {
        en: 'To enable multiple owners for a piece of data.',
        id: 'Untuk memungkinkan beberapa pemilik untuk sepotong data.',
      },
      {
        en: 'To allocate data on the heap and have a pointer to it.',
        id: 'Untuk mengalokasikan data di heap dan memiliki pointer ke sana.',
      },
      { en: 'To count references to data.', id: 'Untuk menghitung referensi ke data.' },
    ],
    correctIndex: 2,
    explanation: {
      en: "A `Box<T>` is a smart pointer that owns data allocated on the heap. It's useful when you have a large amount of data you want to transfer ownership of without copying it.",
      id: '`Box<T>` adalah smart pointer yang memiliki data yang dialokasikan di heap. Ini berguna ketika Anda memiliki sejumlah besar data yang ingin Anda transfer kepemilikannya tanpa menyalinnya.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'smart-ptr-q2',
    type: 'tf',
    prompt: {
      en: 'A `Box<T>` is automatically deallocated when it goes out of scope.',
      id: 'Sebuah `Box<T>` secara otomatis didealokasi ketika keluar dari cakupan.',
    },
    answer: true,
    explanation: {
      en: '`Box<T>` implements the `Drop` trait. When a `Box` goes out of scope, its destructor is called, which deallocates the memory on the heap.',
      id: '`Box<T>` mengimplementasikan trait `Drop`. Ketika sebuah `Box` keluar dari cakupan, destruktornya dipanggil, yang akan mendealokasi memori di heap.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'smart-ptr-q3',
    type: 'mcq',
    prompt: {
      en: 'When is using a `Box<T>` necessary?',
      id: 'Kapan penggunaan `Box<T>` diperlukan?',
    },
    choices: [
      {
        en: 'For all data that is larger than a few bytes.',
        id: 'Untuk semua data yang lebih besar dari beberapa byte.',
      },
      {
        en: 'When you want to create a recursive type, like a linked list.',
        id: 'Ketika Anda ingin membuat tipe rekursif, seperti linked list.',
      },
      { en: 'Whenever you use a struct.', id: 'Setiap kali Anda menggunakan struct.' },
      {
        en: 'For every variable in a multi-threaded context.',
        id: 'Untuk setiap variabel dalam konteks multi-thread.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "Rust needs to know the size of a type at compile time. A recursive type (e.g., `enum List { Cons(i32, List), Nil }`) would have an infinite size. By using `Box<List>`, you store the recursive part on the heap, so the enum's size is just the size of a pointer.",
      id: 'Rust perlu mengetahui ukuran sebuah tipe pada waktu kompilasi. Tipe rekursif (misalnya, `enum List { Cons(i32, List), Nil }`) akan memiliki ukuran tak terbatas. Dengan menggunakan `Box<List>`, Anda menyimpan bagian rekursif di heap, sehingga ukuran enum hanya seukuran pointer.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: concurrency
  {
    id: 'concur-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you create a new thread in Rust?',
      id: 'Bagaimana cara membuat thread baru di Rust?',
    },
    choices: [
      { en: 'thread::new()', id: 'thread::new()' },
      { en: 'thread::spawn()', id: 'thread::spawn()' },
      { en: 'new Thread()', id: 'new Thread()' },
      { en: 'async::run()', id: 'async::run()' },
    ],
    correctIndex: 1,
    explanation: {
      en: '`std::thread::spawn` takes a closure containing the code you want to run and executes it in a new operating system thread.',
      id: '`std::thread::spawn` mengambil sebuah closure yang berisi kode yang ingin Anda jalankan dan mengeksekusinya di thread sistem operasi yang baru.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'concur-q2',
    type: 'tf',
    prompt: {
      en: "Rust's ownership system helps prevent data races in concurrent code at compile time.",
      id: 'Sistem kepemilikan Rust membantu mencegah data race dalam kode konkuren pada waktu kompilasi.',
    },
    answer: true,
    explanation: {
      en: 'The ownership and borrowing rules, particularly the "one mutable reference OR multiple immutable references" rule, are strictly enforced across threads, making it impossible to accidentally create a data race.',
      id: 'Aturan kepemilikan dan peminjaman, terutama aturan "satu referensi mutable ATAU beberapa referensi immutable", ditegakkan secara ketat di seluruh thread, sehingga mustahil untuk secara tidak sengaja membuat data race.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: error-handling (Result)
  {
    id: 'result-q1',
    type: 'mcq',
    prompt: {
      en: 'What are the two variants of the `Result<T, E>` enum?',
      id: 'Apa dua varian dari enum `Result<T, E>`?',
    },
    choices: [
      { en: 'Some(T) and None', id: 'Some(T) dan None' },
      { en: 'Success(T) and Failure(E)', id: 'Success(T) dan Failure(E)' },
      { en: 'Ok(T) and Err(E)', id: 'Ok(T) dan Err(E)' },
      { en: 'Value(T) and Error(E)', id: 'Value(T) dan Error(E)' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`Result<T, E>` is used for recoverable errors. `Ok(T)` represents a successful result containing a value, and `Err(E)` represents an error, containing error details.',
      id: '`Result<T, E>` digunakan untuk eror yang dapat dipulihkan. `Ok(T)` merepresentasikan hasil yang sukses berisi sebuah nilai, dan `Err(E)` merepresentasikan sebuah eror, berisi detail eror.',
    },
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'err-handle-q1',
    type: 'mcq',
    prompt: {
      en: 'What does the `?` operator do when used on a `Result`?',
      id: 'Apa yang dilakukan oleh operator `?` ketika digunakan pada `Result`?',
    },
    choices: [
      {
        en: "It unwraps the `Ok` value, or panics if it's an `Err`.",
        id: 'Membuka nilai `Ok`, atau panic jika itu adalah `Err`.',
      },
      { en: 'It converts the `Result` to an `Option`.', id: 'Mengubah `Result` menjadi `Option`.' },
      {
        en: 'It returns the `Ok` value, or returns the `Err` value from the current function.',
        id: 'Mengembalikan nilai `Ok`, atau mengembalikan nilai `Err` dari fungsi saat ini.',
      },
      {
        en: 'It prints the error to the console and continues.',
        id: 'Mencetak eror ke konsol dan melanjutkan.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: "The `?` operator is a shortcut for error propagation. If the result is `Ok(value)`, it gives you the `value`. If it's `Err(e)`, it immediately returns that `Err(e)` from the function you are in.",
      id: 'Operator `?` adalah pintasan untuk propagasi eror. Jika hasilnya adalah `Ok(value)`, ia akan memberikan `value`. Jika hasilnya `Err(e)`, ia akan segera mengembalikan `Err(e)` tersebut dari fungsi tempat Anda berada.',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'panic-q1',
    type: 'mcq',
    prompt: {
      en: 'When should you use `panic!` instead of returning a `Result`?',
      id: 'Kapan Anda harus menggunakan `panic!` alih-alih mengembalikan `Result`?',
    },
    choices: [
      { en: 'Whenever an error occurs.', id: 'Setiap kali terjadi eror.' },
      {
        en: 'For errors that are expected and recoverable, like user input validation.',
        id: 'Untuk eror yang diharapkan dan dapat dipulihkan, seperti validasi input pengguna.',
      },
      {
        en: 'For unrecoverable errors where the program cannot meaningfully continue, often indicating a bug.',
        id: 'Untuk eror yang tidak dapat dipulihkan di mana program tidak dapat melanjutkan secara berarti, seringkali menunjukkan adanya bug.',
      },
      {
        en: 'When you want to log an error without stopping the program.',
        id: 'Ketika Anda ingin mencatat eror tanpa menghentikan program.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: '`panic!` is for unrecoverable errors. If your code reaches a state where continuing would be incorrect or insecure (e.g., an index out of bounds that you thought was impossible), panicking is appropriate. For expected errors, `Result` is the better choice.',
      id: '`panic!` adalah untuk eror yang tidak dapat dipulihkan. Jika kode Anda mencapai keadaan di mana melanjutkan akan menjadi tidak benar atau tidak aman (misalnya, indeks di luar batas yang Anda kira tidak mungkin terjadi), maka panic adalah tindakan yang tepat. Untuk eror yang diharapkan, `Result` adalah pilihan yang lebih baik.',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'result-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn might_fail(success: bool) -> Result<i32, String> {\n   if success {\n       Ok(100)\n   } else {\n       Err(String::from("Failed!"))\n   }\n}\nfn main() {\n   let res = might_fail(false);\n   match res {\n       Ok(val) => println!("Success: {}", val),\n       Err(e) => println!("Error: {}", e),\n   }\n}',
    expectedStdout: 'Error: Failed!',
    explanation: {
      en: 'The `might_fail` function is called with `false`, so it returns an `Err`. The `match` statement correctly catches the `Err` variant and prints the contained error message.',
      id: 'Fungsi `might_fail` dipanggil dengan `false`, sehingga mengembalikan `Err`. Pernyataan `match` dengan benar menangkap varian `Err` dan mencetak pesan eror yang terkandung di dalamnya.',
    },
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'result-q3',
    type: 'tf',
    prompt: {
      en: 'The `.unwrap()` method on a `Result` is safe to use in all situations.',
      id: 'Metode `.unwrap()` pada `Result` aman digunakan dalam semua situasi.',
    },
    answer: false,
    explanation: {
      en: "`.unwrap()` will panic if called on an `Err` variant. It is useful in tests or examples, but in production code, it's better to handle the `Err` case explicitly with `match` or other methods like `unwrap_or_else`.",
      id: '`.unwrap()` akan panic jika dipanggil pada varian `Err`. Ini berguna dalam pengujian atau contoh, tetapi dalam kode produksi, lebih baik menangani kasus `Err` secara eksplisit dengan `match` atau metode lain seperti `unwrap_or_else`.',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  // Melanjutkan dari pertanyaan sebelumnya...

  // Lesson: dangling-references
  {
    id: 'dangle-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a dangling reference?',
      id: 'Apa itu dangling reference (referensi menjuntai)?',
    },
    choices: [
      {
        en: 'A reference to a value that has been deallocated or moved.',
        id: 'Referensi ke nilai yang telah didealokasi atau dipindahkan.',
      },
      {
        en: 'A reference that has not been initialized.',
        id: 'Referensi yang belum diinisialisasi.',
      },
      {
        en: 'A reference that points to the null address.',
        id: 'Referensi yang menunjuk ke alamat null.',
      },
      { en: 'A reference that is mutable.', id: 'Referensi yang bersifat mutable.' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'A dangling reference points to a memory location that no longer contains the data that the reference was created for, because that data has been deallocated.',
      id: 'Dangling reference menunjuk ke lokasi memori yang tidak lagi berisi data yang menjadi tujuan pembuatan referensi tersebut, karena data tersebut telah didealokasi.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q2',
    type: 'tf',
    prompt: {
      en: 'The Rust compiler prevents dangling references at compile time.',
      id: 'Kompiler Rust mencegah dangling references pada waktu kompilasi.',
    },
    answer: true,
    explanation: {
      en: 'This is a core safety guarantee of Rust. The borrow checker analyzes lifetimes to ensure that no reference can outlive the data it points to.',
      id: 'Ini adalah jaminan keamanan inti dari Rust. Borrow checker menganalisis lifetime untuk memastikan tidak ada referensi yang dapat hidup lebih lama dari data yang dirujuknya.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'dangle-q3',
    type: 'predict_output',
    prompt: {
      en: 'Why is this function guaranteed by the compiler to NOT create a dangling reference?',
      id: 'Mengapa fungsi ini dijamin oleh kompiler TIDAK akan membuat dangling reference?',
    },
    code: 'fn no_dangle() -> String {\n   let s = String::from("hello");\n   s\n}',
    expectedStdout: 'This code is valid and does not create a dangling reference.',
    explanation: {
      en: 'The function returns the `String` itself, not a reference to it. This transfers ownership of the string to the calling scope, so the data remains valid.',
      id: 'Fungsi ini mengembalikan `String` itu sendiri, bukan referensi ke sana. Ini mentransfer kepemilikan string ke cakupan pemanggil, sehingga data tetap valid.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q4',
    type: 'code_fix',
    prompt: {
      en: 'The following function fails to compile because it tries to return a dangling reference. How would you fix it?',
      id: 'Fungsi berikut gagal dikompilasi karena mencoba mengembalikan dangling reference. Bagaimana cara memperbaikinya?',
    },
    code: 'fn dangle() -> &String {\n   let s = String::from("hello");\n   &s\n}',
    choices: [
      'Change the return type to `String` and return `s`.',
      'Allocate `s` on the heap using `Box::new`.',
      'Mark `s` as `static`.',
      'Return `s.clone()`.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The variable `s` is created inside the function and is deallocated when the function ends. You cannot return a reference to it. The correct approach is to transfer ownership of `s` out of the function.',
      id: 'Variabel `s` dibuat di dalam fungsi dan didealokasi saat fungsi berakhir. Anda tidak dapat mengembalikan referensi ke sana. Pendekatan yang benar adalah mentransfer kepemilikan `s` keluar dari fungsi.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q5',
    type: 'mcq',
    prompt: {
      en: 'How do lifetimes help prevent dangling references?',
      id: 'Bagaimana lifetime membantu mencegah dangling references?',
    },
    choices: [
      { en: 'By manually freeing memory.', id: 'Dengan membebaskan memori secara manual.' },
      {
        en: 'By ensuring the data a reference points to lives at least as long as the reference itself.',
        id: 'Dengan memastikan data yang dirujuk oleh referensi hidup setidaknya selama referensi itu sendiri.',
      },
      {
        en: 'By copying data every time a reference is created.',
        id: 'Dengan menyalin data setiap kali referensi dibuat.',
      },
      { en: 'By using a garbage collector.', id: 'Dengan menggunakan garbage collector.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The borrow checker uses lifetime annotations (explicit or elided) to compare the scope of the reference with the scope of the data it points to, issuing a compile error if the data might be dropped too soon.',
      id: 'Borrow checker menggunakan anotasi lifetime (eksplisit atau yang dihilangkan) untuk membandingkan cakupan referensi dengan cakupan data yang dirujuknya, dan akan mengeluarkan eror kompilasi jika data mungkin dihapus terlalu cepat.',
    },
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: slice-references
  {
    id: 'slice-ref-q1',
    type: 'mcq',
    prompt: {
      en: 'What does a string slice `&str` contain?',
      id: 'Apa isi dari string slice `&str`?',
    },
    choices: [
      {
        en: 'A pointer to the string data and an ownership token.',
        id: 'Pointer ke data string dan token kepemilikan.',
      },
      {
        en: 'A pointer to the string data and a length.',
        id: 'Pointer ke data string dan sebuah panjang.',
      },
      { en: 'A copy of the string data.', id: 'Salinan dari data string.' },
      {
        en: 'A null-terminated sequence of characters.',
        id: 'Urutan karakter yang diakhiri null.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'A slice is a two-word object: it stores a pointer to the starting position of the data and the length of the slice.',
      id: 'Slice adalah objek dua kata: ia menyimpan pointer ke posisi awal data dan panjang dari slice tersebut.',
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-ref-q2',
    type: 'predict_output',
    prompt: {
      en: 'What will be printed by this function call?',
      id: 'Apa yang akan dicetak oleh pemanggilan fungsi ini?',
    },
    code: 'fn first_word(s: &String) -> &str {\n   let bytes = s.as_bytes();\n   for (i, &item) in bytes.iter().enumerate() {\n       if item == b\' \' {\n           return &s[0..i];\n       }\n   }\n   &s[..]\n}\nfn main() {\n   let my_string = String::from("hello world");\n   println!("{}", first_word(&my_string));\n}',
    expectedStdout: 'hello',
    explanation: {
      en: "The function iterates through the string bytes. When it finds a space (b' '), it returns a slice of the string from the beginning up to that point.",
      id: "Fungsi ini melakukan iterasi melalui byte string. Ketika menemukan spasi (b' '), ia mengembalikan potongan string dari awal hingga titik tersebut.",
    },
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-ref-q3',
    type: 'tf',
    prompt: {
      en: 'You can have a mutable slice `&mut [i32]` which allows you to modify the elements it refers to.',
      id: 'Anda dapat memiliki slice mutable `&mut [i32]` yang memungkinkan Anda memodifikasi elemen yang dirujuknya.',
    },
    answer: true,
    explanation: {
      en: 'Just like regular references, slices can be mutable (`&mut T`), allowing for in-place modification of the borrowed data.',
      id: 'Sama seperti referensi biasa, slice bisa bersifat mutable (`&mut T`), memungkinkan modifikasi di tempat pada data yang dipinjam.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'slice-ref-q4',
    type: 'mcq',
    prompt: {
      en: 'Why is using a slice `&str` as a function parameter often better than `&String`?',
      id: 'Mengapa menggunakan slice `&str` sebagai parameter fungsi seringkali lebih baik daripada `&String`?',
    },
    choices: [
      { en: 'It is always faster.', id: 'Selalu lebih cepat.' },
      {
        en: 'It is more general, as it can accept both `&String` and `&str` (string literals).',
        id: 'Lebih umum, karena dapat menerima `&String` dan `&str` (literal string).',
      },
      {
        en: 'It automatically makes a mutable copy.',
        id: 'Secara otomatis membuat salinan mutable.',
      },
      {
        en: 'It prevents the string from being dropped.',
        id: 'Mencegah string agar tidak di-drop.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'By taking `&str`, your function becomes more flexible. Rust can automatically convert a `&String` into a `&str` (deref coercion), so your function works with both owned strings and string literals without needing changes.',
      id: 'Dengan menerima `&str`, fungsi Anda menjadi lebih fleksibel. Rust dapat secara otomatis mengubah `&String` menjadi `&str` (deref coercion), sehingga fungsi Anda bekerja dengan string yang dimiliki (owned) maupun literal string tanpa perlu perubahan.',
    },
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'slice-ref-q5',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this code?',
      id: 'Apa output dari kode ini?',
    },
    code: 'fn main() {\n   let a = [1, 2, 3, 4, 5];\n   let slice = &a[..];\n   println!("Length: {}", slice.len());\n}',
    expectedStdout: 'Length: 5',
    explanation: {
      en: 'The `&a[..]` syntax creates a slice that contains all the elements of the array `a`.',
      id: 'Sintaks `&a[..]` membuat slice yang berisi semua elemen dari array `a`.',
    },
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },

  // =================================================================
  // Topic: traits-generics
  // =================================================================

  // Lesson: traits
  {
    id: 'trait-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a trait in Rust?',
      id: 'Apa itu trait di Rust?',
    },
    choices: [
      { en: 'A specific data type, like a struct.', id: 'Tipe data spesifik, seperti struct.' },
      {
        en: 'A way to define shared behavior, similar to an interface.',
        id: 'Cara untuk mendefinisikan perilaku bersama, mirip dengan interface.',
      },
      { en: 'A tool for memory management.', id: 'Alat untuk manajemen memori.' },
      {
        en: 'A special kind of module for public APIs.',
        id: 'Jenis modul khusus untuk API publik.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "A trait defines a set of methods that a type must implement, allowing for abstraction over behavior. It's how Rust achieves polymorphism.",
      id: 'Trait mendefinisikan serangkaian metode yang harus diimplementasikan oleh sebuah tipe, memungkinkan abstraksi atas perilaku. Inilah cara Rust mencapai polimorfisme.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q2',
    type: 'code_fix',
    prompt: {
      en: 'How do you implement the `Summary` trait for the `Tweet` struct?',
      id: 'Bagaimana cara mengimplementasikan trait `Summary` untuk struct `Tweet`?',
    },
    code: 'pub trait Summary { fn summarize(&self) -> String; }\npub struct Tweet { pub username: String, pub content: String }\n\n// Your implementation here',
    choices: [
      'impl Summary for Tweet {\n   fn summarize(&self) -> String {\n       format!("{}: {}", self.username, self.content)\n   }\n}',
      'impl Tweet for Summary {\n   fn summarize(&self) -> String {\n       format!("{}: {}", self.username, self.content)\n   }\n}',
      'fn summarize(t: &Tweet) -> String { ... }',
      'Tweet impl Summary { ... }',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The correct syntax is `impl Trait for Type`, where you provide the concrete implementations for the methods defined in the trait.',
      id: 'Sintaks yang benar adalah `impl Trait for Type`, di mana Anda menyediakan implementasi konkret untuk metode yang didefinisikan dalam trait.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q3',
    type: 'tf',
    prompt: {
      en: 'A type can only implement one trait.',
      id: 'Sebuah tipe hanya bisa mengimplementasikan satu trait.',
    },
    answer: false,
    explanation: {
      en: 'A type can implement many different traits, allowing it to have a wide range of behaviors.',
      id: 'Sebuah tipe dapat mengimplementasikan banyak trait yang berbeda, memungkinkannya memiliki berbagai macam perilaku.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q4',
    type: 'mcq',
    prompt: {
      en: 'What is the orphan rule?',
      id: 'Apa itu aturan yatim piatu (orphan rule)?',
    },
    choices: [
      {
        en: 'You cannot implement a trait for a type if both the trait and the type are defined in external crates.',
        id: 'Anda tidak dapat mengimplementasikan trait untuk sebuah tipe jika baik trait maupun tipe tersebut didefinisikan di crate eksternal.',
      },
      {
        en: 'You cannot implement a trait that has no methods.',
        id: 'Anda tidak dapat mengimplementasikan trait yang tidak memiliki metode.',
      },
      {
        en: 'A struct must implement all traits from its parent module.',
        id: 'Sebuah struct harus mengimplementasikan semua trait dari modul induknya.',
      },
      {
        en: 'A trait must be implemented for at least one type.',
        id: 'Sebuah trait harus diimplementasikan untuk setidaknya satu tipe.',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "The orphan rule ensures that implementations don't conflict. It states that an `impl` is only allowed if either the trait or the type for which you are implementing the trait is local to your crate.",
      id: 'Aturan yatim piatu memastikan bahwa implementasi tidak bertentangan. Aturan ini menyatakan bahwa sebuah `impl` hanya diizinkan jika salah satu dari trait atau tipe yang Anda implementasikan bersifat lokal untuk crate Anda.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-q5',
    type: 'fib',
    prompt: {
      en: 'The methods of a trait that a type implements can be called on an instance of that type, just like regular _____.',
      id: 'Metode dari sebuah trait yang diimplementasikan oleh sebuah tipe dapat dipanggil pada instance tipe tersebut, sama seperti _____ biasa.',
    },
    acceptableAnswers: ['methods', 'metode'],
    explanation: {
      en: 'Once a trait is implemented, its methods become available on the type, accessible via dot notation.',
      id: 'Setelah sebuah trait diimplementasikan, metodenya menjadi tersedia pada tipe tersebut, dapat diakses melalui notasi titik.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: trait-default
  {
    id: 'trait-default-q1',
    type: 'tf',
    prompt: {
      en: 'Traits can provide default implementations for their methods.',
      id: 'Trait dapat menyediakan implementasi default untuk metodenya.',
    },
    answer: true,
    explanation: {
      en: 'A trait can provide a default implementation for a method, which can be used by implementing types or overridden with a custom implementation.',
      id: 'Sebuah trait dapat menyediakan implementasi default untuk sebuah metode, yang dapat digunakan oleh tipe yang mengimplementasikannya atau ditimpa dengan implementasi kustom.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-default-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the output of this program?',
      id: 'Apa output dari program ini?',
    },
    code: 'pub trait Summary {\n   fn summarize(&self) -> String {\n       String::from("(Read more...)")\n   }\n}\nstruct NewsArticle { headline: String }\nimpl Summary for NewsArticle {}\nfn main() {\n   let article = NewsArticle { headline: String::from("Rust is fast!") };\n   println!("{}", article.summarize());\n}',
    expectedStdout: '(Read more...)',
    explanation: {
      en: 'Since the `impl Summary for NewsArticle` block is empty, the `NewsArticle` type uses the default implementation of `summarize` provided by the trait.',
      id: 'Karena blok `impl Summary for NewsArticle` kosong, tipe `NewsArticle` menggunakan implementasi default dari `summarize` yang disediakan oleh trait.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-default-q3',
    type: 'mcq',
    prompt: {
      en: 'Can a default method implementation call other methods from the same trait?',
      id: 'Dapatkah implementasi metode default memanggil metode lain dari trait yang sama?',
    },
    choices: [
      {
        en: 'No, that would cause a circular dependency.',
        id: 'Tidak, itu akan menyebabkan dependensi sirkular.',
      },
      {
        en: 'Yes, even methods that do not have a default implementation.',
        id: 'Ya, bahkan metode yang tidak memiliki implementasi default.',
      },
      {
        en: 'Only if the other methods also have a default implementation.',
        id: 'Hanya jika metode lain juga memiliki implementasi default.',
      },
      {
        en: 'Only if the methods are marked as `pub`.',
        id: 'Hanya jika metode ditandai sebagai `pub`.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Yes, a default method can call other methods in the trait. This allows for creating complex default behavior that relies on a few required methods to be implemented by the user.',
      id: 'Ya, sebuah metode default dapat memanggil metode lain dalam trait. Ini memungkinkan pembuatan perilaku default yang kompleks yang bergantung pada beberapa metode yang harus diimplementasikan oleh pengguna.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-default-q4',
    type: 'code_fix',
    prompt: {
      en: 'The `Tweet` struct should have a more specific summary. How do you override the default implementation?',
      id: 'Struct `Tweet` seharusnya memiliki ringkasan yang lebih spesifik. Bagaimana cara menimpa (override) implementasi default?',
    },
    code: 'pub trait Summary { fn summarize(&self) -> String { String::from("(Read more...)") } }\nstruct Tweet { content: String }\n// Your overriding implementation here',
    choices: [
      'impl Summary for Tweet {\n   fn summarize(&self) -> String {\n       format!("Tweet: {}", self.content)\n   }\n}',
      'impl Summary for Tweet {\n   fn override_summarize(&self) -> String {\n       ...\n   }\n}',
      'impl Summary for Tweet { default = false; ... }',
      'You must create a new trait.',
    ],
    correctIndex: 0,
    explanation: {
      en: 'To override a default method, you simply provide a new implementation for that method within the `impl` block for your type.',
      id: 'Untuk menimpa metode default, Anda cukup menyediakan implementasi baru untuk metode tersebut di dalam blok `impl` untuk tipe Anda.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-default-q5',
    type: 'tf',
    prompt: {
      en: 'If a trait has all default methods, you must still use an empty `impl` block (`impl MyTrait for MyType {}`) to apply it to a type.',
      id: 'Jika sebuah trait memiliki semua metode default, Anda masih harus menggunakan blok `impl` kosong (`impl MyTrait for MyType {}`) untuk menerapkannya pada sebuah tipe.',
    },
    answer: true,
    explanation: {
      en: "Even if all methods are default, Rust needs an explicit `impl` block to know that you intend for that type to have the trait's behavior.",
      id: 'Meskipun semua metode bersifat default, Rust memerlukan blok `impl` eksplisit untuk mengetahui bahwa Anda bermaksud agar tipe tersebut memiliki perilaku dari trait.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: traits as parameters and return types
  {
    id: 'trait-param-q1',
    type: 'mcq',
    prompt: {
      en: 'What does the `impl Trait` syntax in a function parameter mean?',
      id: 'Apa arti dari sintaks `impl Trait` pada parameter fungsi?',
    },
    choices: [
      {
        en: 'The function returns a type that implements the trait.',
        id: 'Fungsi mengembalikan tipe yang mengimplementasikan trait.',
      },
      {
        en: 'The function takes a concrete type named `impl`.',
        id: 'Fungsi menerima tipe konkret bernama `impl`.',
      },
      {
        en: 'The function accepts any type that implements the specified trait.',
        id: 'Fungsi menerima tipe apa pun yang mengimplementasikan trait yang ditentukan.',
      },
      {
        en: 'The function will implement the trait for the given parameter.',
        id: 'Fungsi akan mengimplementasikan trait untuk parameter yang diberikan.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: '`fn notify(item: &impl Summary)` is syntactic sugar for a trait bound. It means the `item` parameter accepts any type that implements the `Summary` trait.',
      id: '`fn notify(item: &impl Summary)` adalah gula sintaksis untuk batasan trait (trait bound). Artinya parameter `item` menerima tipe apa pun yang mengimplementasikan trait `Summary`.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-return-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a limitation of using `impl Trait` as a return type?',
      id: 'Apa batasan dari penggunaan `impl Trait` sebagai tipe kembalian?',
    },
    choices: [
      {
        en: 'You can only return one specific concrete type that implements the trait.',
        id: 'Anda hanya dapat mengembalikan satu tipe konkret spesifik yang mengimplementasikan trait.',
      },
      {
        en: 'It is less efficient than returning a concrete type.',
        id: 'Kurang efisien dibandingkan mengembalikan tipe konkret.',
      },
      {
        en: 'It cannot be used with traits that have associated types.',
        id: 'Tidak dapat digunakan dengan trait yang memiliki tipe terkait.',
      },
      {
        en: 'You cannot call methods on the returned value.',
        id: 'Anda tidak dapat memanggil metode pada nilai yang dikembalikan.',
      },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Even though the caller only sees `impl Trait`, the function must return a single, specific type. You cannot have `if-else` logic that returns different concrete types (e.g., `Tweet` or `NewsArticle`) within the same function.',
      id: 'Meskipun pemanggil hanya melihat `impl Trait`, fungsi tersebut harus mengembalikan satu tipe konkret yang spesifik. Anda tidak dapat memiliki logika `if-else` yang mengembalikan tipe konkret berbeda (misalnya, `Tweet` atau `NewsArticle`) dalam fungsi yang sama.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-bound-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the full syntax for a "trait bound", for which `impl Trait` is sugar?',
      id: 'Apa sintaks lengkap untuk "trait bound", di mana `impl Trait` adalah gula sintaksisnya?',
    },
    choices: [
      { en: '<T: Summary>', id: '<T: Summary>' },
      { en: '<T where Summary>', id: '<T where Summary>' },
      { en: '<T is Summary>', id: '<T is Summary>' },
      { en: '<T implements Summary>', id: '<T implements Summary>' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The full generic syntax is `fn my_func<T: Summary>(item: &T)`. The `T: Summary` part is called a trait bound, which constrains the generic type `T` to types that implement `Summary`.',
      id: 'Sintaks generik lengkapnya adalah `fn my_func<T: Summary>(item: &T)`. Bagian `T: Summary` disebut trait bound, yang membatasi tipe generik `T` hanya untuk tipe yang mengimplementasikan `Summary`.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-cond-q1',
    type: 'mcq',
    prompt: {
      en: 'How do you conditionally implement a method on a struct only if its generic type implements a certain trait?',
      id: 'Bagaimana cara mengimplementasikan metode secara kondisional pada sebuah struct hanya jika tipe generiknya mengimplementasikan trait tertentu?',
    },
    choices: [
      {
        en: 'impl<T: Display> Pair<T> { fn to_string(&self) -> String { ... } }',
        id: 'impl<T: Display> Pair<T> { fn to_string(&self) -> String { ... } }',
      },
      {
        en: 'impl<T> Pair<T> { if T: Display { fn to_string(&self) ... } }',
        id: 'impl<T> Pair<T> { if T: Display { fn to_string(&self) ... } }',
      },
      {
        en: 'impl<T> Pair<T> where T: Display { fn to_string(&self) -> String { ... } }',
        id: 'impl<T> Pair<T> where T: Display { fn to_string(&self) -> String { ... } }',
      },
      { en: 'Both A and C are valid syntax.', id: 'Keduanya A dan C adalah sintaks yang valid.' },
    ],
    correctIndex: 3,
    explanation: {
      en: 'You can add trait bounds to an `impl` block. This means the methods inside will only be available if the generic type of the struct instance meets those bounds.',
      id: 'Anda dapat menambahkan batasan trait ke blok `impl`. Ini berarti metode di dalamnya hanya akan tersedia jika tipe generik dari instance struct memenuhi batasan tersebut.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q1',
    type: 'mcq',
    prompt: {
      en: 'What is a "blanket implementation"?',
      id: 'Apa itu "blanket implementation"?',
    },
    choices: [
      {
        en: 'A default implementation for all methods in a trait.',
        id: 'Implementasi default untuk semua metode dalam sebuah trait.',
      },
      {
        en: 'An implementation of a trait for any type that satisfies certain trait bounds.',
        id: 'Implementasi trait untuk tipe apa pun yang memenuhi batasan trait tertentu.',
      },
      {
        en: 'An implementation that covers all possible enum variants.',
        id: 'Implementasi yang mencakup semua varian enum yang mungkin.',
      },
      {
        en: 'A `use` statement that imports all items from a module.',
        id: 'Pernyataan `use` yang mengimpor semua item dari sebuah modul.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "A classic example is the standard library's implementation of `ToString` for any type that implements `Display`: `impl<T: Display> ToString for T`. This is a powerful way to add behavior to many types at once.",
      id: 'Contoh klasiknya adalah implementasi `ToString` dari pustaka standar untuk tipe apa pun yang mengimplementasikan `Display`: `impl<T: Display> ToString for T`. Ini adalah cara yang kuat untuk menambahkan perilaku ke banyak tipe sekaligus.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: lifetimes
  {
    id: 'life-q1',
    type: 'mcq',
    prompt: {
      en: 'What is the main purpose of lifetimes in Rust?',
      id: 'Apa tujuan utama dari lifetime di Rust?',
    },
    choices: [
      {
        en: 'To measure how long a program runs.',
        id: 'Untuk mengukur berapa lama sebuah program berjalan.',
      },
      {
        en: 'To ensure that references are valid for as long as they are used.',
        id: 'Untuk memastikan bahwa referensi valid selama masih digunakan.',
      },
      {
        en: 'To control when memory is allocated and deallocated.',
        id: 'Untuk mengontrol kapan memori dialokasikan dan didealokasikan.',
      },
      {
        en: 'To define the lifespan of a thread.',
        id: 'Untuk mendefinisikan masa hidup sebuah thread.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Lifetimes are a static analysis tool that allows the borrow checker to prove that references will not outlive the data they point to, thus preventing dangling references.',
      id: 'Lifetime adalah alat analisis statis yang memungkinkan borrow checker untuk membuktikan bahwa referensi tidak akan hidup lebih lama dari data yang dirujuknya, sehingga mencegah dangling references.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-ann-q1',
    type: 'mcq',
    prompt: {
      en: "What does the lifetime annotation in `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str` signify?",
      id: "Apa arti dari anotasi lifetime dalam `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str`?",
    },
    choices: [
      {
        en: 'The function takes exactly one second to run.',
        id: 'Fungsi tersebut membutuhkan waktu tepat satu detik untuk berjalan.',
      },
      {
        en: 'The returned reference will be valid for as long as both input references are valid.',
        id: 'Referensi yang dikembalikan akan valid selama kedua referensi input valid.',
      },
      {
        en: 'The function allocates memory that must be freed later.',
        id: 'Fungsi mengalokasikan memori yang harus dibebaskan nanti.',
      },
      {
        en: 'The function only works with static strings.',
        id: 'Fungsi hanya bekerja dengan string statis.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "The generic lifetime parameter `'a` connects the lifetimes of the parameters and the return value. It tells the compiler that the lifetime of the returned reference is constrained by the smaller of the lifetimes of `x` and `y`.",
      id: "Parameter lifetime generik `'a` menghubungkan lifetime dari parameter dan nilai kembalian. Ini memberitahu kompiler bahwa lifetime dari referensi yang dikembalikan dibatasi oleh lifetime yang lebih kecil dari `x` dan `y`.",
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-q2',
    type: 'tf',
    prompt: {
      en: 'Lifetime annotations change how long any of the references live.',
      id: 'Anotasi lifetime mengubah berapa lama sebuah referensi hidup.',
    },
    answer: false,
    explanation: {
      en: "Lifetimes don't alter the lifespan of any values. They describe the relationships between the lifetimes of multiple references, allowing the compiler to perform its safety checks.",
      id: 'Lifetime tidak mengubah masa hidup nilai apa pun. Mereka mendeskripsikan hubungan antara lifetime dari beberapa referensi, memungkinkan kompiler untuk melakukan pemeriksaan keamanannya.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q3',
    type: 'predict_output',
    prompt: {
      en: 'Why does this code fail to compile?',
      id: 'Mengapa kode ini gagal dikompilasi?',
    },
    code: 'fn main() {\n   let r;\n   {\n       let x = 5;\n       r = &x;\n   }\n   println!("r: {}", r);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation: {
      en: 'This is a classic dangling reference. The variable `x` goes out of scope (and is dropped) at the end of the inner block. The reference `r` would be left pointing to invalid memory, but the borrow checker prevents this at compile time.',
      id: 'Ini adalah contoh klasik dari dangling reference. Variabel `x` keluar dari cakupan (dan di-drop) di akhir blok dalam. Referensi `r` akan menunjuk ke memori yang tidak valid, tetapi borrow checker mencegah ini pada waktu kompilasi.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q4',
    type: 'mcq',
    prompt: {
      en: "What is the special lifetime `'static` used for?",
      id: "Untuk apa lifetime khusus `'static` digunakan?",
    },
    choices: [
      {
        en: 'A reference that is only valid within the current function.',
        id: 'Referensi yang hanya valid di dalam fungsi saat ini.',
      },
      {
        en: 'A reference that can live for the entire duration of the program.',
        id: 'Referensi yang dapat hidup selama seluruh durasi program.',
      },
      {
        en: 'A lifetime for variables that cannot be changed.',
        id: 'Lifetime untuk variabel yang tidak dapat diubah.',
      },
      {
        en: 'A lifetime that is determined at runtime.',
        id: 'Lifetime yang ditentukan saat runtime.',
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "The `'static` lifetime indicates that the data pointed to by the reference lives for the entire program runtime. String literals, for example, have a `'static` lifetime because they are stored in the program's binary.",
      id: "Lifetime `'static` menunjukkan bahwa data yang dirujuk oleh referensi hidup selama seluruh waktu jalan program. Literal string, misalnya, memiliki lifetime `'static` karena disimpan dalam biner program.",
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  // Melanjutkan dari pertanyaan sebelumnya...

  // Lesson: lifetimes (lanjutan)
  {
    id: 'life-q5',
    type: 'fib',
    prompt: {
      en: 'The process by which the compiler automatically assigns lifetimes without explicit annotations is called lifetime ____.',
      id: 'Proses di mana kompiler secara otomatis menetapkan lifetime tanpa anotasi eksplisit disebut ____ lifetime.',
    },
    acceptableAnswers: ['elision'],
    explanation: {
      en: 'The compiler follows a set of rules, known as elision rules, to infer lifetimes in common, unambiguous cases, which reduces the amount of annotation needed.',
      id: 'Kompiler mengikuti serangkaian aturan, yang dikenal sebagai aturan elision, untuk menyimpulkan lifetime dalam kasus-kasus umum yang tidak ambigu, yang mengurangi jumlah anotasi yang diperlukan.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-ann-q2',
    type: 'tf',
    prompt: {
      en: 'Every reference in Rust has a lifetime.',
      id: 'Setiap referensi di Rust memiliki lifetime.',
    },
    answer: true,
    explanation: {
      en: "Although you don't always have to write them, every reference has a lifetime that the borrow checker analyzes. Most of the time, the compiler can infer it for you.",
      id: 'Meskipun Anda tidak selalu harus menuliskannya, setiap referensi memiliki lifetime yang dianalisis oleh borrow checker. Sebagian besar waktu, kompiler dapat menyimpulkannya untuk Anda.',
    },
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'life-ann-q3',
    type: 'mcq',
    prompt: {
      en: 'In which of these cases are explicit lifetime annotations most likely required?',
      id: 'Dalam kasus manakah di antara ini anotasi lifetime eksplisit paling mungkin diperlukan?',
    },
    choices: [
      {
        en: 'A function that takes one reference and returns a value.',
        id: 'Fungsi yang mengambil satu referensi dan mengembalikan sebuah nilai.',
      },
      {
        en: 'A function that takes one reference and returns that same reference.',
        id: 'Fungsi yang mengambil satu referensi dan mengembalikan referensi yang sama itu.',
      },
      {
        en: 'A struct that holds a reference to data owned by another object.',
        id: 'Struct yang menyimpan referensi ke data yang dimiliki oleh objek lain.',
      },
      {
        en: "A simple `for` loop over a vector's items.",
        id: 'Perulangan `for` sederhana pada item-item vektor.',
      },
    ],
    correctIndex: 2,
    explanation: {
      en: "When a struct holds a reference, you must explicitly annotate its lifetime (e.g., `struct Excerpt<'a> { part: &'a str; }`) so the compiler can ensure the struct doesn't outlive the data it refers to.",
      id: "Ketika sebuah struct menyimpan referensi, Anda harus secara eksplisit menganotasi lifetime-nya (misalnya, `struct Excerpt<'a> { part: &'a str; }`) sehingga kompiler dapat memastikan struct tersebut tidak hidup lebih lama dari data yang dirujuknya.",
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-ann-q4',
    type: 'code_fix',
    prompt: {
      en: 'Add the correct lifetime annotations to make this function compile.',
      id: 'Tambahkan anotasi lifetime yang benar agar fungsi ini dapat dikompilasi.',
    },
    code: "fn get_first<'a>(x: &'a str, y: &str) -> &'a str {\n   x\n}",
    choices: [
      'The code is already correct.',
      "fn get_first<'a, 'b>(x: &'a str, y: &'b str) -> &'a str",
      'fn get_first(x: &str, y: &str) -> &str',
      'Both A and B are correct.',
    ],
    correctIndex: 3,
    explanation: {
      en: 'The compiler can infer the lifetimes here using elision rules. However, being explicit as in choice B is also correct and shows the relationship: the output lifetime is tied only to the lifetime of `x`.',
      id: 'Kompiler dapat menyimpulkan lifetime di sini menggunakan aturan elision. Namun, menjadi eksplisit seperti pada pilihan B juga benar dan menunjukkan hubungannya: lifetime output hanya terikat pada lifetime `x`.',
    },
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-ann-q5',
    type: 'mcq',
    prompt: {
      en: "What does a lifetime bound like `<'a: 'b>` mean?",
      id: "Apa arti dari batasan lifetime seperti `<'a: 'b>`?",
    },
    choices: [
      { en: "Lifetime `'a` is shorter than `'b`.", id: "Lifetime `'a` lebih pendek dari `'b`." },
      { en: "Lifetime `'a` is equal to `'b`.", id: "Lifetime `'a` sama dengan `'b`." },
      {
        en: "Lifetime `'a` must outlive (be at least as long as) lifetime `'b`.",
        id: "Lifetime `'a` harus hidup lebih lama dari (setidaknya sama panjangnya dengan) lifetime `'b`.",
      },
      { en: 'This syntax is invalid in Rust.', id: 'Sintaks ini tidak valid di Rust.' },
    ],
    correctIndex: 2,
    explanation: {
      en: "This is a lifetime bound, which constrains one lifetime to be valid for at least as long as another. It's an advanced feature used in complex generic code.",
      id: 'Ini adalah batasan lifetime, yang membatasi satu lifetime agar valid setidaknya selama lifetime lainnya. Ini adalah fitur lanjutan yang digunakan dalam kode generik yang kompleks.',
    },
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },

  // =================================================================
  // Topic: advanced-concepts
  // =================================================================

  // Lesson: smart-pointers
  {
    id: 'smart-ptr-q4',
    type: 'mcq',
    prompt: {
      en: 'Which smart pointer allows for multiple ownership of data?',
      id: 'Smart pointer manakah yang memungkinkan kepemilikan data oleh banyak pihak?',
    },
    choices: [
      { en: 'Box<T>', id: 'Box<T>' },
      { en: 'Rc<T>', id: 'Rc<T>' },
      { en: 'RefCell<T>', id: 'RefCell<T>' },
      { en: 'Mutex<T>', id: 'Mutex<T>' },
    ],
    correctIndex: 1,
    explanation: {
      en: '`Rc<T>` stands for Reference Counting. It keeps track of how many references there are to a piece of data. The data is only cleaned up when the last reference goes out of scope.',
      id: '`Rc<T>` adalah singkatan dari Reference Counting (Penghitungan Referensi). Ia melacak berapa banyak referensi yang ada untuk sepotong data. Data hanya akan dibersihkan ketika referensi terakhir keluar dari cakupan.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'smart-ptr-q5',
    type: 'tf',
    prompt: {
      en: '`Rc<T>` is safe to use across multiple threads.',
      id: '`Rc<T>` aman digunakan di banyak thread.',
    },
    answer: false,
    explanation: {
      en: '`Rc<T>` is not thread-safe. For thread-safe reference counting, you must use `Arc<T>` (Atomically Reference Counted).',
      id: '`Rc<T>` tidak aman untuk thread (thread-safe). Untuk penghitungan referensi yang aman untuk thread, Anda harus menggunakan `Arc<T>` (Atomically Reference Counted).',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: concurrency
  {
    id: 'concur-q3',
    type: 'mcq',
    prompt: {
      en: 'What is a common way for threads to communicate in Rust?',
      id: 'Apa cara umum bagi thread untuk berkomunikasi di Rust?',
    },
    choices: [
      { en: 'Global variables', id: 'Variabel global' },
      { en: 'Channels', id: 'Channel' },
      { en: 'Raw pointers', id: 'Raw pointer' },
      { en: 'Direct memory access', id: 'Akses memori langsung' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Channels are a message-passing concurrency feature where threads can send messages to each other without sharing memory directly, preventing many common concurrency bugs.',
      id: 'Channel adalah fitur konkurensi berbasis pengiriman pesan di mana thread dapat mengirim pesan satu sama lain tanpa berbagi memori secara langsung, mencegah banyak bug konkurensi yang umum.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'concur-q4',
    type: 'fib',
    prompt: {
      en: 'To share state between threads safely, you can use an `Arc<T>` combined with a _____.',
      id: 'Untuk berbagi state antar thread dengan aman, Anda dapat menggunakan `Arc<T>` yang dikombinasikan dengan _____.',
    },
    acceptableAnswers: ['Mutex<T>', 'Mutex'],
    explanation: {
      en: '`Arc` (Atomic Reference Count) allows multiple threads to own a reference, and `Mutex` (Mutual Exclusion) ensures that only one thread can access the data at a time.',
      id: '`Arc` (Atomic Reference Count) memungkinkan beberapa thread untuk memiliki referensi, dan `Mutex` (Mutual Exclusion) memastikan bahwa hanya satu thread yang dapat mengakses data pada satu waktu.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'concur-q5',
    type: 'tf',
    prompt: {
      en: 'When the main thread of a Rust program finishes, all spawned threads are immediately stopped.',
      id: 'Ketika thread utama dari program Rust selesai, semua thread yang di-spawn akan segera dihentikan.',
    },
    answer: true,
    explanation: {
      en: 'If the main thread completes, the program exits, even if other threads are still running. You must explicitly wait for threads to finish using a `JoinHandle` if you need them to complete their work.',
      id: 'Jika thread utama selesai, program akan keluar, bahkan jika thread lain masih berjalan. Anda harus secara eksplisit menunggu thread selesai menggunakan `JoinHandle` jika Anda memerlukannya untuk menyelesaikan pekerjaan mereka.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },

  // Lesson: async-await
  {
    id: 'async-q2',
    type: 'mcq',
    prompt: {
      en: 'What does an `async` function in Rust return?',
      id: 'Apa yang dikembalikan oleh fungsi `async` di Rust?',
    },
    choices: [
      { en: 'A value directly', id: 'Sebuah nilai secara langsung' },
      { en: 'A `Result`', id: 'Sebuah `Result`' },
      {
        en: 'A type that implements the `Future` trait',
        id: 'Sebuah tipe yang mengimplementasikan trait `Future`',
      },
      { en: 'A new thread', id: 'Sebuah thread baru' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'An `async` function is syntactic sugar for a function that returns a `Future`. A `Future` is a value that might not be computed yet.',
      id: 'Fungsi `async` adalah gula sintaksis untuk fungsi yang mengembalikan `Future`. `Future` adalah nilai yang mungkin belum dihitung.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'async-q3',
    type: 'mcq',
    prompt: {
      en: 'What is the role of the `.await` keyword?',
      id: 'Apa peran dari kata kunci `.await`?',
    },
    choices: [
      { en: 'To start an asynchronous operation.', id: 'Untuk memulai operasi asinkron.' },
      { en: 'To define an asynchronous function.', id: 'Untuk mendefinisikan fungsi asinkron.' },
      {
        en: 'To pause the current function until a `Future` is resolved.',
        id: 'Untuk menjeda fungsi saat ini hingga sebuah `Future` selesai.',
      },
      { en: 'To cancel a `Future`.', id: 'Untuk membatalkan sebuah `Future`.' },
    ],
    correctIndex: 2,
    explanation: {
      en: '`.await` is used to wait for the completion of another asynchronous operation without blocking the entire thread, allowing other tasks to run.',
      id: '`.await` digunakan untuk menunggu selesainya operasi asinkron lain tanpa memblokir seluruh thread, memungkinkan tugas lain untuk berjalan.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'async-q4',
    type: 'tf',
    prompt: {
      en: "Rust's standard library includes a built-in async runtime.",
      id: 'Pustaka standar Rust menyertakan runtime async bawaan.',
    },
    answer: false,
    explanation: {
      en: 'The `async/await` syntax is part of the language, but the executor that actually runs the `Future`s must be provided by an external crate, such as `tokio` or `async-std`.',
      id: 'Sintaks `async/await` adalah bagian dari bahasa, tetapi eksekutor yang benar-benar menjalankan `Future` harus disediakan oleh crate eksternal, seperti `tokio` atau `async-std`.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'async-q5',
    type: 'fib',
    prompt: {
      en: 'An async _____ is responsible for polling `Future`s until they complete.',
      id: 'Sebuah _____ async bertanggung jawab untuk melakukan polling pada `Future` hingga mereka selesai.',
    },
    acceptableAnswers: ['runtime', 'executor'],
    explanation: {
      en: 'The async runtime or executor manages a pool of tasks and runs them concurrently, polling their `Future`s when they are ready to make progress.',
      id: 'Runtime atau eksekutor async mengelola sekumpulan tugas dan menjalankannya secara bersamaan, melakukan polling pada `Future` mereka ketika siap untuk membuat kemajuan.',
    },
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // =================================================================
  // Topic: error-handling (lanjutan)
  // =================================================================

  // Lesson: result-type
  {
    id: 'result-q4',
    type: 'mcq',
    prompt: {
      en: "Which method on `Result` returns the contained `Ok` value or computes a value from a closure if it's an `Err`?",
      id: 'Metode mana pada `Result` yang mengembalikan nilai `Ok` yang terkandung atau menghitung nilai dari sebuah closure jika variannya adalah `Err`?',
    },
    choices: [
      { en: 'unwrap()', id: 'unwrap()' },
      { en: 'expect()', id: 'expect()' },
      { en: 'unwrap_or()', id: 'unwrap_or()' },
      { en: 'unwrap_or_else()', id: 'unwrap_or_else()' },
    ],
    correctIndex: 3,
    explanation: {
      en: '`unwrap_or_else` is useful when the default value is expensive to compute, as the closure is only executed in the `Err` case.',
      id: '`unwrap_or_else` berguna ketika nilai default mahal untuk dihitung, karena closure hanya dieksekusi dalam kasus `Err`.',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'result-q5',
    type: 'code_fix',
    prompt: {
      en: "This code uses `unwrap()` which might panic. Change it to return a default value of `0` if there's an error.",
      id: 'Kode ini menggunakan `unwrap()` yang mungkin menyebabkan panic. Ubah agar mengembalikan nilai default `0` jika terjadi eror.',
    },
    code: 'fn main() {\n   let num_str = "abc";\n   let number = num_str.parse::<i32>().unwrap();\n}',
    choices: [
      'let number = num_str.parse::<i32>().unwrap_or(0);',
      'let number = num_str.parse::<i32>().expect("Failed to parse");',
      'let number = match num_str.parse::<i32>() { Ok(n) => n, Err(_) => 0 };',
      'Both A and C are correct solutions.',
    ],
    correctIndex: 3,
    explanation: {
      en: 'Both `unwrap_or(0)` and the `match` statement are valid and safe ways to provide a default value in case of an error, preventing a panic.',
      id: 'Baik `unwrap_or(0)` maupun pernyataan `match` adalah cara yang valid dan aman untuk memberikan nilai default jika terjadi eror, mencegah panic.',
    },
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: recoverable-errors
  {
    id: 'err-handle-q2',
    type: 'predict_output',
    prompt: {
      en: 'What is the purpose of the `?` operator in this function?',
      id: 'Apa tujuan dari operator `?` dalam fungsi ini?',
    },
    code: 'use std::fs::File;\nuse std::io::Read;\n\nfn read_username_from_file() -> Result<String, std::io::Error> {\n   let mut f = File::open("hello.txt")?;\n   let mut s = String::new();\n   f.read_to_string(&mut s)?;\n   Ok(s)\n}\n// main function omitted for brevity',
    expectedStdout: 'It propagates errors out of the function.',
    explanation: {
      en: 'The `?` after `File::open` means "if the result is an `Err`, return from `read_username_from_file` immediately with that `Err`". The same logic applies to `read_to_string`. It greatly simplifies error handling code.',
      id: 'Tanda `?` setelah `File::open` berarti "jika hasilnya adalah `Err`, segera kembali dari `read_username_from_file` dengan `Err` tersebut". Logika yang sama berlaku untuk `read_to_string`. Ini sangat menyederhanakan kode penanganan eror.',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'err-handle-q3',
    type: 'tf',
    prompt: {
      en: 'The `?` operator can be used in any function.',
      id: 'Operator `?` dapat digunakan di fungsi mana pun.',
    },
    answer: false,
    explanation: {
      en: 'The `?` operator can only be used in functions that have a return type of `Result<T, E>` or `Option<T>` (or another type that implements the `Try` trait).',
      id: 'Operator `?` hanya dapat digunakan dalam fungsi yang memiliki tipe kembalian `Result<T, E>` atau `Option<T>` (atau tipe lain yang mengimplementasikan trait `Try`).',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'err-handle-q4',
    type: 'mcq',
    prompt: {
      en: 'What is the main difference between `panic!` and returning a `Result`?',
      id: 'Apa perbedaan utama antara `panic!` dan mengembalikan `Result`?',
    },
    choices: [
      {
        en: '`panic!` is for unrecoverable errors, `Result` is for recoverable errors.',
        id: '`panic!` untuk eror yang tidak dapat dipulihkan, `Result` untuk eror yang dapat dipulihkan.',
      },
      {
        en: '`Result` is less performant than `panic!`.',
        id: '`Result` kurang performan dibandingkan `panic!`.',
      },
      {
        en: '`panic!` logs the error, `Result` does not.',
        id: '`panic!` mencatat eror, `Result` tidak.',
      },
      { en: 'There is no major difference.', id: 'Tidak ada perbedaan besar.' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'You use `Result` when an error is expected and the calling code should have a chance to handle it. You use `panic!` when the program has reached an unrecoverable state (usually due to a bug).',
      id: 'Anda menggunakan `Result` ketika eror diharapkan terjadi dan kode pemanggil harus memiliki kesempatan untuk menanganinya. Anda menggunakan `panic!` ketika program telah mencapai keadaan yang tidak dapat dipulihkan (biasanya karena bug).',
    },
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'err-handle-q5',
    type: 'code_fix',
    prompt: {
      en: 'Rewrite the following code using the `?` operator to make it more concise.',
      id: 'Tulis ulang kode berikut menggunakan operator `?` agar lebih ringkas.',
    },
    code: 'fn read_file() -> Result<String, std::io::Error> {\n   let f = File::open("data.txt");\n   let mut f = match f {\n       Ok(file) => file,\n       Err(e) => return Err(e),\n   };\n   // ... more code\n}',
    choices: [
      'let mut f = File::open("data.txt")?;',
      'let mut f = File::open("data.txt").unwrap();',
      'let mut f = File::open("data.txt").expect("error");',
      'let mut f = File::open("data.txt"); if f.is_err() { return f; }',
    ],
    correctIndex: 0,
    explanation: {
      en: 'The `?` operator is the idiomatic and concise way to handle a `Result` in a function that itself returns a `Result`, replacing the entire `match` block.',
      id: 'Operator `?` adalah cara yang idiomatik dan ringkas untuk menangani `Result` dalam fungsi yang juga mengembalikan `Result`, menggantikan seluruh blok `match`.',
    },
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },

  // =================================================================
  // Topic: advanced-types
  // =================================================================

  // Lesson: advanced-functions
  {
    id: 'adv-func-q2',
    type: 'mcq',
    prompt: {
      en: 'How do you use a function pointer in Rust?',
      id: 'Bagaimana cara menggunakan function pointer di Rust?',
    },
    choices: [
      { en: 'let f: fn(i32) -> i32 = plus_one;', id: 'let f: fn(i32) -> i32 = plus_one;' },
      { en: 'let f: Fn(i32) -> i32 = &plus_one;', id: 'let f: Fn(i32) -> i32 = &plus_one;' },
      { en: 'let f = &plus_one;', id: 'let f = &plus_one;' },
      { en: 'let f = pointer_to(plus_one);', id: 'let f = pointer_to(plus_one);' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'You can declare a variable with the `fn` type to hold a function pointer. This is distinct from closures which use `Fn`, `FnMut`, or `FnOnce` traits.',
      id: 'Anda dapat mendeklarasikan variabel dengan tipe `fn` untuk menampung function pointer. Ini berbeda dari closure yang menggunakan trait `Fn`, `FnMut`, atau `FnOnce`.',
    },
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q3',
    type: 'tf',
    prompt: {
      en: 'Function pointers and closures are interchangeable in all situations.',
      id: 'Function pointer dan closure dapat dipertukarkan dalam semua situasi.',
    },
    answer: false,
    explanation: {
      en: 'While closures can often be passed where function pointers are expected, they are not identical. Closures can capture their environment, whereas function pointers cannot.',
      id: 'Meskipun closure seringkali dapat diberikan di tempat function pointer diharapkan, keduanya tidak identik. Closure dapat menangkap lingkungannya, sedangkan function pointer tidak bisa.',
    },
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q4',
    type: 'predict_output',
    prompt: {
      en: 'What does this code print?',
      id: 'Apa yang dicetak oleh kode ini?',
    },
    code: 'fn add_one(x: i32) -> i32 { x + 1 }\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n   f(arg) + f(arg)\n}\nfn main() {\n   let answer = do_twice(add_one, 5);\n   println!("The answer is: {}", answer);\n}',
    expectedStdout: 'The answer is: 12',
    explanation: {
      en: 'The function `do_twice` takes `add_one` as a function pointer. It calls `add_one(5)` twice, resulting in `6 + 6`, which is 12.',
      id: 'Fungsi `do_twice` mengambil `add_one` sebagai function pointer. Ia memanggil `add_one(5)` dua kali, menghasilkan `6 + 6`, yaitu 12.',
    },
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q5',
    type: 'fib',
    prompt: {
      en: 'You can return closures from functions by using `impl Fn(i32) -> i32` or by wrapping them in a ____.',
      id: 'Anda dapat mengembalikan closure dari fungsi dengan menggunakan `impl Fn(i32) -> i32` atau dengan membungkusnya dalam ____.',
    },
    acceptableAnswers: ['Box<dyn Fn(i32) -> i32>', 'Box'],
    explanation: {
      en: 'Because closures have an unknown size at compile time, you must use a trait object like `Box<dyn Trait>` to return them from a function.',
      id: 'Karena closure memiliki ukuran yang tidak diketahui saat kompilasi, Anda harus menggunakan trait object seperti `Box<dyn Trait>` untuk mengembalikannya dari sebuah fungsi.',
    },
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
];
