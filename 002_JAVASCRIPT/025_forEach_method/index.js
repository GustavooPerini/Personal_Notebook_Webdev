/* .forEach() = permite navegar por todos elementos de uma array e aplicar
               uma função (callback) com esses elementos.

    array.forEach(callback);

    o elemento, índice e array são dados como argumentos para essa função
    de callback pelo método.

*/

function double(element, index, array){ //deixa os parametros nessa ordem
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);


function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

let fruits = ["apple", "banana", "mango", "coconut", "orange"];

fruits.forEach(capitalize);
fruits.forEach(display);