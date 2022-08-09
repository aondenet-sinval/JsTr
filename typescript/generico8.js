var processarVenda = /** @class */ (function () {
    function processarVenda(pr, dsc) {
        this.preco = pr;
        this.descricao = dsc;
    }
    processarVenda.prototype.vender = function () {
        console.log(this.descricao);
        return this.preco;
    };
    return processarVenda;
}());
var produto = new processarVenda(10, 'biscoito poca olho');
produto.vender(); //biscoito poca olho
produto.preco = '10'; //Erro de tipo
