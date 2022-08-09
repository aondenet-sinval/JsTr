//Declaração do tipo generico any com garantias do tipo
function pegarArray(valores) {
    return new Array().concat(valores);
}
//Declarando as variáveis com diferentes tipos GARANTIDOS
var nomes = pegarArray(['Nelsom', 20]);
var numeros = pegarArray([12, 'Flavia']);
console.log(nomes); //[ 'Nelsom', 'Roberto', 'Ana' ]
console.log(numeros); //[ 12, 4, 5, 20 ]
nomes.push('Joana');
numeros.push(80);
console.log(nomes); //[ 'Nelsom', 'Roberto', 'Ana', 'Joana' ]
console.log(numeros); //[ 12, 4, 5, 20, 55 ]
