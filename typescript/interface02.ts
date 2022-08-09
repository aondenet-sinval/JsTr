interface Mesa{
  descricao: string;
}
function imprimirMesa(detalhe:Mesa) {
  console.log(detalhe.descricao);
}
let detalhe = {altura: 1, descricao:"mesa altura 1"};
imprimirMesa(detalhe);//mesa altura 1
imprimirMesa(detalhe.altura);//undefined
