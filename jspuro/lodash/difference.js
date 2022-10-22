const _ = require('lodash')
const pessoas = require('./lista_pessoas')
const nomes =  require('./lista_nomes')
const a = [ 'a', 'b', 'c', 'd' ]
const b = [ 'a', 'b', 'd', 'e' ]
const c = [ 'a', 'b', 's', 't' ]
//_.difference retorna um novo array com os valores filtrados
//compara o primeiro array passado com o segundo
//criando um novo array com os items do primeiro inexistente no segundo
const result_a = _.difference(a, b)// => [ c ]
console.log('result_a: ', result_a)
const result_b = _.difference(b, c)// => [ 'd', 'e' ]
console.log('result_b: ', result_b)
const result_c = _.difference(c, b)// => [ 's', 't' ]
console.log('result_c: ', result_c)
//Comparando array de objetos
const result_nomes = _.difference(pessoas, nomes)// => [ c ]
console.log('result_nomes: ', result_nomes)
