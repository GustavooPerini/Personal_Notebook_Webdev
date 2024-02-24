const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const message = document.getElementById("myH3");

myButton.onclick = function(){

    let age = myInput.value;

    age = Number(age);

    if(age >= 100){
        message.textContent = "You are TOO old";
    }
    else if(age == 0){
        message.textContent = "You are not born yet";
    }
    else if(age >= 18){
        message.textContent = "You are old enough";
    }
    else if(age < 0){
        message.textContent = "Your age MUST be bigger than 0";
    }
    else{
        message.textContent = "You must be 18+";
    }
}
