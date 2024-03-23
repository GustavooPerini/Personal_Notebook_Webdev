/*
    setTimeout() = serve para executar uma função com um delay.
                   setTimeout(callback, delay) em milisegundos.
    
    clearTimeout(timeoutId) = pode cancelar a ação da função depois do delay.
*/

/*function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);*/

//setTimeout(function(){window.alert("Hello")}, 3000);
//setTimeout(() => window.alert("Hello"), 3000);

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);

let id;

function startTime(){
    id = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTime(){
    clearTimeout(id);
    console.log("CLEARED");
}
