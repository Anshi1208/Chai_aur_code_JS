
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(numbers, 3);

console.log('Original array:', numbers);
console.log('Chunked array:', chunkedArray);
