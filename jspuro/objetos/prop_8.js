//Configurando atributos de propriedades
let somas = {
  a: 1,
  b: 2,
  get soma(){
    let resulta = this.a + this.b;
    return resulta; },
}

console.log(Object.getOwnPropertyDescriptor(somas, "a"));
//{ value: 1, writable: true, enumerable: true, configurable: true }
//Vamos alterar o atributo da propriedade a acima:
Object.defineProperty(somas, "a", { writable: false });
//Verificando alteração
console.log(Object.getOwnPropertyDescriptor(somas, "a"));
//{ value: 1, writable: false, enumerable: true, configurable: true }
//Veja acima que ela ainda é configurável e podemos
//por isso alterar seu valor:
Object.defineProperty(somas, "a", { value: 20 });
console.log(somas.soma);//22
console.log(Object.getOwnPropertyDescriptor(somas, "a"));
//Agora vamos alterar a propriedade b
//para que ela seja um propriedade de acesso
Object.defineProperty(somas, "b", { get: function() { return 0; } });
console.log(Object.getOwnPropertyDescriptor(somas, "b"));
/*
{ value: 20, writable: false, enumerable: true, configurable: true }
{
  get: [Function: get],
  set: undefined,
  enumerable: true,
  configurable: true
}
*/
