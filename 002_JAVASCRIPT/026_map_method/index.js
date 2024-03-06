/* .map() = permite navegar por todos elementos de uma array e aplicar
            uma função (callback) com esses elementos e retorna uma nova
            array.

            muito parecido com o .forEach()

*/

function square(element){
    return Math.pow(element, 2);
}

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

console.log(numbers);
console.log(squares);


function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

let students = ["gustavo", "pedro", "alice", "joao", "julia"];

let studentsUpper = students.map(upperCase);
let studentsLower = students.map(lowerCase);

console.log(students);
console.log(studentsUpper);
console.log(studentsLower);


function formatDate(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];
const formatedDates = dates.map(formatDate);

console.log(dates);
console.log(formatedDates);