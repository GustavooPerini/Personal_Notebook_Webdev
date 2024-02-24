/*
    1. declaration: let x;
    2. assignment: x = 100;
*/

let age = 22;
let price = 8.25;
let gpa = 2.5;

let firstName = "Gustavo";

let online = true;

console.log(typeof price); //printa o datatype da variável
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`My gpa is ${gpa}`);

console.log(typeof firstName);
console.log(`My first name is ${firstName}`);

console.log(typeof online);
console.log(`Gustavo is online: ${online}`);

//Printando no documento:

let fullName = "Gustavo Perini";
let idade = 22;
let estaEstudando = true;

document.getElementById("p1").textContent = `Nome: ${fullName}.`;
document.getElementById("p2").textContent = `Idade: ${idade} anos.`;
document.getElementById("p3").textContent = `Está na faculdade: ${estaEstudando}`;