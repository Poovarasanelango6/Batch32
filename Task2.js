// Task 1 — var, let, const
var studentName = "Poovarasan.E";
let studentAge = 30;
const collegeName = "SNS College of Engineering";

//1.Print all three values.
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("College:", collegeName);

//2.Change the var value.
studentName = "Surya";
console.log("After change, Name:", studentName);

//3.Change the let value
studentAge = 23;
console.log("After change, Age:", studentAge);

// //4.Try changing the const value and observe the error.
// collegeName = "Stanford"; 

//5.Try redeclaring the var variable.
studentName = "JaneSmith";
console.log(studentName);

//6.Try redeclaring the let variable and observe the error.
studentAge = 25; // redeclaring
console.log(studentAge);

// Task 2 — User Information
let personName = prompt("Enter your name:");
let personAge = prompt("Enter your age:");
let personCity = prompt("Enter your city:");

console.log("Name:", personName);
console.log("Age:", personAge);
console.log("City:", personCity);

//Task 3 — Welcome Message
let visitorName = prompt("Enter your name:");
alert("Welcome " + visitorName + "!");

//Task 4 — Age Calculator
let birthYear = Number(prompt("Enter your birth year:"));
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);

//Task 5 — Identify Data Types
let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(typeof value1); // string
console.log(typeof value2); // number
console.log(typeof value3); // number
console.log(typeof value4); // boolean
console.log(typeof value5); // boolean
console.log(typeof value6); // undefined
console.log(typeof value7); // object

//Task 6 — Student Data
let student = {
  name: "Poovarasan.E",
  age: 30,
  city: "Chennai",
  qualification: "B.Tech(IT)",
  isStudent: true
};
console.log(student);           
console.log(student.name);      
console.log(student.age);       
console.log(student.qualification); 
console.log(student.isStudent); 

//Task 7 — Fruit Array
let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

console.log(fruits[0]);
console.log(fruits[1]);    
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

//Arithmetic Operator Tasks
//Task 8 — Basic Calculator
let a = 20;
let b = 5;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);  
console.log(a ** b);

//Task 9 — Shopping Bill
let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;
console.log("Total =", total);

//Task 10 — Simple Marks Calculation
let tamil = 80;
let english = 75;
let maths = 90;

let totals = tamil + english + maths;
let average = total / 3;

console.log("Total marks =", totals);
console.log("Average marks =", average);

//Task 11 — Post Increment
let a11 = 10;
let b11 = a11++;
console.log("a:", a11); 
console.log("b:", b11); 

//TASK 12 — Pre Increment
let a12 = 10;
let b12 = ++a12;
console.log("a:", a12); 
console.log("b:", b12);

//Task 13 — Post Decrement
let a13 = 20;
let b13 = a13--;
console.log("a:", a13); 
console.log("b:", b13); 

//Task 14 — Pre Decrement
let a14 = 20;
let b14 = --a14;
console.log("a:", a14); 
console.log("b:", b14); 

//Task 15 — Find the Final Values
let a15 = 5;
let b15 = a15++;
let c15 = ++a15;
let d15 = b15--;

console.log("a:", a15); 
console.log("b:", b15); 
console.log("c:", c15); 
console.log("d:", d15); 

//Task 16 — Assignment Operators

let num = 10;

num += 5;
console.log("After += 5:", num); // 15

num -= 3;
console.log("After -= 3:", num); // 12

num *= 2;
console.log("After *= 2:", num); // 24

num /= 4;
console.log("After /= 4:", num); // 6

num %= 4;
console.log("After %= 4:", num); // 2

num **= 3;
console.log("After **= 3:", num); // 8

//Task 17 — Mini Student Profile

//Variables
let profileName = "Poovarasan.E";
let profileAge = 30;
let profileCity = "Coimbatore";
const profileCollege = "SNS College of Engineering";

//Array of favorite subjects
const favoriteSubjects = ["Maths", "Science", "English", "Computer Science", "Social"];

//Object
const studentProfile = {
  name: profileName,
  age: profileAge,
  city: profileCity,
  subjects: favoriteSubjects,
  isStudent: true
};

console.log("1. Student name:", studentProfile.name);
console.log("2. Student age:", studentProfile.age);
console.log("3. City:", studentProfile.city);
console.log("4. First subject:", studentProfile.subjects[0]);
console.log("5. Last subject:", studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log("6. Total subjects:", studentProfile.subjects.length);
console.log("7. Complete object:", studentProfile);

//Final Challenge — User + Calculator
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
num1 = Number(num1);
num2 = Number(num2);

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);
