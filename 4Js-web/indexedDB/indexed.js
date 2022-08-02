// Na linha abaixo, você deve incluir os prefixos do navegador que você vai testar.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// Não use "var indexedDB = ..." se você não está numa function.
// Posteriormente, você pode precisar de referências de algum objeto window.IDB*:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla nunca usou prefixo nesses objetos, então não precisamos window.mozIDB*)

if (!window.indexedDB) {
    window.alert("Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.");
}

// Abrindo o banco de dados
var request = window.indexedDB.open("DBteste", 3);
request.onerror = function(event) {
  alert('Erro ao criar o Banco: ' + event.target.errorCode);
};
request.onsuccess = function(event) {
  db = request.result;
  console.log('Criação do banco bem-sucedida');
};

// Este evento é implementado somente em navegadores mais recentes
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // cria um objectStore para esse banco
  var objectStore = db.createObjectStore("nome", { keyPath: "minhaChave" });
};

// Isso é o que os dados de nossos clientes será.
const DadosClientes = [
  { cpf: "111.111.111-11", nome: "Bill", idade: 35, email: "bill@company.com" },
  { cpf: "110.110.110-00", nome: "Donna", idade: 32, email: "donna@home.org" }
];
const dbName = 'clientes';
var request = indexedDB.open("dbName", 2);

request.onerror = function(){
  //Tratamento de erros...
};

request.onupgradeneeded = function(event){
  var db = event.target.result;

  //Usando cpf como keyPath por que é único:
  var objectStore = db.createObjectStore("clientes", { keyPath: "cpf" });

  //Cria o indice nome não único:
  objectStore.createIndex("nome", "nome",{ unique: false });
  //Cria o indice para email único:
  objectStore.createIndex("email", "email", { unique: true });

  objectStore.transaction.oncomplete = function(event){
    //Armazenando os valores no objeto:
    var clientesObjectStore = db.transaction("clientes", "readwrite").objectStore("clientes");
    for (var i in DadosClientes) {
      clientesObjectStore.add(DadosClientes[i]);
    }
  }
}

//Criando outro objectStore com o key generator
//Abrindo o indexedDB:
var request = indexedDB.open("dbName", 3);

request.onupgradeneeded = function(){
  var db = event.target.result;

  //Criando o objeto nomes com autoincrement setado:
  var objStore = db.createObjectStore("nomes", {autoincrement: true})
  for (var i in DadosClientes) {
    objStore.add(DadosClientes[i].nome)
  }
}
//Escrevendo os dados banco:
var transaction = db.transaction(["clientes"], "rewrite");

// Faz algo após a inserção dos dados.
transaction.oncomplete = function(event) {
alert("Dados registrados no banco!");
};
transaction.onerror = function(event) {
  alert('Erro ao registrar os dados no banco: ' + event.target.errorCode);
};

var objectStore = transaction.objectStore("clientes");
for (var i in DadosClientes) {
  var request = objectStore.add(DadosClientes[i]);
  request.onsuccess = function(event) {
  // event.target.result == DadosClientes[i].cpf;
  };
};
