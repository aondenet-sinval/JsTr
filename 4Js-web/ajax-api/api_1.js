function reqListener(){
  console.log(this.responseText);
}
const produtos = document.querySelector(".produtos");
const servicos = document.querySelector(".servicos");
const oReq = new XMLHttpRequest();
if (servicos.onclick) {
  let path = "servicos.json";
}
produtos.onclick = function(){
  const url = "http://localhost:8125/produtos.json";
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
}

servicos.onclick = function(){
  const url = "http://localhost:8125/servicos.json";
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
}

///Pegar dados do formulário?
const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
function chamar(){
console.log(inputNome.value);//Pegando valores digitado pelo usuário
console.log(inputIdade.value);
}

  function cadastroVendas(){
    //Cadastro de produtos
    const codigo = document.querySelector("#codigo");
    const nome = document.querySelector("#nome");
    const descricao = document.querySelector("#descricao");
    const qtde =  document.querySelector("#qtde");
    const preco_un =  document.querySelector("#preco_un");
    const subtotal =  qtde. value * preco_un.value;

    //Dados de conexão
    let usuario =  document.querySelector("#usuario");
    let senha =  document.querySelector("#senha");
    console.log(codigo.value);
    console.log(usuario.value);
    console.log(senha.value);
  }
