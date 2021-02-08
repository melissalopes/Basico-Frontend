"use strict";

let vetor_nomes = [];
let i = 0;
let nome = "";

while(true){
    nome = prompt("Digite um nome:")
    if (nome != null){
        vetor_nomes[i] = nome;
        i++;
    }else{
        break;
    }
}

let conteudo = "<table>";
conteudo += "<tr><th>Índice</th><th>Nome</th></tr>";

for(let j = 0; j < vetor_nomes.length; j++){
    conteudo+= "<tr>";
    conteudo+= "<td>" + (j+1) +"</td>";
    conteudo+= "<td>" + vetor_nomes[j] + "</td>";
    conteudo+= "</tr>";
}
conteudo += "</table>";

document.querySelector("#resp").innerHTML = conteudo;
