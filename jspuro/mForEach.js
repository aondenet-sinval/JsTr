//algoritmo:
//Iterar por todos os membros de uma array.
let qualidades = ['amor', 'paz', 'bondade', 'benignidade', 'fé',
'paciência', 'alegria'];



const retorno = (valor)=>{
  console.log('retorno: ', valor);
}
qualidades.forEach((item, i) => {
  // console.log(item);
  retorno(item);
});
retorno();
