/* second day of Javascript challenge by "Hitesh chaudhary sir" in this we have to learn about "OPERATORS*/
//--------------------------Activity-1(Arithmetic operators)------------------------
let a = 12; //task-1
let b = 8;
console.log("Addition of a + b =  ",a + b);

let c = 12; //task-2
let d = 8;
console.log("Subtraction of c - d = ",c - d);

let e = 12; //task-3
let f = 8;
console.log("Multiplication of e * f = ",e * f);


let g = 12; //task-4
let h = 8;
console.log("Division of g / h = ",g / h);


let i = 12; //task-5
let j = 8;
console.log("Remainder of i % j = ",i % j);

//--------------------------Activity-2(Assignment operators)------------------------

let k = 12; //task-6
k += 8;
console.log(k);

let l = 8; //task-7
l -= 3;
console.log(l);

//--------------------------Activity-3(Comparision operators)------------------------

// Function to compare two numbers
function compareNumbers(num1, num2) {  //task - 8
    if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
      console.log(`${num1} is less than ${num2}`);
    } else {
      console.log(`${num1} is equal to ${num2}`);
    }
  }
  const number1 = 5;
  const number2 = 10;
  
  compareNumbers(number1, number2);

// function to compare or equal to two numbers

  function compareNumbers(num1, num2) { //task-9
    if (num1 >= num2) {
      console.log(`${num1} is greater than ${num2}`);
    } else if (num1 <= num2) {
      console.log(`${num1} is less than ${num2}`);
    } else {
      console.log(`${num1} is equal to ${num2}`);
    }
  }
  const num1 = 5;
  const num2 = 10;
  
  compareNumbers(num1, num2);


// function to check == or === 

const db = 10; //task-10
const ab = 12;
console.log(db == ab);

const sb = 10; 
const gb = "10";
console.log(sb === gb)


//--------------------------Activity-4(Logical operators)------------------------

// Function to check combined conditions
function checkConditions(num1, num2) {
    // Using && operator to combine two conditions
    if (num1 > 0 && num2 > 0) {  //task-11
      console.log(`Both ${num1} and ${num2} are positive numbers.`);
    } else {
      console.log(`At least one of ${num1} or ${num2} is not a positive number.`);
    }
    
    // Using !! operator to convert a value to a boolean
    const isNum1Positive = !!(num1 > 0);  //task-12
    const isNum2Positive = !!(num2 > 0);
  
    console.log(`Is ${num1} positive? ${isNum1Positive}`);
    console.log(`Is ${num2} positive? ${isNum2Positive}`);
  
    // Using ! operator to invert a boolean value
    const isNum1NotPositive = !(num1 > 0);  //task-3
    const isNum2NotPositive = !(num2 > 0);
  
    console.log(`Is ${num1} not positive? ${isNum1NotPositive}`);
    console.log(`Is ${num2} not positive? ${isNum2NotPositive}`);
  }
  const nu1 = 5;
  const nu2 = -10;
  
  checkConditions(nu1, nu2);


  //--------------------------------Activity-5(Ternary operator)-----------------------------

  // Function to check if a number is positive or negative using the ternary operator
function checkNumber(number) { //task-14
    const result = number > 0 ? `${number} is positive` : number < 0 ? `${number} is negative` : `${number} is zero`;
    console.log(result);
  }
  const firstNumber = 5;
  const secondNumber = -10;
  const thirdNumber = 0;
  
  checkNumber(firstNumber);
  checkNumber(secondNumber); 
  checkNumber(thirdNumber);
  

