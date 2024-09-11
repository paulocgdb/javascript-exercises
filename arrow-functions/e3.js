// Map Method

const mapArrow = array => array.map(element => element * 2);
let array = [1, 2, 3, 5, 6, 7, 8];

console.log(mapArrow(array));

let personOne = {
    name: 'Paulo',
    age: 29
}

let personTwo = {
    name: 'New Paulo César',
    age: 30
}

const mapAge = array => array.map( element => element.age);
let personList = [personOne, personTwo];

console.log(mapAge(personList));
