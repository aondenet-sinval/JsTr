var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Genéricos com tipos e classes personalizados:
var Carro = /** @class */ (function () {
    function Carro() {
        this.tipo = 'Generico';
        this.portas = 4;
    }
    return Carro;
}());
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipo = 'Carro Eletrico';
        _this.portas = 4;
        return _this;
    }
    return CarroEletrico;
}(Carro));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipo = 'Truck';
        _this.portas = 2;
        return _this;
    }
    return Truck;
}(Carro));
function aceleracao(carro) {
    console.log("As ".concat(carro.portas, " portas do ").concat(carro.tipo, " est\u00E3o fechadas."));
    console.log("O ".concat(carro.tipo, " agora est\u00E1 acelerado."));
    return carro;
}
var carEletrico = new CarroEletrico;
aceleracao(carEletrico);
var carTruck = new Truck;
aceleracao(carTruck);
// As 4 portas do Carro Eletrico estão fechadas.
// O Carro Eletrico agora está acelerado.
// As 2 portas do Truck estão fechadas.
// O Truck agora está acelerado.
