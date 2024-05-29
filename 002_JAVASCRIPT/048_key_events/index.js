// mesma coisa que o mouse event, porem muda o tipo mandando
//                      eventos: keydown, keyup
//                      .addEventListener(event, callback)

const myBox = document.getElementById("myBox");

const movement = 10;
let x = 0;
let y = 0;


/*document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
})*/

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
})


document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        myBox.textContent = "😲";
        myBox.style.backgroundColor = "tomato";

        switch(event.key){
            
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break
            case "ArrowLeft":
                x -= movement;
                break
        }

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`

    }
})