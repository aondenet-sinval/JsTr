//Verificar o atributo prototipo
let frutas = {
  nome: 'laranja',
  variedade: 'lima',
  peso: 'Kg',
  regiao: 'SC',
}
let novoPreco = (frutas)=>{};

if (frutas.isPrototypeOf(novoPreco)) {
  novoPreco.peso = 'g';
  console.log('opt 1: ' + novoPreco.peso);
}
let nPreco = Object.create(frutas);//false

if (frutas.isPrototypeOf(nPreco)) {
  nPreco.peso = 'g';
  console.log('opt 2: ' + nPreco.peso);//true
}
