// node lists = é uma lista estática de elementos HTML pegos por (id, class, element)
//              pode ser criada usando o método querySelectorAll()
//              parecido com array, mas não aceita os métodos (map, reduce, filter). Aceita o forEach()


let buttons = document.querySelectorAll(".buttons");

//ADICIONANDO PROPRIEDADES HTML/CSS
/*
buttons.forEach(element => {
    element.textContent += "😁"
    element.style.backgroundColor = "green"
})*/

//ADICIONANDO UM EVENT LISTENER CLICK
/*
buttons.forEach(element =>{
    element.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato"
    })
})*/

//MOUSEOVER + MOUSEOUT EVENT

buttons.forEach(element =>{
    element.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 30%)"
    })

    element.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 50%)"
    })
})