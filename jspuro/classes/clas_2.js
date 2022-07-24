//Criar a classe calculadora e verificar a identidade
//as instancias dos objetos
//Definição da função construtora
function Calculadora(a,b){
  this.a = a;
  this.b = b;
}
//Definição das propriedades e métodos da construtora
Calculadora.prototype = {
    somar: function(p){
        return p(this.a + this.b);
    },
    subtrair:
      function(p){
        return p((this.a - this.b) > 0 ?
                    (this.a - this.b) : 'Números incorretos?');
    },
  multiplicar: function(p){
      return p(this.a * this.b);
  },
  dividir: function(p){
      return p(this.a / this.b);
    },
}

let calcular = new Calculadora(16,8);
//Acessando as propriedades e seus métodos definidos
calcular.somar(console.log);
calcular.subtrair(console.log);
calcular.multiplicar(console.log);
calcular.dividir(console.log);

let calculo = new Calculadora(8,2);

calculo.somar(console.log);
//Verificando a identidade da classe:
console.log(calcular instanceof Calculadora ? 'sim' : 'não');
console.log(calculo instanceof Calculadora ? 'sim' : 'não');
