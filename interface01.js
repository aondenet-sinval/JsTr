;
//implementando
var homem = {
    nome: "Sinval",
    //sobrenome: "Gomes dos Santos",
    idade: 52
};
console.log(homem.nome + " " + homem.sobrenome + " " + homem.idade);
function selecionarIdade(selec) {
    if (selec.idade >= 30) {
        return selec.idade + ' é uma idade maior!';
    }
    else {
        return 'Essa idade não corresponde';
    }
}
;
console.log(selecionarIdade({ nome: 'Sinval', sobrenome: 'G. dos Santos', idade: 35 }));
