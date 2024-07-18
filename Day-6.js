/* Here is the day-6 of javascript challenge by Hitesh chaudhary sir */
//---------------Activity-1(Array creation and access)-------------------
console.log("------------------------------------------------------------------------")
const arr = [1,2,3,4,5] //task-1
console.log("Here is the elements of an array:-",arr)
console.log("------------------------------------------------------------------------")
const firstEle = arr[0] //task-2
const lastEle = arr[arr.length-1]
console.log("Here is the first element of an array:- ", firstEle)
console.log("Here is the last element of an array:- ", lastEle);
console.log("------------------------------------------------------------------------")
//---------------Activity-2(Array methods [basics])-------------------

arr.push(6) //task-3
console.log(arr);
console.log("------------------------------------------------------------------------")
arr.pop(5) //task-4
console.log(arr)
console.log("------------------------------------------------------------------------")
const useShift = arr.shift() //task-5
console.log("here is the shifted array:-", arr);

console.log("------------------------------------------------------------------------")
const unShift = arr.unshift(0, 7) //task-6
console.log("here is the unshifted array:-", arr);
console.log("------------------------------------------------------------------------")
//---------------Activity-3(Array methods [Intermediate])-------------------

let myArray = [1, 2, 3, 4, 5]; //task-7
let doubledArray = myArray.map(number => number * 2);
console.log("Doubled array:", doubledArray);
console.log("------------------------------------------------------------------------")
let myArr = [1, 2, 3, 4, 5]; //task-8
let evenArray = myArr.filter(number => number % 2 === 0);
console.log("Even numbers array:", evenArray);
console.log("------------------------------------------------------------------------")
let Arrays = [1, 2, 3, 4, 5]; //task-9
let sum = Arrays.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers:", sum);
console.log("------------------------------------------------------------------------")
//---------------Activity-4(Array iterations)-------------------

const iteration = [1,2,5,8,9] //task-10
for(let i = 0; i <= iteration.length-1; i++){
    console.log("Elemrnt at index",i ,":-",iteration[i])
}

console.log("------------------------------------------------------------------------")
let useFor = [1, 2, 3, 4, 5]; //task-11
useFor.forEach((element, index) => {
    console.log("Element at index", index, ":", element);
});


//---------------Activity-5(Multi dimensional array)-------------------
console.log("------------------------------------------------------------------------")

let matrix = [ //task-11
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Array (Matrix):");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}


console.log("------------------------------------------------------------------------")
let element1 = matrix[0][1];  //task-12
let element2 = matrix[2][0]; 
console.log("Element at row 1, column 2:", element1); 
console.log("Element at row 3, column 1:", element2); 
console.log("------------------------------------------------------------------------")