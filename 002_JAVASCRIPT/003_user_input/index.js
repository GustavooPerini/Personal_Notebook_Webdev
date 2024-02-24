/*
    how to accept user input:

    1. EASY WAY = window prompt
    2. PROFESSIONAL WAY = HTML textbox
*/

//EASY:

/*
let username;

username = window.prompt("What's your username?");
console.log(username);
*/

//PROFESSIONAL

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Welcome ${username}`;
}