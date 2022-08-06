const readline = require('readline-sync');
const Venda = require('./venda');
const Codigo = require('./codigo'); 

Codigo.hasMany(Venda,{
  foreignKey: 'codigo'
});
const opcao = readline.question("Selecione a opção: \n" +
                                  "1 - Produtos. \n" +
                                  "2 - Clientes. \n" +
                                  "3 - Caixa. \n"  +
                                  "4 - Código único de produtos.");

switch (opcao) {
  case '1':
      (async () => {
          const database = require('./db');
          const Produto = require('./produto');

          console.log("Atenção selecione uma opção a seguir. \n");

          const opcao = parseInt(readline
            .question("Para criar um produto tecle 1." +
                        "\n Para pesquisar tecle 2." +
                        "\n Para atualizar tecle 3." +
                        "\n E para apagar um produto tecle 4."));

          try {
              const resultado = await database.sync();
              console.log(resultado);
              //CRUD
              switch (opcao) {
                case 1:
                  //create
                  let codigoProduto = parseInt(readline
                    .question("Insira o código do produto: "));
                  let nomeProduto = readline
                    .question("Insira o nome do produto: ");
                  let precoProduto =  parseFloat(readline
                    .question("Insira o preço do produto: "));
                  let descricaoProduto = readline
                  .question("Insira a descrição do produto: ");
                  const resultadoCreate = await Produto.create({
                    codigo: codigoProduto,
                    nome: nomeProduto,
                    preco: precoProduto,
                    descricao: descricaoProduto
                  });
                  console.log(resultadoCreate);
                  //O método acima é simples para criar em massa
                  //podemos usar bulkCreate
                  break;
                case 2:
                  //read
                  //Passando raw: true para receber uma resposta simples
                  const produtos = await Produto.findAll( { raw: true });
                  console.log(produtos);
                  break;
                case 3:
                  //update
                  //const produto = await Produto.findByPk(1);
                  //console.log(produto);
                  //produto.nome = "Vassoura";
                  //const resultadoSave = await produto.save();
                  //console.log(resultadoSave);
                  //outra forma de update mais simples
                  await Produto.update({ descricao: "Bombom garoto com " +
                                    "recheio de chocolate e caramelo" }, {
                      where: {
                        descricao: "bombom garoto com recheio de chocolate"
                      }
                    });
                case 4:
                  //Delete
                  const produtoDel = await Produto.findByPk(1);
                  produtoDel.destroy();
                default:
                  console.log("Você não escolheu a opção cadastrada. " +
                                "\n Por isso foi desconectado");
              }


          } catch (error) {
              console.log(error);
          }
      })();
    break;
  case '2':
    (async () => {
        const database = require('./db');
        const Cliente = require('./cliente');

        console.log("Atenção selecione uma opção a seguir. \n");

        const opcao = parseInt(readline
          .question("Para cadastrar um cliente tecle 1." +
                      "\n Para pesquisar tecle 2." +
                      "\n Para atualizar tecle 3." +
                      "\n E para apagar um cliente tecle 4."));

        try {
            const resultado = await database.sync();
            console.log(resultado);
            //CRUD
            switch (opcao) {
              case 1:
                //create
                let cpfCliente = readline
                  .question("Insira o cpf do cliente: ");
                let nomeCliente = readline
                  .question("Insira o nome do cliente: ");
                let debitoCliente =  parseFloat(readline
                  .question("Total da compra do cliente: "));
                let descricaoCliente = readline
                .question("Insira a descrição da compra: ");
                const resultadoCreate = await Cliente.create({
                  cpf: cpfCliente,
                  nome: nomeCliente,
                  debito: debitoCliente,
                  descricao: descricaoCliente
                });
                console.log(resultadoCreate);
                break;
              case 2:
                //read
                const clientes = await Cliente.findAll();
                console.log(clientes);
                break;
              case 3:
                //update
                const cliente = await Cliente.findByPk(1);
                //console.log(produto);
                cliente.nome = "Teste";
                const resultadoSave = await cliente.save();
                console.log(resultadoSave);
              case 4:
                //Delete
                const clienteDel = await Cliente.findByPk(1);
                clienteDel.destroy();
              default:
                console.log("Você não escolheu a opção cadastrada. " +
                              "\n Por isso foi desconectado");
            }


        } catch (error) {
            console.log(error);
        }
    })();
  case '3':
      (async () => {
          const database = require('./db');
          const Venda = require('./venda');

          console.log("Atenção selecione uma opção a seguir. \n");

          const opcao = parseInt(readline
            .question("Para cadastrar vendas tecle 1." +
                        "\n Para pesquisar tecle 2." +
                        "\n Para atualizar tecle 3." +
                        "\n E para apagar tecle 4."));

          try {
              const resultado = await database.sync();
              console.log(resultado);
              //CRUD
              switch (opcao) {
                case 1:
                  //create
                  let codigoProduto = parseInt(readline
                    .question("Insira o código do produto: "));
                  let nomeProduto = readline
                    .question("Insira o nome do produto: ");
                  let descricaoProduto =  readline
                    .question("Descrição do produto: ");
                  let precoUnitario = parseFloat(readline
                  .question("Preço unitário: "));
                  let qtdeProduto = parseInt(readline
                    .question("Insira a quantidade: "));
                  let subtotalProduto = precoUnitario * qtdeProduto;
                  const resultadoCreate = await Venda.create({
                    codigo: codigoProduto,
                    nome: nomeProduto,
                    descricao: descricaoProduto,
                    preco_un: precoUnitario,
                    qtde: qtdeProduto,
                    subtotal: subtotalProduto
                  });
                  console.log(resultadoCreate);
                  break;
                case 2:
                  //read
                  const vendas = await Venda.findAll();
                  console.log(vendas);
                  break;
                case 3:
                  //update
                  const venda = await Venda.findByPk(1);
                  //console.log(produto);
                  venda.nome = "Teste";
                  const resultadoSave = await venda.save();
                  console.log(resultadoSave);
                case 4:
                  //Delete
                  const vendaDel = await Venda.findByPk(1);
                  vendaDel.destroy();
                default:
                  console.log("Você não escolheu a opção cadastrada. " +
                                "\n Por isso foi desconectado");
              }


          } catch (error) {
              console.log(error);
          }
      })();
  case '4':
        (async () => {
            const database = require('./db');
            const Codigo = require('./codigo');

            console.log("Atenção selecione uma opção a seguir. \n");

            const opcao = parseInt(readline
              .question("Para cadastrar um código tecle 1." +
                          "\n Para pesquisar tecle 2." +
                          "\n Para atualizar tecle 3." +
                          "\n E para apagar  4."));

            try {
                const resultado = await database.sync();
                console.log(resultado);
                //CRUD
                switch (opcao) {
                  case 1:
                    //create
                    let codigoProduto =  parseInt(readline
                      .question("Defina o código único de produto: "));
                    const resultadoCreate = await Codigo.create({
                      codigo: codigoProduto
                    });
                    console.log(resultadoCreate);
                    break;
                  case 2:
                    //read
                    const codigos = await Codigo.findAll();
                    console.log(codigos);
                    break;
                  case 3:
                    //update
                    //...
                  case 4:
                    //Delete
                    const codigoDel = await Codigo.findByPk(1);
                    codigoDel.destroy();
                  default:
                    console.log("Você não escolheu a opção cadastrada. " +
                                  "\n Por isso foi desconectado");
                }


            } catch (error) {
                console.log(error);
            }
        })();
  default:
    console.log("Nenhuma opção selecionada.");

}
