const _ = require('lodash')
const author = require('./lista_author')
//Selecionando propriedades em array de objetos
let authors = []//inicializamos um array vazio
_.forEach(author, function(o) { authors.push(o.author) })//preenchemos o array
console.log('Dados: ', authors)//imprimindo o array
//Dados:  [ 'Marguerita O. C.', 'Suellen Orph. S. ', 'Emmanuel Fork T.' ]
//Mais exemplos:
