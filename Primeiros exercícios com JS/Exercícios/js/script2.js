"use strict"

function parOuImpar(){
    let num = parseInt(document.querySelector("#num").value);
    
    if (num % 2 == 0){
        return ("O número é par!");
    } else{
        return ("O número é impar!");  
    }
}

document.querySelector("#botao").addEventListener("click", function(){
    document.querySelector("#verificacao").value = parOuImpar();
});