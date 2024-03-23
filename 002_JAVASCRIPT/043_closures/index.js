/*
    closures = conhecido como escopo. Pode ser usada quando temos uma função externa
               e uma função interna. Onde podemos deixar alguns dados privados
               e utilizar apenas dentro da função
*/

function createCounter(){

    let count = 0;

    function increase(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increase, getCount}; //estou retornando um objeto que possui métodos criados dentro da função   
}

const counter = createCounter();

counter.increase();
counter.increase();
counter.increase();
counter.increase();

console.log(`The corrent count is ${counter.getCount()}`);