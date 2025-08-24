export interface CodePractice {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  expectedOutput?: string;
  solution: string;
  hints: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  lessonId: string;
  topicId: string;
}

export const codePractices: CodePractice[] = [
  // Fundamentals
  {
    id: 'cp-001',
    title: 'Hello World',
    description: 'Write a simple Rust program that prints "Hello, World!" to the console.',
    initialCode: '// Write your code here\nfn main() {\n  \n}',
    expectedOutput: 'Hello, World!',
    solution: 'fn main() {\n  println!("Hello, World!");\n}',
    hints: [
      'Use the println! macro to print text',
      'The println! macro uses an exclamation mark (!)',
      'String literals in Rust are enclosed in double quotes',
    ],
    difficulty: 'easy',
    category: 'Basic Syntax',
    lessonId: 'hello-world',
    topicId: 'fundamentals',
  },

  {
    id: 'cp-002',
    title: 'Variable Declaration',
    description: 'Create variables to store and display your name and age.',
    initialCode:
      'fn main() {\n  // Declare variables for name and age\n  \n  \n  \n  \n  // Print them using println!\n  \n}',
    expectedOutput: 'My name is John and I am 25 years old',
    solution:
      'fn main() {\n  let name = "John";\n  let age = 25;\n  println!("My name is {} and I am {} years old", name, age);\n}',
    hints: [
      'Use `let` to declare variables',
      'Variables are immutable by default in Rust',
      'Use `mut` if you need to change the value later',
      "String literals use double quotes, numbers don't need quotes",
    ],
    difficulty: 'easy',
    category: 'Variables',
    lessonId: 'variables',
    topicId: 'fundamentals',
  },

  {
    id: 'cp-003',
    title: 'Type Annotations',
    description: 'Create variables with explicit type annotations for different data types.',
    initialCode:
      'fn main() {\n  // Declare variables with explicit types\n  let name: &str = "Alice";\n  let age: u32 = 30;\n  let height: f64 = 1.75;\n  let is_student: bool = true;\n  \n  // Print all variables\n  \n}',
    expectedOutput: 'Name: Alice, Age: 30, Height: 1.75, Is Student: true',
    solution:
      'fn main() {\n  let name: &str = "Alice";\n  let age: u32 = 30;\n  let height: f64 = 1.75;\n  let is_student: bool = true;\n  \n  println!("Name: {}, Age: {}, Height: {}, Is Student: {}", name, age, height, is_student);\n}',
    hints: [
      'Use the format! macro for complex string formatting',
      'The format! macro returns a String',
      'You can use placeholders like {} in the format string',
      'Variables are inserted in order',
    ],
    difficulty: 'easy',
    category: 'Data Types',
    lessonId: 'scalar-types',
    topicId: 'fundamentals',
  },

  // Control Structures
  {
    id: 'cp-004',
    title: 'If-Else Statement',
    description: 'Write a program that checks if a number is positive, negative, or zero.',
    initialCode: 'fn main() {\n  let number = -5;\n  \n  // Use if-else to check the number\n  \n}',
    expectedOutput: 'The number -5 is negative',
    solution:
      'fn main() {\n  let number = -5;\n  \n  if number > 0 {\n    println!("The number {} is positive", number);\n  } else if number < 0 {\n    println!("The number {} is negative", number);\n  } else {\n    println!("The number {} is zero", number);\n  }\n}',
    hints: [
      'Use `if` followed by a condition',
      'The condition must be a boolean expression',
      'Use `else if` for additional conditions',
      'Use `else` for the default case',
    ],
    difficulty: 'easy',
    category: 'Control Flow',
    lessonId: 'conditional-if',
    topicId: 'control-structures',
  },

  {
    id: 'cp-005',
    title: 'For Loop',
    description: 'Use a for loop to print numbers from 1 to 5.',
    initialCode: 'fn main() {\n  // Use a for loop to print numbers 1 to 5\n  \n}',
    expectedOutput: '1\n2\n3\n4\n5',
    solution: 'fn main() {\n  for i in 1..=5 {\n    println!("{}", i);\n  }\n}',
    hints: [
      'Use `for` followed by a range',
      'The range syntax is `start..=end` (inclusive)',
      'Each iteration will assign the current number to a variable',
      'Use `println!` inside the loop body',
    ],
    difficulty: 'easy',
    category: 'Loops',
    lessonId: 'for-loops',
    topicId: 'control-structures',
  },

  // Functions & Modules
  {
    id: 'cp-006',
    title: 'Function Definition',
    description: 'Create a function that adds two numbers and returns the result.',
    initialCode:
      '// Define a function that adds two numbers\nfn add_numbers(a: i32, b: i32) -> i32 {\n  \n}\n\nfn main() {\n  let result = add_numbers(10, 20);\n  println!("10 + 20 = {}", result);\n}',
    expectedOutput: '10 + 20 = 30',
    solution:
      'fn add_numbers(a: i32, b: i32) -> i32 {\n  a + b\n}\n\nfn main() {\n  let result = add_numbers(10, 20);\n  println!("10 + 20 = {}", result);\n}',
    hints: [
      'Use the `return` keyword or just the expression',
      'In Rust, the last expression in a function is automatically returned',
      'Make sure the function signature matches the call',
      'The function should return an i32',
    ],
    difficulty: 'medium',
    category: 'Functions',
    lessonId: 'functions',
    topicId: 'functions-modules',
  },

  // Memory Management
  {
    id: 'cp-007',
    title: 'Understanding Ownership',
    description: 'Demonstrate ownership rules by creating and moving values between variables.',
    initialCode:
      'fn main() {\n  let s1 = String::from("hello");\n  \n  // Move s1 to s2\n  \n  // Try to use s1 here (this will cause an error)\n  \n  // Use s2 instead\n  \n}',
    expectedOutput: 's2 contains: hello',
    solution:
      'fn main() {\n  let s1 = String::from("hello");\n  \n  let s2 = s1; // Move s1 to s2\n  \n  // println!("s1: {}", s1); // This would cause an error\n  \n  println!("s2 contains: {}", s2);\n}',
    hints: [
      'Use `let s2 = s1;` to move ownership',
      'After moving, s1 is no longer valid',
      'Comment out the line that tries to use s1',
      'Use s2 to access the string value',
    ],
    difficulty: 'medium',
    category: 'Ownership',
    lessonId: 'ownership',
    topicId: 'memory-management',
  },

  {
    id: 'cp-008',
    title: 'Borrowing References',
    description: 'Create a function that borrows a string reference and prints its length.',
    initialCode:
      '// Function that borrows a string reference\nfn print_string_length(s: &String) -> usize {\n  \n}\n\nfn main() {\n  let my_string = String::from("Rust Programming");\n  let length = print_string_length(&my_string);\n  println!("The string \'Rust Programming\' has {} characters", length);\n}',
    expectedOutput: "The string 'Rust Programming' has 16 characters",
    solution:
      'fn print_string_length(s: &String) -> usize {\n  s.len()\n}\n\nfn main() {\n  let my_string = String::from("Rust Programming");\n  let length = print_string_length(&my_string);\n  println!("The string \'Rust Programming\' has {} characters", length);\n}',
    hints: [
      'Use the `len()` method on the string reference',
      'The function should return the length as usize',
      'Make sure to return the length value',
      'The function borrows the string, so ownership stays with main',
    ],
    difficulty: 'medium',
    category: 'Borrowing',
    lessonId: 'borrowing-ref',
    topicId: 'memory-management',
  },

  // Structs & Enums
  {
    id: 'cp-009',
    title: 'Struct Definition',
    description:
      'Create a struct to represent a Person with name and age, then create an instance.',
    initialCode:
      "// Define a Person struct\nstruct Person {\n  \n}\n\nfn main() {\n  // Create a Person instance\n  \n  \n  // Print the person's information\n  \n}",
    expectedOutput: 'Person: John Doe, Age: 30',
    solution:
      'struct Person {\n  name: String,\n  age: u32,\n}\n\nfn main() {\n  let person = Person {\n    name: String::from("John Doe"),\n    age: 30,\n  };\n  \n  println!("Person: {}, Age: {}", person.name, person.age);\n}',
    hints: [
      'Struct fields need types (String for name, u32 for age)',
      'Use `String::from()` to create owned strings',
      'Create an instance using the struct name and field values',
      'Access fields using dot notation (person.name)',
    ],
    difficulty: 'medium',
    category: 'Structs',
    lessonId: 'structs',
    topicId: 'structs-enums',
  },

  {
    id: 'cp-010',
    title: 'Enum with Variants',
    description: 'Create an enum for different types of shapes and a function to calculate area.',
    initialCode:
      '// Define an enum for shapes\nenum Shape {\n  \n}\n\n// Function to calculate area\nfn calculate_area(shape: &Shape) -> f64 {\n  \n}\n\nfn main() {\n  let circle = Shape::Circle(5.0);\n  let rectangle = Shape::Rectangle(4.0, 6.0);\n  \n  println!("Circle area: {:.2}", calculate_area(&circle));\n  println!("Rectangle area: {:.2}", calculate_area(&rectangle));\n}',
    expectedOutput: 'Circle area: 78.54\nRectangle area: 24.00',
    solution:
      'enum Shape {\n  Circle(f64),\n  Rectangle(f64, f64),\n}\n\nfn calculate_area(shape: &Shape) -> f64 {\n  match shape {\n    Shape::Circle(radius) => 3.14159 * radius * radius,\n    Shape::Rectangle(width, height) => width * height,\n  }\n}\n\nfn main() {\n  let circle = Shape::Circle(5.0);\n  let rectangle = Shape::Rectangle(4.0, 6.0);\n  \n  println!("Circle area: {:.2}", calculate_area(&circle));\n  println!("Rectangle area: {:.2}", calculate_area(&rectangle));\n}',
    hints: [
      'Use `Circle(f64)` and `Rectangle(f64, f64)` variants',
      'Use `match` to handle different variants',
      'Circle area = π * r², Rectangle area = width * height',
      'Use `3.14159` for π approximation',
    ],
    difficulty: 'hard',
    category: 'Enums',
    lessonId: 'enums',
    topicId: 'structs-enums',
  },

  // Pattern Matching
  {
    id: 'cp-011',
    title: 'Match Expression',
    description: 'Use pattern matching to handle different types of user input.',
    initialCode:
      'enum UserInput {\n  Text(String),\n  Number(i32),\n  Boolean(bool),\n}\n\nfn process_input(input: &UserInput) -> String {\n  // Use match to handle different input types\n  \n}\n\nfn main() {\n  let inputs = [\n    UserInput::Text(String::from("Hello")),\n    UserInput::Number(42),\n    UserInput::Boolean(true),\n  ];\n  \n  for input in &inputs {\n    println!("{}", process_input(input));\n  }\n}',
    expectedOutput: 'Text: Hello\nNumber: 42\nBoolean: true',
    solution:
      'enum UserInput {\n  Text(String),\n  Number(i32),\n  Boolean(bool),\n}\n\nfn process_input(input: &UserInput) -> String {\n  match input {\n    UserInput::Text(ref text) => format!("Text: {}", text),\n    UserInput::Number(num) => format!("Number: {}", num),\n    UserInput::Boolean(b) => format!("Boolean: {}", b),\n  }\n}\n\nfn main() {\n  let inputs = [\n    UserInput::Text(String::from("Hello")),\n    UserInput::Number(42),\n    UserInput::Boolean(true),\n  ];\n  \n  for input in &inputs {\n    println!("{}", process_input(input));\n  }\n}',
    hints: [
      'Use `match` with the input parameter',
      'Handle each variant with appropriate patterns',
      'Use `ref` to borrow the inner value',
      'Return descriptive strings for each case',
    ],
    difficulty: 'hard',
    category: 'Pattern Matching',
    lessonId: 'enums',
    topicId: 'structs-enums',
  },

  // Error Handling
  {
    id: 'cp-012',
    title: 'Result Type',
    description:
      'Create a function that parses a string to a number and handles errors gracefully.',
    initialCode:
      'use std::str::FromStr;\n\nfn parse_number(s: &str) -> Result<i32, String> {\n  // Parse the string and return Result\n  \n}\n\nfn main() {\n  let test_cases = ["123", "abc", "45.67", "-10"];\n  \n  for case in &test_cases {\n    match parse_number(case) {\n      Ok(number) => println!("Successfully parsed: {}", number),\n      Err(error) => println!("Failed to parse \'{}\': {}", case, error),\n    }\n  }\n}',
    expectedOutput:
      "Successfully parsed: 123\nFailed to parse 'abc': invalid number\nFailed to parse '45.67': invalid number\nSuccessfully parsed: -10",
    solution:
      'use std::str::FromStr;\n\nfn parse_number(s: &str) -> Result<i32, String> {\n  i32::from_str(s).map_err(|_| "invalid number".to_string())\n}\n\nfn main() {\n  let test_cases = ["123", "abc", "45.67", "-10"];\n  \n  for case in &test_cases {\n    match parse_number(case) {\n      Ok(number) => println!("Successfully parsed: {}", number),\n      Err(error) => println!("Failed to parse \'{}\': {}", case, error),\n    }\n  }\n}',
    hints: [
      'Use `i32::from_str(s)` to parse the string',
      'The `from_str` method returns a Result',
      'Handle the Result with `map` or `map_err`',
      'Return appropriate error messages for invalid inputs',
    ],
    difficulty: 'hard',
    category: 'Error Handling',
    lessonId: 'functions',
    topicId: 'functions-modules',
  },

  // Traits & Generics
  {
    id: 'cp-013',
    title: 'Generic Function',
    description: 'Create a generic function that finds the maximum of two values.',
    initialCode:
      "// Generic function to find maximum\nfn find_max<T>(a: T, b: T) -> T \nwhere\n  T: PartialOrd + Copy,\n{\n  \n}\n\nfn main() {\n  let max_int = find_max(10, 20);\n  let max_float = find_max(3.14, 2.71);\n  let max_char = find_max('a', 'z');\n  \n  println!(\"Max int: {}, Max float: {:.2}, Max char: {}\", max_int, max_float, max_char);\n}",
    expectedOutput: 'Max int: 20, Max float: 3.14, Max char: z',
    solution:
      "fn find_max<T>(a: T, b: T) -> T \nwhere\n  T: PartialOrd + Copy,\n{\n  if a > b { a } else { b }\n}\n\nfn main() {\n  let max_int = find_max(10, 20);\n  let max_float = find_max(3.14, 2.71);\n  let max_char = find_max('a', 'z');\n  \n  println!(\"Max int: {}, Max float: {:.2}, Max char: {}\", max_int, max_float, max_char);\n}",
    hints: [
      'Use `if` to compare the two values',
      'The `PartialOrd` trait allows comparison',
      'The `Copy` trait allows the values to be copied',
      'Return the larger of the two values',
    ],
    difficulty: 'hard',
    category: 'Generics',
    lessonId: 'traits',
    topicId: 'traits-generics',
  },

  {
    id: 'cp-014',
    title: 'Trait Implementation',
    description: 'Implement a trait for a custom type to enable printing.',
    initialCode:
      'use std::fmt;\n\n// Custom struct\nstruct Point {\n  x: f64,\n  y: f64,\n}\n\n// Implement Display trait for Point\nimpl fmt::Display for Point {\n  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n    \n  }\n}\n\nfn main() {\n  let point = Point { x: 3.0, y: 4.0 };\n  println!("Point: {}", point);\n}',
    expectedOutput: 'Point: (3.0, 4.0)',
    solution:
      'use std::fmt;\n\nstruct Point {\n  x: f64,\n  y: f64,\n}\n\nimpl fmt::Display for Point {\n  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n    write!(f, "({}, {})", self.x, self.y)\n  }\n}\n\nfn main() {\n  let point = Point { x: 3.0, y: 4.0 };\n  println!("Point: {}", point);\n}',
    hints: [
      'Use `write!` macro to format the output',
      'The format should be "(x, y)"',
      'Access fields using `self.x` and `self.y`',
      'Return `fmt::Result::Ok(())` on success',
    ],
    difficulty: 'hard',
    category: 'Traits',
    lessonId: 'traits',
    topicId: 'traits-generics',
  },

  // Collections
  {
    id: 'cp-015',
    title: 'Vector Operations',
    description: 'Create a vector, add elements, and find the sum of all numbers.',
    initialCode:
      'fn main() {\n  // Create an empty vector\n  \n  \n  // Add some numbers to the vector\n  \n  \n  // Calculate the sum of all numbers\n  \n  \n  // Print the result\n  \n}',
    expectedOutput: 'Vector: [1, 2, 3, 4, 5]\nSum: 15',
    solution:
      'fn main() {\n  let mut numbers = Vec::new();\n  \n  numbers.push(1);\n  numbers.push(2);\n  numbers.push(3);\n  numbers.push(4);\n  numbers.push(5);\n  \n  let sum: i32 = numbers.iter().sum();\n  \n  println!("Vector: {:?}", numbers);\n  println!("Sum: {}", sum);\n}',
    hints: [
      'Use `Vec::new()` to create an empty vector',
      'Use `push()` to add elements to the vector',
      'Use `iter()` and `sum()` to calculate the sum',
      'The sum method returns the same type as the vector elements',
    ],
    difficulty: 'medium',
    category: 'Collections',
    lessonId: 'vectors',
    topicId: 'collections',
  },
];
