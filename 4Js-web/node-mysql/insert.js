const readline = require('readline-sync');
const mysql = require('mysql2');
exports.cadastros = function(){
  console.log("Bem vindo. Escolha uma opção para cadastro a seguir!");
  const tipoCadastro = readline
      .question("\n 1 - Produtos." +
                "\n 2 - Funcionários." +
                "\n 3 - Clientes." +
                "\n 4 - Estoque" +
                "\n 5 - Despesas"+
                "Digite a escolha: ");
  switch (tipoCadastro) {
    case '1':
      cadastroProdutos();
      break;
    case '2':
    //Cadastro de Funcionários:
    cadastroFuncionarios();
      break;
    case '3':
    //Cadastro de clientes:
      break;
    case '4':
    //Adastro de estoque:
      break;
    case '5':
    //Cadastro de despesas:
      break;
    default:
  }
  function cadastroProdutos(){
    //Cadastro de produtos
    const codigo = parseFloat(readline.question("Código do produto: "));
    const descricao = readline.question("Descrição: ");
    const qtde = parseFloat(readline.question("Quantidade: " ));
    const preco_compra = parseFloat(readline
      .question("Preço unitário de compra: "));
    const data_compra = readline.question("Data de compra(ano-mês-dia): ");
    //
    console.log("Bem vindo. Insira seu login e senha a seguir.");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    let con = mysql.createConnection({
    host: "localhost",
    user: user,
    password: senha,
    database: "vendas_apresentacao"
  });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO estoque ( codigo, descricao, qtde," +
                  " preco_compra, data_compra) VALUES ('" + codigo +
                  "','" + descricao + "','" + qtde + "','" + preco_compra +
                  "','" + data_compra + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 produto cadastrado com sucesso!");
        const opt = readline.question("Tecle 1 para cadastrar outro produto ou 2 para sair: ");
      });
    });
  }
  function cadastroFuncionarios(){
    //Cadastro de funcionarios
    const nome = readline.question("Nome do funcionário: ");
    const endereco = readline.question("Endereço: ");
    const cpf = readline.question("Cpf: ");
    const cargo = readline.question("Cargo: ");
    const salario = parseFloat(readline.question("Salario: " ));
    const data_admissao = readline.question("Data de admissão: ");
    let data_demissao = readline.question("Data de demissão: ");
    if (data_demissao == '') {
      data_demissao = '2011-12-02';
    }
    //
    console.log("Bem vindo. Insira seu login e senha a seguir.");
    let user = readline.question("Digite o usuário: ");
    let senha = readline.question("Digite a senha: ");
    let con = mysql.createConnection({
    host: "localhost",
    user: user,
    password: senha,
    database: "vendas_apresentacao"
  });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO funcionarios ( nome, endereco, cpf," +
                  " cargo, salario , data_admissao, data_demissao) VALUES ('" + nome +
                  "','" + endereco + "','" + cpf + "','" + cargo +
                  "','" + salario + "','" + data_admissao +
                  "','" + data_demissao + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Funcionário cadastrado com sucesso!");
        const opt = readline.question("Tecle 1 para cadastrar outro produto ou 2 para sair: ");
      });
    });
  }
}
