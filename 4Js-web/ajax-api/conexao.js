conectarBanco(usuario,senha,codigo,nome,descricao,qtde,preco_un,subtotal);
function conectarBanco(usuario,senha,codigo,nome,descricao,qtde,preco_un,subtotal){
  const mysql = require('mysql2');
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
