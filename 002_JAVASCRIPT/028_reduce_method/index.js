// .reduce() = permite reduzir elementos de uma array para valores unicos.


const prices = [5, 30, 10, 25, 15, 20]

const total = prices.reduce(sum);

console.log(`R$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}


/* 
accumulator é como se fosse a soma de cada elemento. No primeiro
elemento da array ele é 0 (0 + 5), no segundo ele é 5 (5 + 30), no
terceiro ele é 35 (35 + 10) e assim por diante. 

o accumulator pode ser entendido também como o elemento aterior, e o 
element como o elemento posterior.
*/


const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){

    return Math.max(accumulator, element);
}

function getMin(accumulator, element){

    return Math.min(accumulator, element);
}
