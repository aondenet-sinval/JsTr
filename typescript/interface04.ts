//Assinatura de indices:
interface nomeArray{
  [indice: number]: string;
}
let nomesFemininos: nomeArray;
nomesFemininos = ['Ana','Maria','Renata'];
let nomes: string = nomesFemininos[0];
console.log(nomes);//Ana
//Percorrendo o array
let indice = 0;
while (indice < 3) {
  let percorrerNomes = nomesFemininos[indice];
  console.log(percorrerNomes);//Ana Maria Renata
  ++indice;
};
