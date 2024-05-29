// classList = é um atributo que permite acessar as classes de um determinado elemento
//             com isso, é possível adicionar, remover e verificar uma classe.

/*

add()
remove()
toggle() remove se tiver, adicionar se nao tiver
replace(oldClass, newClass)
contains() retorna True ou False se tiver ou não uma classe

*/

let buttons = document.querySelectorAll(".myButtons")

buttons.forEach(element => {
    element.classList.add("enabled");

    element.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })

    element.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })

    element.addEventListener("click", event => {
        
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬"
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }

    })
})
