$("#btn1").click(function(){
    let str_pesq = $("#pesq").val();
    let tipo_pesq = $("#tipo").val();

    pesquisar(str_pesq, tipo_pesq);
});

function pesquisar(str, tipo){

    $("#res").html("");

    for(let livro of biblioteca){
        switch(tipo){
            case "1":
                if(livro.titulo.indexOf(str) >= 0){
                    mostraLivro(livro);
                }
                break;
            case "2":
                if(livro.classificacao.indexOf(str) >= 0){
                    mostraLivro(livro);
                }
        }
    }

};

function mostraLivro(livro){
    let autores = "";

    for(let autor of livro.autores){
        autores += autor.nome + "<br>";
    }

    let saida = "<table border='1'> <tr> <th>Título</th> <th>Autor(es)</th> <th>Edição</th> <th>Ano Publicação</th> <th>Editora</th> <th>Local Publicação</th> <th>Classificação</th> <th>Código</th> <th>Assunto</th> </tr>";

    saida +=    `<tr> 
                    <td>${livro.titulo}</td>
                    <td>${autores}</td>
                    <td>${livro.edição}</td>
                    <td>${livro.ano_publicacao}</td>
                    <td>${livro.editora}</td>
                    <td>${livro.local_publicacao}</td>
                    <td>${livro.classificacao}</td>
                    <td>${livro.codigo}</td>
                    <td>${livro.assunto}</td>
                </tr>`;

    saida += "</table>";
    $("#res").html(saida);
}