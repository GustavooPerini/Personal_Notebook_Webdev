/*
    sort() = usada para organizar array de strings de maneira lexicografica.
*/

let fruits = ["banana", "apple", "orange", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 8, 2, 7, 9, 3, 5, 4, 6];

numbers.sort((a, b) => a - b); //função de callback para fazer o sort.
console.log(numbers); // bota b - a que fica em ordem decrescente.


const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 32, gpa: 1.5},
                {name: "Squidward", age: 42, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

people.sort((a, b) => a.gpa - b.gpa);
//people.sort((a, b) => a.name.localeCompare(b.name)); formula para organizar strings
//people.sort((a, b) => b.name.localeCompare(a.name)); ordem ao contrário
console.log(people);