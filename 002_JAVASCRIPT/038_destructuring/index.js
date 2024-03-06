/*
    destructuring = extrai valores de array e objetos e assina ele em variáveis.
                    [] = para array destructuring.
                    {} = para object destructuring.
*/


// EXEMPLO 1
// TROCAR VALORES ENTRE 2 VARIÁVEIS

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


// EXEMPLO 2
// TROCAR 2 ELEMENTOS DE UMA ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// EXEMPLO 3
// ASSINANDO VARIÁVEIS COM ELEMENTOS DA ARRAY

const colorsC = ["red", "green", "blue", "black", "white"];

const[firstColor, secondColor, thirdColor, ...extraColors] = colorsC;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// EXEMPLO 4
// EXTRAINDO VALORES DE OBJETOS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const{firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// EXEMPLO 5
// FAZENDO DETRUCTURING DENTRO DE UMA FUNÇÃO

// vamos usar os objetos criados acima.

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person2);