function twoSum(nums, target) { //task-1
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

function reverse(x) { //task-2
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversed > 2**31 - 1) return 0;
    return x < 0 ? -reversed : reversed;
}
console.log(reverse(123));
console.log(reverse(-123)); 
console.log(reverse(120)); 

function isPalindrome(x) { //task-3
    if (x < 0) return false;
    let str = x.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10)); 

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) { //task-4
    let dummy = new ListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 === null ? l2 : l1;
    return dummy.next;
}
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(l1, l2);

while (mergedList !== null) {
    console.log(mergedList.val); 
    mergedList = mergedList.next;
}

function isValid(s) { //task-5
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isValid("()")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(]")); 





