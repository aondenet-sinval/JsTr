const readline = require('readline-sync');
const mysql = require('mysql2');
//Descomente abaixo e remova a variável acima
//Caso sua versão do cliente mysql seja recente
//const mysql = require('mysql');//Requer versão mais recente
exports.cadastros = function(){

  console.log("Bem vindo ao cadastro. Escolha uma opção!");
  const tipoCadastro = readline
      .question("\n 1 - Produtos." +
                "\n 2 - Funcionários." +
                "\n 3 - Clientes." +
                "\n 4 - Vendas." +
                "\n 5 - Fornecedores. " +
                "\n 6 - Despesas. " +
                "\n Digite a escolha: ");
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
    cadastroClientes();
      break;
    case '4':
    //Cadastro de estoque:
    cadastroVendas();
      break;
    case '5':
    //Cadastro de Fornecedores:
      cadastroFornecedores();
      break;
    case '6':
    //Cadastro de despesas:
      cadastroDespesas();
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
    console.log("Insira seu login e senha a seguir.");
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
      });
      con.end();
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
    console.log("Insira seu login e senha a seguir.");
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
      });
      con.end();
    });
  }
  function cadastroClientes(){
    //Cadastro de clientes
    const id = parseInt(readline.question("Registre o id: "));
    const nome = readline.question("Nome: ");
    const cpf = readline.question("Cpf: ");
    const endereco = readline.question("Endereço: ");
    const telefone = readline.question("Telefone: " );
    const valor = parseFloat(readline
      .question("Total compra: "));
    const data = readline.question("Data de compra(ano-mês-dia): ");
    //
    console.log("Insira seu login e senha a seguir.");
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
      var sql = "INSERT INTO clientes ( id, nome, cpf, endereco," +
                  " telefone, valor, data) VALUES ('" + id + "','" + nome +
                  "','" + cpf + "','" + endereco + "','" + telefone +
                  "','" + valor + "','" + data + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Cliente cadastrado com sucesso!");
      });
      con.end();
    });
  }
  function cadastroVendas(){
    //Cadastro de produtos
    const codigo = parseInt(readline.question("Código: "));
    const descricao = readline.question("Descrição: ");
    const qtde = parseInt(readline.question("Quantidade: "));
    const preco_un = parseFloat(readline.question("Preço venda: " ));
    const data = readline.question("Data de venda(ano-mês-dia): ");
    const subtotal = qtde * preco_un;
    const cliente_id = parseInt(readline.question("Id do cliente: "));
    //
    console.log("Insira seu login e senha a seguir.");
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
      var sql = "INSERT INTO registros_vendas (codigo, descricao, qtde," +
                  " preco_un, subtotal, data, cliente_id) VALUES ('" + codigo +
                  "','" + descricao + "','" + qtde + "','" + preco_un +
                  "','" + subtotal + "','" + data +
                  "','" + cliente_id + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Venda cadastrada com sucesso!");
      });
      con.end();
    });
  }
  function cadastroFornecedores(){
    //Cadastro de fornecedores
    const codigo = parseInt(readline.question("Código do fornecedor: "));
    const nome = readline.question("Nome: ");
    const endereco = readline.question("Endereço: " );
    const telefones = readline.question("Telefone(s): ");
    const cnpj = readline.question("Cnpj sem pontos e barra (. /): ");
    //
    console.log("Insira seu login e senha a seguir.");
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
      var sql = "INSERT INTO fornecedores ( codigo, nome, endereco," +
                  " telefones, cnpj) VALUES ('" + codigo +
                  "','" + nome + "','" + endereco + "','" + telefones +
                  "','" + cnpj + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Fornecedor cadastrado com sucesso!");
      });
      con.end();
    });
  }
  function cadastroDespesas(){
    //Cadastro de despesas
    const descricao = readline.question("Descrição da despesa: ");
    const subtotal = readline.question("Custo: " );
    const data = readline.question("Data: ");
    //
    console.log("Insira seu login e senha a seguir.");
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
      var sql = "INSERT INTO despesas ( descricao, subtotal, data)" +
                  " VALUES ('" + descricao + "','" + subtotal +
                  "','" + data + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Despesa cadastrada com sucesso!");
      });
      con.end();
    });
  }
}
