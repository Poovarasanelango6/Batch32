//Variables & Data Types (Questions 1-8)

//1.What is the difference between var, let, and const?
// var — old way. Function-scoped, can be redeclared, hoisted as undefined. Avoid it.
// let — block-scoped, can be reassigned. Use for values that change.
// const — block-scoped, can't be reassigned. Use by default.

// var personName = "Poovarasan";
// personName = "Surya"
// console.log(personName);

// let count = 0;
// count = 1; // 
// console.log(count);

// const studentName = "Poovarasan";
// studentName = "Elangovan"; // error
// console.log(count); //Uncaught TypeError: Assignment to constant variable.


// //2.Can you re-declare a variable with var? What about let and const?

// //var — can be redeclared freely, even with a new value:
// var x = 1;
// var x = 2; // fine, no error
// console.log(x); // 2

// //let — cannot be redeclared in the same scope:
// // let y = 1;
// // let y = 2; // SyntaxError: 'y' has already been declared

// //const — same as let, cannot be redeclared:
// // const z = 1;
// // const z = 2; // SyntaxError: 'z' has already been declared

// //3.What is the output of this code?
// var x = 5;
// let y = 10;
// const z = 15;
// x = 20;   
// y = 25;   
// z = 30;  // TypeError: Assignment to constant variable.
// console.log(x, y, z); // never runs

// //4.What is the difference between declaring and initializing a variable?
// //Declaring = creating the variable (giving it a name), but no value yet.
//     let age;
// //Initializing = giving it its first value.
//     age = 25;
  
// //5.What will be the output
// let a;
// console.log(a);  // undefined

// //6.Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before the code runs — so you can sometimes use them before the line where they're written.
// console.log(x); // undefined 
// var x = 5;
// console.log(x); // 5

// //7.What is the difference between null and undefined?
// //In JavaScript, both represent "no value," but they're used differently:
// //undefined
// let x;
// console.log(x); // undefined

// function foo() {}
// console.log(foo()); // undefined

// const obj = {};
// console.log(obj.missing); // undefined

// //8.What will be the output?
// console.log(typeof null); // "object"
// console.log(typeof undefined); // "undefined"
// console.log(typeof []); // "object"
// console.log(typeof {}); // "object"

// //Operators (Questions 9-14)
// //9. What is the difference between == and ===?
// //=== (strict): Checks value AND type. No conversion.
// // 5 === '5'  // false (number vs string)
// // 5 === 5    // true

// //== (loose): Converts types first, then checks value.
// // 5 == '5'   // true (string '5' becomes number 5)

// //10.What is the difference between ++i and i++?
// // ++i (pre-increment) and i++ (post-increment) both increase i by 1, but they differ in what value the expression returns.
// // ++i (pre-increment)
// // Increments i first, then returns the new value.
// // let i = 5;
// // console.log(++i); // 6 (i is incremented, then returned)
// // console.log(i);   // 6

// //i++ (post-increment)
// //Returns the current value first, then increments i.
// // let i = 5;
// // console.log(i++); // 5 (current value returned, then i becomes 6)
// // console.log(i);   // 6

// //11.What will be the output?
// // let x = 10;
// // let y = "5";
// // console.log(x + y); //105
// // console.log(x - y); //5
// // console.log(x * y); //50
// // console.log(x / y); //2

// //12.What are logical operators? Explain with examples.
// //Logical operators combine or manipulate Boolean (true/false) values to produce a Boolean result. Most languages have three core ones: AND, OR, and NOT.

// //Example:
// //1. AND (&&)
// console.log(true && true);   // true
// console.log(true && false);  // false

// //2.OR (||)
// console.log(true || false);  // true
// console.log(false || false); // false

// //3.NOT (!)
// console.log(!true);  // false
// console.log(!false); // true
// console.log(!(5 > 2)); // false, since 5 > 2 is true

// //13. What will be the output?
// console.log(5 > 3 && 10 > 5); //true
// console.log(5 > 10 || 10 > 5); //true
// console.log(!(5 > 3)); //false

// //14.What is the ternary operator? Give an example.
// //The ternary operator is a shorthand way of writing a simple if...else statement in a single line. It's called "ternary" because it takes three operands: a condition, a value if true, and a value if false.
// //Example:
// let age = 20;
// let validStatus = age >= 18 ? "Adult" : "Minor";
// console.log(validStatus); // "Adult"

//Type Casting (Questions 15-17)
//15.What is the difference between implicit and explicit type casting?
//Implicit = JavaScript converts the type automatically, without you asking.
//"5" + 3        // "53" — number silently becomes a string
//Explicit = You convert the type yourself, on purpose.
//Number("5") + 3   // 8 — you told it to convert

