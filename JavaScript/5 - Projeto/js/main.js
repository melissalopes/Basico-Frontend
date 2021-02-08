let div1 = document.querySelector("#cards");
let div2 = document.querySelector("#medpesos");
let div3 = document.querySelector("#maiorpeso");
let div4 = document.querySelector("#maiorsalario");

//construção dos Cards do botão Exibir
function montaCard(lista, cor){
    div1.innerHTML += `<div class='card ${cor}'>
                            <img src='${lista.foto}'> 
    
                            <div class='info'>
                                <div class='span'> <strong>${lista.nome}</strong> </div>

                                <div class='meio'>
                                    <strong>Idade: </strong>${lista.idade}<br>
                                    <strong>Altura: </strong>${lista.altura}<br>
                                    <strong>Peso: </strong>${lista.peso}<br>
                                    <strong>Gênero: </strong>${lista.genero}<br>
                                </div>
                    
                                <div class='salario'> <strong>R$ ${lista.salario}</strong> </div><br>
                    
                                <div class='profissao'> <strong>${lista.profissao}</strong> </div><br>                            
                            </div>
                        </div>`;
};

//faz a média de todos os pesos
function mediaPeso(){
    let soma = 0;
    for(let media of pessoas){
        soma += media.peso;  
    }
    div2.innerHTML = ` <div class='medpesos'><p>Média de Pesos: ${(soma/1000).toFixed(2)}</p></div> `;
}

//maior peso masculino
function maiorPeso(){
    let maior = 0;
    for(let homem of pessoas){       
        if(homem.genero == 'Masculino'){
            if(homem.peso > maior){
                maior = homem.peso;
                //construção do Card do botão Calcular
                div3.innerHTML = `<div class='maiorpeso masculino'> 
                                    <p><strong>MAIOR PESO: ${maior.toFixed(2)}</strong></p>
                                    <p><strong>Nome: ${homem.nome}</strong></p>
                                    <img src='${homem.foto}'><br><br>
                                    <p><strong>Idade: ${homem.idade}</strong></p>
                                    <p><strong>Profissão: ${homem.profissao}</strong></p>
                                </div> `;
            }
        }
    }    
}


//maior salário feminino
function maiorSalario(){
    let maior = 0;
    for(let mulher of pessoas){       
        if(mulher.genero == 'Feminino'){
            if(Number(mulher.salario) > maior){
                maior = mulher.salario;
                //construção do Card do botão Calcular
                div4.innerHTML= `<div class='maiorsalario feminino'> 
                                    <p><strong>MAIOR SALÁRIO: ${maior}</strong></p>
                                    <p><strong>Nome: ${mulher.nome}</strong></p>
                                    <img src='${mulher.foto}'><br><br>
                                    <p><strong>Idade: ${mulher.idade}</strong></p>
                                    <p><strong>Profissão: ${mulher.profissao}</strong></p>
                                </div> `;
            }
        }
    }    
}

//muda a cor do Card de acordo com o gênero
document.querySelector("#btn1").addEventListener("click", function(){
    for(let lista of pessoas){
        if(lista.genero == 'Masculino'){
            let cor = 'masculino';
            montaCard(lista, cor);
        }else if(lista.genero == 'Feminino'){
            let cor = 'feminino';
            montaCard(lista, cor);
        }
    }      
});

document.querySelector("#btn2").addEventListener("click", function(){
    mediaPeso();
    maiorPeso();
    maiorSalario();
});