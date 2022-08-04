const cadastrar = require('./insert.js');
const pesquisar = require('./select.js');
const pesquisarGrupo = require('./select_all.js');
const readline = require('readline-sync');

console.log("Escolha uma opção de acesso a seguir!");
const tipoCadastro = readline
    .question("\n 1 - Cadastros." +
              "\n 2 - Consultas." +
              "\n Digite a escolha: ");
switch (tipoCadastro) {
  case '1':
    cadastrar.cadastros();
    break;
  case '2':
    let tipo = readline
      .question("Digite: " +
          "\n 1 - para trazer resultados em grupo. " +
          "\n 2 - para resultado de pesquisa individual." +
          "\n 3 - para sair.")
    if (tipo == '1') {
      pesquisarGrupo.consultaGrupo();
    } else if(tipo == '2'){
      pesquisar.consulta();
    }else if(tipo == '3'){
      console.log("Você escolheu sair...");
    }
    break;
  default:
    console.log("Você foi desconectado pois não escolheu nenhuma opção!");
    break;
}