// //16.What will be the output?
// console.log(Number("123")); //123
// console.log(Number("hello")); //NaN
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Boolean(0)); //false
// console.log(Boolean("hello")); //true

// //17.What is NaN? Give an example.
// //NaN stands for "Not a Number." It's a special value in JavaScript that represents the result of an invalid or undefined numeric operation.

// let result = "hello" * 5;
// console.log(result); // NaN

//Conditional Statements (Questions 18-21)
// //18.What is the difference between if-else and switch?
// //if-else = checks conditions one by one, top to bottom. Good for ranges, complex conditions, or comparisons.
// let age = 20;
// if (age < 13) {
//   console.log("Child");
// } else if (age < 20) {
//   console.log("Teenager");
// } else {
//   console.log("Adult");
// }

// //switch = checks one value against multiple exact matches. Good when you're comparing a single variable to many possible fixed values.
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Unknown day");
// }

// //19. What will be the output?
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

//Ans: Adult

// //20.What is nested if? Give an example.
// //A nested if is an if statement placed inside another if (or else) block — basically, a condition inside a condition
// let age = 25;
// let hasLicense = true;

// if (age >= 18) {
//   if (hasLicense) {
//     console.log("You can drive.");
//   } else {
//     console.log("You need a license first.");
//   }
// } else {
//   console.log("You are too young to drive.");
// }

// //21. Write a program to check if a number is even or odd using ternary operator.
// let number = 7;
// let result = (number % 2 === 0) ? "Even" : "Odd";
// console.log(result); 

// //Loops (Questions 22-25)
// //22.What is the difference between while and do-while?
// //while = checks the condition first, then runs the block. If the condition is false to begin with, the block never runs.
// let i = 5;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// //Nothing is printed — condition is false from the start

// //do-while = runs the block first, then checks the condition. So it always executes at least once, even if the condition is false.
// // let i = 5;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i < 5);

// //23. What will be the output?
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// //Ans:1 2 3 4 5

// //24.What is the difference between for-of and for-in?
// //for-in = iterates over the keys/indexes of an object (or array). Best for objects.
// const person = { name: "Ravi", age: 28 };
// for (let key in person) {
//   console.log(key); // "name", "age"
// }
// //for-of = iterates over the values of an iterable (arrays, strings, maps, sets, etc.). Best for arrays.
// const colors = ["red", "green", "blue"];
// for (let value of colors) {
//   console.log(value); // "red", "green", "blue"
// }

// //25.Write a program to find sum of numbers from 1 to 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// //26.What is the difference between slice and splice?
// //slice and splice are both array methods in JavaScript, but they behave very differently:
// //slice():
// // Does not modify the original array (non-mutating)
// // Returns a new array containing the selected portion
// // Syntax: array.slice(start, end) (end is exclusive)

// // const arr = [1, 2, 3, 4, 5];
// // const result = arr.slice(1, 3);

// // console.log(result); // [2, 3]
// // console.log(arr);    // [1, 2, 3, 4, 5] — unchanged

// //splice()
// // Modifies the original array (mutating)
// // Can remove, replace, or insert elements
// // Returns an array of the removed elements
// // Syntax: array.splice(start, deleteCount, item1, item2)

// const arr = [1, 2, 3, 4, 5];
// const removed = arr.splice(1, 2); // remove 2 elements starting at index 1

// console.log(removed); // [2, 3]
// console.log(arr);     // [1, 4, 5] — original array changed!

// //27.What will be the output?
// let arr = [1, 2, 3];
// arr.push(4);      // [1, 2, 3, 4]  → adds 4 to the end
// arr.pop();         // [1, 2, 3]     → removes last element (4)
// arr.unshift(0);    // [0, 1, 2, 3]  → adds 0 to the beginning
// arr.shift();       // [1, 2, 3]     → removes first element (0)
// console.log(arr);


// //Functions (Questions 28-30)
// //28.What is the difference between function declaration and function expression?
// //Function Declaration
// // Starts with the function keyword, followed by a name
// // Hoisted — you can call it before it's defined in the code
// function greet() {
//   console.log("Hello!");
// }
// greet();

// //Function Expression

// // A function is assigned to a variable (or used inline)
// // Not hoisted the same way — only the variable declaration is hoisted, not the function body

// const greet = function() {
//   console.log("Hello!");    
// };

// greet(); // Error: Cannot access 'greet' before initialization

// //29.What is an arrow function? Give an example.
// //An arrow function is a shorter syntax for writing functions in JavaScript, introduced in ES6. It uses the => (arrow) syntax instead of the function keyword.

// // Arrow function equivalent
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3)); // 5

// //30.What will be the output?   
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message); //Hello
