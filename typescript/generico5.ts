//Usando genérico com proteção de tipos typeof
type TipoValido = string | number;//Definindo tupla

function soma<Tipo extends TipoValido, OutroTipo>(valor1: Tipo, valor2: OutroTipo){
  let resultado: TipoValido = '';//Erro de build
  let tipoOk: string = typeof valor1;
  if (valor1 === 'number') {
    resultado = valor1 + valor1;
  } else if(valor1 === 'string'){
    resultado = valor1 + valor1;
  }
  console.log(`O valor1 é ${valor1} a função retornou ${tipoOk} e o valor2 é ${valor2}.`);
  return resultado;
}

let retornaNumero = soma<number,string>(30,' beleza');
let retornaString = soma<string, string>(35,' bom');
let retornaBooleanoFalse = soma<boolean, string>(false,'alô');//Erro em tempo de execução (runtime)
let retornaBooleano = soma<char, string>('m','alô');//Erro em tempo de execução (runtime)
