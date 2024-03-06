/* spread operator = ... server para separar o conteúdo de uma array.
                         é como se estivesse desempacotando ela.
*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); //com ... nós abrimos a array
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);


let username = "Gustavo Perini"
let letters = [...username];
let join_letters = letters.join(""); // junta um array of characters

console.log(letters);
console.log(join_letters);


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let food = [...fruits, ...vegetables]; // usando o spread operator para copiar uma array ou arrays em outra.
console.log(food);
