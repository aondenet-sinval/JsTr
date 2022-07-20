//Algoritmo:
//Pesquisar a fruta abacate e imprimir as frutas posteriores
let frutas = ['amora', 'uva', 'carambola',
'abacate', 'laranja', 'banana'];
//pegando o indice da fruta com indexOf
let retorno = frutas.indexOf('abacate');
//atribuindo o valor do indice à variável i
let i = retorno;
//Imprimindo as frutas posteriores
while (i < frutas.length) {
  console.log(frutas[i]);
  i++;
}
