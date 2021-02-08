"use strict"

let num = document.querySelector("#num").value;

document.querySelector("#botao").addEventListener("click", function(){
    let num = parseInt(document.querySelector("#num").value);
    let fat = 1;

    for(let i=1; i <= num; i++){
        fat = fat * i;
    }
    document.querySelector("#fatorial").value = fat;
})