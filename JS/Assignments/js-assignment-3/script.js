// Js: Text Formatting
document.write("<div style='text-align: center; font-family: Calibri, sans-serif;'>"); 

// JS Assignment 3 Starts Here!
document.write("<h1>JavaScript Assignment 3</h1>");
document.write("<h3>Student Project: Operators & Expressions</h3>");
document.write("<p><em>All detailed calculations have been printed to the browser console (Press F12 to view).</em></p>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Step 1: Arithmetic Operators
console.log("Step 1: Arithmetic Operators");
let a = 10;
let b = 20;

console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus/Remainder (a % b):", a % b);

// Displaying Step 1 Values on Webpage
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h4 style='color: #0f766e; margin-bottom: 10px;'>Step 1: Arithmetic Operators</h4>");
document.write("<p style='margin: 10px 0;'>Variables: | <strong>A = " + a + "</strong> | <strong>B = " + b + "</strong> | </p>");
document.write("<p style='margin: 10px 0;'>Addition Result: <strong>" + (a + b) + "</strong> | Modulus Result: <strong>" + (a % b) + "</strong></p>");
document.write("</div>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Step 2: Assignment Operators
console.log("Step 2: Assignment Operators");
const initialNum = Number(prompt("Enter a Number"));
let num = initialNum;
console.log("Starting Value:", initialNum);

num += 25; 
console.log("After += 25:", num);

num -= 15; 
console.log("After -= 15:", num);

num *= 10;
console.log("After *= 10:", num);

num /= 5;
console.log("After /= 5:", num);

console.log("Ending Value:", num);

// Displaying Step 2 Values on Webpage
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h4 style='color: #0f766e; margin-bottom: 5px;'>Step 2: Assignment Operators</h4>");
document.write("<p style='margin: 10px 0;'>Starting Value from Prompt: <strong>" + initialNum + "</strong></p>");
document.write("<p style='margin: 10px 0;'>Final Ending Value: <strong>" + num + "</strong></p>");
document.write("</div>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Step 3: Comparison Operators
console.log("Step 3: Comparison Operators");
let x = 20;
let y = 15;
console.log(`Values: ${x}, ${y}`);

console.log("Is x equal to y? (x == y):", x == y);
console.log("Is x strictly equal to y? (x === y):", x === y);
console.log("Is x not equal to y? (x != y):", x != y);
console.log("Is x greater than y? (x > y):", x > y);
console.log("Is x less than y? (x < y):", x < y);
console.log("Is x greater than or equal to y? (x >= y):", x >= y);
console.log("Is x less than or equal to y? (x <= y):", x <= y);

// Step 4: Expressions
console.log("Step 4: Expressions");

// Example 1: Total Price Calculation
let price = 250;
let quantity = 5;

let totalPrice = price * quantity;
console.log("The Total Price at Checkout Will Be: Rs.", totalPrice);

// Example 2: Final Score Calculation
let marks1 = 85;
let marks2 = 90;
let marks3 = 95;
let marks4 = 90;
let marks5 = 95;
let marks6 = 85;

let finalScore = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
console.log("The Final Score of the Student Will Be:", finalScore);

// Displaying Step 4 Values on Webpage
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h4 style='color: #0f766e; margin-bottom: 5px;'>Final Step: Expressions</h4>");
document.write("<p style='margin: 10px 0;'>Checkout Total: <strong>Rs. " + totalPrice + "</strong></p>");
document.write("<p style='margin: 10px 0;'>Student Final Score: <strong>" + finalScore + " Marks </strong></p>");
document.write("</div>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Practice Task
console.log("Practice Task");
let actualNum = 100
let stringNum = "100"

// Comparing String and Number Values With Eachother
console.log("Comparing Values Using Loose Equality (==):", actualNum == stringNum);
console.log("Comparing Values Using Strict Equality (===):", actualNum === stringNum);

// Displaying Practice Task Values on Webpage
document.write("<div style='margin-bottom: 10px;'>");
document.write("<h4 style='color: #0f766e; margin-bottom: 10px;'>Practice Task: Equality Comparison</h4>");
document.write("<p style='margin: 5px 0;'>Comparing Values Using Loose Equality (==): <strong>" + (actualNum == stringNum) + "</strong></p>");
document.write("<p style='margin: 5px 0;'>Comparing Values Using Strict Equality (===): <strong>" + (actualNum === stringNum) + "</strong></p>");
document.write("</div>");
// document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Closing the Container: Div
document.write("</div>");