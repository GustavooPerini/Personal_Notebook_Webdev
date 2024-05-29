// async/await: async = faz uma função retornar uma Promise
//              await = faz com que uma função assincrona espere um retorno de Promise

//              async possibilita escrever códigos assincronos de maneira sincrona.
//              async nao possui resolve ou rejec parâmetros
//              tudo depois de await entra em uma fila de eventos
//              não é possível usar await fora de uma função async


function walkDog(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const walkedDog = true;
            
            if(walkedDog){
                resolve("You walked the dog");
            }
            else{
                reject("You DIDN'T walk the dog");
            }

        }, 1500);
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const cleanedKitchen = true;

            if(cleanedKitchen){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }

        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const takenTrashOut = true;

            if(takenTrashOut){
                resolve("You taken out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }

        }, 500);
    })
}

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error);
    }
}

doChores();