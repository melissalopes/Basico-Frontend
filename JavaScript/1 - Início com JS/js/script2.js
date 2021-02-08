
let qntd_linhas  = Number(prompt("Digite a quantidade de linhas"));
let qntd_colunas = Number(prompt("Digite a quantidade de colunas"));

table = "<table>";

for(let i = 1; i <= qntd_linhas ; i++){
    table += "<tr>";
    for(let j = 1; j <= qntd_colunas; j++){

        let cor = (j % 2 == 0)? "verde" : "amarelo";

        table += `<td class="${cor}">${i},${j}</td>`;
    }  
    table += "</tr>";
}   
table += "</table>";

document.querySelector("#table").innerHTML = table;



