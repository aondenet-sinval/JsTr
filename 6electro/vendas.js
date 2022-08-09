const electron = require('electron');
const mysql = (<any>window).require('mysql2');

  function cadastroVendas(){
    //Cadastro de produtos
    const codigo = document.querySelector("#codigo").value;
    const nome = document.querySelector("#nome").value;
    const descricao = document.querySelector("#descricao").value;
    const qtde =  document.querySelector("#qtde").value;
    const preco_un =  document.querySelector("#preco_un").value;
    const subtotal =  qtde * preco_un;
    //Dados de conexão
    console.log(subtotal);
    let usuario =  document.querySelector("#usuario").value;
    let senha =  document.querySelector("#senha").value;
    let con = mysql.createConnection({
      host: "localhost",
      user: usuario,
      password: senha,
      database: "electron"
    });
    con.connect(function(err) {
      if (err) throw err;
      //create
      var sql = "INSERT INTO vendas (codigo, nome, descricao, qtde," +
                  " preco_un, subtotal) VALUES ('" + codigo + "','" + nome +
                  "','" + descricao + "','" + qtde +
                  "','" + preco_un + "','" + subtotal + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        alert("Venda cadastrada com sucesso!");
      });
      con.end();
    });
  }
