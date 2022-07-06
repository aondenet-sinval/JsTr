//Usando genérico para prevenção de erros em runtime
type TipoValido = string | number;//Definindo tupla

function soma<Tipo extends TipoValido, OutroTipo>(valor1: Tipo, valor2: OutroTipo){
  let resultado: Tipo = valor1 + valor1;//Erro de build
  console.log(valor2);
  return resultado;
}

let retornaNumero = soma<number,string>(30,' beleza');
let retornaString = soma<string, string>(35,' bom');
let retornaBooleanoFalse = soma<boolean, string>(false,'alô');//Erro em tempo de execução (runtime)
let retornaBooleano = soma<char, string>('m','alô');//Erro em tempo de execução (runtime)
