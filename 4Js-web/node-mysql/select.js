const mysql = require('mysql2');
const readline = require('readline-sync');

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
  con.query("SELECT * FROM registros_vendas", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
