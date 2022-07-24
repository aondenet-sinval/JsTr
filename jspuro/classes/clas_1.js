function Faixa(a, b){
  this.a = a;
  this.b = b;
};

  Faixa.prototype = {
    contem: (x)=> { return this.a <= x && x <= this.b; },
    foreach: function(f) {
      while (this.a <= this.b) {
        f(this.a);
        this.a++;
      }
    /*
    for(var x = Math.ceil(this.a); x <= this.b; x++) f(x);
    */
    },
    toString: function() { return "(" + this.a + "..." + this.b + ")"; }
  }

var r = new Faixa(1,4);// Cria um objeto Faixa
r.contem(5);// => verdadeiro: 2 está no intervalo
r.foreach(console.log);// Imprime 1 2 3
