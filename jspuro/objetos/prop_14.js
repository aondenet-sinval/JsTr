//Construir um palindromo retornar os dados
//incompatíveis no caso de falha.
function troca(a){
let b = a.length - 1;
let controle = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == a[b]) {
      a[i];
    }else{
      console.log('Valores incompatíveis: ' + a[i] + ' ' + a[b]);
      //Ladeando os valores incompatíveis
      controle = true;//Controle de exibição
    }
    b--;
};
controle ? console.log('Não é palíndromo.') : //Negativo
  console.log('Beleza: é palíndromo!');//Positivo
};
troca('1p121s1');//Defina a string aqui
