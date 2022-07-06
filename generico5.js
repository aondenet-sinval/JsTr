function soma(valor1, valor2) {
    var resultado = ''; //Erro de build
    var tipoOk = typeof valor1;
    if (valor1 === 'number') {
        resultado = valor1 + valor1;
    }
    else if (valor1 === 'string') {
        resultado = valor1 + valor1;
    }
    console.log("O valor1 \u00E9 ".concat(valor1, " a fun\u00E7\u00E3o retornou ").concat(tipoOk, " e o valor2 \u00E9 ").concat(valor2, "."));
    return resultado;
}
var retornaNumero = soma(30, ' beleza');
var retornaString = soma(35, ' bom');
var retornaBooleanoFalse = soma(false, 'alô'); //Erro em tempo de execução (runtime)
var retornaBooleano = soma('m', 'alô'); //Erro em tempo de execução (runtime)
