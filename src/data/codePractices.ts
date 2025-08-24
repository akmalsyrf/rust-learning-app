import { CodePractice } from '../types';

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
  // Data Types & Operations
  {
    id: 'cp-016',
    title: 'Arithmetic Operations',
    description: 'Perform and print the results of basic arithmetic operations.',
    initialCode:
      'fn main() {\n  let a = 15;\n  let b = 4;\n\n  // Calculate sum, difference, product, quotient, and remainder\n  let sum = a + b;\n  let diff = a - b;\n  let prod = a * b;\n  let quot = a / b;\n  let rem = a % b;\n\n  // Print the results\n\n}',
    expectedOutput: 'Sum: 19\nDifference: 11\nProduct: 60\nQuotient: 3\nRemainder: 3',
    solution:
      'fn main() {\n  let a = 15;\n  let b = 4;\n\n  let sum = a + b;\n  let diff = a - b;\n  let prod = a * b;\n  let quot = a / b;\n  let rem = a % b;\n\n  println!("Sum: {}", sum);\n  println!("Difference: {}", diff);\n  println!("Product: {}", prod);\n  println!("Quotient: {}", quot);\n  println!("Remainder: {}", rem);\n}',
    hints: [
      'Use + for addition',
      'Use - for subtraction',
      'Use * for multiplication',
      'Use / for integer division',
      'Use % for the remainder (modulo)',
    ],
    difficulty: 'easy',
    category: 'Operators',
    lessonId: 'operators',
    topicId: 'data-types',
  },

  // Control Structures
  {
    id: 'cp-017',
    title: 'Countdown with While Loop',
    description: 'Use a `while` loop to create a countdown from 5 to 1, then print "Liftoff!".',
    initialCode:
      'fn main() {\n  let mut count = 5;\n\n  println!("Starting countdown...");\n\n  // Use a while loop to count down from 5 to 1\n  \n\n  println!("Liftoff!");\n}',
    expectedOutput: 'Starting countdown...\n5\n4\n3\n2\n1\nLiftoff!',
    solution:
      'fn main() {\n  let mut count = 5;\n\n  println!("Starting countdown...");\n\n  while count > 0 {\n    println!("{}", count);\n    count -= 1;\n  }\n\n  println!("Liftoff!");\n}',
    hints: [
      'The variable `count` needs to be mutable (`mut`) to be changed.',
      'The loop condition should check if `count` is greater than 0.',
      'Decrement the counter inside the loop using `count -= 1;`.',
    ],
    difficulty: 'easy',
    category: 'Loops',
    lessonId: 'while-loops',
    topicId: 'control-structures',
  },

  // Collections
  {
    id: 'cp-018',
    title: 'Tuple Destructuring',
    description:
      'Create a tuple to hold user information (name, age, is_active) and then destructure it into separate variables.',
    initialCode:
      'fn main() {\n  let user_data = ("Alex", 34, true);\n\n  // Destructure the tuple into three variables: name, age, and is_active\n  \n\n  println!("Name: {}", name);\n  println!("Age: {}", age);\n  println!("Active: {}", is_active);\n}',
    expectedOutput: 'Name: Alex\nAge: 34\nActive: true',
    solution:
      'fn main() {\n  let user_data = ("Alex", 34, true);\n\n  let (name, age, is_active) = user_data;\n\n  println!("Name: {}", name);\n  println!("Age: {}", age);\n  println!("Active: {}", is_active);\n}',
    hints: [
      'Use `let (var1, var2, ...)` to destructure a tuple.',
      'The number of variables must match the number of elements in the tuple.',
      'You can also access tuple elements by index, like `user_data.0`.',
    ],
    difficulty: 'easy',
    category: 'Collections',
    lessonId: 'tuples',
    topicId: 'collections',
  },

  // Structs & Enums
  {
    id: 'cp-019',
    title: 'Struct Method Implementation',
    description:
      'Define a `Rectangle` struct and implement a method `area` that calculates its area.',
    initialCode:
      'struct Rectangle {\n  width: u32,\n  height: u32,\n}\n\n// Implement methods for the Rectangle struct\nimpl Rectangle {\n  // Define the area method here\n  // It should take an immutable reference to self and return a u32\n\n}\n\nfn main() {\n  let rect = Rectangle { width: 30, height: 50 };\n  println!("The area of the rectangle is {}", rect.area());\n}',
    expectedOutput: 'The area of the rectangle is 1500',
    solution:
      'struct Rectangle {\n  width: u32,\n  height: u32,\n}\n\nimpl Rectangle {\n  fn area(&self) -> u32 {\n    self.width * self.height\n  }\n}\n\nfn main() {\n  let rect = Rectangle { width: 30, height: 50 };\n  println!("The area of the rectangle is {}", rect.area());\n}',
    hints: [
      'Start the method definition with `fn area(&self) -> u32 { ... }`.',
      'Inside the method, access fields using `self.width` and `self.height`.',
      'The last expression is the return value, so no semicolon is needed.',
    ],
    difficulty: 'medium',
    category: 'Structs',
    lessonId: 'struct-methods',
    topicId: 'structs-enums',
  },

  // Memory Management
  {
    id: 'cp-020',
    title: 'Modifying with Mutable References',
    description:
      'Create a function that takes a mutable reference to a `String` and appends a word to it.',
    initialCode:
      '// This function takes a mutable reference and appends ", world"\nfn append_world(s: &mut String) {\n  // Your code here\n}\n\nfn main() {\n  let mut my_string = String::from("hello");\n  println!("Before: {}", my_string);\n\n  append_world(&mut my_string);\n\n  println!("After: {}", my_string);\n}',
    expectedOutput: 'Before: hello\nAfter: hello, world',
    solution:
      'fn append_world(s: &mut String) {\n  s.push_str(", world");\n}\n\nfn main() {\n  let mut my_string = String::from("hello");\n  println!("Before: {}", my_string);\n\n  append_world(&mut my_string);\n\n  println!("After: {}", my_string);\n}',
    hints: [
      'The variable `my_string` must be declared as `mut` to be borrowed mutably.',
      'The function signature for the parameter is `s: &mut String`.',
      'Use the `push_str()` method to append a string slice to a `String`.',
    ],
    difficulty: 'medium',
    category: 'Borrowing',
    lessonId: 'mutable-ref',
    topicId: 'memory-management',
  },

  // Functional Programming
  {
    id: 'cp-021',
    title: 'Simple Closure',
    description: 'Use a closure to double a number and call it.',
    initialCode:
      'fn main() {\n  let number = 10;\n\n  // Define a closure that takes an integer and returns it doubled\n  \n\n  // Call the closure with `number` and store the result\n  let result = \n\n  println!("{} doubled is {}", number, result);\n}',
    expectedOutput: '10 doubled is 20',
    solution:
      'fn main() {\n  let number = 10;\n\n  let double = |x| x * 2;\n\n  let result = double(number);\n  println!("{} doubled is {}", number, result);\n}',
    hints: [
      'Closure syntax is `|parameter| body`.',
      'You can assign the closure to a variable.',
      'Call the closure like a regular function.',
    ],
    difficulty: 'medium',
    category: 'Functional',
    lessonId: 'closures',
    topicId: 'functional-programming',
  },

  // Error Handling
  {
    id: 'cp-022',
    title: 'Error Propagation with ?',
    description:
      'Implement a function that parses two strings into numbers, adds them, and uses the `?` operator for concise error handling.',
    initialCode:
      'use std::num::ParseIntError;\n\n// Implement this function using the `?` operator\nfn add_str_numbers(a: &str, b: &str) -> Result<i32, ParseIntError> {\n  // Your code here\n}\n\n// The main function is used to test your implementation\nfn main() {\n  match add_str_numbers("10", "20") {\n    Ok(sum) => println!("Sum: {}", sum),\n    Err(e) => println!("An unexpected error occurred: {}", e),\n  }\n\n  match add_str_numbers("5", "abc") {\n    Ok(_) => println!("This test case should have failed!"),\n    Err(e) => println!("Correctly handled error: {}", e),\n  }\n}',
    expectedOutput: 'Sum: 30\nCorrectly handled error: invalid digit found in string',
    solution:
      'use std::num::ParseIntError;\n\nfn add_str_numbers(a: &str, b: &str) -> Result<i32, ParseIntError> {\n  let num_a = a.parse::<i32>()?;\n  let num_b = b.parse::<i32>()?;\n  Ok(num_a + num_b)\n}\n\n// The main function is used to test your implementation\nfn main() {\n  match add_str_numbers("10", "20") {\n    Ok(sum) => println!("Sum: {}", sum),\n    Err(e) => println!("An unexpected error occurred: {}", e),\n  }\n\n  match add_str_numbers("5", "abc") {\n    Ok(_) => println!("This test case should have failed!"),\n    Err(e) => println!("Correctly handled error: {}", e),\n  }\n}',
    hints: [
      'Use `str.parse::<i32>()` to convert a string slice to a number.',
      'The `parse` method returns a `Result`.',
      'Append `?` to a `Result`-returning expression to propagate the error.',
      'If both parses succeed, return the sum wrapped in `Ok()`.',
    ],
    difficulty: 'hard',
    category: 'Error Handling',
    lessonId: 'recoverable-errors',
    topicId: 'error-handling',
  },
  // =================================================================
  // Lanjutan Fundamentals
  // =================================================================
  {
    id: 'cp-023',
    title: 'Using Comments',
    description: 'Write a program that uses different types of comments to explain the code.',
    initialCode:
      'fn main() {\n  let a = 5;\n  let b = 10;\n\n  // Add your comments here\n\n  let sum = a + b;\n  println!("The sum is: {}", sum);\n}',
    expectedOutput: 'The sum is: 15',
    solution:
      '// This is the main function where the program execution begins.\nfn main() {\n  let a = 5; // Declare the first variable\n  let b = 10; // Declare the second variable\n\n  /*\n   * This is a block comment.\n   * We calculate the sum of a and b.\n   */\n  let sum = a + b;\n  println!("The sum is: {}", sum); // Print the final sum\n}',
    hints: [
      'Use `//` for single-line comments.',
      'Use `/* ... */` for multi-line block comments.',
      "Comments do not affect the program's output.",
    ],
    difficulty: 'easy',
    category: 'Basic Syntax',
    lessonId: 'comments',
    topicId: 'fundamentals',
  },
  {
    id: 'cp-024',
    title: 'String Literals',
    description: 'Declare a string literal and print its value.',
    initialCode:
      'fn main() {\n  // Declare a string literal variable named `greeting`\n\n\n  // Print the greeting\n\n}',
    expectedOutput: 'Hello from a string literal!',
    solution:
      'fn main() {\n  let greeting: &str = "Hello from a string literal!";\n  println!("{}", greeting);\n}',
    hints: [
      'String literals have the type `&str`.',
      'The value is enclosed in double quotes.',
      'You can use type annotation `: &str` for clarity.',
    ],
    difficulty: 'easy',
    category: 'Data Types',
    lessonId: 'string-literals',
    topicId: 'fundamentals',
  },

  // =================================================================
  // Lanjutan Data Types & Operations
  // =================================================================
  {
    id: 'cp-025',
    title: 'Using Constants',
    description: 'Define a constant for the maximum number of retries and use it in your code.',
    initialCode:
      '// Define a constant for MAX_RETRIES with value 3\n\n\nfn main() {\n  println!("Maximum number of retries: {}", MAX_RETRIES);\n}',
    expectedOutput: 'Maximum number of retries: 3',
    solution:
      'const MAX_RETRIES: u32 = 3;\n\nfn main() {\n  println!("Maximum number of retries: {}", MAX_RETRIES);\n}',
    hints: [
      'Use the `const` keyword to declare constants.',
      'Constant names are typically in SCREAMING_SNAKE_CASE.',
      'You must explicitly annotate the type of a constant (e.g., `: u32`).',
    ],
    difficulty: 'easy',
    category: 'Variables',
    lessonId: 'constants',
    topicId: 'data-types',
  },
  {
    id: 'cp-026',
    title: 'Type Casting',
    description: 'Cast a floating-point number into an integer to perform integer division.',
    initialCode:
      'fn main() {\n  let float_value: f64 = 12.9;\n  \n  // Cast the float_value to a u32 integer\n  let int_value = \n\n  println!("{} as an integer is {}", float_value, int_value);\n}',
    expectedOutput: '12.9 as an integer is 12',
    solution:
      'fn main() {\n  let float_value: f64 = 12.9;\n  \n  let int_value = float_value as u32;\n\n  println!("{} as an integer is {}", float_value, int_value);\n}',
    hints: [
      'Use the `as` keyword for explicit type casting.',
      'Casting a float to an integer truncates the decimal part.',
      'The syntax is `value as NewType`.',
    ],
    difficulty: 'medium',
    category: 'Data Types',
    lessonId: 'type-alias-casting',
    topicId: 'data-types',
  },

  // =================================================================
  // Lanjutan Control Structures
  // =================================================================
  {
    id: 'cp-027',
    title: 'Loop with Break and Continue',
    description:
      'Use a `loop` to iterate from 1 to 10. Print only the odd numbers and stop the loop if the number is greater than 7.',
    initialCode:
      'fn main() {\n  let mut i = 0;\n  loop {\n    i += 1;\n    // If i is even, skip to the next iteration\n\n\n    // If i is greater than 7, break the loop\n\n\n    println!("{}", i);\n  }\n}',
    expectedOutput: '1\n3\n5\n7',
    solution:
      'fn main() {\n  let mut i = 0;\n  loop {\n    i += 1;\n    if i % 2 == 0 {\n      continue;\n    }\n    if i > 7 {\n      break;\n    }\n    println!("{}", i);\n  }\n}',
    hints: [
      'Use `continue` to skip the rest of the current iteration.',
      'Use `break` to exit the loop entirely.',
      'The modulo operator `%` can check for even numbers (`num % 2 == 0`).',
    ],
    difficulty: 'medium',
    category: 'Loops',
    lessonId: 'loop-break-continue',
    topicId: 'control-structures',
  },

  // =================================================================
  // Lanjutan Collections
  // =================================================================
  {
    id: 'cp-028',
    title: 'Array Initialization',
    description:
      'Declare an array of 5 integers, initialize it with some values, and print the third element.',
    initialCode:
      'fn main() {\n  // Declare an array named `numbers` with 5 elements\n  \n\n  // Print the third element (at index 2)\n\n}',
    expectedOutput: 'The third element is: 30',
    solution:
      'fn main() {\n  let numbers: [i32; 5] = [10, 20, 30, 40, 50];\n  println!("The third element is: {}", numbers[2]);\n}',
    hints: [
      'The type annotation for an array is `[type; size]`.',
      'Array elements are accessed using zero-based indexing with square brackets `[]`.',
      'All elements in an array must have the same type.',
    ],
    difficulty: 'easy',
    category: 'Collections',
    lessonId: 'arrays',
    topicId: 'collections',
  },
  {
    id: 'cp-029',
    title: 'Creating a Slice',
    description: 'Create a slice that contains the second and third elements of an array.',
    initialCode:
      'fn main() {\n  let data = [11, 22, 33, 44, 55];\n\n  // Create a slice containing the elements 22 and 33\n  let slice = \n\n  println!("The slice is: {:?}", slice);\n}',
    expectedOutput: 'The slice is: [22, 33]',
    solution:
      'fn main() {\n  let data = [11, 22, 33, 44, 55];\n  let slice = &data[1..3];\n  println!("The slice is: {:?}", slice);\n}',
    hints: [
      'A slice is a reference to a part of a collection, so it starts with `&`.',
      'The range syntax `[start..end]` creates a slice.',
      'The range is exclusive of the `end` index.',
    ],
    difficulty: 'medium',
    category: 'Collections',
    lessonId: 'slices',
    topicId: 'collections',
  },

  // =================================================================
  // Lanjutan Functions & Modules
  // =================================================================
  {
    id: 'cp-030',
    title: 'Inline Modules',
    description: 'Organize related functions into an inline module and call a function from it.',
    initialCode:
      '// Define a module named `greetings`\nmod greetings {\n  // Define a public function `hello` inside the module\n\n}\n\nfn main() {\n  // Call the `hello` function from the `greetings` module\n\n}',
    expectedOutput: 'Hello from the greetings module!',
    solution:
      'mod greetings {\n  pub fn hello() {\n    println!("Hello from the greetings module!");\n  }\n}\n\nfn main() {\n  greetings::hello();\n}',
    hints: [
      'Use the `mod` keyword to define a module.',
      'Use the `pub` keyword to make a function or item public (visible outside the module).',
      'Access items in a module using the path `module_name::item_name`.',
    ],
    difficulty: 'medium',
    category: 'Modules',
    lessonId: 'inline-modules',
    topicId: 'functions-modules',
  },
  {
    id: 'cp-031',
    title: 'Using `use` Statements',
    description: 'Bring a function into scope with the `use` keyword to call it directly.',
    initialCode:
      'mod math {\n  pub fn add(a: i32, b: i32) -> i32 {\n    a + b\n  }\n}\n\n// Bring the `add` function into the current scope\n\n\nfn main() {\n  // Call `add` directly without the module path\n  let result = add(5, 10);\n  println!("5 + 10 = {}", result);\n}',
    expectedOutput: '5 + 10 = 15',
    solution:
      'mod math {\n  pub fn add(a: i32, b: i32) -> i32 {\n    a + b\n  }\n}\n\nuse math::add;\n\nfn main() {\n  let result = add(5, 10);\n  println!("5 + 10 = {}", result);\n}',
    hints: [
      'The syntax is `use path::to::item;`.',
      '`use` statements are typically placed at the top of the scope.',
      'Once an item is in scope with `use`, you can refer to it directly.',
    ],
    difficulty: 'medium',
    category: 'Modules',
    lessonId: 'use-statements',
    topicId: 'module-system-advanced',
  },

  // =================================================================
  // Lanjutan Structs & Enums
  // =================================================================
  {
    id: 'cp-032',
    title: 'Struct Update Syntax',
    description:
      'Create a new struct instance using values from an existing instance with the struct update syntax.',
    initialCode:
      'struct User {\n  username: String,\n  email: String,\n  active: bool,\n}\n\nfn main() {\n  let user1 = User {\n    username: String::from("user1"),\n    email: String::from("user1@example.com"),\n    active: true,\n  };\n\n  // Create user2 with a new username but the same email and active status as user1\n  let user2 = \n\n  println!("User 2: {} <{}>", user2.username, user2.email);\n}',
    expectedOutput: 'User 2: user2 <user1@example.com>',
    solution:
      'struct User {\n  username: String,\n  email: String,\n  active: bool,\n}\n\nfn main() {\n  let user1 = User {\n    username: String::from("user1"),\n    email: String::from("user1@example.com"),\n    active: true,\n  };\n\n  let user2 = User {\n    username: String::from("user2"),\n    ..user1\n  };\n\n  println!("User 2: {} <{}>", user2.username, user2.email);\n}',
    hints: [
      'The struct update syntax is `..instance_name`.',
      'It must come last in the struct initializer.',
      'This syntax moves the remaining fields, so `user1` may become partially unusable if fields are not `Copy`.',
    ],
    difficulty: 'easy',
    category: 'Structs',
    lessonId: 'struct-update',
    topicId: 'structs-enums',
  },
  {
    id: 'cp-033',
    title: 'Tuple Structs',
    description: 'Define and use a tuple struct to represent a color with RGB values.',
    initialCode:
      '// Define a tuple struct `Color` that holds three u8 values (R, G, B)\n\n\nfn main() {\n  // Create an instance of `Color` for blue (0, 0, 255)\n\n\n  // Access the green value (the second element) and print it\n  \n}',
    expectedOutput: 'The green value is: 0',
    solution:
      'struct Color(u8, u8, u8);\n\nfn main() {\n  let blue = Color(0, 0, 255);\n  println!("The green value is: {}", blue.1);\n}',
    hints: [
      'Define a tuple struct like `struct Name(Type1, Type2);`.',
      'Instantiate it like calling a function: `Name(value1, value2)`.',
      'Access elements using dot notation and zero-based indexing, like `instance.0`.',
    ],
    difficulty: 'easy',
    category: 'Structs',
    lessonId: 'tuple-structs',
    topicId: 'structs-enums',
  },
  {
    id: 'cp-034',
    title: 'Enum Methods',
    description: 'Implement a method on an enum to perform a different action for each variant.',
    initialCode:
      'enum Message {\n  Write(String),\n  Quit,\n}\n\n// Implement methods for the Message enum\nimpl Message {\n  // Create a method `process` that prints a different message for each variant\n  \n}\n\nfn main() {\n  let msg1 = Message::Write(String::from("Hello"));\n  let msg2 = Message::Quit;\n\n  msg1.process();\n  msg2.process();\n}',
    expectedOutput: 'Writing message: Hello\nQuitting...',
    solution:
      'enum Message {\n  Write(String),\n  Quit,\n}\n\nimpl Message {\n  fn process(&self) {\n    match self {\n      Message::Write(text) => println!("Writing message: {}", text),\n      Message::Quit => println!("Quitting..."),\n    }\n  }\n}\n\nfn main() {\n  let msg1 = Message::Write(String::from("Hello"));\n  let msg2 = Message::Quit;\n\n  msg1.process();\n  msg2.process();\n}',
    hints: [
      'Use an `impl` block just like with structs: `impl EnumName { ... }`.',
      'Inside the method, use a `match` statement on `self` to handle the different variants.',
      'Methods usually take `&self` as their first parameter.',
    ],
    difficulty: 'medium',
    category: 'Enums',
    lessonId: 'enum-methods',
    topicId: 'structs-enums',
  },

  // =================================================================
  // Lanjutan Memory Management
  // =================================================================
  {
    id: 'cp-035',
    title: 'String Slices',
    description: 'Create a function that takes a string slice and returns the first word.',
    initialCode:
      '// This function returns the first word of a string slice\nfn first_word(s: &str) -> &str {\n  // Your code here\n}\n\nfn main() {\n  let my_string = String::from("hello world");\n  let word = first_word(&my_string);\n  println!("The first word is: {}", word);\n}',
    expectedOutput: 'The first word is: hello',
    solution:
      'fn first_word(s: &str) -> &str {\n  let bytes = s.as_bytes();\n\n  for (i, &item) in bytes.iter().enumerate() {\n    if item == b\' \' {\n      return &s[0..i];\n    }\n  }\n\n  &s[..]\n}\n\nfn main() {\n  let my_string = String::from("hello world");\n  let word = first_word(&my_string);\n  println!("The first word is: {}", word);\n}',
    hints: [
      'The function should accept `&str` so it can work on both `String` and string literals.',
      "Iterate through the string's bytes using `.as_bytes()` and `.iter().enumerate()`.",
      'When you find a space, return a slice from the beginning of the string to the current index.',
      'If no space is found, the whole string is one word.',
    ],
    difficulty: 'medium',
    category: 'Slices',
    lessonId: 'slice-references',
    topicId: 'memory-management',
  },

  // =================================================================
  // Lanjutan Traits & Generics
  // =================================================================
  {
    id: 'cp-036',
    title: 'Trait Default Implementation',
    description:
      'Define a trait with a default method, and then implement it for a struct, overriding the default.',
    initialCode:
      'trait Summary {\n  fn summarize(&self) -> String {\n    String::from("(Read more...)")\n  }\n}\n\nstruct Article {\n  headline: String,\n  author: String,\n}\n\n// Implement the Summary trait for Article, overriding summarize\n\n\nfn main() {\n  let article = Article {\n    headline: String::from("Rust is Awesome!"),\n    author: String::from("Jane Doe"),\n  };\n  println!("Article Summary: {}", article.summarize());\n}',
    expectedOutput: 'Article Summary: Rust is Awesome! by Jane Doe',
    solution:
      'trait Summary {\n  fn summarize(&self) -> String {\n    String::from("(Read more...)")\n  }\n}\n\nstruct Article {\n  headline: String,\n  author: String,\n}\n\nimpl Summary for Article {\n  fn summarize(&self) -> String {\n    format!("{} by {}", self.headline, self.author)\n  }\n}\n\nfn main() {\n  let article = Article {\n    headline: String::from("Rust is Awesome!"),\n    author: String::from("Jane Doe"),\n  };\n  println!("Article Summary: {}", article.summarize());\n}',
    hints: [
      'You can define a default implementation for a method directly inside the `trait` block.',
      'When implementing the trait, you can choose to either use the default or provide a custom implementation.',
      'Use `format!` macro to construct the new summary string.',
    ],
    difficulty: 'medium',
    category: 'Traits',
    lessonId: 'trait-default',
    topicId: 'traits-generics',
  },
  {
    id: 'cp-037',
    title: 'Trait Bounds',
    description:
      'Create a generic function that works on any type that implements both the `Display` and `PartialOrd` traits.',
    initialCode:
      'use std::fmt::Display;\n\n// Create a generic function `compare_and_print` with trait bounds\n\n\nfn main() {\n  compare_and_print(5, 10);\n  compare_and_print("apple", "banana");\n}',
    expectedOutput:
      'Comparing 5 and 10. The larger is 10.\nComparing apple and banana. The larger is banana.',
    solution:
      'use std::fmt::Display;\n\nfn compare_and_print<T: Display + PartialOrd>(a: T, b: T) {\n  let larger = if a > b { a } else { b };\n  println!("Comparing {} and {}. The larger is {}.", a, b, larger);\n}\n\nfn main() {\n  compare_and_print(5, 10);\n  compare_and_print("apple", "banana");\n}',
    hints: [
      'Use the `<T: Trait1 + Trait2>` syntax to specify trait bounds on a generic type `T`.',
      'The `Display` trait is needed for printing with `{}`.',
      'The `PartialOrd` trait is needed for comparison with `>`.',
    ],
    difficulty: 'hard',
    category: 'Generics',
    lessonId: 'trait-bound',
    topicId: 'traits-generics',
  },
  {
    id: 'cp-038',
    title: 'Lifetime Annotation',
    description:
      'Fix a function that returns the longest of two string slices by adding the correct lifetime annotations.',
    initialCode:
      '// Add lifetime annotations to this function\nfn longest(x: &str, y: &str) -> &str {\n  if x.len() > y.len() {\n    x\n  } else {\n    y\n  }\n}\n\nfn main() {\n  let string1 = String::from("long string is long");\n  let result;\n  {\n    let string2 = String::from("xyz");\n    result = longest(string1.as_str(), string2.as_str());\n  }\n  println!("The longest string is {}", result);\n}',
    expectedOutput: 'The longest string is long string is long',
    solution:
      'fn longest<\'a>(x: &\'a str, y: &\'a str) -> &\'a str {\n  if x.len() > y.len() {\n    x\n  } else {\n    y\n  }\n}\n\nfn main() {\n  let string1 = String::from("long string is long");\n  let result;\n  // NOTE: The original code has a dangling reference problem.\n  // This corrected version demonstrates a valid use of the `longest` function.\n  let string2 = String::from("xyz");\n  result = longest(string1.as_str(), string2.as_str());\n  println!("The longest string is {}", result);\n}',
    hints: [
      "Lifetime annotations start with an apostrophe, like `'a`.",
      "Declare the generic lifetime parameter after the function name: `fn name<'a>(...)`.",
      'Use the same lifetime parameter for all references that are related.',
      'The returned reference must be tied to the lifetime of one of the input references.',
    ],
    difficulty: 'hard',
    category: 'Ownership',
    lessonId: 'lifetime-annotation',
    topicId: 'traits-generics',
  },

  // =================================================================
  // Lanjutan Advanced Types
  // =================================================================
  {
    id: 'cp-039',
    title: 'Function Pointers',
    description: 'Create a function that accepts a function pointer to perform an operation.',
    initialCode:
      'fn add_one(x: i32) -> i32 {\n  x + 1\n}\n\n// Create a function that takes an integer and a function pointer `f`\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n  // Call the function `f` twice on the argument\n\n}\n\nfn main() {\n  let answer = do_twice(add_one, 5);\n  println!("The answer is: {}", answer);\n}',
    expectedOutput: 'The answer is: 7',
    solution:
      'fn add_one(x: i32) -> i32 {\n  x + 1\n}\n\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n  f(f(arg))\n}\n\nfn main() {\n  let answer = do_twice(add_one, 5);\n  println!("The answer is: {}", answer);\n}',
    hints: [
      'The type `fn(i32) -> i32` represents a pointer to a function that takes an `i32` and returns an `i32`.',
      'You can pass the name of a function as an argument where a function pointer is expected.',
      'Call the function pointer variable just like a regular function.',
    ],
    difficulty: 'hard',
    category: 'Functions',
    lessonId: 'advanced-functions',
    topicId: 'advanced-types',
  },

  // =================================================================
  // Lanjutan Functional Programming
  // =================================================================
  {
    id: 'cp-040',
    title: 'Iterator Adaptors',
    description:
      'Use iterator adaptors to double each number in a vector and then collect the results into a new vector.',
    initialCode:
      'fn main() {\n  let numbers = vec![1, 2, 3, 4, 5];\n\n  // Use `.iter()`, `.map()`, and `.collect()`\n  let doubled: Vec<i32> = \n\n  println!("Original: {:?}, Doubled: {:?}", numbers, doubled);\n}',
    expectedOutput: 'Original: [1, 2, 3, 4, 5], Doubled: [2, 4, 6, 8, 10]',
    solution:
      'fn main() {\n  let numbers = vec![1, 2, 3, 4, 5];\n  let doubled: Vec<i32> = numbers.iter().map(|&x| x * 2).collect();\n  println!("Original: {:?}, Doubled: {:?}", numbers, doubled);\n}',
    hints: [
      'Start the chain with `.iter()` to create an iterator.',
      'Use `.map()` with a closure to transform each element.',
      'Use `.collect()` to consume the iterator and create a new collection from its values.',
      'You may need to specify the type of the new collection, like `collect::<Vec<i32>>()`.',
    ],
    difficulty: 'medium',
    category: 'Functional',
    lessonId: 'iterator-adaptors',
    topicId: 'functional-programming',
  },

  // =================================================================
  // Lanjutan System Programming
  // =================================================================
  {
    id: 'cp-041',
    title: 'Unsafe Rust',
    description: 'Use an `unsafe` block to dereference a raw pointer.',
    initialCode:
      'fn main() {\n  let mut num = 5;\n\n  let r1 = &num as *const i32;\n  let r2 = &mut num as *mut i32;\n\n  // Use an unsafe block to dereference r1 and print its value\n  \n}',
    expectedOutput: 'r1 is: 5',
    solution:
      'fn main() {\n  let mut num = 5;\n\n  let r1 = &num as *const i32;\n  let r2 = &mut num as *mut i32;\n\n  unsafe {\n    println!("r1 is: {}", *r1);\n    // *r2 = 10; // Also possible\n  }\n}',
    hints: [
      'Operations like dereferencing raw pointers must be enclosed in an `unsafe { ... }` block.',
      'Create a raw pointer by casting a reference with `as *const T` or `as *mut T`.',
      'Dereference a raw pointer with the asterisk `*` operator.',
    ],
    difficulty: 'hard',
    category: 'System',
    lessonId: 'unsafe',
    topicId: 'system-programming',
  },
  {
    id: 'cp-042',
    title: 'Conditional Compilation',
    description:
      'Use the `#[cfg]` attribute to include code only when compiling for a specific target operating system.',
    initialCode:
      'fn main() {\n  // Use #[cfg] to print a message specific to the OS\n  // This example will only show output on one of the platforms.\n\n\n  println!("This prints on all systems.");\n}',
    expectedOutput: 'Running on Windows!\nThis prints on all systems.',
    solution:
      'fn main() {\n  #[cfg(target_os = "windows")]\n  {\n    println!("Running on Windows!");\n  }\n\n  #[cfg(target_os = "linux")]\n  {\n    println!("Running on Linux!");\n  }\n\n  println!("This prints on all systems.");\n}',
    hints: [
      'The attribute for conditional compilation is `#[cfg(...)]`.',
      'You can check the target OS with `target_os = "os_name"`.',
      'This code will produce different output depending on the system you compile it on.',
    ],
    difficulty: 'medium',
    category: 'Attributes',
    lessonId: 'attributes',
    topicId: 'system-programming',
  },

  // =================================================================
  // Lanjutan Advanced Concepts
  // =================================================================
  {
    id: 'cp-043',
    title: 'Using Box<T>',
    description: 'Use a `Box<T>` to store an integer on the heap.',
    initialCode:
      'fn main() {\n  // Create a Box that stores the value 10 on the heap\n  \n\n  // Dereference the box to print its value\n\n}',
    expectedOutput: 'The value in the box is: 10',
    solution:
      'fn main() {\n  let b = Box::new(10);\n  println!("The value in the box is: {}", *b);\n}',
    hints: [
      'Use `Box::new(value)` to allocate memory on the heap and place the value inside.',
      '`Box<T>` is a smart pointer.',
      'Use the `*` dereference operator to access the value inside the `Box`.',
    ],
    difficulty: 'medium',
    category: 'Smart Pointers',
    lessonId: 'smart-pointers',
    topicId: 'advanced-concepts',
  },
  {
    id: 'cp-044',
    title: 'Spawning a Thread',
    description: 'Use `thread::spawn` to run code in a new thread.',
    initialCode:
      'use std::thread;\nuse std::time::Duration;\n\nfn main() {\n  // Spawn a new thread that prints a message\n  \n\n  // Keep the main thread alive long enough for the new thread to finish\n  thread::sleep(Duration::from_millis(1));\n}',
    expectedOutput: 'Hello from the new thread!',
    solution:
      'use std::thread;\nuse std::time::Duration;\n\nfn main() {\n  let handle = thread::spawn(|| {\n    println!("Hello from the new thread!");\n  });\n\n  // Wait for the spawned thread to finish\n  handle.join().unwrap();\n}',
    hints: [
      '`thread::spawn` takes a closure as an argument.',
      'The main thread will exit without waiting for other threads unless you explicitly wait.',
      'Call `.join()` on the handle returned by `thread::spawn` to wait for the thread to complete.',
    ],
    difficulty: 'hard',
    category: 'Concurrency',
    lessonId: 'concurrency',
    topicId: 'advanced-concepts',
  },

  // =================================================================
  // Lanjutan Error Handling
  // =================================================================
  {
    id: 'cp-045',
    title: 'Unrecoverable Errors with panic!',
    description: 'Use `panic!` to stop execution when an invalid condition is met.',
    initialCode:
      'fn check_age(age: i32) {\n  if age < 0 {\n    // Panic with a message if age is negative\n\n  } else {\n    println!("Age is valid: {}", age);\n  }\n}\n\nfn main() {\n  // This call should succeed\n  check_age(25);\n  // This call should panic\n  check_age(-5);\n}',
    expectedOutput: 'Age is valid: 25',
    solution:
      'fn check_age(age: i32) {\n  if age < 0 {\n    panic!("Age cannot be negative!");\n  } else {\n    println!("Age is valid: {}", age);\n  }\n}\n\nfn main() {\n  check_age(25);\n}',
    hints: [
      'The `panic!` macro will immediately terminate the current thread.',
      'Provide a descriptive error message as an argument to `panic!`.',
      'Execution stops at the panic, so any code after it will not run.',
      'For this practice, only the non-panicking output is expected.',
    ],
    difficulty: 'easy',
    category: 'Error Handling',
    lessonId: 'panic',
    topicId: 'error-handling',
  },
];
