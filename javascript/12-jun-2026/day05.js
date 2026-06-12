// Question 1 - Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "MongoDB"];
const fullStack = [...frontend, ...backend];
console.log("Question 1:", fullStack);

// Question 2 - Rest Parameter
function totalMarks(...marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  return sum;
}
console.log("Question 2:", totalMarks(80, 90, 70, 60));

// Question 3 - Template Literals
const name = "Priya";
const role = "MERN Developer";
console.log("Question 3:", `Hi, I am ${name} and my role is ${role}.`);

// Question 4 - Object Destructuring
const student = {
  studentName: "Arun",
  course: "MERN",
  city: "Chennai"
};
const { studentName, course, city } = student;
console.log("Question 4:", studentName, course, city);

// Question 5 - Array Destructuring
const colors = ["Red", "Blue", "Green"];
const [firstColor, secondColor] = colors;
console.log("Question 5:", firstColor, secondColor);

// Question 6 - Default Parameters
function welcome(guestName = "Guest") {
  console.log("Question 6:", `Welcome, ${guestName}!`);
}
welcome();
welcome("John");

// Question 7 - Enhanced Object Literal
const empName = "Priya";
const empRole = "React Developer";

// Shorthand syntax when key and variable name are the same
const employee = { empName, empRole };
console.log("Question 7:", employee);

// Question 8 - Nullish Coalescing (??)
const userName = null;
const finalName = userName ?? "Guest User";
console.log("Question 8:", finalName);
