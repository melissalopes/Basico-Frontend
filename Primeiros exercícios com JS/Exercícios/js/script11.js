"use strict"

let num = document.querySelector("#num").value;

document.querySelector("#botao").addEventListener("click", function(){
    let num = parseInt(document.querySelector("#num").value);
    let int = 0;

    for(let i=1; i <= num; i++){
        int = int + i;
    }
    document.querySelector("#resultado").value = int;
})