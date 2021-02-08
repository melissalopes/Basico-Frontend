"use strict"

function verificar(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);

    if (num1 > num2){
        return ("X é maior que Y");
    } else if( num2 > num1){
        return ("Y é maior que X");
    } else{
        return ("X e Y são iguais");
    }
}

document.querySelector("#botao").addEventListener("click", function(){
    document.querySelector("#verificar").value = verificar();
});
