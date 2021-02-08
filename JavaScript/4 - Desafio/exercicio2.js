"use strict";

let qtd = 10;
let vet_num = [];

$("#sorteia").click(function(){
    for(let i = 0; i < qtd; i++){
        let num = Math.round(Math.random()*1000);
        vet_num.push(num);
    }
    exibirVetor();
    qntdNumPares();
});

function exibirVetor(){
    for(let i = 0; i < qtd; i++){
        let mostra = "";
        mostra = `${vet_num[i]} <br>`;
        document.querySelector("#vetor").innerHTML += mostra;
    }
};

function qntdNumPares(){
    let mostra = 0;
    for(let i = 0; i < qtd; i++){
        if(vet_num[i] % 2 == 0){
            mostra = mostra + 1;
        }
    }
    document.querySelector("#num_pares").innerHTML += mostra;
};