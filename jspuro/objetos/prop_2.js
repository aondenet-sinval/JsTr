//Criar um objeto com propriedades mutáveis
//As propriedades e valores deverão ser definidas
//pelo usuário.
const readline = require('readline-sync');
function bolsa(nome,qtde){
  let acao = {
    [nome]: nome,
    [qtde]: qtde
  }
  return console.log('Nome da ação: ' + acao[nome]
    + '.  Quantidade: ' + acao[qtde]);
};
//Pegando as opções de investimento do usuário:
const nome = readline.question(`Qual o nome da ação? `);
const qtde = parseInt(readline.question(`Qual a quantidade? `));

bolsa(nome,qtde);
