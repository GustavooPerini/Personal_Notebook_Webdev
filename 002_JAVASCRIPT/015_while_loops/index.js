// === -> compara se duas variáveis possuem mesmo valor e datatype
// !== -> compara se duas variáveis não possuem mesmo valor e datatype


let username = "";

while(username === "" || username === null){

    username = window.prompt("Enter your name:");
}

console.log(`Hello ${username}`);

let loggedIn = false;
let login;
let password;

do{

    login = window.prompt("Enter your login:");
    password = window.prompt("Enter your password:");

    if(login === "guguperini" && password === "gugubolado"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Wrong credentials. Please try again!");
    }

}while(!loggedIn);