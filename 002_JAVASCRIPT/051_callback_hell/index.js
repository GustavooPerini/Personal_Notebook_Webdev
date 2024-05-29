// callback hell = basicamente é um callback chamando outro callback
//                 utilizado para trabalhar com asynchronous functions

// O CÓDIGO ABAIXO É ASSINCRONO, APRESENTANDO ATRASO ENTRE AS EXECUÇÕES
/*
function task1(){

    setTimeout(() => {
        console.log("task 1 complete");
    }, 2000);
}

function task2(){

    setTimeout(() => {
        console.log("task 2 complete");
    }, 1000);
}

function task3(){

    setTimeout(() => {
        console.log("task 3 complete");
    }, 3000);
}

function task4(){

    setTimeout(() => {
        console.log("task 4 complete");
    }, 1500);
} 


task1();
task2();
task3();
task4();
console.log("all tasks complete");
*/


//SOLUÇÃO PARA O PROBLEMA ACIMA:

function task1(callback){

    setTimeout(() => {
        console.log("task 1 complete");
        callback();
    }, 2000);
}

function task2(callback){

    setTimeout(() => {
        console.log("task 2 complete");
        callback();
    }, 1000);
}

function task3(callback){

    setTimeout(() => {
        console.log("task 3 complete");
        callback();
    }, 3000);
}

function task4(callback){

    setTimeout(() => {
        console.log("task 4 complete");
        callback();
    }, 1500);
}


task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("all tasks complete");
            });
        });
    });
});
