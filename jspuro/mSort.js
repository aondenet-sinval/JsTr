let arr = ['Antonia', 'Antoniana', 'Andréia'];
let arrumarNome = arr.sort();//[ 'Andréia', 'Antonia', 'Antoniana' ]
console.log(arrumarNome);
//String  a partir do array com join
console.log(arrumarNome.join('=> '));
//Imprimindo membros individual:
let i = 0;
while (i < arrumarNome.length) {
  console.log(arr[i]);
  //Retornamos aqui o array ordenado como string
  //Andréia
  //Antonia
  //Antoniana
  i++;
}
