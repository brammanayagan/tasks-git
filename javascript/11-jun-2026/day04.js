// Task 1: Employee Salary Filter
//Task 1: Employee Salary Filter (filter()) You have employee data. const employees = [ { id: 1, name: "John", salary: 25000 }, { id: 2, name: "David", salary: 45000 }, { id: 3, name: "Sam", salary: 60000 }, { id: 4, name: "Peter", salary: 30000 } ]; Task: Display only employees whose salary is greater than 40,000. Show Name and Salary. Interview Focus: filter()

const employees = [
  { id: 1, name: "John", salary: 25000 },
  { id: 2, name: "David", salary: 45000 },
  { id: 3, name: "Sam", salary: 60000 },
  { id: 4, name: "Peter", salary: 30000 }
];
const highSalaryEmployees = employees.filter(employee => employee.salary > 40000);
console.log("Task 1 - Employees with salary > 40000:", highSalaryEmployees);


// Task 2: Find User
//Task 2: Find a User by ID (find()) const users = [ { id: 1, name: "Sudhan" }, { id: 2, name: "Kumar" }, { id: 3, name: "Ravi" } ]; Task: Find the user whose id is 2. Display user details. Interview Focus: find()

const users = [
  { id: 1, name: "Sudhan" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Ravi" }
];
const userWithId2 = users.find(user => user.id === 2);
console.log("\nTask 2 - User with id 2:", userWithId2);


// Task 3: Display Products
//Task 3: Product Card Rendering (map()) const products = [ { id: 1, name: "Laptop", price: 50000 }, { id: 2, name: "Mobile", price: 20000 }, { id: 3, name: "Keyboard", price: 1500 } ]; Task: Display all products in separate cards. Show Product Name and Price. Interview Focus: map()

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Keyboard", price: 1500 }
];
console.log("\nTask 3 - Displaying all products:");
products.map(product => console.log(`${product.name} costs ${product.price}`));


// Task 4: Calculate Cart Value
//Task 4: Calculate Total Cart Amount (reduce()) const cart = [ { product: "Laptop", price: 50000 }, { product: "Mouse", price: 500 }, { product: "Keyboard", price: 1500 } ]; Task: Calculate the total cart value. Display the final amount. Interview Focus: reduce()

const cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 }
];
const totalCartValue = cart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log("\nTask 4 - Total cart value:", totalCartValue);


// Task 5: Student Operations
//Task 5: Student Management System (map + filter + find + reduce) const students = [ { id: 1, name: "Arun", mark: 85 }, { id: 2, name: "Karthik", mark: 45 }, { id: 3, name: "Vijay", mark: 92 }, { id: 4, name: "Ajay", mark: 35 } ]; Tasks: Display all students using map(). Display only passed students (mark >= 50) using filter(). Find student with id = 3 using find(). Calculate total marks using reduce(). Calculate average mark using reduce(). Interview Focus: Real-time company question combining all four methods.

const students = [
  { id: 1, name: "Arun", mark: 85 },
  { id: 2, name: "Karthik", mark: 45 },
  { id: 3, name: "Vijay", mark: 92 },
  { id: 4, name: "Ajay", mark: 35 }
];

students.map(student => console.log(`ID: ${student.id}, Name: ${student.name}, Mark: ${student.mark}`));

const passedStudents = students.filter(student => student.mark >= 50);
console.log("Passed Students:", passedStudents);

const studentId3 = students.find(student => student.id === 3);
console.log("Student with id 3:", studentId3);

const totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
console.log("Total Marks:", totalMarks);

const averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);


// Task 6: Order Operations
//Bonus Company-Level Task const orders = [ { id: 1, customer: "John", amount: 5000, status: "Completed" }, { id: 2, customer: "David", amount: 3000, status: "Pending" }, { id: 3, customer: "Sam", amount: 7000, status: "Completed" }, { id: 4, customer: "Peter", amount: 2000, status: "Pending" } ]; Tasks: Display all orders (map) Display completed orders (filter) Find order id = 3 (find) Calculate total revenue (reduce)

const orders = [
  { id: 1, customer: "John", amount: 5000, status: "Completed" },
  { id: 2, customer: "David", amount: 3000, status: "Pending" },
  { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
  { id: 4, customer: "Peter", amount: 2000, status: "Pending" }
];

orders.map(order => console.log(`Order ${order.id} by ${order.customer} - ${order.amount} (${order.status})`));

const completedOrders = orders.filter(order => order.status === "Completed");
console.log("Completed Orders:", completedOrders);

const orderId3 = orders.find(order => order.id === 3);
console.log("Order with id 3:", orderId3);

const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
console.log("Total Revenue:", totalRevenue);
