"use strict";
exports.__esModule = true;
exports.retornarAlunos = void 0;
function retornarAlunos(nome) {
    var nomeTamanho = getLength(nome);
    console.log("Tamanho do nome do aluno ".concat(nome, " \u00E9 ").concat(nomeTamanho));
}
exports.retornarAlunos = retornarAlunos;
function getLength(mensagem) {
    return mensagem.length;
}
