// Bubble Sort Algorithm
function bubbleSort(arr) { //task-1
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
            
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("Bubble Sorted Array:", arr);
}
bubbleSort([64, 25, 12, 22, 11]);


// Selection Sort Algorithm
function selectionSort(arr) { //task-2
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    console.log("Selection Sorted Array:", arr);
}
selectionSort([64, 25, 12, 22, 11]);

// Quick Sort Algorithm
function quickSort(arr) { //task-3
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
console.log("Quick Sorted Array:", quickSort([64, 25, 12, 22, 11]));


// Linear Search Algorithm
function linearSearch(arr, target) { //task-4
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Index of target value:", i);
            return i;
        }
    }
    console.log("Target value not found.");
    return -1;
}
linearSearch([64, 25, 12, 22, 11], 22);


// Binary Search Algorithm (requires sorted array)
function binarySearch(arr, target) { //task-5
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            console.log("Index of target value:", mid);
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    console.log("Target value not found.");
    return -1;
}
binarySearch([11, 12, 22, 25, 64], 22);


// Function to count occurrences of each character
function countCharacterOccurrences(str) { //task-6
    const counts = {};
    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    console.log("Character Counts:", counts);
}

countCharacterOccurrences("hello world");


// Function to find longest substring without repeating characters
function longestUniqueSubstring(str) { //task-7
    let maxLength = 0;
    let start = 0;
    const seen = new Map();
    
    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end])) {
            start = Math.max(seen.get(str[end]) + 1, start);
        }
        seen.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    console.log("Length of longest substring without repeating characters:", maxLength);
}

longestUniqueSubstring("abcabcbb");

// Function to rotate an array by k positions
function rotateArray(arr, k) { //task-8
    k = k % arr.length; 
    const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
    console.log("Rotated Array:", rotated);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);


// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) { //task-9
    let i = 0, j = 0;
    const merged = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
    
    console.log("Merged Array:", merged);
}
mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);


// Function to solve the Fibonacci sequence using dynamic programming
function fibonacci(n) { //task-10
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log("Fibonacci Numbers:", dp.slice(0, n + 1));
}
fibonacci(10);

// Function to solve the knapsack problem using dynamic programming
function knapsack(weights, values, capacity) { //task-11
    const n = weights.length;
    const dp = Array(capacity + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    
    console.log("Maximum value that can be obtained:", dp[capacity]);
}
knapsack([1, 2, 3], [60, 100, 120], 5);

