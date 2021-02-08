let div = document.querySelector("#lista");
    
function lista(placa){
        div.innerHTML += `<div class='div'>
                            <h1 id='estado'>${placa.estado} - <span>${placa.cidade}</span> </h1>
                            <p>${placa.placa}</p>
                        </div>`;
};

for (let placa of detran){
        lista(placa);
};
