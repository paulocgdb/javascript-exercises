// Filter and findIndex methods

let array = [1, 2, 3, 4, 5];

const pairArray = array => array.filter(element => element % 2 === 0);
console.log(pairArray(array));

const oddArray = array => array.filter(element => element % 2 !== 0);
console.log(oddArray(array));

const findArrow = array => array.findIndex(element => element === 1);
console.log(findArrow(array));