// function expression = pode passar uma função como um parâmetro para
//                       um método, sem precisar declarar essa função.

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const even = numbers.filter(function(element){
    return element % 2 === 0;
});

const odd = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(even);
console.log(odd);
console.log(total);