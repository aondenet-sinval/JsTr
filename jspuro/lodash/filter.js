const _ = require('lodash')
const lista = require('./lista')
//_.filter exemplos
//criando array de quantidades de blogs
const maisBlogs = []
_.filter(lista, function(o){ maisBlogs.push(o.blogs)})//preenchendo array
console.log('maisBlogs ', maisBlogs)
// Definindo o de valor maior
const maior = _.max(maisBlogs)
console.log('maior ', maior);
//Selecionando o author que mais publicou
const result = _.filter(lista, { blogs: maior })
console.log('author que mais publicou: ', result)
