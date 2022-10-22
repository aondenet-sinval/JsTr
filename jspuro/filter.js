var produtos = [
    {id: 1, descricao: "Smartphone",
    categoria: ["Eletrônico", "Acessórios", "Embalagens"]},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
var produtosEletrodomestico = produtos.filter(produto => produto.categoria === "Eletrodoméstico");
produtosEletrodomestico.forEach(produto => {
    console.log(produto);
});
let newProd;//Definição/inicialização no escopo global
produtosEletrodomestico.forEach(produto => {
    console.log('Descricao: ', produto.descricao);
    newProd = produto;//passagem de valor para a variável global
});
//Definição global sendo aplicada para printar o resultado
console.log('escopo', newProd.categoria);//
