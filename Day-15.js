function createCounter() { //task-1
    let count = 0; 
  
    function increment() {
      count++;
      return count;
    }
  
    function reset() {
      count = 0;
    }
  
    return {
      increment,
      reset
    };
  }
  
  const counter = createCounter();
  
  console.log(counter.increment());
  console.log(counter.increment());
  counter.reset();
  console.log(counter.increment());

  
  function createPrivateCounter() { //task-2
    let value = 0;
  
    return {
      increase() {
        value++;
      },
      current() {
        return value;
      }
    };
  }
  
  const myCounter = createPrivateCounter();
  
  myCounter.increase();
  console.log(myCounter.current()); 
  
  myCounter.increase();
  console.log(myCounter.current()); 
  

  function createIdGenerator() { //task-3
    let currentId = 0;
  
    return function() {
      currentId++;
      return `id_${currentId}`;
    };
  }
  
  const generateId = createIdGenerator();
  
  console.log(generateId()); 
  console.log(generateId())
  console.log(generateId()); 
  

  function createGreeting(name) { //task-4
    return function() {
      return `Hello, ${name}!`;
    };
  }
  
  const greetUser = createGreeting('Ankita');
  
  console.log(greetUser()); 

  const functions = []; //task-5

for (let i = 0; i < 5; i++) {
  functions[i] = (function(index) {
    return function() {
      console.log(index);
    };
  })(i);
}

functions.forEach(fn => fn()); //task-6


function createItemManager() {
    let items = [];
  
    return {
      addItem(item) {
        items.push(item);
      },
      removeItem(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems() {
        console.log('Items:', items);
      }
    };
  }
  
  const itemManager = createItemManager();
  
  itemManager.addItem('Apple');
  itemManager.addItem('Banana');
  itemManager.listItems();
  
  itemManager.removeItem('Apple');
  itemManager.listItems();
  
  itemManager.removeItem('Orange');


  function memoize(fn) { //task-7
    const cache = new Map();
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  function slowFunction(x) {
    for (let i = 0; i < 1e9; i++) {}
    return x * 2;
  }
  
  const memoizedFunction = memoize(slowFunction);
  
  console.time('First call');
  console.log(memoizedFunction(5)); 
  console.timeEnd('First call');
  
  console.time('Second call');
  console.log(memoizedFunction(5)); 
  console.timeEnd('Second call');
  
  
  function memoize(fn) {  //task-8
    const cache = new Map();
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(6)); 
  console.log(memoizedFactorial(5)); 
  

  