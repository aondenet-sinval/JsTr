//Controle de acesso com get = somente leitura
let somas = {
  a: 1,
  b: 2,
  get soma(){
    let resulta = this.a + this.b;
    return resulta; },
}
somas.soma = 30;//Somente leitura
console.log(somas.soma);//Resultado: 3
let heranca = (somas)=>{};
//Verificação da propriedade herdada:
console.log('Prop heranca: ' + heranca.soma);//undefined
//existe mas encontra-se undefined
somas.a = 15;
somas.b = 20;
console.log('Alterando os valores da propriedade: ' +
              somas.soma);//35
