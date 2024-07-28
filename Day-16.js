//task-1
function factorial(n) { 
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  const testCases = [0, 1, 5, 7, 10];
  testCases.forEach(testCase => {
    console.log(`Factorial of ${testCase} is ${factorial(testCase)}`);
  });


function findFibonacci(num) { //task-2
    if (num === 0) {
      return 0;
    }
    if (num === 1) {
      return 1;
    }
    return findFibonacci(num - 1) + findFibonacci(num - 2);
  }
  const cases = [0, 1, 2, 5, 10];
  cases.forEach(caseNum => {
    console.log(`Fibonacci of ${caseNum} is ${findFibonacci(caseNum)}`);
  });
  

  
function sumArray(arr) { //task-3
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  }
  const testArrays = [
    [],
    [1],
    [1, 2, 3, 4, 5],
    [10, 20, 30],
    [5, -3, 2, 8]
  ];
  testArrays.forEach(testArray => {
    console.log(`Sum of ${JSON.stringify(testArray)} is ${sumArray(testArray)}`);
  });




function findMaximum(numbers) { //task-4
    if (numbers.length === 1) {
      return numbers[0];
    }
    const restMax = findMaximum(numbers.slice(1));
    return numbers[0] > restMax ? numbers[0] : restMax;
  }
  const sampleArrays = [
    [1],
    [1, 2, 3, 4, 5],
    [10, 20, 30],
    [5, -3, 2, 8],
    [-1, -5, -3, -4, -2]
  ];
  sampleArrays.forEach(array => {
    console.log(`Maximum of ${JSON.stringify(array)} is ${findMaximum(array)}`);
  });
  


function reverseString(str) { //task-5

    if (str.length <= 1) {
      return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
  }
  const testStrings = [
    "",
    "a",
    "hello",
    "recursion",
    "JavaScript"
  ];
  testStrings.forEach(testStr => {
    console.log(`Reverse of "${testStr}" is "${reverseString(testStr)}"`);
  });
  
  

function isPalindrome(text) { //task-6
    if (text.length <= 1) {
      return true;
    }
    
    if (text[0] === text[text.length - 1]) {
      return isPalindrome(text.slice(1, -1));
    }
    return false;
  }
  const sampleStrings = [
    "",
    "a",
    "racecar",
    "palindrome",
    "madam",
    "level",
    "hello"
  ];
  sampleStrings.forEach(sampleStr => {
    console.log(`Is "${sampleStr}" a palindrome? ${isPalindrome(sampleStr)}`);
  });
  

  function binarySearch(arr, target, left = 0, right = arr.length - 1) { //task-7
    if (left > right) {
        console.log(`Element ${target} is not present in the array`);
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        console.log(`Element ${target} is found at index ${mid}: ${arr[mid]}`);
        return mid;
    }

    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}
let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

binarySearch(sortedArray, 7); 
binarySearch(sortedArray, 15);  


function countOccurrences(arr, target, index = 0) { //task-8
  if (index === arr.length) {
      return 0;
  }
  let count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
}

let sampleArray = [1, 2, 3, 4, 2, 2, 5, 2, 6];

let target1 = 2;
let result1 = countOccurrences(sampleArray, target1);
console.log(`Element ${target1} occurs ${result1} times in the array.`)

let target2 = 3;
let result2 = countOccurrences(sampleArray, target2);
console.log(`Element ${target2} occurs ${result2} times in the array.`)


class TreeNode { //task-9
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
      return;
  }
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);  


class Node { //task-10
  constructor(data) {
      this.data = data;
      this.leftChild = null;
      this.rightChild = null;
  }
}

function getTreeDepth(currentNode) {
  if (currentNode === null) {
      return 0;
  }
  let leftSubtreeDepth = getTreeDepth(currentNode.leftChild);
  let rightSubtreeDepth = getTreeDepth(currentNode.rightChild);
  return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1;
}

let rootNode = new Node(4);
rootNode.leftChild = new Node(2);
rootNode.rightChild = new Node(6);
rootNode.leftChild.leftChild = new Node(1);
rootNode.leftChild.rightChild = new Node(3);
rootNode.rightChild.leftChild = new Node(5);
rootNode.rightChild.rightChild = new Node(7);

console.log("Depth of the binary tree:", getTreeDepth(rootNode)); 
let singleNodeTree = new Node(10);
console.log("Depth of the single node tree:", getTreeDepth(singleNodeTree)); 
let deepTreeRoot = new Node(1);
deepTreeRoot.leftChild = new Node(2);
deepTreeRoot.leftChild.leftChild = new Node(3);
deepTreeRoot.leftChild.leftChild.leftChild = new Node(4);
console.log("Depth of the deep tree:", getTreeDepth(deepTreeRoot)); 
let emptyTreeRoot = null;
console.log("Depth of the empty tree:", getTreeDepth(emptyTreeRoot));  
