//Criar novas propriedades e atributos:
let fogo = {};
//objeto vazio sem propriedades definidas
Object.defineProperty(fogo, "x", { value: 'quente',
    writable: true, configurable: true});
//Definindo uma proprieade com atributos
console.log(Object.getOwnPropertyDescriptor(fogo, "x"));
/*
{
  value: 'quente',
  writable: true,
  enumerable: false,
  configurable: true
}
*/
//Criar um novo objeto e difinir todos os atributos
let alunos = Object.defineProperties({}, {
    nome: { value: 'Adriana', writable: true, enumerable:true,      configurable:true },
    nota: { enumerable:false, configurable:true}
});
//definindo varias propriedades e atributos.
console.log(Object.getOwnPropertyDescriptor(alunos, "nome"));
/*
{
  value: 'Adriana',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
console.log(Object.getOwnPropertyDescriptor(alunos, "nota"));
/*
{
  value: undefined,
  writable: false,
  enumerable: false,
  configurable: true
}
*/
