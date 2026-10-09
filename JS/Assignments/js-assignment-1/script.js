// Show "Hello World" as a pop-up alert box
alert("Greetings, Click Next to Proceed");

// Show "Hello World" in the browser console
console.log("Hello World");

// Using Different Variables for Storing Data
var Student_Name = "Muhammad Noman";
var Student_Age = 18
let Course_Name = "Modern Web Development";
let Batch_Number = 6
const Institute_Name = "Saylani Mass IT Training";

// Displaying Variable Data
console.log("Student Name: " + Student_Name);
console.log("Student Age: " + Student_Age + " Years");
console.log("Course Name: " + Course_Name);
console.log("Batch Number: " + Batch_Number);
console.log("Institute Name: " + Institute_Name);

// This Method Requires No Extra Spaces ',' Replaces '+'
console.log("Student Name:", Student_Name);
console.log("Student Age:", Student_Age, "Years");
console.log("Course Name:", Course_Name);
console.log("Batch Number:", Batch_Number);
console.log("Institute Name:", Institute_Name);

// Recommended Method
console.log(`Student Name: ${Student_Name}`);
console.log(`Student Age: ${Student_Age} Years`);
console.log(`Course Name: ${Course_Name}`);
console.log(`Batch Number: ${Batch_Number}`);
console.log(`Institute Name: ${Institute_Name}`);

// Conditional Statements Can Help Admin Find Enrolled Students
let Enter_Name = prompt("Enter Your Name:")
if (Enter_Name === Student_Name) {
    console.log("Student Enrolled");
}
else {
    console.log("Student Not Enrolled");
}

// Displaying Data on Actual Webpage
if (Enter_Name === Student_Name) {
document.write("<h1> Welcome to " + Institute_Name + "!</h1>");

document.write("<h2> Student Information </h2>");
document.write("Student Name: " + Student_Name + "<br/>");
document.write("Student Age: " + Student_Age + " Years <br/>");
document.write("Course Name: " + Course_Name + "<br/>");
document.write("Batch Number: " + Batch_Number + "<br/>");
document.write("Institute Name: " + Institute_Name + "<br/>");
}
else {
    document.write("<h1>Student Not Enrolled</h1>")
}

// 1. Changing the Value of a 'Let' Variable
Course_Name = "Advanced JavaScript";
console.log("Updated Course Name: " + Course_Name);

// 2. Trying to Change a 'Const' Variable
// Institute_Name = "SMIT Peshawar";
// console.log("Institute Name:" = Institute_Name);
// Displays an Error as 'Const' Value Remains Unchangeable





