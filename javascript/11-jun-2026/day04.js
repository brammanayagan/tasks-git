// Task 1: Employee Salary Filter
// Explanation: We use the filter() method to create a new array containing only the employees whose salary is strictly greater than 40000.
const employees = [
  { id: 1, name: "John", salary: 25000 },
  { id: 2, name: "David", salary: 45000 },
  { id: 3, name: "Sam", salary: 60000 },
  { id: 4, name: "Peter", salary: 30000 }
];
const highSalaryEmployees = employees.filter(employee => employee.salary > 40000);
console.log("Task 1 - Employees with salary > 40000:", highSalaryEmployees);


// Task 2: Find User
// Explanation: We use the find() method to return the first user object in the array that matches the condition of having an id equal to 2.
const users = [
  { id: 1, name: "Sudhan" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Ravi" }
];
const userWithId2 = users.find(user => user.id === 2);
console.log("\nTask 2 - User with id 2:", userWithId2);


// Task 3: Display Products
// Explanation: We use the map() method to iterate over the products array and display each product. map() transforms each element.
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Keyboard", price: 1500 }
];
console.log("\nTask 3 - Displaying all products:");
products.map(product => console.log(`${product.name} costs ${product.price}`));


// Task 4: Calculate Cart Value
// Explanation: We use the reduce() method to accumulate the total price of all items in the cart. The accumulator starts at 0 and adds the price of each item.
const cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 }
];
const totalCartValue = cart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log("\nTask 4 - Total cart value:", totalCartValue);


// Task 5: Student Operations
// Explanation: We combine map, filter, find, and reduce to perform various operations on the students array as requested.
const students = [
  { id: 1, name: "Arun", mark: 85 },
  { id: 2, name: "Karthik", mark: 45 },
  { id: 3, name: "Vijay", mark: 92 },
  { id: 4, name: "Ajay", mark: 35 }
];

console.log("\nTask 5 - Students Operations:");
// - Display all students using map
console.log("All Students:");
students.map(student => console.log(`ID: ${student.id}, Name: ${student.name}, Mark: ${student.mark}`));

// - Display passed students using filter
const passedStudents = students.filter(student => student.mark >= 50);
console.log("Passed Students:", passedStudents);

// - Find student with id = 3 using find
const studentId3 = students.find(student => student.id === 3);
console.log("Student with id 3:", studentId3);

// - Calculate total marks using reduce
const totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
console.log("Total Marks:", totalMarks);

// - Calculate average marks using map and reduce (or just reduce and length)
const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);


// Task 6: Order Operations
// Explanation: We use map, filter, find, and reduce to process the orders array according to the requirements.
const orders = [
  { id: 1, customer: "John", amount: 5000, status: "Completed" },
  { id: 2, customer: "David", amount: 3000, status: "Pending" },
  { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
  { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
];

console.log("\nTask 6 - Orders Operations:");
// - Display all orders using map
console.log("All Orders:");
orders.map(order => console.log(`Order ${order.id} by ${order.customer} - ${order.amount} (${order.status})`));

// - Display completed orders using filter
const completedOrders = orders.filter(order => order.status === "Completed");
console.log("Completed Orders:", completedOrders);

// - Find order with id = 3 using find
const orderId3 = orders.find(order => order.id === 3);
console.log("Order with id 3:", orderId3);

// - Calculate total revenue using reduce
const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
console.log("Total Revenue:", totalRevenue);
