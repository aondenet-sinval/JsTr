function soma(valor1, valor2) {
    var resultado = valor1 + valor1; //Erro de build
    console.log(valor2);
    return resultado;
}
var retornaNumero = soma(30, ' beleza');
var retornaString = soma(35, ' bom');
var retornaBooleanoFalse = soma(false, 'alô'); //Erro em tempo de execução (runtime)
var retornaBooleano = soma('m', 'alô'); //Erro em tempo de execução (runtime)
