/*
    synchronous code = código que é executado linha por linha, esperando cada 
                       operação ser concluída.
    
    assynchronous code = permite que múltiplas operações ocorram no código sem
                         quebrar o flow dele, não existe espera de operação.
    pode ser lidado com: (callbacks, promises, Async/Await)   
*/

/* a função setTimeout é uma função assincrona, onde ela pode atrasar uma operação
   mas caso seja necessário que essa operação seja realizada antes de outras,
   podemos ajeitar com callback. Veja abaixo:
*/

/*
setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

neste modelo, temos um atraso na Task 1, que acaba sendo executada por último.

*/


function func1(callback){

    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);

// aqui a task 1 vem primeiro, mesmo tendo o seu atraso.