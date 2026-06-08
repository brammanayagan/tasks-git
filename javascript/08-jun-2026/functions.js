//function with argument and paameters only Arrow function

const fun = (a, b) => {
  return a + b;
};

const output = fun(5, 6);

console.log(output);

//callback function any method

const callback = (calling) => {
  calling();
};

const params = () => {
  console.log("working");
};

callback(params);

//closure program

const parent = () => {
  let count = 1;

  return (child = () => {
    count++;
    console.log(count);
  });
};

const out = parent();

out();
out();
out();
