//Usando Classe genérica sem implementação de interface
var processarVenda = /** @class */ (function () {
    function processarVenda(preco, descricao) {
        this._preco = preco;
        this._descricao = descricao;
    }
    processarVenda.prototype.getPrecoDescricao = function () {
        console.log(this._descricao);
        return this._preco;
    };
    return processarVenda;
}());
//Declaração de variável com definição de tipo e valor
var vender = new processarVenda(80.00, 'Calça Jeans feminina');
vender.getPrecoDescricao();
