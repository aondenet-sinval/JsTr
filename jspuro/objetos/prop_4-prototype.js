//Verificar a propriedade existente
//antes da exibição com o operador in ou ==
let frutas = {
  nome: 'laranja',
  variedade: 'lima',
  peso: 'Kg',
  regiao: 'SC',
  preco: {
    kg: '12.50',
    unidade: '3.00'
  }
}
if ("preco" in frutas) {
  let preco = Number(frutas.preco.kg);//verdadeiro
  console.log('Preço: ' + preco);
}
//criando uma propriedade undefined
Object.prototype.qtde = 4;
if ("qtde" in frutas) {
  let qtde = Number(frutas.qtde);
  console.log('Qtde 1: ' + qtde);//NaN
}

if (frutas.qtde == undefined) {
  console.log('Qtde 2: ' + frutas.qtde);//falso
}

delete frutas.qtde;//Não destroi a propriedade
if ("qtde" in frutas) {
  let qtde = Number(frutas.qtde);
  console.log('Qtde 3: ' + qtde);//true
}

if (frutas.qtde == undefined) {
  console.log('Qtde 4: ' + frutas.qtde);//Falso
}
delete Object.prototype.qtde;//Destroi pelo prototype
if ("qtde" in frutas) {
  let qtde = Number(frutas.qtde);
  console.log('Qtde 5: ' + qtde);//falso
}
