import { CodePractice } from '../types';

export const codePractices: CodePractice[] = [
  // Fundamentals
  {
    id: 'cp-001',
    title: {
      en: 'Hello World',
      id: 'Hello World',
    },
    description: {
      en: 'Write a simple Rust program that prints "Hello, World!" to the console.',
      id: 'Tulis program Rust sederhana yang mencetak "Hello, World!" ke konsol.',
    },
    initialCode: '// Write your code here\nfn main() {\n  \n}',
    expectedOutput: 'Hello, World!',
    solution: 'fn main() {\n  println!("Hello, World!");\n}',
    hints: [
      {
        en: 'Use the println! macro to print text',
        id: 'Gunakan makro println! untuk mencetak teks',
      },
      {
        en: 'The println! macro uses an exclamation mark (!)',
        id: 'Makro println! menggunakan tanda seru (!)',
      },
      {
        en: 'String literals in Rust are enclosed in double quotes',
        id: 'Literal string di Rust diapit oleh tanda kutip ganda',
      },
    ],
    difficulty: 'easy',
    category: 'Basic Syntax',
    lessonId: 'hello-world',
    topicId: 'fundamentals',
    points: 50,
  },

  {
    id: 'cp-002',
    title: {
      en: 'Variable Declaration',
      id: 'Deklarasi Variabel',
    },
    description: {
      en: 'Create variables to store and display your name and age.',
      id: 'Buat variabel untuk menyimpan dan menampilkan nama dan umur Anda.',
    },
    initialCode:
      'fn main() {\n  // Declare variables for name and age\n  \n  \n  \n  \n  // Print them using println!\n  \n}',
    expectedOutput: 'My name is John and I am 25 years old',
    solution:
      'fn main() {\n  let name = "John";\n  let age = 25;\n  println!("My name is {} and I am {} years old", name, age);\n}',
    hints: [
      {
        en: 'Use `let` to declare variables',
        id: 'Gunakan `let` untuk mendeklarasikan variabel',
      },
      {
        en: 'Variables are immutable by default in Rust',
        id: 'Variabel di Rust secara default bersifat immutable (tidak dapat diubah)',
      },
      {
        en: 'Use `mut` if you need to change the value later',
        id: 'Gunakan `mut` jika Anda perlu mengubah nilainya nanti',
      },
      {
        en: "String literals use double quotes, numbers don't need quotes",
        id: 'Literal string menggunakan tanda kutip ganda, angka tidak memerlukan tanda kutip',
      },
    ],
    difficulty: 'easy',
    category: 'Variables',
    lessonId: 'variables',
    topicId: 'fundamentals',
    points: 50,
  },

  {
    id: 'cp-003',
    title: {
      en: 'Type Annotations',
      id: 'Anotasi Tipe',
    },
    description: {
      en: 'Create variables with explicit type annotations for different data types.',
      id: 'Buat variabel dengan anotasi tipe eksplisit untuk tipe data yang berbeda.',
    },
    initialCode:
      'fn main() {\n  // Declare variables with explicit types\n  let name: &str = "Alice";\n  let age: u32 = 30;\n  let height: f64 = 1.75;\n  let is_student: bool = true;\n  \n  // Print all variables\n  \n}',
    expectedOutput: 'Name: Alice, Age: 30, Height: 1.75, Is Student: true',
    solution:
      'fn main() {\n  let name: &str = "Alice";\n  let age: u32 = 30;\n  let height: f64 = 1.75;\n  let is_student: bool = true;\n  \n  println!("Name: {}, Age: {}, Height: {}, Is Student: {}", name, age, height, is_student);\n}',
    hints: [
      {
        en: 'Use the format! macro for complex string formatting',
        id: 'Gunakan makro format! untuk pemformatan string yang kompleks',
      },
      {
        en: 'The format! macro returns a String',
        id: 'Makro format! mengembalikan sebuah String',
      },
      {
        en: 'You can use placeholders like {} in the format string',
        id: 'Anda dapat menggunakan placeholder seperti {} dalam string format',
      },
      {
        en: 'Variables are inserted in order',
        id: 'Variabel dimasukkan secara berurutan',
      },
    ],
    difficulty: 'easy',
    category: 'Data Types',
    lessonId: 'scalar-types',
    topicId: 'fundamentals',
    points: 50,
  },

  // Control Structures
  {
    id: 'cp-004',
    title: {
      en: 'If-Else Statement',
      id: 'Pernyataan If-Else',
    },
    description: {
      en: 'Write a program that checks if a number is positive, negative, or zero.',
      id: 'Tulis sebuah program yang memeriksa apakah sebuah angka positif, negatif, atau nol.',
    },
    initialCode: 'fn main() {\n  let number = -5;\n  \n  // Use if-else to check the number\n  \n}',
    expectedOutput: 'The number -5 is negative',
    solution:
      'fn main() {\n  let number = -5;\n  \n  if number > 0 {\n    println!("The number {} is positive", number);\n  } else if number < 0 {\n    println!("The number {} is negative", number);\n  } else {\n    println!("The number {} is zero", number);\n  }\n}',
    hints: [
      {
        en: 'Use `if` followed by a condition',
        id: 'Gunakan `if` diikuti oleh sebuah kondisi',
      },
      {
        en: 'The condition must be a boolean expression',
        id: 'Kondisi harus berupa ekspresi boolean',
      },
      {
        en: 'Use `else if` for additional conditions',
        id: 'Gunakan `else if` untuk kondisi tambahan',
      },
      { en: 'Use `else` for the default case', id: 'Gunakan `else` untuk kasus default' },
    ],
    difficulty: 'easy',
    category: 'Control Flow',
    lessonId: 'conditional-if',
    topicId: 'control-structures',
    points: 50,
  },

  {
    id: 'cp-005',
    title: {
      en: 'For Loop',
      id: 'Perulangan For',
    },
    description: {
      en: 'Use a for loop to print numbers from 1 to 5.',
      id: 'Gunakan perulangan for untuk mencetak angka dari 1 hingga 5.',
    },
    initialCode: 'fn main() {\n  // Use a for loop to print numbers 1 to 5\n  \n}',
    expectedOutput: '1\n2\n3\n4\n5',
    solution: 'fn main() {\n  for i in 1..=5 {\n    println!("{}", i);\n  }\n}',
    hints: [
      {
        en: 'Use `for` followed by a range',
        id: 'Gunakan `for` diikuti oleh sebuah rentang (range)',
      },
      {
        en: 'The range syntax is `start..=end` (inclusive)',
        id: 'Sintaks rentang adalah `start..=end` (inklusif)',
      },
      {
        en: 'Each iteration will assign the current number to a variable',
        id: 'Setiap iterasi akan memberikan angka saat ini ke sebuah variabel',
      },
      {
        en: 'Use `println!` inside the loop body',
        id: 'Gunakan `println!` di dalam badan perulangan',
      },
    ],
    difficulty: 'easy',
    category: 'Loops',
    lessonId: 'for-loops',
    topicId: 'control-structures',
    points: 50,
  },

  // Functions & Modules
  {
    id: 'cp-006',
    title: {
      en: 'Function Definition',
      id: 'Definisi Fungsi',
    },
    description: {
      en: 'Create a function that adds two numbers and returns the result.',
      id: 'Buat sebuah fungsi yang menjumlahkan dua angka dan mengembalikan hasilnya.',
    },
    initialCode:
      '// Define a function that adds two numbers\nfn add_numbers(a: i32, b: i32) -> i32 {\n  \n}\n\nfn main() {\n  let result = add_numbers(10, 20);\n  println!("10 + 20 = {}", result);\n}',
    expectedOutput: '10 + 20 = 30',
    solution:
      'fn add_numbers(a: i32, b: i32) -> i32 {\n  a + b\n}\n\nfn main() {\n  let result = add_numbers(10, 20);\n  println!("10 + 20 = {}", result);\n}',
    hints: [
      {
        en: 'Use the `return` keyword or just the expression',
        id: 'Gunakan kata kunci `return` atau cukup ekspresinya saja',
      },
      {
        en: 'In Rust, the last expression in a function is automatically returned',
        id: 'Di Rust, ekspresi terakhir dalam sebuah fungsi secara otomatis dikembalikan',
      },
      {
        en: 'Make sure the function signature matches the call',
        id: 'Pastikan signature fungsi cocok dengan pemanggilannya',
      },
      {
        en: 'The function should return an i32',
        id: 'Fungsi tersebut harus mengembalikan sebuah i32',
      },
    ],
    difficulty: 'medium',
    category: 'Functions',
    lessonId: 'functions',
    topicId: 'functions-modules',
    points: 100,
  },

  // Memory Management
  {
    id: 'cp-007',
    title: {
      en: 'Understanding Ownership',
      id: 'Memahami Ownership',
    },
    description: {
      en: 'Demonstrate ownership rules by creating and moving values between variables.',
      id: 'Demonstrasikan aturan ownership dengan membuat dan memindahkan nilai antar variabel.',
    },
    initialCode:
      'fn main() {\n  let s1 = String::from("hello");\n  \n  // Move s1 to s2\n  \n  // Try to use s1 here (this will cause an error)\n  \n  // Use s2 instead\n  \n}',
    expectedOutput: 's2 contains: hello',
    solution:
      'fn main() {\n  let s1 = String::from("hello");\n  \n  let s2 = s1; // Move s1 to s2\n  \n  // println!("s1: {}", s1); // This would cause an error\n  \n  println!("s2 contains: {}", s2);\n}',
    hints: [
      {
        en: 'Use `let s2 = s1;` to move ownership',
        id: 'Gunakan `let s2 = s1;` untuk memindahkan ownership',
      },
      {
        en: 'After moving, s1 is no longer valid',
        id: 'Setelah dipindahkan, s1 tidak lagi valid',
      },
      {
        en: 'Comment out the line that tries to use s1',
        id: 'Jadikan komentar pada baris yang mencoba menggunakan s1',
      },
      {
        en: 'Use s2 to access the string value',
        id: 'Gunakan s2 untuk mengakses nilai string',
      },
    ],
    difficulty: 'medium',
    category: 'Ownership',
    lessonId: 'ownership',
    topicId: 'memory-management',
    points: 100,
  },

  {
    id: 'cp-008',
    title: {
      en: 'Borrowing References',
      id: 'Meminjam Referensi',
    },
    description: {
      en: 'Create a function that borrows a string reference and prints its length.',
      id: 'Buat fungsi yang meminjam referensi string dan mencetak panjangnya.',
    },
    initialCode:
      '// Function that borrows a string reference\nfn print_string_length(s: &String) -> usize {\n  \n}\n\nfn main() {\n  let my_string = String::from("Rust Programming");\n  let length = print_string_length(&my_string);\n  println!("The string \'Rust Programming\' has {} characters", length);\n}',
    expectedOutput: "The string 'Rust Programming' has 16 characters",
    solution:
      'fn print_string_length(s: &String) -> usize {\n  s.len()\n}\n\nfn main() {\n  let my_string = String::from("Rust Programming");\n  let length = print_string_length(&my_string);\n  println!("The string \'Rust Programming\' has {} characters", length);\n}',
    hints: [
      {
        en: 'Use the `len()` method on the string reference',
        id: 'Gunakan metode `len()` pada referensi string',
      },
      {
        en: 'The function should return the length as usize',
        id: 'Fungsi harus mengembalikan panjangnya sebagai usize',
      },
      {
        en: 'Make sure to return the length value',
        id: 'Pastikan untuk mengembalikan nilai panjangnya',
      },
      {
        en: 'The function borrows the string, so ownership stays with main',
        id: 'Fungsi ini meminjam string, jadi ownership tetap ada di fungsi main',
      },
    ],
    difficulty: 'medium',
    category: 'Borrowing',
    lessonId: 'borrowing-ref',
    topicId: 'memory-management',
    points: 100,
  },

  // Structs & Enums
  {
    id: 'cp-009',
    title: {
      en: 'Struct Definition',
      id: 'Definisi Struct',
    },
    description: {
      en: 'Create a struct to represent a Person with name and age, then create an instance.',
      id: 'Buat sebuah struct untuk merepresentasikan Person dengan nama dan umur, lalu buat sebuah instance.',
    },
    initialCode:
      "// Define a Person struct\nstruct Person {\n  \n}\n\nfn main() {\n  // Create a Person instance\n  \n  \n  // Print the person's information\n  \n}",
    expectedOutput: 'Person: John Doe, Age: 30',
    solution:
      'struct Person {\n  name: String,\n  age: u32,\n}\n\nfn main() {\n  let person = Person {\n    name: String::from("John Doe"),\n    age: 30,\n  };\n  \n  println!("Person: {}, Age: {}", person.name, person.age);\n}',
    hints: [
      {
        en: 'Struct fields need types (String for name, u32 for age)',
        id: 'Field struct memerlukan tipe (String untuk nama, u32 untuk umur)',
      },
      {
        en: 'Use `String::from()` to create owned strings',
        id: 'Gunakan `String::from()` untuk membuat string yang dimiliki (owned string)',
      },
      {
        en: 'Create an instance using the struct name and field values',
        id: 'Buat instance menggunakan nama struct dan nilai field-nya',
      },
      {
        en: 'Access fields using dot notation (person.name)',
        id: 'Akses field menggunakan notasi titik (person.name)',
      },
    ],
    difficulty: 'medium',
    category: 'Structs',
    lessonId: 'structs',
    topicId: 'structs-enums',
    points: 100,
  },

  {
    id: 'cp-010',
    title: {
      en: 'Enum with Variants',
      id: 'Enum dengan Varian',
    },
    description: {
      en: 'Create an enum for different types of shapes and a function to calculate area.',
      id: 'Buat sebuah enum untuk berbagai jenis bentuk dan fungsi untuk menghitung luasnya.',
    },
    initialCode:
      '// Define an enum for shapes\nenum Shape {\n  \n}\n\n// Function to calculate area\nfn calculate_area(shape: &Shape) -> f64 {\n  \n}\n\nfn main() {\n  let circle = Shape::Circle(5.0);\n  let rectangle = Shape::Rectangle(4.0, 6.0);\n  \n  println!("Circle area: {:.2}", calculate_area(&circle));\n  println!("Rectangle area: {:.2}", calculate_area(&rectangle));\n}',
    expectedOutput: 'Circle area: 78.54\nRectangle area: 24.00',
    solution:
      'enum Shape {\n  Circle(f64),\n  Rectangle(f64, f64),\n}\n\nfn calculate_area(shape: &Shape) -> f64 {\n  match shape {\n    Shape::Circle(radius) => 3.14159 * radius * radius,\n    Shape::Rectangle(width, height) => width * height,\n  }\n}\n\nfn main() {\n  let circle = Shape::Circle(5.0);\n  let rectangle = Shape::Rectangle(4.0, 6.0);\n  \n  println!("Circle area: {:.2}", calculate_area(&circle));\n  println!("Rectangle area: {:.2}", calculate_area(&rectangle));\n}',
    hints: [
      {
        en: 'Use `Circle(f64)` and `Rectangle(f64, f64)` variants',
        id: 'Gunakan varian `Circle(f64)` dan `Rectangle(f64, f64)`',
      },
      {
        en: 'Use `match` to handle different variants',
        id: 'Gunakan `match` untuk menangani varian yang berbeda',
      },
      {
        en: 'Circle area = π * r², Rectangle area = width * height',
        id: 'Luas lingkaran = π * r², Luas persegi panjang = lebar * tinggi',
      },
      {
        en: 'Use `3.14159` for π approximation',
        id: 'Gunakan `3.14159` untuk aproksimasi π',
      },
    ],
    difficulty: 'hard',
    category: 'Enums',
    lessonId: 'enums',
    topicId: 'structs-enums',
    points: 200,
  },

  // Pattern Matching
  {
    id: 'cp-011',
    title: {
      en: 'Match Expression',
      id: 'Ekspresi Match',
    },
    description: {
      en: 'Use pattern matching to handle different types of user input.',
      id: 'Gunakan pencocokan pola (pattern matching) untuk menangani berbagai jenis input pengguna.',
    },
    initialCode:
      'enum UserInput {\n  Text(String),\n  Number(i32),\n  Boolean(bool),\n}\n\nfn process_input(input: &UserInput) -> String {\n  // Use match to handle different input types\n  \n}\n\nfn main() {\n  let inputs = [\n    UserInput::Text(String::from("Hello")),\n    UserInput::Number(42),\n    UserInput::Boolean(true),\n  ];\n  \n  for input in &inputs {\n    println!("{}", process_input(input));\n  }\n}',
    expectedOutput: 'Text: Hello\nNumber: 42\nBoolean: true',
    solution:
      'enum UserInput {\n  Text(String),\n  Number(i32),\n  Boolean(bool),\n}\n\nfn process_input(input: &UserInput) -> String {\n  match input {\n    UserInput::Text(ref text) => format!("Text: {}", text),\n    UserInput::Number(num) => format!("Number: {}", num),\n    UserInput::Boolean(b) => format!("Boolean: {}", b),\n  }\n}\n\nfn main() {\n  let inputs = [\n    UserInput::Text(String::from("Hello")),\n    UserInput::Number(42),\n    UserInput::Boolean(true),\n  ];\n  \n  for input in &inputs {\n    println!("{}", process_input(input));\n  }\n}',
    hints: [
      {
        en: 'Use `match` with the input parameter',
        id: 'Gunakan `match` dengan parameter input',
      },
      {
        en: 'Handle each variant with appropriate patterns',
        id: 'Tangani setiap varian dengan pola yang sesuai',
      },
      {
        en: 'Use `ref` to borrow the inner value',
        id: 'Gunakan `ref` untuk meminjam nilai di dalamnya',
      },
      {
        en: 'Return descriptive strings for each case',
        id: 'Kembalikan string deskriptif untuk setiap kasus',
      },
    ],
    difficulty: 'hard',
    category: 'Pattern Matching',
    lessonId: 'enums',
    topicId: 'structs-enums',
    points: 200,
  },

  // Error Handling
  {
    id: 'cp-012',
    title: {
      en: 'Result Type',
      id: 'Tipe Result',
    },
    description: {
      en: 'Create a function that parses a string to a number and handles errors gracefully.',
      id: 'Buat fungsi yang mem-parsing string menjadi angka dan menangani eror dengan baik.',
    },
    initialCode:
      'use std::str::FromStr;\n\nfn parse_number(s: &str) -> Result<i32, String> {\n  // Parse the string and return Result\n  \n}\n\nfn main() {\n  let test_cases = ["123", "abc", "45.67", "-10"];\n  \n  for case in &test_cases {\n    match parse_number(case) {\n      Ok(number) => println!("Successfully parsed: {}", number),\n      Err(error) => println!("Failed to parse \'{}\': {}", case, error),\n    }\n  }\n}',
    expectedOutput:
      "Successfully parsed: 123\nFailed to parse 'abc': invalid number\nFailed to parse '45.67': invalid number\nSuccessfully parsed: -10",
    solution:
      'use std::str::FromStr;\n\nfn parse_number(s: &str) -> Result<i32, String> {\n  i32::from_str(s).map_err(|_| "invalid number".to_string())\n}\n\nfn main() {\n  let test_cases = ["123", "abc", "45.67", "-10"];\n  \n  for case in &test_cases {\n    match parse_number(case) {\n      Ok(number) => println!("Successfully parsed: {}", number),\n      Err(error) => println!("Failed to parse \'{}\': {}", case, error),\n    }\n  }\n}',
    hints: [
      {
        en: 'Use `i32::from_str(s)` to parse the string',
        id: 'Gunakan `i32::from_str(s)` untuk mem-parsing string',
      },
      {
        en: 'The `from_str` method returns a Result',
        id: 'Metode `from_str` mengembalikan sebuah Result',
      },
      {
        en: 'Handle the Result with `map` or `map_err`',
        id: 'Tangani Result dengan `map` atau `map_err`',
      },
      {
        en: 'Return appropriate error messages for invalid inputs',
        id: 'Kembalikan pesan eror yang sesuai untuk input yang tidak valid',
      },
    ],
    difficulty: 'hard',
    category: 'Error Handling',
    lessonId: 'functions',
    topicId: 'functions-modules',
    points: 200,
  },

  // Traits & Generics
  {
    id: 'cp-013',
    title: {
      en: 'Generic Function',
      id: 'Fungsi Generik',
    },
    description: {
      en: 'Create a generic function that finds the maximum of two values.',
      id: 'Buat fungsi generik yang menemukan nilai maksimum dari dua nilai.',
    },
    initialCode:
      "// Generic function to find maximum\nfn find_max<T>(a: T, b: T) -> T \nwhere\n  T: PartialOrd + Copy,\n{\n  \n}\n\nfn main() {\n  let max_int = find_max(10, 20);\n  let max_float = find_max(3.14, 2.71);\n  let max_char = find_max('a', 'z');\n  \n  println!(\"Max int: {}, Max float: {:.2}, Max char: {}\", max_int, max_float, max_char);\n}",
    expectedOutput: 'Max int: 20, Max float: 3.14, Max char: z',
    solution:
      "fn find_max<T>(a: T, b: T) -> T \nwhere\n  T: PartialOrd + Copy,\n{\n  if a > b { a } else { b }\n}\n\nfn main() {\n  let max_int = find_max(10, 20);\n  let max_float = find_max(3.14, 2.71);\n  let max_char = find_max('a', 'z');\n  \n  println!(\"Max int: {}, Max float: {:.2}, Max char: {}\", max_int, max_float, max_char);\n}",
    hints: [
      {
        en: 'Use `if` to compare the two values',
        id: 'Gunakan `if` untuk membandingkan kedua nilai',
      },
      {
        en: 'The `PartialOrd` trait allows comparison',
        id: 'Trait `PartialOrd` memungkinkan perbandingan',
      },
      {
        en: 'The `Copy` trait allows the values to be copied',
        id: 'Trait `Copy` memungkinkan nilai untuk disalin',
      },
      {
        en: 'Return the larger of the two values',
        id: 'Kembalikan nilai yang lebih besar dari keduanya',
      },
    ],
    difficulty: 'hard',
    category: 'Generics',
    lessonId: 'traits',
    topicId: 'traits-generics',
    points: 200,
  },

  {
    id: 'cp-014',
    title: {
      en: 'Trait Implementation',
      id: 'Implementasi Trait',
    },
    description: {
      en: 'Implement a trait for a custom type to enable printing.',
      id: 'Implementasikan sebuah trait untuk tipe kustom agar bisa dicetak.',
    },
    initialCode:
      'use std::fmt;\n\n// Custom struct\nstruct Point {\n  x: f64,\n  y: f64,\n}\n\n// Implement Display trait for Point\nimpl fmt::Display for Point {\n  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n    \n  }\n}\n\nfn main() {\n  let point = Point { x: 3.0, y: 4.0 };\n  println!("Point: {}", point);\n}',
    expectedOutput: 'Point: (3.0, 4.0)',
    solution:
      'use std::fmt;\n\nstruct Point {\n  x: f64,\n  y: f64,\n}\n\nimpl fmt::Display for Point {\n  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n    write!(f, "({}, {})", self.x, self.y)\n  }\n}\n\nfn main() {\n  let point = Point { x: 3.0, y: 4.0 };\n  println!("Point: {}", point);\n}',
    hints: [
      {
        en: 'Use `write!` macro to format the output',
        id: 'Gunakan makro `write!` untuk memformat output',
      },
      { en: 'The format should be "(x, y)"', id: 'Formatnya harus "(x, y)"' },
      {
        en: 'Access fields using `self.x` and `self.y`',
        id: 'Akses field menggunakan `self.x` dan `self.y`',
      },
      {
        en: 'Return `fmt::Result` (the result of `write!`)',
        id: 'Kembalikan `fmt::Result` (hasil dari `write!`)',
      },
    ],
    difficulty: 'hard',
    category: 'Traits',
    lessonId: 'traits',
    topicId: 'traits-generics',
    points: 200,
  },

  // Collections
  {
    id: 'cp-015',
    title: {
      en: 'Vector Operations',
      id: 'Operasi Vector',
    },
    description: {
      en: 'Create a vector, add elements, and find the sum of all numbers.',
      id: 'Buat sebuah vector, tambahkan elemen, dan temukan jumlah dari semua angka.',
    },
    initialCode:
      'fn main() {\n  // Create an empty vector\n  \n  \n  // Add some numbers to the vector\n  \n  \n  // Calculate the sum of all numbers\n  \n  \n  // Print the result\n  \n}',
    expectedOutput: 'Vector: [1, 2, 3, 4, 5]\nSum: 15',
    solution:
      'fn main() {\n  let mut numbers = Vec::new();\n  \n  numbers.push(1);\n  numbers.push(2);\n  numbers.push(3);\n  numbers.push(4);\n  numbers.push(5);\n  \n  let sum: i32 = numbers.iter().sum();\n  \n  println!("Vector: {:?}", numbers);\n  println!("Sum: {}", sum);\n}',
    hints: [
      {
        en: 'Use `Vec::new()` to create an empty vector',
        id: 'Gunakan `Vec::new()` untuk membuat vector kosong',
      },
      {
        en: 'Use `push()` to add elements to the vector',
        id: 'Gunakan `push()` untuk menambahkan elemen ke vector',
      },
      {
        en: 'Use `iter()` and `sum()` to calculate the sum',
        id: 'Gunakan `iter()` dan `sum()` untuk menghitung jumlah',
      },
      {
        en: 'The sum method returns the same type as the vector elements',
        id: 'Metode sum mengembalikan tipe yang sama dengan elemen vector',
      },
    ],
    difficulty: 'medium',
    category: 'Collections',
    lessonId: 'vectors',
    topicId: 'collections',
    points: 100,
  },
  // Data Types & Operations
  {
    id: 'cp-016',
    title: {
      en: 'Arithmetic Operations',
      id: 'Operasi Aritmatika',
    },
    description: {
      en: 'Perform and print the results of basic arithmetic operations.',
      id: 'Lakukan dan cetak hasil dari operasi aritmatika dasar.',
    },
    initialCode:
      'fn main() {\n  let a = 15;\n  let b = 4;\n\n  // Calculate sum, difference, product, quotient, and remainder\n  let sum = a + b;\n  let diff = a - b;\n  let prod = a * b;\n  let quot = a / b;\n  let rem = a % b;\n\n  // Print the results\n\n}',
    expectedOutput: 'Sum: 19\nDifference: 11\nProduct: 60\nQuotient: 3\nRemainder: 3',
    solution:
      'fn main() {\n  let a = 15;\n  let b = 4;\n\n  let sum = a + b;\n  let diff = a - b;\n  let prod = a * b;\n  let quot = a / b;\n  let rem = a % b;\n\n  println!("Sum: {}", sum);\n  println!("Difference: {}", diff);\n  println!("Product: {}", prod);\n  println!("Quotient: {}", quot);\n  println!("Remainder: {}", rem);\n}',
    hints: [
      { en: 'Use + for addition', id: 'Gunakan + untuk penjumlahan' },
      { en: 'Use - for subtraction', id: 'Gunakan - untuk pengurangan' },
      { en: 'Use * for multiplication', id: 'Gunakan * untuk perkalian' },
      {
        en: 'Use / for integer division',
        id: 'Gunakan / untuk pembagian integer',
      },
      {
        en: 'Use % for the remainder (modulo)',
        id: 'Gunakan % untuk sisa bagi (modulo)',
      },
    ],
    difficulty: 'easy',
    category: 'Operators',
    lessonId: 'operators',
    topicId: 'data-types',
    points: 50,
  },

  // Control Structures
  {
    id: 'cp-017',
    title: {
      en: 'Countdown with While Loop',
      id: 'Hitung Mundur dengan Perulangan While',
    },
    description: {
      en: 'Use a `while` loop to create a countdown from 5 to 1, then print "Liftoff!".',
      id: 'Gunakan perulangan `while` untuk membuat hitung mundur dari 5 ke 1, lalu cetak "Liftoff!".',
    },
    initialCode:
      'fn main() {\n  let mut count = 5;\n\n  println!("Starting countdown...");\n\n  // Use a while loop to count down from 5 to 1\n  \n\n  println!("Liftoff!");\n}',
    expectedOutput: 'Starting countdown...\n5\n4\n3\n2\n1\nLiftoff!',
    solution:
      'fn main() {\n  let mut count = 5;\n\n  println!("Starting countdown...");\n\n  while count > 0 {\n    println!("{}", count);\n    count -= 1;\n  }\n\n  println!("Liftoff!");\n}',
    hints: [
      {
        en: 'The variable `count` needs to be mutable (`mut`) to be changed.',
        id: 'Variabel `count` harus bersifat mutable (`mut`) agar bisa diubah.',
      },
      {
        en: 'The loop condition should check if `count` is greater than 0.',
        id: 'Kondisi perulangan harus memeriksa apakah `count` lebih besar dari 0.',
      },
      {
        en: 'Decrement the counter inside the loop using `count -= 1;`.',
        id: 'Kurangi penghitung di dalam perulangan menggunakan `count -= 1;`.',
      },
    ],
    difficulty: 'easy',
    category: 'Loops',
    lessonId: 'while-loops',
    topicId: 'control-structures',
    points: 50,
  },

  // Collections
  {
    id: 'cp-018',
    title: {
      en: 'Tuple Destructuring',
      id: 'Destrukturisasi Tuple',
    },
    description: {
      en: 'Create a tuple to hold user information (name, age, is_active) and then destructure it into separate variables.',
      id: 'Buat sebuah tuple untuk menyimpan informasi pengguna (nama, umur, is_active) lalu lakukan destrukturisasi menjadi variabel-variabel terpisah.',
    },
    initialCode:
      'fn main() {\n  let user_data = ("Alex", 34, true);\n\n  // Destructure the tuple into three variables: name, age, and is_active\n  \n\n  println!("Name: {}", name);\n  println!("Age: {}", age);\n  println!("Active: {}", is_active);\n}',
    expectedOutput: 'Name: Alex\nAge: 34\nActive: true',
    solution:
      'fn main() {\n  let user_data = ("Alex", 34, true);\n\n  let (name, age, is_active) = user_data;\n\n  println!("Name: {}", name);\n  println!("Age: {}", age);\n  println!("Active: {}", is_active);\n}',
    hints: [
      {
        en: 'Use `let (var1, var2, ...)` to destructure a tuple.',
        id: 'Gunakan `let (var1, var2, ...)` untuk melakukan destrukturisasi pada tuple.',
      },
      {
        en: 'The number of variables must match the number of elements in the tuple.',
        id: 'Jumlah variabel harus cocok dengan jumlah elemen di dalam tuple.',
      },
      {
        en: 'You can also access tuple elements by index, like `user_data.0`.',
        id: 'Anda juga dapat mengakses elemen tuple berdasarkan indeks, seperti `user_data.0`.',
      },
    ],
    difficulty: 'easy',
    category: 'Collections',
    lessonId: 'tuples',
    topicId: 'collections',
    points: 50,
  },

  // Structs & Enums
  {
    id: 'cp-019',
    title: {
      en: 'Struct Method Implementation',
      id: 'Implementasi Metode Struct',
    },
    description: {
      en: 'Define a `Rectangle` struct and implement a method `area` that calculates its area.',
      id: 'Definisikan struct `Rectangle` dan implementasikan metode `area` yang menghitung luasnya.',
    },
    initialCode:
      'struct Rectangle {\n  width: u32,\n  height: u32,\n}\n\n// Implement methods for the Rectangle struct\nimpl Rectangle {\n  // Define the area method here\n  // It should take an immutable reference to self and return a u32\n\n}\n\nfn main() {\n  let rect = Rectangle { width: 30, height: 50 };\n  println!("The area of the rectangle is {}", rect.area());\n}',
    expectedOutput: 'The area of the rectangle is 1500',
    solution:
      'struct Rectangle {\n  width: u32,\n  height: u32,\n}\n\nimpl Rectangle {\n  fn area(&self) -> u32 {\n    self.width * self.height\n  }\n}\n\nfn main() {\n  let rect = Rectangle { width: 30, height: 50 };\n  println!("The area of the rectangle is {}", rect.area());\n}',
    hints: [
      {
        en: 'Start the method definition with `fn area(&self) -> u32 { ... }`.',
        id: 'Mulai definisi metode dengan `fn area(&self) -> u32 { ... }`.',
      },
      {
        en: 'Inside the method, access fields using `self.width` and `self.height`.',
        id: 'Di dalam metode, akses field menggunakan `self.width` dan `self.height`.',
      },
      {
        en: 'The last expression is the return value, so no semicolon is needed.',
        id: 'Ekspresi terakhir adalah nilai kembalian, jadi tidak perlu titik koma.',
      },
    ],
    difficulty: 'medium',
    category: 'Structs',
    lessonId: 'struct-methods',
    topicId: 'structs-enums',
    points: 100,
  },

  // Memory Management
  {
    id: 'cp-020',
    title: {
      en: 'Modifying with Mutable References',
      id: 'Memodifikasi dengan Referensi Mutable',
    },
    description: {
      en: 'Create a function that takes a mutable reference to a `String` and appends a word to it.',
      id: 'Buat fungsi yang menerima referensi mutable ke sebuah `String` dan menambahkan sebuah kata padanya.',
    },
    initialCode:
      '// This function takes a mutable reference and appends ", world"\nfn append_world(s: &mut String) {\n  // Your code here\n}\n\nfn main() {\n  let mut my_string = String::from("hello");\n  println!("Before: {}", my_string);\n\n  append_world(&mut my_string);\n\n  println!("After: {}", my_string);\n}',
    expectedOutput: 'Before: hello\nAfter: hello, world',
    solution:
      'fn append_world(s: &mut String) {\n  s.push_str(", world");\n}\n\nfn main() {\n  let mut my_string = String::from("hello");\n  println!("Before: {}", my_string);\n\n  append_world(&mut my_string);\n\n  println!("After: {}", my_string);\n}',
    hints: [
      {
        en: 'The variable `my_string` must be declared as `mut` to be borrowed mutably.',
        id: 'Variabel `my_string` harus dideklarasikan sebagai `mut` agar bisa dipinjam secara mutable.',
      },
      {
        en: 'The function signature for the parameter is `s: &mut String`.',
        id: 'Signature fungsi untuk parameternya adalah `s: &mut String`.',
      },
      {
        en: 'Use the `push_str()` method to append a string slice to a `String`.',
        id: 'Gunakan metode `push_str()` untuk menambahkan potongan string ke sebuah `String`.',
      },
    ],
    difficulty: 'medium',
    category: 'Borrowing',
    lessonId: 'mutable-ref',
    topicId: 'memory-management',
    points: 100,
  },

  // Functional Programming
  {
    id: 'cp-021',
    title: {
      en: 'Simple Closure',
      id: 'Closure Sederhana',
    },
    description: {
      en: 'Use a closure to double a number and call it.',
      id: 'Gunakan closure untuk menggandakan sebuah angka dan memanggilnya.',
    },
    initialCode:
      'fn main() {\n  let number = 10;\n\n  // Define a closure that takes an integer and returns it doubled\n  \n\n  // Call the closure with `number` and store the result\n  let result = \n\n  println!("{} doubled is {}", number, result);\n}',
    expectedOutput: '10 doubled is 20',
    solution:
      'fn main() {\n  let number = 10;\n\n  let double = |x| x * 2;\n\n  let result = double(number);\n  println!("{} doubled is {}", number, result);\n}',
    hints: [
      {
        en: 'Closure syntax is `|parameter| body`.',
        id: 'Sintaks closure adalah `|parameter| body`.',
      },
      {
        en: 'You can assign the closure to a variable.',
        id: 'Anda dapat menetapkan closure ke sebuah variabel.',
      },
      {
        en: 'Call the closure like a regular function.',
        id: 'Panggil closure seperti fungsi biasa.',
      },
    ],
    difficulty: 'medium',
    category: 'Functional',
    lessonId: 'closures',
    topicId: 'functional-programming',
    points: 100,
  },

  // Error Handling
  {
    id: 'cp-022',
    title: {
      en: 'Error Propagation with ?',
      id: 'Propagasi Eror dengan ?',
    },
    description: {
      en: 'Implement a function that parses two strings into numbers, adds them, and uses the `?` operator for concise error handling.',
      id: 'Implementasikan fungsi yang mem-parsing dua string menjadi angka, menjumlahkannya, dan menggunakan operator `?` untuk penanganan eror yang ringkas.',
    },
    initialCode:
      'use std::num::ParseIntError;\n\n// Implement this function using the `?` operator\nfn add_str_numbers(a: &str, b: &str) -> Result<i32, ParseIntError> {\n  // Your code here\n}\n\n// The main function is used to test your implementation\nfn main() {\n  match add_str_numbers("10", "20") {\n    Ok(sum) => println!("Sum: {}", sum),\n    Err(e) => println!("An unexpected error occurred: {}", e),\n  }\n\n  match add_str_numbers("5", "abc") {\n    Ok(_) => println!("This test case should have failed!"),\n    Err(e) => println!("Correctly handled error: {}", e),\n  }\n}',
    expectedOutput: 'Sum: 30\nCorrectly handled error: invalid digit found in string',
    solution:
      'use std::num::ParseIntError;\n\nfn add_str_numbers(a: &str, b: &str) -> Result<i32, ParseIntError> {\n  let num_a = a.parse::<i32>()?;\n  let num_b = b.parse::<i32>()?;\n  Ok(num_a + num_b)\n}\n\n// The main function is used to test your implementation\nfn main() {\n  match add_str_numbers("10", "20") {\n    Ok(sum) => println!("Sum: {}", sum),\n    Err(e) => println!("An unexpected error occurred: {}", e),\n  }\n\n  match add_str_numbers("5", "abc") {\n    Ok(_) => println!("This test case should have failed!"),\n    Err(e) => println!("Correctly handled error: {}", e),\n  }\n}',
    hints: [
      {
        en: 'Use `str.parse::<i32>()` to convert a string slice to a number.',
        id: 'Gunakan `str.parse::<i32>()` untuk mengubah potongan string menjadi angka.',
      },
      {
        en: 'The `parse` method returns a `Result`.',
        id: 'Metode `parse` mengembalikan sebuah `Result`.',
      },
      {
        en: 'Append `?` to a `Result`-returning expression to propagate the error.',
        id: 'Tambahkan `?` ke ekspresi yang mengembalikan `Result` untuk menyebarkan (propagate) eror.',
      },
      {
        en: 'If both parses succeed, return the sum wrapped in `Ok()`.',
        id: 'Jika kedua parsing berhasil, kembalikan jumlahnya yang dibungkus dalam `Ok()`.',
      },
    ],
    difficulty: 'hard',
    category: 'Error Handling',
    lessonId: 'recoverable-errors',
    topicId: 'error-handling',
    points: 200,
  },
  // =================================================================
  // Lanjutan Fundamentals
  // =================================================================
  {
    id: 'cp-023',
    title: {
      en: 'Using Comments',
      id: 'Menggunakan Komentar',
    },
    description: {
      en: 'Write a program that uses different types of comments to explain the code.',
      id: 'Tulis sebuah program yang menggunakan berbagai jenis komentar untuk menjelaskan kode.',
    },
    initialCode:
      'fn main() {\n  let a = 5;\n  let b = 10;\n\n  // Add your comments here\n\n  let sum = a + b;\n  println!("The sum is: {}", sum);\n}',
    expectedOutput: 'The sum is: 15',
    solution:
      '// This is the main function where the program execution begins.\nfn main() {\n  let a = 5; // Declare the first variable\n  let b = 10; // Declare the second variable\n\n  /*\n   * This is a block comment.\n   * We calculate the sum of a and b.\n   */\n  let sum = a + b;\n  println!("The sum is: {}", sum); // Print the final sum\n}',
    hints: [
      {
        en: 'Use `//` for single-line comments.',
        id: 'Gunakan `//` untuk komentar satu baris.',
      },
      {
        en: 'Use `/* ... */` for multi-line block comments.',
        id: 'Gunakan `/* ... */` untuk komentar blok multi-baris.',
      },
      {
        en: "Comments do not affect the program's output.",
        id: 'Komentar tidak mempengaruhi output program.',
      },
    ],
    difficulty: 'easy',
    category: 'Basic Syntax',
    lessonId: 'comments',
    topicId: 'fundamentals',
    points: 50,
  },
  {
    id: 'cp-024',
    title: {
      en: 'String Literals',
      id: 'Literal String',
    },
    description: {
      en: 'Declare a string literal and print its value.',
      id: 'Deklarasikan sebuah literal string dan cetak nilainya.',
    },
    initialCode:
      'fn main() {\n  // Declare a string literal variable named `greeting`\n\n\n  // Print the greeting\n\n}',
    expectedOutput: 'Hello from a string literal!',
    solution:
      'fn main() {\n  let greeting: &str = "Hello from a string literal!";\n  println!("{}", greeting);\n}',
    hints: [
      {
        en: 'String literals have the type `&str`.',
        id: 'Literal string memiliki tipe `&str`.',
      },
      {
        en: 'The value is enclosed in double quotes.',
        id: 'Nilainya diapit oleh tanda kutip ganda.',
      },
      {
        en: 'You can use type annotation `: &str` for clarity.',
        id: 'Anda dapat menggunakan anotasi tipe `: &str` untuk kejelasan.',
      },
    ],
    difficulty: 'easy',
    category: 'Data Types',
    lessonId: 'string-literals',
    topicId: 'fundamentals',
    points: 50,
  },

  // =================================================================
  // Lanjutan Data Types & Operations
  // =================================================================
  {
    id: 'cp-025',
    title: {
      en: 'Using Constants',
      id: 'Menggunakan Konstanta',
    },
    description: {
      en: 'Define a constant for the maximum number of retries and use it in your code.',
      id: 'Definisikan sebuah konstanta untuk jumlah percobaan ulang maksimum dan gunakan dalam kode Anda.',
    },
    initialCode:
      '// Define a constant for MAX_RETRIES with value 3\n\n\nfn main() {\n  println!("Maximum number of retries: {}", MAX_RETRIES);\n}',
    expectedOutput: 'Maximum number of retries: 3',
    solution:
      'const MAX_RETRIES: u32 = 3;\n\nfn main() {\n  println!("Maximum number of retries: {}", MAX_RETRIES);\n}',
    hints: [
      {
        en: 'Use the `const` keyword to declare constants.',
        id: 'Gunakan kata kunci `const` untuk mendeklarasikan konstanta.',
      },
      {
        en: 'Constant names are typically in SCREAMING_SNAKE_CASE.',
        id: 'Nama konstanta biasanya dalam format SCREAMING_SNAKE_CASE.',
      },
      {
        en: 'You must explicitly annotate the type of a constant (e.g., `: u32`).',
        id: 'Anda harus secara eksplisit menganotasi tipe dari sebuah konstanta (misalnya, `: u32`).',
      },
    ],
    difficulty: 'easy',
    category: 'Variables',
    lessonId: 'constants',
    topicId: 'data-types',
    points: 50,
  },
  {
    id: 'cp-026',
    title: {
      en: 'Type Casting',
      id: 'Casting Tipe',
    },
    description: {
      en: 'Cast a floating-point number into an integer to perform integer division.',
      id: 'Lakukan casting pada angka floating-point menjadi integer untuk melakukan pembagian integer.',
    },
    initialCode:
      'fn main() {\n  let float_value: f64 = 12.9;\n  \n  // Cast the float_value to a u32 integer\n  let int_value = \n\n  println!("{} as an integer is {}", float_value, int_value);\n}',
    expectedOutput: '12.9 as an integer is 12',
    solution:
      'fn main() {\n  let float_value: f64 = 12.9;\n  \n  let int_value = float_value as u32;\n\n  println!("{} as an integer is {}", float_value, int_value);\n}',
    hints: [
      {
        en: 'Use the `as` keyword for explicit type casting.',
        id: 'Gunakan kata kunci `as` untuk casting tipe secara eksplisit.',
      },
      {
        en: 'Casting a float to an integer truncates the decimal part.',
        id: 'Melakukan casting float ke integer akan memotong bagian desimalnya.',
      },
      {
        en: 'The syntax is `value as NewType`.',
        id: 'Sintaksnya adalah `value as NewType`.',
      },
    ],
    difficulty: 'medium',
    category: 'Data Types',
    lessonId: 'type-alias-casting',
    topicId: 'data-types',
    points: 100,
  },

  // =================================================================
  // Lanjutan Control Structures
  // =================================================================
  {
    id: 'cp-027',
    title: {
      en: 'Loop with Break and Continue',
      id: 'Perulangan dengan Break dan Continue',
    },
    description: {
      en: 'Use a `loop` to iterate from 1 to 10. Print only the odd numbers and stop the loop if the number is greater than 7.',
      id: 'Gunakan `loop` untuk beriterasi dari 1 hingga 10. Cetak hanya angka ganjil dan hentikan perulangan jika angkanya lebih besar dari 7.',
    },
    initialCode:
      'fn main() {\n  let mut i = 0;\n  loop {\n    i += 1;\n    // If i is even, skip to the next iteration\n\n\n    // If i is greater than 7, break the loop\n\n\n    println!("{}", i);\n  }\n}',
    expectedOutput: '1\n3\n5\n7',
    solution:
      'fn main() {\n  let mut i = 0;\n  loop {\n    i += 1;\n    if i % 2 == 0 {\n      continue;\n    }\n    if i > 7 {\n      break;\n    }\n    println!("{}", i);\n  }\n}',
    hints: [
      {
        en: 'Use `continue` to skip the rest of the current iteration.',
        id: 'Gunakan `continue` untuk melewati sisa iterasi saat ini.',
      },
      {
        en: 'Use `break` to exit the loop entirely.',
        id: 'Gunakan `break` untuk keluar dari perulangan sepenuhnya.',
      },
      {
        en: 'The modulo operator `%` can check for even numbers (`num % 2 == 0`).',
        id: 'Operator modulo `%` dapat digunakan untuk memeriksa angka genap (`num % 2 == 0`).',
      },
    ],
    difficulty: 'medium',
    category: 'Loops',
    lessonId: 'loop-break-continue',
    topicId: 'control-structures',
    points: 100,
  },

  // =================================================================
  // Lanjutan Collections
  // =================================================================
  {
    id: 'cp-028',
    title: {
      en: 'Array Initialization',
      id: 'Inisialisasi Array',
    },
    description: {
      en: 'Declare an array of 5 integers, initialize it with some values, and print the third element.',
      id: 'Deklarasikan sebuah array berisi 5 integer, inisialisasi dengan beberapa nilai, dan cetak elemen ketiga.',
    },
    initialCode:
      'fn main() {\n  // Declare an array named `numbers` with 5 elements\n  \n\n  // Print the third element (at index 2)\n\n}',
    expectedOutput: 'The third element is: 30',
    solution:
      'fn main() {\n  let numbers: [i32; 5] = [10, 20, 30, 40, 50];\n  println!("The third element is: {}", numbers[2]);\n}',
    hints: [
      {
        en: 'The type annotation for an array is `[type; size]`.',
        id: 'Anotasi tipe untuk array adalah `[type; size]`.',
      },
      {
        en: 'Array elements are accessed using zero-based indexing with square brackets `[]`.',
        id: 'Elemen array diakses menggunakan pengindeksan berbasis nol dengan kurung siku `[]`.',
      },
      {
        en: 'All elements in an array must have the same type.',
        id: 'Semua elemen dalam sebuah array harus memiliki tipe yang sama.',
      },
    ],
    difficulty: 'easy',
    category: 'Collections',
    lessonId: 'arrays',
    topicId: 'collections',
    points: 50,
  },
  {
    id: 'cp-029',
    title: {
      en: 'Creating a Slice',
      id: 'Membuat Slice',
    },
    description: {
      en: 'Create a slice that contains the second and third elements of an array.',
      id: 'Buat sebuah slice yang berisi elemen kedua dan ketiga dari sebuah array.',
    },
    initialCode:
      'fn main() {\n  let data = [11, 22, 33, 44, 55];\n\n  // Create a slice containing the elements 22 and 33\n  let slice = \n\n  println!("The slice is: {:?}", slice);\n}',
    expectedOutput: 'The slice is: [22, 33]',
    solution:
      'fn main() {\n  let data = [11, 22, 33, 44, 55];\n  let slice = &data[1..3];\n  println!("The slice is: {:?}", slice);\n}',
    hints: [
      {
        en: 'A slice is a reference to a part of a collection, so it starts with `&`.',
        id: 'Slice adalah referensi ke sebagian dari koleksi, jadi dimulai dengan `&`.',
      },
      {
        en: 'The range syntax `[start..end]` creates a slice.',
        id: 'Sintaks rentang `[start..end]` membuat sebuah slice.',
      },
      {
        en: 'The range is exclusive of the `end` index.',
        id: 'Rentang tersebut tidak termasuk (eksklusif) indeks `end`.',
      },
    ],
    difficulty: 'medium',
    category: 'Collections',
    lessonId: 'slices',
    topicId: 'collections',
    points: 100,
  },

  // =================================================================
  // Lanjutan Functions & Modules
  // =================================================================
  {
    id: 'cp-030',
    title: {
      en: 'Inline Modules',
      id: 'Modul Inline',
    },
    description: {
      en: 'Organize related functions into an inline module and call a function from it.',
      id: 'Organisasikan fungsi-fungsi terkait ke dalam sebuah modul inline dan panggil sebuah fungsi darinya.',
    },
    initialCode:
      '// Define a module named `greetings`\nmod greetings {\n  // Define a public function `hello` inside the module\n\n}\n\nfn main() {\n  // Call the `hello` function from the `greetings` module\n\n}',
    expectedOutput: 'Hello from the greetings module!',
    solution:
      'mod greetings {\n  pub fn hello() {\n    println!("Hello from the greetings module!");\n  }\n}\n\nfn main() {\n  greetings::hello();\n}',
    hints: [
      {
        en: 'Use the `mod` keyword to define a module.',
        id: 'Gunakan kata kunci `mod` untuk mendefinisikan sebuah modul.',
      },
      {
        en: 'Use the `pub` keyword to make a function or item public (visible outside the module).',
        id: 'Gunakan kata kunci `pub` untuk membuat fungsi atau item menjadi publik (terlihat di luar modul).',
      },
      {
        en: 'Access items in a module using the path `module_name::item_name`.',
        id: 'Akses item dalam modul menggunakan path `nama_modul::nama_item`.',
      },
    ],
    difficulty: 'medium',
    category: 'Modules',
    lessonId: 'inline-modules',
    topicId: 'functions-modules',
    points: 100,
  },
  {
    id: 'cp-031',
    title: {
      en: 'Using `use` Statements',
      id: 'Menggunakan Pernyataan `use`',
    },
    description: {
      en: 'Bring a function into scope with the `use` keyword to call it directly.',
      id: 'Bawa sebuah fungsi ke dalam cakupan (scope) dengan kata kunci `use` untuk memanggilnya secara langsung.',
    },
    initialCode:
      'mod math {\n  pub fn add(a: i32, b: i32) -> i32 {\n    a + b\n  }\n}\n\n// Bring the `add` function into the current scope\n\n\nfn main() {\n  // Call `add` directly without the module path\n  let result = add(5, 10);\n  println!("5 + 10 = {}", result);\n}',
    expectedOutput: '5 + 10 = 15',
    solution:
      'mod math {\n  pub fn add(a: i32, b: i32) -> i32 {\n    a + b\n  }\n}\n\nuse math::add;\n\nfn main() {\n  let result = add(5, 10);\n  println!("5 + 10 = {}", result);\n}',
    hints: [
      {
        en: 'The syntax is `use path::to::item;`.',
        id: 'Sintaksnya adalah `use path::to::item;`.',
      },
      {
        en: '`use` statements are typically placed at the top of the scope.',
        id: 'Pernyataan `use` biasanya ditempatkan di bagian atas cakupan (scope).',
      },
      {
        en: 'Once an item is in scope with `use`, you can refer to it directly.',
        id: 'Setelah sebuah item berada dalam cakupan dengan `use`, Anda dapat merujuknya secara langsung.',
      },
    ],
    difficulty: 'medium',
    category: 'Modules',
    lessonId: 'use-statements',
    topicId: 'module-system-advanced',
    points: 100,
  },

  // =================================================================
  // Lanjutan Structs & Enums
  // =================================================================
  {
    id: 'cp-032',
    title: {
      en: 'Struct Update Syntax',
      id: 'Sintaks Pembaruan Struct',
    },
    description: {
      en: 'Create a new struct instance using values from an existing instance with the struct update syntax.',
      id: 'Buat instance struct baru menggunakan nilai dari instance yang sudah ada dengan sintaks pembaruan struct.',
    },
    initialCode:
      'struct User {\n  username: String,\n  email: String,\n  active: bool,\n}\n\nfn main() {\n  let user1 = User {\n    username: String::from("user1"),\n    email: String::from("user1@example.com"),\n    active: true,\n  };\n\n  // Create user2 with a new username but the same email and active status as user1\n  let user2 = \n\n  println!("User 2: {} <{}>", user2.username, user2.email);\n}',
    expectedOutput: 'User 2: user2 <user1@example.com>',
    solution:
      'struct User {\n  username: String,\n  email: String,\n  active: bool,\n}\n\nfn main() {\n  let user1 = User {\n    username: String::from("user1"),\n    email: String::from("user1@example.com"),\n    active: true,\n  };\n\n  let user2 = User {\n    username: String::from("user2"),\n    ..user1\n  };\n\n  println!("User 2: {} <{}>", user2.username, user2.email);\n}',
    hints: [
      {
        en: 'The struct update syntax is `..instance_name`.',
        id: 'Sintaks pembaruan struct adalah `..nama_instance`.',
      },
      {
        en: 'It must come last in the struct initializer.',
        id: 'Itu harus diletakkan terakhir di dalam inisialisasi struct.',
      },
      {
        en: 'This syntax moves the remaining fields, so `user1` may become partially unusable if fields are not `Copy`.',
        id: 'Sintaks ini memindahkan field yang tersisa, sehingga `user1` mungkin menjadi tidak dapat digunakan sebagian jika field-nya bukan `Copy`.',
      },
    ],
    difficulty: 'easy',
    category: 'Structs',
    lessonId: 'struct-update',
    topicId: 'structs-enums',
    points: 50,
  },
  {
    id: 'cp-033',
    title: {
      en: 'Tuple Structs',
      id: 'Struct Tuple',
    },
    description: {
      en: 'Define and use a tuple struct to represent a color with RGB values.',
      id: 'Definisikan dan gunakan struct tuple untuk merepresentasikan warna dengan nilai RGB.',
    },
    initialCode:
      '// Define a tuple struct `Color` that holds three u8 values (R, G, B)\n\n\nfn main() {\n  // Create an instance of `Color` for blue (0, 0, 255)\n\n\n  // Access the green value (the second element) and print it\n  \n}',
    expectedOutput: 'The green value is: 0',
    solution:
      'struct Color(u8, u8, u8);\n\nfn main() {\n  let blue = Color(0, 0, 255);\n  println!("The green value is: {}", blue.1);\n}',
    hints: [
      {
        en: 'Define a tuple struct like `struct Name(Type1, Type2);`.',
        id: 'Definisikan struct tuple seperti `struct Name(Type1, Type2);`.',
      },
      {
        en: 'Instantiate it like calling a function: `Name(value1, value2)`.',
        id: 'Buat instance seperti memanggil fungsi: `Name(value1, value2)`.',
      },
      {
        en: 'Access elements using dot notation and zero-based indexing, like `instance.0`.',
        id: 'Akses elemen menggunakan notasi titik dan pengindeksan berbasis nol, seperti `instance.0`.',
      },
    ],
    difficulty: 'easy',
    category: 'Structs',
    lessonId: 'tuple-structs',
    topicId: 'structs-enums',
    points: 50,
  },
  {
    id: 'cp-034',
    title: {
      en: 'Enum Methods',
      id: 'Metode Enum',
    },
    description: {
      en: 'Implement a method on an enum to perform a different action for each variant.',
      id: 'Implementasikan sebuah metode pada enum untuk melakukan tindakan yang berbeda untuk setiap varian.',
    },
    initialCode:
      'enum Message {\n  Write(String),\n  Quit,\n}\n\n// Implement methods for the Message enum\nimpl Message {\n  // Create a method `process` that prints a different message for each variant\n  \n}\n\nfn main() {\n  let msg1 = Message::Write(String::from("Hello"));\n  let msg2 = Message::Quit;\n\n  msg1.process();\n  msg2.process();\n}',
    expectedOutput: 'Writing message: Hello\nQuitting...',
    solution:
      'enum Message {\n  Write(String),\n  Quit,\n}\n\nimpl Message {\n  fn process(&self) {\n    match self {\n      Message::Write(text) => println!("Writing message: {}", text),\n      Message::Quit => println!("Quitting..."),\n    }\n  }\n}\n\nfn main() {\n  let msg1 = Message::Write(String::from("Hello"));\n  let msg2 = Message::Quit;\n\n  msg1.process();\n  msg2.process();\n}',
    hints: [
      {
        en: 'Use an `impl` block just like with structs: `impl EnumName { ... }`.',
        id: 'Gunakan blok `impl` seperti pada struct: `impl EnumName { ... }`.',
      },
      {
        en: 'Inside the method, use a `match` statement on `self` to handle the different variants.',
        id: 'Di dalam metode, gunakan pernyataan `match` pada `self` untuk menangani varian yang berbeda.',
      },
      {
        en: 'Methods usually take `&self` as their first parameter.',
        id: 'Metode biasanya mengambil `&self` sebagai parameter pertamanya.',
      },
    ],
    difficulty: 'medium',
    category: 'Enums',
    lessonId: 'enum-methods',
    topicId: 'structs-enums',
    points: 100,
  },

  // =================================================================
  // Lanjutan Memory Management
  // =================================================================
  {
    id: 'cp-035',
    title: {
      en: 'String Slices',
      id: 'Potongan String',
    },
    description: {
      en: 'Create a function that takes a string slice and returns the first word.',
      id: 'Buat sebuah fungsi yang mengambil potongan string dan mengembalikan kata pertama.',
    },
    initialCode:
      '// This function returns the first word of a string slice\nfn first_word(s: &str) -> &str {\n  // Your code here\n}\n\nfn main() {\n  let my_string = String::from("hello world");\n  let word = first_word(&my_string);\n  println!("The first word is: {}", word);\n}',
    expectedOutput: 'The first word is: hello',
    solution:
      'fn first_word(s: &str) -> &str {\n  let bytes = s.as_bytes();\n\n  for (i, &item) in bytes.iter().enumerate() {\n    if item == b\' \' {\n      return &s[0..i];\n    }\n  }\n\n  &s[..]\n}\n\nfn main() {\n  let my_string = String::from("hello world");\n  let word = first_word(&my_string);\n  println!("The first word is: {}", word);\n}',
    hints: [
      {
        en: 'The function should accept `&str` so it can work on both `String` and string literals.',
        id: 'Fungsi harus menerima `&str` agar dapat bekerja pada `String` dan literal string.',
      },
      {
        en: "Iterate through the string's bytes using `.as_bytes()` and `.iter().enumerate()`.",
        id: 'Lakukan iterasi melalui byte string menggunakan `.as_bytes()` dan `.iter().enumerate()`.',
      },
      {
        en: 'When you find a space, return a slice from the beginning of the string to the current index.',
        id: 'Ketika Anda menemukan spasi, kembalikan sebuah slice dari awal string hingga indeks saat ini.',
      },
      {
        en: 'If no space is found, the whole string is one word.',
        id: 'Jika tidak ditemukan spasi, seluruh string dianggap sebagai satu kata.',
      },
    ],
    difficulty: 'medium',
    category: 'Slices',
    lessonId: 'slice-references',
    topicId: 'memory-management',
    points: 100,
  },

  // =================================================================
  // Lanjutan Traits & Generics
  // =================================================================
  {
    id: 'cp-036',
    title: {
      en: 'Trait Default Implementation',
      id: 'Implementasi Default Trait',
    },
    description: {
      en: 'Define a trait with a default method, and then implement it for a struct, overriding the default.',
      id: 'Definisikan sebuah trait dengan metode default, lalu implementasikan untuk sebuah struct, dengan menimpa (override) metode default tersebut.',
    },
    initialCode:
      'trait Summary {\n  fn summarize(&self) -> String {\n    String::from("(Read more...)")\n  }\n}\n\nstruct Article {\n  headline: String,\n  author: String,\n}\n\n// Implement the Summary trait for Article, overriding summarize\n\n\nfn main() {\n  let article = Article {\n    headline: String::from("Rust is Awesome!"),\n    author: String::from("Jane Doe"),\n  };\n  println!("Article Summary: {}", article.summarize());\n}',
    expectedOutput: 'Article Summary: Rust is Awesome! by Jane Doe',
    solution:
      'trait Summary {\n  fn summarize(&self) -> String {\n    String::from("(Read more...)")\n  }\n}\n\nstruct Article {\n  headline: String,\n  author: String,\n}\n\nimpl Summary for Article {\n  fn summarize(&self) -> String {\n    format!("{} by {}", self.headline, self.author)\n  }\n}\n\nfn main() {\n  let article = Article {\n    headline: String::from("Rust is Awesome!"),\n    author: String::from("Jane Doe"),\n  };\n  println!("Article Summary: {}", article.summarize());\n}',
    hints: [
      {
        en: 'You can define a default implementation for a method directly inside the `trait` block.',
        id: 'Anda dapat mendefinisikan implementasi default untuk sebuah metode langsung di dalam blok `trait`.',
      },
      {
        en: 'When implementing the trait, you can choose to either use the default or provide a custom implementation.',
        id: 'Saat mengimplementasikan trait, Anda dapat memilih untuk menggunakan implementasi default atau menyediakan implementasi kustom.',
      },
      {
        en: 'Use `format!` macro to construct the new summary string.',
        id: 'Gunakan makro `format!` untuk membuat string ringkasan yang baru.',
      },
    ],
    difficulty: 'medium',
    category: 'Traits',
    lessonId: 'trait-default',
    topicId: 'traits-generics',
    points: 100,
  },
  {
    id: 'cp-037',
    title: {
      en: 'Trait Bounds',
      id: 'Batasan Trait',
    },
    description: {
      en: 'Create a generic function that works on any type that implements both the `Display` and `PartialOrd` traits.',
      id: 'Buat fungsi generik yang bekerja pada tipe apa pun yang mengimplementasikan trait `Display` dan `PartialOrd`.',
    },
    initialCode:
      'use std::fmt::Display;\n\n// Create a generic function `compare_and_print` with trait bounds\n\n\nfn main() {\n  compare_and_print(5, 10);\n  compare_and_print("apple", "banana");\n}',
    expectedOutput:
      'Comparing 5 and 10. The larger is 10.\nComparing apple and banana. The larger is banana.',
    solution:
      'use std::fmt::Display;\n\nfn compare_and_print<T: Display + PartialOrd>(a: T, b: T) {\n  let larger = if a > b { a } else { b };\n  println!("Comparing {} and {}. The larger is {}.", a, b, larger);\n}\n\nfn main() {\n  compare_and_print(5, 10);\n  compare_and_print("apple", "banana");\n}',
    hints: [
      {
        en: 'Use the `<T: Trait1 + Trait2>` syntax to specify trait bounds on a generic type `T`.',
        id: 'Gunakan sintaks `<T: Trait1 + Trait2>` untuk menentukan batasan trait pada tipe generik `T`.',
      },
      {
        en: 'The `Display` trait is needed for printing with `{}`.',
        id: 'Trait `Display` diperlukan untuk mencetak dengan `{}`.',
      },
      {
        en: 'The `PartialOrd` trait is needed for comparison with `>`.',
        id: 'Trait `PartialOrd` diperlukan untuk perbandingan dengan `>`.',
      },
    ],
    difficulty: 'hard',
    category: 'Generics',
    lessonId: 'trait-bound',
    topicId: 'traits-generics',
    points: 200,
  },
  {
    id: 'cp-038',
    title: {
      en: 'Lifetime Annotation',
      id: 'Anotasi Lifetime',
    },
    description: {
      en: 'Fix a function that returns the longest of two string slices by adding the correct lifetime annotations.',
      id: 'Perbaiki fungsi yang mengembalikan potongan string terpanjang dari dua potongan dengan menambahkan anotasi lifetime yang benar.',
    },
    initialCode:
      '// Add lifetime annotations to this function\nfn longest(x: &str, y: &str) -> &str {\n  if x.len() > y.len() {\n    x\n  } else {\n    y\n  }\n}\n\nfn main() {\n  let string1 = String::from("long string is long");\n  let result;\n  {\n    let string2 = String::from("xyz");\n    result = longest(string1.as_str(), string2.as_str());\n  }\n  println!("The longest string is {}", result);\n}',
    expectedOutput: 'The longest string is long string is long',
    solution:
      'fn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str {\n  if x.len() > y.len() {\n    x\n  } else {\n    y\n  }\n}\n\nfn main() {\n  let string1 = String::from("long string is long");\n  let result;\n  // NOTE: The original code has a dangling reference problem.\n  // This corrected version demonstrates a valid use of the `longest` function.\n  let string2 = String::from("xyz");\n  result = longest(string1.as_str(), string2.as_str());\n  println!("The longest string is {}", result);\n}',
    hints: [
      {
        en: "Lifetime annotations start with an apostrophe, like `'a`.",
        id: "Anotasi lifetime dimulai dengan tanda kutip tunggal, seperti `'a`.",
      },
      {
        en: "Declare the generic lifetime parameter after the function name: `fn name<'a>(...)`.",
        id: "Deklarasikan parameter lifetime generik setelah nama fungsi: `fn name<'a>(...)`.",
      },
      {
        en: 'Use the same lifetime parameter for all references that are related.',
        id: 'Gunakan parameter lifetime yang sama untuk semua referensi yang saling terkait.',
      },
      {
        en: 'The returned reference must be tied to the lifetime of one of the input references.',
        id: 'Referensi yang dikembalikan harus terikat dengan lifetime dari salah satu referensi input.',
      },
    ],
    difficulty: 'hard',
    category: 'Ownership',
    lessonId: 'lifetime-annotation',
    topicId: 'traits-generics',
    points: 200,
  },

  // =================================================================
  // Lanjutan Advanced Types
  // =================================================================
  {
    id: 'cp-039',
    title: {
      en: 'Function Pointers',
      id: 'Pointer Fungsi',
    },
    description: {
      en: 'Create a function that accepts a function pointer to perform an operation.',
      id: 'Buat sebuah fungsi yang menerima pointer fungsi untuk melakukan sebuah operasi.',
    },
    initialCode:
      'fn add_one(x: i32) -> i32 {\n  x + 1\n}\n\n// Create a function that takes an integer and a function pointer `f`\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n  // Call the function `f` twice on the argument\n\n}\n\nfn main() {\n  let answer = do_twice(add_one, 5);\n  println!("The answer is: {}", answer);\n}',
    expectedOutput: 'The answer is: 7',
    solution:
      'fn add_one(x: i32) -> i32 {\n  x + 1\n}\n\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n  f(f(arg))\n}\n\nfn main() {\n  let answer = do_twice(add_one, 5);\n  println!("The answer is: {}", answer);\n}',
    hints: [
      {
        en: 'The type `fn(i32) -> i32` represents a pointer to a function that takes an `i32` and returns an `i32`.',
        id: 'Tipe `fn(i32) -> i32` merepresentasikan sebuah pointer ke fungsi yang mengambil `i32` dan mengembalikan `i32`.',
      },
      {
        en: 'You can pass the name of a function as an argument where a function pointer is expected.',
        id: 'Anda dapat memberikan nama fungsi sebagai argumen di mana pointer fungsi diharapkan.',
      },
      {
        en: 'Call the function pointer variable just like a regular function.',
        id: 'Panggil variabel pointer fungsi seperti fungsi biasa.',
      },
    ],
    difficulty: 'hard',
    category: 'Functions',
    lessonId: 'advanced-functions',
    topicId: 'advanced-types',
    points: 200,
  },

  // =================================================================
  // Lanjutan Functional Programming
  // =================================================================
  {
    id: 'cp-040',
    title: {
      en: 'Iterator Adaptors',
      id: 'Adaptor Iterator',
    },
    description: {
      en: 'Use iterator adaptors to double each number in a vector and then collect the results into a new vector.',
      id: 'Gunakan adaptor iterator untuk menggandakan setiap angka dalam sebuah vector dan kemudian kumpulkan hasilnya ke dalam vector baru.',
    },
    initialCode:
      'fn main() {\n  let numbers = vec![1, 2, 3, 4, 5];\n\n  // Use `.iter()`, `.map()`, and `.collect()`\n  let doubled: Vec<i32> = \n\n  println!("Original: {:?}, Doubled: {:?}", numbers, doubled);\n}',
    expectedOutput: 'Original: [1, 2, 3, 4, 5], Doubled: [2, 4, 6, 8, 10]',
    solution:
      'fn main() {\n  let numbers = vec![1, 2, 3, 4, 5];\n  let doubled: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();\n  println!("Original: {:?}, Doubled: {:?}", numbers, doubled);\n}',
    hints: [
      {
        en: 'Start the chain with `.iter()` to create an iterator.',
        id: 'Mulai rantai dengan `.iter()` untuk membuat sebuah iterator.',
      },
      {
        en: 'Use `.map()` with a closure to transform each element.',
        id: 'Gunakan `.map()` dengan sebuah closure untuk mengubah setiap elemen.',
      },
      {
        en: 'Use `.collect()` to consume the iterator and create a new collection from its values.',
        id: 'Gunakan `.collect()` untuk mengkonsumsi iterator dan membuat koleksi baru dari nilainya.',
      },
      {
        en: 'You may need to specify the type of the new collection, like `collect::<Vec<i32>>()`.',
        id: 'Anda mungkin perlu menentukan tipe koleksi baru, seperti `collect::<Vec<i32>>()`.',
      },
    ],
    difficulty: 'medium',
    category: 'Functional',
    lessonId: 'iterator-adaptors',
    topicId: 'functional-programming',
    points: 100,
  },

  // =================================================================
  // Lanjutan System Programming
  // =================================================================
  {
    id: 'cp-041',
    title: {
      en: 'Unsafe Rust',
      id: 'Rust yang Tidak Aman (Unsafe)',
    },
    description: {
      en: 'Use an `unsafe` block to dereference a raw pointer.',
      id: 'Gunakan blok `unsafe` untuk melakukan dereferensi pada raw pointer.',
    },
    initialCode:
      'fn main() {\n  let mut num = 5;\n\n  let r1 = &num as *const i32;\n  let r2 = &mut num as *mut i32;\n\n  // Use an unsafe block to dereference r1 and print its value\n  \n}',
    expectedOutput: 'r1 is: 5',
    solution:
      'fn main() {\n  let mut num = 5;\n\n  let r1 = &num as *const i32;\n  let r2 = &mut num as *mut i32;\n\n  unsafe {\n    println!("r1 is: {}", *r1);\n    // *r2 = 10; // Also possible\n  }\n}',
    hints: [
      {
        en: 'Operations like dereferencing raw pointers must be enclosed in an `unsafe { ... }` block.',
        id: 'Operasi seperti dereferensi raw pointer harus diapit dalam blok `unsafe { ... }`.',
      },
      {
        en: 'Create a raw pointer by casting a reference with `as *const T` or `as *mut T`.',
        id: 'Buat raw pointer dengan melakukan casting pada referensi menggunakan `as *const T` atau `as *mut T`.',
      },
      {
        en: 'Dereference a raw pointer with the asterisk `*` operator.',
        id: 'Lakukan dereferensi pada raw pointer dengan operator asterisk `*`.',
      },
    ],
    difficulty: 'hard',
    category: 'System',
    lessonId: 'unsafe',
    topicId: 'system-programming',
    points: 200,
  },
  {
    id: 'cp-042',
    title: {
      en: 'Conditional Compilation',
      id: 'Kompilasi Kondisional',
    },
    description: {
      en: 'Use the `#[cfg]` attribute to include code only when compiling for a specific target operating system.',
      id: 'Gunakan atribut `#[cfg]` untuk menyertakan kode hanya saat melakukan kompilasi untuk sistem operasi target tertentu.',
    },
    initialCode:
      'fn main() {\n  // Use #[cfg] to print a message specific to the OS\n  // This example will only show output on one of the platforms.\n\n\n  println!("This prints on all systems.");\n}',
    expectedOutput: 'Running on Windows!\nThis prints on all systems.',
    solution:
      'fn main() {\n  #[cfg(target_os = "windows")]\n  {\n    println!("Running on Windows!");\n  }\n\n  #[cfg(target_os = "linux")]\n  {\n    println!("Running on Linux!");\n  }\n\n  println!("This prints on all systems.");\n}',
    hints: [
      {
        en: 'The attribute for conditional compilation is `#[cfg(...)]`.',
        id: 'Atribut untuk kompilasi kondisional adalah `#[cfg(...)]`.',
      },
      {
        en: 'You can check the target OS with `target_os = "os_name"`.',
        id: 'Anda dapat memeriksa OS target dengan `target_os = "nama_os"`.',
      },
      {
        en: 'This code will produce different output depending on the system you compile it on.',
        id: 'Kode ini akan menghasilkan output yang berbeda tergantung pada sistem tempat Anda mengkompilasinya.',
      },
    ],
    difficulty: 'medium',
    category: 'Attributes',
    lessonId: 'attributes',
    topicId: 'system-programming',
    points: 100,
  },

  // =================================================================
  // Lanjutan Advanced Concepts
  // =================================================================
  {
    id: 'cp-043',
    title: {
      en: 'Using Box<T>',
      id: 'Menggunakan Box<T>',
    },
    description: {
      en: 'Use a `Box<T>` to store an integer on the heap.',
      id: 'Gunakan `Box<T>` untuk menyimpan integer di heap.',
    },
    initialCode:
      'fn main() {\n  // Create a Box that stores the value 10 on the heap\n  \n\n  // Dereference the box to print its value\n\n}',
    expectedOutput: 'The value in the box is: 10',
    solution:
      'fn main() {\n  let b = Box::new(10);\n  println!("The value in the box is: {}", *b);\n}',
    hints: [
      {
        en: 'Use `Box::new(value)` to allocate memory on the heap and place the value inside.',
        id: 'Gunakan `Box::new(value)` untuk mengalokasikan memori di heap dan menempatkan nilai di dalamnya.',
      },
      {
        en: '`Box<T>` is a smart pointer.',
        id: '`Box<T>` adalah sebuah smart pointer.',
      },
      {
        en: 'Use the `*` dereference operator to access the value inside the `Box`.',
        id: 'Gunakan operator dereferensi `*` untuk mengakses nilai di dalam `Box`.',
      },
    ],
    difficulty: 'medium',
    category: 'Smart Pointers',
    lessonId: 'smart-pointers',
    topicId: 'advanced-concepts',
    points: 100,
  },
  {
    id: 'cp-044',
    title: {
      en: 'Spawning a Thread',
      id: 'Membuat Thread',
    },
    description: {
      en: 'Use `thread::spawn` to run code in a new thread.',
      id: 'Gunakan `thread::spawn` untuk menjalankan kode di thread baru.',
    },
    initialCode:
      'use std::thread;\nuse std::time::Duration;\n\nfn main() {\n  // Spawn a new thread that prints a message\n  \n\n  // Keep the main thread alive long enough for the new thread to finish\n  thread::sleep(Duration::from_millis(1));\n}',
    expectedOutput: 'Hello from the new thread!',
    solution:
      'use std::thread;\nuse std::time::Duration;\n\nfn main() {\n  let handle = thread::spawn(|| {\n    println!("Hello from the new thread!");\n  });\n\n  // Wait for the spawned thread to finish\n  handle.join().unwrap();\n}',
    hints: [
      {
        en: '`thread::spawn` takes a closure as an argument.',
        id: '`thread::spawn` mengambil sebuah closure sebagai argumen.',
      },
      {
        en: 'The main thread will exit without waiting for other threads unless you explicitly wait.',
        id: 'Thread utama akan keluar tanpa menunggu thread lain kecuali Anda secara eksplisit menunggunya.',
      },
      {
        en: 'Call `.join()` on the handle returned by `thread::spawn` to wait for the thread to complete.',
        id: 'Panggil `.join()` pada handle yang dikembalikan oleh `thread::spawn` untuk menunggu thread selesai.',
      },
    ],
    difficulty: 'hard',
    category: 'Concurrency',
    lessonId: 'concurrency',
    topicId: 'advanced-concepts',
    points: 200,
  },

  // =================================================================
  // Lanjutan Error Handling
  // =================================================================
  {
    id: 'cp-045',
    title: {
      en: 'Unrecoverable Errors with panic!',
      id: 'Eror yang Tidak Dapat Dipulihkan dengan panic!',
    },
    description: {
      en: 'Use `panic!` to stop execution when an invalid condition is met.',
      id: 'Gunakan `panic!` untuk menghentikan eksekusi ketika kondisi yang tidak valid terpenuhi.',
    },
    initialCode:
      'fn check_age(age: i32) {\n  if age < 0 {\n    // Panic with a message if age is negative\n\n  } else {\n    println!("Age is valid: {}", age);\n  }\n}\n\nfn main() {\n  // This call should succeed\n  check_age(25);\n  // This call should panic\n  check_age(-5);\n}',
    expectedOutput: 'Age is valid: 25',
    solution:
      'fn check_age(age: i32) {\n  if age < 0 {\n    panic!("Age cannot be negative!");\n  } else {\n    println!("Age is valid: {}", age);\n  }\n}\n\nfn main() {\n  check_age(25);\n}',
    hints: [
      {
        en: 'The `panic!` macro will immediately terminate the current thread.',
        id: 'Makro `panic!` akan segera menghentikan thread saat ini.',
      },
      {
        en: 'Provide a descriptive error message as an argument to `panic!`.',
        id: 'Berikan pesan eror yang deskriptif sebagai argumen untuk `panic!`.',
      },
      {
        en: 'Execution stops at the panic, so any code after it will not run.',
        id: 'Eksekusi berhenti saat terjadi panic, sehingga kode setelahnya tidak akan berjalan.',
      },
      {
        en: 'For this practice, only the non-panicking output is expected.',
        id: 'Untuk latihan ini, hanya output yang tidak menyebabkan panic yang diharapkan.',
      },
    ],
    difficulty: 'easy',
    category: 'Error Handling',
    lessonId: 'panic',
    topicId: 'error-handling',
    points: 50,
  },
];
