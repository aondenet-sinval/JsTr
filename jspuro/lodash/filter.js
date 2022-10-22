const _ = require('lodash')
const author = require('./lista_author')
//_.filter exemplos
//criando array de quantidades de blogs
const maisBlogs = []
_.filter(author, function(o){ maisBlogs.push(o.blogs)})//preenchendo array
// Definindo o de valor maior
const maior = _.max(maisBlogs)
//Selecionando o author que mais publicou
const result = _.filter(lista, { blogs: maior })
console.log('author que mais publicou: ', result)
//printando resultado
// author que mais publicou:  [
//   {
//     author: 'Emmanuel Fork T.',
//     blogs: 29,
//     id: '6352dff97fac96bf4d4e4426'
//   }
// ]
//Se necessário pegar dados individuais do author use _.forEach
