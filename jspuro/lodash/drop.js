const _ = require('lodash')
let author = require('./lista_author')
//Recortando array de objetos
const corte = _.drop(author, 1)
console.log('lista ', corte)
// lista  [
//   {
//     author: 'Suellen Orph. S. ',
//     blogs: 2,
//     id: '6352dfce9e0b107041018333'
//   },
//   {
//     author: 'Emmanuel Fork T.',
//     blogs: 29,
//     id: '6352dff97fac96bf4d4e4426'
//   }
// ]
