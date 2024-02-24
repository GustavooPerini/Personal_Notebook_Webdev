const decreaseBtn = document.getElementById("decreaseB");
const resetBtn = document.getElementById("resetB");
const increaseBtn = document.getElementById("increaseB");
const label = document.getElementById("label");

let cont = 0;

decreaseBtn.onclick = function(){
    cont--;
    label.textContent = cont;
}

resetBtn.onclick = function(){
    cont = 0;
    label.textContent = cont;
}

increaseBtn.onclick = function(){
    cont++;
    label.textContent = cont;
}