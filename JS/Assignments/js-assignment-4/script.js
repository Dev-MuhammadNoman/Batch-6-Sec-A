// Js: Text Formatting
document.write("<div style='max-width: 500px; margin: 30px auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc; font-family: Calibri, sans-serif; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); text-align: center;'>");

// JS Assignment 4 Starts Here!
document.write("<h1>JavaScript Assignment 4</h1>");
document.write("<hr style='width: 70%; border: 0; border-top: 1px solid #656969; margin: 20px auto;'>");

// Step 1: Exam Entry
let age = Number(prompt("Please Enter Your Age:", 18));
let feePaid = true;

let isAllowedToExam = (age >= 18) && (feePaid === true);

console.log("Step 1: Exam Entry");
console.log("Is the student allowed in Exam:", isAllowedToExam); 

// Webpage Output with Styling
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h3 style='color: #0f766e; margin-bottom: 5px;'>Step 1: Exam Entry</h3>");
document.write("<p style='margin: 10px 0;'>Is the student allowed in Exam: <strong>" + isAllowedToExam + "</strong></p>");
document.write("</div>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Step 2: User Login
let emailCorrect = false;
let phoneCorrect = true;

let canLogin = emailCorrect || phoneCorrect;

console.log("Step 2: User Login");
console.log("Can the user log in:", canLogin);

// Webpage Output with Styling
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h3 style='color: #0f766e; margin-bottom: 5px;'>Step 2: User Login</h3>");
document.write("<p style='margin: 10px 0;'>Can the user log in: <strong>" + canLogin + "</strong></p>");
document.write("</div>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Step 3: Website Access
let isBlocked = false;
let accessAllowed = !isBlocked;

console.log("Step 3: Website Access");
console.log("Access allowed: ", accessAllowed);

// Webpage Output with Styling
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h3 style='color: #0f766e; margin-bottom: 5px;'>Step 3: Website Access</h3>");
document.write("<p style='margin: 10px 0;'>Access allowed: <strong>" + accessAllowed + "</strong></p>");
document.write("</div>");
document.write("<hr style='width: 50%; margin: 20px auto;'>");

// Step 4: Users Gets Discount
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

let getsDiscount = isLoggedIn && (isPremium || hasCoupon);

console.log("Step 4: Users Gets Discount");
console.log("User Eligible for Discount: ", accessAllowed);

// Webpage Output with Styling
document.write("<div style='margin-bottom: 25px;'>");
document.write("<h3 style='color: #0f766e; margin-bottom: 5px;'>Step 4: Users Gets Discount</h3>");
document.write("<p style='margin: 10px 0;'>User Eligible for Discount: <strong>" + getsDiscount + "</strong></p>");
document.write("</div>");

// Closing the Container: Div
document.write("</div>");