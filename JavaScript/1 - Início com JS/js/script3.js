"use strict"; 

document.querySelector("#btn1").addEventListener("click", function(){
    let campotxt = document.querySelector("#txt").value;   
    let texto = "";
    texto = (campotxt.toUpperCase());
    document.querySelector("#res").innerHTML = texto;
})

document.querySelector("#btn2").addEventListener("click", function(){
    inserirSimbolo();
})

function inserirSimbolo(){
    let campotxt2 = document.querySelector("#txt").value;   

    simbolo(campotxt2," ");

    function simbolo(str, simbolo){
        let saida = "";

        for (let i = 0; i <= str.length - 1; i++){
            saida+= str[i] + simbolo;
        }

        document.querySelector("#res").innerHTML = saida;
    }

}

