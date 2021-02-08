"use strict"

let base = document.querySelector("#base");
let altura = document.querySelector("#altura");

function calculaArea (){
    let base = Number(document.querySelector("#base").value);
    let altura = Number(document.querySelector("#altura").value);
    return base * altura;
};

document.querySelector("#botao").addEventListener("click", function(){
    document.querySelector("#area").value = calculaArea();
});

