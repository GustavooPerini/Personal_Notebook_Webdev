// checked = propiedade que verifica se uma checkbox ou um radio button foi marcado.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent = "You are NOT subscribed!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with VISA";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal";
    }
    else{
        paymentResult.textContent = "You MUST choose a payment type";
    }
}