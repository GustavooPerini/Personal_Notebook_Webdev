// promise = um objeto utiluzado para lidar com asychronous code
//           ele "promete retornar um valor"
//           new Promise((resolve, reject) => {asynchronous code})

//CHORES
// 1. Walk the dog.
// 2. Clean the kitchen
// 3. Take out the trash


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


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));
