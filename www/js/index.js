function ConsultaCep() {
    
    let campo = document.querySelector("#cep")
    let requisicao = new XMLHttpRequest();
    let url = "https://viacep.com.br/ws/"+ campo.value +"/json/";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function () {
        let objectCEP = JSON.parse(requisicao.response)
        let campoEndereco = document.querySelector("#logradouro")
        campoEndereco.value = objectCEP.logradouro

        let campoComplemento = document.querySelector("#Complemento")
        campoComplemento.value = objectCEP.complemento

        let campoBairro = document.querySelector("#Bairro")
        campoBairro.value = objectCEP.bairro

        let campoLocalidade = document.querySelector("#Localidade")
        campoLocalidade.value = objectCEP.localidade

    }
     
}
let botao = document.querySelector("#botao");
