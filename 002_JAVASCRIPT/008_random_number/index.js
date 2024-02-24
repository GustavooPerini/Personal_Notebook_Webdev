//RANDOM NUMBER

//caso queria um número aleatório entre um intervalo diferente, faça o seguinte:

/*
const MIN = 50;
const MAX = 100;

let randomNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN;
*/

//let randomNumber = Math.floor(Math.random()*6) + 1; numero aleatório de 1 a 6

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const MAX = 6;
const MIN = 1;
let randomNumber;


myButton.onclick = function(){
    randomNumber = Math.floor(Math.random() * MAX) + MIN;
    myLabel.textContent = randomNumber;
}