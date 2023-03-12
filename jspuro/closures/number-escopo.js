var a = 10

const valorRetornado = () => {
  console.log(a)//retorna 10
  a = 21//valor protegido dentro da função
  function novoValor(){ return a }//valor definido pelo escopo
  const valorB = novoValor()
  return valorB
}
const retorno = valorRetornado()
console.log('retorno é ', retorno)//retorna o valor protegido: 21
