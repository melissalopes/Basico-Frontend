"use strict"

function calculaMedia(){ 
    let nota1 = parseFloat(document.querySelector("#nota1").value);
    let nota2 = parseFloat(document.querySelector("#nota2").value);
    let nota3 = parseFloat(document.querySelector("#nota3").value);

    let media = (nota1 + nota2 + nota3)/3; 
    document.querySelector("#media").value = media;    
    document.querySelector("#conceito").value = conceito(media);  
};

function conceito(media){
    if(media >= 6){
        return "APROVADO";
    }else if(media >= 3 && media < 6){
        return "EXAME";
    }else if(media < 3){
        return "REPROVADO";
    }
};

document.querySelector("#botao").addEventListener("click", function(){
    calculaMedia(); 
});
