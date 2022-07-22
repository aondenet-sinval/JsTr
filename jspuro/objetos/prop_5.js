//Tornar a propriedade enumerável
//para percorrer com for
//Imprimir as propriedades e valores
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

frutas.propertyIsEnumerable("toString");
for(p in frutas){
  if(p != Object)
  console.log(p + ': ' + frutas[p]);
}
/*
nome: laranja
variedade: lima
peso: Kg
regiao: SC
preco: [object Object]
*/
if(Object){
  for(pp in frutas[p]){
    console.log('Preço: ' + pp + ' ' + frutas[p][pp]);
  }
}
/*
Preço: kg 12.50
Preço: unidade 3.00
*/
