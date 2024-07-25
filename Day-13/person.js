
const person = {
    name: 'John Doe',
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    haveBirthday: function() {
      this.age += 1;
      console.log(`Happy Birthday! You are now ${this.age} years old.`);
    }
  };
  
  module.exports = person;
  