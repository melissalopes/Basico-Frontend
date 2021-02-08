"use strict"

document.querySelector("#soma").addEventListener("click", function(){
    calcsoma();
})  


document.querySelector("#sub").addEventListener("click", function(){
    calcsub();
})  
document.querySelector("#mult").addEventListener("click", function(){
    calcmult();
})  
document.querySelector("#div").addEventListener("click", function(){
    calcdiv();
}) 

function mostraresultado(resp){
    document.querySelector("#result").value = resp;
}

function calcsoma(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    mostraresultado(num1 + num2); 
}
function calcsub(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    mostraresultado (num1 - num2); 
}
function calcmult(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    mostraresultado(num1 * num2); 
}
function calcdiv(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    mostraresultado(num1 / num2); 
}


