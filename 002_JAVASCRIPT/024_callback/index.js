// CALLBACKS = uma função que recebe outra função como argumento.

function sum(callback, x, y){ //função principal que irá receber callback
    let result = x + y;
    callback(result);
}

function display(result){ // função de callback
    console.log(result);
}

function displayDocument(result){ // função de callback
    document.getElementById("myH1").textContent = result;
}

function printaGugu(){
    document.getElementById("myH1").textContent = "gugu";
}

sum(displayDocument, 5, 2); //passa o nome da função como argumento sem ().

