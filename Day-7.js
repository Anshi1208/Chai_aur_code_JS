/* Today is the day-7 of javascript challenge by hitesh choudhary sir */ 
//---------------------Activity-1(Object creation and access)-----------------------
console.log("------------------------------------------------------------------------")
let book = { //task-1
    title : "miracle of love",
    author : "M K das",
    year : 2023
}
console.log(book)


console.log(book.title); //task-2
console.log(book.author)
console.log("------------------------------------------------------------------------")
//---------------------Activity-2(Object methods)-----------------------

const books = { //task-3
    title: "Rich DAD Poor DAD",
    author: "Harper Lee",
    year: 1960,
  
    getBookInfo: function() {
      return `Title: ${this.title}, Author: ${this.author}`;
    },
    
    updateYear: function(newYear) { //task-4
      this.year = newYear;
    }
  };
  
  console.log(books.getBookInfo());

  books.updateYear(2021);
  console.log(books);
  console.log("------------------------------------------------------------------------")
//---------------------Activity-3(Nested Objects)--------------------------
const library = { //task-5
    name: "Ankita's Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      }
    ]
  };

  console.log(library);
  
 console.log("Library Name:", library.name);

 console.log("------------------------------------------------------------------------")
  console.log("Book Titles:-"); //task-6
  library.books.forEach(book => {
    console.log(book.title);
  });
  console.log("------------------------------------------------------------------------")
//---------------------Activity-4(The "this" keywords)--------------------------

const librarys = { //task-7
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
  
        getBookInfo: function() {
          return `Title: ${this.title}, Year: ${this.year}`;
        }
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
  
        getBookInfo: function() {
          return `Title: ${this.title}, Year: ${this.year}`;
        }
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
  
        getBookInfo: function() {
          return `Title: ${this.title}, Year: ${this.year}`;
        }
      }
    ]
  };
  
  console.log(librarys);
  console.log("Library Name:", librarys.name);
  console.log("Book Titles:");
  librarys.books.forEach(book => {
    console.log(book.title);
  });
  console.log("Book Information:");
  librarys.books.forEach(book => {
    console.log(book.getBookInfo());
  });
  console.log("------------------------------------------------------------------------")
//---------------------Activity-5(Objects iterations)--------------------------

const myBook = {  //task-8
    title: "Miracle of Love",
    author: "M K Das",
    year: 2023
  };
  
  console.log("Properties and Values using for...in loop:");
  for (let item in myBook) {
    if (myBook.hasOwnProperty(item)) {
      let value = myBook[item];
      console.log(`${item}: ${value}`);
    }
  }
  console.log("------------------------------------------------------------------------")
  const propertyNames = Object.keys(myBook);  //task-9
  const propertyValues = Object.values(myBook);
  
  console.log("\nKeys of the book object:");
  console.log(propertyNames);
  
  console.log("\nValues of the book object:");
  console.log(propertyValues);
  
  console.log("------------------------------------------------------------------------")