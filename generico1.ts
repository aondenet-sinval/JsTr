//Declaração do tipo generico any
function pegarArray(valores: any[]):any[] {
  return new Array().concat(valores);
}
//Declarando as variáveis com diferentes tipos
let nomes = pegarArray(['Nelsom','Roberto','Ana']);
let numeros = pegarArray([12,4,5,20]);
console.log(nomes);//[ 'Nelsom', 'Roberto', 'Ana' ]
console.log(numeros);//[ 12, 4, 5, 20 ]

nomes.push('Joana');
numeros.push(55);

console.log(nomes);//[ 'Nelsom', 'Roberto', 'Ana', 'Joana' ]
console.log(numeros);//[ 12, 4, 5, 20, 55 ]
