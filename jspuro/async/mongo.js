const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/async'
const Note = require('./note')

mongoose.connect(url)

//Criando notas para testar
// const note = new Note({
//   content: 'Development Sequelize Mysql',
//   date: new Date(),
//   important: true,
// })
//
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })
//Search notes
let arr = []
//Teste retorno com async
const Search = async () => {
  const response = await Note.find( {} )
   response.forEach(note => {
        // console.log(note)//true
        arr.push(note)
      } )
  console.log('response await: ', arr)//true
  mongoose.connection.close()
}
Search()
// console.log('response await scope: ', arr)//false
//Teste retorno com async
//Teste retorno com then
// Note.find( {} )
//   .then(result => {
//     result.forEach(note => {
//       // console.log(note)
//       arr.push(note)
//     } )
//     mongoose.connection.close()
//   } )
//
// console.log('arr scope ',arr)
//Teste retorno com then
