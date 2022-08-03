const mysql = require('mysql2');
const readline = require('readline-sync');

const opt = readline
      .question("Escolha sua forma de conexão ao BD: " +
                    "\n 1 - interativa " +
                    "\n 2 - estática: ");

if (opt == 1) {
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    var con = mysql.createConnection({
    host: "localhost",
    user: user,
    password: senha,
    database: "vendas_apresentacao"
  });
}else if (opt == 2) {
    var con = mysql.createConnection({
    host: "localhost",
    user: "",//insira aqui seu usuário
    password: "",//senha
    database: "vendas_apresentacao"//banco de dados
  });
}
const pesquisar = readline
  .question("Escolha o tipo de busca:" +
                "\n 1 - pesquisa por codigo do produto" +
                "\n 2 - pesquisar todos os produtos " +
                "\n 3 - outros(exemplo: clientes, estoque. etc): ");
if (pesquisar  == 1) {
  let codigo = parseFloat(readline.question("Código do produto: "));
  let tabela = readline.question("Digite a tabela: ");
  let pesquisa = "SELECT * FROM " + tabela +  " WHERE codigo = " + codigo;
  con.connect(function(err) {
    if (err) throw err;
    con.query(pesquisa, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
} else if (pesquisar == 2) {
  let tabela = readline.question("Digite a tabela: ");
  let pesquisa = "SELECT * FROM " + tabela;
  con.connect(function(err) {
    if (err) throw err;
    con.query(pesquisa, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
} else if (pesquisar == 3) {
  let tabela = readline.question("Digite a tabela: ");
  let pesquisa = "SELECT * FROM " + tabela;
  con.connect(function(err) {
    if (err) throw err;
    con.query(pesquisa, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  con.close();
}
