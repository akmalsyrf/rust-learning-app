import { Question } from '../types';

export const questions: Question[] = [
  // =================================================================
  // Topic: fundamentals
  // =================================================================

  // Lesson: hello-world
  {
    id: 'hello-q1',
    type: 'mcq',
    prompt: 'What is the macro used to print text to the console in Rust?',
    choices: ['print()', 'console.log()', 'println!', 'echo'],
    correctIndex: 2,
    explanation:
      '`println!` is a macro that prints a string to the console, followed by a new line.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q2',
    type: 'predict_output',
    prompt: 'What is the output of this Rust program?',
    code: 'fn main() {\n    println!("Rust is cool!");\n}',
    expectedStdout: 'Rust is cool!',
    explanation:
      'The `println!` macro prints the exact string provided within the parentheses and quotation marks.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q3',
    type: 'tf',
    prompt: 'Every Rust program must have a `main` function.',
    answer: true,
    explanation: 'The `main` function is the entry point of every executable Rust program.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q4',
    type: 'mcq',
    prompt: 'Which command is used to compile a Rust file named `main.rs`?',
    choices: ['rust compile main.rs', 'cargo build', 'rustc main.rs', 'gcc main.rs'],
    correctIndex: 2,
    explanation: '`rustc` is the Rust compiler. You use it to compile `.rs` source files directly.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'hello-q5',
    type: 'fib',
    prompt: 'The file extension for Rust source code files is _____.',
    acceptableAnswers: ['.rs', 'rs'],
    explanation: 'Rust source code files always end with the `.rs` extension.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: comments
  {
    id: 'comment-q1',
    type: 'mcq',
    prompt: 'How do you start a single-line comment in Rust?',
    choices: ['#', '//', '/*', '--'],
    correctIndex: 1,
    explanation: 'Single-line comments start with `//` and continue to the end of the line.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q2',
    type: 'tf',
    prompt: 'Block comments in Rust can be nested.',
    answer: true,
    explanation:
      'Rust supports nested block comments, like `/* outer /* inner */ */`, which can be useful for commenting out code blocks.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q3',
    type: 'mcq',
    prompt:
      'Which type of comment is typically used for documentation that can be processed by `cargo doc`?',
    choices: ['//', '/*', '///', '/**'],
    correctIndex: 2,
    explanation:
      'Doc comments, starting with `///` for items or `//!` for containing modules, are used to generate library documentation.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q4',
    type: 'code_fix',
    prompt: 'Make the second line of code a comment so the program prints "5".',
    code: 'fn main() {\n    let x = 5;\n    let x = 10; // This should be a comment\n    println!("{}", x);\n}',
    choices: [
      'fn main() {\n    let x = 5;\n    // let x = 10;\n    println!("{}", x);\n}',
      'fn main() {\n    let x = 5;\n    /* let x = 10; */\n    println!("{}", x);\n}',
      'Both of the above are correct',
      'fn main() {\n    let x = 5;\n    # let x = 10;\n    println!("{}", x);\n}',
    ],
    correctIndex: 2,
    explanation: 'Both `//` and `/* ... */` can be used to comment out a line of code.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'comment-q5',
    type: 'tf',
    prompt: 'The main purpose of comments is to make the compiler ignore certain lines of code.',
    answer: false,
    explanation:
      'While comments do make the compiler ignore code, their main purpose is to explain the code to human readers.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: variables
  {
    id: 'vars-q1',
    type: 'mcq',
    prompt: 'Which keyword is used to declare a variable in Rust?',
    choices: ['var', 'let', 'const', 'mut'],
    correctIndex: 1,
    explanation: 'The `let` keyword is used to introduce a new variable binding.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vars-q2',
    type: 'tf',
    prompt: 'By default, variables in Rust are immutable.',
    answer: true,
    explanation:
      'This is a core principle of Rust. To make a variable mutable, you must use the `mut` keyword.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vars-q3',
    type: 'code_fix',
    prompt: 'Fix the code to allow the variable `x` to be reassigned.',
    code: 'let x = 5;\nx = 6;',
    choices: [
      'let mut x = 5;\nx = 6;',
      'let x = 5;\nlet x = 6;',
      'const x = 5;\nx = 6;',
      'var x = 5;\nx = 6;',
    ],
    correctIndex: 0,
    explanation: 'The `mut` keyword must be added after `let` to make a variable mutable.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vars-q4',
    type: 'predict_output',
    prompt: 'What is the output of this code, which demonstrates shadowing?',
    code: 'fn main() {\n    let x = 5;\n    let x = x + 1;\n    {\n        let x = x * 2;\n        println!("Inner x: {}", x);\n    }\n    println!("Outer x: {}", x);\n}',
    expectedStdout: 'Inner x: 12\nOuter x: 6',
    explanation:
      'Shadowing allows re-declaring a variable. The inner scope has its own `x` (12), which does not affect the outer `x` (6).',
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'vars-q5',
    type: 'mcq',
    prompt: 'What is the primary difference between a variable and a constant (`const`)?',
    choices: [
      'Constants must be declared in all caps.',
      'Constants are always immutable, while `let` variables can be mutable.',
      'Constants must have their type annotated and can only be set to a constant expression.',
      'All of the above.',
    ],
    correctIndex: 3,
    explanation:
      'All three points are true. Constants have stricter rules: they require type annotations, must be in uppercase by convention, and are evaluated at compile-time.',
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: scalar-types
  {
    id: 'scalar-q1',
    type: 'mcq',
    prompt: 'Which of these is NOT a scalar type in Rust?',
    choices: ['Integer', 'Floating-point', 'String', 'Boolean'],
    correctIndex: 2,
    explanation:
      '`String` is a compound type, not a scalar type. The scalar types are integers, floats, booleans, and characters.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q2',
    type: 'tf',
    prompt: 'The `char` type in Rust can represent emojis.',
    answer: true,
    explanation:
      "Rust's `char` type is a 4-byte Unicode Scalar Value, which includes letters, symbols, and emojis.",
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q3',
    type: 'predict_output',
    prompt: 'What is the output of this integer operation?',
    code: 'fn main() {\n    let a: i8 = 10;\n    let b: i8 = 20;\n    let c = a + b;\n    println!("{}", c);\n}',
    expectedStdout: '30',
    explanation: 'The program performs a simple addition of two 8-bit signed integers.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q4',
    type: 'fib',
    prompt: 'To declare a 32-bit unsigned integer, you would use the type _____.',
    acceptableAnswers: ['u32'],
    explanation: 'The `u` stands for unsigned, and `32` represents the number of bits.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scalar-q5',
    type: 'mcq',
    prompt:
      'What happens if you try to assign a value too large for its integer type in a debug build?',
    choices: [
      'The value wraps around',
      'The program panics',
      'It results in a compile-time error',
      'The value is truncated',
    ],
    correctIndex: 1,
    explanation:
      "In debug builds, Rust checks for integer overflow. If it occurs, the program will `panic`. In release builds, it performs two's complement wrapping.",
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: string-literals
  {
    id: 'str-basic-q1',
    type: 'mcq',
    prompt: 'What is the type of a string literal like `"hello"` in Rust?',
    choices: ['String', 'str', '&str', 'char[]'],
    correctIndex: 2,
    explanation:
      'String literals are string slices (`&str`), which are immutable references to a sequence of UTF-8 bytes stored in the binary.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'str-basic-q2',
    type: 'tf',
    prompt: '`&str` types are mutable and can be modified after creation.',
    answer: false,
    explanation:
      'String slices (`&str`) are immutable. To have a modifiable string, you need to use the `String` type.',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'str-basic-q3',
    type: 'predict_output',
    prompt: 'What will this program print?',
    code: 'fn main() {\n    let my_str = "Hello, Rust!";\n    println!("Length: {}", my_str.len());\n}',
    expectedStdout: 'Length: 12',
    explanation:
      'The `.len()` method on a string slice returns the number of bytes, which is 12 for the ASCII string "Hello, Rust!".',
    topicId: 'fundamentals',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'str-basic-q4',
    type: 'mcq',
    prompt: 'Which is true about string literals in Rust?',
    choices: [
      'They are stored on the stack.',
      'They are growable.',
      'They are hardcoded directly into the final executable.',
      'They must be explicitly deallocated.',
    ],
    correctIndex: 2,
    explanation:
      "String literals are embedded in the program's binary, making them fast and efficient as they are loaded into read-only memory.",
    topicId: 'fundamentals',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'str-basic-q5',
    type: 'tf',
    prompt: 'You can combine two string literals using the `+` operator.',
    answer: false,
    explanation:
      'The `+` operator is not defined for `&str`. It is used to concatenate a `String` with an `&str`. For literals, the `concat!` macro is a better choice.',
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
    prompt: 'Which syntax is correct for declaring a constant?',
    choices: [
      'let MAX_POINTS = 100_000;',
      'const MAX_POINTS: u32 = 100_000;',
      'const MAX_POINTS = 100_000;',
      'final MAX_POINTS: u32 = 100_000;',
    ],
    correctIndex: 1,
    explanation:
      'Constants require the `const` keyword, a type annotation (e.g., `u32`), and are conventionally named in SCREAMING_SNAKE_CASE.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'const-q2',
    type: 'tf',
    prompt: 'The value of a constant can be determined by a function call at runtime.',
    answer: false,
    explanation:
      'Constants must be set to a value that can be computed at compile time. They cannot be the result of a runtime function call.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'const-q3',
    type: 'mcq',
    prompt: 'What is a key difference between `const` and an immutable `let` variable?',
    choices: [
      'There is no difference.',
      '`const` can be declared in any scope, including the global scope.',
      '`let` variables are always stored on the stack, `const` on the heap.',
      '`const` can be made mutable with `mut`.',
    ],
    correctIndex: 1,
    explanation:
      'Constants can be declared in any scope, including globally, making them useful for values shared across the program.',
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'const-q4',
    type: 'fib',
    prompt: 'By convention, constant variable names in Rust are written in _________ case.',
    acceptableAnswers: ['UPPER', 'SCREAMING_SNAKE', 'SCREAMING SNAKE'],
    explanation:
      'The convention is to use all uppercase letters with underscores between words, e.g., `MAX_SPEED`.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'const-q5',
    type: 'tf',
    prompt: 'A new memory address is allocated every time a `const` is used.',
    answer: false,
    explanation:
      'Constants are not stored in a specific memory location. The compiler effectively inlines their values wherever they are used.',
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: operators
  {
    id: 'op-q1',
    type: 'mcq',
    prompt: 'What is the remainder/modulo operator in Rust?',
    choices: ['/', '%', 'mod', 'rem'],
    correctIndex: 1,
    explanation:
      'The `%` symbol is used as the remainder operator in Rust, just like in many other C-like languages.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'op-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let x = 2 * (3 + 4);\n    println!("{}", x);\n}',
    expectedStdout: '14',
    explanation:
      'The expression inside the parentheses `(3 + 4)` is evaluated first, resulting in 7. Then, `2 * 7` equals 14.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'op-q3',
    type: 'tf',
    prompt: 'Rust supports operator overloading.',
    answer: true,
    explanation:
      'Yes, you can implement traits like `std::ops::Add`, `std::ops::Sub`, etc., on your own custom types to define how operators work with them.',
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'op-q4',
    type: 'mcq',
    prompt: 'Which of these is a bitwise operator?',
    choices: ['&&', '||', '^', '=='],
    correctIndex: 2,
    explanation: '`^` is the bitwise XOR operator. `&&` and `||` are logical operators.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'op-q5',
    type: 'predict_output',
    prompt: 'What will be printed to the console?',
    code: 'fn main() {\n    let is_active = true;\n    println!("{}", !is_active);\n}',
    expectedStdout: 'false',
    explanation:
      'The `!` operator is the logical NOT operator, which inverts the boolean value from `true` to `false`.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: type-alias-casting
  {
    id: 'alias-q1',
    type: 'mcq',
    prompt: 'Which keyword is used to create a type alias in Rust?',
    choices: ['type', 'alias', 'typedef', 'using'],
    correctIndex: 0,
    explanation: 'The `type` keyword is used to give a new name to an existing type.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cast-q1',
    type: 'mcq',
    prompt: 'How do you explicitly cast a value from `f64` to `i32`?',
    choices: ['(i32)my_float', 'i32(my_float)', 'my_float as i32', 'cast<i32>(my_float)'],
    correctIndex: 2,
    explanation: 'The `as` keyword is used for explicit type casting in Rust.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cast-q2',
    type: 'predict_output',
    prompt: 'What will this casting operation print?',
    code: 'fn main() {\n    let decimal = 65.4321_f32;\n    let integer = decimal as u8;\n    let character = integer as char;\n    println!("{}", character);\n}',
    expectedStdout: 'A',
    explanation:
      "The float `65.4321` is truncated to the integer `65`. The `u8` value `65` corresponds to the character 'A' in ASCII.",
    topicId: 'data-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'alias-q2',
    type: 'code_fix',
    prompt: 'Correct the syntax for this type alias.',
    code: 'alias Kilometers = i32;',
    choices: [
      'type Kilometers = i32;',
      'type Kilometers: i32;',
      'let Kilometers = i32;',
      'typedef Kilometers = i32;',
    ],
    correctIndex: 0,
    explanation: 'The correct syntax is `type AliasName = OriginalType;`.',
    topicId: 'data-types',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cast-q3',
    type: 'tf',
    prompt: 'Casting in Rust is always safe and can never fail.',
    answer: false,
    explanation:
      'Casting can be unsafe. For example, casting a large integer to a smaller type can result in truncation and loss of data.',
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
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let number = 6;\n    if number % 4 == 0 {\n        println!("divisible by 4");\n    } else if number % 3 == 0 {\n        println!("divisible by 3");\n    } else {\n        println!("not divisible by 4 or 3");\n    }\n}',
    expectedStdout: 'divisible by 3',
    explanation:
      'The first condition `6 % 4 == 0` is false. The second condition `6 % 3 == 0` is true, so its block is executed.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cond-q2',
    type: 'mcq',
    prompt: 'Why is `if` considered an expression in Rust?',
    choices: [
      'Because it can be used in a `for` loop.',
      'Because it can return a value.',
      "Because it doesn't need parentheses.",
      'Because it must end with a semicolon.',
    ],
    correctIndex: 1,
    explanation:
      '`if` is an expression, which means it evaluates to a value. This allows for concise code like `let x = if condition { 5 } else { 6 };`.',
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'cond-q3',
    type: 'tf',
    prompt: 'The condition in an `if` statement must evaluate to a `bool`.',
    answer: true,
    explanation:
      'Unlike some languages, Rust does not automatically convert non-boolean types to a boolean. The condition must explicitly be `true` or `false`.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cond-q4',
    type: 'predict_output',
    prompt: 'What will be the value of `x`?',
    code: 'fn main() {\n    let condition = true;\n    let x = if condition { 10 } else { 20 };\n    println!("{}", x);\n}',
    expectedStdout: '10',
    explanation:
      'Since `condition` is true, the `if` expression evaluates to the value of its `then` block, which is 10.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'cond-q5',
    type: 'code_fix',
    prompt: 'This code has an error because the `if` and `else` arms have different types. Fix it.',
    code: 'let number = 5;\nlet result = if number > 0 { "positive" } else { 0 };',
    choices: [
      'let result = if number > 0 { "positive".to_string() } else { "zero".to_string() };',
      'let result = if number > 0 { 1 } else { 0 };',
      'let result = if number > 0 { true } else { false };',
      'All of the above could be valid fixes depending on intent.',
    ],
    correctIndex: 3,
    explanation:
      'All arms of an `if-else` expression must return the same type. Any of the choices would make the types consistent.',
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: while-loops
  {
    id: 'while-q1',
    type: 'predict_output',
    prompt: 'What is the final value of `number` that gets printed?',
    code: 'fn main() {\n    let mut number = 3;\n    while number != 0 {\n        println!("{}!", number);\n        number -= 1;\n    }\n    println!("Final number: {}", number);\n}',
    expectedStdout: '3!\n2!\n1!\nFinal number: 0',
    explanation:
      'The loop continues as long as `number` is not 0. It prints the number, decrements it, and stops when it becomes 0.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'while-q2',
    type: 'tf',
    prompt:
      'A `while` loop is generally more efficient than a `for` loop for iterating over a collection.',
    answer: false,
    explanation:
      'A `for` loop is often safer and more idiomatic for iterating over collections in Rust, as it handles bounds checks and iteration logic automatically, which can lead to better optimizations.',
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'while-q3',
    type: 'mcq',
    prompt: 'What happens if the condition of a `while` loop never becomes false?',
    choices: [
      'A compile-time error occurs',
      'The loop runs forever (an infinite loop)',
      'The loop runs once and then stops',
      'The program panics',
    ],
    correctIndex: 1,
    explanation:
      'If the condition remains true indefinitely, the loop will continue executing its body without end, which is known as an infinite loop.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'while-q4',
    type: 'fib',
    prompt:
      "A `while` loop is a good choice when you don't know beforehand how many times the loop should _____.",
    acceptableAnswers: ['run', 'execute', 'iterate'],
    explanation:
      '`while` is ideal for situations where the number of iterations depends on a condition that changes within the loop.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'while-q5',
    type: 'code_fix',
    prompt:
      "The following code is intended to print numbers from 1 to 5, but it's an infinite loop. What is the fix?",
    code: 'let mut i = 1;\nwhile i <= 5 {\n    println!("{}", i);\n}',
    choices: [
      'Add `i += 1;` inside the loop.',
      'Change the condition to `while i < 5`.',
      'Change `let mut i` to `let i`.',
      'Use a `for` loop instead.',
    ],
    correctIndex: 0,
    explanation:
      'The loop variable `i` was not being incremented, causing the condition `i <= 5` to always be true. Adding `i += 1;` ensures the loop terminates.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: loop-break-continue
  {
    id: 'loop-q1',
    type: 'mcq',
    prompt: 'Which keyword creates a loop that runs forever until explicitly stopped?',
    choices: ['while true', 'for', 'loop', 'repeat'],
    correctIndex: 2,
    explanation:
      'The `loop` keyword creates an infinite loop, which is often used with `break` to provide a value or stop the iteration on a certain condition.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'loop-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n    println!("The result is {}", result);\n}',
    expectedStdout: 'The result is 20',
    explanation:
      'The `loop` runs until `counter` is 10. The `break` statement then stops the loop and returns the value `counter * 2` (which is 20).',
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'loop-q3',
    type: 'tf',
    prompt: 'The `continue` keyword exits the loop entirely.',
    answer: false,
    explanation:
      '`continue` skips the rest of the current iteration and starts the next one. `break` is used to exit the loop entirely.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'loop-q4',
    type: 'predict_output',
    prompt: 'What numbers will be printed by this loop?',
    code: 'fn main() {\n    for number in 0..=5 {\n        if number % 2 == 0 {\n            continue;\n        }\n        println!("{}", number);\n    }\n}',
    expectedStdout: '1\n3\n5',
    explanation:
      'The `continue` keyword is executed for even numbers (0, 2, 4), skipping the `println!`. Only the odd numbers get printed.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'loop-q5',
    type: 'mcq',
    prompt: "What are loop labels (`'label:`) used for?",
    choices: [
      'To name a loop for documentation.',
      'To specify which loop to `break` or `continue` from in nested loops.',
      'To mark a loop as private.',
      'To define the return type of a loop.',
    ],
    correctIndex: 1,
    explanation:
      'Loop labels are used to disambiguate `break` and `continue` statements when dealing with nested loops.',
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: for-loops
  {
    id: 'for-q1',
    type: 'predict_output',
    prompt: 'What will this `for` loop print?',
    code: 'fn main() {\n    for number in 1..4 {\n        println!("{}!", number);\n    }\n}',
    expectedStdout: '1!\n2!\n3!',
    explanation:
      'The range `1..4` is exclusive of the final number, so it generates numbers 1, 2, and 3.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'for-q2',
    type: 'mcq',
    prompt: 'How would you write a `for` loop that includes the final number in the range?',
    choices: ['for i in 1..4', 'for i in 1...4', 'for i in 1..=4', 'for i in range(1, 5)'],
    correctIndex: 2,
    explanation: 'The `..=` syntax creates a range that is inclusive of the end value.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'for-q3',
    type: 'code_fix',
    prompt: 'Fix this code to correctly iterate over the elements of the array.',
    code: 'fn main() {\n    let a = [10, 20, 30, 40, 50];\n    for i in 0..a.len() {\n        println!("the value is: {}", a[i]);\n    }\n}',
    choices: [
      'This code is already correct.',
      'Change `for i in 0..a.len()` to `for element in a`.',
      'Change `for i in 0..a.len()` to `for element in a.iter()`.',
      'Both B and C are more idiomatic ways to write this loop.',
    ],
    correctIndex: 3,
    explanation:
      'While the original code works, directly iterating over the collection with `for element in a.iter()` or `for element in a` is safer and more idiomatic in Rust.',
    topicId: 'control-structures',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'for-q4',
    type: 'predict_output',
    prompt: 'What is the output of this loop using `.rev()`?',
    code: 'fn main() {\n    for number in (1..4).rev() {\n        println!("{}!", number);\n    }\n}',
    expectedStdout: '3!\n2!\n1!',
    explanation: 'The `.rev()` method reverses the iterator, so the loop counts down from 3 to 1.',
    topicId: 'control-structures',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'for-q5',
    type: 'tf',
    prompt:
      "The variable declared in the `for` loop (e.g., `number` in `for number in ...`) consumes ownership of the collection's items by default.",
    answer: true,
    explanation:
      '`for item in collection` will move the items out of the collection. To borrow instead, use `for item in &collection` or `for item in collection.iter()`.',
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
    prompt: 'Which statement about Rust arrays is true?',
    choices: [
      'Arrays can grow or shrink in size at runtime.',
      'Arrays must have a fixed size that is known at compile time.',
      'Arrays can store elements of different types.',
      'Arrays are stored on the heap.',
    ],
    correctIndex: 1,
    explanation:
      'Arrays have a fixed length, and this is part of their type signature (e.g., `[i32; 5]`). They are allocated on the stack.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q2',
    type: 'tf',
    prompt: 'Accessing an array index that is out of bounds will cause a panic in Rust.',
    answer: true,
    explanation:
      "Rust performs bounds checking. If you try to access an index that doesn't exist, the program will panic to prevent memory safety issues.",
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q3',
    type: 'predict_output',
    prompt: 'What will this program print?',
    code: 'fn main() {\n    let a: [i32; 5] = [1, 2, 3, 4, 5];\n    println!("The third element is {}", a[2]);\n}',
    expectedStdout: 'The third element is 3',
    explanation: 'Array indexing is zero-based, so index `2` refers to the third element.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q4',
    type: 'mcq',
    prompt: 'How do you create an array of 100 elements, where each element is the number 5?',
    choices: [
      'let a = [5; 100];',
      'let a = [100; 5];',
      'let a = Array::new(100, 5);',
      'let a: [i32; 100] = 5;',
    ],
    correctIndex: 0,
    explanation:
      'The syntax `[initial_value; size]` is a convenient way to initialize an array where all elements are the same.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'arr-q5',
    type: 'fib',
    prompt: 'Unlike vectors, arrays are allocated on the _____.',
    acceptableAnswers: ['stack'],
    explanation:
      'Because their size is known at compile time, arrays can be allocated directly on the stack, which is faster than heap allocation.',
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: slices
  {
    id: 'slice-q1',
    type: 'mcq',
    prompt: 'What is a slice in Rust?',
    choices: [
      'A copy of a part of an array.',
      'A reference to a contiguous sequence of elements in a collection.',
      'A mutable, growable list.',
      'A fixed-size collection of different types.',
    ],
    correctIndex: 1,
    explanation:
      'A slice allows you to borrow a section of a collection without taking ownership. It does not have ownership of its data.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'slice-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let a = [10, 20, 30, 40, 50];\n    let slice = &a[1..=3];\n    println!("{:?}", slice);\n}',
    expectedStdout: '[20, 30, 40]',
    explanation:
      'The range `1..=3` is inclusive, so it includes the elements at indices 1, 2, and 3.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'slice-q3',
    type: 'tf',
    prompt: 'A slice stores its data directly.',
    answer: false,
    explanation:
      'A slice is a "view" or a "borrow" of data owned by something else, like an Array or a Vector. It consists of a pointer and a length.',
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-q4',
    type: 'mcq',
    prompt: 'What is the type of a string slice?',
    choices: ['String', 'str', '&str', 'slice<char>'],
    correctIndex: 2,
    explanation:
      '`&str` is the type for a string slice, which is a slice of `u8` bytes that are guaranteed to be valid UTF-8.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'slice-q5',
    type: 'code_fix',
    prompt: 'Fix the function signature to correctly accept a slice of integers.',
    code: 'fn sum_slice(slice: [i32]) -> i32 { /* ... */ }',
    choices: [
      'fn sum_slice(slice: &[i32]) -> i32 { /* ... */ }',
      'fn sum_slice(slice: Vec<i32>) -> i32 { /* ... */ }',
      'fn sum_slice(slice: &Vec<i32>) -> i32 { /* ... */ }',
      'fn sum_slice(slice: i32[]) -> i32 { /* ... */ }',
    ],
    correctIndex: 0,
    explanation:
      'To pass a slice to a function, you need to use a reference, `&[T]`. This is more flexible as it can accept references to arrays, vectors, or parts of them.',
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: tuples
  {
    id: 'tuple-q1',
    type: 'mcq',
    prompt: 'Which statement about tuples is correct?',
    choices: [
      'All elements in a tuple must have the same type.',
      'Tuples have a fixed length and can hold elements of different types.',
      'Tuples are accessed using square bracket indexing like `my_tuple[0]`.',
      'Tuples are growable.',
    ],
    correctIndex: 1,
    explanation:
      'Tuples are a simple way to group together a variety of values into one compound type. Their size is fixed once declared.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let tup = (500, 6.4, "hello");\n    let (x, y, z) = tup;\n    println!("The value of y is: {}", y);\n}',
    expectedStdout: 'The value of y is: 6.4',
    explanation:
      'This is an example of "destructuring," where the tuple\'s values are broken apart into three separate variables.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-q3',
    type: 'mcq',
    prompt: 'How do you access the second element of a tuple named `my_tup`?',
    choices: ['my_tup[1]', 'my_tup.get(1)', 'my_tup.1', 'my_tup(1)'],
    correctIndex: 2,
    explanation:
      'Tuple elements are accessed by using a period (`.`) followed by the zero-based index of the value.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-q4',
    type: 'fib',
    prompt: 'A tuple without any values, `()`, is called the _____ type.',
    acceptableAnswers: ['unit', 'unit type'],
    explanation:
      "The unit type `()` has only one value, also `()`, and is implicitly returned by functions that don't return any other value.",
    topicId: 'collections',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'tuple-q5',
    type: 'tf',
    prompt: 'Functions can return tuples to effectively return multiple values.',
    answer: true,
    explanation:
      'Returning a tuple is the idiomatic way for a function to return multiple values in Rust.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: vectors
  {
    id: 'vec-q1',
    type: 'mcq',
    prompt: 'What is a key difference between a vector and an array?',
    choices: [
      'Vectors are stored on the stack, while arrays are on the heap.',
      'Vectors can grow or shrink in size, while arrays have a fixed size.',
      'Vector elements must be of the same type, while array elements can differ.',
      'Vectors are accessed with `.get()`, arrays with `[]`.',
    ],
    correctIndex: 1,
    explanation:
      "Vectors are growable list types stored on the heap, making them flexible when you don't know the size of the list at compile time.",
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q2',
    type: 'predict_output',
    prompt: 'What will be printed to the console?',
    code: 'fn main() {\n    let mut v = Vec::new();\n    v.push(5);\n    v.push(6);\n    v.push(7);\n    println!("{:?}", v);\n}',
    expectedStdout: '[5, 6, 7]',
    explanation:
      'The code creates a new vector and adds three elements to it using the `.push()` method.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q3',
    type: 'tf',
    prompt:
      'Accessing a vector element with `v[index]` can cause a panic if the index is out of bounds.',
    answer: true,
    explanation:
      'Using square brackets `[]` for access will panic on an invalid index. Using `v.get(index)` is a safer alternative that returns an `Option`.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q4',
    type: 'mcq',
    prompt: 'What does the `vec!` macro do?',
    choices: [
      'It clears a vector, removing all elements.',
      'It returns the capacity of a vector.',
      'It provides a convenient way to create a `Vec<T>` with initial values.',
      'It converts an array to a vector.',
    ],
    correctIndex: 2,
    explanation:
      'The `vec!` macro is the most common way to create a vector with known elements, for example: `let v = vec![1, 2, 3];`.',
    topicId: 'collections',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'vec-q5',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let mut v = vec![100, 32, 57];\n    for i in &mut v {\n        *i += 50;\n    }\n    println!("{:?}", v);\n}',
    expectedStdout: '[150, 82, 107]',
    explanation:
      'The loop iterates over mutable references to each element in the vector. The `*` dereferences `i` so we can modify the value it refers to.',
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
    prompt: 'How do you specify the return type of a function in Rust?',
    choices: [': i32', '-> i32', '=> i32', 'returns i32'],
    correctIndex: 1,
    explanation:
      "The return type is specified after an arrow `->` following the function's parameter list.",
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'func-q2',
    type: 'code_fix',
    prompt: 'Fix this function so it correctly returns the sum.',
    code: 'fn plus_one(x: i32) -> i32 {\n    x + 1;\n}',
    choices: [
      'fn plus_one(x: i32) -> i32 {\n    return x + 1;\n}',
      'fn plus_one(x: i32) -> i32 {\n    x + 1\n}',
      'Both A and B are correct.',
      'fn plus_one(x: i32) -> i32 {\n    let result = x + 1;\n}',
    ],
    correctIndex: 2,
    explanation:
      'In Rust, the last expression in a function is automatically returned. A semicolon turns an expression into a statement, which does not return a value. Both using `return` explicitly or removing the semicolon from the last expression are valid fixes.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'func-q3',
    type: 'tf',
    prompt: 'In a function signature, you must declare the type of each parameter.',
    answer: true,
    explanation:
      'Rust is a statically typed language and requires explicit type annotations for all function parameters.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'func-q4',
    type: 'mcq',
    prompt: 'What is the difference between a statement and an expression?',
    choices: [
      'There is no difference.',
      'Statements perform actions and do not return a value, while expressions evaluate to a value.',
      'Expressions must end with a semicolon.',
      'Statements can only be used inside functions.',
    ],
    correctIndex: 1,
    explanation:
      '`let x = 6;` is a statement. `5 + 6` is an expression because it evaluates to the value 11.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'func-q5',
    type: 'predict_output',
    prompt: 'What will be printed?',
    code: 'fn main() {\n    let y = {\n        let x = 3;\n        x + 1\n    };\n    println!("The value of y is: {}", y);\n}',
    expectedStdout: 'The value of y is: 4',
    explanation:
      'The curly braces `{...}` create a new scope which is also an expression. The last line of the block `x + 1` is the value that the block evaluates to, which is then assigned to `y`.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: module-path, package-crate, modules, etc. (Combined for clarity)
  {
    id: 'mod-q1',
    type: 'mcq',
    prompt: 'What is a "crate" in Rust?',
    choices: [
      'A data structure for storing items.',
      'A keyword for creating loops.',
      'The smallest unit of compilation; a library or binary.',
      'A file containing package metadata.',
    ],
    correctIndex: 2,
    explanation:
      'A crate is a binary or library. The crate root is a source file that the Rust compiler starts from and makes up the root module of the crate.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'mod-q2',
    type: 'tf',
    prompt: 'By default, all items (functions, structs, etc.) in a module are private.',
    answer: true,
    explanation:
      "Rust's privacy default is private. To expose an item outside a module, you must use the `pub` keyword.",
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'path-q1',
    type: 'mcq',
    prompt: 'How do you call a public function `my_func` inside a module `my_mod`?',
    choices: ['my_mod.my_func()', 'my_mod->my_func()', 'my_mod::my_func()', 'my_mod/my_func()'],
    correctIndex: 2,
    explanation:
      'The double colon `::` is the path separator used to navigate the module hierarchy.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'path-q2',
    type: 'mcq',
    prompt: 'Inside a child module, which keyword refers to the parent module?',
    choices: ['parent', 'super', 'crate', 'self'],
    correctIndex: 1,
    explanation:
      "`super` is used to access items from the parent module's scope, similar to `..` in a filesystem path.",
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'pkg-q1',
    type: 'mcq',
    prompt: 'What is a "package" in Rust?',
    choices: [
      'A single Rust file.',
      'One or more crates that provide a set of functionality.',
      'A special type of comment.',
      'A tool for formatting Rust code.',
    ],
    correctIndex: 1,
    explanation:
      'A package contains a `Cargo.toml` file and holds one or more crates. A package must contain at least one crate (either a library or a binary).',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  // Lanjutan dari file questions.ts

  // =================================================================
  // Topic: structs-enums
  // =================================================================

  // Lesson: structs
  {
    id: 'struct-q1',
    type: 'mcq',
    prompt: 'How do you define a basic struct in Rust?',
    choices: [
      'struct User { name: String, age: u32 }',
      'class User { name: String, age: u32 }',
      'type User = { name: String, age: u32 }',
      'let User = struct { name: String, age: u32 }',
    ],
    correctIndex: 0,
    explanation:
      'Structs are defined using the `struct` keyword, followed by the name and a set of key-value pairs for its fields.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code that instantiates and accesses a struct?',
    code: 'struct User { username: String, active: bool }\nfn main() {\n    let user1 = User { username: String::from("rustacean"), active: true };\n    println!("{}", user1.username);\n}',
    expectedStdout: 'rustacean',
    explanation: 'You access the fields of a struct instance using dot notation.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-q3',
    type: 'tf',
    prompt: 'Once a struct instance is created as immutable, you cannot change any of its fields.',
    answer: true,
    explanation:
      'If the instance is immutable (declared with `let`), none of its fields can be changed. The entire instance must be marked as `mut` to allow modification of any field.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-q4',
    type: 'mcq',
    prompt: 'What is field init shorthand syntax?',
    choices: [
      'A way to automatically generate fields.',
      'A way to initialize a struct when variable names match field names.',
      'A way to make all fields public.',
      'A macro for struct initialization.',
    ],
    correctIndex: 1,
    explanation:
      'If a function parameter or local variable has the same name as a struct field, you can use the name directly without `field: variable`, which is called field init shorthand.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-q5',
    type: 'code_fix',
    prompt:
      'This code fails because `user1` is immutable. How do you fix it to allow changing the username?',
    code: 'struct User { username: String, active: bool }\nfn main() {\n    let user1 = User { username: String::from("user1"), active: true };\n    user1.username = String::from("new_user");\n}',
    choices: [
      'Change `let user1` to `let mut user1`.',
      'Add `mut` to the `username` field in the struct definition.',
      'Re-declare `user1` with `let user1 = ...` again.',
      'It cannot be fixed.',
    ],
    correctIndex: 0,
    explanation:
      'Mutability is a property of the binding, not the struct itself. The `mut` keyword must be used when creating the instance.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: struct-update
  {
    id: 'struct-update-q1',
    type: 'mcq',
    prompt: 'What is the purpose of the `..` syntax when creating a struct instance?',
    choices: [
      'To specify a range of values.',
      'To create a struct with default values for all fields.',
      'To populate the remaining fields from another instance of the same struct.',
      'To indicate that some fields are optional.',
    ],
    correctIndex: 2,
    explanation:
      'The struct update syntax `..` allows you to create a new instance by copying most of the values from an old instance, only specifying the fields you want to change.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-update-q2',
    type: 'predict_output',
    prompt: 'What is the `username` of `user2`?',
    code: 'struct User { username: String, email: String, active: bool }\nfn main() {\n    let user1 = User { email: String::from("a@ex.com"), username: String::from("user1"), active: true };\n    let user2 = User { email: String::from("b@ex.com"), ..user1 };\n    println!("{}", user2.username);\n}',
    expectedStdout: 'user1',
    explanation:
      'The `..user1` syntax copies the `username` and `active` fields from `user1` into `user2`. Note that this moves the `username` string, so `user1` can no longer be used in its entirety.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-update-q3',
    type: 'tf',
    prompt: 'Using struct update syntax always performs a deep copy of all fields.',
    answer: false,
    explanation:
      "Struct update syntax follows Rust's ownership rules. It will move data for types that don't implement the `Copy` trait (like `String`) and copy data for types that do (like `i32` or `bool`).",
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'struct-update-q4',
    type: 'fib',
    prompt: 'The struct update syntax must always come _____ in the field list.',
    acceptableAnswers: ['last'],
    explanation:
      'The `..` syntax must be last to specify that any remaining fields should get their values from the other instance.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'struct-update-q5',
    type: 'code_fix',
    prompt: 'This code has an error after using `user1` to create `user2`. Why?',
    code: 'struct User { username: String, email: String }\nfn main() {\n    let user1 = User { username: String::from("a"), email: String::from("b") };\n    let user2 = User { username: String::from("c"), ..user1 };\n    println!("{}", user1.email);\n}',
    choices: [
      'Because `user1.email` was moved to `user2`.',
      'Because `user1` was completely deallocated.',
      'Because you cannot print fields from the old struct.',
      'Because the struct does not implement `Display`.',
    ],
    correctIndex: 0,
    explanation:
      'The `String` type does not implement the `Copy` trait. When `user2` is created, the value for the `email` field is moved from `user1`, making `user1.email` invalid.',
    topicId: 'structs-enums',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: tuple-structs
  {
    id: 'tuple-struct-q1',
    type: 'mcq',
    prompt: 'What defines a tuple struct?',
    choices: [
      'It is a struct where all fields must be tuples.',
      'It is a struct with named fields, but the values are tuples.',
      'It is a struct defined with a name, but its fields have no names.',
      'It is an alias for a tuple type.',
    ],
    correctIndex: 2,
    explanation:
      "Tuple structs have the added meaning a struct name provides, but don't have named fields. They are useful when the names of the fields would be redundant, like `struct Color(i32, i32, i32);`.",
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-struct-q2',
    type: 'predict_output',
    prompt: 'How do you access the value `255` from the `blue` instance?',
    code: 'struct Color(i32, i32, i32);\nfn main() {\n    let blue = Color(0, 0, 255);\n    println!("{}", blue.2);\n}',
    expectedStdout: '255',
    explanation:
      'You access the fields of a tuple struct using dot notation followed by a zero-based index, similar to a regular tuple.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-struct-q3',
    type: 'tf',
    prompt:
      'Each tuple struct you define is its own distinct type, even if they have the exact same fields.',
    answer: true,
    explanation:
      '`struct Point(i32, i32);` and `struct Vector(i32, i32);` are not interchangeable, even though they have the same structure. This is a key advantage over using a plain tuple.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'tuple-struct-q4',
    type: 'code_fix',
    prompt: 'Destructure the `origin` tuple struct to get its `x` and `y` values.',
    code: 'struct Point(i32, i32);\nfn main() {\n    let origin = Point(0, 0);\n    // Your code here to get x and y\n}',
    choices: [
      'let Point(x, y) = origin;',
      'let (x, y) = origin;',
      'let {x, y} = origin;',
      'let x = origin[0]; let y = origin[1];',
    ],
    correctIndex: 0,
    explanation:
      "You can destructure a tuple struct with a `let` statement, similar to how you would destructure a regular tuple, but you include the struct's name.",
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'tuple-struct-q5',
    type: 'mcq',
    prompt: 'When is a tuple struct a good choice?',
    choices: [
      'When you have a very large number of fields.',
      'When you want to give a tuple a name to add meaning and type safety.',
      'When the fields need to be mutable by default.',
      'When you want to store different data types.',
    ],
    correctIndex: 1,
    explanation:
      'Tuple structs are perfect when a tuple would suffice, but you want to enforce a specific type for function parameters or return values to prevent mixing up different kinds of tuples.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: unit-structs
  {
    id: 'unit-struct-q1',
    type: 'mcq',
    prompt: 'What is a unit-like struct?',
    choices: [
      'A struct with exactly one field.',
      'A struct that can only be instantiated once.',
      'A struct with no fields.',
      'A struct that is used as a unit of measurement.',
    ],
    correctIndex: 2,
    explanation:
      'Unit-like structs are structs that have no fields at all. They are defined by the `struct` keyword, a name, and a semicolon.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'unit-struct-q2',
    type: 'tf',
    prompt: 'The main purpose of a unit-like struct is to store data.',
    answer: false,
    explanation:
      'Since they have no fields, they cannot store data. They are useful for implementing a trait on a type without needing to hold any data.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'unit-struct-q3',
    type: 'code_fix',
    prompt: 'What is the correct way to define a unit-like struct named `AlwaysEqual`?',
    code: 'struct AlwaysEqual()',
    choices: [
      'struct AlwaysEqual;',
      'struct AlwaysEqual {};',
      'struct AlwaysEqual();',
      'Both A and B are correct.',
    ],
    correctIndex: 0,
    explanation:
      'The idiomatic way to define a unit-like struct is with a semicolon immediately after the name.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'unit-struct-q4',
    type: 'fib',
    prompt:
      "Unit-like structs are most useful when you need to implement a _____ on some type but don't have any data to store in it.",
    acceptableAnswers: ['trait'],
    explanation:
      'For example, you might create a marker trait and implement it on a unit struct to represent a certain capability or state.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'unit-struct-q5',
    type: 'predict_output',
    prompt: 'What will this code print?',
    code: 'use std::fmt;\nstruct MyUnitStruct;\nimpl fmt::Display for MyUnitStruct {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, "Hello from unit struct!")\n    }\n}\nfn main() {\n    let s = MyUnitStruct;\n    println!("{}", s);\n}',
    expectedStdout: 'Hello from unit struct!',
    explanation:
      'This demonstrates a primary use case: the `MyUnitStruct` type itself holds no data, but it is used as a concrete type on which to implement the `Display` trait.',
    topicId: 'structs-enums',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: struct-methods
  {
    id: 'method-q1',
    type: 'mcq',
    prompt: 'Where are methods for a struct defined in Rust?',
    choices: [
      'Inside the `struct` definition block.',
      'In a separate file named `methods.rs`.',
      'Inside an `impl` (implementation) block.',
      'Globally, with the struct name as the first parameter.',
    ],
    correctIndex: 2,
    explanation:
      'All functions associated with a struct, including methods and associated functions, are defined within an `impl` block.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'method-q2',
    type: 'mcq',
    prompt: 'What is the first parameter of a method that borrows the instance immutably?',
    choices: ['self', '&self', '&mut self', 'this'],
    correctIndex: 1,
    explanation:
      "`&self` is shorthand for `self: &Self`. It gives the method read-only access to the struct instance's data.",
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'method-q3',
    type: 'tf',
    prompt:
      'An associated function is a function within an `impl` block that does not take `self` as its first parameter.',
    answer: true,
    explanation:
      "Associated functions are often used as constructors, like `String::new()`, because they are associated with the type but don't need an instance of it to be called.",
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'method-q4',
    type: 'predict_output',
    prompt: 'What is the output of this program?',
    code: 'struct Rectangle { width: u32, height: u32 }\nimpl Rectangle {\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\nfn main() {\n    let rect = Rectangle { width: 30, height: 50 };\n    println!("Area: {}", rect.area());\n}',
    expectedStdout: 'Area: 1500',
    explanation:
      "The `area` method is called on the `rect` instance. It takes an immutable reference `&self` and calculates the product of the instance's `width` and `height` fields.",
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'method-q5',
    type: 'code_fix',
    prompt:
      'The `scale` method needs to modify the rectangle. What should its `self` parameter be?',
    code: 'struct Rectangle { width: u32, height: u32 }\nimpl Rectangle {\n    fn scale(&self, factor: u32) {\n        self.width *= factor;\n        self.height *= factor;\n    }\n}',
    choices: [
      'Change `&self` to `&mut self`.',
      'Change `&self` to `self`.',
      'Remove the `self` parameter.',
      'The code is already correct.',
    ],
    correctIndex: 0,
    explanation:
      'To mutate the instance, the method must take a mutable reference, `&mut self`. This allows it to write to the fields of the struct.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: enums
  {
    id: 'enum-q1',
    type: 'mcq',
    prompt: 'What is the primary purpose of an `enum` in Rust?',
    choices: [
      'To create a list of integer constants.',
      'To define a type that can have one of several possible variants.',
      'To group related functions together.',
      'To create a collection that can store different types.',
    ],
    correctIndex: 1,
    explanation:
      'Enums (enumerations) allow you to define a type by enumerating its possible variants. For example, `enum IpAddrKind { V4, V6 }`.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-q2',
    type: 'tf',
    prompt: 'Enum variants in Rust can hold data.',
    answer: true,
    explanation:
      'This is a powerful feature. A variant can hold no data, a single value, a tuple, or even a struct, e.g., `enum Message { Write(String), ChangeColor(i32, i32, i32) }`.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-q3',
    type: 'predict_output',
    prompt: 'What will this code print?',
    code: 'enum Message { Quit, Write(String) }\nfn main() {\n    let msg = Message::Write(String::from("hello"));\n    match msg {\n        Message::Quit => println!("Quit"),\n        Message::Write(text) => println!("Text: {}", text),\n    }\n}',
    expectedStdout: 'Text: hello',
    explanation:
      'The `match` expression checks the variant of `msg`. Since it is `Message::Write`, it executes the second arm, binding the contained `String` to the variable `text`.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-q4',
    type: 'mcq',
    prompt:
      'Which standard library enum is commonly used to represent the presence or absence of a value?',
    choices: ['Result<T, E>', 'Option<T>', 'Presence<T>', 'Maybe<T>'],
    correctIndex: 1,
    explanation:
      '`Option<T>` is a very common enum with two variants: `Some(T)` to represent a value being present, and `None` to represent its absence.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-q5',
    type: 'fib',
    prompt: 'The _____ control flow operator is perfect for handling `enum` values.',
    acceptableAnswers: ['match'],
    explanation:
      '`match` allows you to compare a value against a series of patterns and execute code based on which pattern matches. It is exhaustive, meaning you must handle every possible variant of an enum.',
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },

  // Lesson: enum-methods
  {
    id: 'enum-method-q1',
    type: 'tf',
    prompt: 'Just like structs, you can define methods on enums using an `impl` block.',
    answer: true,
    explanation:
      "You can implement methods on enums to provide functionality related to the enum's variants.",
    topicId: 'structs-enums',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'enum-method-q2',
    type: 'predict_output',
    prompt: 'What is the output of this program?',
    code: 'enum Message { Quit, Write { text: String } }\nimpl Message {\n    fn call(&self) {\n        match self {\n            Message::Quit => println!("Quitting..."),\n            Message::Write { text } => println!("Writing: {}", text),\n        }\n    }\n}\nfn main() {\n    let m = Message::Write { text: String::from("Hi") };\n    m.call();\n}',
    expectedStdout: 'Writing: Hi',
    explanation:
      'The `call` method is defined on the `Message` enum. When called on an instance of `Message::Write`, it matches the variant and prints the associated text.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-method-q3',
    type: 'code_fix',
    prompt: 'Complete the `is_quit` method to return `true` only for the `Quit` variant.',
    code: 'enum Message { Quit, Move { x: i32, y: i32 } }\nimpl Message {\n    fn is_quit(&self) -> bool {\n        // Your code here\n    }\n}',
    choices: [
      'match self { Message::Quit => true, _ => false }',
      'if self == Message::Quit { true } else { false }',
      'self == Message::Quit',
      'All of the above are valid ways.',
    ],
    correctIndex: 0,
    explanation:
      'Using a `match` statement is the most idiomatic and often clearest way to check enum variants. The `_` is a wildcard that matches any other variant.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-method-q4',
    type: 'mcq',
    prompt: 'In an enum method, how does `self` relate to the enum variants?',
    choices: [
      '`self` refers to the enum type itself, not a specific variant.',
      '`self` refers to the specific instance of the enum, including its variant and any associated data.',
      '`self` can only be used if the enum has no data.',
      '`self` must be taken by value, not by reference.',
    ],
    correctIndex: 1,
    explanation:
      'The `self`, `&self`, or `&mut self` parameter in an enum method refers to the actual instance you call the method on, allowing you to `match` on its variant and use its data.',
    topicId: 'structs-enums',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'enum-method-q5',
    type: 'tf',
    prompt: 'You cannot define associated functions (like constructors) for enums.',
    answer: false,
    explanation:
      'You can absolutely define associated functions for enums. For example, you could create an `impl Message { fn new_quit_message() -> Message { Message::Quit } }`.',
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
    prompt: 'What is the primary purpose of the `use` keyword?',
    choices: [
      'To include an external library in the project.',
      'To define a new module.',
      'To bring a path into the current scope, allowing for shorter references.',
      'To export a function to be used by other modules.',
    ],
    correctIndex: 2,
    explanation:
      "`use` creates a shortcut to an item, so you don't have to write out its full path every time you use it.",
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'use-q2',
    type: 'code_fix',
    prompt: 'Add a `use` statement to make this code compile.',
    code: 'fn main() {\n    let mut map = HashMap::new();\n    map.insert(1, 2);\n}',
    choices: [
      'use std::collections::HashMap;',
      'use std::HashMap;',
      'import std::collections::HashMap;',
      'include std::collections::HashMap;',
    ],
    correctIndex: 0,
    explanation:
      'The `HashMap` type is located in the `std::collections` module. The `use` statement brings it into the current scope so it can be referred to directly.',
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'use-q3',
    type: 'tf',
    prompt:
      'The idiomatic way to bring a struct into scope is to specify its full path, e.g., `use std::collections::HashMap;`.',
    answer: true,
    explanation:
      'For structs, enums, and other items, the convention is to bring the full type into scope. For functions, the convention is to bring the parent module into scope (`use std::collections;`) and then call the function with its full path (`collections::HashMap::new();`). This helps clarify where the function is from.',
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'use-q4',
    type: 'mcq',
    prompt: 'How can you rename a type being brought into scope to avoid name conflicts?',
    choices: [
      'You cannot rename types with `use`.',
      'use std::fmt::Result as FmtResult;',
      'use std::fmt::Result rename FmtResult;',
      'use FmtResult = std::fmt::Result;',
    ],
    correctIndex: 1,
    explanation:
      'The `as` keyword provides a new local name for the type, which is very useful for resolving ambiguity between types with the same name from different crates.',
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'use-q5',
    type: 'fib',
    prompt:
      'To make a `use` statement available to code outside the current module, you can combine it with the _____ keyword.',
    acceptableAnswers: ['pub'],
    explanation:
      "A `pub use` statement re-exports an item, meaning that code that can access your module can now also access the item you brought into scope. This is common when building a library's public API.",
    topicId: 'module-system-advanced',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: nested-use
  {
    id: 'nested-use-q1',
    type: 'mcq',
    prompt:
      'How can you bring both `std::io::Error` and `std::io::Write` into scope with a single `use` line?',
    choices: [
      'use std::io::{Error, Write};',
      'use std::io::*;',
      'use std::io::Error; use std::io::Write;',
      'use std::io::{Error + Write};',
    ],
    correctIndex: 0,
    explanation:
      'You can use nested paths with curly braces `{}` to bring multiple items from the same parent path into scope concisely.',
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'nested-use-q2',
    type: 'predict_output',
    prompt: 'What items does `use std::cmp::{self, Ordering};` bring into scope?',
    code: '// This is a conceptual question, no code to run.',
    expectedStdout: 'It brings `std::cmp` and `std::cmp::Ordering` into scope.',
    explanation:
      'The `self` keyword inside a nested path refers to the parent path itself. So this line makes both `cmp` and `Ordering` available in the current scope.',
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'nested-use-q3',
    type: 'tf',
    prompt: 'The glob operator (`*`) brings all public items from a path into scope.',
    answer: true,
    explanation:
      'For example, `use std::collections::*;` will bring `HashMap`, `Vec`, `BTreeMap`, etc., into the current scope. This should be used sparingly to avoid polluting the namespace.',
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'nested-use-q4',
    type: 'code_fix',
    prompt: 'Consolidate these two `use` statements into a single line.',
    code: 'use std::fs::File;\nuse std::io::Read;',
    choices: [
      'use std::{fs::File, io::Read};',
      'use std::fs::File, std::io::Read;',
      'use std::(fs::File, io::Read);',
      'This cannot be consolidated.',
    ],
    correctIndex: 0,
    explanation:
      'Nested paths can be used even when the immediate parents are different, as long as they share a common ancestor path (`std` in this case).',
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'nested-use-q5',
    type: 'mcq',
    prompt: 'When is using the glob operator (`*`) generally discouraged?',
    choices: [
      'When importing from the `prelude` module.',
      'In library code that will be shared.',
      'In tests.',
      'Both B and C.',
    ],
    correctIndex: 1,
    explanation:
      'Using the glob operator in libraries can make it hard for users of your code to determine where types are defined. In tests, it is sometimes considered acceptable for convenience.',
    topicId: 'module-system-advanced',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: use-external-crates
  {
    id: 'external-crate-q1',
    type: 'mcq',
    prompt: 'Where must you declare an external crate dependency for a Cargo-based project?',
    choices: [
      'In the `main.rs` file using `extern crate`.',
      'In a `dependencies.txt` file.',
      'In the `[dependencies]` section of the `Cargo.toml` file.',
      'In the `[lib]` section of the `Cargo.toml` file.',
    ],
    correctIndex: 2,
    explanation:
      "Cargo, Rust's package manager, reads the `Cargo.toml` file to determine which crates to download from crates.io and link against.",
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q2',
    type: 'tf',
    prompt: 'In modern Rust (2018 edition and later), `extern crate` is usually not necessary.',
    answer: true,
    explanation:
      'After adding a dependency to `Cargo.toml`, you can typically just use a `use` statement (e.g., `use rand::Rng;`) without needing `extern crate rand;` first. The compiler handles it automatically.',
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q3',
    type: 'fib',
    prompt: 'The official registry for open-source Rust crates is called _____.',
    acceptableAnswers: ['crates.io'],
    explanation:
      'crates.io is the central repository where the Rust community publishes and downloads packages.',
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q4',
    type: 'code_fix',
    prompt:
      'Assuming `rand` is added to `Cargo.toml`, how do you bring its `Rng` trait into scope?',
    code: '// Your use statement here\nfn main() {\n    let mut rng = rand::thread_rng();\n    let n: u32 = rng.gen();\n}',
    choices: ['use rand::Rng;', 'use Rng from rand;', 'use rand;', 'use crate::rand::Rng;'],
    correctIndex: 0,
    explanation:
      'You refer to the crate by its name, followed by `::` and the path to the item you want to use. Traits often need to be in scope for their methods to be available.',
    topicId: 'module-system-advanced',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'external-crate-q5',
    type: 'mcq',
    prompt: 'How would you specify a specific version of a crate in `Cargo.toml`?',
    choices: ['rand = "0.8.5"', 'rand: "0.8.5"', 'rand("0.8.5")', 'rand depends on "0.8.5"'],
    correctIndex: 0,
    explanation:
      'The standard format is `crate-name = "version-string"`, where the version string follows Semantic Versioning rules.',
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
    prompt: 'Which of these is NOT one of the three ownership rules in Rust?',
    choices: [
      "Each value in Rust has a variable that's called its owner.",
      'There can only be one owner at a time.',
      'When the owner goes out of scope, the value will be dropped.',
      'All values must be manually deallocated by the programmer.',
    ],
    correctIndex: 3,
    explanation:
      "Rust's ownership system is designed to manage memory automatically without a garbage collector, so manual deallocation is not required.",
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'owner-q2',
    type: 'predict_output',
    prompt: 'Why does this code fail to compile?',
    code: 'fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1;\n    println!("{}, world!", s1);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation:
      'When `s2` is assigned `s1`, ownership of the `String` data is moved from `s1` to `s2`. After the move, `s1` is no longer valid and cannot be used.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'owner-q3',
    type: 'mcq',
    prompt: 'Which of these types implements the `Copy` trait by default?',
    choices: ['String', 'Vec<T>', 'i32', 'Box<T>'],
    correctIndex: 2,
    explanation:
      'Simple scalar types like integers (`i32`), booleans (`bool`), and floating-point numbers are stored on the stack and implement the `Copy` trait. When assigned, their bits are simply copied, and the old variable remains valid.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'owner-q4',
    type: 'tf',
    prompt:
      'When a function takes ownership of a value, the value is moved into the function, and the original variable becomes invalid (if the type is not `Copy`).',
    answer: true,
    explanation:
      "Passing a value to a function is semantically similar to assignment. Ownership is transferred to the function's parameter, and the value will be dropped when the function ends, unless ownership is returned.",
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'owner-q5',
    type: 'code_fix',
    prompt: 'How can you make a deep copy of a `String` so that both variables remain valid?',
    code: 'fn main() {\n    let s1 = String::from("hello");\n    let s2 = s1; // How to change this line?\n    println!("s1 = {}, s2 = {}", s1, s2);\n}',
    choices: ['let s2 = s1.clone();', 'let s2 = &s1;', 'let s2 = *s1;', 'let s2 = copy s1;'],
    correctIndex: 0,
    explanation:
      'The `.clone()` method explicitly creates a deep copy of the heap data, creating a new, independent `String`. This is a more expensive operation than moving.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: borrowing-ref
  {
    id: 'borrow-q1',
    type: 'mcq',
    prompt: 'What is "borrowing" in Rust?',
    choices: [
      'Temporarily taking ownership of a value.',
      'Creating a reference to a value without taking ownership.',
      'Making a deep copy of a value.',
      'Converting a value to a raw pointer.',
    ],
    correctIndex: 1,
    explanation:
      'Borrowing allows you to use a value without taking ownership. You create a reference (`&`), which acts like a pointer but with compile-time safety checks from the borrow checker.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'borrow-q2',
    type: 'tf',
    prompt: 'By default, references are immutable.',
    answer: true,
    explanation:
      'Just like variables, references are immutable by default. You cannot modify the value through an `&T` reference. You need a mutable reference, `&mut T`, to do so.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'borrow-q3',
    type: 'code_fix',
    prompt: 'Fix this code by passing a reference to the function instead of moving ownership.',
    code: 'fn main() {\n    let s = String::from("hello");\n    calculate_length(s);\n    println!("The length of \'{}\' is still available here.", s);\n}\nfn calculate_length(s: String) -> usize {\n    s.len()\n}',
    choices: [
      'Change `calculate_length(s)` to `calculate_length(&s)` and the parameter to `s: &String`.',
      'Change the function to return the String: `-> (String, usize)`.',
      'Clone `s` before passing it: `calculate_length(s.clone())`.',
      'All of the above are valid ways to solve the problem.',
    ],
    correctIndex: 3,
    explanation:
      'While all options would make the code compile, passing a reference (`&s`) is the most efficient and idiomatic solution as it avoids unnecessary data copies or complex return types.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'borrow-q4',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let mut s = String::from("hello");\n    let r1 = &s;\n    let r2 = &s;\n    println!("{} and {}", r1, r2);\n}',
    expectedStdout: 'hello and hello',
    explanation:
      'This code is valid because you can have multiple immutable references to the same piece of data simultaneously.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'borrow-q5',
    type: 'fib',
    prompt: 'The action of creating a reference is called _____.',
    acceptableAnswers: ['borrowing'],
    explanation:
      'When you create a reference (`&`), you are borrowing the value for a certain scope.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: mutable-ref
  {
    id: 'mut-ref-q1',
    type: 'mcq',
    prompt: 'What is the most important rule about mutable references?',
    choices: [
      'You can have as many mutable references as you want.',
      'You can only have one mutable reference to a particular piece of data in a particular scope.',
      'Mutable references can only be created for data on the heap.',
      'A mutable reference automatically makes a copy of the data.',
    ],
    correctIndex: 1,
    explanation:
      "This rule is key to Rust's prevention of data races at compile time. You can have either one mutable reference or any number of immutable references, but not both.",
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mut-ref-q2',
    type: 'predict_output',
    prompt: 'Why does this code fail to compile?',
    code: 'fn main() {\n    let mut s = String::from("hello");\n    let r1 = &mut s;\n    let r2 = &mut s;\n    println!("{}, {}", r1, r2);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation:
      'This violates the rule of only having one mutable reference at a time. Rust prevents this to avoid potential data races where two references could try to modify the same data concurrently.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mut-ref-q3',
    type: 'code_fix',
    prompt: 'Fix this function to accept and modify the string.',
    code: 'fn main() {\n    let mut s = String::from("hello");\n    change(&s);\n}\nfn change(some_string: &String) {\n    some_string.push_str(", world");\n}',
    choices: [
      'Change the parameter to `&mut String` and the argument to `&mut s`.',
      'Change the parameter to `String` and return a new `String`.',
      'Remove the `&` from the parameter type.',
      'Add `mut` inside the function: `let mut some_string = ...`.',
    ],
    correctIndex: 0,
    explanation:
      'To modify a borrowed value, the reference itself must be mutable (`&mut T`). This must be specified at both the call site (`&mut s`) and in the function signature (`some_string: &mut String`).',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'mut-ref-q4',
    type: 'tf',
    prompt:
      'You cannot have an immutable reference while a mutable reference to the same value exists.',
    answer: true,
    explanation:
      "If you have a mutable reference, you cannot have any other references (mutable or immutable). Users of an immutable reference don't expect the value to suddenly change.",
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mut-ref-q5',
    type: 'predict_output',
    prompt: 'Is this code valid? If so, what does it print?',
    code: 'fn main() {\n    let mut s = String::from("hello");\n    {\n        let r1 = &mut s;\n        r1.push_str(" world");\n    }\n    let r2 = &s;\n    println!("{}", r2);\n}',
    expectedStdout: 'hello world',
    explanation:
      'This code is valid. The mutable reference `r1` goes out of scope at the closing curly brace `}`. After that point, it is safe to create a new (immutable) reference `r2`.',
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },
  // Lanjutan dari file questions.ts

  // =================================================================
  // Topic: traits-generics
  // =================================================================

  // Lesson: traits
  {
    id: 'trait-q1',
    type: 'mcq',
    prompt: 'What is a trait in Rust?',
    choices: [
      'A specific data type, like a struct.',
      'A way to define shared behavior, similar to an interface.',
      'A tool for memory management.',
      'A special kind of module for public APIs.',
    ],
    correctIndex: 1,
    explanation:
      "A trait defines a set of methods that a type must implement, allowing for abstraction over behavior. It's how Rust achieves polymorphism.",
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q2',
    type: 'code_fix',
    prompt: 'How do you implement the `Summary` trait for the `Tweet` struct?',
    code: 'pub trait Summary { fn summarize(&self) -> String; }\npub struct Tweet { pub username: String, pub content: String }\n\n// Your implementation here',
    choices: [
      'impl Summary for Tweet {\n    fn summarize(&self) -> String {\n        format!("{}: {}", self.username, self.content)\n    }\n}',
      'impl Tweet for Summary {\n    fn summarize(&self) -> String {\n        format!("{}: {}", self.username, self.content)\n    }\n}',
      'fn summarize(t: &Tweet) -> String { ... }',
      'Tweet impl Summary { ... }',
    ],
    correctIndex: 0,
    explanation:
      'The correct syntax is `impl Trait for Type`, where you provide the concrete implementations for the methods defined in the trait.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q3',
    type: 'tf',
    prompt: 'A type can only implement one trait.',
    answer: false,
    explanation:
      'A type can implement many different traits, allowing it to have a wide range of behaviors.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-q4',
    type: 'mcq',
    prompt: 'What is the orphan rule?',
    choices: [
      'You cannot implement a trait for a type if both the trait and the type are defined in external crates.',
      'You cannot implement a trait that has no methods.',
      'A struct must implement all traits from its parent module.',
      'A trait must be implemented for at least one type.',
    ],
    correctIndex: 0,
    explanation:
      "The orphan rule ensures that implementations don't conflict. It states that an `impl` is only allowed if either the trait or the type for which you are implementing the trait is local to your crate.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-q5',
    type: 'fib',
    prompt:
      'The methods of a trait that a type implements can be called on an instance of that type, just like regular _____.',
    acceptableAnswers: ['methods'],
    explanation:
      'Once a trait is implemented, its methods become available on the type, accessible via dot notation.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: trait-default
  {
    id: 'trait-default-q1',
    type: 'tf',
    prompt: 'Traits can provide default implementations for their methods.',
    answer: true,
    explanation:
      'A trait can provide a default implementation for a method, which can be used by implementing types or overridden with a custom implementation.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-default-q2',
    type: 'predict_output',
    prompt: 'What is the output of this program?',
    code: 'pub trait Summary {\n    fn summarize(&self) -> String {\n        String::from("(Read more...)")\n    }\n}\nstruct NewsArticle { headline: String }\nimpl Summary for NewsArticle {}\nfn main() {\n    let article = NewsArticle { headline: String::from("Rust is fast!") };\n    println!("{}", article.summarize());\n}',
    expectedStdout: '(Read more...)',
    explanation:
      'Since the `impl Summary for NewsArticle` block is empty, the `NewsArticle` type uses the default implementation of `summarize` provided by the trait.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-default-q3',
    type: 'mcq',
    prompt: 'Can a default method implementation call other methods from the same trait?',
    choices: [
      'No, that would cause a circular dependency.',
      'Yes, even methods that do not have a default implementation.',
      'Only if the other methods also have a default implementation.',
      'Only if the methods are marked as `pub`.',
    ],
    correctIndex: 1,
    explanation:
      'Yes, a default method can call other methods in the trait. This allows for creating complex default behavior that relies on a few required methods to be implemented by the user.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-default-q4',
    type: 'code_fix',
    prompt:
      'The `Tweet` struct should have a more specific summary. How do you override the default implementation?',
    code: 'pub trait Summary { fn summarize(&self) -> String { String::from("(Read more...)") } }\nstruct Tweet { content: String }\n// Your overriding implementation here',
    choices: [
      'impl Summary for Tweet {\n    fn summarize(&self) -> String {\n        format!("Tweet: {}", self.content)\n    }\n}',
      'impl Summary for Tweet {\n    fn override_summarize(&self) -> String {\n        ...\n    }\n}',
      'impl Summary for Tweet { default = false; ... }',
      'You must create a new trait.',
    ],
    correctIndex: 0,
    explanation:
      'To override a default method, you simply provide a new implementation for that method within the `impl` block for your type.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-default-q5',
    type: 'tf',
    prompt:
      'If a trait has all default methods, you must still use an empty `impl` block (`impl MyTrait for MyType {}`) to apply it to a type.',
    answer: true,
    explanation:
      "Even if all methods are default, Rust needs an explicit `impl` block to know that you intend for that type to have the trait's behavior.",
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },

  // Lesson: traits as parameters and return types
  {
    id: 'trait-param-q1',
    type: 'mcq',
    prompt: 'What does the `impl Trait` syntax in a function parameter mean?',
    choices: [
      'The function returns a type that implements the trait.',
      'The function takes a concrete type named `impl`.',
      'The function accepts any type that implements the specified trait.',
      'The function will implement the trait for the given parameter.',
    ],
    correctIndex: 2,
    explanation:
      '`fn notify(item: &impl Summary)` is syntactic sugar for a trait bound. It means the `item` parameter accepts any type that implements the `Summary` trait.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-return-q1',
    type: 'mcq',
    prompt: 'What is a limitation of using `impl Trait` as a return type?',
    choices: [
      'You can only return one specific concrete type that implements the trait.',
      'It is less efficient than returning a concrete type.',
      'It cannot be used with traits that have associated types.',
      'You cannot call methods on the returned value.',
    ],
    correctIndex: 0,
    explanation:
      'Even though the caller only sees `impl Trait`, the function must return a single, specific type. You cannot have `if-else` logic that returns different concrete types (e.g., `Tweet` or `NewsArticle`) within the same function.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-bound-q1',
    type: 'mcq',
    prompt: 'What is the full syntax for a "trait bound", for which `impl Trait` is sugar?',
    choices: ['<T: Summary>', '<T where Summary>', '<T is Summary>', '<T implements Summary>'],
    correctIndex: 0,
    explanation:
      'The full generic syntax is `fn my_func<T: Summary>(item: &T)`. The `T: Summary` part is called a trait bound, which constrains the generic type `T` to types that implement `Summary`.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-cond-q1',
    type: 'mcq',
    prompt:
      'How do you conditionally implement a method on a struct only if its generic type implements a certain trait?',
    choices: [
      'impl<T: Display> Pair<T> { fn to_string(&self) -> String { ... } }',
      'impl<T> Pair<T> { if T: Display { fn to_string(&self) ... } }',
      'impl<T> Pair<T> where T: Display { fn to_string(&self) -> String { ... } }',
      'Both A and C are valid syntax.',
    ],
    correctIndex: 3,
    explanation:
      'You can add trait bounds to an `impl` block. This means the methods inside will only be available if the generic type of the struct instance meets those bounds.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q1',
    type: 'mcq',
    prompt: 'What is a "blanket implementation"?',
    choices: [
      'A default implementation for all methods in a trait.',
      'An implementation of a trait for any type that satisfies certain trait bounds.',
      'An implementation that covers all possible enum variants.',
      'A `use` statement that imports all items from a module.',
    ],
    correctIndex: 1,
    explanation:
      "A classic example is the standard library's implementation of `ToString` for any type that implements `Display`: `impl<T: Display> ToString for T`. This is a powerful way to add behavior to many types at once.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: lifetimes
  {
    id: 'life-q1',
    type: 'mcq',
    prompt: 'What is the main purpose of lifetimes in Rust?',
    choices: [
      'To measure how long a program runs.',
      'To ensure that references are valid for as long as they are used.',
      'To control when memory is allocated and deallocated.',
      'To define the lifespan of a thread.',
    ],
    correctIndex: 1,
    explanation:
      'Lifetimes are a static analysis tool that allows the borrow checker to prove that references will not outlive the data they point to, thus preventing dangling references.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-ann-q1',
    type: 'mcq',
    prompt:
      "What does the lifetime annotation in `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str` signify?",
    choices: [
      'The function takes exactly one second to run.',
      'The returned reference will be valid for as long as both input references are valid.',
      'The function allocates memory that must be freed later.',
      'The function only works with static strings.',
    ],
    correctIndex: 1,
    explanation:
      "The generic lifetime parameter `'a` connects the lifetimes of the parameters and the return value. It tells the compiler that the lifetime of the returned reference is constrained by the smaller of the lifetimes of `x` and `y`.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-q2',
    type: 'tf',
    prompt: 'Lifetime annotations change how long any of the references live.',
    answer: false,
    explanation:
      "Lifetimes don't alter the lifespan of any values. They describe the relationships between the lifetimes of multiple references, allowing the compiler to perform its safety checks.",
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q3',
    type: 'predict_output',
    prompt: 'Why does this code fail to compile?',
    code: 'fn main() {\n    let r;\n    {\n        let x = 5;\n        r = &x;\n    }\n    println!("r: {}", r);\n}',
    expectedStdout: 'This is a compile-time error.',
    explanation:
      'This is a classic dangling reference. The variable `x` goes out of scope (and is dropped) at the end of the inner block. The reference `r` would be left pointing to invalid memory, but the borrow checker prevents this at compile time.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q4',
    type: 'mcq',
    prompt: "What is the special lifetime `'static` used for?",
    choices: [
      'A reference that is only valid within the current function.',
      'A reference that can live for the entire duration of the program.',
      'A lifetime for variables that cannot be changed.',
      'A lifetime that is determined at runtime.',
    ],
    correctIndex: 1,
    explanation:
      "The `'static` lifetime indicates that the data pointed to by the reference lives for the entire program runtime. String literals, for example, have a `'static` lifetime because they are stored in the program's binary.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },

  // =================================================================
  // Topic: advanced-concepts & error-handling (shortened for brevity)
  // =================================================================

  // Lesson: smart-pointers (Box<T>)
  {
    id: 'smart-ptr-q1',
    type: 'mcq',
    prompt: 'What is the primary use case for `Box<T>`?',
    choices: [
      'To store data on the stack.',
      'To enable multiple owners for a piece of data.',
      'To allocate data on the heap and have a pointer to it.',
      'To count references to data.',
    ],
    correctIndex: 2,
    explanation:
      "A `Box<T>` is a smart pointer that owns data allocated on the heap. It's useful when you have a large amount of data you want to transfer ownership of without copying it.",
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'smart-ptr-q2',
    type: 'tf',
    prompt: 'A `Box<T>` is automatically deallocated when it goes out of scope.',
    answer: true,
    explanation:
      '`Box<T>` implements the `Drop` trait. When a `Box` goes out of scope, its destructor is called, which deallocates the memory on the heap.',
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'smart-ptr-q3',
    type: 'mcq',
    prompt: 'When is using a `Box<T>` necessary?',
    choices: [
      'For all data that is larger than a few bytes.',
      'When you want to create a recursive type, like a linked list.',
      'Whenever you use a struct.',
      'For every variable in a multi-threaded context.',
    ],
    correctIndex: 1,
    explanation:
      "Rust needs to know the size of a type at compile time. A recursive type (e.g., `enum List { Cons(i32, List), Nil }`) would have an infinite size. By using `Box<List>`, you store the recursive part on the heap, so the enum's size is just the size of a pointer.",
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: concurrency
  {
    id: 'concur-q1',
    type: 'mcq',
    prompt: 'How do you create a new thread in Rust?',
    choices: ['thread::new()', 'thread::spawn()', 'new Thread()', 'async::run()'],
    correctIndex: 1,
    explanation:
      '`std::thread::spawn` takes a closure containing the code you want to run and executes it in a new operating system thread.',
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'concur-q2',
    type: 'tf',
    prompt: "Rust's ownership system helps prevent data races in concurrent code at compile time.",
    answer: true,
    explanation:
      'The ownership and borrowing rules, particularly the "one mutable reference OR multiple immutable references" rule, are strictly enforced across threads, making it impossible to accidentally create a data race.',
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: error-handling (Result)
  {
    id: 'result-q1',
    type: 'mcq',
    prompt: 'What are the two variants of the `Result<T, E>` enum?',
    choices: [
      'Some(T) and None',
      'Success(T) and Failure(E)',
      'Ok(T) and Err(E)',
      'Value(T) and Error(E)',
    ],
    correctIndex: 2,
    explanation:
      '`Result<T, E>` is used for recoverable errors. `Ok(T)` represents a successful result containing a value, and `Err(E)` represents an error, containing error details.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'err-handle-q1',
    type: 'mcq',
    prompt: 'What does the `?` operator do when used on a `Result`?',
    choices: [
      "It unwraps the `Ok` value, or panics if it's an `Err`.",
      'It converts the `Result` to an `Option`.',
      'It returns the `Ok` value, or returns the `Err` value from the current function.',
      'It prints the error to the console and continues.',
    ],
    correctIndex: 2,
    explanation:
      "The `?` operator is a shortcut for error propagation. If the result is `Ok(value)`, it gives you the `value`. If it's `Err(e)`, it immediately returns that `Err(e)` from the function you are in.",
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'panic-q1',
    type: 'mcq',
    prompt: 'When should you use `panic!` instead of returning a `Result`?',
    choices: [
      'Whenever an error occurs.',
      'For errors that are expected and recoverable, like user input validation.',
      'For unrecoverable errors where the program cannot meaningfully continue, often indicating a bug.',
      'When you want to log an error without stopping the program.',
    ],
    correctIndex: 2,
    explanation:
      '`panic!` is for unrecoverable errors. If your code reaches a state where continuing would be incorrect or insecure (e.g., an index out of bounds that you thought was impossible), panicking is appropriate. For expected errors, `Result` is the better choice.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'result-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn might_fail(success: bool) -> Result<i32, String> {\n    if success {\n        Ok(100)\n    } else {\n        Err(String::from("Failed!"))\n    }\n}\nfn main() {\n    let res = might_fail(false);\n    match res {\n        Ok(val) => println!("Success: {}", val),\n        Err(e) => println!("Error: {}", e),\n    }\n}',
    expectedStdout: 'Error: Failed!',
    explanation:
      'The `might_fail` function is called with `false`, so it returns an `Err`. The `match` statement correctly catches the `Err` variant and prints the contained error message.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'result-q3',
    type: 'tf',
    prompt: 'The `.unwrap()` method on a `Result` is safe to use in all situations.',
    answer: false,
    explanation:
      "`.unwrap()` will panic if called on an `Err` variant. It is useful in tests or examples, but in production code, it's better to handle the `Err` case explicitly with `match` or other methods like `unwrap_or_else`.",
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q1',
    type: 'mcq',
    prompt: 'What is a dangling reference?',
    choices: [
      'A reference to a value that has been deallocated or moved.',
      'A reference that has not been initialized.',
      'A reference that points to the null address.',
      'A reference that is mutable.',
    ],
    correctIndex: 0,
    explanation:
      'A dangling reference points to a memory location that no longer contains the data that the reference was created for, because that data has been deallocated.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q2',
    type: 'tf',
    prompt: 'The Rust compiler prevents dangling references at compile time.',
    answer: true,
    explanation:
      'This is a core safety guarantee of Rust. The borrow checker analyzes lifetimes to ensure that no reference can outlive the data it points to.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'dangle-q3',
    type: 'predict_output',
    prompt: 'Why is this function guaranteed by the compiler to NOT create a dangling reference?',
    code: 'fn no_dangle() -> String {\n    let s = String::from("hello");\n    s\n}',
    expectedStdout: 'This code is valid and does not create a dangling reference.',
    explanation:
      'The function returns the `String` itself, not a reference to it. This transfers ownership of the string to the calling scope, so the data remains valid.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q4',
    type: 'code_fix',
    prompt:
      'The following function fails to compile because it tries to return a dangling reference. How would you fix it?',
    code: 'fn dangle() -> &String {\n    let s = String::from("hello");\n    &s\n}',
    choices: [
      'Change the return type to `String` and return `s`.',
      'Allocate `s` on the heap using `Box::new`.',
      'Mark `s` as `static`.',
      'Return `s.clone()`.',
    ],
    correctIndex: 0,
    explanation:
      'The variable `s` is created inside the function and is deallocated when the function ends. You cannot return a reference to it. The correct approach is to transfer ownership of `s` out of the function.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dangle-q5',
    type: 'mcq',
    prompt: 'How do lifetimes help prevent dangling references?',
    choices: [
      'By manually freeing memory.',
      'By ensuring the data a reference points to lives at least as long as the reference itself.',
      'By copying data every time a reference is created.',
      'By using a garbage collector.',
    ],
    correctIndex: 1,
    explanation:
      'The borrow checker uses lifetime annotations (explicit or elided) to compare the scope of the reference with the scope of the data it points to, issuing a compile error if the data might be dropped too soon.',
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: slice-references
  {
    id: 'slice-ref-q1',
    type: 'mcq',
    prompt: 'What does a string slice `&str` contain?',
    choices: [
      'A pointer to the string data and an ownership token.',
      'A pointer to the string data and a length.',
      'A copy of the string data.',
      'A null-terminated sequence of characters.',
    ],
    correctIndex: 1,
    explanation:
      'A slice is a two-word object: it stores a pointer to the starting position of the data and the length of the slice.',
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-ref-q2',
    type: 'predict_output',
    prompt: 'What will be printed by this function call?',
    code: 'fn first_word(s: &String) -> &str {\n    let bytes = s.as_bytes();\n    for (i, &item) in bytes.iter().enumerate() {\n        if item == b\' \' {\n            return &s[0..i];\n        }\n    }\n    &s[..]\n}\nfn main() {\n    let my_string = String::from("hello world");\n    println!("{}", first_word(&my_string));\n}',
    expectedStdout: 'hello',
    explanation:
      "The function iterates through the string bytes. When it finds a space (b' '), it returns a slice of the string from the beginning up to that point.",
    topicId: 'memory-management',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'slice-ref-q3',
    type: 'tf',
    prompt:
      'You can have a mutable slice `&mut [i32]` which allows you to modify the elements it refers to.',
    answer: true,
    explanation:
      'Just like regular references, slices can be mutable (`&mut T`), allowing for in-place modification of the borrowed data.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'slice-ref-q4',
    type: 'mcq',
    prompt: 'Why is using a slice `&str` as a function parameter often better than `&String`?',
    choices: [
      'It is always faster.',
      'It is more general, as it can accept both `&String` and `&str` (string literals).',
      'It automatically makes a mutable copy.',
      'It prevents the string from being dropped.',
    ],
    correctIndex: 1,
    explanation:
      'By taking `&str`, your function becomes more flexible. Rust can automatically convert a `&String` into a `&str` (deref coercion), so your function works with both owned strings and string literals without needing changes.',
    topicId: 'memory-management',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'slice-ref-q5',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let a = [1, 2, 3, 4, 5];\n    let slice = &a[..];\n    println!("Length: {}", slice.len());\n}',
    expectedStdout: 'Length: 5',
    explanation:
      'The `&a[..]` syntax creates a slice that contains all the elements of the array `a`.',
    topicId: 'memory-management',
    difficulty: 'beginner',
    points: 15,
  },
  // Lesson: smart-pointers
  {
    id: 'smart-ptr-q4',
    type: 'mcq',
    prompt: 'Which smart pointer allows for multiple ownership of data?',
    choices: ['Box<T>', 'Rc<T>', 'RefCell<T>', 'Mutex<T>'],
    correctIndex: 1,
    explanation:
      '`Rc<T>` stands for Reference Counting. It keeps track of how many references there are to a piece of data. The data is only cleaned up when the last reference goes out of scope.',
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'smart-ptr-q5',
    type: 'tf',
    prompt: '`Rc<T>` is safe to use across multiple threads.',
    answer: false,
    explanation:
      '`Rc<T>` is not thread-safe. For thread-safe reference counting, you must use `Arc<T>` (Atomically Reference Counted).',
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // Lesson: concurrency
  {
    id: 'concur-q3',
    type: 'mcq',
    prompt: 'What is a common way for threads to communicate in Rust?',
    choices: ['Global variables', 'Channels', 'Raw pointers', 'Direct memory access'],
    correctIndex: 1,
    explanation:
      'Channels are a message-passing concurrency feature where threads can send messages to each other without sharing memory directly, preventing many common concurrency bugs.',
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'concur-q4',
    type: 'fib',
    prompt: 'To share state between threads safely, you can use an `Arc<T>` combined with a _____.',
    acceptableAnswers: ['Mutex<T>', 'Mutex'],
    explanation:
      '`Arc` (Atomic Reference Count) allows multiple threads to own a reference, and `Mutex` (Mutual Exclusion) ensures that only one thread can access the data at a time.',
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'concur-q5',
    type: 'tf',
    prompt:
      'When the main thread of a Rust program finishes, all spawned threads are immediately stopped.',
    answer: true,
    explanation:
      'If the main thread completes, the program exits, even if other threads are still running. You must explicitly wait for threads to finish using a `JoinHandle` if you need them to complete their work.',
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },

  // Lesson: async-await
  {
    id: 'async-q2',
    type: 'mcq',
    prompt: 'What does an `async` function in Rust return?',
    choices: [
      'A value directly',
      'A `Result`',
      'A type that implements the `Future` trait',
      'A new thread',
    ],
    correctIndex: 2,
    explanation:
      'An `async` function is syntactic sugar for a function that returns a `Future`. A `Future` is a value that might not be computed yet.',
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'async-q3',
    type: 'mcq',
    prompt: 'What is the role of the `.await` keyword?',
    choices: [
      'To start an asynchronous operation.',
      'To define an asynchronous function.',
      'To pause the current function until a `Future` is resolved.',
      'To cancel a `Future`.',
    ],
    correctIndex: 2,
    explanation:
      '`.await` is used to wait for the completion of another asynchronous operation without blocking the entire thread, allowing other tasks to run.',
    topicId: 'advanced-concepts',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'async-q4',
    type: 'tf',
    prompt: "Rust's standard library includes a built-in async runtime.",
    answer: false,
    explanation:
      'The `async/await` syntax is part of the language, but the executor that actually runs the `Future`s must be provided by an external crate, such as `tokio` or `async-std`.',
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'async-q5',
    type: 'fib',
    prompt: 'An async _____ is responsible for polling `Future`s until they complete.',
    acceptableAnswers: ['runtime', 'executor'],
    explanation:
      'The async runtime or executor manages a pool of tasks and runs them concurrently, polling their `Future`s when they are ready to make progress.',
    topicId: 'advanced-concepts',
    difficulty: 'advanced',
    points: 20,
  },

  // =================================================================
  // Topic: error-handling (Completion)
  // =================================================================

  // Lesson: result-type
  {
    id: 'result-q4',
    type: 'mcq',
    prompt:
      "Which method on `Result` returns the contained `Ok` value or computes a value from a closure if it's an `Err`?",
    choices: ['unwrap()', 'expect()', 'unwrap_or()', 'unwrap_or_else()'],
    correctIndex: 3,
    explanation:
      '`unwrap_or_else` is useful when the default value is expensive to compute, as the closure is only executed in the `Err` case.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'result-q5',
    type: 'code_fix',
    prompt:
      "This code uses `unwrap()` which might panic. Change it to return a default value of `0` if there's an error.",
    code: 'fn main() {\n    let num_str = "abc";\n    let number = num_str.parse::<i32>().unwrap();\n}',
    choices: [
      'let number = num_str.parse::<i32>().unwrap_or(0);',
      'let number = num_str.parse::<i32>().expect("Failed to parse");',
      'let number = match num_str.parse::<i32>() { Ok(n) => n, Err(_) => 0 };',
      'Both A and C are correct solutions.',
    ],
    correctIndex: 3,
    explanation:
      'Both `unwrap_or(0)` and the `match` statement are valid and safe ways to provide a default value in case of an error, preventing a panic.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },

  // Lesson: recoverable-errors
  {
    id: 'err-handle-q2',
    type: 'predict_output',
    prompt: 'What is the purpose of the `?` operator in this function?',
    code: 'use std::fs::File;\nuse std::io::Read;\n\nfn read_username_from_file() -> Result<String, std::io::Error> {\n    let mut f = File::open("hello.txt")?;\n    let mut s = String::new();\n    f.read_to_string(&mut s)?;\n    Ok(s)\n}\n// main function omitted for brevity',
    expectedStdout: 'It propagates errors out of the function.',
    explanation:
      'The `?` after `File::open` means "if the result is an `Err`, return from `read_username_from_file` immediately with that `Err`". The same logic applies to `read_to_string`. It greatly simplifies error handling code.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'err-handle-q3',
    type: 'tf',
    prompt: 'The `?` operator can be used in any function.',
    answer: false,
    explanation:
      'The `?` operator can only be used in functions that have a return type of `Result<T, E>` or `Option<T>` (or another type that implements the `Try` trait).',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'err-handle-q4',
    type: 'mcq',
    prompt: 'What is the main difference between `panic!` and returning a `Result`?',
    choices: [
      '`panic!` is for unrecoverable errors, `Result` is for recoverable errors.',
      '`Result` is less performant than `panic!`.',
      '`panic!` logs the error, `Result` does not.',
      'There is no major difference.',
    ],
    correctIndex: 0,
    explanation:
      'You use `Result` when an error is expected and the calling code should have a chance to handle it. You use `panic!` when the program has reached an unrecoverable state (usually due to a bug).',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'err-handle-q5',
    type: 'code_fix',
    prompt: 'Rewrite the following code using the `?` operator to make it more concise.',
    code: 'fn read_file() -> Result<String, std::io::Error> {\n    let f = File::open("data.txt");\n    let mut f = match f {\n        Ok(file) => file,\n        Err(e) => return Err(e),\n    };\n    // ... more code\n}',
    choices: [
      'let mut f = File::open("data.txt")?;',
      'let mut f = File::open("data.txt").unwrap();',
      'let mut f = File::open("data.txt").expect("error");',
      'let mut f = File::open("data.txt"); if f.is_err() { return f; }',
    ],
    correctIndex: 0,
    explanation:
      'The `?` operator is the idiomatic and concise way to handle a `Result` in a function that itself returns a `Result`, replacing the entire `match` block.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q2',
    type: 'mcq',
    prompt: 'How do you use a function pointer in Rust?',
    choices: [
      'let f: fn(i32) -> i32 = plus_one;',
      'let f: Fn(i32) -> i32 = &plus_one;',
      'let f = &plus_one;',
      'let f = pointer_to(plus_one);',
    ],
    correctIndex: 0,
    explanation:
      'You can declare a variable with the `fn` type to hold a function pointer. This is distinct from closures which use `Fn`, `FnMut`, or `FnOnce` traits.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q3',
    type: 'tf',
    prompt: 'Function pointers and closures are interchangeable in all situations.',
    answer: false,
    explanation:
      'While closures can often be passed where function pointers are expected, they are not identical. Closures can capture their environment, whereas function pointers cannot.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q4',
    type: 'predict_output',
    prompt: 'What does this code print?',
    code: 'fn add_one(x: i32) -> i32 { x + 1 }\nfn do_twice(f: fn(i32) -> i32, arg: i32) -> i32 {\n    f(arg) + f(arg)\n}\nfn main() {\n    let answer = do_twice(add_one, 5);\n    println!("The answer is: {}", answer);\n}',
    expectedStdout: 'The answer is: 12',
    explanation:
      'The function `do_twice` takes `add_one` as a function pointer. It calls `add_one(5)` twice, resulting in `6 + 6`, which is 12.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'adv-func-q5',
    type: 'fib',
    prompt:
      'You can return closures from functions by using `impl Fn(i32) -> i32` or by wrapping them in a ____.',
    acceptableAnswers: ['Box<dyn Fn(i32) -> i32>', 'Box'],
    explanation:
      'Because closures have an unknown size at compile time, you must use a trait object like `Box<dyn Trait>` to return them from a function.',
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'newtype-q2',
    type: 'tf',
    prompt:
      'The newtype pattern has a runtime performance cost compared to using a plain type alias.',
    answer: false,
    explanation:
      "The newtype pattern is a zero-cost abstraction. Rust's compiler will optimize it away, so there is no runtime overhead.",
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'newtype-q3',
    type: 'mcq',
    prompt: 'What is the primary benefit of the newtype pattern?',
    choices: [
      'It improves performance by caching values.',
      "It allows you to implement traits on types you don't own.",
      'It makes code shorter.',
      'It automatically implements common traits like `Display`.',
    ],
    correctIndex: 1,
    explanation:
      'By wrapping an external type in your own struct (the newtype), you can implement traits on it, bypassing the orphan rule.',
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'newtype-q4',
    type: 'code_fix',
    prompt: 'How do you access the inner value of a newtype `Years(i32)`?',
    code: 'struct Years(i32);\nfn main() {\n    let age = Years(30);\n    // How to get the 30 out?\n}',
    choices: [
      'let inner_age = age.0;',
      'let inner_age = age.value;',
      'let inner_age = age[0];',
      'let inner_age = *age;',
    ],
    correctIndex: 0,
    explanation:
      'Since a newtype is a tuple struct with one element, you access its inner value using `.0`.',
    topicId: 'advanced-types',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'newtype-q5',
    type: 'mcq',
    prompt:
      'Given `struct Meters(u32);` and `struct Kilometers(u32);`, can you add them together directly?',
    choices: [
      'Yes, because they both contain a `u32`.',
      'Only if they are declared in the same module.',
      'No, not without implementing the `Add` trait for them.',
      'Yes, by casting one to the other.',
    ],
    correctIndex: 2,
    explanation:
      'The newtype pattern creates distinct types. To define how they interact (e.g., via addition), you must explicitly implement the relevant traits like `std::ops::Add`.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'type-alias-adv-q2',
    type: 'tf',
    prompt: 'A type alias `type MyString = String;` creates a new, distinct type.',
    answer: false,
    explanation:
      'A type alias is just a synonym. `MyString` and `String` are completely interchangeable. The newtype pattern is used to create a distinct type.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'type-alias-adv-q3',
    type: 'mcq',
    prompt: 'What is a primary use case for type aliases?',
    choices: [
      'To add methods to existing types.',
      'To enforce type safety between similar underlying types.',
      'To reduce repetition and simplify long, complex type signatures.',
      'To hide the implementation details of a type.',
    ],
    correctIndex: 2,
    explanation:
      'Type aliases are excellent for making code more readable by giving a short name to a verbose type, such as `type Result<T> = std::result::Result<T, std::io::Error>;`.',
    topicId: 'advanced-types',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'type-alias-adv-q4',
    type: 'predict_output',
    prompt: 'What will be printed?',
    code: 'type Thunk = Box<dyn Fn() + Send + \'static>;\nfn takes_thunk(f: Thunk) {\n    f();\n}\nfn main() {\n    let f: Thunk = Box::new(|| println!("hi"));\n    takes_thunk(f);\n}',
    expectedStdout: 'hi',
    explanation:
      'The code defines a complex type alias `Thunk` for a boxed closure. It then creates a closure that matches this type and passes it to a function, which executes it.',
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'type-alias-adv-q5',
    type: 'fib',
    prompt: 'The main drawback of a type alias is that it does not provide ____ safety.',
    acceptableAnswers: ['type'],
    explanation:
      'Unlike the newtype pattern, type aliases do not create a new type, so the compiler will not prevent you from mixing up types that are aliases for the same underlying type.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'never-q2',
    type: 'mcq',
    prompt: 'Which of these functions has the never type `!` as its return type?',
    choices: [
      'A function that returns `()`.',
      'A function that may or may not return, like one that gets input.',
      'A function that is guaranteed to never return, such as `panic!()` or an infinite loop.',
      'A function that returns `None`.',
    ],
    correctIndex: 2,
    explanation:
      "Functions that never return are called 'diverging functions'. `panic!`, `continue`, and `loop {}` are expressions that have the never type.",
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'never-q3',
    type: 'tf',
    prompt: 'The never type `!` can be coerced into any other type.',
    answer: true,
    explanation:
      "This is useful in `match` statements. If one arm returns `!`, the compiler knows it will never be taken, so it doesn't need to have the same type as the other arms.",
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'never-q4',
    type: 'predict_output',
    prompt: 'Why does this `match` statement compile, even though the arms have different types?',
    code: 'fn main() {\n    let guess = "32";\n    let guess: u32 = match guess.parse() {\n        Ok(num) => num,\n        Err(_) => continue,\n    };\n    println!("{}", guess);\n}',
    expectedStdout: 'This is a conceptual question. The code compiles.',
    explanation:
      "The `continue` expression has the never type `!`. Because this arm can never produce a value, it doesn't need to match the type of the `Ok(num)` arm, which is `u32`.",
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'never-q5',
    type: 'fib',
    prompt: 'A function that never returns is also known as a _____ function.',
    acceptableAnswers: ['diverging'],
    explanation:
      'These functions diverge from the normal flow of control and are guaranteed never to return to their caller.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dst-q2',
    type: 'mcq',
    prompt: 'Which of these is an example of a Dynamically Sized Type (DST)?',
    choices: ['i32', 'str', 'bool', 'char'],
    correctIndex: 1,
    explanation:
      '`str` is a DST because its size (the number of bytes) is not known at compile time. This is why we almost always interact with it via a reference `&str`, which has a known size.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dst-q3',
    type: 'tf',
    prompt: 'You can create a variable of a DST directly on the stack.',
    answer: false,
    explanation:
      'Rust needs to know the size of a type to allocate memory for it on the stack. Because DSTs have a size known only at runtime, they must be behind a pointer, such as `&str` or `Box<dyn Trait>`.',
    topicId: 'advanced-types',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'dst-q4',
    type: 'fib',
    prompt:
      'The `Sized` trait is automatically implemented by the compiler for any type whose size is known at _____ time.',
    acceptableAnswers: ['compile'],
    explanation:
      'By default, generic type parameters are assumed to be `Sized`. To work with DSTs, you can relax this with the special syntax `?Sized`.',
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'dst-q5',
    type: 'mcq',
    prompt: 'How do you work with a trait object, which is a DST?',
    choices: [
      'let drawable: dyn Draw;',
      'let drawable: Box<dyn Draw>;',
      'let drawable: *const dyn Draw;',
      'Both B and using a reference `&dyn Draw` are correct.',
    ],
    correctIndex: 3,
    explanation:
      'Trait objects (`dyn Trait`) are DSTs because different types implementing the trait can have different sizes. Therefore, you must use them via a pointer like `&` or `Box`.',
    topicId: 'advanced-types',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'str-slice-adv-q2',
    type: 'mcq',
    prompt: "Why can't you index a `&str` by integer, e.g., `my_str[0]`?",
    choices: [
      "Because it's an immutable type.",
      'Because Rust strings are not arrays of characters.',
      'Because a `char` can be multiple bytes, and integer indexing would be ambiguous and inefficient.',
      'Because strings might not be valid UTF-8.',
    ],
    correctIndex: 2,
    explanation:
      'UTF-8 characters can be 1 to 4 bytes long. Integer indexing would require iterating from the start to find character boundaries, making it an O(n) operation, which is unexpected for indexing.',
    topicId: 'strings-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'str-slice-adv-q3',
    type: 'tf',
    prompt: 'Slicing a string with `&my_str[..]` must happen on `char` boundaries.',
    answer: true,
    explanation:
      'If you try to create a string slice in the middle of a multi-byte character, your program will panic. This ensures all `&str` are always valid UTF-8.',
    topicId: 'strings-advanced',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'str-slice-adv-q4',
    type: 'predict_output',
    prompt: 'What is the output?',
    code: 'fn main() {\n    let s = "Здравствуйте";\n    println!("{}", &s[0..4]);\n}',
    expectedStdout: 'Зд',
    explanation:
      'Each Cyrillic character in this string is 2 bytes long. Slicing from byte 0 to 4 gives you the first two characters.',
    topicId: 'strings-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'str-slice-adv-q5',
    type: 'mcq',
    prompt: 'How should you iterate over the characters of a `&str`?',
    choices: [
      'Using a `for` loop from `0..s.len()`.',
      'Using `s.chars()`.',
      'Using `s.bytes()`.',
      'Using `s.split()`.',
    ],
    correctIndex: 1,
    explanation:
      'The `.chars()` method returns an iterator that correctly handles UTF-8 boundaries, yielding each `char` one by one, regardless of how many bytes it occupies.',
    topicId: 'strings-advanced',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'str-lit-adv-q2',
    type: 'mcq',
    prompt: 'How can you include a newline character in a string literal?',
    choices: [
      'Just press Enter in the editor.',
      'Using the `\\n` escape sequence.',
      'Both A and B are correct.',
      'You must use the `format!` macro.',
    ],
    correctIndex: 2,
    explanation:
      'Rust string literals support both literal newlines and escape sequences like `\\n` for newline and `\\t` for tab.',
    topicId: 'strings-advanced',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'str-lit-adv-q3',
    type: 'tf',
    prompt: 'String literals are of type `String`.',
    answer: false,
    explanation:
      "String literals are of type `&'static str`. They are immutable string slices with a static lifetime, as they are compiled into the program binary.",
    topicId: 'strings-advanced',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'str-lit-adv-q4',
    type: 'predict_output',
    prompt: 'What does this code print?',
    code: 'fn main() {\n    let s = "line 1\\\n             line 2";\n    println!("{}", s);\n}',
    expectedStdout: 'line 1line 2',
    explanation:
      'A backslash `\\` at the end of a line in a multi-line string literal escapes the newline and any leading whitespace on the next line, effectively concatenating them.',
    topicId: 'strings-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'str-lit-adv-q5',
    type: 'mcq',
    prompt: 'How do you represent a byte string literal?',
    choices: ['b"hello"', 's"hello"', '"hello".as_bytes()', 'bytes!["hello"]'],
    correctIndex: 0,
    explanation:
      'A byte string literal, prefixed with `b`, creates a `&[u8]` slice, not a `&str`. It is useful for working with data that is not guaranteed to be valid UTF-8.',
    topicId: 'strings-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'raw-str-q2',
    type: 'mcq',
    prompt: 'What is the main benefit of a raw string literal?',
    choices: [
      'It is mutable.',
      'It has better performance.',
      'It does not process escape sequences like `\\n` or `\\t`.',
      'It can contain non-UTF-8 data.',
    ],
    correctIndex: 2,
    explanation:
      'Raw strings are useful for writing content where backslashes are common, such as in regular expressions or Windows file paths.',
    topicId: 'strings-advanced',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'raw-str-q3',
    type: 'tf',
    prompt: 'You can include double quotes `"` inside a raw string.',
    answer: true,
    explanation:
      'Yes, by using a different number of hash symbols to start and end the string, e.g., `r#"This string contains "quotes""#`.',
    topicId: 'strings-advanced',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'raw-str-q4',
    type: 'predict_output',
    prompt: 'What will be printed?',
    code: 'fn main() {\n    let path = r"C:\\Users\\Admin";\n    println!("{}", path);\n}',
    expectedStdout: 'C:\\Users\\Admin',
    explanation:
      'The `r"..."` syntax creates a raw string, so the backslashes are treated as literal characters, not as the start of an escape sequence.',
    topicId: 'strings-advanced',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'raw-str-q5',
    type: 'fib',
    prompt: 'A raw string literal starts with `r` and is followed by one or more ____ symbols.',
    acceptableAnswers: ['#', 'hash'],
    explanation:
      'Raw strings start with `r`, can be followed by any number of hash symbols (`#`), and then a double quote.',
    topicId: 'strings-advanced',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'closure-q2',
    type: 'predict_output',
    prompt: 'What is the output of this code?',
    code: 'fn main() {\n    let x = 4;\n    let equal_to_x = |z| z == x;\n    let y = 4;\n    println!("{}", equal_to_x(y));\n}',
    expectedStdout: 'true',
    explanation:
      'The closure `equal_to_x` captures the variable `x` from its environment. When called with `y` (which is 4), it checks if `4 == 4`.',
    topicId: 'functional-programming',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'closure-q3',
    type: 'tf',
    prompt: 'Closures must always have their parameter and return types annotated.',
    answer: false,
    explanation:
      "The compiler can usually infer the types of a closure's parameters and return value, similar to how it can for variables. However, annotations are sometimes required for complex cases.",
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'closure-q4',
    type: 'mcq',
    prompt: 'What is the key difference between a closure and a regular function?',
    choices: [
      'Closures are always faster.',
      'Closures can capture values from their environment.',
      'Closures must be defined inside another function.',
      'Functions can have default arguments, but closures cannot.',
    ],
    correctIndex: 1,
    explanation:
      "The ability to 'close over' and use variables from the scope they are defined in is the defining characteristic of closures.",
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'closure-q5',
    type: 'code_fix',
    prompt: 'This closure needs to modify the captured variable `x`. How should it be declared?',
    code: 'fn main() {\n    let mut x = String::from("hello");\n    let mut add_world = || x.push_str(", world");\n    add_world();\n    println!("{}", x);\n}',
    choices: [
      'The code is already correct.',
      'add_world = |&mut x| x.push_str(", world");',
      'add_world = move || x.push_str(", world");',
      'add_world = |mut x| x.push_str(", world");',
    ],
    correctIndex: 0,
    explanation:
      'The closure automatically borrows `x` mutably because its body requires it. The `mut` on `let mut x` is what allows this mutable borrow to happen.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'closure-traits-q2',
    type: 'mcq',
    prompt: 'Which closure trait takes ownership of the captured variables?',
    choices: ['Fn', 'FnMut', 'FnOnce', 'FnBox'],
    correctIndex: 2,
    explanation:
      '`FnOnce` means the closure can be called at least once. It might take ownership of captured variables, so it can only be called for sure one time.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'closure-traits-q3',
    type: 'tf',
    prompt: 'A closure that implements `Fn` also implements `FnMut` and `FnOnce`.',
    answer: true,
    explanation:
      'The traits are additive. If a closure can be called immutably (`Fn`), it can also be called mutably (`FnMut`) and can be called once (`FnOnce`).',
    topicId: 'functional-programming',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'closure-traits-q4',
    type: 'mcq',
    prompt: 'What does the `move` keyword do before a closure?',
    choices: [
      'It forces the closure to be allocated on the heap.',
      "It makes the closure's return value mutable.",
      'It forces the closure to take ownership of all variables it captures.',
      'It allows the closure to be sent across threads.',
    ],
    correctIndex: 2,
    explanation:
      '`move` forces the closure to take ownership of its captured variables. This is often necessary when returning a closure or sending it to another thread.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'closure-traits-q5',
    type: 'predict_output',
    prompt: 'Which trait does the closure `add_to_x` implement?',
    code: 'fn main() {\n    let mut x = 5;\n    let mut add_to_x = |n| x += n;\n    add_to_x(5);\n}',
    expectedStdout: 'It implements FnMut.',
    explanation:
      'The closure needs to modify the captured variable `x`, so it requires a mutable borrow. Therefore, it implements `FnMut` (and `FnOnce`) but not `Fn`.',
    topicId: 'functional-programming',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'iter-q2',
    type: 'mcq',
    prompt: 'What does the `.next()` method on an iterator return?',
    choices: [
      'The next value in the sequence.',
      'A `Result` containing the next value or an error.',
      'An `Option` containing the next value, or `None` if the iteration is finished.',
      'A boolean indicating if there is a next value.',
    ],
    correctIndex: 2,
    explanation:
      'All iterators implement the `Iterator` trait, which has a required `.next()` method that returns `Option<Self::Item>`.',
    topicId: 'functional-programming',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'iter-q3',
    type: 'tf',
    prompt: 'A `for` loop takes ownership of the iterator it loops over.',
    answer: true,
    explanation:
      'The `for` loop calls `.into_iter()` on the collection, and then repeatedly calls `.next()` on the resulting iterator until it returns `None`.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'iter-q4',
    type: 'mcq',
    prompt: 'Which method consumes an iterator and creates a new collection from it?',
    choices: ['.iter()', '.map()', '.next()', '.collect()'],
    correctIndex: 3,
    explanation:
      '`.collect()` is a consuming adaptor that gathers all the items from an iterator into a new collection, like a `Vec` or `HashMap`.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'iter-q5',
    type: 'predict_output',
    prompt: 'What is the final value of `v2`?',
    code: 'fn main() {\n    let v1 = vec![1, 2, 3];\n    let v2: Vec<_> = v1.iter().map(|x| x + 1).collect();\n    println!("{:?}", v2);\n}',
    expectedStdout: '[2, 3, 4]',
    explanation:
      '`.iter()` creates an iterator of references. `.map()` applies the closure to each item, creating a new iterator. `.collect()` gathers the results into a new `Vec`.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'iter-adapt-q2',
    type: 'mcq',
    prompt: 'What is the difference between an iterator adaptor and a consuming adaptor?',
    choices: [
      'There is no difference.',
      'Iterator adaptors return a new iterator, while consuming adaptors consume the iterator and return a different type.',
      'Consuming adaptors are lazy, iterator adaptors are eager.',
      'Iterator adaptors are for collections, consuming adaptors are for primitives.',
    ],
    correctIndex: 1,
    explanation:
      'Adaptors like `.map()` and `.filter()` are lazy and produce new iterators. Consumers like `.sum()`, `.count()`, or `.collect()` are eager and produce a final value.',
    topicId: 'functional-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'iter-adapt-q3',
    type: 'tf',
    prompt: 'The `.filter()` method consumes the iterator.',
    answer: false,
    explanation:
      '`.filter()` is an iterator adaptor. It returns a new iterator that only yields elements for which the given closure returns `true`.',
    topicId: 'functional-programming',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'iter-adapt-q4',
    type: 'predict_output',
    prompt: 'What is the value of `total`?',
    code: 'fn main() {\n    let numbers = vec![1, 2, 3, 4, 5];\n    let total: i32 = numbers.iter().filter(|&&n| n % 2 != 0).map(|&n| n * n).sum();\n    println!("{}", total);\n}',
    expectedStdout: '35',
    explanation:
      'The chain filters for odd numbers (1, 3, 5), maps them to their squares (1, 9, 25), and then sums them up (1 + 9 + 25 = 35).',
    topicId: 'functional-programming',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'iter-adapt-q5',
    type: 'fib',
    prompt:
      'To create your own iterator, you must implement the `Iterator` trait and its required _____ method.',
    acceptableAnswers: ['next', '.next()', 'next()'],
    explanation:
      'The core of any iterator is its `.next()` method, which defines how to produce the next value in the sequence.',
    topicId: 'functional-programming',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'unsafe-q2',
    type: 'mcq',
    prompt: 'Which of these actions requires an `unsafe` block?',
    choices: [
      'Creating a raw pointer.',
      'Dereferencing a raw pointer.',
      'Creating a mutable reference.',
      'Calling a regular function.',
    ],
    correctIndex: 1,
    explanation:
      'While creating raw pointers is safe, dereferencing them (`*const T` or `*mut T`) is unsafe because the compiler cannot guarantee what they point to is valid.',
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'unsafe-q3',
    type: 'tf',
    prompt: 'The borrow checker is active inside an `unsafe` block.',
    answer: true,
    explanation:
      "`unsafe` does not turn off the borrow checker or other safety checks. It only provides access to a few extra 'superpowers' that are not checked by the compiler.",
    topicId: 'system-programming',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'unsafe-q4',
    type: 'mcq',
    prompt: 'What is a primary reason to use `unsafe` Rust?',
    choices: [
      'To make code run faster by disabling safety checks.',
      'To call functions in other languages (FFI).',
      'To make the code easier to write.',
      'To avoid having to handle `Result` types.',
    ],
    correctIndex: 1,
    explanation:
      "Interfacing with C libraries or other languages often involves raw pointers and memory layouts that Rust's safe guarantees cannot verify, requiring an `unsafe` block.",
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'unsafe-q5',
    type: 'fib',
    prompt: 'It is a best practice to keep `unsafe` blocks as _____ as possible.',
    acceptableAnswers: ['small', 'short'],
    explanation:
      'By minimizing the amount of code inside `unsafe` blocks, you limit the surface area for potential memory safety bugs, making it easier to audit and verify correctness.',
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 20,
  },
  {
    id: 'test-q2',
    type: 'mcq',
    prompt: 'How do you run the tests in your project?',
    choices: ['rust test', 'cargo run --test', 'cargo test', 'rustc --test'],
    correctIndex: 2,
    explanation:
      '`cargo test` is the command that compiles your code in test mode and runs all functions annotated with `#[test]`.',
    topicId: 'system-programming',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'test-q3',
    type: 'tf',
    prompt: 'A test passes if the test function completes without panicking.',
    answer: true,
    explanation:
      'The default test harness considers a lack of panic to be a success. You use assertion macros like `assert!`, `assert_eq!`, and `assert_ne!` to cause a panic if a condition is not met.',
    topicId: 'system-programming',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'test-q4',
    type: 'mcq',
    prompt: 'How do you write a test that is expected to panic?',
    choices: [
      '#[test(should_panic)]',
      '#[test]\n#[should_panic]',
      '#[should_panic]\n#[test]',
      'Both B and C are correct.',
    ],
    correctIndex: 3,
    explanation:
      'The `#[should_panic]` attribute can be added to a test function. The test will pass if the function panics and fail if it does not.',
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'test-q5',
    type: 'fib',
    prompt: 'Tests placed in a `tests` directory at the crate root are known as ____ tests.',
    acceptableAnswers: ['integration'],
    explanation:
      'Integration tests are external to your library. They use your crate just like any other consumer would, by importing and using only the public API.',
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'attr-q2',
    type: 'mcq',
    prompt: 'What does the `#[derive(Debug)]` attribute do?',
    choices: [
      'It enables debugging symbols for the struct.',
      'It automatically implements the `Debug` trait, allowing the type to be printed with the `{:?}` formatter.',
      'It marks the code as being in a debug-only state.',
      'It runs the code in a debugger.',
    ],
    correctIndex: 1,
    explanation:
      'The `derive` attribute is a procedural macro that automatically generates code for implementing certain traits, saving a lot of boilerplate.',
    topicId: 'system-programming',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'attr-q3',
    type: 'tf',
    prompt:
      'The `#[cfg(test)]` attribute includes the attributed code only when compiling for tests.',
    answer: true,
    explanation:
      '`cfg` stands for configuration. It allows for conditional compilation based on various flags, such as the target operating system or whether tests are being run.',
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'attr-q4',
    type: 'mcq',
    prompt: 'Which attribute would you use to prevent the compiler from warning about unused code?',
    choices: ['#[no_warn(unused)]', '#[ignore(unused)]', '#[allow(unused)]', '#[suppress(unused)]'],
    correctIndex: 2,
    explanation:
      'The `allow`, `warn`, and `deny` attributes can be used to control how the compiler handles lints (potential issues in code), such as unused variables or functions.',
    topicId: 'system-programming',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'attr-q5',
    type: 'fib',
    prompt:
      'Attributes that apply to the item containing them (like a module) are written with a `!` inside, like `#![allow(dead_code)]`, and are called ____ attributes.',
    acceptableAnswers: ['inner', 'inner attributes'],
    explanation:
      'Inner attributes (`#![...]`) apply to the parent item, while outer attributes (`#[...]`) apply to the item that follows.',
    topicId: 'system-programming',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'path-q3',
    type: 'tf',
    prompt: 'The path `crate::utils::helper` is an absolute path from the crate root.',
    answer: true,
    explanation:
      'Paths starting with `crate` are absolute paths that refer to the root of the current crate, regardless of where they are called from.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'path-q4',
    type: 'mcq',
    prompt: 'In a module `a::b::c`, what does `super::super` refer to?',
    choices: ['The crate root', 'Module `a`', 'Module `b`', 'Module `c`'],
    correctIndex: 1,
    explanation:
      'Each `super` moves one level up in the module hierarchy. From `c`, the first `super` goes to `b`, and the second `super` goes to `a`.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'path-q5',
    type: 'fib',
    prompt: 'The `self` keyword in a path refers to the _____ module.',
    acceptableAnswers: ['current'],
    explanation:
      '`self` is used to refer to the current module, for instance, to disambiguate from an item in an outer scope.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'pkg-q2',
    type: 'tf',
    prompt: 'A single package can contain at most one library crate.',
    answer: true,
    explanation:
      "A package can have zero or one library crate, but it can have multiple binary crates. The library crate's root is `src/lib.rs` by convention.",
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'pkg-q3',
    type: 'mcq',
    prompt: 'What is the conventional location for binary crate roots in a package?',
    choices: [
      'The `src/` directory',
      'The `src/bin/` directory',
      'The `bin/` directory at the root',
      'The `exec/` directory',
    ],
    correctIndex: 1,
    explanation:
      'By convention, each file in the `src/bin` directory is treated as a separate binary crate.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'crate-q2',
    type: 'tf',
    prompt: 'The name of a crate is always the same as the name of its package.',
    answer: false,
    explanation:
      'While they are often the same, the crate name can be configured to be different from the package name in `Cargo.toml`.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mod-q3',
    type: 'mcq',
    prompt: "How can you define a module's content in a separate file?",
    choices: [
      'Using `mod my_module;` and creating a file named `my_module.rs`.',
      'Using `include!("my_module.rs");`',
      'Using `use my_module;`',
      'Rust does this automatically for any `.rs` file in `src/`.',
    ],
    correctIndex: 0,
    explanation:
      "The declaration `mod my_module;` tells the compiler to look for the module's content in either `my_module.rs` or `my_module/mod.rs`.",
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'mod-q4',
    type: 'tf',
    prompt: 'Modules can be nested inside other modules.',
    answer: true,
    explanation: 'Modules form a hierarchy, which helps to organize code and control privacy.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'mod-q5',
    type: 'predict_output',
    prompt:
      'Given `mod a { pub mod b { pub fn c() {} } }`, what is the full path to function `c` from the crate root?',
    code: '// Conceptual question',
    expectedStdout: 'crate::a::b::c',
    explanation:
      'The module path is constructed by joining the module names with `::`, starting from the crate root.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'inline-q3',
    type: 'tf',
    prompt: 'Inline modules are less performant than modules in separate files.',
    answer: false,
    explanation:
      'The way modules are organized (inline vs. file) is purely for code organization and has no impact on the performance of the compiled program.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'inline-q4',
    type: 'mcq',
    prompt: 'When might you prefer an inline module?',
    choices: [
      'For very large modules.',
      "When the module is small and closely related to the parent module's code.",
      'When the module needs to be public.',
      'Never, it is bad practice.',
    ],
    correctIndex: 1,
    explanation:
      'Inline modules are great for grouping a small amount of related functionality (e.g., a struct and its helper functions) without needing to create a new file.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'inline-q5',
    type: 'predict_output',
    prompt: 'How would you call the `run` function from `main`?',
    code: 'mod cluster {\n    pub fn run() {\n        println!("Running!");\n    }\n}\nfn main() {\n    // Call run here\n}',
    expectedStdout: 'cluster::run()',
    explanation:
      "Even though the module is inline, you still access its public items using the module's name and the `::` path separator.",
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scope-q2',
    type: 'mcq',
    prompt: 'What does `pub(crate)` signify?',
    choices: [
      'The item is public only to the parent module.',
      'The item is public, but only if used within a function.',
      'The item is visible to the entire crate, but not outside of it.',
      'The item is public only to other crates that import it.',
    ],
    correctIndex: 2,
    explanation:
      '`pub(crate)` makes an item public within its own crate but keeps it private to external crates, which is useful for exposing internal helper functions.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'scope-q3',
    type: 'tf',
    prompt: 'Struct fields are public by default.',
    answer: false,
    explanation:
      'Like all items, struct fields are private by default. You must mark each field you want to be public with the `pub` keyword.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scope-q4',
    type: 'code_fix',
    prompt: 'Make the `age` field of the `User` struct accessible from `main`.',
    code: 'mod user_mod {\n    pub struct User {\n        age: u32,\n    }\n}\nfn main() {\n    let u = user_mod::User { age: 30 };\n}',
    choices: [
      'pub age: u32,',
      'The code is already correct.',
      'Make the `User` struct private.',
      'Add `pub` before the `main` function.',
    ],
    correctIndex: 0,
    explanation:
      'Even if the struct is public, its fields are private unless explicitly marked with `pub`.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'scope-q5',
    type: 'mcq',
    prompt: 'If an enum is public, what is the visibility of its variants?',
    choices: [
      'They are private by default.',
      'They are all public.',
      'Only the first variant is public.',
      'You must mark each variant with `pub`.',
    ],
    correctIndex: 1,
    explanation:
      'If you make an enum public, all of its variants become public as well. This is different from structs, where fields must be individually made public.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'access-q2',
    type: 'tf',
    prompt: 'A child module can access all items in its parent module, even private ones.',
    answer: false,
    explanation:
      'The privacy rules apply to children as well. A child module can only access the public items of its parent.',
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'access-q3',
    type: 'mcq',
    prompt: 'How can a parent module access an item in a child module?',
    choices: [
      'It cannot; access is only one-way.',
      "By using the child module's name, e.g., `child::item`, provided the item is public.",
      'By using `super::child::item`.',
      'By using `self::child::item`.',
    ],
    correctIndex: 1,
    explanation:
      "A parent can access a child's public items by specifying the path starting with the child's name.",
    topicId: 'functions-modules',
    difficulty: 'beginner',
    points: 10,
  },
  {
    id: 'access-q4',
    type: 'predict_output',
    prompt: 'Will this code compile?',
    code: 'mod outer {\n    fn private_func() {}\n    pub mod inner {\n        pub fn public_func() {\n            super::private_func();\n        }\n    }\n}',
    expectedStdout: 'Yes, this code will compile.',
    explanation:
      'Items in a child module can access private items in their parent module. This rule allows you to expose a simplified public API while hiding implementation details in private functions.',
    topicId: 'functions-modules',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'access-q5',
    type: 'mcq',
    prompt: 'What is the idiomatic way to bring a function into scope?',
    choices: [
      'Bring the function itself into scope: `use std::collections::HashMap::new;`',
      "Bring the function's parent module into scope: `use std::collections;`",
      'Always use the full path without `use`.',
      'Use the glob operator: `use std::collections::*;`',
    ],
    correctIndex: 1,
    explanation:
      'Conventionally, for functions, you bring the parent module into scope and then qualify the function name (`collections::HashMap::new()`). This makes it clear that the function is not locally defined.',
    topicId: 'functions-modules',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-param-q2',
    type: 'tf',
    prompt: '`fn f(x: &impl Trait)` is just syntactic sugar for `fn f<T: Trait>(x: &T)`.',
    answer: true,
    explanation:
      '`impl Trait` is a more concise way to write a trait bound when the full generic syntax is not needed, making the function signature easier to read.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-param-q3',
    type: 'mcq',
    prompt: 'When must you use the full trait bound syntax `<T: Trait>` instead of `impl Trait`?',
    choices: [
      'When you have more than one parameter that uses the same trait.',
      'When the same generic type is needed in multiple places, such as in two parameters or a parameter and the return type.',
      'When the trait is defined in an external crate.',
      'When the function is public.',
    ],
    correctIndex: 1,
    explanation:
      'If you need to enforce that two parameters have the same concrete type, you must use `<T: Trait>`, e.g., `fn f<T: Trait>(x: T, y: T)`. Using `impl Trait` for both would allow them to be different types.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-param-q4',
    type: 'code_fix',
    prompt:
      'Specify that the `item1` and `item2` parameters can be different types as long as they both implement `Display`.',
    code: 'use std::fmt::Display;\nfn print_pair<T: Display>(item1: T, item2: T) {\n    println!("{} and {}", item1, item2);\n}',
    choices: [
      'fn print_pair(item1: impl Display, item2: impl Display)',
      'fn print_pair<T: Display, U: Display>(item1: T, item2: U)',
      'Both A and B are correct.',
      'The original code already does this.',
    ],
    correctIndex: 2,
    explanation:
      'The original code constrains both items to be the same type `T`. Both `impl Trait` and using a second generic parameter `U` allow for different concrete types to be passed.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-return-q2',
    type: 'tf',
    prompt:
      'A function `fn returns_summary() -> impl Summary` can return a `Tweet` on one occasion and a `NewsArticle` on another.',
    answer: false,
    explanation:
      "While the caller doesn't know the concrete type, the function itself must return a single, consistent concrete type for all possible return paths.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-return-q3',
    type: 'mcq',
    prompt: 'What is `Box<dyn Trait>` used for?',
    choices: [
      'To return a trait from a function.',
      'To store a trait in a variable.',
      'To allow for returning different concrete types that implement the same trait from a function.',
      'To make a trait object mutable.',
    ],
    correctIndex: 2,
    explanation:
      '`Box<dyn Trait>` is a trait object that lives on the heap. This allows you to return different types that implement the trait because the `Box` provides a layer of indirection and has a known size.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-return-q4',
    type: 'mcq',
    prompt:
      'What is the performance difference between returning `impl Trait` and `Box<dyn Trait>`?',
    choices: [
      'There is no difference.',
      '`impl Trait` is statically dispatched, while `Box<dyn Trait>` uses dynamic dispatch (vtable), which can have a small runtime cost.',
      '`Box<dyn Trait>` is always faster due to heap allocation.',
      '`impl Trait` requires a heap allocation.',
    ],
    correctIndex: 1,
    explanation:
      '`impl Trait` is resolved at compile time (monomorphization), while `Box<dyn Trait>` uses a virtual method table at runtime to find the correct method, which involves a pointer lookup.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-bound-q2',
    type: 'mcq',
    prompt: 'How do you specify multiple trait bounds for a generic type `T`?',
    choices: [
      '<T: Display + Debug>',
      '<T: Display, Debug>',
      '<T where Display, Debug>',
      '<T: (Display, Debug)>',
    ],
    correctIndex: 0,
    explanation: 'You can specify multiple required traits by separating them with the `+` syntax.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-bound-q3',
    type: 'tf',
    prompt: 'The `where` clause can make complex trait bounds more readable.',
    answer: true,
    explanation:
      'Instead of writing `<T: Display + Clone, U: Debug>`, you can write `where T: Display + Clone, U: Debug` after the function signature, which can be much cleaner.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-bound-q4',
    type: 'code_fix',
    prompt:
      'This function should only accept types that can be cloned and debugged. Add the correct trait bounds.',
    code: 'fn some_function<T>(item: T) {\n    let cloned_item = item.clone();\n    println!("{:?}", cloned_item);\n}',
    choices: [
      'fn some_function<T: Clone + Debug>(item: T)',
      'fn some_function<T: Copy + Debug>(item: T)',
      'fn some_function(item: impl Clone + Debug)',
      'Both A and C are correct.',
    ],
    correctIndex: 3,
    explanation:
      "The function's body requires that the type `T` implements both the `Clone` and `Debug` traits. Both the full generic syntax and the `impl Trait` syntax can be used to express this.",
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-conditionally-q2',
    type: 'mcq',
    prompt: 'What does `impl<T> MyTrait for T where T: OtherTrait` mean?',
    choices: [
      'It implements `MyTrait` for the type `T`.',
      'It implements `MyTrait` only if `T` is also a trait.',
      'It implements `MyTrait` for all types `T` that also implement `OtherTrait`.',
      'It implements `MyTrait` for the `OtherTrait`.',
    ],
    correctIndex: 2,
    explanation:
      "This is a conditional implementation, also known as a blanket implementation. It provides `MyTrait`'s functionality to any type that satisfies the specified bounds.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-conditionally-q3',
    type: 'tf',
    prompt: 'The standard library uses conditional implementations extensively.',
    answer: true,
    explanation:
      'A very common example is `impl<T: Display> ToString for T`, which provides the `.to_string()` method for free to any type that knows how to be formatted as a string.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-conditionally-q4',
    type: 'predict_output',
    prompt: 'Will this code compile? Why or why not?',
    code: 'use std::fmt::Display;\n\nstruct Pair<T> {\n    x: T,\n    y: T,\n}\n\nimpl<T: Display> ToString for Pair<T> {\n    fn to_string(&self) -> String {\n        format!("({}, {})", self.x, self.y)\n    }\n}\n// main function is omitted',
    expectedStdout: 'No, this will not compile.',
    explanation:
      'This will fail because of the orphan rule. Both `ToString` and `Pair<T>` are defined in your local crate, but the implementation is too broad. To fix this, you would typically implement `Display` for `Pair<T>` first, then you would get `ToString` for free.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q2',
    type: 'mcq',
    prompt: 'Which of these is a valid blanket implementation?',
    choices: [
      '`impl<T> ToString for T`',
      '`impl<T: Display> ToString for T`',
      '`impl ToString for Display`',
      '`impl ToString for all`',
    ],
    correctIndex: 1,
    explanation:
      'This is a real implementation from the standard library. It says: for any type `T` that implements `Display`, we will automatically provide an implementation of `ToString`.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'blanket-q3',
    type: 'tf',
    prompt: 'You can create conflicting blanket implementations in Rust.',
    answer: false,
    explanation:
      'The compiler will prevent you from creating blanket implementations that could potentially overlap, ensuring that there is always a single, unambiguous implementation for any given type.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q4',
    type: 'fib',
    prompt:
      'Blanket implementations are a powerful tool for extending the functionality of many types at once, but are constrained by the ____ rule.',
    acceptableAnswers: ['orphan'],
    explanation:
      'The orphan rule prevents you from implementing a foreign trait for a foreign type, which also applies to blanket implementations.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'panic-q2',
    type: 'tf',
    prompt:
      'By default, a `panic!` will unwind the stack, running destructors of all objects on the stack.',
    answer: true,
    explanation:
      'This is the default behavior. It ensures that memory is cleaned up even during a panic. You can configure Cargo to abort on panic instead, which is faster but does not run destructors.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'panic-q3',
    type: 'predict_output',
    prompt: 'What happens when you run this code?',
    code: 'fn main() {\n    let v = vec![1, 2, 3];\n    v[99];\n}',
    expectedStdout: 'The program panics.',
    explanation:
      'Accessing a vector with an index that is out of bounds is a common cause of panics. Rust chooses to panic here to prevent memory safety violations.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'panic-q4',
    type: 'mcq',
    prompt: 'Which macro is similar to `panic!` but allows a custom message?',
    choices: ['`assert!`', '`unreachable!`', '`todo!`', 'All of the above'],
    correctIndex: 3,
    explanation:
      '`assert!` panics if its condition is false. `unreachable!` panics because that part of the code should never be executed. `todo!` panics as a placeholder for unimplemented code. All can include custom messages.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'panic-q5',
    type: 'code_fix',
    prompt: 'How do you cause a panic with the message "Game over"?',
    code: '// Your code here',
    choices: [
      'panic!("Game over");',
      'panic!(); println!("Game over");',
      'Result::Err("Game over");',
      'assert!(false, "Game over");',
    ],
    correctIndex: 0,
    explanation:
      'The `panic!` macro can be called with a format string, just like `println!`, to provide a descriptive error message when the program panics.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-param-q2',
    type: 'tf',
    prompt: '`fn f(x: &impl Trait)` is just syntactic sugar for `fn f<T: Trait>(x: &T)`.',
    answer: true,
    explanation:
      '`impl Trait` is a more concise way to write a trait bound when the full generic syntax is not needed, making the function signature easier to read.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-param-q3',
    type: 'mcq',
    prompt: 'When must you use the full trait bound syntax `<T: Trait>` instead of `impl Trait`?',
    choices: [
      'When you have more than one parameter that uses the same trait.',
      'When the same generic type is needed in multiple places, such as in two parameters or a parameter and the return type.',
      'When the trait is defined in an external crate.',
      'When the function is public.',
    ],
    correctIndex: 1,
    explanation:
      'If you need to enforce that two parameters have the same concrete type, you must use `<T: Trait>`, e.g., `fn f<T: Trait>(x: T, y: T)`. Using `impl Trait` for both would allow them to be different types.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-param-q4',
    type: 'code_fix',
    prompt:
      'Specify that the `item1` and `item2` parameters can be different types as long as they both implement `Display`.',
    code: 'use std::fmt::Display;\nfn print_pair<T: Display>(item1: T, item2: T) {\n    println!("{} and {}", item1, item2);\n}',
    choices: [
      'fn print_pair(item1: impl Display, item2: impl Display)',
      'fn print_pair<T: Display, U: Display>(item1: T, item2: U)',
      'Both A and B are correct.',
      'The original code already does this.',
    ],
    correctIndex: 2,
    explanation:
      'The original code constrains both items to be the same type `T`. Both `impl Trait` and using a second generic parameter `U` allow for different concrete types to be passed.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-param-q5',
    type: 'mcq',
    prompt: 'Which syntax is used to require multiple traits on a parameter?',
    choices: [
      'item: impl Summary, Display',
      'item: impl Summary + Display',
      'item: impl<Summary, Display>',
      'item: impl Summary & Display',
    ],
    correctIndex: 1,
    explanation:
      'The `+` syntax is used to combine multiple trait bounds, requiring the type to implement all of the specified traits.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-return-q2',
    type: 'tf',
    prompt:
      'A function `fn returns_summary() -> impl Summary` can return a `Tweet` on one occasion and a `NewsArticle` on another within the same function body.',
    answer: false,
    explanation:
      "While the caller doesn't know the concrete type, the function itself must return a single, consistent concrete type for all possible return paths.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-return-q3',
    type: 'mcq',
    prompt: 'What is `Box<dyn Trait>` used for?',
    choices: [
      'To return a trait from a function.',
      'To store a trait in a variable.',
      'To allow for returning different concrete types that implement the same trait from a function.',
      'To make a trait object mutable.',
    ],
    correctIndex: 2,
    explanation:
      '`Box<dyn Trait>` is a trait object that lives on the heap. This allows you to return different types that implement the trait because the `Box` provides a layer of indirection and has a known size.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-return-q4',
    type: 'mcq',
    prompt:
      'What is the performance difference between returning `impl Trait` and `Box<dyn Trait>`?',
    choices: [
      'There is no difference.',
      '`impl Trait` is statically dispatched, while `Box<dyn Trait>` uses dynamic dispatch (vtable), which can have a small runtime cost.',
      '`Box<dyn Trait>` is always faster due to heap allocation.',
      '`impl Trait` requires a heap allocation.',
    ],
    correctIndex: 1,
    explanation:
      '`impl Trait` is resolved at compile time (monomorphization), while `Box<dyn Trait>` uses a virtual method table at runtime to find the correct method, which involves a pointer lookup.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-return-q5',
    type: 'fib',
    prompt: 'When returning `impl Trait`, the actual concrete type is determined at _____ time.',
    acceptableAnswers: ['compile'],
    explanation:
      'The compiler knows the exact type being returned and can perform optimizations, even though the caller only sees the trait.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-bound-q2',
    type: 'mcq',
    prompt: 'How do you specify multiple trait bounds for a generic type `T`?',
    choices: [
      '<T: Display + Debug>',
      '<T: Display, Debug>',
      '<T where Display, Debug>',
      '<T: (Display, Debug)>',
    ],
    correctIndex: 0,
    explanation: 'You can specify multiple required traits by separating them with the `+` syntax.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-bound-q3',
    type: 'tf',
    prompt: 'The `where` clause can make complex trait bounds more readable.',
    answer: true,
    explanation:
      'Instead of writing `<T: Display + Clone, U: Debug>`, you can write `where T: Display + Clone, U: Debug` after the function signature, which can be much cleaner.',
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'trait-bound-q4',
    type: 'code_fix',
    prompt:
      'This function should only accept types that can be cloned and debugged. Add the correct trait bounds.',
    code: 'fn some_function<T>(item: T) {\n    let cloned_item = item.clone();\n    println!("{:?}", cloned_item);\n}',
    choices: [
      'fn some_function<T: Clone + Debug>(item: T)',
      'fn some_function<T: Copy + Debug>(item: T)',
      'fn some_function(item: impl Clone + Debug)',
      'Both A and C are correct.',
    ],
    correctIndex: 3,
    explanation:
      "The function's body requires that the type `T` implements both the `Clone` and `Debug` traits. Both the full generic syntax and the `impl Trait` syntax can be used to express this.",
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-bound-q5',
    type: 'fib',
    prompt:
      'A trait that does not require the type to be `Sized` must use the bound `?Sized`, which is known as an _____-out.',
    acceptableAnswers: ['opt'],
    explanation:
      'The `?Sized` trait bound opts out of the default `Sized` requirement for generic types, allowing them to work with dynamically sized types (DSTs).',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-conditionally-q2',
    type: 'mcq',
    prompt: 'What does `impl<T> MyTrait for T where T: OtherTrait` mean?',
    choices: [
      'It implements `MyTrait` for the type `T`.',
      'It implements `MyTrait` only if `T` is also a trait.',
      'It implements `MyTrait` for all types `T` that also implement `OtherTrait`.',
      'It implements `MyTrait` for the `OtherTrait`.',
    ],
    correctIndex: 2,
    explanation:
      "This is a conditional implementation, also known as a blanket implementation. It provides `MyTrait`'s functionality to any type that satisfies the specified bounds.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-conditionally-q3',
    type: 'tf',
    prompt: 'The standard library uses conditional implementations extensively.',
    answer: true,
    explanation:
      'A very common example is `impl<T: Display> ToString for T`, which provides the `.to_string()` method for free to any type that knows how to be formatted as a string.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'trait-conditionally-q4',
    type: 'predict_output',
    prompt: 'Will this code compile? Why or why not?',
    code: 'use std::fmt::Display;\n\nstruct Pair<T> {\n    x: T,\n    y: T,\n}\n\nimpl<T: Display> ToString for Pair<T> {\n    fn to_string(&self) -> String {\n        format!("({}, {})", self.x, self.y)\n    }\n}\n// main function is omitted',
    expectedStdout: 'No, this will not compile.',
    explanation:
      'This will fail because of the orphan rule. Both `ToString` and `Pair<T>` are defined in your local crate, but the implementation is too broad. To fix this, you would typically implement `Display` for `Pair<T>` first, then you would get `ToString` for free.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'trait-conditionally-q5',
    type: 'mcq',
    prompt: 'What is the primary reason for using conditional trait implementations?',
    choices: [
      'To improve compile times.',
      'To provide specialized behavior for generic types that meet certain criteria.',
      'To allow for unsafe operations.',
      'To make traits public.',
    ],
    correctIndex: 1,
    explanation:
      'It allows a generic type to have more functionality only when its type parameters have that functionality too. For example, a `Pair<T>` might only be comparable if `T` is comparable.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'blanket-q2',
    type: 'mcq',
    prompt: 'Which of these is a valid blanket implementation?',
    choices: [
      '`impl<T> ToString for T`',
      '`impl<T: Display> ToString for T`',
      '`impl ToString for Display`',
      '`impl ToString for all`',
    ],
    correctIndex: 1,
    explanation:
      'This is a real implementation from the standard library. It says: for any type `T` that implements `Display`, we will automatically provide an implementation of `ToString`.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'blanket-q3',
    type: 'tf',
    prompt: 'You can create conflicting blanket implementations in Rust.',
    answer: false,
    explanation:
      'The compiler will prevent you from creating blanket implementations that could potentially overlap, ensuring that there is always a single, unambiguous implementation for any given type.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q4',
    type: 'fib',
    prompt:
      'Blanket implementations are a powerful tool for extending the functionality of many types at once, but are constrained by the ____ rule.',
    acceptableAnswers: ['orphan'],
    explanation:
      'The orphan rule prevents you from implementing a foreign trait for a foreign type, which also applies to blanket implementations.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'blanket-q5',
    type: 'mcq',
    prompt:
      'What is the benefit of a blanket implementation like `impl<T: Display> ToString for T`?',
    choices: [
      'It reduces code duplication by providing a consistent conversion for any displayable type.',
      'It improves runtime performance of string conversions.',
      'It allows `Display` to be used in multiple threads.',
      'It forces all types to implement the `Display` trait.',
    ],
    correctIndex: 0,
    explanation:
      "You don't need to manually implement `ToString` if your type already implements `Display`; the blanket implementation provides it for you, ensuring consistency and saving effort.",
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-q5',
    type: 'fib',
    prompt:
      'The process by which the compiler automatically assigns lifetimes without explicit annotations is called lifetime ____.',
    acceptableAnswers: ['elision'],
    explanation:
      'The compiler follows a set of rules, known as elision rules, to infer lifetimes in common, unambiguous cases, which reduces the amount of annotation needed.',
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-ann-q2',
    type: 'tf',
    prompt: 'Every reference in Rust has a lifetime.',
    answer: true,
    explanation:
      "Although you don't always have to write them, every reference has a lifetime that the borrow checker analyzes. Most of the time, the compiler can infer it for you.",
    topicId: 'traits-generics',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'life-ann-q3',
    type: 'mcq',
    prompt: 'In which of these cases are explicit lifetime annotations most likely required?',
    choices: [
      'A function that takes one reference and returns a value.',
      'A function that takes one reference and returns that same reference.',
      'A struct that holds a reference to data owned by another object.',
      "A simple `for` loop over a vector's items.",
    ],
    correctIndex: 2,
    explanation:
      "When a struct holds a reference, you must explicitly annotate its lifetime (e.g., `struct Excerpt<'a> { part: &'a str; }`) so the compiler can ensure the struct doesn't outlive the data it refers to.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'life-ann-q4',
    type: 'code_fix',
    prompt: 'Add the correct lifetime annotations to make this function compile.',
    code: "fn get_first<'a>(x: &'a str, y: &str) -> &'a str {\n    x\n}",
    choices: [
      'The code is already correct.',
      "fn get_first<'a, 'b>(x: &'a str, y: &'b str) -> &'a str",
      'fn get_first(x: &str, y: &str) -> &str',
      'Both A and B are correct.',
    ],
    correctIndex: 3,
    explanation:
      'The compiler can infer the lifetimes here using elision rules. However, being explicit as in choice B is also correct and shows the relationship: the output lifetime is tied only to the lifetime of `x`.',
    topicId: 'traits-generics',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'life-ann-q5',
    type: 'mcq',
    prompt: "What does a lifetime bound like `<'a: 'b>` mean?",
    choices: [
      "Lifetime `'a` is shorter than `'b`.",
      "Lifetime `'a` is equal to `'b`.",
      "Lifetime `'a` must outlive (be at least as long as) lifetime `'b`.",
      'This syntax is invalid in Rust.',
    ],
    correctIndex: 2,
    explanation:
      "This is a lifetime bound, which constrains one lifetime to be valid for at least as long as another. It's an advanced feature used in complex generic code.",
    topicId: 'traits-generics',
    difficulty: 'advanced',
    points: 20,
  },
  {
    id: 'panic-q2',
    type: 'tf',
    prompt:
      'By default, a `panic!` will unwind the stack, running destructors of all objects on the stack.',
    answer: true,
    explanation:
      'This is the default behavior. It ensures that memory is cleaned up even during a panic. You can configure Cargo to abort on panic instead, which is faster but does not run destructors.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'panic-q3',
    type: 'predict_output',
    prompt: 'What happens when you run this code?',
    code: 'fn main() {\n    let v = vec![1, 2, 3];\n    v[99];\n}',
    expectedStdout: 'The program panics.',
    explanation:
      'Accessing a vector with an index that is out of bounds is a common cause of panics. Rust chooses to panic here to prevent memory safety violations.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
  {
    id: 'panic-q4',
    type: 'mcq',
    prompt: 'Which macro is similar to `panic!` but panics only if a condition is false?',
    choices: ['`assert!`', '`unreachable!`', '`todo!`', '`eprintln!`'],
    correctIndex: 0,
    explanation:
      '`assert!` is used to guarantee a condition is true at a certain point in the code. If the condition is false, it panics. It is often used in tests.',
    topicId: 'error-handling',
    difficulty: 'intermediate',
    points: 15,
  },
  {
    id: 'panic-q5',
    type: 'code_fix',
    prompt: 'How do you cause a panic with the message "Game over"?',
    code: '// Your code here',
    choices: [
      'panic!("Game over");',
      'panic!(); println!("Game over");',
      'Result::Err("Game over");',
      'assert!(false, "Game over");',
    ],
    correctIndex: 0,
    explanation:
      'The `panic!` macro can be called with a format string, just like `println!`, to provide a descriptive error message when the program panics.',
    topicId: 'error-handling',
    difficulty: 'beginner',
    points: 15,
  },
];
