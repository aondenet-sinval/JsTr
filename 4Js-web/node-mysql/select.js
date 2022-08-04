const mysql = require('mysql2');
const readline = require('readline-sync');
exports.consulta = function(){
  const opt = readline
  .question("Escolha o tipo de busca:" +
                "\n 1 - pesquisar vendas por codigo do produto." +
                "\n 2 - pesquisar clientes por CPF." +
                "\n 3 - pesquisar fornecedores por nome." +
                "\n 4 - pesquisar funcionários por nome." +
                "\n 5 - pesquisar estoque por código.\n");
  switch (opt) {
    case '1':
      pesquisarVendas();
      break;
    case '2':
      pesquisarClientes();
      break;
    case '3':
      pesquisarFornecedores();
      break;
    case '4':
      pesquisarFuncionario();
      break;
    case '5':
      pesquisarEstoque();
      break;
    default:
      console.log("Entre novamente e digite uma opção de pesquisa válida.");
      break;
  }

  function pesquisarVendas() {
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });
    let codigo = parseInt(readline.question("Código do produto: "));
    let pesquisa = "SELECT * FROM registros_vendas WHERE codigo = " + codigo;
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
  function pesquisarClientes() {
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });
    let cpf = readline.question("CPF do cliente: ");
    let pesquisa = "SELECT * FROM clientes WHERE cpf='" + cpf + "'";
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
  function pesquisarFornecedores() {
    let nome = readline.question("Nome do fornecedor: ");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });

    let pesquisa = "SELECT * FROM fornecedores WHERE nome='" + nome + "'";
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
  function pesquisarFuncionario() {
    let nome = readline.question("Nome do funcionário: ");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });

    let pesquisa = "SELECT * FROM funcionarios WHERE nome='" + nome + "'";
    con.connect(function(err) {
      if (err) throw err;
      con.query(pesquisa, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      con.end();
    });
  }
  function pesquisarEstoque() {
    let codigo = parseInt(readline.question("Digite o código do produto: "));
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
      host: "localhost",
      user: user,
      password: senha,
      database: "vendas_apresentacao"
    });

    let pesquisa = "SELECT * FROM estoque WHERE qtde ='" + codigo + "'";
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
