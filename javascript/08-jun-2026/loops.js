//object value loop - print using for in

const data1 = {
  name: "Bramma",
  age: 24,
  city: "Chennai",
};

for (let ans in data1) {
  console.log(data1[ans]);
}

//array value map/for loop/ for each

let arr = ["Bramma", "Vishawa", "Raj Bharath"];

const list = arr.map((items) => console.log("map", items));

for (let i = 0; i < arr.length; i++) {
  console.log("for", arr[i]);
}
