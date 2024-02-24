// type conversion = change the datatype of a value to another.
//                  (string -> number; number -> bool).

/*let age = window.prompt("How old are you?");

age += 1;

console.log(age);*/

/* com o código acima, não será somado 1 à idade atual da pessoa, será concatenado.
Isso ocorre, pois a entrada do usuário vida window.prompt vem como uma string, então
será necessário fazer uma conversão da variável antes de realizar a operação. */

// o código correto é:

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age);

let x = "";
let y = "";
let z = "";
let q = "G";

x = Number(x);
y = String(y);
z = Boolean(z);
q = Boolean(q);

console.log(x, typeof x); //como é uma string vazia, o número que irá aparecer é 0;
console.log(y, typeof y);
console.log(z, typeof z); //se for uma string vazia, a conversão da como false;
console.log(q, typeof q); //se houver pelo menos um caracter, será true;