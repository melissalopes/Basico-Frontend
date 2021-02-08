$("#btn1").click(function(){
    $("#box1").show();
    $("#box2").hide();
    $("#box3").hide();
});

$("#btn2").click(function(){
    $("#box1").hide();
    $("#box2").show();
    $("#box3").hide();
});

$("#btn3").click(function(){
    $("#box1").hide();
    $("#box2").hide();
    $("#box3").show();
});


let max = 5;
let cont = 1;
$("#ant").click(function(){

    if(cont == 1){
        cont = max;
    }else{
        cont--;
    }

    document.querySelector("#imagem").src = "imagens/img"+cont+".gif";
});

$("#prox").click(function(){

    if(cont == max){
        cont = 1;
    }else{
        cont++;
    }

    document.querySelector("#imagem").src = "imagens/img"+cont+".gif";
});

let horas = 0;
let minutos = 0;
let segundos = 0;
let tempo = 1000;
let cronometro = 0;

function timer(){
    segundos++;

    if(segundos == 60){
        segundos = 0;
        minutos++;

        if(minutos == 60){
            minutos = 0;
            horas++;
        }
    }

    let format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
    document.querySelector("#rel").innerText = format;
}

cronometro = setInterval(() => { timer(); }, tempo);

document.querySelector("#calcular").addEventListener("click", function(){
    tabuada();
})

function tabuada(){
    let num = parseInt(document.querySelector("#val").value);
    let resposta = document.querySelector("#resp");
    let tabuada = "";
  
    for(let i = 1; i <= 10 ; i++){       
        tabuada += `${num} x ${i} = ${num*i} <br>`;
    }
    
    resposta.innerHTML = tabuada;
  }