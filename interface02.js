function imprimirMesa(detalhe) {
    console.log(detalhe.descricao);
}
var detalhe = { altura: 1, descricao: "mesa altura 1" };
imprimirMesa(detalhe);
imprimirMesa(detalhe.altura);
