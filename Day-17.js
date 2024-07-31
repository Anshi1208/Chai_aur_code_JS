
class Node { //task-1
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList { //task-2
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) return null;
        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        const value = current.next.value;
        current.next = null;
        return value;
    }

    display() {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        console.log(nodes.join(" -> "));
    }
}


class Stack { //task-3
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.stack.length === 0) return null;
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }
}

function reverseString(s) { //task-4
    const stack = new Stack();
    for (const char of s) {
        stack.push(char);
    }
    let reversedStr = '';
    while (stack.stack.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseString("hello"));  


class Queue { //task-5
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        return this.queue.shift();
    }

    front() {
        if (this.queue.length === 0) return null;
        return this.queue[0];
    }
}


function printerQueue(jobs) { //task-6
    const queue = new Queue();
    jobs.forEach(job => queue.enqueue(job));
    
    while (queue.queue.length > 0) {
        const currentJob = queue.dequeue();
        console.log(`Processing job: ${currentJob}`);
    }
}
printerQueue(["Print document 1", "Print document 2", "Print document 3"]);


class TreeNode { //task-7
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



class BinaryTree { //task-8
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            this._insertRecursive(this.root, value);
        }
    }

    _insertRecursive(node, value) {
        if (value < node.value) {
            if (node.left) {
                this._insertRecursive(node.left, value);
            } else {
                node.left = new TreeNode(value);
            }
        } else {
            if (node.right) {
                this._insertRecursive(node.right, value);
            } else {
                node.right = new TreeNode(value);
            }
        }
    }

    inorderTraversal() {
        const values = [];
        this._inorderRecursive(this.root, values);
        return values;
    }

    _inorderRecursive(node, values) {
        if (node) {
            this._inorderRecursive(node.left, values);
            values.push(node.value);
            this._inorderRecursive(node.right, values);
        }
    }
}

class Graph { //task-9
    constructor() {
        this.graph = {};
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.graph[vertex1] && this.graph[vertex2]) {
            this.graph[vertex1].push(vertex2);
            this.graph[vertex2].push(vertex1); 
        }
    }

    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];

        while (queue.length > 0) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                queue.push(...this.graph[vertex].filter(neighbor => !visited.has(neighbor)));
            }
        }

        return result;
    }
}

function findShortestPath(graph, start, end) { //task-10
    const visited = new Set();
    const queue = [[start]];
    
    while (queue.length > 0) {
        const path = queue.shift();
        const vertex = path[path.length - 1];
        
        if (vertex === end) {
            return path;
        }
        
        if (!visited.has(vertex)) {
            visited.add(vertex);
            for (const neighbor of graph[vertex]) {
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}
const g = new Graph();
['A', 'B', 'C', 'D', 'E'].forEach(vertex => g.addVertex(vertex));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('D', 'E');

console.log(findShortestPath(g.graph, 'A', 'E')); 

