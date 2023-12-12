// Filter method

const pairArray = array => array.filter(element => element % 2 === 0);
let array = [1, 2, 3, 4, 5];
console.log(pairArray(array));

const oddArray = array => array.filter(element => element % 2 !== 0);
console.log(oddArray(array));