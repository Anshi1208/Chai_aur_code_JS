//Here is day-12 solution for 30 days javascript challenge
//------------------(Error -Handling)---------------------

//------------------Activity-1(Basic Error-Handling with try-catch)---------------------
function throwErrorFunction() { //task-1
    throw new Error("This is an intentional error");
}
function handleErrors() {
    try {
        throwErrorFunction();
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}
handleErrors();

function divideNumbers(numerator, denominator) { //task-2
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return numerator / denominator;
}
function handleDivision(numerator, denominator) {
    try {
        const result = divideNumbers(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}
handleDivision(10, 2);  
handleDivision(10, 0);  


//------------------Activity-2(Finally block)---------------------
function exampleFunction() { //task-3
    try {
        console.log("Inside try block");
        throw new Error("An intentional error occurred");
        console.log("This message will not be logged");
    } catch (error) {
        console.log("Inside catch block");
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Inside finally block");
        console.log("This block always executes, regardless of an error");
    }
    console.log("Outside try-catch-finally blocks");
}
exampleFunction();


//------------------Activity-4(Custom error objects)---------------------
class CustomError extends Error { //task-4
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function riskyOperation() { 
    throw new CustomError("This is a custom error");
}

function handleCustomError() {
    try {
        riskyOperation();
    } catch (error) {
        if (error instanceof CustomError) {
            console.error("Caught a custom error:", error.message);
        } else {
            console.error("An unexpected error occurred:", error.message);
        }
    } finally {
        console.log("Execution of try-catch-finally block completed");
    }
}
handleCustomError();





class ValidationError extends Error { //task-5
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUserInput(inputString) {
    if (!inputString || inputString.trim() === "") {
        throw new ValidationError("Input string cannot be empty");
    }
    return true;
}

function handleValidation() {
    const userInput = ""; 

    try {
        validateUserInput(userInput);
        console.log("User input is valid");
    } catch (validationError) {
        if (validationError instanceof ValidationError) {
            console.error("Validation Error:", validationError.message);
        } else {
            console.error("An unexpected error occurred:", validationError.message);
        }
    } finally {
        console.log("Validation process completed");
    }
}
handleValidation();


//------------------Activity-4(Error-Handling in promises)---------------------

function getRandomBoolean() { //task-6
    return Math.random() >= 0.5;
}

function randomPromise() {
    return new Promise((resolve, reject) => {
        if (getRandomBoolean()) {
            resolve("The promise was resolved successfully!");
        } else {
            reject(new Error("The promise was rejected."));
        }
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Promise rejected:", error.message);
    });



    function getRandomBoolean() {  //task-7
        return Math.random() >= 0.5;
    }
    
    function randomPromise() {
        return new Promise((resolve, reject) => {
            if (getRandomBoolean()) {
                resolve("The promise was resolved successfully!");
            } else {
                reject(new Error("The promise was rejected."));
            }
        });
    }
    
    async function handleRandomPromise() {
        try {
            const message = await randomPromise();
            console.log(message);
        } catch (error) {
            console.error("Promise rejected:", error.message);
        }
    }
    handleRandomPromise();



//------------------Activity-5( Garcefull Error-Handling in fetch)---------------------

const invalidUrl = "https://invalid.url/api/data"; //task-8
fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
    })
    .catch(error => {
        console.error("Failed to fetch data:", error.message);
    });

    

    async function fetchData() { //task-9
        const invalidUrl = "https://invalid.url/api/data";
    
        try {
            const response = await fetch(invalidUrl);
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Data received:", data);
        } catch (error) {
            console.error("Failed to fetch data:", error.message);
        }
    }
    fetchData();
    