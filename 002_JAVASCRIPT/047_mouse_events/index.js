// event listener = ouve eventos especificos para criar iteratividade em paginas web
//                  eventos: click, mouseover, mouseout
//                  .addEventListener(event, callback)

const myBox = document.getElementById("box");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event => {
    myBox.textContent = "OUTCH 🤕";
    myBox.style.backgroundColor = "tomato";
})

myButton.addEventListener("mouseover", event => {
    myBox.textContent = "Don't do it 😲";
    myBox.style.backgroundColor = "yellow";
})

myButton.addEventListener("mouseout", event => {
    myBox.textContent = "Click me 😀";
    myBox.style.backgroundColor = "lightgreen";
})