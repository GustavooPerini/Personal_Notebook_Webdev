const PI = 3.14159;
let circumference;
let radius;

//radius = window.prompt("Enter the radius of a circumference:");
//radius = Number(radius);

//circumference = 2*PI*radius;

document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2*PI*radius;

    document.getElementById("myH3").textContent = `The circumference is ${circumference}` + "cm";
}