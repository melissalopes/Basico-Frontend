"use strict"

function calcularCondicao(){
    let preco = parseFloat(document.querySelector("#preco").value);
    let condicao = parseInt(document.querySelector("#cond").value);
    let valorcond = 0;
    document.querySelector("#valor_total").value = preco;

    switch (condicao){
        case 1: valorcond = preco - (preco*0.1); break;
        case 2: valorcond = preco - (preco*0.05); break;
        case 3: valorcond = preco + (preco*0.1); break;
    }
    document.querySelector("#valor_cond").value = valorcond;
};

document.querySelector("#botao").addEventListener("click", function(){    
    calcularCondicao();
});
