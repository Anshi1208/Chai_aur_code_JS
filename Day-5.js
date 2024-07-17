/* This is day-5 of javascript challenge by "Hitesh choudhary sir" */
//---------------------Activity-1(Functions)-------------------------

console.log("------------------------------------------------------------------------")
function checkEvenOdd(number) { //task-1
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("the given number is :- ",checkEvenOdd(4)); 
console.log("the given number is :- ",checkEvenOdd(7)); 

console.log("------------------------------------------------------------------------")

function squareNumber(number) { //task-2
    const result = number * number;
    console.log(`The square of ${number} is ${result}`);
    return result;
}
const number = 5;
const square = squareNumber(number); 
console.log(`Returned result: ${square}`); 

console.log("------------------------------------------------------------------------")

//---------------------Activity-2(Functions expression)-------------------------

const findMax = function(a, b) { //task-3
    const max = (a > b) ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
    return max;
}
findMax(10, 20); 
findMax(30, 15); 

console.log("------------------------------------------------------------------------")


function concatenateStrings(str1, str2) { //task-4
    const result = str1 + str2;
    return result;
}
const string1 = "Hello, ";
const string2 = "World!";
const concatenatedString = concatenateStrings(string1, string2);
console.log(`Concatenated String: ${concatenatedString}`); 

console.log("------------------------------------------------------------------------")

//---------------------Activity-3(Arrow functions)-------------------------
const sumNumbers = (num1, num2) => { //task-5
    return num1 + num2;
};
const number1 = 5;
const number2 = 7;
const sum = sumNumbers(number1, number2);

console.log(`The sum of ${number1} and ${number2} is ${sum}`); 

console.log("------------------------------------------------------------------------")

const containsCharacter = (str, char) => { //task-6
    return str.includes(char);
};
const string = "Hello, World!";
const character = "W";
const result = containsCharacter(string, character);

console.log(`Does the string "${string}" contain the character "${character}"? ${result}`); 
console.log("------------------------------------------------------------------------")

//---------------------Activity-4(function parameter and default values)-------------------------

const multiply = (num1, num2 = 1) => { //task-7
    return num1 * num2;
}
const result1 = multiply(5, 3); 
const result2 = multiply(5);  

console.log(`The product of 5 and 3 is ${result1}`); 
console.log(`The product of 5 and the default value is ${result2}`); 
console.log("------------------------------------------------------------------------")


const greet = (name, age = 22) => { //task-8
    return `Hello, ${name}! You are ${age} years old.`;
};
const greeting1 = greet("Ankita", 21); 
const greeting2 = greet("Ankita singh");

console.log(greeting1); 
console.log(greeting2); 
console.log("------------------------------------------------------------------------")

//---------------------Activity-5(high order function)-------------------------

const callFunctionNTimes = (func, n) => { //task-9
    for (let i = 0; i < n; i++) {
        func();
    }
}
const printHello = () => {
    console.log("Hello!");
}
callFunctionNTimes(printHello, 3); 

console.log("------------------------------------------------------------------------")

const composeFunctions = (func1, func2, value) => { //task-10
    const resultFromFunc1 = func1(value);
    const finalResult = func2(resultFromFunc1);
    return finalResult;
}
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const initialValue = 5;
const finalResult = composeFunctions(addTwo, multiplyByThree, initialValue);
console.log(`Result: ${finalResult}`); 
console.log("------------------------------------------------------------------------")