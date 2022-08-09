var Carrinho = {
    descricao: 'Carrinho manual',
    cor: 'branco',
    preco: 45.00,
    altura: 10,
    tipo: 'manual'
};
console.log("Detalhes: " + Carrinho.descricao + " " + Carrinho.cor
    + " " + Carrinho.preco + " " + Carrinho.altura + " cm " + Carrinho.tipo);
function imprimirResultado(res) {
    if (res.altura >= 6) {
        return res.altura + ' cm é uma altura ideal!';
    }
    else {
        return res.altura + ' cm não é uma altura ideal!';
    }
}
console.log(imprimirResultado({ altura: 3 }));
