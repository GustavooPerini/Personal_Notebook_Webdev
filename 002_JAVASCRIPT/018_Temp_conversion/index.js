const textBox = document.getElementById("myInput");
const toFahrenheit = document.getElementById("celToFah");
const toCelsius = document.getElementById("fahToCel");
const result = document.getElementById("result");
let temp;

function convert(){
    
    if(toFahrenheit.checked){

        temp = Number(textBox.value);
        temp = 1.8*temp + 32;
        result.textContent = temp.toFixed(1) + "°F"; //o método em temp limita as casas decimais
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32)/1.8;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select an unit";
    }

}