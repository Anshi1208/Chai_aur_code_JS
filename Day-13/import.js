// Importing modules here 
const person = require('./person');
const { add, subtract, multiply, divide } = require('./mathOpr');
const { calculateSquare } = require('./calculateSq');
const utils = require('./utils'); 

const num1 = 5;
const num2 = 3;
const result = add(num1, num2);
console.log(`The result of adding ${num1} and ${num2} is ${result}.`);

person.greet();
person.haveBirthday();
person.greet();

let number1 = 5;
let number2 = 3;

console.log(`The result of adding ${number1} and ${number2} is ${add(number1, number2)}.`);
console.log(`The result of subtracting ${number2} from ${number1} is ${subtract(number1, number2)}.`);
console.log(`The result of multiplying ${number1} and ${number2} is ${multiply(number1, number2)}.`);
console.log(`The result of dividing ${number1} by ${number2} is ${divide(number1, number2)}.`);

const number = 4;
const res = calculateSquare(number);

console.log(`The square of ${number} is ${res}.`);


console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);

const radius = 3;
console.log(`The area of a circle with radius ${radius} is ${utils.calculateCircleArea(radius)}.`);
