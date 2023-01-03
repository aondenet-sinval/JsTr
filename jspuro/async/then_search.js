const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/async'
const Note = require('./note')
mongoose.connect(url)
//Teste retorno com then
let arr = []
Note.find( {} )
  .then(result => {
    result.forEach(note => {
      console.log(note)
      arr.push(note)
    } )
    arr.push(result)
    mongoose.connection.close()
  } )

console.log('arr scope ',arr)//true
