//estendendo interface
interface Brinquedo{
  decricao:string;
  cor:string;
  preco:number;
}

interface Carrinho extends Brinquedo{
  altura:number;
  tipo?:string;
}

let Carrinho: Brinquedo = {
  descricao: 'Carrinho manual',
  cor: 'branco',
  preco: 45.00,
  altura: 10,
  tipo: 'manual'
}
console.log("Detalhes: " + Carrinho.descricao + " " + Carrinho.cor
  + " " + Carrinho.preco  + " "+ Carrinho.altura + " cm " + Carrinho.tipo);
function imprimirResultado(res: Brinquedo) {
  if (res.altura >= 6) {
    return res.altura + ' cm é uma altura ideal!';
  } else {
    return res.altura + ' cm não é uma altura ideal!';
  }
}
console.log(imprimirResultado({altura:3}));
