let tiposDados = "String, Boolean"

const novoTipo = () => {
  tiposDados = "Number, Object"
  function newTipo(){return tiposDados}
  const novoTipo = newTipo()
  return novoTipo
}

const tipos = novoTipo()

console.log('os tipos definidos são: ',tipos)//retorna: Number, Object
