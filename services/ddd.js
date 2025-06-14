export const buscarDDDCallBack = async (ddd, callBack)=>{
// Cria e exporta uma função chamada busbuscarDDDCallBack que recebe o DDD e uma função callBack //
    let urlAPI = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;
    // Monta a URL da API, colocando o DDD digitado no final //
    fetch // é uma função do JS para fazer requisições a servidoes, APIs, etc //
    (urlAPI, { method: "GET" }) // é um objeto de configuração dizendo que o tipo da requisição é GET (ou seja, você só quer consultar dados).

    .then(resposta =>{
    // Quando a resposta chegar, ela será recebida aqui //
        if(!resposta.ok){ // se a resposta não for OK...
            throw new Error("Falha no feth"); // ...joga um erro
        }
        return resposta.json(); // caso contrário, a resposta é convertida para JSON
    })
    .then (resposta =>callBack(resposta)) // Quando o JSON estiver pronto, chama função callback, passando a resposta //
    .catch(error => {console.error("Error:", error);}); // Se der erro, exibe no console //
}