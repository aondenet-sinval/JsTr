const mysql = require('mysql2');
const readline = require('readline-sync');

console.log("Digite os dados do produto para cadastro a seguir!");
const codigo = parseFloat(readline.question("Código do produto: "));
const descricao = readline.question("Descrição:");
const qtde = parseFloat(readline.question("Quantidade: " ));
const preco_compra = parseFloat(readline.question("Preço unitário de compra: "));
const data_compra = readline.question("Data de compra: ");

const opt = readline.question("Escolha sua forma de conexão ao BD: " +
                                "\n 1 - interativa \n 2 - estática");
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

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO estoque ( codigo, descricao, qtde," +
              " preco_compra, data_compra) VALUES ('" + codigo + "','" + descricao + "','" + qtde + "','" + preco_compra + "','" + data_compra + "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 produto cadastrado com sucesso!");
  });
});
