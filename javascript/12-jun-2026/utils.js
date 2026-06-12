// Question 10 - Combined ES6 Practice (Utils Module)

// Utility function using Rest Parameter
export function calculateTotalMarks(...marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}
