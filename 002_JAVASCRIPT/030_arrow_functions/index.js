/*
arrow function = uma maneira mais simples de escrever function expressions
                 (parameters) => some code
*/

const hi = function(){ //function expression
    console.log("Hi");
}

hi();

const hello = (name, age) => {console.log(`Hello ${name}.`);
                         console.log(`You are ${age} years old.`);}

hello("Gustavo", 25);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const even = numbers.filter((element) => element % 2 === 0);
const odd = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(even);
console.log(odd);
console.log(total);