class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`The updated age is ${this.age}`);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  static numberOfStudents = 0;

  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age);
    this.studentID = studentID;
    Student.numberOfStudents++;
  }

  getStudentID() {
    return this.studentID;
  }

  getGreeting() {
    const baseGreeting = super.getGreeting();
    return `${baseGreeting} My student ID is ${this.studentID}.`;
  }

  static getNumberOfStudents() {
    return Student.numberOfStudents;
  }
}

const person1 = new Person('Ankita', 'Singh', 25);
const student1 = new Student('Ankita', 'Singh', 25, 'S12345');
const student2 = new Student('John', 'Doe', 22, 'S12346');

console.log(`The full name is ${person1.fullName}`);

person1.fullName = 'Rohan Kumar';

console.log(`The updated full name is ${person1.fullName}`);
console.log(`The total number of students is ${Student.getNumberOfStudents()}`);

class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Invalid withdraw amount.');
    }
  }
}

const myAccount = new Account(1000);

console.log(`Initial balance: ${myAccount.getBalance()}`);

myAccount.deposit(500);

console.log(`Balance after deposit: ${myAccount.getBalance()}`);

myAccount.withdraw(300);

console.log(`Balance after withdrawal: ${myAccount.getBalance()}`);

myAccount.withdraw(1500);

console.log(`Balance after failed withdrawal: ${myAccount.getBalance()}`);
