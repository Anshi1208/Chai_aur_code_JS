/* Today is the day-8 of javascript challenge by hitesh choudhary sir */ 
//---------------------Activity-1(Template literals)-----------------------
console.log("------------------------------------------------------------------------")
const name = "Ankita"; //task-1
const age = 22;
const introduction = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(introduction);

console.log("------------------------------------------------------------------------")

//task-2
const multiLineString = `  
This is a multi-line string. 
You can include multiple lines
without using any escape characters.
Template literals make it easy!
`;

console.log(multiLineString);
console.log("------------------------------------------------------------------------")
//---------------------Activity-2(Destructuring)-----------------------

const numbers = [10, 20, 30, 40, 50]; //task-3
const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

console.log("------------------------------------------------------------------------")

const book = {  //task-4
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  };
  
  const { title, author } = book;
  
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log("------------------------------------------------------------------------")
//---------------------Activity-3(Spread and rest operator)-----------------------

  const originalArray = [1, 2, 3]; //task-5
const newArray = [...originalArray, 4, 5, 6];

console.log(newArray); 
console.log("------------------------------------------------------------------------")
  
function sumAll(...numbers) { //task-6
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const result = sumAll(1, 2, 3, 4, 5);
  console.log(result);
  console.log("------------------------------------------------------------------------")
//---------------------Activity-4(default parameters)----------------------- 
function multiply(a, b = 1) { //task-7
    return a * b;
  }
  const result1 = multiply(5, 2);
  console.log(result1); 
  const result2 = multiply(5);
  console.log(result2); 
  console.log("------------------------------------------------------------------------")
//---------------------Activity-5(enhanced object literals)----------------------- 
const nam = "Gadget"; //task-8
const price = 99.99;

const product = {
  nam,
  price,
  displayInfo() {
    console.log(`Product Name: ${this.nam}, Price: $${this.price}`);
  }
};

console.log(product);
product.displayInfo();


console.log("------------------------------------------------------------------------")
const propName1 = "firstName"; //task-9
const propName2 = "lastName";

const person = {
  [propName1]: "John",
  [propName2]: "Doe",
  age: 30
};

console.log(person);
console.log("------------------------------------------------------------------------")