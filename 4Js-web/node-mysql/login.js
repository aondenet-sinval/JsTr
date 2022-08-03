const cadastrar = require('./insert.js');
const readline = require('readline-sync');

console.log("Escolha uma opção de acesso a seguir!");
const tipoCadastro = readline
    .question("\n 1 - Cadastros." +
              "\n 2 - Consultas." +
              "Digite a escolha: ");
switch (tipoCadastro) {
  case '1':
    cadastrar.cadastros();
    break;
  case '2':
    console.log("Aguarde...");
    break;
  default:
    console.log("Você foi desconectado pois não escolheu nenhuma opção!");
    break;
}
