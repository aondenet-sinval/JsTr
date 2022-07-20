//Algoritmo:
//Pesquisar a fruta abacate e imprimir as frutas anteriores
//exceto amora
let frutas = ['amora', 'uva', 'carambola',
'abacate', 'laranja', 'banana'];
//pegando o indice da fruta com lastIndexOf
let i = frutas.lastIndexOf('abacate');
let a = frutas.indexOf('amora');
//Imprimindo as frutas posteriores
while (i > a ) {
  console.log(frutas[i]);
  i--;
}
