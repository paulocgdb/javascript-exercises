// Simple math

function sum(a, b) {
    
    return a + b;
    
}

let sumArrow = (a, b) => a + b;
console.log(sum(1, 2));

console.log(sumArrow(1, 2));

console.log("\n");

function isPositiveNumber(number) {
    return number > 0;
}

let isPositiveNumberArrow = number => number > 0;
console.log(isPositiveNumber(10));
console.log(isPositiveNumberArrow(10));
console.log("\n");

function subtract(a, b) {
    return a - b;
}

let substractArrow = (a, b) => a - b;
console.log(subtract(10, 5));
console.log(substractArrow(10, 5));
