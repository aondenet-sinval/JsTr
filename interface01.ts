//criando a interface
interface Pessoa{
    nome: string;
    sobrenome?: string;
    idade: number
};
//implementando
let homem: Pessoa = {
    nome: "Sinval";
    //sobrenome: "Gomes dos Santos",
    idade: 52;
};
console.log(homem.nome + " "+ homem.sobrenome + " " + homem.idade);

function selecionarIdade(selec: Pessoa) {
  if (selec.idade >= 30) {
    return selec.idade + ' é uma idade maior!';
  }else{
    return 'Essa idade não corresponde';
  }
};
console.log(selecionarIdade({nome: 'Sinval', sobrenome:'G. dos Santos', idade: 35}));
