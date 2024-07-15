/* This is day-3 of javascript challenge by "Hitesh choudhary sir" */
//----------------------------Activity-1(IF-Else statment)-----------------------

function checkNumber(num) { //task-1
    if (num > 0) {
      console.log(`${num} is positive`);
    } else if (num < 0) {
      console.log(` ${num} is negative`);
    } else {
      console.log(` ${num} is zero`);
    }
  }
  checkNumber(10);  
  checkNumber(-5);  

  //-------------------------------------------------------------------------

let age = 20; //task-2
if(age >= 18){
    console.log("You are eligible for voting")
} else{
    console.log("you are not eligible for voting")
}
  
//-----------------Acitivity-2(Nested if-else statment)--------------------

function findLargest(a, b, c) {  //task-3
    let largest;
  
    if (a >= b) {
      if (a >= c) {
        largest = a;
      } else {
        largest = c;
      }
    } else {
      if (b >= c) {
        largest = b;
      } else {
        largest = c;
      }
    }
  
    console.log(`The largest number is ${largest}`);
  }
  
  findLargest(10, 20, 30);  
  
//------------------------Activity-3(Switch case)--------------------------

function getDayOfWeek(dayNumber) {  //task-4
    let day;
  
    switch (dayNumber) {
      case 1:
        day = "Sunday";
        break;
      case 2:
        day = "Monday";
        break;
      case 3:
        day = "Tuesday";
        break;
      case 4:
        day = "Wednesday";
        break;
      case 5:
        day = "Thursday";
        break;
      case 6:
        day = "Friday";
        break;
      case 7:
        day = "Saturday";
        break;
      default:
        day = "Invalid day number";
    }
  
    console.log(day);
  }
  getDayOfWeek(5); 
  

  //--------------------------------------------------------------------

  function assignGrade(score) {  //task-5
    let grade;
  
    switch (true) {
      case (score >= 90 && score <= 100):
        grade = 'A';
        break;
      case (score >= 80 && score < 90):
        grade = 'B';
        break;
      case (score >= 70 && score < 80):
        grade = 'C';
        break;
      case (score >= 60 && score < 70):
        grade = 'D';
        break;
      case (score >= 0 && score < 60):
        grade = 'E';
        break;
      default:
        grade = 'Invalid score';
    }
  
    console.log(`The grade for a score of ${score} is ${grade}`);
  }
  
  assignGrade(95); 

  //---------------------------Activity-4(Conditional TERNARY Operator)--------------------------

  
  function checkEvenOrOdd(num) { //task-6
    const result = (num % 2 === 0) ? `${num} is even` : `${num} is odd`;
    console.log(result);
  }
  checkEvenOrOdd(10);

  //--------------------Activity-5(combining operator)----------------------------
  
  
  function isLeapYear(year) { //task-7
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

isLeapYear(2020);
isLeapYear(1900); 
