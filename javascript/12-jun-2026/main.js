// Question 10 - Combined ES6 Practice (Main Application)

import { students, skills, company } from './data.js';
import { calculateTotalMarks } from './utils.js';

console.log("Question 10 Output:");

const [firstStudent, secondStudent] = students;
console.log("First Student:", firstStudent);

const newSkills = [...skills, "Express.js"];
console.log("Enhanced Skills:", newSkills);

const total = calculateTotalMarks(85, 90, 75);
console.log(`${firstStudent} from ${company} got total marks:`, total);
