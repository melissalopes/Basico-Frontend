"use strict"

let total = document.querySelector("#total_compra");
let parcelas = document.querySelector("#parc");

function calculaParcela(){
    let total = parseFloat(document.querySelector("#total_compra").value);
    let parcelas = parseInt(document.querySelector("#parc").value); 
    
    let valorfinal = 0;

    if (parcelas == "1"){
        valorfinal = total;
    } else if(parcelas == "2"){
        valorfinal = ((total*0.03) + total)/2;
    } else if(parcelas == "4"){
        valorfinal = ((total*0.07) + total)/4;
    }

    return valorfinal;
};

document.querySelector("#botao").addEventListener("click", function(){
    document.querySelector("#valor_parc").value = calculaParcela ();
});

