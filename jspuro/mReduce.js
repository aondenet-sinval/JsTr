//algoritmo:
//Somar todos os valores do array
let numeros = [1,4,6,8,12,90];
let soma = numeros.reduce((a,b) => {return a+b});
console.log('A soma dos valores é: ' + soma);
//Retornar o produto
let numerosProduto = [2,3,4,6];
let produto = numerosProduto.reduce((a,b) => {return a*b});
console.log('O produto é: ' + produto);
//Retornar o maior valor
let numerosMax = [1,4,6,8,12,90];
let maximo = numerosMax.reduce((a,b) => {return a > b ? a : b});
console.log('O maior valor é: ' + maximo);
