function findMedianSortedArrays(nums1, nums2) { //task-1
    const merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i++]);
    }

    while (j < nums2.length) {
        merged.push(nums2[j++]);
    }

    const len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}

console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4])); 

class ListNode { //task-2
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const mergeTwoLists = (l1, l2) => {
        let dummy = new ListNode(0);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        if (l1) current.next = l1;
        if (l2) current.next = l2;

        return dummy.next;
    };

    if (!lists.length) return null;
    
    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        const merged = mergeTwoLists(a, b);
        lists.push(merged);
    }

    return lists[0];
}


const createList = arr => {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
};
const lists = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6])
];
const mergedList = mergeKLists(lists);

const printList = head => {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
};

printList(mergedList); 

function trap(height) { //task-3
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);
            right--;
        }
    }

    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
console.log(trap([4,2,0,3,2,5]));


function solveNQueens(n) { //task-4
    const solutions = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    
    const isValid = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    };

    const solve = (row) => {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row] = board[row].split('');
                board[row][col] = 'Q';
                board[row] = board[row].join('');
                solve(row + 1);
                board[row] = board[row].split('');
                board[row][col] = '.';
                board[row] = board[row].join('');
            }
        }
    };

    solve(0);
    return solutions;
}
console.log(solveNQueens(4)); 

function ladderLength(beginWord, endWord, wordList) { //task-5
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length) {
        const [word, length] = queue.shift();
        
        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let char of alphabets) {
                const newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
}
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); 
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); 




