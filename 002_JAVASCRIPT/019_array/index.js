let fruits = ["apple", "orange", "banana"];

//fruits.push("coconut"); adiciona um elemento na última posição da array
//fruits.pop(); remove o último elemento da array
//fruits.unshift("mango"); adiciona um elemento na primeira posição da array
//fruits.shift(); remove o primeiro elemento da array

let numOfFruits = fruits.length; //retorna o tamanho da array
let index = fruits.indexOf("banana"); //retorna o index de algum elemento da array (caso nao tenha match, ele retorna -1)

console.log(numOfFruits);
console.log(index);

fruits.sort(); //deixa em ordem alfabética.
//fruits.sort().reverse(); deixa em ordem alfabética reversa


for(let fruit of fruits){
    console.log(fruit);
}