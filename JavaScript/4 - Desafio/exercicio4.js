"use strict";

function buscarCNH () {
    let cnh = document.querySelector("#pesq").value;
    let div = document.querySelector("#cards");

    for(let carteira of detran){
        if(cnh == carteira.cnh){
            div.innerHTML = 
            `<p id='cnh'><strong>CNH: </strong>${carteira.cnh}</p><br>
            <section class='meio'>
                <figure><img src='${carteira.foto}'></figure>
                <section class='dados'>
                    <strong>Placa: </strong>${carteira.placa}<br>
                    <strong>Nome: </strong>${carteira.proprietario}<br>
                    <strong>Gravidade: </strong>${carteira.gravidade}<br>
                    <strong>Pontos: </strong>${carteira.pontos}<br>
                    <strong>Data: </strong>${carteira.data_infracao}<br>
                    <strong>Valor: </strong>${carteira.valor}<br>
                </section>
            </section>`

            if(carteira.gravidade == "Leve"){
                div.style.backgroundColor = "#D1E7F6";
                div.style.borderColor = "#4f9ed3"
            }else if(carteira.gravidade == "Média"){
                div.style.backgroundColor = "#FFCC99";
                div.style.borderColor = "#f3983d"
            }else if(carteira.gravidade == "Grave"){
                div.style.backgroundColor = "#FF7C80";
                div.style.borderColor = "#cf2f34"
            }else if(carteira.gravidade == "Gravíssima"){
                div.style.backgroundColor = "#7F7F7F";
                div.style.borderColor = "#464646"
            }
        }       
    }
}

document.querySelector("#btn").addEventListener("click",function(){
    buscarCNH();
});