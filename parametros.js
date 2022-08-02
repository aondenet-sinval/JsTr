let retornar = function(a,b,dividir){
  //Prevenindo erro caso a função seja
  //chamada sem parametros
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    //Caso não seja number ou não exista parametros
    //a função não faz nada nem retorna erro
    console.log(a + b);
  }
  //Verificando se o terceiro parametro é uma função
  if (typeof(dividir)==='function') {
    dividir(a,b);
  }
}
let dividir = function (a,b){
  console.log(a/b);
}
retornar('e',3);
