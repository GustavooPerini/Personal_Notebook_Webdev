// string slicing = fazer partições de uma string.

const fullName = "Gustavo Perini";

//let firstName = fullName.slice(0, 7); // a posição inicial sempre pega. A última, precisa ser uma a mais.
//lastName = fullName.slice(8, 14);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1); // ídices negativos, pegam a string do final para o começo.

//Algoritmo mais dinâmico:

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);