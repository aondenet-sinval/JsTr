//Exemplo de uso de expressões regulares
let str = "Rua Dom Pedro 2"
let letter = "Dom"
let re = new RegExp(letter);
if ((str.search(re)) >= 0) {
  console.log('passou');//imprime esse valor
}else{
  console.log('não passou');
}


letter = "dom"
re = new RegExp(letter);
if ((str.search(re)) >= 0) {
  console.log('passou');
}else{
  console.log('não passou');//imprime esse valor
}
//com objetos
const pessoas = [
  { nome: "Adalberto", idade: 30 },
  { nome: "Wilsom", idade: 29 },
  { nome: "Gilberto", idade: 45 },
  { nome: "Claudiane", idade: 21 },
  { nome: "Alexandre", idade: 19 }
]
letter = "berto"
re = new RegExp(letter);
var pessoasSelecionadas = pessoas.filter(pessoa => pessoa.nome.search(re) >= 0);
pessoasSelecionadas.forEach(pessoa => {
    console.log(pessoa);
});
