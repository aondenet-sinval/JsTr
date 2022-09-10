//Iterando em array co forEach que apenas percorre o array
/*
const arNumber = [1,2,3,4,5,6,7,8,9];

arNumber.forEach((valor, indice) => {
    console.log(`${indice}: ${valor}`);
});


const frutas = ['amora','jaca','abacaxi'];
//frutas.pop();//remove do final
//frutas.push("melancia");//Adiciona no final
//frutas.shift();//remove do inicio
frutas.unshift("uva");//adiciona no inicio
frutas.forEach((value, index) => {
    console.log('Frutas: ',`${index}: ${value}`);
});
console.log(frutas);
*/


var numOk = prompt("Digite 1 para multilicação \n2 para divisão:");
//Iterando com map que percorre e gera um novo array
const arNumber = [4,6,8,10];
if(numOk == 1){
//Map executa operações com elementos do array
const mapear = arNumber.map(value => value * 2);
//Realiza a operação acima com map
console.log("MAP: ",mapear[2]);//Retorna operação com esse índice
} if(numOk == 2){
//Map executa operações com elementos do array
const mapear = arNumber.map(value => value / 2);
//Realiza a operação acima com map
console.log("MAP: ",mapear[2]);//Retorna operação com esse índice
}
//Abaixo o array gerado não requer definição de nome
console.log(arNumber.map(value => value / 2));

/*
//Iterando com flat: retorna um novo array concatenando
//De acordo com o depth passado entre paranteses
const idade =[20, 34, [65, 88, [90, 15, [40, 48,[22, 24]]]]];
console.log(idade.flat());//retorna: 20, 34, 65, 88
console.log(idade.flat(1));//retorna: 20, 34, 65, 88
console.log(idade.flat(2));//retorna 20, 34, 65, 88, 90, 15
console.log(idade.flat(3));//retorna: 20, 34, 65, 88, 90, 15, 40, 48
console.log(idade.flat(4));//retorna: 20, 34, 65, 88, 90, 15, 40, 48, 22, 24 
*/
/*
//flatmap retorna um array para cada item de array
const arr = [1,2,3,4];
console.log(arr.flatMap(value => [value * 3]));
//Criando um novo array para cada item retornado
//console.log(arr.flatMap(value => [[value * 3]]));
*/
/*
//keys retorna um Array Iterator que contem a chave para cada 
//elemento do array
const ar = [1,2,3,4];
const arrIterator = ar.keys();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
*/
/*
//values retorna os valores de cada chave 
//elemento do array
const ar = [1,2,3,4];
const arrIterator = ar.values();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
*/
/*
//Entries retorna um conjunto chave/valor
const ar = [1,2,3,4];
const arrIterator = ar.entries();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
*/
/*
//find retorna o primeiro item do array que satisfaz uma condição
const ar = [0, 1,2,3,4];
const first = ar.find(value => value > 2);
console.log(first);
*/
/*
//findIndex retorna o primeiro item do indice do array que satifaz uma condição
const ar = [1,2,3,4];
const first = ar.findIndex(value => value  > 2);
console.log(first);
*/

