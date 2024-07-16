/* This is day-4 of javascript challenge by "Hitesh choudhary sir" */
//---------------------Activity-1(For loop)-------------------------
console.log("------------------------------------------------------------------------")

for(let i=1; i<=10; i++){ //task-1
    console.log(i)
}


console.log("------------------------------------------------------------------------")

const number = 5; //task-2
for (let i = 1; i <= 10; i++) {
    const product = number * i;
    console.log(`${number} x ${i} = ${product}`);
}

console.log("------------------------------------------------------------------------")


//---------------------Activity-2(while loop)-------------------------
let sum = 0; //task-3
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);

console.log("------------------------------------------------------------------------")


let rev = 10; // Task-4
while (rev >= 1) {
    console.log(rev);
    rev--;
}
console.log("------------------------------------------------------------------------")


//---------------------Activity-3(do...while loop)-------------------------

let dwl = 1; //task-5

do {
    console.log(dwl);
    dwl++;
} while (dwl <= 5);



console.log("------------------------------------------------------------------------")

const num = 5; //task-6
let factorial = 1;
let fac = num;
do {
    factorial *= fac;
    fac--;
} while (fac > 0);
console.log(`The factorial of ${num} is ${factorial}`);

console.log("------------------------------------------------------------------------")

//---------------------Activity-4(nested loops)-------------------------


const rows = 5; //task-7
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern.trim());
}

console.log("------------------------------------------------------------------------")


//---------------------Activity-5(loop control statments)-------------------------

for (let i = 1; i <= 10; i++) { //task-8
    if (i === 5) { 
        continue;
    }
    console.log(i);
}


console.log("------------------------------------------------------------------------")

for (let i = 1; i <= 10; i++) { // Task-9
    if (i === 7) {
        break; 
    }
    console.log(i);
}
console.log("------------------------------------------------------------------------")
