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
