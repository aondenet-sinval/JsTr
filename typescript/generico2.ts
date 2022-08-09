//Declaração do tipo generico any com garantias do tipo
function pegarArray<Tipo>(valores: any[]):any[] {
  return new Array().concat(valores);
}
//Declarando as variáveis com diferentes tipos
let nomes = pegarArray<string>(['Nelsom','Roberto','Ana']);
let numeros = pegarArray<number>([12,4,5,20]);
console.log(nomes);//[ 'Nelsom', 'Roberto', 'Ana' ]
console.log(numeros);//[ 12, 4, 5, 20 ]

nomes.push('Joana');
numeros.push(80);

console.log(nomes);//[ 'Nelsom', 'Roberto', 'Ana', 'Joana' ]
console.log(numeros);//[ 12, 4, 5, 20, 55 ]
