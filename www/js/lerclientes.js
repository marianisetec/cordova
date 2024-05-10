function lerclientes()
{
    let requisicao = new XMLHttpRequest();
    let url = "https://etec.fernandograciano.com.br/listarclientes.php";
    requisicao.open("GET", url);
    requisicao.send();
    requisicao.onload = function()
    {

        let corpotabela = document.querySelector("#corpotabela")
        let dados = JSON.parse(this.response)
        dados.forEach(function (valor,chave)
        {

            let novalinha = document.createElement("tr")
            let celulaNome = document.createElement("td")
            let celularCelular =  document.createElement("td")
            celulaNome.innerHTML = valor.nome
            celularCelular.innerHTML = valor.celular
            novalinha.append(celulaNome)
            novalinha.append(celularCelular)
            corpotabela.append(novalinha)
        });

        console.log(this.response)
    }
}