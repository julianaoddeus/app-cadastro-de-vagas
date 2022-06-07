let nomeCargo = document.querySelector('#inputCargo');
let nomeEmpresa = document.querySelector('#inputEmpresa');
let nomeCidade = document.querySelector('#inputCidade');
let email = document.querySelector('#inputEmail');
let descricaoVaga = document.querySelector('#descricaoVaga');
let clt = document.querySelector('#inputClt');
 function BuscaVaga() {    

    
    
    document.querySelector('.descricaoVaga').innerHTML = `    
    <div class="card" style="width: 20rem;">    
        <div class="card-body">
            <h4 class="card-title"> ${nomeCargo.value}</h4>
            <p class=" card-text">${nomeEmpresa.value} - ${nomeCidade.value}</p>          
            <p class=" card-text">Salário a combinar</p>
            <p class=" card-text">${descricaoVaga.value}</p>  
            <p class="card-text">${clt.value ? "Contratação tipo CLT": ''}</p>  
            <p class=" card-text">Enviar e-mail para: ${email.value}</p>    
        </div>
    </div>    
    `;
    
    
}







document.querySelector('#cadastrar').addEventListener('click', function () {
    BuscaVaga();
})