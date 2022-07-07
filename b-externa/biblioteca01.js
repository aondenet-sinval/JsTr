"use strict";
exports.__esModule = true;
exports.retornarAlunos = void 0;
var biblioteca02_js_1 = require("./biblioteca02.js"); //Resolvendo conflito
var allRetornarAlunos = require("./biblioteca02.js");
function retornarAlunos(nome) {
    console.log("Mensagem do m\u00F3dulo biblioteca01 ".concat(nome));
}
exports.retornarAlunos = retornarAlunos;
retornarAlunos('Adalberto');
allRetornarAlunos.retornarAlunos('aluno Tob');
(0, biblioteca02_js_1.retornarAlunos)('Adalberto');