/*
//filter retorna um array com todos os valores/elementos que satifazem uma condição
const ar = [1,2,3,4];
const first = ar.filter(value => value > 2);
console.log(first);  
*/
/*
//indexOf retorna o primeiro indice em que um elemento pode ser encontrado em um array
const ar = [1,2,3,2,4];
const first = ar.indexOf(2);
console.log(first); 
const ar2 = ['jaca','maçã','melancia','uva','melancia'];
const firstF = ar2.indexOf('uva');
console.log(firstF);  
*/
/*
//lastIndexOf retorna o último indice em que um elemento pode ser encontrado em um array
const ar2 = ['jaca','maçã','melancia','uva','melancia'];
const first = ar2.indexOf('melancia');
const last = ar2.lastIndexOf('melancia');
console.log("Primeiro: ", first, "Ultimo: ", last); 
*/
/*
//includes: verifica se um determinado item está dentro de um array
const ar2 = ['jaca','maçã','melancia','uva','melancia'];
const first = ar2.includes('melancia');
const first2 = ar2.includes('manga');
console.log("Contem: ", first, "Contem: ", first2);
*/
/*
//some verifica se pelo menos um item de um array satisfaz a condição
 const ar = [1,3,3,2,4];
//verificando se é par
const verify = ar.some(value => value % 2 === 0);
console.log(verify);//retorna true
const ar2 = [1,1,3,5,7];
const verify2 = ar2.some(value => value % 2 === 0);
console.log(verify2);//retorna false
*/
/*
const studants = [
    {nome: "Ricardo", nota: 5},
    {nome: "Antonio", nota: 7},
    {nome: "Paulo", nota: 6},
    {nome: "Fernando", nota: 8},
    {nome: "Ana", nota: 9}
];
const verify3 = studants.some(studants => studants.nota > 6);
console.log(verify3);//retorna true pois um aluno possui nota 10 que é maior que 9
//Qual nome do aluno possui nota maior que 10
//Verifica o array de cima para baixo
const verify4 = studants.find(studants => studants.nota > 8);
//console.log(verify4);//ou
console.log(verify4.nome,verify4.nota);//Retorna: nome e nota
*/
/*
//every verifica se todos os itens satisfazem uma condição
const ar = [1,3,3,2,4];
//verificando se é par
const verify = ar.every(valor => valor > 0);
console.log(verify);//retorna true
const verify2 = ar.every(value => value % 2 === 0);
console.log(verify2);//retorna false


//sort ordena os elementos do array
const ar = [1,3,5,2,4];
//verificando se é par
const verify = ar.sort();
console.log(verify);//retorna true
const studants = [
    {nome: "Ricardo", nota: 10},
    {nome: "Antonio", nota: 7},
    {nome: "Paulo", nota: 6},
    {nome: "Fernando", nota: 8},
    {nome: "Ana", nota: 9}
];
const verify2 = studants.sort((current, next) => current.nota - next.nota);
console.log(verify2);//Alunos são retornados de acordo com ordem das notas
*/
/*
//reverse inverte a ordem nos elementos do array
const ar = [1,3,5,2,4];
//verificando se é par
const verify = ar.reverse();
console.log(verify);//retorna true
const studants = [
    {nome: "Ricardo", nota: 10},
    {nome: "Antonio", nota: 7},
    {nome: "Paulo", nota: 6},
    {nome: "Fernando", nota: 8},
    {nome: "Ana", nota: 9}
];
const verify2 = studants.reverse((current, next) => current.nota - next.nota);
console.log(verify2);//Alunos são retornados de acordo com ordem no indice
const studants2 = [
    {nome: "Ricardo", nota: 10},
    {nome: "Antonio", nota: 7},
    {nome: "Paulo", nota: 6},
    {nome: "Fernando", nota: 8},
    {nome: "Ana", nota: 9}
];
const verify3 = studants2.sort((current, next) => current.nota - next.nota);
console.log(verify3);//Alunos são retornados de acordo com ordem das notas
const verify4 = verify3.reverse((current, next) => current.nota - next.nota);
console.log(verify4);//Alunos são retornados em ordem decrescente 
*/
/*
//join juntar todos os elementos de um array separados por um delimitador e retorna uma string
const ar = [1,2,3,4,5];
//pegando cada value e cont=catenando
var strings = ar.join('-');
console.log(strings);//Retorna os número como string 1-2-3-4-5
var tipo = typeof(strings);
console.log(tipo);
var tipo2 = typeof(ar);
console.log(tipo2);
//reduce retorna um novo tipo de dado iterando cada posição de um array
const arr = [1,2,3,4,5];
//pegando cada value e somando
var somas = arr.reduce((total, value) => total += value, 0);
console.log(somas);
*/