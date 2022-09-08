const arr = [
  [1,2,3,4,5,[4,3,2,1]],
  [3,4,5,8,9,[2,1,5,9]],
  [10,10,10,10,10,[20,20,20,20]]
]
let a = 0;
// Somando a matriz pelo indice
for (var i = 0; i < arr.length; i++) {
  a += arr[i][3];//Selecionado indice 3 contendo: 4, 8, 10
}
console.log(a);//22
let b = 0;
for (var i = 0; i < arr.length; i++) {
  b += arr[i][4];//Selecionado indice 4 contendo: 5, 9, 10
}
console.log(b);//24
let c = 0;
for (var i = 0; i < arr.length; i++) {
  c += arr[i][0];//Selecionado indice 0 contendo: 1, 3, 10
}
console.log(c);//14
console.log(arr[0][5][0]);//4
let d = 0;
for (var i = 0; i < arr.length; i++) {
  d += arr[i][5][0];//Selecionado indice 0 do array mais interno contendo: 4, 2, 20
}
console.log(d);//26
