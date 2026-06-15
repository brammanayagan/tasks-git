// Question 10 - Combined ES6 Practice (Utils Module)

export function calculateTotalMarks(...marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}
