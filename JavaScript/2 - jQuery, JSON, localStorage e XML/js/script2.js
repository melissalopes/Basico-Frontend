let url = "xml/receitaf.xml";

$.ajax(url)
    .done(function(xml){
        $(xml).find("contribuinte").each(function(){
            $("#cards").append(`<div class="card">
                                    <img src="${ $(this).find("foto").text() }" class="image-card">
                                    <p class="nome"> ${ $(this).find("nome").text() } </p>
                                    <p class="estado"> ${ $(this).find("estado").text() } </p>
                                    <p class="data_nasc"> ${ $(this).find("data_nasc").text() } </p>
                                    <p class="cpf"> ${ $(this).find("cpf").text() } </p>
                                    <p class="rg"> ${ $(this).find("rg").text() } </p>
                                    <div class="endereco">
                                        <p class="logradouro"> ${ $(this).find("logradouro").text() } </p>
                                        <p class="numero"> ${ $(this).find("numero").text() } </p>
                                        <p class="bairro"> ${ $(this).find("bairro").text() } </p>
                                        <p class="cep"> ${ $(this).find("cep").text() } </p>
                                        <p class="cidade"> ${ $(this).find("cidade").text() } </p>
                                    </div>
                                    <div class="conta_corr">
                                        <p class="renda"> ${ $(this).find("renda").text() } </p>
                                        <p class="banco"> ${ $(this).find("banco").text() } </p>
                                        <p class="agencia"> ${ $(this).find("agencia").text() } </p>
                                        <p class="numero_conta"> ${ $(this).find("numero_conta").text() } </p>
                                    </div>
                                    <div class="contato">
                                        <p class="email"> ${ $(this).find("email").text() } </p>
                                        <p class="telefone"> ${ $(this).find("telefone").text() } </p>
                                        <p class="celular"> ${ $(this).find("celular").text() } </p>
                                    </div>
                                </div>`);
        })
    })
    .fail(function(){
        alert("O arquivo deu erro!");
    })