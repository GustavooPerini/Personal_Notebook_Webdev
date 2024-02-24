//GUESSING GAME

const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random()*maxNumber) + minNumber;

let attemp = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNumber}-${maxNumber}:`);
    guess = Number(guess);

    if(isNaN(guess)){

        window.alert("Please, enter with a valid number!");
    }
    else if(guess < minNumber || guess > maxNumber){

        window.alert("Please, enter with a valid number!");
    }
    else{

        attemp++;
        if(guess > answer){

            window.alert("TOO HIGHT! Try again!");
        }
        else if(guess < answer){
    
            window.alert("TOO LOW! Try again!");
        }
        else{
            running = false;
        }
    }
    
}

window.alert(`CONGRATULATIONS! You got it right in ${attemp} attempts`);