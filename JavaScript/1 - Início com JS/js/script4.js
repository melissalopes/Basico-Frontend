let botoes_numericos = document.querySelectorAll(".calc_botao");
for(let botao of botoes_numericos){
    botao.addEventListener("click", function(){
        add(botao);
    })
}

let botoes_op = document.querySelectorAll(".calc_botao_op");
for(let botao of botoes_op){
    botao.addEventListener("click", function(){
        add(botao);
    })
}

document.querySelector("#resp").addEventListener("click", function(){
    document.querySelector("#res").value = eval(document.querySelector("#res").value);
})

document.querySelector("#clear").addEventListener("click", function(){
    document.querySelector("#res").value = "";
})

document.querySelector("#pow").addEventListener("click", function(){
    let n = Number(prompt("Digite o valor da potência"));
    document.querySelector("#res").value = Math.pow(Number(document.querySelector("#res").value), n);
})

document.querySelector("#round").addEventListener("click", function(){
    document.querySelector("#res").value = Math.round(document.querySelector("#res").value);
})

document.querySelector("#sqrt").addEventListener("click", function(){
    document.querySelector("#res").value = Math.sqrt(document.querySelector("#res").value);
})

function add(b){
    document.querySelector("#res").value += b.innerHTML;
}
