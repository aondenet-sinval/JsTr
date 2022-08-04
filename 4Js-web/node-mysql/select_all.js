const mysql = require('mysql2');
const readline = require('readline-sync');
exports.consultaGrupo = function(){
  const opt = readline
  .question("Escolha o tipo de busca:" +
                "\n 1 - pesquisar vendas por data." +
                "\n 2 - pesquisar clientes por data de venda." +
                "\n 3 - pesquisar fornecedores por estado." +
                "\n 4 - pesquisar funcionários por data de admissão." +
                "\n 5 - pesquisar estoque por data de cadastro.\n");
  switch (opt) {
    case '1':
      pesquisarVendasGrupo();
      break;
    case '2':
      pesquisarClientesGrupo();
      break;
    case '3':
      pesquisarFornecedoresGrupo();
      break;
    default:
      console.log("Entre novamente e digite uma opção de pesquisa.");
      break;
  }

  function pesquisarVendasGrupo() {
    let dataInicial = readline.question("Data inicial: ");
    let dataFinal = readline.question("Data final: ");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });
    let pesquisa = "SELECT * FROM registros_vendas WHERE data >= '" + dataInicial + "' " + "AND data <= '" + dataFinal + "'";
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
  function pesquisarClientesGrupo() {
    let data = readline.question("Digite uma data inicial: ");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });
    let pesquisa = "SELECT * FROM clientes WHERE data >= '" + data + "'";
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
  function pesquisarFornecedoresGrupo() {
    let estado = readline.question("Digite o estado. " +
                                    "Exemplo(BA para Bahia): ");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });

    let pesquisa = "SELECT * FROM fornecedores WHERE endereco LIKE '%" + estado + "%'";
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
}
