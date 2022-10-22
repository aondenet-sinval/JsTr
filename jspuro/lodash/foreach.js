const _ = require('lodash')
const lista = require('./lista')
//Selecionando propriedades em array de objetos
let authors = []//inicializamos um array vazio
_.forEach(lista, function(o) { authors.push(o.author) })//preenchemos o array
console.log('Dados: ', authors)//imprimindo o array
//Dados:  [ 'Marguerita O. C.', 'Suellen Orph. S. ', 'Emmanuel Fork T.' ]
