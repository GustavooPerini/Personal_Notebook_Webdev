//      fetch = função usada para fazer requisições HTTP e buscar recursos.
//              (JSON files, images, files etc)
//              utilizado para interagir com APIs e buscar e mandar dados
//              assincronamente pela web
//              fetch(url, {options})
//              options: GET, SET, PUT, DELETE

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/

async function fetchData(){

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);
    }

}

fetchData();