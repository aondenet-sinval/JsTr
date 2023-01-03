const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/async'
const Note = require('./note')
mongoose.connect(url)
//Search notes
// let arr = []
// //Teste retorno com async
// const Search = async () => {
//   const response = await Note.find( {} )
//    response.forEach(note => {
//         // console.log(note)//true
//         arr.push(note)
//       } )
//   console.log('response await: ', arr)//true
//   mongoose.connection.close()
// }
// Search()
// console.log('response await scope: ', arr)//false
//Teste retorno com async corrigido
const Retorno = async ( ) => {
    let arr = []//Definindo array fora do escopo
    const Search = async () => {
      const response = await Note.find( {} )
      // response.forEach(note => {
      //         // console.log(note)//true
      //         arr.push(note)
      //       } )
      // console.log('response await scope: ', arr)
      mongoose.connection.close()
      return response
    }
const result = await Search().then(result => {
      return result//lançando result para fora do escopo
  })
  console.log('response await scope: ', result)
  //recuperando/usando result fora do escopo
}
Retorno()
