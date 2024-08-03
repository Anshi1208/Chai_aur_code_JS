function ListNode(val, next = null) { //task-1
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, current = dummy;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummy.next;
}

function lengthOfLongestSubstring(s) { //task-2
    let map = new Map();
    let left = 0, right = 0;
    let maxLength = 0;

    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    
    return maxLength;
}


function maxArea(height) { //task-3
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentWater = width * currentHeight;
        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}


function threeSum(nums) { //task-4
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}


function groupAnagrams(strs) { //task-5
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}
