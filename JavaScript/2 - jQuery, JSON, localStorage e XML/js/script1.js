let base_alunos;

if(localStorage.getItem("base_alunos") !== null){
    base_alunos = JSON.parse( localStorage.getItem("base_alunos") );
}else{
    base_alunos = [];
}

$("#button1").click(gravarDados);
$("#button2").click(carregarDados);

function gravarDados() {
    base_alunos.push( {
                        Nome: $("#nome").val(), 
                        RGM: $("#rgm").val(), 
                        Média: Number($("#media").val()) 
                    });
    localStorage.setItem("base_alunos", JSON.stringify(base_alunos));
    limparCampos();
}

function carregarDados() {
    let saida = "<table border='1'> <tr> <th>Nome</th> <th>RGM</th> <th>Média</th> <th>Conceito</th> </tr>";

    for(let aluno of base_alunos){
        saida += `<tr> 
                    <td>${aluno.Nome}</td>
                    <td>${aluno.RGM}</td>
                    <td>${aluno.Média}</td>
                    <td>${getConceito(aluno.Média)}</td>
                </tr>`;
    }
    saida += "</table>";
    $("#rel").html(saida);
}

function limparCampos() {
    $("#nome").val("");
    $("#rgm").val("");
    $("#media").val("");
} 

function getConceito(M){
    if(M >= 6){
        return "<span class='aprovado'>Aprovado</span>";
    }else if(M < 1){
        return "<span class='reprovado'>Reprovado</span>";
    }else{
        return "<span class='exame'>Exame</span>";
    }
}